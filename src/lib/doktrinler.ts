import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const KLASOR = path.join(process.cwd(), "content", "doktrinler");

/**
 * MDX içinde bu satırın üstü ana sayfada "giriş" olarak gösterilir.
 * Satır yoksa ana sayfada yalnızca başlık ve özet görünür.
 */
export const ANA_SAYFA_SONU = "{/* ana-sayfa-sonu */}";

const ortak = {
  baslik: z.string().min(1),
  /** Etikette görünen alan adı: "Siber güvenlik". */
  alan: z.string().min(1),
  /** Kart altındaki satır: ["Güvenlik", "Tarım"]. */
  etiketler: z.array(z.string().min(1)).default([]),
  ozet: z.string().min(1),
  /** Yakındakilerin kart sırası. Verilmezse dosya adına göre sıralanır. */
  sira: z.number().optional(),
};

const onBilgi = z.discriminatedUnion("durum", [
  z.object({ ...ortak, durum: z.literal("yayinda"), tarih: z.coerce.date() }),
  z.object({ ...ortak, durum: z.literal("yakinda"), tahminiTarih: z.string().min(1) }),
]);

type OnBilgi = z.infer<typeof onBilgi>;
export type Doktrin = OnBilgi & { slug: string; giris: string; metin: string };
export type YayindaDoktrin = Extract<Doktrin, { durum: "yayinda" }>;
export type YakindaDoktrin = Extract<Doktrin, { durum: "yakinda" }>;

function oku(dosya: string): Doktrin {
  const slug = dosya.replace(/\.mdx$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(KLASOR, dosya), "utf8"));
  const sonuc = onBilgi.safeParse(data);
  if (!sonuc.success) {
    const hatalar = sonuc.error.issues.map((h) => `  ${h.path.join(".") || "(kök)"}: ${h.message}`);
    throw new Error(`content/doktrinler/${dosya} ön bilgisi hatalı:\n${hatalar.join("\n")}`);
  }
  const [ilkBolum = ""] = content.split(ANA_SAYFA_SONU);
  return {
    ...sonuc.data,
    slug,
    giris: content.includes(ANA_SAYFA_SONU) ? ilkBolum : "",
    metin: content.replace(ANA_SAYFA_SONU, ""),
  };
}

let onbellek: Doktrin[] | undefined;

export function tumDoktrinler(): Doktrin[] {
  onbellek ??= fs
    .readdirSync(KLASOR)
    .filter((dosya) => dosya.endsWith(".mdx"))
    .sort()
    .map(oku);
  return onbellek;
}

/** Yayındakiler, en yenisi başta. */
export function yayindakiler(): YayindaDoktrin[] {
  return tumDoktrinler()
    .filter((d): d is YayindaDoktrin => d.durum === "yayinda")
    .sort((a, b) => b.tarih.getTime() - a.tarih.getTime());
}

export function yakindakiler(): YakindaDoktrin[] {
  return tumDoktrinler()
    .filter((d): d is YakindaDoktrin => d.durum === "yakinda")
    .sort((a, b) => (a.sira ?? Infinity) - (b.sira ?? Infinity) || a.slug.localeCompare(b.slug));
}

export function doktrinGetir(slug: string): YayindaDoktrin | undefined {
  return yayindakiler().find((d) => d.slug === slug);
}

const tarihBicimi = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function tarihYaz(tarih: Date): string {
  return tarihBicimi.format(tarih);
}

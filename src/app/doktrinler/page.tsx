import type { Metadata } from "next";
import { DoktrinKarti, DoktrinKartlari } from "@/bilesenler/DoktrinKarti";
import { Ust } from "@/bilesenler/Ust";
import { tarihYaz, yayindakiler } from "@/lib/doktrinler";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Doktrinler",
  description: "Yayımlanan tüm doktrinler, en yenisi başta.",
};

/** Yayındaki tüm doktrinler. Ana sayfada yalnızca en yenisi göründüğü için eskilere buradan ulaşılır. */
export default function DoktrinlerSayfasi() {
  const doktrinler = yayindakiler();

  return (
    <>
      <Ust />
      <main className={s.sayfa}>
        <header className={s.ust}>
          <p className="etiket">YAYINDAKİLER · {doktrinler.length}</p>
          <h1 className={s.baslik}>Doktrinler</h1>
        </header>
        <DoktrinKartlari ikili>
          {doktrinler.map((doktrin, sira) => (
            <DoktrinKarti
              key={doktrin.slug}
              duzey="h2"
              adres={`/doktrin/${doktrin.slug}`}
              hap={sira === 0 ? `Yeni · ${doktrin.alan}` : doktrin.alan}
              baslik={doktrin.baslik}
              alt={[...doktrin.etiketler, tarihYaz(doktrin.tarih)].join(" · ")}
            />
          ))}
        </DoktrinKartlari>
      </main>
    </>
  );
}

import Link from "next/link";
import s from "./DoktrinKarti.module.css";

type KartOzellikleri = {
  /** Üstteki hap: "Yakında · Gıda güvenliği". */
  hap: string;
  baslik: string;
  /** Alt satır: "Güvenlik · Tarım · Ocak 2027". */
  alt: string;
  /** Verilirse kartın tamamı bu adrese bağlanır. */
  adres?: string;
  /** Kart başlığının düzeyi; sayfadaki başlık sırasına göre seçilir. */
  duzey: "h2" | "h3";
};

/** Büyük doktrin kartı: hap, başlık ve alt satır. */
export function DoktrinKarti({ hap, baslik, alt, adres, duzey: Baslik }: KartOzellikleri) {
  return (
    <li className={adres ? `${s.kart} ${s.tiklanir}` : s.kart}>
      <span className={s.hap}>{hap}</span>
      <Baslik className={s.baslik}>
        {adres ? (
          <Link href={adres} className={s.baglanti}>
            {baslik}
          </Link>
        ) : (
          baslik
        )}
      </Baslik>
      <span className={s.alt}>{alt}</span>
    </li>
  );
}

/** Kart ızgarası. `ikili` iken tek kart bile yarım genişlikte kalır. */
export function DoktrinKartlari({ ikili = false, children }: { ikili?: boolean; children: React.ReactNode }) {
  return <ul className={ikili ? `${s.kartlar} ${s.ikili}` : s.kartlar}>{children}</ul>;
}

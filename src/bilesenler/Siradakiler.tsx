import type { YakindaDoktrin } from "@/lib/doktrinler";
import s from "./Siradakiler.module.css";

/** Yakında yayımlanacak doktrinlerin kartları. Sayfaları olmadığı için bağlantı değildir. */
export function Siradakiler({ doktrinler }: { doktrinler: YakindaDoktrin[] }) {
  if (doktrinler.length === 0) return null;

  return (
    <section className={s.bolum} aria-labelledby="siradakiler">
      <h2 id="siradakiler" className={`etiket ${s.baslik}`}>
        02 — SIRADAKİLER
      </h2>
      <ul className={s.kartlar}>
        {doktrinler.map((doktrin) => (
          <li key={doktrin.slug} className={s.kart}>
            <span className={s.hap}>Yakında · {doktrin.alan}</span>
            <h3 className={s.kartBasligi}>{doktrin.baslik}</h3>
            <span className={s.alt}>{[...doktrin.etiketler, doktrin.tahminiTarih].join(" · ")}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

import type { YakindaDoktrin } from "@/lib/doktrinler";
import { DoktrinKarti, DoktrinKartlari } from "./DoktrinKarti";
import s from "./Siradakiler.module.css";

/** Yakında yayımlanacak doktrinlerin kartları. Sayfaları olmadığı için bağlantı değildir. */
export function Siradakiler({ doktrinler }: { doktrinler: YakindaDoktrin[] }) {
  if (doktrinler.length === 0) return null;

  return (
    <section className={s.bolum} aria-labelledby="siradakiler">
      <h2 id="siradakiler" className={`etiket ${s.baslik}`}>
        02 — SIRADAKİLER
      </h2>
      <DoktrinKartlari>
        {doktrinler.map((doktrin) => (
          <DoktrinKarti
            key={doktrin.slug}
            duzey="h3"
            hap={`Yakında · ${doktrin.alan}`}
            baslik={doktrin.baslik}
            alt={[...doktrin.etiketler, doktrin.tahminiTarih].join(" · ")}
          />
        ))}
      </DoktrinKartlari>
    </section>
  );
}

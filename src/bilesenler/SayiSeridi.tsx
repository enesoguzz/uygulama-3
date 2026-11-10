import s from "./SayiSeridi.module.css";

export type Sayi = { deger: number; etiket: string };

/** Dört beyaz kartta büyük rakam ve etiket. */
export function SayiSeridi({ sayilar }: { sayilar: Sayi[] }) {
  return (
    <section aria-label="Sayılarla site">
      <dl className={s.serit}>
        {sayilar.map(({ deger, etiket }) => (
          <div key={etiket} className={s.kart}>
            <dt className="etiket">{etiket}</dt>
            <dd className={s.rakam}>{deger}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

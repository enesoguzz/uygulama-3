import s from "./Gorsel.module.css";

/** Lacivert kart içinde görsel (şema, harita ya da grafik) ve kısa açıklama. */
export function Gorsel({ aciklama, children }: { aciklama?: string; children: React.ReactNode }) {
  return (
    <figure className={s.gorsel}>
      <div className={s.ic}>
        {children}
        {aciklama && <figcaption className={s.aciklama}>{aciklama}</figcaption>}
      </div>
    </figure>
  );
}

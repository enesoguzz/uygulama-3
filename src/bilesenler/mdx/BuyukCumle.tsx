import s from "./BuyukCumle.module.css";

/** Büyük puntolu tek cümle: önerinin ya da ana fikrin kendisi. */
export function BuyukCumle({ children }: { children: React.ReactNode }) {
  return <p className={s.cumle}>{children}</p>;
}

import s from "./Kaynaklar.module.css";

/**
 * Yazının sonundaki kaynak listesi. İçine düz bir Markdown listesi yazılır:
 *
 * <Kaynaklar>
 *
 * - Yazar, [Başlık](https://ornek.com), Yayıncı, 2026.
 *
 * </Kaynaklar>
 */
export function Kaynaklar({ children }: { children: React.ReactNode }) {
  return (
    <section className={s.kaynaklar} aria-labelledby="kaynaklar">
      <h2 id="kaynaklar" className="etiket">
        KAYNAKLAR
      </h2>
      <div className={s.liste}>{children}</div>
    </section>
  );
}

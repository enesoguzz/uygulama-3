import s from "./AgSemasi.module.css";

type Ozellikler = {
  /** Ağa bağlı kutular: ["Enerji", "Su", "Finans", "Sağlık"]. */
  dugumler: string[];
  /** Hepsinin bağlandığı taban: "Tek ağ, tek zayıf nokta". */
  taban: string;
};

/**
 * Kodla çizilen ağ şeması: üstte kutular, altta hepsinin bağlandığı tek taban.
 * Dar alanda kutuların yarısı tabanın üstüne, yarısı altına dizilir; böylece
 * şema yatay kaymadan okunur. Görsel dosyası değildir; ileride etkileşim eklenebilir.
 */
export function AgSemasi({ dugumler, taban }: Ozellikler) {
  const yari = Math.ceil(dugumler.length / 2);
  const degiskenler = { "--sutun": dugumler.length, "--sutun-dar": yari } as React.CSSProperties;

  return (
    <div className={s.cerceve}>
      <div
        className={s.sema}
        style={degiskenler}
        role="img"
        aria-label={`${dugumler.join(", ")}: hepsi tek bir tabana bağlı. ${taban}.`}
      >
        {dugumler.map((dugum, sira) => (
          <div key={dugum} className={sira < yari ? s.dugum : `${s.dugum} ${s.altta}`}>
            <span className={s.kutu}>{dugum}</span>
            <span className={s.cizgi} />
          </div>
        ))}
        <div className={s.taban}>{taban}</div>
      </div>
    </div>
  );
}

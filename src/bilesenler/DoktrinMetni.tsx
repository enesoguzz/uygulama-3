import Link from "next/link";
import { tarihYaz, type YayindaDoktrin } from "@/lib/doktrinler";
import { Ok } from "./ikonlar";
import { Mdx } from "./mdx/Mdx";
import s from "./DoktrinMetni.module.css";

type Ozellikler = {
  doktrin: YayindaDoktrin;
  /** "giris": ana sayfadaki kısa hâl. "tam": doktrinin kendi sayfası. */
  bicim: "giris" | "tam";
};

/**
 * Doktrinin ritmi (docs/TASARIM.md bölüm 6): etiket ve dev başlık, giriş,
 * ardından MDX gövdesi (metin, görsel, büyük cümle, metin, kaynaklar).
 */
export function DoktrinMetni({ doktrin, bicim }: Ozellikler) {
  const adres = `/doktrin/${doktrin.slug}`;
  const giris = bicim === "giris";

  return (
    <article id="doktrin" className={s.govde}>
      {giris && <p className="etiket">01 — YENİ DOKTRİN</p>}
      <div className={s.ustSatir}>
        <p className={s.hap}>
          <span aria-hidden="true" className={s.nokta} />
          {giris ? `Yeni · ${doktrin.alan}` : doktrin.alan}
        </p>
        {!giris && (
          <p className={s.kunye}>
            {doktrin.etiketler.map((etiket) => `${etiket} · `)}
            <time dateTime={doktrin.tarih.toISOString().slice(0, 10)}>{tarihYaz(doktrin.tarih)}</time>
          </p>
        )}
      </div>
      <h1 className={s.baslik}>
        {giris ? (
          <Link href={adres} className={s.baslikBaglantisi}>
            {doktrin.baslik}
          </Link>
        ) : (
          doktrin.baslik
        )}
      </h1>
      <p className={s.giris}>{doktrin.ozet}</p>

      <Mdx kaynak={giris ? doktrin.giris : doktrin.metin} />

      {giris && (
        <Link href={adres} className={s.devam}>
          <span>Doktrinin tamamını oku</span>
          <Ok yon="sag" />
        </Link>
      )}
    </article>
  );
}

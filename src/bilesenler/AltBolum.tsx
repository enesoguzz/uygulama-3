import Link from "next/link";
import { ACILIS_KIMLIGI } from "@/lib/acilis";
import { site } from "@/site";
import { Logo, Ok } from "./ikonlar";
import s from "./AltBolum.module.css";

/** Yer tutucu doluysa bağlantı, değilse düz metin. */
function Iletisim({ deger }: { deger: string }) {
  if (deger.startsWith("http")) {
    return (
      <a href={deger} className={s.baglanti} rel="me noopener" target="_blank">
        LinkedIn
      </a>
    );
  }
  if (deger.includes("@")) {
    return (
      <a href={`mailto:${deger}`} className={s.baglanti}>
        {deger}
      </a>
    );
  }
  return <span className={s.baglanti}>{deger}</span>;
}

export function AltBolum() {
  return (
    <footer id="hakkimda" className={s.alt}>
      <div className={s.ust}>
        <div className={s.tanitim}>
          <Logo boyut={36} />
          <p className={s.slogan}>{site.slogan}</p>
          <p className={s.hakkimda}>{site.hakkimda}</p>
        </div>
        <nav aria-label="Alt menü" className={s.sutun}>
          <p className={s.sutunBasligi}>SİTE</p>
          <Link href="/doktrinler" className={s.baglanti}>
            Doktrinler
          </Link>
          <Link href={`/#${ACILIS_KIMLIGI}`} className={s.baglanti}>
            Açılış videosu
          </Link>
        </nav>
        <div className={s.sutun}>
          <p className={s.sutunBasligi}>İLETİŞİM</p>
          <Iletisim deger={site.iletisim.eposta} />
          <Iletisim deger={site.iletisim.linkedin} />
        </div>
      </div>
      <div className={s.taban}>
        <span className={s.telif}>
          © {site.sayilar.baslangicYili} {site.sahip}
        </span>
        <a href="#ust" className={s.basaDon}>
          <span>Başa dön</span>
          <Ok yon="yukari" />
        </a>
      </div>
    </footer>
  );
}

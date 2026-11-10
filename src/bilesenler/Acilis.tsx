"use client";

import { useEffect, useRef, useState } from "react";
import { ACILIS_KIMLIGI, acilisiGorulduIsaretle, acilisiGoster } from "@/lib/acilis";
import { KisiCizimi, Ok, OynatIkonu } from "./ikonlar";
import s from "./Acilis.module.css";

type Ozellikler = {
  /** Video dosyasının yolu. `null` iken yer tutucu gösterilir. */
  video: string | null;
  altyazi: string;
  sure: string;
  ilkCumle: string;
  kisiler: readonly string[];
};

/**
 * Açılış videosu alanı (docs/TASARIM.md bölüm 5).
 * Video kendiliğinden oynamaz; "İzle" ile sesli başlar, "Geç" her zaman görünür.
 */
export function Acilis({ video, altyazi, sure, ilkCumle, kisiler }: Ozellikler) {
  const [oynuyor, setOynuyor] = useState(false);
  const [dosyaYok, setDosyaYok] = useState(false);
  const bolum = useRef<HTMLElement>(null);
  const oynatici = useRef<HTMLVideoElement>(null);

  // Menüden "#acilis" ile gelindiyse gizlenmiş alanı geri getir.
  useEffect(() => {
    const kontrolEt = () => {
      if (location.hash === `#${ACILIS_KIMLIGI}`) acilisiGoster();
    };
    kontrolEt();
    window.addEventListener("hashchange", kontrolEt);
    return () => window.removeEventListener("hashchange", kontrolEt);
  }, []);

  // Ziyaretçi alanı kaydırıp geçtiyse açılışı görmüş sayılır.
  useEffect(() => {
    const hedef = bolum.current;
    if (!hedef) return;
    const gozlemci = new IntersectionObserver(([kayit]) => {
      if (kayit && !kayit.isIntersecting) acilisiGorulduIsaretle();
    });
    gozlemci.observe(hedef);
    return () => gozlemci.disconnect();
  }, []);

  const izle = () => {
    if (!video) {
      setDosyaYok(true);
      return;
    }
    acilisiGorulduIsaretle();
    setOynuyor(true);
    // Sesli oynatma için `play()` tıklamanın içinde çağrılmalı.
    void oynatici.current?.play();
  };

  return (
    <section ref={bolum} id={ACILIS_KIMLIGI} className={s.acilis} aria-label="Açılış videosu">
      {video && (
        <video
          ref={oynatici}
          className={s.video}
          hidden={!oynuyor}
          src={video}
          controls
          playsInline
          preload="none"
          onEnded={() => setOynuyor(false)}
        >
          <track kind="captions" src={altyazi} srcLang="tr" label="Türkçe" default />
        </video>
      )}

      {!oynuyor && (
        <>
          <ul className={s.kisiler}>
            {kisiler.map((kisi, sira) => (
              <li key={kisi} className={sira === 0 ? `${s.kisi} ${s.konusan}` : s.kisi}>
                <KisiCizimi kucuk={sira === kisiler.length - 1} />
                <span>{kisi}</span>
              </li>
            ))}
          </ul>
          <p className={s.alinti}>“{ilkCumle}”</p>
          <button type="button" className={s.izle} onClick={izle}>
            <OynatIkonu />
            <span>İzle · {sure}</span>
          </button>
        </>
      )}

      {!video && (
        <p className={s.not} role="status">
          {dosyaYok ? "VİDEO HENÜZ YÜKLENMEDİ" : "ÖRNEK VİDEO YERİ"}
        </p>
      )}

      <a href="#doktrin" className={s.gec} onClick={acilisiGorulduIsaretle}>
        <span>Geç</span>
        <Ok yon="asagi" />
      </a>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ACILIS_KIMLIGI, acilisiGoster } from "@/lib/acilis";
import { MenuIkonu } from "./ikonlar";
import s from "./Menu.module.css";

/**
 * Yuvarlak düğme ve altında açılan küçük kutu.
 * Aynı düğme, bir bağlantı, kutunun dışı ve Escape kapatır.
 */
export function Menu({ ingilizce }: { ingilizce: boolean }) {
  const [acik, setAcik] = useState(false);
  const kok = useRef<HTMLDivElement>(null);
  const dugme = useRef<HTMLButtonElement>(null);
  const kutuKimligi = useId();

  useEffect(() => {
    if (!acik) return;

    const disariBasildi = (olay: PointerEvent) => {
      if (!kok.current?.contains(olay.target as Node)) setAcik(false);
    };
    const tusaBasildi = (olay: KeyboardEvent) => {
      if (olay.key !== "Escape") return;
      setAcik(false);
      dugme.current?.focus();
    };

    document.addEventListener("pointerdown", disariBasildi);
    document.addEventListener("keydown", tusaBasildi);
    return () => {
      document.removeEventListener("pointerdown", disariBasildi);
      document.removeEventListener("keydown", tusaBasildi);
    };
  }, [acik]);

  const kapat = () => setAcik(false);

  return (
    <div
      ref={kok}
      className={s.kok}
      onBlur={(olay) => {
        // Tab ile kutunun dışına çıkıldıysa kapat.
        if (olay.relatedTarget && !olay.currentTarget.contains(olay.relatedTarget)) kapat();
      }}
    >
      <button
        ref={dugme}
        type="button"
        className={s.dugme}
        aria-label="Menü"
        aria-expanded={acik}
        aria-controls={kutuKimligi}
        onClick={() => setAcik((onceki) => !onceki)}
      >
        <MenuIkonu />
      </button>

      <nav id={kutuKimligi} className={s.kutu} aria-label="Menü" hidden={!acik}>
        <Link href="/#doktrin" className={s.satir} onClick={kapat}>
          Doktrinler
        </Link>
        <Link
          href={`/#${ACILIS_KIMLIGI}`}
          className={s.satir}
          onClick={() => {
            acilisiGoster();
            kapat();
          }}
        >
          Açılış videosu
        </Link>
        <a href="#hakkimda" className={s.satir} onClick={kapat}>
          Hakkımda
        </a>
        {ingilizce && (
          // İngilizce sayfa henüz yok; satır bağlantı değil, yalnızca duyuru.
          <p className={s.ingilizce}>
            <span lang="en">English</span>
            <span className={s.yakinda}>Yakında</span>
          </p>
        )}
      </nav>
    </div>
  );
}

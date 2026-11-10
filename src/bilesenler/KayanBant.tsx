"use client";

import { useState, useSyncExternalStore } from "react";
import s from "./KayanBant.module.css";

const SORGU = "(prefers-reduced-motion: reduce)";

function useHareketAzaltma(): boolean {
  return useSyncExternalStore(
    (degisti) => {
      const sorgu = window.matchMedia(SORGU);
      sorgu.addEventListener("change", degisti);
      return () => sorgu.removeEventListener("change", degisti);
    },
    () => window.matchMedia(SORGU).matches,
    () => false,
  );
}

function Grup({ sloganlar, gizli = false }: { sloganlar: readonly string[]; gizli?: boolean }) {
  return (
    <span className={s.grup} aria-hidden={gizli || undefined}>
      {sloganlar.map((slogan) => (
        <span key={slogan} className={s.slogan}>
          {slogan}
        </span>
      ))}
    </span>
  );
}

/**
 * Sürekli akan sloganlar. Üzerine gelince ya da basınca durur;
 * hareket azaltma tercihinde hiç kaymaz, sloganlar yan yana durur.
 */
export function KayanBant({ sloganlar }: { sloganlar: readonly string[] }) {
  const [durdu, setDurdu] = useState(false);
  const sabit = useHareketAzaltma();

  if (sabit) {
    return (
      <p className={`${s.bant} ${s.sabit}`}>
        <Grup sloganlar={sloganlar} />
      </p>
    );
  }

  return (
    <button
      type="button"
      className={durdu ? `${s.bant} ${s.durdu}` : s.bant}
      onClick={() => setDurdu((onceki) => !onceki)}
    >
      <span className="gorunmez">{durdu ? "Kayan yazıyı başlat: " : "Kayan yazıyı durdur: "}</span>
      <span className={s.serit}>
        <Grup sloganlar={sloganlar} />
        <Grup sloganlar={sloganlar} gizli />
      </span>
    </button>
  );
}

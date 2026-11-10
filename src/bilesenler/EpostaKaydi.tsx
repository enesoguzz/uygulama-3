"use client";

import { useState } from "react";
import s from "./EpostaKaydi.module.css";

/**
 * E-posta kaydı. Şimdilik yalnızca arayüz: gönderim bir servise bağlı değil.
 * Bülten servisi seçilince `gonder` içine istek eklenir.
 */
export function EpostaKaydi() {
  const [denendi, setDenendi] = useState(false);

  const gonder = (olay: React.FormEvent<HTMLFormElement>) => {
    olay.preventDefault();
    setDenendi(true);
  };

  return (
    <section className={s.bolum} aria-labelledby="haberdar-ol">
      <div className={s.baslikAlani}>
        <p className="etiket">03 — HABERDAR OL</p>
        <h2 id="haberdar-ol" className={s.baslik}>
          Yeni doktrin yayınlanınca haberin olsun.
        </h2>
      </div>
      <form className={s.form} onSubmit={gonder}>
        <label htmlFor="eposta" className={s.alanAdi}>
          E-posta adresin
        </label>
        <div className={s.satir}>
          <input
            id="eposta"
            name="eposta"
            type="email"
            required
            autoComplete="email"
            placeholder="ad@ornek.com"
            aria-describedby="eposta-notu"
            className={s.alan}
          />
          <button type="submit" className={s.dugme}>
            Haber ver
          </button>
        </div>
        <p id="eposta-notu" className={s.not} role="status">
          {denendi
            ? "Kayıt henüz açık değil; adresin kaydedilmedi."
            : "Sadece yeni doktrin çıktığında yazarım."}
        </p>
      </form>
    </section>
  );
}

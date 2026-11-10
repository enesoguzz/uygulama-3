/**
 * Açılış alanı yalnızca ilk ziyarette gösterilir.
 * Durum `localStorage` içinde tutulur; gizleme CSS ile yapılır
 * (`html[data-acilis="gizli"]`), böylece sayfa çizilmeden önce karar verilir.
 */
const ANAHTAR = "acilis-goruldu";

export const ACILIS_KIMLIGI = "acilis";

/** `<head>` içinde, ilk çizimden önce çalışır. */
export const acilisBetigi = `try{if(localStorage.getItem("${ANAHTAR}")&&location.hash!=="#${ACILIS_KIMLIGI}")document.documentElement.dataset.acilis="gizli"}catch(e){}`;

export function acilisiGorulduIsaretle(): void {
  try {
    localStorage.setItem(ANAHTAR, "1");
  } catch {
    // Depolama kapalıysa açılış her ziyarette görünür; sorun değil.
  }
}

/** Menüdeki "Açılış videosu" bağlantısı gizlenmiş alanı geri getirir. */
export function acilisiGoster(): void {
  delete document.documentElement.dataset.acilis;
  document.getElementById(ACILIS_KIMLIGI)?.scrollIntoView();
}

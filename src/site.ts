/**
 * Sitenin tek ayar dosyası.
 * Köşeli parantezli değerler yer tutucudur; site sahibi dolduracak.
 */
export const site = {
  /** Site adı henüz belli değil; sekme başlığında görünür. */
  ad: "Doktrin",
  aciklama: "Türkiye ve dünya üzerine doktrinler.",
  sahip: "[ADIN SOYADIN]",
  hakkimda: "[Hakkımda: iki üç cümle. Kimsin, bu siteyi neden yazıyorsun?]",
  slogan: "Yeni dünyaya genç fikirler.",

  /** "@" içeren e-posta ve "http" ile başlayan adres kendiliğinden bağlantıya dönüşür. */
  iletisim: {
    eposta: "[E-POSTA]",
    linkedin: "[LINKEDIN]",
  },

  /** Sayı şeridinde içerikten türetilemeyen iki değer. */
  sayilar: {
    baslangicYili: 2026,
    sponsor: 0,
  },

  /** Kayan banttaki sloganlar. Büyük harfler elle yazılır (İ, Ş, Ğ). */
  bant: ["BAĞIMSIZ FİKİRLER", "ŞEMAYLA ANLATIM", "HER İDDİA KAYNAKLI", "REKLAM YOK"],

  /** Henüz yalnızca arayüzü olan bölümler. `false` yapınca gizlenir. */
  ozellikler: {
    epostaKaydi: true,
    ingilizce: true,
  },

  acilis: {
    /**
     * Video dosyası gelince `public/video/` altına koy ve yolunu buraya yaz,
     * örneğin "/video/acilis.mp4". `null` iken yer tutucu gösterilir.
     */
    video: null as string | null,
    /** Altyazı dosyası (WebVTT). Video ile birlikte `public/video/` altına konur. */
    altyazi: "/video/acilis.tr.vtt",
    sure: "0:30",
    ilkCumle: "Bu videoyu sizin için ben hazırladım.",
    kisiler: ["Kadın", "Adam", "Çocuk"],
  },
} as const;

export type Site = typeof site;

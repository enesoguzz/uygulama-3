# Doktrin sitesi

Türkiye ve dünya üzerine "doktrin" adını verdiğim yazıları yayımladığım kişisel site.
Next.js (App Router) ve TypeScript ile yazıldı; çıktısı tamamen statik HTML'dir.
Sunucu, veritabanı ve üyelik yoktur.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # statik çıktı: out/
npm run onizle   # out/ klasörünü yerelde sunar
```

## Yapı

| Yol | İçerik |
|---|---|
| `content/doktrinler/*.mdx` | Doktrinler. Sayı şeridi, giriş ve kartlar buradan beslenir. |
| `src/site.ts` | Tek ayar dosyası: ad, iletişim, sloganlar, video yolu, gizlenebilir bölümler. |
| `src/app/globals.css` | Tasarım belirteçleri (renk, yazı, ölçü). Başka yerde renk kodu yoktur. |
| `src/bilesenler/` | Sayfa bileşenleri; her birinin yanında kendi CSS modülü durur. |
| `src/bilesenler/mdx/` | Yazı içinde kullanılan bileşenler. |
| `docs/` | Tasarım dökümü ve görsel referans. |

## Yeni doktrin eklemek

`content/doktrinler/` altında bir `.mdx` dosyası oluştur. Dosya adı adres olur:
`egitim.mdx` → `/doktrin/egitim`.

```mdx
---
baslik: "Başlık."
alan: "Eğitim"                  # etikette görünür
etiketler: ["Toplum", "Okul"]   # kartın alt satırı
durum: yayinda                  # ya da: yakinda
tarih: 2026-12-01               # yayinda ise zorunlu
# tahminiTarih: "Ocak 2027"     # yakinda ise zorunlu (tarih yerine)
ozet: "Başlığın altındaki büyük giriş cümlesi."
---

Giriş paragrafı.

<Gorsel aciklama="Şemanın kısa açıklaması.">
  <AgSemasi dugumler={["Bir", "İki", "Üç", "Dört"]} taban="Ortak taban" />
</Gorsel>

<BuyukCumle>Önerinin tek cümlesi.</BuyukCumle>

{/* ana-sayfa-sonu */}

Öneriyi açan paragraflar.

<Kaynaklar>

- Yazar, [Başlık](https://ornek.com), Yayıncı, 2026.

</Kaynaklar>
```

- `{/* ana-sayfa-sonu */}` satırının üstü ana sayfada giriş olarak görünür, tamamı doktrin sayfasında.
- En yeni tarihli `yayinda` doktrin ana sayfanın girişi olur.
- Yayındaki tüm doktrinler, eskileri de içinde, `/doktrinler` sayfasında kart olarak listelenir (menüdeki "Doktrinler").
- `yakinda` doktrinler yalnızca ana sayfada kart olarak görünür, sayfaları üretilmez.
- Ön bilgide eksik ya da hatalı alan varsa `npm run build` dosya adını söyleyerek durur.

## Açılış videosu

1. Videoyu `public/video/acilis.mp4`, altyazıyı `public/video/acilis.tr.vtt` olarak koy.
2. `src/site.ts` içinde `acilis.video` değerini `"/video/acilis.mp4"` yap.

Video kendiliğinden oynamaz; "İzle" ile sesli başlar. Açılış alanı yalnızca ilk
ziyarette görünür, sonrasında menüdeki "Açılış videosu" ile geri gelir.

## Gizlenebilir bölümler

`src/site.ts` → `ozellikler`: `epostaKaydi` ve `ingilizce`. İkisi de şimdilik yalnızca
arayüzdür; `false` yapınca kaybolurlar.

## Dağıtım

Vercel'e depo olarak bağlamak yeterli; ek ayar gerekmez.

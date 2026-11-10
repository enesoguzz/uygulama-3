# Doktrin sitesi — tasarım dökümü

Bu belge `tasarim-referans.html` dosyasındaki tasarımı açıklar. Görsel hedef o dosyadır; kurallar ve kararlar burada.

## 1. Sitenin amacı

- Site sahibinin Türkiye ve dünya üzerine fikirlerini ("doktrin") yayımladığı kişisel, ticari olmayan bir site.
- Aynı zamanda CV vitrini: ziyaretçi hem fikirleri hem de anlatım ve teknik beceriyi görür.
- Konular tek alanla sınırlı değil: siber güvenlik, gıda güvenliği, su güvenliği, eğitim, ekonomi.
- İlke: klasik uzun yazı yerine çarpıcı başlık, kısa metin, görsel şema, tekrar metin.
- Arayüz çok sade olmalı. Az düğme, az menü, dikkat fikirlerde.

## 2. Tasarım belirteçleri

### Renkler

| Ad | Değer | Kullanım |
|---|---|---|
| `--zemin` | `#F3F6FC` | Sayfa arka planı |
| `--lacivert` | `#0A1A3F` | Koyu kartlar, ana metin rengi |
| `--lacivert-2` | `#12265A` | Koyu kart içindeki kutular |
| `--lacivert-cizgi` | `#2A3F7E` | Koyu zemindeki çizgi ve kenarlıklar |
| `--lacivert-soluk` | `#6F82B8` | Koyu zemindeki şema çizgileri, pasif ikonlar |
| `--acik-mavi` | `#E1E8F8` | Açık kartlar, etiket zemini, kayan bant |
| `--vurgu` | `#1E3A8A` | Etiket metni, "Yeni" noktası |
| `--metin-soluk` | `#4A5573` | Açık zeminde ikincil metin |
| `--metin-soluk-koyu` | `#A9B6D6` | Koyu zeminde ikincil metin |
| `--beyaz` | `#FFFFFF` | Kartlar, koyu zemindeki metin |
| `--cizgi` | `#DDE3F0` | Açık zeminde ince çizgiler |

Tema yalnızca lacivert ve beyaz tonlarından oluşur. Başka vurgu rengi eklenmez.

### Yazı

- Başlıklar: **Bricolage Grotesque**, 800 (alıntı satırında 600), harf aralığı -0.035em ile -0.045em, satır yüksekliği 0.96 ile 1.08.
- Gövde ve arayüz: **Manrope**, 400 / 500 / 700.
- Ana başlık: `clamp(46px, 8.4vw, 112px)`.
- İkinci büyük cümle: `clamp(30px, 4.6vw, 56px)`.
- Kart başlıkları: `clamp(32px, 4vw, 52px)`.
- Giriş paragrafı 23px / 500, gövde 18px / 1.65, en fazla 640px genişlik.
- Bölüm etiketleri: 13px, 700, büyük harf, harf aralığı 0.08em. Türkçe büyük harfler metinde elle yazılır (İ, Ş, Ğ), `text-transform` kullanılmaz.

### Biçim

- Büyük kartlar 28px, orta kartlar 24px, menü kutusu 18px köşe yarıçapı.
- Düğmeler, etiketler ve şema kutuları hap biçiminde (999px).
- Sayfa kenar boşluğu 12px; kartlar arası boşluk 12px.
- İçerik genişlikleri: metin sütunu 920px, kartlar 1120px.
- Gölge yalnızca açılır menüde kullanılır.

## 3. Ana sayfa bölümleri (yukarıdan aşağıya)

1. **Açılış videosu.** Lacivert, yuvarlak köşeli, yaklaşık bir ekran yüksekliğinde alan.
   - Üstte tam ortada logo, sağ köşede yuvarlak yarı saydam menü düğmesi.
   - Ortada video. Video hazır olana kadar yer tutucu: üç karakter çerçevesi (kadın, adam, çocuk), videonun ilk cümlesi ve "İzle · 0:30" düğmesi.
   - Sağ altta "Geç" bağlantısı, ilk doktrine kaydırır.
2. **Sayı şeridi.** Dört beyaz kartta büyük rakam ve etiket (yayında, yolda, başlangıç yılı, sponsor).
3. **Kayan yazı bandı.** Açık mavi şeritte sürekli akan sloganlar. Hareket azaltma tercihinde durur.
4. **01 — Yeni doktrin.** En son yayımlanan doktrinin girişi:
   - "Yeni · [alan]" etiketi, dev başlık, giriş paragrafı, gövde metni.
   - Lacivert kart içinde görsel (şema, harita ya da grafik) ve kısa açıklama.
   - Önerinin tek cümlesi büyük puntoyla, ardından gövde metni.
5. **02 — Sıradakiler.** Yan yana iki büyük kart: "Yakında · [alan]" etiketi, başlık, alan ve tahmini tarih.
6. **03 — Haberdar ol.** E-posta kayıt formu (etiketli giriş alanı ve "Haber ver" düğmesi).
7. **Alt bölüm.** Lacivert kart: logo, büyük slogan, site bağlantıları, iletişim, telif satırı ve "Başa dön".

## 4. Menü

- Düğmeye basınca hemen altında küçük beyaz bir kutu açılır: Doktrinler, Açılış videosu, Hakkımda ve ayrı bir satırda English.
- Aynı düğmeye tekrar basınca, bir bağlantıya tıklayınca, kutunun dışına tıklayınca ya da Escape ile kapanır.
- Üst menü çubuğu, bağlantı sırası ya da tam ekran menü yoktur.

## 5. Açılış videosu davranışı

- Video en fazla 30 saniye. Tamamen yapay zekâ ile üretilecek: bir kadın, bir adam ve bir çocuk aynı metni sırayla okur. Mesaj: teknolojiyle birçok şey yapılabilir ve gördüğümüz her şey gerçek olmayabilir.
- Tarayıcılar sesli otomatik oynatmayı engellediği için video kendiliğinden başlamaz. Ziyaretçi "İzle"ye basınca sesli oynar.
- "Geç" her zaman görünür.
- Altyazı zorunlu.
- Tam ekran açılış yalnızca ilk ziyarette gösterilir. Sonraki ziyaretlerde sayfa doğrudan içerikle açılır; video menüdeki "Açılış videosu" ile tekrar izlenebilir.
- Video dosyası henüz yok. Yer tutucu kalır, dosya gelince tek yerden değiştirilebilir olmalı.

## 6. Doktrin sayfasının akışı

Her doktrin aynı ritmi izler, ama bölüm sayısı serbesttir:

1. Etiket ve dev başlık
2. Giriş metni
3. Görsel (şema, harita, grafik)
4. Metin
5. Büyük puntolu tek cümle (öneri ya da ana fikir)
6. Metin, gerekirse ikinci görsel
7. Kaynaklar

Ders notu ya da madde listesi görünümünden kaçınılır.

## 7. Yer tutucular ve örnek içerik

Aşağıdakiler örnek ya da boş alandır, site sahibi dolduracak:

- Köşeli parantezli tüm metinler: `[ADIN SOYADIN]`, `[E-POSTA]`, `[LINKEDIN]`, `[TAHMİNİ TARİH]`, giriş ve öneri paragrafları.
- Üç doktrin başlığı, siber güvenlik giriş paragrafı ve şemadaki "Tek ağ, tek zayıf nokta" ifadesi tasarım sırasında yazılmış örneklerdir.
- Sayı şeridindeki rakamlar, kayan banttaki sloganlar ve alt bölümdeki "Yeni dünyaya genç fikirler." cümlesi örnektir.
- Logo yer tutucudur (halka içinde nokta). Site adı henüz belli değil.

## 8. Açık kararlar

| Konu | Varsayılan | Not |
|---|---|---|
| Doktrinler nerede açılır | Her doktrin kendi sayfasında; ana sayfada en yenisinin girişi ve kartlar | Site sahibi henüz onaylamadı |
| E-posta kaydı | Arayüz var, gönderim kapalı | Bülten servisi seçilince bağlanır |
| İngilizce sürüm | Menüde satır var, sayfa yok | Her doktrini iki kez yazmak gerekir |
| Üst çubuk | Yalnızca açılış alanının üstünde | İstenirse kaydırırken sabit kalabilir |
| Hakkımda | Alt bölüme iner | Ayrı sayfa istenebilir |

# TWOCHAPTER — Design Brief

**Status:** draft untuk persetujuan (belum ada coding)
**Referensi:** <https://www.gusmank.com/about-me/> (struktur & tone saja, bukan konten)
**Tanggal:** 10 November 2026

---

## 1. Review situs referensi

### 1.1 Struktur halaman `/about-me/`

| # | Section | Isi / pola |
|---|---------|-----------|
| 1 | Hero full-bleed | Foto travel satu layar penuh, wordmark/monogram di tengah, navigasi terbelah kiri–kanan (`PORTFOLIO · INFO · MEET US · GUIDES · REVIEWS · INQUIRY`) |
| 2 | Intro | Label kecil `ABOUT ME`, paragraf pembuka besar, potret vertikal, paragraf biografi, tombol `SEE MY PORTFOLIO` |
| 3 | "5 things about me…" | Daftar angka 01–05 di kiri, gambar di tengah, teks di kanan; nomor aktif berwarna emas. Interaktif, bukan sekadar grid |
| 4 | Travel Stories | Jurnal perjalanan dengan layout zig-zag: gambar besar ↔ teks, garis vertikal tipis, label tanggal + tombol `READ FULL STORY` / `COMING SOON` |
| 5 | CTA | "Let's plan your Bali photography session!" + tombol `Contact Us!` |
| 6 | Press strip | Deretan logo publikasi (Flytographer, How He Asked, Junebug, Fujifilm X, dll.) |
| 7 | Footer | Logo berulang, About/Inquiry/Reviews/FAQ, sosial, kolom SEO ("Bali Photographer", "Bali Photo Destinations"), search |

### 1.2 Tampilan (hasil inspeksi langsung)

- **Warna:** latar off-white hangat `#F6F6F6`; teks abu-gelap; aksen emas tua pada angka; tidak ada warna brand yang mencolok. Foto menjadi satu-satunya sumber warna.
- **Tipografi:** heading **Canela** (serif transisional), body **PT Serif** ±15 px, nav & label sans uppercase ±10–11 px dengan letter-spacing lebar. H1 "ABOUT ME" hanya 24 px — hierarki dibangun lewat spasi, bukan ukuran.
- **Layout:** grid lebar dengan margin besar, full-bleed image, garis pemisah hairline, sudut tajam (tanpa rounded corner), tanpa shadow.
- **Interaksi:** sangat tenang; hover halus; nomor 01–05 dapat diklik; tombol datar bergaya label.
- **Kesan:** tenang, personal, mahal secara diam-diam (quiet luxury), album pernikahan fine-art.

### 1.3 Kekuatan yang layak diadopsi

1. **Foto sebagai arsitektur** — gambar mengisi layar, UI menyingkir.
2. **Whitespace agresif** — kesan premium datang dari ruang kosong, bukan ornamen.
3. **Sistem label kecil** — uppercase + tracking lebar untuk metadata (kategori, tanggal, lokasi).
4. **Penomoran editorial** — angka 01–05 memberi ritme dan rasa "katalog".
5. **Narasi personal** — tentang fotografer, bukan sekadar daftar paket.

### 1.4 Kelemahan yang tidak akan ditiru

- Halaman ini adalah *about page* personal, bukan homepage bisnis: tidak ada alur layanan → harga → inquiry yang jelas.
- Halaman sangat panjang (arsip travel 30+ entri) dan tanggal tidak konsisten (`JAN 2025`, `FEBRUARY, 2026`, `Nov 2023`).
- Teks muted berisiko rendah kontras; target tap kecil; markup berat (Elementor) dan gambar lazy-load.
- Duplikasi navigasi desktop/mobile yang membingungkan.

---

## 2. Design brief

### 2.1 Positioning

**TWOCHAPTER** adalah studio fotografi & film untuk pasangan, keluarga, dan individu yang sedang berlibur — dengan pendekatan *fine-art documentary*: gambar yang terasa seperti film, bukan pose katalog.

> **Bukan** "vendor foto murah", **bukan** template wedding pink. Yang dijual adalah **pengalaman tenang + hasil yang terasa seperti kenangan pribadi**.

### 2.2 Audiens

- Pasangan / keluarga kelas menengah–atas, 28–50 tahun, traveler.
- Terbiasa estetika editorial (Kinfolk, Cereal, Monocle), sensitif terhadap kualitas dan privasi.
- Datang dari Instagram / Google / rekomendasi; sering membuka situs di malam hari sebelum booking.
- Butuh: kejelasan paket, rasa percaya, dan kemudahan inquiry (WhatsApp/email).

### 2.3 Tujuan situs

1. Membangun kepercayaan dalam < 10 detik (foto + kalimat positioning).
2. Menjelaskan layanan dan rentang harga tanpa merusak nuansa editorial.
3. Mengarahkan ke satu aksi utama: **kirim inquiry / WhatsApp**.
4. Menjadi portfolio yang bisa dipakai ulang untuk pitching dan press.

### 2.4 Prinsip desain

| Prinsip | Konsekuensi desain |
|---|---|
| Foto dulu, UI kemudian | UI monokrom, tanpa dekorasi yang bersaing dengan gambar |
| Tenang, bukan kosong | Ritme vertikal besar, tapi selalu ada label/metadata yang memberi arah |
| Editorial, bukan template | Grid asimetris 12 kolom, nomor bab, caption museum, hairline |
| Satu aksi utama | Satu CTA dominan (Inquiry), sisanya sekunder |
| Jujur pada materi | Semua data yang belum ada ditandai placeholder eksplisit |

---

## 3. Arah desain

### Arah A — **Sun-Faded Editorial** (rekomendasi)

Kertas ivory hangat, tinta hampir hitam, aksen kuningan pudar. Foto besar, tipografi serif berkarakter, label sans kecil, nomor bab. Terasa seperti majalah perjalanan independent, bukan situs vendor.

### Arah B — **Nocturne Gallery**

Latar charcoal, foto menyala di atas gelap, tipografi ivory. Dramatis dan sinematik; cocok untuk video, tetapi kurang ramah untuk browsing siang hari dan lebih berat secara emosional.

> Rekomendasi: **A**, karena audiens memburu foto liburan siang hari dan nuansa "hangat, tenang, personal" lebih sesuai daripada "dramatis".

---

## 4. Sistem visual

### 4.1 Warna (kontras sudah diukur terhadap `#FFFFFF`)

| Token | Hex | Peran | Kontras |
|---|---|---|---|
| `--paper` | `#FFFFFF` | Latar utama (putih) | — |
| `--ink` | `#1B1917` | Teks utama, wordmark | 15.97:1 |
| `--muted` | `#6B6B6B` | Body sekunder, caption | 5.33:1 |
| `--brass` | `#8C6239` | Aksen teks, nomor, link hover | 4.88:1 |
| `--brass-soft` | `#A67C52` | Nomor besar / dekoratif | 3.40:1 (large text only) |
| `--sand` | `#DCDCDC` | Placeholder netral | — |
| `--line` | `#E3E3E3` | Garis hairline dekoratif | 1.25:1 (non-informasi) |
| `--line-strong` | `#8C8C8C` | Border input/komponen | 3.4:1 |
| `--charcoal` | `#111111` | Section gelap (inquiry/footer) | 18.9:1 |

Aturan: tidak ada putih murni, tidak ada gradient emas/ungu, aksen kuningan maksimal 5% area.

### 4.2 Tipografi

| Peran | Font | Ukuran / setting |
|---|---|---|
| Display | **Fraunces** (variable, 300–500) | Hero `clamp(3.5rem, 9vw, 9rem)`, leading 0.92, tracking -0.02em |
| Body | **Source Serif 4** (300/400) | 17–19 px, leading 1.7, measure 62–68ch |
| Label / Nav / UI | **Jost** (300/400/500) | 11–12 px, uppercase, tracking 0.16em |
| Angka bab | **Fraunces** italic | 01–05, tabular |

Alasan: Fraunces memberi karakter (soft serif, ada "soul") tanpa jatuh ke Playfair/Cormorant yang sudah sangat umum; Source Serif menjaga kenyamanan baca panjang seperti PT Serif di referensi; Jost menggemakan nav geometris referensi dan terasa premium di ukuran kecil.

### 4.3 Grid & spasi

- 12 kolom, `max-width: 1440px`, gutter 24 px (mobile) / 32 px (desktop).
- Section spacing: 112–160 px desktop, 72–88 px mobile.
- Skala spasi 4/8: `4 8 12 16 24 32 48 64 96 128 160`.
- Sudut: **0 px** (kecuali tombol pill untuk WhatsApp). Tanpa shadow.
- Rasio gambar: 4:5 (portrait), 3:2 (landscape), 1:1 (detail) — konsisten agar grid terasa disiplin.

### 4.4 Motion

- Reveal: opacity 0→1 + translateY 12 px, 500–700 ms, `power2.out`, stagger 60 ms.
- Hover gambar: scale 1.03, 800 ms, caption muncul 200 ms.
- Tanpa scroll-jacking, tanpa parallax berat. `prefers-reduced-motion` menampilkan kondisi final.

---

## 5. Struktur halaman

### 5.1 Sitemap fase 1

```text
/                 Home
/portfolio        Galeri per kategori + lightbox
/info             Location guide — area yang paling sering digunakan
/services         Paket & harga (placeholder harga)
/about            Tentang TWOCHAPTER
/reviews          Review klien
/contact          Form kontak lengkap
```

### 5.2 Home — urutan section

1. **Hero** — full-bleed foto/video, wordmark terbelah `TWO / CHAPTER`, nav kiri–kanan, H1 dua baris: *"Two chapters. One story."* (copy draft).
2. **Manifesto** — paragraf besar, tanda tangan; satu potret kecil.
3. **Experiences** — 5 kartu editorial: Real Wedding, Engagement, Surprise Proposal, Honeymoon, Family & Maternity. Masing-masing: gambar 4:5, durasi, "from" placeholder.
4. **Selected Work** — grid asimetris 12 kolom, filter kategori (Semua / Couple / Family / Wedding), caption sederhana.
5. **The Experience** — 4 langkah: Enquire → Plan → Shoot → Relive (album & film).
6. **About the duo** — potret pasangan/tim + 3 paragraf; placeholder nama & bio. Konsep "two chapters" dijelaskan di sini.
7. **Testimonials** — 1 kutipan besar + navigasi manual (tanpa autoplay), label nama & sesi (placeholder).
9. **Contact CTA** — section charcoal full-bleed: "Let's write your next chapter." + tombol kontak.
10. **Footer** — wordmark, nav, sosial, kontak, `© 2026 TWOCHAPTER`.

### 5.3 About — adaptasi langsung dari referensi

1. Hero portrait/landscape + label `ABOUT`.
2. Intro personal + signature.
3. **"Five chapters"** (pengganti "5 things about me") — The Beginning, Home, Craft, Elsewhere, Coffee (placeholder isi; tab interaktif tanpa nomor).
5. CTA + footer.

### 5.4 Mobile

- Nav menjadi drawer full-screen dengan tipografi besar, bukan menu kecil.
- Gambar tetap full-bleed; caption di bawah, bukan overlay.
- Tap target ≥ 44 px; CTA inquiry sticky di bawah hanya di halaman portfolio/services.

---

## 6. Komponen utama

| Komponen | Perilaku |
|---|---|
| **Split nav** | Kiri: Portfolio, Info, Services · Tengah: wordmark · Kanan: About, Reviews, Contact. Transparan di hero, berubah jadi paper + hairline saat scroll |
| **Wordmark** | `TWOCHAPTER` dengan tracking lebar; versi monogram `TC` untuk favicon/nav |
| **Editorial figure** | Gambar + caption sederhana + hairline; placeholder tonal bila foto belum ada |
| **Chapter tabs** | Nama bab, Fraunces; aktif = ink + underline |
| **Experience card** | Gambar 4:5, judul, durasi, "from" harga, arrow; hover: image scale + caption |
| **Filter chips** | Teks sentence case dengan underline aktif, bukan pill |
| **Testimonial** | Kutipan serif 28–36 px, prev/next keyboard-accessible, tanpa autoplay |
| **Accordion FAQ** | Native `<details>` dengan styling hairline |
| **Inquiry form** | Nama, email, WhatsApp, tanggal, lokasi, jenis sesi, pesan; validasi inline; submit ke placeholder endpoint |
| **Lightbox** | Full-screen, keyboard (←/→/Esc), caption, fokus terperangkap |
| **Floating WhatsApp** | Pill kecil kanan bawah, hanya setelah scroll 60% |

---

## 7. Konten: terverifikasi vs placeholder

### 7.1 Struktur & kategori yang dipertahankan dari referensi

- Kategori layanan: **Personal, Couple, Family, Travel, Sports, Corporate & Events**.
- Lokasi Bali: **Ubud, Canggu/Seminyak, Uluwatu/Jimbaran, Mount Batur/Kintamani, Nusa Penida, Sanur**.
- Jenis deliverables: **fine-art album, wedding photojournalism, destination wedding**.
- Pola konten: pricing, FAQ, press features, journal/travel stories.

### 7.2 Wajib placeholder (data TWOCHAPTER belum tersedia)

| Data | Placeholder yang dipakai |
|---|---|
| Nama & bio fotografer | `[NAMA FOTOGRAFER]`, `[BIO SINGKAT — 2–3 kalimat]` |
| Tahun berdiri / pengalaman | `[TAHUN]`, `[XX TAHUN]` |
| Penghargaan / sertifikasi | `[PENGHARGAAN — isi jika ada]` |
| Harga & paket | `From IDR [•••]` |
| Testimoni | `[KUTIPAN KLIEN]` + `[Nama, jenis sesi, tahun]` |
| Press / publikasi | `[NAMA PUBLIKASI]` logo abu-abu |
| Kontak & sosial | `[+62 ...]`, `[email@domain]`, `[@handle]` |
| Foto & video | frame placeholder berlabel (`PHOTO 01 — Uluwatu · 4:5`) |
| Alamat / base | `[LOKASI STUDIO]` |

> Catatan penting: klaim milik Gusmank — 13 tahun pengalaman, Fujifilm X-Photographer, publikasi, dan seluruh foto — **tidak boleh** dipindahkan ke TWOCHAPTER. Yang diadopsi hanya struktur, pola penyajian, dan daftar kategori/lokasi yang bersifat umum.

---

## 8. Aksesibilitas & performa

- Semua pasangan warna teks memenuhi WCAG AA (lihat tabel).
- Fokus keyboard terlihat (`outline: 2px solid var(--brass)`, offset 4px).
- Alt text wajib; gambar dekoratif `alt=""`.
- Lightbox & drawer: focus trap, Esc, aria-modal, return focus.
- Caption tidak mengandalkan warna saja.
- Target: LCP < 2.5 s pada 4G; gambar AVIF/WebP + `srcset`; font `woff2` subset + `font-display: swap`.
- JavaScript minimal (nav, filter, lightbox, reveal); konten tetap terbaca tanpa JS.

---

## 9. Alasan ringkas pemilihan desain

1. **Ivory + tinta + kuningan** meniru "kertas album" dan menjaga foto tetap dominan; lebih hangat dan tidak generik dibanding hitam-putih tajam.
2. **Fraunces + Source Serif + Jost** memberi tiga suara yang jelas (display, bacaan, metadata) tanpa terasa seperti template wedding.
3. **Grid asimetris + penomoran bab** menciptakan karakter artistik dan mengikat nama "TWOCHAPTER" ke sistem navigasi.
4. **Satu CTA dominan** memperbaiki kelemahan referensi yang kaya narasi tetapi lemah konversi.
5. **Placeholder yang jujur** mencegah klaim palsu dan memudahkan penggantian materi nyata nanti.

---

## 10. Keputusan yang menunggu persetujuan

1. Arah desain: **A (Sun-Faded Editorial)** vs B (Nocturne Gallery).
2. Stack: **HTML + CSS + vanilla JS** (disarankan) vs Astro vs Next.js.
3. Bahasa: **English-first** (disarankan untuk tourist) vs Indonesian-first vs bilingual toggle.
4. Cakupan fase 1: **Home + About** dulu, atau langsung 6 halaman.

# 📊 RINCIAN HASIL PERFORMANCE TESTING — Spotify Web

**Perangkat Uji**

- 💻 Device: Lenovo Ideapad Gaming 3
- 🧠 CPU: AMD Ryzen 5 5600H (6-core, 12 threads, up to 4.2 GHz)
- 🧮 RAM: 8 GB DDR4
- 💾 Storage: 512 GB NVMe SSD
- 🎮 GPU: NVIDIA GTX 1650
- 🖥️ OS: Windows 11 x64
- 🌐 Browser: Google Chrome (DevTools Lighthouse, Mode Desktop)
- 🌐 Internet: Download 32.90 Mbps / Upload 33.93 Mbps

---

## 🏠 Homepage

| Metrik                   | Nilai  | Target Ideal | Status   | Keterangan                                        |
| ------------------------ | ------ | ------------ | -------- | ------------------------------------------------- |
| First Contentful Paint   | 3.0 s  | < 2.0 s      | ❌ Gagal | Terlalu lambat munculnya konten pertama di layar. |
| Largest Contentful Paint | 7.2 s  | < 2.5 s      | ❌ Gagal | Gambar/konten utama muncul terlalu lama.          |
| Total Blocking Time      | 920 ms | < 200 ms     | ❌ Gagal | JavaScript berat menghambat interaktivitas.       |
| Speed Index              | 5.1 s  | < 3.0 s      | ❌ Gagal | Rata-rata konten lambat.                          |
| Cumulative Layout Shift  | 0.088  | < 0.1        | ✅ Lolos | Layout relatif stabil saat loading.               |

---

## 🎵 Playlist

| Metrik                   | Nilai  | Target Ideal | Status   | Keterangan                                               |
| ------------------------ | ------ | ------------ | -------- | -------------------------------------------------------- |
| First Contentful Paint   | 3.1 s  | < 2.0 s      | ❌ Gagal | Terlalu lambat munculnya konten pertama.                 |
| Largest Contentful Paint | 6.6 s  | < 2.5 s      | ❌ Gagal | Konten utama seperti gambar/banner muncul sangat lambat. |
| Total Blocking Time      | 470 ms | < 200 ms     | ❌ Gagal | Proses JavaScript menghambat interaksi awal.             |
| Speed Index              | 4.5 s  | < 3.0 s      | ❌ Gagal | Rata-rata waktu konten tampil terlalu lambat.            |
| Cumulative Layout Shift  | 0.423  | < 0.1        | ❌ Gagal | Terjadi pergeseran layout yang signifikan saat loading.  |

---

## 🔍 Search Page

| Metrik                   | Nilai  | Target Ideal | Status   | Keterangan                                               |
| ------------------------ | ------ | ------------ | -------- | -------------------------------------------------------- |
| First Contentful Paint   | 3.2 s  | < 2.0 s      | ❌ Gagal | Konten awal muncul terlalu lambat.                       |
| Largest Contentful Paint | 7.0 s  | < 2.5 s      | ❌ Gagal | Konten utama seperti gambar muncul sangat lambat.        |
| Total Blocking Time      | 610 ms | < 200 ms     | ❌ Gagal | Terlalu lama pemrosesan JavaScript menghambat interaksi. |
| Speed Index              | 5.0 s  | < 3.0 s      | ❌ Gagal | Visual konten keseluruhan tampil terlalu lambat.         |
| Cumulative Layout Shift  | 0.286  | < 0.1        | ❌ Gagal | Terjadi pergeseran tata letak signifikan saat loading.   |

---

## 🔄 Transisi Halaman

| Metrik                    | Nilai  | Target Ideal | Status   | Keterangan                                      |
| ------------------------- | ------ | ------------ | -------- | ----------------------------------------------- |
| Total Blocking Time       | 280 ms | < 200 ms     | ❌ Gagal | Masih ada skrip yang menghambat interaksi awal. |
| Cumulative Layout Shift   | 0.047  | < 0.1        | ✅ Lulus | Tata letak halaman stabil saat loading.         |
| Interaction to Next Paint | 180 ms | < 200 ms     | ✅ Lulus | Respons terhadap interaksi cukup cepat.         |

---

## 💿 Album

| Metrik                   | Nilai  | Target Ideal | Status   | Keterangan                                           |
| ------------------------ | ------ | ------------ | -------- | ---------------------------------------------------- |
| First Contentful Paint   | 2.8 s  | < 2.0 s      | ❌ Gagal | Konten pertama muncul sedikit lambat.                |
| Largest Contentful Paint | 5.1 s  | < 2.5 s      | ❌ Gagal | Gambar/konten utama muncul terlalu lama.             |
| Total Blocking Time      | 330 ms | < 200 ms     | ❌ Gagal | Interaktivitas terganggu oleh pemrosesan berat.      |
| Speed Index              | 3.9 s  | < 3.0 s      | ❌ Gagal | Rata-rata tampilan halaman lebih lambat dari target. |
| Cumulative Layout Shift  | 0.079  | < 0.1        | ✅ Lolos | Layout cukup stabil saat loading.                    |

---

## 🌍 Scroll Top 100 Global

| Metrik                  | Nilai | Target Ideal | Status   | Keterangan                                            |
| ----------------------- | ----- | ------------ | -------- | ----------------------------------------------------- |
| Total Blocking Time     | 0 ms  | < 200 ms     | ✅ Lolos | Tidak ada pemblokiran yang mengganggu interaktivitas. |
| Cumulative Layout Shift | 0     | < 0.1        | ✅ Lolos | Layout sangat stabil saat loading.                    |

---

## 👤 Halaman Artis

| Metrik                   | Nilai  | Target Ideal | Status   | Keterangan                                    |
| ------------------------ | ------ | ------------ | -------- | --------------------------------------------- |
| First Contentful Paint   | 2.7 s  | < 2.0 s      | ❌ Gagal | Konten pertama muncul sedikit terlambat.      |
| Largest Contentful Paint | 4.3 s  | < 2.5 s      | ❌ Gagal | Gambar/konten utama muncul terlalu lambat.    |
| Total Blocking Time      | 380 ms | < 200 ms     | ❌ Gagal | JavaScript menghambat interaktivitas halaman. |
| Speed Index              | 4.0 s  | < 3.0 s      | ❌ Gagal | Rata-rata kecepatan loading konten lambat.    |
| Cumulative Layout Shift  | 0.075  | < 0.1        | ✅ Lolos | Layout cukup stabil saat proses pemuatan.     |

---

📝 **Catatan:** Semua pengujian dilakukan menggunakan [Lighthouse Performance Audit](https://developers.google.com/web/tools/lighthouse) pada browser Google Chrome dalam mode Desktop. Hasil dapat bervariasi tergantung beban server, ekstensi browser, dan kondisi jaringan saat pengujian.

---

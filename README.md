# Sonnet Weather
 
 Sonnet Weather adalah aplikasi mobile yang dibangun dengan Expo (React Native). Aplikasi ini menggabungkan informasi cuaca real-time dan fitur diary dengan tampilan yang modern bertema nightwind (gradient ungu gelap, icon bulan, bintang, dan langit malam).
 
 ## Fitur Utama
 
 ### Home Screen
 - **Tombol Start:** Mulai aplikasi ke halaman Weather.
 - **Dynamic Icon:** Icon matahari atau bulan di atas icon "house" yang berubah sesuai waktu (misal >6pm berubah jadi moon, >6am berubah jadi sun), atau ditap untuk merubah icon sesuai keinginan.
 - **Footer Navigasi:** Tombol navigasi dengan logo untuk berpindah ke Home, Weather, dan Diary.
 
 ### Weather Screen
 - **Akses Lokasi:** Minta izin lokasi device. Jika ditolak, menampilkan pesan bahwa lokasi ditolak.
 - **Cuaca Real-time & Forecast:** Menampilkan informasi cuaca, forecast 7 hari, dan hourly forecast.
 - **Detail Cuaca:** Tampilkan UV index, wind speed, dan pesan vibe (misal, saat kondisi tertentu yang terpenuhi maka akan menampilkan pesan seperti "🌙 The night is calm and clear. Perfect for stargazing!", dan lain-lain).
 - **Icon Dinamis:** Icon cuaca berubah sesuai kondisi (misal, ikon matahari atau bulan, dan lain-lain).
 - **Status Bar Transparan:** Agar tampilan semakin modern.
 - **Swipe Refresh:** Untuk memperbarui data cuaca.
 - **Footer Navigasi:** Tombol navigasi dengan logo untuk berpindah ke Home, Weather, dan Diary.
 
 ### Diary Screen
 - **Input Teks Diary:** Dengan background beraksen acrylic transparan yang memberikan kesan elegan.
 - **Tombol Clear All:** Tombol untuk menghapus seluruh teks diary, disertai modal pop-up sebagai konfirmasi.
 - **Word Count:** Menampilkan jumlah kata pada teks diary.
 - **Random Quote:** Menampilkan quote inspiratif secara acak dari kumpulan quote yang disediakan.
 - **Export Diary:** Tombol untuk mengekspor diary (sementara hanya tampil di terminal dan modal pop-up) sebagai tanda export berhasil.
 - **Footer Navigasi:** Tombol navigasi dengan logo untuk berpindah ke Back, Weather, dan Diary.
 
 ### Sumber Data
 - Data cuaca diambil dari [Open-Meteo API](https://open-meteo.com).
 
 ### Tema & Tampilan
 - **Tema Nightwind:** Tampilan aplikasi menggunakan gradient ungu ke ungu gelap dengan icon-icon yang mendukung suasana malam (bulan, bintang, dll).
 
 
 
 ## Setup & Instalasi
 
 ### Prasyarat
 - Node.js (versi terbaru)
 - npm atau yarn
 - Expo CLI (install melalui `npm install -g expo-cli`)
 - Git
 
 ### Langkah Instalasi
 
 1. **Clone Repository:**
    ```bash
    git clone https://github.com/username/sonnet-weather.git
    cd sonnet-weather
 
 2. **Install Dependencies**
    ```bash
    npm install
    # atau jika pakai yarn:
    yarn install
 
 3. **Jalankan server lokal**
    ```bash
    expo start
 
 4. **Scan barcode di Expo Go**
    ```bash
    Install dan buka aplikasi Expo Go di device kamu dan scan QR code yang muncul di terminal atau browser.
 
 
 

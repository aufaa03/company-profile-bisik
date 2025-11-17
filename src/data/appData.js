// src/data/appData.js

// Kita kumpulkan semua data dari .docx  ke dalam satu objek
export const appData = {
  
  // 1. Informasi Umum [cite: 4]
  general: {
    companyName: "CV. Bina Sarana Insan Kamil", // [cite: 5]
    nickname: "CV BISIK", // [cite: 5]
    tagline: "Solusi Digital Inovatif untuk Transformasi Bisnis Anda", // [cite: 5]
  },
  
  // 2. Bagian Hero [cite: 6]
  hero: {
    headline: "Ahli Pengembangan Web dan Sistem Informasi Berbasis Teknologi Terkini.", // 
    subHeadline: "Kami menyediakan layanan pemrograman web profesional, mulai dari company profile hingga sistem manajemen konten (CMS) kustom, didukung oleh tim yang berpengalaman.", // 
    ctaButtons: [
      { text: "Lihat Layanan Kami", link: "#services" },
      { text: "Konsultasi Gratis", link: "#contact" }, // 
    ],
  },
  
  // 3. Tentang Kami [cite: 8]
  about: {
    description: "CV. Bina Sarana Insan Kamil (CV BISIK) adalah penyedia solusi teknologi informasi yang berfokus pada pengembangan sistem berbasis web dan pelatihan IT. Berlokasi di Pemalang, kami berkomitmen untuk membantu klien mencapai efisiensi dan pertumbuhan bisnis melalui inovasi digital. Kami juga aktif berkontribusi pada dunia pendidikan sebagai mitra dan narasumber workshop pemrograman web.", // [cite: 9]
    values: [
      {
        title: "Keahlian Web Development",
        description: "Spesialisasi dalam pengembangan web, termasuk CMS (WordPress) dan sistem kustom.", // [cite: 9]
      },
      {
        title: "Kemitraan Pendidikan",
        description: "Aktif sebagai narasumber dan mitra Teaching Factory (TEFA), menunjukkan komitmen pada kualitas dan transfer pengetahuan.", // [cite: 9]
      },
      {
        title: "Tim Berpengalaman",
        description: "Dipimpin oleh Muhammad Hanif Abdillah, S.Kom, S.AP, M.M., yang memiliki latar belakang kuat di bidang IT dan kepemimpinan.", // [cite: 9]
      },
      {
        title: "Layanan Komprehensif",
        description: "Menyediakan layanan mulai dari konsultasi, pengembangan, hingga pelatihan.", // [cite: 9]
      },
    ],
  },

  // 4. Layanan [cite: 10]
  services: [
    {
      title: "Pengembangan Website & Company Profile",
      description: "Jasa pembuatan website profesional, responsif, dan SEO-friendly untuk meningkatkan citra dan kehadiran online perusahaan Anda.", // [cite: 11]
    },
    {
      title: "Sistem Informasi Kustom (CMS)",
      description: "Pengembangan sistem manajemen konten (CMS) dan aplikasi web kustom yang disesuaikan dengan kebutuhan spesifik bisnis Anda.", // [cite: 11]
    },
    {
      title: "Workshop & Pelatihan IT",
      description: "Menjadi narasumber dan mitra dalam pelatihan pemrograman web, khususnya Content Management System (CMS) untuk institusi pendidikan dan perusahaan.", // [cite: 11]
    },
    {
      title: "Kemitraan Teaching Factory (TEFA)",
      description: "Menjadi mitra TEFA untuk SMK/institusi pendidikan, menyediakan pengalaman kerja nyata dan transfer teknologi terbaru.", // [cite: 11]
    },
  ],

  // 5. Portofolio [cite: 12]
  portfolio: [
    {
      title: "Narasumber Workshop Pemrograman Web",
      description: "Menjadi narasumber untuk workshop pemrograman web (CMS WordPress) di institusi pendidikan.",
      category: "Pelatihan IT", // [cite: 13]
    },
    {
      title: "Kemitraan TEFA SMK PGRI 2 Taman",
      description: "Kemitraan Teaching Factory (TEFA) dengan SMK PGRI 2 Taman.",
      category: "Kemitraan Pendidikan", // [cite: 13]
    },
  ],

  // 6. Tim [cite: 14]
  team: [
    {
      name: "Muhammad Hanif Abdillah, S.Kom, S.AP, M.M.", // [cite: 15]
      position: "Direktur / CEO", // [cite: 15]
      linkedin: "https://id.linkedin.com/in/hanifabdillah", // [cite: 15]
    },
  ],
  // 7. testimoni
  testimonials: [
    {
      quote: "Layanan pengembangan web-nya sangat profesional. Sistem CMS yang dibuat sangat membantu operasional bisnis kami sehari-hari.",
      name: "Ibu Siti",
      title: "Manajer Pelatihan, Startup XYZ",
    },
    {
      quote: "Workshop (TEFA) yang dibawakan oleh tim CV BISIK sangat berbobot dan mudah dipahami. Sangat direkomendasikan!",
      name: "Bapak Drs. Karso, M.H",
      title: "Kepala Sekolah, SMK PGRI 2 Taman",
    },
    {
      quote: "Website company profile kami jadi terlihat modern dan cepat. Tim CV BISIK sangat kooperatif.",
      name: "Ahmad",
      title: "Pemilik, UMKM Maju Jaya",
    },
  ],

  // 8. Kontak [cite: 18]
  contact: {
    address: "Desa Mangli RT002 / RW001 Kec Randudongkal Kab Pemalang - Pemalang (Kab.) - Jawa Tengah", // [cite: 19]
    // Data yang belum ada kita isi string kosong, gampang di-update nanti
    email: "abdillahhanif@gmail.com", // [cite: 19]
    phone: "", // [cite: 19]
  },
};
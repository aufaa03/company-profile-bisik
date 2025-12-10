// src/data/appData.js

export const appData = {
  
  // 1. Informasi Umum
  general: {
    companyName: "CV. Bina Sarana Insan Kamil",
    nickname: "CV BISIK",
    tagline: {
      id: "Solusi Digital Inovatif untuk Transformasi Bisnis Anda",
      en: "Innovative Digital Solutions for Your Business Transformation"
    },
  },
  
  // 2. Bagian Hero
  hero: {
    headline: {
      id: "Ahli Pengembangan Web dan Sistem Informasi Berbasis Teknologi Terkini.",
      en: "Expert Web Development and Information Systems Based on Latest Technology."
    },
    subHeadline: {
      id: "Kami menyediakan layanan pemrograman web profesional, mulai dari company profile hingga sistem manajemen konten (CMS) kustom, didukung oleh tim yang berpengalaman.",
      en: "We provide professional web programming services, from company profiles to custom content management systems (CMS), supported by an experienced team."
    },
    ctaButtons: [
      { 
        text: { id: "Lihat Layanan Kami", en: "View Our Services" }, 
        link: "#services" 
      },
      { 
        text: { id: "Konsultasi Gratis", en: "Free Consultation" }, 
        link: "#contact" 
      },
    ],
  },
  
  // 3. Tentang Kami
  about: {
    title: { id: "Tentang Kami", en: "About Us" },
    description: {
      id: "CV. Bina Sarana Insan Kamil (CV BISIK) adalah penyedia solusi teknologi informasi yang berfokus pada pengembangan sistem berbasis web dan pelatihan IT. Berlokasi di Pemalang, kami berkomitmen untuk membantu klien mencapai efisiensi dan pertumbuhan bisnis melalui inovasi digital. Kami juga aktif berkontribusi pada dunia pendidikan sebagai mitra dan narasumber workshop pemrograman web.",
      en: "CV. Bina Sarana Insan Kamil (CV BISIK) is an IT solution provider focused on web-based system development and IT training. Located in Pemalang, we are committed to helping clients achieve efficiency and business growth through digital innovation. We also actively contribute to education as partners and speakers for web programming workshops."
    },
    values: [
      {
        title: { id: "Keahlian Web Development", en: "Web Development Expertise" },
        description: {
          id: "Spesialisasi dalam pengembangan web, termasuk CMS (WordPress) dan sistem kustom.",
          en: "Specializing in web development, including CMS (WordPress) and custom systems."
        },
      },
      {
        title: { id: "Kemitraan Pendidikan", en: "Educational Partnership" },
        description: {
          id: "Aktif sebagai narasumber dan mitra Teaching Factory (TEFA), menunjukkan komitmen pada kualitas dan transfer pengetahuan.",
          en: "Active as speakers and Teaching Factory (TEFA) partners, demonstrating commitment to quality and knowledge transfer."
        },
      },
      {
        title: { id: "Tim Berpengalaman", en: "Experienced Team" },
        description: {
          id: "Dipimpin oleh Muhammad Hanif Abdillah, S.Kom, S.AP, M.M., yang memiliki latar belakang kuat di bidang IT dan kepemimpinan.",
          en: "Led by Muhammad Hanif Abdillah, S.Kom, S.AP, M.M., who has a strong background in IT and leadership."
        },
      },
      {
        title: { id: "Layanan Komprehensif", en: "Comprehensive Services" },
        description: {
          id: "Menyediakan layanan mulai dari konsultasi, pengembangan, hingga pelatihan.",
          en: "Providing services ranging from consultation, development, to training."
        },
      },
    ],
  },

  // 4. Layanan
  services: [
    {
      title: { id: "Pengembangan Website & Company Profile", en: "Website Development & Company Profile" },
      description: {
        id: "Jasa pembuatan website profesional, responsif, dan SEO-friendly untuk meningkatkan citra dan kehadiran online perusahaan Anda.",
        en: "Professional, responsive, and SEO-friendly website creation services to enhance your company's image and online presence."
      },
    },
    {
      title: { id: "Sistem Informasi Kustom (CMS)", en: "Custom Information Systems (CMS)" },
      description: {
        id: "Pengembangan sistem manajemen konten (CMS) dan aplikasi web kustom yang disesuaikan dengan kebutuhan spesifik bisnis Anda.",
        en: "Development of content management systems (CMS) and custom web applications tailored to your specific business needs."
      },
    },
    {
      title: { id: "Workshop & Pelatihan IT", en: "IT Workshops & Training" },
      description: {
        id: "Menjadi narasumber dan mitra dalam pelatihan pemrograman web, khususnya Content Management System (CMS) untuk institusi pendidikan dan perusahaan.",
        en: "Serving as speakers and partners in web programming training, specifically Content Management Systems (CMS) for educational institutions and companies."
      },
    },
    {
      title: { id: "Kemitraan Teaching Factory (TEFA)", en: "Teaching Factory (TEFA) Partnership" },
      description: {
        id: "Menjadi mitra TEFA untuk SMK/institusi pendidikan, menyediakan pengalaman kerja nyata dan transfer teknologi terbaru.",
        en: "Partnering with TEFA for vocational schools/educational institutions, providing real work experience and latest technology transfer."
      },
    },
  ],

  // 5. Portofolio
  portfolio: [
    {
      title: { id: "Narasumber Workshop Pemrograman Web", en: "Web Programming Workshop Speaker" },
      description: {
        id: "Menjadi narasumber untuk workshop pemrograman web (CMS WordPress) di institusi pendidikan.",
        en: "Serving as a speaker for web programming workshops (CMS WordPress) at educational institutions."
      },
      category: { id: "Pelatihan IT", en: "IT Training" },
    },
    {
      title: { id: "Kemitraan TEFA SMK PGRI 2 Taman", en: "TEFA Partnership SMK PGRI 2 Taman" },
      description: {
        id: "Kemitraan Teaching Factory (TEFA) dengan SMK PGRI 2 Taman.",
        en: "Teaching Factory (TEFA) partnership with SMK PGRI 2 Taman."
      },
      category: { id: "Kemitraan Pendidikan", en: "Educational Partnership" },
    },
  ],

  // 6. Tim
  team: [
    {
      name: "Muhammad Hanif Abdillah, S.Kom, S.AP, M.M.",
      position: { id: "Direktur / CEO", en: "Director / CEO" },
      linkedin: "https://id.linkedin.com/in/hanifabdillah",
    },
  ],
  
  // 7. Testimoni
  testimonials: [
    {
      quote: {
        id: "Layanan pengembangan web-nya sangat profesional. Sistem CMS yang dibuat sangat membantu operasional bisnis kami sehari-hari.",
        en: "Their web development service is very professional. The CMS system created greatly helps our daily business operations."
      },
      name: "Ibu Siti",
      title: { id: "Manajer Pelatihan, Startup XYZ", en: "Training Manager, Startup XYZ" },
    },
    {
      quote: {
        id: "Workshop (TEFA) yang dibawakan oleh tim CV BISIK sangat berbobot dan mudah dipahami. Sangat direkomendasikan!",
        en: "The workshop (TEFA) presented by the CV BISIK team was very insightful and easy to understand. Highly recommended!"
      },
      name: "Bapak Drs. Karso, M.H",
      title: { id: "Kepala Sekolah, SMK PGRI 2 Taman", en: "Principal, SMK PGRI 2 Taman" },
    },
    {
      quote: {
        id: "Website company profile kami jadi terlihat modern dan cepat. Tim CV BISIK sangat kooperatif.",
        en: "Our company profile website looks modern and fast. The CV BISIK team is very cooperative."
      },
      name: "Ahmad",
      title: { id: "Pemilik, UMKM Maju Jaya", en: "Owner, UMKM Maju Jaya" },
    },
  ],

  // 8. Kontak
  contact: {
    title: { id: "Mulai Kolaborasi", en: "Start Collaboration" },
    subtitle: { 
      id: "Siap mentransformasi bisnis Anda? Hubungi kami untuk konsultasi gratis.", 
      en: "Ready to transform your business? Contact us for a free consultation." 
    },
    address: "Desa Mangli RT002 / RW001 Kec Randudongkal Kab Pemalang - Pemalang (Kab.) - Jawa Tengah",
    email: "abdillahhanif@gmail.com",
    phone: "",
    form: {
      name: { id: "Nama", en: "Name" },
      email: { id: "Email", en: "Email" },
      subject: { id: "Subjek", en: "Subject" },
      message: { id: "Pesan", en: "Message" },
      btn: { id: "Kirim Pesan", en: "Send Message" }
    }
  },
  
  // UI Labels
  ui: {
    nav: {
      home: { id: "Beranda", en: "Home" },
      about: { id: "Tentang", en: "About" },
      services: { id: "Layanan", en: "Services" },
      portfolio: { id: "Portofolio", en: "Portfolio" },
      team: { id: "Tim", en: "Team" },
      contact: { id: "Kontak", en: "Contact" },
    },
    footer: {
      company: { id: "Perusahaan", en: "Company" },
      services: { id: "Layanan", en: "Services" },
      contact: { id: "Kontak", en: "Contact" },
      rights: { id: "Hak Cipta Dilindungi.", en: "All rights reserved." },
      privacy: { id: "Kebijakan Privasi", en: "Privacy Policy" },
      terms: { id: "Syarat & Ketentuan", en: "Terms of Service" },
    },
    common: {
      scroll: { id: "Gulir", en: "Scroll" },
      seeAll: { id: "Lihat Semua", en: "See All" },
      whatTheySay: { id: "Apa Kata", en: "What They" },
      theySay: { id: "Mereka", en: "Say" },
      team: { id: "Tim", en: "Team" },
      expert: { id: "Ahli", en: "Experts" },
      behindInnovation: { id: "Orang-orang di balik inovasi kami.", en: "The people behind our innovation." },
      services: { id: "Layanan", en: "Services" },
      featured: { id: "Unggulan", en: "Featured" },
      comprehensive: { id: "Solusi komprehensif untuk kebutuhan digital dan pengembangan SDM Anda.", en: "Comprehensive solutions for your digital needs and HR development." },
      work: { id: "Karya &", en: "Work &" },
      contribution: { id: "Kontribusi", en: "Contribution" },
      trackRecord: { id: "Jejak langkah kami dalam dunia teknologi dan pendidikan.", en: "Our track record in the world of technology and education." },
      transform: { id: "Transformasi Digital Terdepan", en: "Leading Digital Transformation" },
      innovative: { id: "Inovatif", en: "Innovative" },
      digitalSolutions: { id: "Solusi Digital", en: "Digital Solutions" },
      forBusiness: { id: "untuk Bisnis Anda", en: "for Your Business" },
    }
  }
};
import { ProjectItem, CertificateItem, ExperienceItem, EducationItem, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Dimas Pratama',
  role: 'Visual & UI/UX Designer • Creative Technologist',
  location: 'Bekasi, Indonesia',
  bio: 'Desainer antarmuka digital dan identitas visual dengan pendekatan terstruktur dalam membangun sistem desain berskala, estetika visual presisi, dan pengalaman digital yang berpusat pada dampak nyata. Memadukan sensitivitas tipografi modern dengan arsitektur informasi yang intuitif.',
  tagline: 'Merancang sistem identitas visual yang distingtif, antarmuka digital bernilai tinggi, dan pengalaman pengguna yang menyatukan estetika serta fungsionalitas bisnis.',
  status: 'Tersedia untuk Kontrak & Proyek Penuh (Demo)',
  email: 'dimas.pratama.design@gmail.com',
  whatsapp: '+62 812-3456-7890',
  whatsappUrl: 'https://wa.me/6281234567890?text=Halo%20Dimas,%20saya%20tertarik%20dengan%20portfolio%20profesional%20Anda',
  github: 'https://github.com/dimaspratama-design',
  behance: 'https://behance.net/dimaspratamadesign',
  instagram: 'https://instagram.com/dimaspratama.design',
  linkedin: 'https://linkedin.com/in/dimas-pratama-design',
};

export const aboutData = {
  bio: personalInfo.bio,
  interest: 'Design Systems multi-brand, tipografi editorial kontemporer, arsitektur informasi produk digital, aksesibilitas antarmuka (WCAG 2.1 AA), dan prototipe interaksi tingkat tinggi.',
  personalValues: 'Memprioritaskan kejernihan kognitif di atas dekorasi dangkal, konsistensi token desain yang dapat diimplementasikan engineer, empati mendalam terhadap audiens pengguna, dan komitmen pada standar eksekusi kelas dunia.',
  focus: 'Fokus terkini berpusat pada perancangan Design System modular di Figma (Variables & Auto-layout v5), transisi interaksi micro-animation, serta konvergensi desain dengan framework frontend modern.',
  careerDirection: 'Bertekad untuk memimpin inisiatif desain produk dan identitas visual pada studio kreatif atau perusahaan teknologi berskala global, menjembatani visi strategi brand dengan realitas produk digital.',
  infoCards: [
    {
      id: 'card-1',
      title: 'Design Systems Architecture',
      description: 'Penyusunan library komponen modular, design tokens (warna, elevasi, spacing, tipografi), dan dokumentasi spesifikasi siap handoff bagi tim developer.',
      badge: 'Scalability',
    },
    {
      id: 'card-2',
      title: 'Digital Product & UI/UX',
      description: 'Perancangan end-to-end aplikasi web dan mobile dengan penekanan pada alur navigasi friksi-rendah, hierarki visual kuat, dan validasi usability terukur.',
      badge: 'Product Strategy',
    },
    {
      id: 'card-3',
      title: 'Brand Identity & Editorial',
      description: 'Pengembangan identitas visual holistik mencakup logo mark dinamis, guidelines 40+ halaman, mock-up kemasan realistik, dan tata letak editorial.',
      badge: 'Visual Identity',
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Product & UI/UX Design',
    description: 'Fondasi perancangan produk digital, alur pengguna, dan tata letak berbasis sistem',
    icon: 'Palette',
    skills: [
      {
        name: 'Design Systems & Tokens',
        description: 'Penyusunan arsitektur token, komponen bersarang (nested variants), dan dokumentasi panduan desain.',
        level: 'Tingkat Lanjut (Advanced)',
      },
      {
        name: 'UI Wireframing & Prototyping',
        description: 'Eksplorasi wireframe hi-fi, smart animations, komponen interaktif, dan micro-interaction states.',
        level: 'Spesialis Antarmuka',
      },
      {
        name: 'Information Architecture',
        description: 'Pemetaan alur navigasi pengguna, perancangan sitemap, content taxonomy, dan user journey map.',
        level: 'Strategis & Terstruktur',
      },
      {
        name: 'WCAG Accessibility (A11y)',
        description: 'Standar kontras warna AA/AAA, ukuran tap-target minimum 44px, dan semantik visual inklusif.',
        level: 'Standar Industri',
      },
    ],
  },
  {
    name: 'Tools & Creative Stack',
    description: 'Perangkat lunak primer industri untuk eksplorasi konseptual hingga produksi siap rilis',
    icon: 'Wrench',
    skills: [
      {
        name: 'Figma (Variables & Auto-layout)',
        description: 'Penguasaan mendalam komponen variant, property binding, interactive components, dan handoff dev.',
        level: 'Alat Desain Utama',
      },
      {
        name: 'Adobe Illustrator & Photoshop',
        description: 'Pembuatan logo berbasis kurva vektor presisi, visual poster beresolusi cetak tinggi, dan aset raster.',
        level: 'Produksi Aset Vektor',
      },
      {
        name: 'Front-End Basics (HTML/CSS/Tailwind)',
        description: 'Pemahaman implementasi CSS Grid, Flexbox, Tailwind utility classes, dan kapabilitas browser modern.',
        level: 'Handoff & Kolaborasi Dev',
      },
      {
        name: 'Notion & Linear / Jira',
        description: 'Manajemen dokumentasi proyek, backlog fitur desain, sprint planning, dan tracking deliverable.',
        level: 'Manajemen Alur Kerja',
      },
    ],
  },
  {
    name: 'Leadership & Methodology',
    description: 'Karakter profesional, metodologi pemecahan masalah, dan komunikasi lintas disiplin',
    icon: 'Sparkles',
    skills: [
      {
        name: 'Design Thinking & Sprints',
        description: 'Fasilitasi pemecahan masalah mulai dari pemahaman konteks, riset komparatif, ideasi, hingga validasi prototipe.',
        level: 'Metodologis',
      },
      {
        name: 'Cross-functional Communication',
        description: 'Kemampuan mengartikulasikan alasan setiap keputusan desain secara rasional kepada engineer dan stakeholder bisnis.',
        level: 'Artikulatif & Jelas',
      },
      {
        name: 'Attention to Detail & Polish',
        description: 'Obsesi pada konsistensi alignment 8pt grid, optical sizing tipografi, dan kebersihan kurva visual.',
        level: 'Presisi Tinggi',
      },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    period: '2025 – Sekarang',
    title: 'Lead UI/UX & Brand Designer (Practicum / Demo)',
    subtitle: 'Kreativ Studio Showcase & Freelance Client Sprints',
    description: 'Memimpin konseptualisasi dan eksekusi antarmuka digital serta sistem identitas visual untuk berbagai studi kasus klien modern. Bertanggung jawab atas standarisasi token desain, wireframe interaktif, dan panduan identitas komprehensif.',
    type: 'Praktik Desain Profesional & Studi Kasus (Demo)',
    highlights: [
      'Merancang sistem desain modular "Modulr" berisi 120+ varian komponen dengan dukungan dark/light theme tokens.',
      'Menyusun identitas visual dan kemasan produk "Svara Coffee Co." yang meningkatkan persepsi harga pasar brand premium.',
      'Mengembangkan prototipe antarmuka finansial personal "Aura FinTrack" dengan visualisasi data interaktif.',
      'Melakukan audit aksesibilitas antarmuka untuk memastikan kepatuhan standar rasio kontras WCAG 2.1 AA.',
    ],
  },
  {
    period: '2024 – 2025',
    title: 'Visual Design & Interface Specialist (Independent)',
    subtitle: 'Digital Arts Practice & Client Commissions',
    description: 'Menangani berbagai proyek identitas merek, desain editorial promosi, dan eksplorasi website landing page untuk bisnis lokal dan inisiatif komunitas kreatif.',
    type: 'Eksplorasi Profesional Mandiri (Demo)',
    highlights: [
      'Membuat 35+ template konten media sosial dengan tingkat retensi visual tinggi untuk kampanye digital.',
      'Merancang seri poster konferensi internasional "Kinetic Summit" dengan sistem tipografi grid Swiss kontemporer.',
      'Mengoptimalkan proses handoff desain ke developer melalui spesifikasi anotasi token dan spacing yang terukur.',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    period: '2024 – 2027',
    institution: 'Politeknik Digital Kreatif (Demo)',
    field: 'Desain Komunikasi Visual & Rekayasa Antarmuka Digital',
    status: 'Sedang Menempuh Pendidikan (IPK 3.86/4.00) (Demo)',
    description: 'Program studi terakreditasi dengan fokus pada arsitektur antarmuka digital, teori persepsi Gestalt, tipografi lanjut, dan metodologi perancangan produk interaktif berbasis riset pengguna.',
  },
  {
    period: '2021 – 2024',
    institution: 'SMK Negeri Kejuruan Unggulan (Demo)',
    field: 'Multimedia & Rekayasa Perangkat Lunak',
    status: 'Lulusan Terbaik Bidang Kreatif (Demo)',
    description: 'Membangun fondasi kuat dalam komputasi grafis, pemrograman antarmuka web semantik, tata letak visual cetak dan digital, serta manajemen proyek perangkat lunak.',
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google / Coursera (Credential Specimen)',
    year: '2025',
    category: 'User Experience & Product Design',
    skillsLearned: ['User Journey Mapping', 'Figma Prototyping', 'Accessibility (WCAG 2.1)', 'Design Sprint Methodology'],
    credentialId: 'GGL-UX-2025-9842A',
    description: 'Sertifikasi profesional tingkat industri yang memvalidasi penguasaan siklus lengkap desain produk: mulai dari riset dasar pengguna, wireframing, prototipe interaktif beresolusi tinggi, hingga usability testing.',
  },
  {
    id: 'cert-2',
    title: 'Design Systems & Component Architecture',
    issuer: 'Interaction Design Foundation (IxDF Specimen)',
    year: '2025',
    category: 'Design Systems',
    skillsLearned: ['Design Tokens Architecture', 'Component Variants', 'Figma Variables', 'Multi-Brand Scaling'],
    credentialId: 'IXDF-DS-2025-7731B',
    description: 'Kredensial spesialisasi yang memverifikasi kecakapan dalam membangun arsitektur sistem desain enterprise, integrasi token warna & tipografi, serta protokol handoff engineer.',
  },
  {
    id: 'cert-3',
    title: 'Advanced Visual Identity & Brand Architecture',
    issuer: 'Digital Arts & Typography Institute (Demo)',
    year: '2024',
    category: 'Branding & Typography',
    skillsLearned: ['Logomark Geometry', 'Grid Systems', 'Packaging Die-lines', 'Editorial Hierarchy'],
    credentialId: 'DATI-VIB-2024-5109C',
    description: 'Program validasi keahlian perancangan identitas merek menyeluruh, aturan safe zone, sistem warna terstandarisasi, dan penyusunan buku panduan brand guideline.',
  },
  {
    id: 'cert-4',
    title: 'Web Interface Development & Responsive Standards',
    issuer: 'Modern Web Institute (Demo Specimen)',
    year: '2024',
    category: 'Web Technology',
    skillsLearned: ['HTML5 & Semantic Markup', 'Tailwind CSS Architecture', 'Responsive Breakpoints', 'Web Performance'],
    credentialId: 'MWI-WIR-2024-2041D',
    description: 'Validasi pemahaman mendalam tentang bagaimana aset desain direalisasikan ke dalam kode antarmuka web modern yang cepat, ramah mesin pencari, dan responsif di seluruh resolusi layar.',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Svara Coffee Co. — Brand Identity & Packaging Architecture',
    category: 'Branding & Visual Identity',
    shortDescription: 'Sistem identitas visual dan arsitektur kemasan kopi specialty Nusantara dengan pendekatan tipografi modern, palet warna terakota hangat, dan buku panduan brand 36 halaman.',
    accentColor: '#D97706',
    iconName: 'Sparkles',
    overview: 'Svara Coffee Co. adalah studi kasus perancangan identitas merek roastery specialty premium yang mengangkat kekayaan biji kopi varietas pegunungan Indonesia. Merek ini membutuhkan representasi visual yang memancarkan rasa hormat pada proses agrikultur sekaligus memiliki daya saing estetika di rak ritel internasional.',
    objective: 'Menciptakan ekosistem identitas visual yang kohesif, mulai dari logo mark yang mudah diingat pada ukuran 16px hingga kemasan kopi ramah lingkungan dengan sistem pelabelan batch lot dinamis.',
    designApproach: 'Mengombinasikan tipografi serif kontemporer berkarakter kuat dengan grid Swiss yang disiplin. Mengembangkan palet warna tanah (earth tones: Terracotta, Deep Espresso, Warm Cream, dan Muted Sage) yang membangkitkan kehangatan dan keaslian rasa.',
    toolsUsed: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Dimension'],
    finalConcept: 'Panduan identitas merek (Brand Guidelines) komprehensif, file die-line kemasan kopi 250g & 1kg siap cetak, sistem kartu tasting notes, serta kit aset digital untuk e-commerce dan media sosial.',
    tags: ['Brand Identity', 'Packaging Die-lines', 'Typography System', 'Guidelines Book'],
    deliverables: ['Primary & Secondary Marks', '36-Page Brand Guidelines', 'Packaging Label Architecture', 'Tasting Cards System', 'Social Launch Kit'],
  },
  {
    id: 'project-2',
    title: 'Modulr Design System — Scalable UI Component Library',
    category: 'UI/UX & Design Systems',
    shortDescription: 'Arsitektur sistem desain multi-platform dengan 120+ varian komponen terstandarisasi, token variabel Figma, status aksesibilitas WCAG 2.1 AA, dan dokumentasi handoff dev terpadu.',
    accentColor: '#2563EB',
    iconName: 'Layout',
    overview: 'Modulr diciptakan sebagai solusi atas inefisiensi tim produk yang kerap mengalami inkonsistensi antarmuka dan duplikasi kode. Proyek ini mendefinisikan standar token global, komponen atomic, serta pola interaksi yang dapat diskalakan untuk aplikasi web maupun mobile.',
    objective: 'Mengurangi waktu pengerjaan UI sprint hingga 40% dengan menyediakan single source of truth berupa library komponen Figma yang sinkron dengan struktur kode Tailwind CSS.',
    designApproach: 'Menerapkan metodologi Atomic Design (Atoms, Molecules, Organisms). Setiap komponen dibangun menggunakan Figma Variables untuk mode Dark/Light otomatis, Auto-layout v5, dan varian interaktif dengan feedback state lengkap (Hover, Focused, Active, Disabled).',
    toolsUsed: ['Figma (Variables & Auto-layout)', 'Tailwind CSS', 'Notion'],
    finalConcept: 'Library komponen Figma dengan 120+ komponen modular, palet 10-step warna berskala luminositas perseptual, skala modular tipografi 1.25 (Major Third), dan pedoman handoff interaktif.',
    tags: ['Design Tokens', 'Figma Variables', 'Component Library', 'WCAG AA Compliant'],
    deliverables: ['120+ UI Component Sets', 'Dark / Light Theme Tokens', 'Interactive State Matrix', 'Developer Documentation', 'Accessibility Checklist'],
  },
  {
    id: 'project-3',
    title: 'Aura FinTrack — Personal Wealth & Portfolio Intelligence App',
    category: 'Product & Mobile UI/UX',
    shortDescription: 'Perancangan antarmuka aplikasi intelijen keuangan dan manajemen portofolio aset dengan visualisasi data interaktif, micro-interaction chart, dan hierarki informasi intuitif.',
    accentColor: '#10B981',
    iconName: 'Layout',
    overview: 'Aura FinTrack menyederhanakan data keuangan kompleks (alokasi aset saham, reksa dana, kripto, dan arus kas harian) menjadi dashboard mobile yang elegan, mudah dipahami dalam 3 detik pertama, dan memberikan rasa tenang secara psikologis.',
    objective: 'Menghilangkan kebingungan kognitif pada aplikasi perbankan konvensional melalui visualisasi tren interaktif, pembagian kategori pengeluaran terotomasi, dan sistem alert budget visual.',
    designApproach: 'Menggunakan layout kartu modular dengan kontras tinggi yang ramah mata (Dark Mode OLED-optimized), grafik kurva Bezier yang halus, dan tipografi monospaced numerik untuk memastikan keterbacaan digit angka finansial.',
    toolsUsed: ['Figma', 'Protopie', 'Illustrator'],
    finalConcept: 'Prototipe interaktif hi-fidelity mencakup 24+ screen flow (Onboarding, Portfolio Overview, Transaction Analytics, Asset Detail, dan Budget Goal Simulator).',
    tags: ['Mobile UI/UX', 'Financial Dashboard', 'Data Visualization', 'Dark Mode OLED'],
    deliverables: ['24+ High-Fidelity Screens', 'Interactive Mobile Prototype', 'Data Visualizer Tokens', 'Design System Specs', 'User Journey Maps'],
  },
  {
    id: 'project-4',
    title: 'Nusantara Heritage Archive — Interactive Cultural Web Experience',
    category: 'Editorial & Web Experience',
    shortDescription: 'Eksplorasi web editorial interaktif yang mendokumentasikan seni arsitektur dan artefak budaya Nusantara dengan komposisi tipografi spasial dan transisi halus.',
    accentColor: '#8B5CF6',
    iconName: 'Globe',
    overview: 'Proyek konseptual digitalisasi warisan budaya Indonesia yang mengubah arsip sejarah tradisional menjadi pengalaman membaca digital yang mendalam, imersif, dan memikat generasi muda.',
    objective: 'Menggabungkan kekuatan narasi editorial panjang (long-form storytelling) dengan micro-interaksi modern sehingga pembaca merasa menjelajahi pameran museum digital secara privat.',
    designApproach: 'Memadukan layout editorial asimetris dengan tipografi headline berkarakter agung. Memanfaatkan whitespace luas, caption monospaced untuk metadata kuratorial, serta skema navigasi scroll responsif.',
    toolsUsed: ['Figma', 'Webflow', 'Photoshop'],
    finalConcept: 'Desain web interaktif satu halaman (full desktop & mobile) dengan visual timeline kronologis, pemutar audio narasi ambient terintegrasi, dan galeri artefak resolusi tinggi.',
    tags: ['Editorial Layout', 'Cultural Archive', 'Spatial Typography', 'Immersive Web'],
    deliverables: ['Desktop Editorial Artboards', 'Mobile Reading Layout', 'Curatorial Taxonomy Sheet', 'Asset Micro-animations'],
  },
  {
    id: 'project-5',
    title: 'Kinetic Summit 2026 — International Design & Tech Conference',
    category: 'Print & Event Visual Identity',
    shortDescription: 'Identitas visual konferensi desain dan teknologi internasional, mencakup seri poster tipografi Swiss-modern, pass kartu akreditasi holografik, dan materi visual stage.',
    accentColor: '#EF4444',
    iconName: 'Calendar',
    overview: 'Kinetic Summit mempertemukan para inovator produk digital, arsitek data, dan desainer terkemuka dunia. Identitas visualnya mengangkat metafora "momentum dan konvergensi" melalui bentukan garis kinetik dinamis dan tipografi sans-serif ultra-bold.',
    objective: 'Membangun impresi acara yang berwibawa, inovatif, dan menarik perhatian para profesional industri kreatif kelas atas di panggung global.',
    designApproach: 'Penerapan sistem grid tipografi 12-kolom Swiss dengan kontras monokrom hitam-putih tajam yang diperkuat aksen warna merah sinyal (Signal Red) dan efek iridesen modern.',
    toolsUsed: ['Adobe Illustrator', 'InDesign', 'Photoshop', 'Figma'],
    finalConcept: 'Set lengkap materi promosi cetak dan digital: 3 varian poster festival format A1, badge lencana peserta ber-QR code, tampilan screen panggung LED 16:9, dan template countdown media sosial.',
    tags: ['Swiss Typography', 'Event Branding', 'High-Res Print', 'Stage Graphics'],
    deliverables: ['3x Poster Format A1 (300 DPI)', 'Attendee Accreditation Pass', 'Main Stage LED Visuals', 'Digital Social Campaign Kit'],
  },
  {
    id: 'project-6',
    title: 'Atma Living — Minimalist D2C Furniture & Interior Storefront',
    category: 'E-Commerce & Digital Storefront',
    shortDescription: 'Rancangan antarmuka toko online furnitur kayu artisan dengan fokus pada konversi checkout cepat, visualisasi material produk 360°, dan estetika zen kontemporer.',
    accentColor: '#059669',
    iconName: 'Share2',
    overview: 'Atma Living memproduksi furnitur kayu solid buatan pengrajin lokal. Website ini dirancang untuk menghadirkan ketenangan, menghargai tekstur material kayu alami, serta menyederhanakan proses pemilihan varian ukuran dan pengiriman mebel berat.',
    objective: 'Meningkatkan rasio konversi keranjang belanja melalui tata letak PDP (Product Detail Page) yang transparan, kalkulator estimasi dimensi ruang, dan checkout 2-langkah bebas distraksi.',
    designApproach: 'Komposisi monokrom hangat dengan aksen hijau pinus redup, tipografi sans-serif geometris yang bersih, dan kartu foto produk ber-rasio 4:5 yang memaksimalkan detail serat kayu alami.',
    toolsUsed: ['Figma', 'Canva Pro', 'Photoshop'],
    finalConcept: 'Prototipe komprehensif alur belanja dari Homepage kurasi, Product Catalog dengan filter multi-atribut, Halaman Detail Produk dengan pemilih tekstur kayu, hingga Ringkasan Pesanan.',
    tags: ['D2C E-Commerce', 'Product Detail Layout', 'High Conversion UI', 'Minimalist Interior'],
    deliverables: ['Homepage & Collection Grid', 'Modular Product Detail Page', 'Streamlined 2-Step Checkout', 'Mobile First Shopping UI'],
  },
];

export const personalBrandingData = {
  sectionTitle: 'More Than Just a Portfolio',
  sectionSubtitle: 'Sebuah portofolio profesional bukan sekadar etalase karya statis, melainkan representasi cara berpikir strategis, etos keahlian, dan komitmen pada kualitas solusi.',
  pillars: [
    {
      id: 'pillar-1',
      title: 'Strategic Personal Identity',
      subtitle: 'Siapa Dimas Pratama',
      description: 'Seorang desainer yang memandang antarmuka visual bukan sekadar lapisan kosmetik, melainkan sistem komunikasi presisi yang menghubungkan intensi produk dengan psikologi manusia.',
      icon: 'UserCheck',
      tag: 'Prinsip & Filosofi',
    },
    {
      id: 'pillar-2',
      title: 'Design Execution Style',
      subtitle: 'Estetika & Pendekatan Teknis',
      description: 'Berakar pada disiplin grid modern, tipografi dengan hierarki yang jelas, palet warna bernuansa tenang tanpa distorsi visual, serta pemanfaatan ruang kosong yang memberi kenyamanan bernapas pada mata audiens.',
      icon: 'Feather',
      tag: 'Ketepatan Estetika',
    },
    {
      id: 'pillar-3',
      title: 'Key Competency Areas',
      subtitle: 'Domain Spesialisasi Inti',
      description: 'Spesialisasi pada arsitektur Design Systems modular (Figma Variables & Tokens), perancangan antarmuka web & mobile berorientasi konversi, serta penyusunan identitas merek holistik.',
      icon: 'Compass',
      tag: 'Kapabilitas Kerja',
    },
    {
      id: 'pillar-4',
      title: 'Long-term Professional Vision',
      subtitle: 'Arah Karier & Visi Masa Depan',
      description: 'Menargetkan peran kepemimpinan desain (Design Lead / Staff Product Designer) yang aktif berkontribusi pada produk teknologi berdampak luas, serta membangun standar estetika digital Indonesia yang diakui global.',
      icon: 'TrendingUp',
      tag: 'Visi Jangka Panjang',
    },
  ],
};

export const cvData = {
  title: 'Curriculum Vitae',
  subtitle: 'Ringkasan komprehensif profil profesional, riwayat pencapaian, kapabilitas teknis, dan portofolio karya Dimas Pratama dalam format standar rekrutmen internasional.',
  fullName: 'Dimas Pratama',
  headline: 'Visual & UI/UX Designer • Creative Technologist',
  contactSummary: 'Bekasi, Indonesia • dimas.pratama.design@gmail.com • +62 812-3456-7890',
  summaryText: 'Desainer antarmuka digital dan spesialis identitas visual dengan rekam jejak dalam merancang sistem desain multi-platform, prototipe aplikasi mobile fungsional, dan identitas merek holistik. Memadukan kemahiran eksekusi teknis di Figma (Variables, Tokens, Auto-layout) dengan pemahaman mendalam tentang prinsip aksesibilitas antarmuka (WCAG 2.1 AA) dan kebutuhan bisnis klien. Siap berkontribusi secara langsung dalam tim produk digital inovatif.',
  coreCompetencies: [
    'Design Systems & Token Architecture (Figma Variables)',
    'UI/UX Prototyping & High-Fidelity Wireframing',
    'WCAG 2.1 AA Accessibility & Responsive Web Standards',
    'Brand Identity & Packaging Architecture',
    'Design Sprint Methodology & User Journey Mapping',
    'Front-End Collaboration (HTML, CSS Grid, Tailwind)',
  ],
  fileSize: '184 KB (Specimen PDF)',
  lastUpdated: 'Februari 2026',
};


/*
 * ALL the content of the website lives in this file.
 * To change a real value later, edit it here: components never contain text or numbers.
 *
 * DEMO: every number, brand, handle and quote below is fictional.
 */
import type {
  CaseStudy,
  Category,
  Localized,
  Photo,
  Platform,
  Rate,
  SectionConfig,
  Share,
  Testimonial,
  Video,
} from './types'

/* ------------------------------------------------------------------ */
/* Site switches                                                       */
/* ------------------------------------------------------------------ */

export const site = {
  /** Shows the fixed "Demo prototype" band. Turn off when the data is real. */
  demo: true,
  /** Section numbers, notes for Dian and the style picker. */
  reviewMode: true,
  /** 'en' or 'es'. The visitor can switch; the choice is remembered. */
  defaultLang: 'en',
  /** 'sol' (bright, Mediterranean) or 'editorial' (elegant). */
  defaultVariant: 'sol',
  dataAsOf: {
    en: 'Data as of October 2026 (demo)',
    es: 'Datos a octubre de 2026 (demo)',
  } satisfies Localized,
  mediaKitPdf: 'media-kit-demo.pdf',
} as const

/* ------------------------------------------------------------------ */
/* Sections: order, on/off, review number and notes for Dian            */
/* ------------------------------------------------------------------ */

export const sections: SectionConfig[] = [
  {
    id: 'hero',
    number: 1,
    enabled: true,
    note: {
      es: 'Primera impresión: retrato vertical, nombre, frase y botones. Necesitamos: un retrato vertical 4:5 con luz natural y tu frase definitiva.',
      id: 'Kesan pertama: foto potret vertikal, nama, tagline dan tombol. Yang dibutuhkan: foto potret vertikal 4:5 dengan cahaya alami dan tagline final.',
    },
  },
  {
    id: 'stats',
    number: 2,
    enabled: true,
    nav: { en: 'Numbers', es: 'Cifras' },
    note: {
      es: 'Cifras clave para marcas. Se calculan solas a partir de la sección 5. Necesitamos: crecimiento de seguidores de los últimos 6 meses.',
      id: 'Angka utama untuk brand. Dihitung otomatis dari bagian 5. Yang dibutuhkan: pertumbuhan followers 6 bulan terakhir.',
    },
  },
  {
    id: 'about',
    number: 3,
    enabled: true,
    nav: { en: 'About', es: 'Sobre mí' },
    note: {
      es: 'Tu historia en primera persona. Necesitamos: que revises el texto con tus palabras y 2–3 fotos de estilo de vida.',
      id: 'Ceritamu dengan kata-katamu sendiri. Yang dibutuhkan: cek teksnya dan 2–3 foto lifestyle.',
    },
  },
  {
    id: 'pillars',
    number: 4,
    enabled: true,
    note: {
      es: 'De qué hablas y en qué proporción. Necesitamos: el % aproximado de tus vídeos de cada tema.',
      id: 'Topik kontenmu dan proporsinya. Yang dibutuhkan: perkiraan % video untuk tiap topik.',
    },
  },
  {
    id: 'platforms',
    number: 5,
    enabled: true,
    nav: { en: 'Platforms', es: 'Plataformas' },
    note: {
      es: 'Una tarjeta por red. Necesitamos: capturas de las estadísticas de los últimos 90 días de cada red (seguidores, vistas, nº de vídeos, interacción).',
      id: 'Satu kartu per platform. Yang dibutuhkan: screenshot statistik 90 hari terakhir tiap platform (followers, views, jumlah video, engagement).',
    },
  },
  {
    id: 'audience',
    number: 6,
    enabled: true,
    nav: { en: 'Audience', es: 'Audiencia' },
    note: {
      es: 'Quién te ve. Necesitamos: capturas de demografía (edad, género, países, ciudades) y horas de actividad de TikTok e Instagram.',
      id: 'Siapa penontonmu. Yang dibutuhkan: screenshot demografi (umur, gender, negara, kota) dan jam aktif dari TikTok dan Instagram.',
    },
  },
  {
    id: 'videos',
    number: 7,
    enabled: true,
    nav: { en: 'Work', es: 'Vídeos' },
    note: {
      es: 'Tus 6 mejores vídeos. Necesitamos: los enlaces, una captura de portada vertical de cada uno y sus views, likes, guardados y compartidos.',
      id: '6 video terbaikmu. Yang dibutuhkan: link, cover vertikal tiap video, dan jumlah views, likes, simpan dan share.',
    },
  },
  {
    id: 'cases',
    number: 8,
    enabled: true,
    nav: { en: 'Brands', es: 'Marcas' },
    note: {
      es: 'Casos de éxito con marcas (aquí inventadas). Necesitamos: 3 colaboraciones reales que el contrato permita mostrar y sus resultados.',
      id: 'Kolaborasi sukses dengan brand (di sini fiktif). Yang dibutuhkan: 3 kolaborasi asli yang boleh ditampilkan dan hasilnya.',
    },
  },
  {
    id: 'services',
    number: 9,
    enabled: true,
    note: {
      es: 'Lo que ofreces a las marcas. Necesitamos: que marques qué servicios quieres ofrecer y cuáles no.',
      id: 'Layanan untuk brand. Yang dibutuhkan: pilih layanan mana yang mau ditawarkan dan mana yang tidak.',
    },
  },
  {
    id: 'skills',
    number: 10,
    enabled: true,
    note: {
      es: 'Herramientas e idiomas. Necesitamos: las apps que usas de verdad para grabar y editar.',
      id: 'Alat dan bahasa. Yang dibutuhkan: aplikasi yang benar-benar kamu pakai untuk rekam dan edit.',
    },
  },
  {
    id: 'timeline',
    number: 11,
    enabled: true,
    note: {
      es: 'Tu trayectoria. Necesitamos: los años reales de cada hito (inicio, primer viral, 100K, 1M, primera marca, mudanza).',
      id: 'Perjalananmu. Yang dibutuhkan: tahun asli tiap pencapaian (mulai, viral pertama, 100K, 1M, brand pertama, pindah).',
    },
  },
  {
    id: 'testimonials',
    number: 12,
    enabled: true,
    note: {
      es: 'Opiniones de marcas. Necesitamos: 2–3 frases reales de marcas, con permiso para publicarlas.',
      id: 'Testimoni dari brand. Yang dibutuhkan: 2–3 kutipan asli dari brand, dengan izin untuk dipublikasikan.',
    },
  },
  {
    id: 'rates',
    number: 13,
    enabled: true,
    nav: { en: 'Rates', es: 'Tarifas' },
    note: {
      es: 'Tarifas de ejemplo. Se puede mostrar precio o solo "Tarifas bajo petición". Necesitamos: decidir si mostramos precios y cuáles.',
      id: 'Contoh tarif. Bisa tampilkan harga atau hanya "Rates on request". Yang dibutuhkan: putuskan apakah harga ditampilkan dan berapa.',
    },
  },
  {
    id: 'contact',
    number: 14,
    enabled: true,
    nav: { en: 'Contact', es: 'Contacto' },
    note: {
      es: 'Formulario para marcas. En la demo no envía nada. Necesitamos: un email profesional nuevo (no el personal) para recibir los mensajes.',
      id: 'Formulir untuk brand. Di demo tidak mengirim apa pun. Yang dibutuhkan: email profesional baru (bukan pribadi) untuk menerima pesan.',
    },
  },
  {
    id: 'footer',
    number: 15,
    enabled: true,
    note: {
      es: 'Pie de página con nombre, redes, idioma y año. No necesitamos nada más.',
      id: 'Footer dengan nama, sosial media, bahasa dan tahun. Tidak perlu apa-apa lagi.',
    },
  },
]

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const identity = {
  firstName: 'Dian',
  /** Fictional surname for the demo. */
  lastName: 'Sekarwati',
  handle: '@dian.demo',
  city: { en: 'Málaga, Spain', es: 'Málaga, España' } satisfies Localized,
  tagline: {
    en: 'An Indonesian soul with a Spanish home. Travel, beauty and style from Málaga.',
    es: 'Alma indonesia, hogar en Málaga. Viajes, belleza y moda.',
  } satisfies Localized,
  roles: {
    en: 'Content creator · Travel, beauty & fashion',
    es: 'Creadora de contenido · Viajes, belleza y moda',
  } satisfies Localized,
  /** Words in the scrolling band under the hero. */
  keywords: [
    { en: 'Travel', es: 'Viajes' },
    { en: 'Beauty', es: 'Belleza' },
    { en: 'Fashion', es: 'Moda' },
    { en: 'Málaga', es: 'Málaga' },
    { en: 'Indonesia', es: 'Indonesia' },
    { en: 'Costa del Sol', es: 'Costa del Sol' },
    { en: 'EN · ES · ID', es: 'EN · ES · ID' },
  ] satisfies Localized[],
  portrait: {
    src: 'images/hero-portrait.svg',
    ratio: '4/5',
    alt: { en: 'Portrait of Dian in Málaga', es: 'Retrato de Dian en Málaga' },
    brief: {
      es: 'Retrato vertical 4:5, luz natural, fondo de Málaga',
      id: 'Potret vertikal 4:5, cahaya alami, latar Málaga',
    },
  } satisfies Photo,
}

/* ------------------------------------------------------------------ */
/* Platforms (section 5). Section 2 totals are computed from these.    */
/* ------------------------------------------------------------------ */

export const platforms: Platform[] = [
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@dian.demo',
    url: '',
    followers: 1_240_000,
    videos90d: 64,
    views90d: 11_840_000,
    engagementRate: 7.8,
    growth90d: 9.4,
    label: { en: 'Main platform', es: 'Red principal' },
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@dian.demo',
    url: '',
    followers: 486_000,
    videos90d: 50,
    views90d: 3_100_000,
    engagementRate: 4.9,
    growth90d: 6.1,
    label: { en: 'Reels & Stories', es: 'Reels y Stories' },
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@dian.demo',
    url: '',
    followers: 168_000,
    videos90d: 38,
    views90d: 1_558_000,
    engagementRate: 5.6,
    growth90d: 7.8,
    label: { en: 'Vlogs & Shorts', es: 'Vlogs y Shorts' },
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Dian Demo',
    url: '',
    followers: 112_000,
    videos90d: 40,
    views90d: 740_000,
    engagementRate: 2.7,
    growth90d: 3.2,
    label: { en: 'Reels', es: 'Reels' },
  },
]

/** Follower growth over the last 6 months, in % (not derivable from the 90-day data). */
export const growth6m = 18.6

/* ------------------------------------------------------------------ */
/* About (section 3)                                                   */
/* ------------------------------------------------------------------ */

export const about = {
  title: { en: 'Two cultures, one home', es: 'Dos culturas, un hogar' } satisfies Localized,
  paragraphs: [
    {
      en: 'I’m Dian, a 24-year-old Indonesian creator living in Málaga. I grew up between rice terraces and street markets, and today I wake up to the Mediterranean.',
      es: 'Soy Dian, creadora indonesia de 24 años y vivo en Málaga. Crecí entre arrozales y mercados callejeros, y hoy me despierto frente al Mediterráneo.',
    },
    {
      en: 'My content lives between those two worlds: hidden corners of Andalusia, skincare that survives the southern sun, and outfits that mix batik with linen. My audience comes for the travel and stays for the honesty.',
      es: 'Mi contenido vive entre esos dos mundos: rincones escondidos de Andalucía, cuidado de la piel que aguanta el sol del sur y looks que mezclan batik con lino. Mi audiencia llega por los viajes y se queda por la sinceridad.',
    },
    {
      en: 'I create in English, Spanish and Indonesian, which lets a brand speak to Spain, the rest of Europe and Southeast Asia with one voice.',
      es: 'Creo en inglés, español e indonesio, así que una marca puede hablarle a España, al resto de Europa y al Sudeste Asiático con una sola voz.',
    },
  ] satisfies Localized[],
  photos: [
    {
      src: 'images/about-malaga-old-town.svg',
      ratio: '4/5',
      alt: { en: 'Dian walking in Málaga old town', es: 'Dian paseando por el centro de Málaga' },
      brief: {
        es: 'Vertical 4:5, paseando por el centro histórico',
        id: 'Vertikal 4:5, jalan-jalan di kota tua',
      },
    },
    {
      src: 'images/about-beach-golden-hour.svg',
      ratio: '3/2',
      alt: { en: 'Mediterranean beach at golden hour', es: 'Playa mediterránea al atardecer' },
      brief: {
        es: 'Horizontal 3:2, playa al atardecer, sin personas de fondo',
        id: 'Horizontal 3:2, pantai saat senja, tanpa orang di latar',
      },
    },
    {
      src: 'images/about-morning-ritual.svg',
      ratio: '1/1',
      alt: { en: 'Morning coffee and skincare ritual', es: 'Ritual de café y skincare por la mañana' },
      brief: {
        es: 'Cuadrada 1:1, detalle de café o skincare, sin ventanas de casa',
        id: 'Persegi 1:1, detail kopi atau skincare, tanpa jendela rumah',
      },
    },
  ] satisfies Photo[],
}

/* ------------------------------------------------------------------ */
/* Content pillars (section 4). Percentages must add up to 100.         */
/* ------------------------------------------------------------------ */

export const pillars = {
  title: { en: 'What I create', es: 'Qué creo' } satisfies Localized,
  items: [
    {
      key: 'travel',
      share: 35,
      name: { en: 'Travel', es: 'Viajes' },
      text: {
        en: 'Andalusian villages, weekend escapes and long-haul trips home to Indonesia.',
        es: 'Pueblos andaluces, escapadas de fin de semana y viajes largos a Indonesia.',
      },
    },
    {
      key: 'beauty',
      share: 25,
      name: { en: 'Beauty', es: 'Belleza' },
      text: {
        en: 'Honest skincare and makeup for warm skin tones and strong sun.',
        es: 'Skincare y maquillaje sinceros para pieles cálidas y mucho sol.',
      },
    },
    {
      key: 'fashion',
      share: 22,
      name: { en: 'Fashion', es: 'Moda' },
      text: {
        en: 'Capsule wardrobes, local labels and batik styled for everyday Spain.',
        es: 'Armarios cápsula, marcas locales y batik para el día a día en España.',
      },
    },
    {
      key: 'cultures',
      share: 18,
      name: { en: 'Life between two cultures', es: 'Vida entre dos culturas' },
      text: {
        en: 'Food, language mix-ups and traditions from Java to the Costa del Sol.',
        es: 'Comida, líos con los idiomas y tradiciones de Java a la Costa del Sol.',
      },
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Audience (section 6). Each list adds up to 100 (or less + "other"). */
/* ------------------------------------------------------------------ */

export const audience = {
  source: {
    en: 'All platforms combined, weighted by followers.',
    es: 'Todas las redes juntas, ponderado por seguidores.',
  } satisfies Localized,
  age: [
    { label: { en: '13–17', es: '13–17' }, value: 4 },
    { label: { en: '18–24', es: '18–24' }, value: 38 },
    { label: { en: '25–34', es: '25–34' }, value: 34 },
    { label: { en: '35–44', es: '35–44' }, value: 15 },
    { label: { en: '45+', es: '45+' }, value: 9 },
  ] satisfies Share[],
  gender: [
    { label: { en: 'Women', es: 'Mujeres' }, value: 71 },
    { label: { en: 'Men', es: 'Hombres' }, value: 27 },
    { label: { en: 'Other', es: 'Otro' }, value: 2 },
  ] satisfies Share[],
  countries: [
    { label: { en: 'Spain', es: 'España' }, value: 31 },
    { label: { en: 'Indonesia', es: 'Indonesia' }, value: 24 },
    { label: { en: 'Mexico', es: 'México' }, value: 8 },
    { label: { en: 'United Kingdom', es: 'Reino Unido' }, value: 6 },
    { label: { en: 'Argentina', es: 'Argentina' }, value: 5 },
    { label: { en: 'France', es: 'Francia' }, value: 4 },
    { label: { en: 'Germany', es: 'Alemania' }, value: 4 },
    { label: { en: 'Other', es: 'Otros' }, value: 18 },
  ] satisfies Share[],
  cities: [
    { label: { en: 'Madrid', es: 'Madrid' }, value: 7.8 },
    { label: { en: 'Jakarta', es: 'Yakarta' }, value: 7.1 },
    { label: { en: 'Málaga', es: 'Málaga' }, value: 5.4 },
    { label: { en: 'Barcelona', es: 'Barcelona' }, value: 4.9 },
    { label: { en: 'Surabaya', es: 'Surabaya' }, value: 3.2 },
    { label: { en: 'Mexico City', es: 'Ciudad de México' }, value: 2.6 },
  ] satisfies Share[],
  languages: [
    { label: { en: 'Spanish', es: 'Español' }, value: 46 },
    { label: { en: 'English', es: 'Inglés' }, value: 27 },
    { label: { en: 'Indonesian', es: 'Indonesio' }, value: 22 },
    { label: { en: 'Other', es: 'Otros' }, value: 5 },
  ] satisfies Share[],
  /** Relative activity (0–100) per hour of the day, Spanish time (CET), 0h → 23h. */
  activeHours: [
    18, 12, 8, 6, 5, 6, 10, 16, 22, 26, 30, 38, 52, 64, 58, 44, 40, 46, 58, 74, 92, 100, 84, 46,
  ],
  activeHoursNote: { en: 'Spanish time (CET)', es: 'Hora española (CET)' } satisfies Localized,
}

/* ------------------------------------------------------------------ */
/* Best videos (section 7)                                             */
/* ------------------------------------------------------------------ */

export const categories: { key: Category; label: Localized }[] = [
  { key: 'travel', label: { en: 'Travel', es: 'Viajes' } },
  { key: 'beauty', label: { en: 'Beauty', es: 'Belleza' } },
  { key: 'fashion', label: { en: 'Fashion', es: 'Moda' } },
]

const videoThumb = (file: string, es: string, id: string, alt: Localized): Photo => ({
  src: `images/${file}`,
  ratio: '9/16',
  alt,
  brief: { es, id },
})

export const videos: Video[] = [
  {
    id: 'nerja-sunrise',
    category: 'travel',
    platform: 'tiktok',
    title: {
      en: 'Nerja at sunrise: the cove nobody tells you about',
      es: 'Nerja al amanecer: la cala que nadie te cuenta',
    },
    thumbnail: videoThumb(
      'video-travel-nerja-sunrise.svg',
      'Portada 9:16 del vídeo de viaje',
      'Cover 9:16 video travel',
      { en: 'Sunrise over a cove in Nerja', es: 'Amanecer sobre una cala de Nerja' },
    ),
    views: 3_400_000,
    likes: 412_000,
    saves: 58_000,
    shares: 21_000,
    url: '',
  },
  {
    id: 'glass-skin-humidity',
    category: 'beauty',
    platform: 'tiktok',
    title: {
      en: 'My Indonesian skincare routine for the Andalusian sun',
      es: 'Mi rutina de skincare indonesia para el sol andaluz',
    },
    thumbnail: videoThumb(
      'video-beauty-skincare-routine.svg',
      'Portada 9:16 del vídeo de belleza',
      'Cover 9:16 video beauty',
      { en: 'Skincare products on a sunny table', es: 'Productos de skincare en una mesa al sol' },
    ),
    views: 2_100_000,
    likes: 268_000,
    saves: 96_000,
    shares: 14_000,
    url: '',
  },
  {
    id: 'bali-malaga-capsule',
    category: 'fashion',
    platform: 'tiktok',
    title: {
      en: 'What I pack: a Bali → Málaga capsule wardrobe',
      es: 'Qué meto en la maleta: armario cápsula Bali → Málaga',
    },
    thumbnail: videoThumb(
      'video-fashion-capsule-wardrobe.svg',
      'Portada 9:16 del vídeo de moda',
      'Cover 9:16 video fashion',
      { en: 'Folded linen and batik clothes', es: 'Ropa de lino y batik doblada' },
    ),
    views: 1_600_000,
    likes: 174_000,
    saves: 61_000,
    shares: 9_800,
    url: '',
  },
  {
    id: 'batik-mediterranean',
    category: 'fashion',
    platform: 'instagram',
    title: {
      en: 'Batik meets the Mediterranean: 3 summer outfits',
      es: 'El batik conoce el Mediterráneo: 3 looks de verano',
    },
    thumbnail: videoThumb(
      'video-fashion-batik-outfits.svg',
      'Portada 9:16 del Reel de moda',
      'Cover 9:16 Reel fashion',
      { en: 'Batik fabric against a white wall', es: 'Tela batik sobre una pared blanca' },
    ),
    views: 1_200_000,
    likes: 96_000,
    saves: 33_000,
    shares: 7_400,
    url: '',
  },
  {
    id: 'spf-test',
    category: 'beauty',
    platform: 'instagram',
    title: {
      en: 'I tested 5 sunscreens for a week in Málaga',
      es: 'Probé 5 protectores solares durante una semana en Málaga',
    },
    thumbnail: videoThumb(
      'video-beauty-sunscreen-test.svg',
      'Portada 9:16 del Reel de belleza',
      'Cover 9:16 Reel beauty',
      { en: 'Five sunscreen bottles in a row', es: 'Cinco protectores solares en fila' },
    ),
    views: 980_000,
    likes: 71_000,
    saves: 42_000,
    shares: 6_100,
    url: '',
  },
  {
    id: 'malaga-48h',
    category: 'travel',
    platform: 'youtube',
    title: {
      en: 'Málaga in 48 hours on a budget',
      es: 'Málaga en 48 horas con poco presupuesto',
    },
    thumbnail: videoThumb(
      'video-travel-malaga-48h.svg',
      'Portada 9:16 del Short de viaje',
      'Cover 9:16 Short travel',
      { en: 'Málaga rooftops and the cathedral', es: 'Tejados de Málaga y la catedral' },
    ),
    views: 640_000,
    likes: 38_000,
    saves: 12_000,
    shares: 4_300,
    url: '',
  },
]

/* ------------------------------------------------------------------ */
/* Case studies (section 8). DEMO: brands are invented.                */
/* ------------------------------------------------------------------ */

export const caseStudies: CaseStudy[] = [
  {
    brand: 'Brisalia Air',
    sector: { en: 'Airline', es: 'Aerolínea' },
    campaign: {
      en: 'Launch of a new Málaga route: travel-day vlog and destination guide.',
      es: 'Lanzamiento de una nueva ruta desde Málaga: vlog del viaje y guía del destino.',
    },
    deliverables: [
      { en: '3 TikTok videos', es: '3 vídeos de TikTok' },
      { en: '1 YouTube integration', es: '1 integración en YouTube' },
      { en: '6 Instagram Stories with link', es: '6 Stories de Instagram con enlace' },
    ],
    results: [
      { label: { en: 'Views', es: 'Visualizaciones' }, value: 2_900_000 },
      { label: { en: 'Link clicks', es: 'Clics al enlace' }, value: 41_000 },
      { label: { en: 'Saves', es: 'Guardados' }, value: 88_000 },
    ],
  },
  {
    brand: 'Hotel Celindra',
    sector: { en: 'Boutique hotel, Ronda', es: 'Hotel boutique, Ronda' },
    campaign: {
      en: 'Off-season weekend stay for Spanish couples.',
      es: 'Escapada de fin de semana en temporada baja para parejas españolas.',
    },
    deliverables: [
      { en: '2 Instagram Reels', es: '2 Reels de Instagram' },
      { en: '1 TikTok video', es: '1 vídeo de TikTok' },
      { en: '20 photos with usage rights', es: '20 fotos con derechos de uso' },
    ],
    results: [
      { label: { en: 'Views', es: 'Visualizaciones' }, value: 1_100_000 },
      { label: { en: 'Bookings with code', es: 'Reservas con código' }, value: 126 },
      { label: { en: 'Code', es: 'Código' }, value: 'DIAN10' },
    ],
  },
  {
    brand: 'Nácar Cosmetics',
    sector: { en: 'Skincare', es: 'Cosmética' },
    campaign: {
      en: 'Summer SPF launch for warm and olive skin tones.',
      es: 'Lanzamiento de un SPF de verano para pieles cálidas y oliva.',
    },
    deliverables: [
      { en: '2 TikTok videos', es: '2 vídeos de TikTok' },
      { en: '3 UGC ads for paid media', es: '3 anuncios UGC para publicidad' },
    ],
    results: [
      { label: { en: 'Views', es: 'Visualizaciones' }, value: 1_800_000 },
      { label: { en: 'Sales with code', es: 'Ventas con código' }, value: 2_340 },
      { label: { en: 'Code', es: 'Código' }, value: 'DIANSUN' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Services (section 9) and skills (section 10)                        */
/* ------------------------------------------------------------------ */

export const services: { title: Localized; text: Localized }[] = [
  {
    title: { en: 'TikTok video', es: 'Vídeo de TikTok' },
    text: {
      en: 'Concept, script, filming and editing, posted on my account.',
      es: 'Idea, guion, grabación y edición, publicado en mi cuenta.',
    },
  },
  {
    title: { en: 'Reels + Stories', es: 'Reels + Stories' },
    text: {
      en: 'An Instagram Reel with a Stories sequence and link.',
      es: 'Un Reel de Instagram con secuencia de Stories y enlace.',
    },
  },
  {
    title: { en: 'YouTube integration', es: 'Integración en YouTube' },
    text: {
      en: 'A 60–90 second segment inside a travel or lifestyle vlog.',
      es: 'Un bloque de 60–90 segundos dentro de un vlog de viajes o lifestyle.',
    },
  },
  {
    title: { en: 'UGC content', es: 'Contenido UGC' },
    text: {
      en: 'Videos for your own channels and ads, with usage rights.',
      es: 'Vídeos para tus canales y anuncios, con derechos de uso.',
    },
  },
  {
    title: { en: 'Travel & event coverage', es: 'Cobertura de viajes y eventos' },
    text: {
      en: 'On-site content from hotels, destinations, launches and events.',
      es: 'Contenido en el lugar: hoteles, destinos, lanzamientos y eventos.',
    },
  },
  {
    title: { en: 'Brand ambassador', es: 'Embajadora de marca' },
    text: {
      en: 'A long-term partnership with a monthly content plan.',
      es: 'Una relación a largo plazo con un plan de contenido mensual.',
    },
  },
  {
    title: { en: 'Content in 3 languages', es: 'Contenido en 3 idiomas' },
    text: {
      en: 'English, Spanish and Indonesian: one creator for Europe and Southeast Asia.',
      es: 'Inglés, español e indonesio: una creadora para Europa y el Sudeste Asiático.',
    },
  },
]

export const skills = {
  groups: [
    {
      title: { en: 'Production', es: 'Producción' },
      items: [
        { en: 'Filming on phone & mirrorless', es: 'Grabación con móvil y cámara' },
        { en: 'Editing: CapCut, Premiere Pro', es: 'Edición: CapCut, Premiere Pro' },
        { en: 'Photography & colour grading', es: 'Fotografía y color' },
        { en: 'Scriptwriting & storytelling', es: 'Guion y storytelling' },
      ],
    },
    {
      title: { en: 'Markets', es: 'Mercados' },
      items: [
        { en: 'Spain & Southern Europe', es: 'España y sur de Europa' },
        { en: 'Southeast Asia (Indonesia, Malaysia)', es: 'Sudeste Asiático (Indonesia, Malasia)' },
        { en: 'Spanish-speaking Latin America', es: 'Latinoamérica hispanohablante' },
      ],
    },
  ],
  languages: [
    { name: { en: 'Indonesian', es: 'Indonesio' }, level: { en: 'Native', es: 'Nativo' }, value: 100 },
    { name: { en: 'English', es: 'Inglés' }, level: { en: 'Fluent', es: 'Fluido' }, value: 90 },
    { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Advanced', es: 'Avanzado' }, value: 75 },
  ],
}

/* ------------------------------------------------------------------ */
/* Timeline (section 11)                                               */
/* ------------------------------------------------------------------ */

export const timeline: { year: string; title: Localized; text: Localized }[] = [
  {
    year: '2020',
    title: { en: 'First videos', es: 'Primeros vídeos' },
    text: { en: 'Started posting street food and markets from Indonesia.', es: 'Empecé a publicar comida callejera y mercados desde Indonesia.' },
  },
  {
    year: '2021',
    title: { en: 'First viral video', es: 'Primer vídeo viral' },
    text: { en: '1.1M views on a hidden waterfall guide.', es: '1,1 M de visualizaciones con una guía de una cascada escondida.' },
  },
  {
    year: '2021',
    title: { en: '100K followers', es: '100 mil seguidores' },
    text: { en: 'Reached 100K on TikTok.', es: 'Llegué a 100 mil en TikTok.' },
  },
  {
    year: '2022',
    title: { en: 'First brand partnership', es: 'Primera colaboración' },
    text: { en: 'A travel campaign with a regional tourism board.', es: 'Una campaña de viajes con una oficina de turismo regional.' },
  },
  {
    year: '2023',
    title: { en: 'New home in Málaga', es: 'Nuevo hogar en Málaga' },
    text: { en: 'Moved to Spain and started creating in Spanish.', es: 'Me mudé a España y empecé a crear en español.' },
  },
  {
    year: '2024',
    title: { en: '1M on TikTok', es: '1 millón en TikTok' },
    text: { en: 'One million followers and a YouTube channel launch.', es: 'Un millón de seguidores y estreno del canal de YouTube.' },
  },
  {
    year: '2026',
    title: { en: '2M across platforms', es: '2 millones entre todas las redes' },
    text: { en: 'Focused on long-term partnerships with European brands.', es: 'Enfocada en colaboraciones a largo plazo con marcas europeas.' },
  },
]

/* ------------------------------------------------------------------ */
/* Testimonials (section 12). DEMO: brands and quotes are invented.     */
/* ------------------------------------------------------------------ */

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: 'Dian understood our hotel better than some of our staff. The bookings with her code paid for the campaign in three weeks.',
      es: 'Dian entendió nuestro hotel mejor que parte del equipo. Las reservas con su código pagaron la campaña en tres semanas.',
    },
    role: { en: 'Marketing lead', es: 'Responsable de marketing' },
    brand: 'Hotel Celindra',
  },
  {
    quote: {
      en: 'Professional, on time and with ideas we had not thought of. Her audience in Spain and Indonesia gave us two markets in one.',
      es: 'Profesional, puntual y con ideas que no se nos habían ocurrido. Su audiencia en España e Indonesia nos dio dos mercados en uno.',
    },
    role: { en: 'Brand manager', es: 'Brand manager' },
    brand: 'Lino & Sal',
  },
  {
    quote: {
      en: 'The UGC videos she made for us still are our best-performing ads.',
      es: 'Los vídeos UGC que nos hizo siguen siendo nuestros anuncios con mejores resultados.',
    },
    role: { en: 'Growth manager', es: 'Growth manager' },
    brand: 'Kopi Sur Coffee',
  },
]

/* ------------------------------------------------------------------ */
/* Rates (section 13)                                                  */
/* ------------------------------------------------------------------ */

export const rates = {
  /** false shows "Rates on request" instead of prices. */
  showPrices: true,
  currency: 'EUR',
  items: [
    { service: { en: 'TikTok video', es: 'Vídeo de TikTok' }, detail: { en: '30–60 s, 1 revision', es: '30–60 s, 1 revisión' }, price: 1800 },
    { service: { en: 'Reel + 3 Stories', es: 'Reel + 3 Stories' }, detail: { en: 'Instagram, with link sticker', es: 'Instagram, con enlace' }, price: 1400 },
    { service: { en: 'YouTube integration', es: 'Integración en YouTube' }, detail: { en: '60–90 s segment', es: 'Bloque de 60–90 s' }, price: 2200 },
    { service: { en: 'UGC pack', es: 'Pack UGC' }, detail: { en: '3 videos, 6 months of usage rights', es: '3 vídeos, 6 meses de derechos' }, price: 950 },
    { service: { en: 'Travel or event coverage', es: 'Cobertura de viaje o evento' }, detail: { en: '2 days on site', es: '2 días en el lugar' }, price: 3500, from: true },
    { service: { en: 'Brand ambassador', es: 'Embajadora de marca' }, detail: { en: 'Monthly plan, 3+ months', es: 'Plan mensual, 3+ meses' }, price: 4500, from: true },
  ] satisfies Rate[],
}

/* ------------------------------------------------------------------ */
/* Contact form (section 14)                                           */
/* ------------------------------------------------------------------ */

export const contact = {
  budgets: [
    { en: 'Under €1,000', es: 'Menos de 1.000 €' },
    { en: '€1,000 – €3,000', es: '1.000 – 3.000 €' },
    { en: '€3,000 – €10,000', es: '3.000 – 10.000 €' },
    { en: 'Over €10,000', es: 'Más de 10.000 €' },
    { en: 'Not sure yet', es: 'Aún no lo sé' },
  ] satisfies Localized[],
  types: [
    { en: 'Sponsored video', es: 'Vídeo patrocinado' },
    { en: 'UGC content', es: 'Contenido UGC' },
    { en: 'Travel or event', es: 'Viaje o evento' },
    { en: 'Brand ambassador', es: 'Embajadora de marca' },
    { en: 'Something else', es: 'Otra cosa' },
  ] satisfies Localized[],
}

/* ------------------------------------------------------------------ */
/* Interface text                                                      */
/* ------------------------------------------------------------------ */

export const ui = {
  demoBand: { en: 'Demo prototype · all data is fictional', es: 'Prototipo demo · todos los datos son ficticios' },
  skipToContent: { en: 'Skip to content', es: 'Saltar al contenido' },
  menu: { en: 'Menu', es: 'Menú' },
  close: { en: 'Close', es: 'Cerrar' },
  language: { en: 'Language', es: 'Idioma' },
  workWithMe: { en: 'Work with me', es: 'Trabaja conmigo' },
  heroStats: {
    followers: { en: 'followers', es: 'seguidores' },
    views: { en: 'views in 90 days', es: 'views en 90 días' },
    engagement: { en: 'engagement', es: 'engagement' },
  },
  downloadKit: { en: 'Download media kit', es: 'Descargar media kit' },
  stats: {
    title: { en: 'The numbers', es: 'Las cifras' },
    followers: { en: 'Total followers', es: 'Seguidores totales' },
    views90: { en: 'Views, last 90 days', es: 'Visualizaciones, últimos 90 días' },
    avgViews: { en: 'Average views per video', es: 'Media de visualizaciones por vídeo' },
    engagement: { en: 'Average engagement rate', es: 'Engagement medio' },
    growth6m: { en: 'Follower growth, last 6 months', es: 'Crecimiento, últimos 6 meses' },
  },
  platforms: {
    title: { en: 'Where my audience is', es: 'Dónde está mi audiencia' },
    followers: { en: 'Followers', es: 'Seguidores' },
    avgViews: { en: 'Avg. views', es: 'Media de views' },
    engagement: { en: 'Engagement', es: 'Engagement' },
    growth: { en: 'Growth 90 d', es: 'Crecimiento 90 d' },
    share: { en: 'of total followers', es: 'del total de seguidores' },
    visit: { en: 'View profile', es: 'Ver perfil' },
  },
  audience: {
    title: { en: 'Who watches', es: 'Quién me ve' },
    age: { en: 'Age', es: 'Edad' },
    gender: { en: 'Gender', es: 'Género' },
    countries: { en: 'Top countries', es: 'Países principales' },
    cities: { en: 'Top cities', es: 'Ciudades principales' },
    languages: { en: 'Languages', es: 'Idiomas' },
    hours: { en: 'Most active hours', es: 'Horas de más actividad' },
  },
  videos: {
    title: { en: 'Best performing videos', es: 'Vídeos con mejores resultados' },
    all: { en: 'All', es: 'Todos' },
    views: { en: 'Views', es: 'Views' },
    likes: { en: 'Likes', es: 'Likes' },
    saves: { en: 'Saves', es: 'Guardados' },
    shares: { en: 'Shares', es: 'Compartidos' },
    watch: { en: 'Watch', es: 'Ver vídeo' },
    filterLabel: { en: 'Filter videos by category', es: 'Filtrar vídeos por categoría' },
  },
  cases: {
    title: { en: 'Brand partnerships', es: 'Colaboraciones con marcas' },
    delivered: { en: 'Delivered', es: 'Entregado' },
    results: { en: 'Results', es: 'Resultados' },
    demoBrand: { en: 'Fictional brand', es: 'Marca ficticia' },
  },
  services: { title: { en: 'How we can work together', es: 'Cómo podemos trabajar juntos' } },
  skills: {
    title: { en: 'Skills', es: 'Habilidades' },
    languages: { en: 'Languages', es: 'Idiomas' },
  },
  timeline: { title: { en: 'My journey', es: 'Mi trayectoria' } },
  testimonials: { title: { en: 'What brands say', es: 'Lo que dicen las marcas' } },
  rates: {
    title: { en: 'Rates', es: 'Tarifas' },
    from: { en: 'from', es: 'desde' },
    onRequest: { en: 'Rates on request', es: 'Tarifas bajo petición' },
    note: {
      en: 'Indicative prices, VAT not included. Packages and usage rights are quoted per project.',
      es: 'Precios orientativos, IVA no incluido. Los paquetes y derechos de uso se presupuestan por proyecto.',
    },
  },
  contact: {
    title: { en: 'Let’s create together', es: 'Creemos algo juntos' },
    intro: {
      en: 'Tell me about your brand and your idea. I usually reply within two working days.',
      es: 'Cuéntame sobre tu marca y tu idea. Suelo responder en dos días laborables.',
    },
    name: { en: 'Name', es: 'Nombre' },
    company: { en: 'Company', es: 'Empresa' },
    email: { en: 'Work email', es: 'Email de trabajo' },
    budget: { en: 'Approximate budget', es: 'Presupuesto aproximado' },
    type: { en: 'Type of collaboration', es: 'Tipo de colaboración' },
    message: { en: 'Message', es: 'Mensaje' },
    choose: { en: 'Choose one', es: 'Elige una opción' },
    send: { en: 'Send message', es: 'Enviar mensaje' },
    demoSent: {
      en: 'This is a demo: nothing was sent. In the real website your message would reach Dian.',
      es: 'Esto es una demo: no se ha enviado nada. En la web real tu mensaje le llegaría a Dian.',
    },
    required: { en: 'Please fill in this field.', es: 'Rellena este campo.' },
    invalidEmail: { en: 'Please enter a valid email.', es: 'Introduce un email válido.' },
    elsewhere: { en: 'Or find me on', es: 'O encuéntrame en' },
  },
  footer: {
    rights: { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
  },
  review: {
    note: { es: 'Nota para Dian', id: 'Catatan untuk Dian' },
    style: { es: 'Estilo', id: 'Gaya' },
    variants: {
      sol: { es: 'A · Sol mediterráneo', id: 'A · Matahari Mediterania' },
      editorial: { es: 'B · Editorial', id: 'B · Editorial' },
    },
    photo: { es: 'Foto', id: 'Foto' },
    demoLink: { en: 'Link added with real data', es: 'Enlace cuando haya datos reales' },
  },
}

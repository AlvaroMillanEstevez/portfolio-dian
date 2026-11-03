/*
 * ALL the content of the website lives in this file.
 * To change a value later, edit it here: components never contain text or numbers.
 *
 * Numbers come from Dian's TikTok and Instagram analytics (October 2026).
 */
import type { AudienceSet, CaseStudy, Category, Localized, Photo, Platform, Rate, SectionConfig, Video } from './types'

/* ------------------------------------------------------------------ */
/* Site switches                                                       */
/* ------------------------------------------------------------------ */

export const site = {
  /** Shows the fixed "Demo prototype" band. */
  demo: false,
  /** Section numbers and notes for Dian. */
  reviewMode: true,
  /** 'en' or 'es'. The visitor can switch; the choice is remembered. */
  defaultLang: 'en',
  dataAsOf: { en: 'Data from October 2026', es: 'Datos de octubre de 2026' } satisfies Localized,
  mediaKitPdf: 'media-kit.pdf',
} as const

/* ------------------------------------------------------------------ */
/* Sections: order, on/off, review number and notes for Dian            */
/* ------------------------------------------------------------------ */

export const sections: SectionConfig[] = [
  {
    id: 'hero',
    number: 1,
    enabled: true,
    nav: { en: 'Home', es: 'Inicio' },
    note: {
      es: 'Nombre, tu frase, botones y tu foto.',
      id: 'Nama, tagline, tombol dan fotomu.',
    },
  },
  {
    id: 'stats',
    number: 2,
    enabled: true,
    note: {
      es: 'Cifras reales de octubre de TikTok + Instagram, calculadas a partir de la sección 5.',
      id: 'Angka asli bulan Oktober dari TikTok + Instagram, dihitung dari bagian 5.',
    },
  },
  {
    id: 'about',
    number: 3,
    enabled: true,
    nav: { en: 'About', es: 'Sobre mí' },
    note: {
      es: 'Tu texto y la polaroid. Faltan: una foto horizontal 3:2 (playa o paisaje) y una cuadrada 1:1 (detalle: café, comida, producto).',
      id: 'Teksmu dan polaroid. Yang kurang: satu foto horizontal 3:2 (pantai atau pemandangan) dan satu persegi 1:1 (detail: kopi, makanan, produk).',
    },
  },
  {
    id: 'pillars',
    number: 4,
    enabled: true,
    note: {
      es: 'Tus 6 temas, sin porcentajes.',
      id: '6 topik kontenmu, tanpa persentase.',
    },
  },
  {
    id: 'platforms',
    number: 5,
    enabled: true,
    note: {
      es: 'TikTok e Instagram con las cifras de octubre. El engagement se calcula como (likes + comentarios + compartidos) / views.',
      id: 'TikTok dan Instagram dengan angka bulan Oktober. Engagement dihitung dari (like + komen + share) / views.',
    },
  },
  {
    id: 'audience',
    number: 6,
    enabled: true,
    note: {
      es: 'Datos de tus capturas, separados por red. TikTok no mostraba edad ni idiomas, así que ahí solo salen género y países.',
      id: 'Data dari screenshot-mu, dipisah per platform. TikTok tidak menampilkan umur dan bahasa, jadi di sana hanya gender dan negara.',
    },
  },
  {
    id: 'videos',
    number: 7,
    enabled: true,
    nav: { en: 'Portfolio', es: 'Portfolio' },
    note: {
      es: 'Tus enlaces, con portada y cifras públicas de TikTok. Instagram no muestra las cifras sin iniciar sesión. Los títulos los he escrito a partir de tus textos: cámbialos si quieres.',
      id: 'Link-mu, dengan cover dan angka publik dari TikTok. Instagram tidak menampilkan angka tanpa login. Judulnya aku tulis dari caption-mu: ganti saja kalau mau.',
    },
  },
  {
    id: 'cases',
    number: 8,
    enabled: false,
    note: {
      es: 'Oculta hasta que tengas tu primera colaboración.',
      id: 'Disembunyikan sampai ada kolaborasi pertama.',
    },
  },
  {
    id: 'services',
    number: 9,
    enabled: true,
    nav: { en: 'Services', es: 'Servicios' },
    note: {
      es: 'Sin YouTube y con contenido en 2 idiomas.',
      id: 'Tanpa YouTube dan konten dalam 2 bahasa.',
    },
  },
  {
    id: 'skills',
    number: 10,
    enabled: true,
    note: {
      es: 'Español en nivel principiante. Falta: confirmar las apps y el equipo que usas para grabar y editar.',
      id: 'Bahasa Spanyol level pemula. Yang kurang: konfirmasi aplikasi dan alat untuk rekam dan edit.',
    },
  },
  {
    id: 'timeline',
    number: 11,
    enabled: false,
    note: {
      es: 'Oculta, como pediste.',
      id: 'Disembunyikan, sesuai permintaanmu.',
    },
  },
  {
    id: 'why',
    number: 12,
    enabled: true,
    note: {
      es: 'En lugar de opiniones de marcas: lo que ofreces. Cuando tengas opiniones reales, las ponemos aquí.',
      id: 'Pengganti testimoni brand: apa yang kamu tawarkan. Kalau sudah ada testimoni asli, kita taruh di sini.',
    },
  },
  {
    id: 'rates',
    number: 13,
    enabled: true,
    note: {
      es: 'Servicios sin precios públicos: cada marca pide presupuesto por privado. Con tu nota de colaboraciones en el lugar.',
      id: 'Layanan tanpa harga publik: setiap brand minta penawaran secara pribadi. Dengan catatan kolaborasi di lokasi.',
    },
  },
  {
    id: 'contact',
    number: 14,
    enabled: true,
    nav: { en: 'Contact', es: 'Contacto' },
    note: {
      es: 'Tu texto, tu email visible y el formulario, que envía los mensajes a ese mismo email.',
      id: 'Teksmu, email-mu yang terlihat dan formulir yang mengirim pesan ke email yang sama.',
    },
  },
  {
    id: 'footer',
    number: 15,
    enabled: true,
    note: {
      es: 'Tu logo completo, sello y redes.',
      id: 'Logo lengkapmu, stempel dan sosial media.',
    },
  },
]

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const identity = {
  firstName: 'Dian',
  lastName: 'Novitasari',
  handle: '@diannvtsrrr_',
  city: { en: 'Málaga, Spain', es: 'Málaga, España' } satisfies Localized,
  /** Line under the name. */
  tagline: {
    en: 'Discovering places. Capturing moments. Inspiring journeys.',
    es: 'Descubrir lugares. Capturar momentos. Inspirar viajes.',
  } satisfies Localized,
  /** "{role} based in {city}". */
  role: { en: 'Indonesian content creator', es: 'Creadora de contenido indonesia' } satisfies Localized,
  intro: {
    en: 'Creating authentic, visually engaging content that brings brands, destinations and experiences to life while connecting with a global audience.',
    es: 'Creo contenido auténtico y muy visual que da vida a marcas, destinos y experiencias, conectando con una audiencia global.',
  } satisfies Localized,
  /** Spaced capitals under the name in the logo. */
  roles: {
    en: 'Travel · Lifestyle · Content creator',
    es: 'Viajes · Lifestyle · Creadora de contenido',
  } satisfies Localized,
  /** Handwritten signature line. */
  motto: { en: 'Travel · Create · Review · Share', es: 'Viaja · Crea · Opina · Comparte' } satisfies Localized,
  portrait: {
    src: 'images/hero-portrait.webp',
    ratio: '4/5',
    focus: '50% 80%',
    alt: { en: 'Dian in a flower garden in Madrid', es: 'Dian en un jardín de flores en Madrid' },
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
    handle: '@matchabluberry8',
    url: 'https://www.tiktok.com/@matchabluberry8',
    followers: 22_300,
    viewsMonth: 2_100_000,
    likes: 171_400,
    comments: 5_900,
    shares: 31_400,
    label: { en: 'Mini-vlogs & food', es: 'Mini-vlogs y comida' },
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@diannvtsrrr_',
    url: 'https://www.instagram.com/diannvtsrrr_/',
    followers: 3_800,
    viewsMonth: 3_500_000,
    likes: 296_000,
    comments: 2_000,
    shares: 18_000,
    label: { en: 'Reels & fashion', es: 'Reels y moda' },
  },
]

export const about = {
  title: { en: 'Two cultures, one story', es: 'Dos culturas, una historia' } satisfies Localized,
  /** Handwritten caption under the first photo, shown as an instant photo. */
  polaroid: { en: 'Málaga', es: 'Málaga' } satisfies Localized,
  paragraphs: [
    {
      en: 'I’m Dian, a content creator from Indonesia who now calls Málaga home. I started creating because I love sharing what I experience so others can enjoy it too, and because some moments are simply too good not to keep.',
      es: 'Soy Dian, creadora de contenido de Indonesia y ahora Málaga es mi casa. Empecé a crear porque me encanta compartir lo que vivo para que otros también lo disfruten, y porque hay momentos demasiado bonitos para no guardarlos.',
    },
    {
      en: 'That’s why my camera comes everywhere with me: to famous spots and hidden gems, to the café I can’t stop thinking about, to the outfit I planned for the trip and the product I’ve actually tried. Some days become a mini-vlog, others a review, but every story is told the way I’d tell a friend.',
      es: 'Por eso mi cámara va conmigo a todas partes: a lugares famosos y rincones escondidos, a ese café que no me quito de la cabeza, al look que preparé para el viaje y al producto que he probado de verdad. Algunos días se convierten en un mini-vlog y otros en una reseña, pero siempre lo cuento como se lo contaría a una amiga.',
    },
    {
      en: 'I share these stories in English and Indonesian, and I’m learning Spanish along the way. For brands, that means one honest voice that reaches people in Europe and Southeast Asia.',
      es: 'Comparto estas historias en inglés e indonesio, y voy aprendiendo español por el camino. Para las marcas, eso significa una voz sincera que llega a Europa y al Sudeste Asiático.',
    },
  ] satisfies Localized[],
  photos: [
    {
      src: 'images/about-malaga-marina.webp',
      ratio: '4/5',
      focus: '50% 85%',
      alt: { en: 'Dian at Puerto Marina, Benalmádena', es: 'Dian en Puerto Marina, Benalmádena' },
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
/* Content focus (section 4)                                           */
/* ------------------------------------------------------------------ */

export const pillars = {
  title: { en: 'Content focus', es: 'Mi contenido' } satisfies Localized,
  /** icon: travel | place | food | product | vlog | fashion (see sections/Pillars.tsx). */
  items: [
    {
      icon: 'travel',
      name: { en: 'Travel', es: 'Viajes' },
      text: {
        en: 'City breaks, day trips and festivals across Spain.',
        es: 'Escapadas, excursiones de un día y fiestas por toda España.',
      },
    },
    {
      icon: 'place',
      name: { en: 'Popular spots & hidden gems', es: 'Lugares famosos y rincones escondidos' },
      text: {
        en: 'The places everyone talks about, and the ones nobody has found yet.',
        es: 'Los sitios de los que todos hablan y los que nadie ha descubierto todavía.',
      },
    },
    {
      icon: 'food',
      name: { en: 'Food reviews', es: 'Reseñas gastronómicas' },
      text: {
        en: 'Honest reviews of cafés, restaurants and Indonesian food in Spain.',
        es: 'Reseñas sinceras de cafés, restaurantes y comida indonesia en España.',
      },
    },
    {
      icon: 'product',
      name: { en: 'UGC & product reviews', es: 'UGC y reseñas de producto' },
      text: {
        en: 'Real tests and ready-to-use videos for your own channels.',
        es: 'Pruebas reales y vídeos listos para tus propios canales.',
      },
    },
    {
      icon: 'vlog',
      name: { en: 'Mini-vlogs', es: 'Mini-vlogs' },
      text: {
        en: 'A day, a trip or a small moment told in under a minute.',
        es: 'Un día, un viaje o un pequeño momento contados en menos de un minuto.',
      },
    },
    {
      icon: 'fashion',
      name: { en: 'Fashion', es: 'Moda' },
      text: {
        en: 'Modest outfits for travel days, city walks and the seaside.',
        es: 'Looks modestos para viajar, pasear por la ciudad y la playa.',
      },
    },
  ] as const,
}

/* ------------------------------------------------------------------ */
/* Audience (section 6), one set per platform, from the app insights.  */
/* ------------------------------------------------------------------ */

const women = { en: 'Women', es: 'Mujeres' }
const men = { en: 'Men', es: 'Hombres' }
const indonesia = { en: 'Indonesia', es: 'Indonesia' }
const other = { en: 'Other', es: 'Otros' }

export const audience: AudienceSet[] = [
  {
    platform: 'instagram',
    period: { en: 'October 2026', es: 'octubre de 2026' },
    gender: [
      { label: women, value: 65.5 },
      { label: men, value: 34.5 },
    ],
    age: [
      { label: { en: '13–17', es: '13–17' }, value: 6.1 },
      { label: { en: '18–24', es: '18–24' }, value: 24 },
      { label: { en: '25–34', es: '25–34' }, value: 48 },
      { label: { en: '35–44', es: '35–44' }, value: 14.4 },
      { label: { en: '45–54', es: '45–54' }, value: 5.1 },
      { label: { en: '55–64', es: '55–64' }, value: 1.8 },
      { label: { en: '65+', es: '65+' }, value: 0.7 },
    ],
    countries: [
      { label: indonesia, value: 72.7 },
      { label: { en: 'Morocco', es: 'Marruecos' }, value: 3.6 },
      { label: { en: 'Brazil', es: 'Brasil' }, value: 3.5 },
      { label: { en: 'Algeria', es: 'Argelia' }, value: 3.5 },
      { label: { en: 'India', es: 'India' }, value: 1.3 },
      { label: other, value: 15.4 },
    ],
    languages: [
      { label: { en: 'Indonesian', es: 'Indonesio' }, value: 73.9 },
      { label: { en: 'Arabic', es: 'Árabe' }, value: 7.8 },
      { label: { en: 'English', es: 'Inglés' }, value: 4.3 },
      { label: { en: 'Spanish', es: 'Español' }, value: 3.6 },
      { label: { en: 'Portuguese', es: 'Portugués' }, value: 3.6 },
      { label: other, value: 6.8 },
    ],
    // Read off the Sunday chart in Instagram insights (3-hour slots, GMT+1).
    activeHours: {
      day: { en: 'Sunday', es: 'Domingo' },
      slots: [
        { label: '0h', value: 56 },
        { label: '3h', value: 79 },
        { label: '6h', value: 87 },
        { label: '9h', value: 90 },
        { label: '12h', value: 100 },
        { label: '15h', value: 93 },
        { label: '18h', value: 44 },
        { label: '21h', value: 24 },
      ],
    },
    peak: {
      en: 'Most active: Friday 12–15 h and Saturday 12–18 h (Spanish time)',
      es: 'Más activos: viernes de 12 a 15 h y sábado de 12 a 18 h (hora española)',
    },
  },
  {
    platform: 'tiktok',
    period: { en: '5 Oct – 1 Nov 2026', es: '5 oct – 1 nov 2026' },
    gender: [
      { label: women, value: 81 },
      { label: men, value: 19 },
    ],
    countries: [
      { label: indonesia, value: 93.2 },
      { label: { en: 'Malaysia', es: 'Malasia' }, value: 1.5 },
      { label: { en: 'Spain', es: 'España' }, value: 1.2 },
      { label: { en: 'United States', es: 'Estados Unidos' }, value: 0.8 },
      { label: { en: 'Taiwan', es: 'Taiwán' }, value: 0.7 },
      { label: other, value: 2.6 },
    ],
    peak: {
      en: 'Most active: Monday 0–1 h (Spanish time)',
      es: 'Más activos: lunes de 0 a 1 h (hora española)',
    },
  },
]

/* ------------------------------------------------------------------ */
/* Portfolio (section 7): Dian's own picks, in her order.               */
/* ------------------------------------------------------------------ */

export const categories: { key: Category; label: Localized }[] = [
  { key: 'travel', label: { en: 'Travel', es: 'Viajes' } },
  { key: 'food', label: { en: 'Food & drink', es: 'Gastronomía' } },
  { key: 'vlog', label: { en: 'Mini-vlogs & lifestyle', es: 'Mini-vlogs y lifestyle' } },
  { key: 'fashion', label: { en: 'Fashion', es: 'Moda' } },
]

const cover = (file: string, alt: Localized): Photo => ({
  src: `images/portfolio/${file}`,
  ratio: '4/5',
  alt,
  brief: { es: 'Portada de la publicación', id: 'Cover postingan' },
})

const tiktok = (videoId: string) => `https://www.tiktok.com/@matchabluberry8/video/${videoId}`
const instagram = (path: string) => `https://www.instagram.com/${path}/`

export const videos: Video[] = [
  {
    id: 'travel-madrid-malaga-2',
    category: 'travel',
    platform: 'tiktok',
    kind: 'video',
    title: { en: 'Málaga to Madrid, part 2: city views', es: 'De Málaga a Madrid, parte 2: vistas de la ciudad' },
    thumbnail: cover('travel-madrid-malaga-2.webp', { en: 'Setting off from Málaga train station', es: 'Saliendo de la estación de Málaga' }),
    url: tiktok('7701640748705385746'),
    stats: { views: 5_825, likes: 175, saves: 11, shares: 5 },
  },
  {
    id: 'travel-bernabeu',
    category: 'travel',
    platform: 'tiktok',
    kind: 'video',
    title: { en: 'Next stop: the Bernabéu stadium', es: 'Siguiente parada: el estadio Bernabéu' },
    thumbnail: cover('travel-bernabeu.webp', { en: 'Madrid at sunset', es: 'Madrid al atardecer' }),
    url: tiktok('7702393670846123272'),
    stats: { views: 5_438, likes: 201, saves: 15, shares: 3 },
  },
  {
    id: 'travel-not-bali',
    category: 'travel',
    platform: 'tiktok',
    kind: 'video',
    title: { en: 'Not Bali, not Barcelona, not Madrid…', es: 'Ni Bali, ni Barcelona, ni Madrid…' },
    thumbnail: cover('travel-not-bali.webp', { en: 'Cable bridge at sunset', es: 'Puente atirantado al atardecer' }),
    url: tiktok('7686416808135478536'),
    stats: { views: 36_100, likes: 397, saves: 27, shares: 7 },
  },
  {
    id: 'travel-tag-your-partner',
    category: 'travel',
    platform: 'instagram',
    kind: 'video',
    title: { en: 'Tag who you’d explore Spain with', es: 'Etiqueta con quién recorrerías España' },
    thumbnail: cover('travel-tag-your-partner.webp', { en: 'Blue café chairs on a white street', es: 'Sillas azules en una calle blanca' }),
    url: instagram('reel/DfB6YYQxwPE'),
  },
  {
    id: 'travel-madrid-city-view',
    category: 'travel',
    platform: 'instagram',
    kind: 'video',
    title: { en: 'Where to get this view of Madrid', es: 'Dónde ver Madrid desde arriba' },
    thumbnail: cover('travel-madrid-city-view.webp', { en: 'Gran Vía from a rooftop', es: 'La Gran Vía desde una azotea' }),
    url: instagram('reel/DfMievWRHaM'),
  },
  {
    id: 'travel-castillo-colomares',
    category: 'travel',
    platform: 'instagram',
    kind: 'video',
    title: { en: 'Castillo de Colomares, 30 min from Málaga', es: 'Castillo de Colomares, a 30 min de Málaga' },
    thumbnail: cover('travel-castillo-colomares.webp', { en: 'Castillo de Colomares in Benalmádena', es: 'Castillo de Colomares en Benalmádena' }),
    url: instagram('reel/De_kp04xB0h'),
  },
  {
    id: 'food-indonesian-restaurant',
    category: 'food',
    platform: 'tiktok',
    kind: 'video',
    title: { en: 'Eating at an Indonesian restaurant in Spain', es: 'Comiendo en un restaurante indonesio en España' },
    thumbnail: cover('food-indonesian-restaurant.webp', { en: 'Nasi goreng and Indonesian dishes', es: 'Nasi goreng y platos indonesios' }),
    url: tiktok('7684584212309019922'),
    stats: { views: 37_300, likes: 590, saves: 152, shares: 75 },
  },
  {
    id: 'food-nescafe-gold',
    category: 'food',
    platform: 'tiktok',
    kind: 'video',
    title: { en: 'Let’s make coffee with me', es: 'Hagamos café juntas' },
    thumbnail: cover('food-nescafe-gold.webp', { en: 'Making iced coffee', es: 'Preparando café con hielo' }),
    url: tiktok('7700548667123469586'),
    stats: { views: 4_695, likes: 63, saves: 3, shares: 1 },
  },
  {
    id: 'food-noodles-pacifico',
    category: 'food',
    platform: 'tiktok',
    kind: 'video',
    title: { en: 'Daily vlog: lunch at Noodles Pacífico', es: 'Daily vlog: comida en Noodles Pacífico' },
    thumbnail: cover('food-noodles-pacifico.webp', { en: 'Noodles Pacífico terrace', es: 'Terraza de Noodles Pacífico' }),
    url: tiktok('7674181929704443144'),
    stats: { views: 110_200, likes: 1_600, saves: 117, shares: 35 },
  },
  {
    id: 'vlog-feria-rosario',
    category: 'vlog',
    platform: 'tiktok',
    kind: 'video',
    title: { en: 'A Spanish feria you have to see once', es: 'Una feria que tienes que vivir una vez' },
    thumbnail: cover('vlog-feria-rosario.webp', { en: 'Horse carriage at the Feria del Rosario', es: 'Coche de caballos en la Feria del Rosario' }),
    url: tiktok('7696457009197010184'),
    stats: { views: 11_200, likes: 325, saves: 26, shares: 9 },
  },
  {
    id: 'vlog-malaga-marina',
    category: 'vlog',
    platform: 'tiktok',
    kind: 'video',
    title: { en: 'In Málaga? Don’t miss this place', es: '¿Estás en Málaga? No te pierdas este sitio' },
    thumbnail: cover('vlog-malaga-marina.webp', { en: 'Dian at a marina', es: 'Dian en un puerto deportivo' }),
    url: tiktok('7695333726120709377'),
    stats: { views: 10_400, likes: 241, saves: 14, shares: 7 },
  },
  {
    id: 'vlog-starlite-marbella',
    category: 'vlog',
    platform: 'tiktok',
    kind: 'video',
    title: { en: 'Concert night at Starlite Marbella', es: 'Noche de concierto en Starlite Marbella' },
    thumbnail: cover('vlog-starlite-marbella.webp', { en: 'Starlite festival stage', es: 'Escenario del festival Starlite' }),
    url: tiktok('7685344489518468359'),
    stats: { views: 73_800, likes: 4_105, saves: 415, shares: 108 },
  },
  {
    id: 'vlog-living-in-spain',
    category: 'vlog',
    platform: 'tiktok',
    kind: 'video',
    title: { en: 'Living in Spain: a random episode', es: 'Vivir en España: episodio random' },
    thumbnail: cover('vlog-living-in-spain.webp', { en: 'White village street', es: 'Calle de un pueblo blanco' }),
    url: tiktok('7684179485574335762'),
    stats: { views: 95_100, likes: 3_842, saves: 286, shares: 80 },
  },
  {
    id: 'fashion-new-chapter',
    category: 'fashion',
    platform: 'instagram',
    kind: 'photo',
    title: { en: 'A new chapter', es: 'Un nuevo capítulo' },
    thumbnail: cover('fashion-new-chapter.webp', { en: 'Dian in a beige outfit', es: 'Dian con un look beige' }),
    url: instagram('p/Da2nHIMiVkb'),
  },
  {
    id: 'fashion-new-years-eve',
    category: 'fashion',
    platform: 'instagram',
    kind: 'photo',
    title: { en: 'Beach day essentials', es: 'Imprescindibles de playa' },
    thumbnail: cover('fashion-new-years-eve.webp', { en: 'Straw hat on the sand', es: 'Sombrero de paja en la arena' }),
    url: instagram('p/DS9KheTEVSE'),
  },
  {
    id: 'fashion-seas-the-day',
    category: 'fashion',
    platform: 'instagram',
    kind: 'photo',
    title: { en: 'Seas the day', es: 'Seas the day' },
    thumbnail: cover('fashion-seas-the-day.webp', { en: 'Dian by the sea with a sun hat', es: 'Dian junto al mar con sombrero' }),
    url: instagram('p/DS7MXf8kYFW'),
  },
  {
    id: 'fashion-sea-sun-serenity',
    category: 'fashion',
    platform: 'instagram',
    kind: 'photo',
    title: { en: 'Sea, sun & serenity', es: 'Mar, sol y calma' },
    thumbnail: cover('fashion-sea-sun-serenity.webp', { en: 'Dian at sunset by the sea', es: 'Dian al atardecer junto al mar' }),
    url: instagram('p/DbAbJEckV79'),
  },
  {
    id: 'fashion-puerto-marina',
    category: 'fashion',
    platform: 'instagram',
    kind: 'photo',
    title: { en: 'Puerto Marina, Benalmádena', es: 'Puerto Marina, Benalmádena' },
    thumbnail: cover('fashion-puerto-marina.webp', { en: 'Dian at Puerto Marina', es: 'Dian en Puerto Marina' }),
    url: instagram('p/Dd0wPzzkcsA'),
  },
  {
    id: 'fashion-el-retiro',
    category: 'fashion',
    platform: 'instagram',
    kind: 'photo',
    title: { en: 'Parque de El Retiro, Madrid', es: 'Parque de El Retiro, Madrid' },
    thumbnail: cover('fashion-el-retiro.webp', { en: 'Dian at El Retiro lake', es: 'Dian en el estanque de El Retiro' }),
    url: instagram('p/DepEqgXCEEv'),
  },
]

/* ------------------------------------------------------------------ */
/* Case studies (section 8): hidden until the first collaboration.     */
/* ------------------------------------------------------------------ */

export const caseStudies: CaseStudy[] = []

/* ------------------------------------------------------------------ */
/* Services (section 9) and skills (section 10)                        */
/* ------------------------------------------------------------------ */

export const services: { title: Localized; text: Localized }[] = [
  {
    title: { en: 'TikTok video', es: 'Vídeo de TikTok' },
    text: {
      en: 'Concept, filming and editing, posted on my account.',
      es: 'Idea, grabación y edición, publicado en mi cuenta.',
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
    title: { en: 'UGC content', es: 'Contenido UGC' },
    text: {
      en: 'Videos for your own channels and ads, with usage rights.',
      es: 'Vídeos para tus canales y anuncios, con derechos de uso.',
    },
  },
  {
    title: { en: 'Product reviews', es: 'Reseñas de producto' },
    text: {
      en: 'An honest, real-life test of your product, filmed my way.',
      es: 'Una prueba sincera y real de tu producto, grabada a mi manera.',
    },
  },
  {
    title: { en: 'On-location features', es: 'Colaboraciones en el lugar' },
    text: {
      en: 'A mini-vlog from your hotel, restaurant or destination, filmed on site.',
      es: 'Un mini-vlog de tu hotel, restaurante o destino, grabado allí.',
    },
  },
  {
    title: { en: 'Content in 2 languages', es: 'Contenido en 2 idiomas' },
    text: {
      en: 'English and Indonesian: one creator for Europe and Southeast Asia.',
      es: 'Inglés e indonesio: una creadora para Europa y el Sudeste Asiático.',
    },
  },
]

export const skills = {
  groups: [
    {
      title: { en: 'Production', es: 'Producción' },
      items: [
        { en: 'Filming on phone', es: 'Grabación con móvil' },
        { en: 'Video editing', es: 'Edición de vídeo' },
        { en: 'Photography', es: 'Fotografía' },
        { en: 'Storytelling', es: 'Storytelling' },
      ],
    },
    {
      title: { en: 'Markets', es: 'Mercados' },
      items: [
        { en: 'Indonesia & Southeast Asia', es: 'Indonesia y Sudeste Asiático' },
        { en: 'Spain & Europe', es: 'España y Europa' },
      ],
    },
  ],
  languages: [
    { name: { en: 'Indonesian', es: 'Indonesio' }, level: { en: 'Native', es: 'Nativo' }, value: 100 },
    { name: { en: 'English', es: 'Inglés' }, level: { en: 'Fluent', es: 'Fluido' }, value: 90 },
    { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Beginner', es: 'Principiante' }, value: 20 },
  ],
}

/* ------------------------------------------------------------------ */
/* Timeline (section 11): hidden at Dian's request.                    */
/* ------------------------------------------------------------------ */

export const timeline: { year: string; title: Localized; text: Localized }[] = []

/* ------------------------------------------------------------------ */
/* Why work with me (section 12), instead of brand testimonials.       */
/* ------------------------------------------------------------------ */

export const why = {
  title: { en: 'Why work with me', es: 'Por qué trabajar conmigo' } satisfies Localized,
  items: [
    {
      title: { en: 'Authentic storytelling', es: 'Historias auténticas' },
      text: {
        en: 'I only share places and products I have really tried, in my own voice, so every recommendation feels real.',
        es: 'Solo comparto lugares y productos que he probado de verdad, con mi propia voz, para que cada recomendación se sienta real.',
      },
    },
    {
      title: { en: 'Content that stops the scroll', es: 'Contenido que frena el scroll' },
      text: {
        en: 'Cinematic mini-vlogs, clean edits and photos made for TikTok and Instagram.',
        es: 'Mini-vlogs cinematográficos, edición cuidada y fotos pensadas para TikTok e Instagram.',
      },
    },
    {
      title: { en: 'Spain, seen by Indonesia', es: 'España vista desde Indonesia' },
      text: {
        en: 'Most of my audience is in Indonesia: a direct line from your Spanish destination or product to Southeast Asia.',
        es: 'La mayor parte de mi audiencia está en Indonesia: una conexión directa entre tu destino o producto en España y el Sudeste Asiático.',
      },
    },
    {
      title: { en: 'Easy to work with', es: 'Fácil trabajar conmigo' },
      text: {
        en: 'Clear communication, creative direction from day one and one revision included.',
        es: 'Comunicación clara, dirección creativa desde el primer día y una revisión incluida.',
      },
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Rates (section 13)                                                  */
/* ------------------------------------------------------------------ */

export const rates = {
  /** false shows "Rates on request" instead of prices. */
  showPrices: false,
  currency: 'EUR',
  items: [
    { service: { en: 'TikTok video', es: 'Vídeo de TikTok' }, detail: { en: '30–60 s, 1 revision', es: '30–60 s, 1 revisión' }, price: 0 },
    { service: { en: 'Reel + 3 Stories', es: 'Reel + 3 Stories' }, detail: { en: 'Instagram, with link sticker', es: 'Instagram, con enlace' }, price: 0 },
    { service: { en: 'UGC pack', es: 'Pack UGC' }, detail: { en: '3 videos with usage rights', es: '3 vídeos con derechos de uso' }, price: 0 },
    { service: { en: 'On-location feature', es: 'Colaboración en el lugar' }, detail: { en: 'Hotel, restaurant or destination', es: 'Hotel, restaurante o destino' }, price: 0 },
  ] as Rate[],
  /** Dian's note under the rates. */
  onLocation: {
    title: { en: 'On-location collaborations', es: 'Colaboraciones en el lugar' } satisfies Localized,
    subtitle: {
      en: 'Travel, restaurant, hotel & lifestyle experiences.',
      es: 'Experiencias de viaje, restaurantes, hoteles y lifestyle.',
    } satisfies Localized,
    points: [
      {
        en: 'Rates include creative direction, on-site content production, professional editing and one revision.',
        es: 'Las tarifas incluyen dirección creativa, producción de contenido en el lugar, edición profesional y una revisión.',
      },
      {
        en: 'Local travel within 15 km is included. Additional transportation, accommodation and travel-related expenses are quoted separately.',
        es: 'Los desplazamientos locales de hasta 15 km están incluidos. El transporte adicional, el alojamiento y otros gastos del viaje se presupuestan aparte.',
      },
      {
        en: 'Custom packages available for international collaborations.',
        es: 'Paquetes a medida para colaboraciones internacionales.',
      },
    ] satisfies Localized[],
  },
}

/* ------------------------------------------------------------------ */
/* Contact form (section 14)                                           */
/* ------------------------------------------------------------------ */

export const contact = {
  /** Public contact email, kept in two parts so the full address is not a plain string in the code. */
  email: { user: 'dian.novitasari.info', domain: 'gmail.com' },
  /**
   * Web3Forms access key (web3forms.com). It is public by design: it can only send to Dian's inbox.
   * Empty = the form is not connected and asks visitors to use the email instead.
   */
  formKey: '8dc90a93-c523-4345-89b9-2b8fcbbe1105',
  budgets: [
    { en: 'Under €500', es: 'Menos de 500 €' },
    { en: '€500 – €1,500', es: '500 – 1.500 €' },
    { en: 'Over €1,500', es: 'Más de 1.500 €' },
    { en: 'Product exchange', es: 'Intercambio de producto' },
    { en: 'Not sure yet', es: 'Aún no lo sé' },
  ] satisfies Localized[],
  types: [
    { en: 'UGC content', es: 'Contenido UGC' },
    { en: 'Product review', es: 'Reseña de producto' },
    { en: 'On-location collaboration', es: 'Colaboración en el lugar' },
    { en: 'Sponsored post', es: 'Publicación patrocinada' },
    { en: 'Long-term partnership', es: 'Colaboración a largo plazo' },
    { en: 'Something else', es: 'Otra cosa' },
  ] satisfies Localized[],
}

/* ------------------------------------------------------------------ */
/* Interface text                                                      */
/* ------------------------------------------------------------------ */

export const ui = {
  demoBand: { en: 'Demo prototype', es: 'Prototipo demo' },
  skipToContent: { en: 'Skip to content', es: 'Saltar al contenido' },
  menu: { en: 'Menu', es: 'Menú' },
  close: { en: 'Close', es: 'Cerrar' },
  language: { en: 'Language', es: 'Idioma' },
  workWithMe: { en: 'Work with me', es: 'Trabaja conmigo' },
  hero: {
    hello: { en: 'Hello, I’m', es: 'Hola, soy' },
    basedIn: { en: 'based in', es: 'en' },
    viewPortfolio: { en: 'View portfolio', es: 'Ver portfolio' },
  },
  heroStats: {
    followers: { en: 'followers', es: 'seguidores' },
    views: { en: 'views in October', es: 'views en octubre' },
    engagement: { en: 'engagement', es: 'engagement' },
  },
  downloadKit: { en: 'Download media kit', es: 'Descargar media kit' },
  stats: {
    title: { en: 'The numbers', es: 'Las cifras' },
    followers: { en: 'Total followers', es: 'Seguidores totales' },
    views: { en: 'Views in October', es: 'Visualizaciones en octubre' },
    likes: { en: 'Likes in October', es: 'Likes en octubre' },
    shares: { en: 'Shares in October', es: 'Compartidos en octubre' },
    engagement: { en: 'Engagement rate', es: 'Tasa de engagement' },
  },
  platforms: {
    title: { en: 'Where my audience is', es: 'Dónde está mi audiencia' },
    followers: { en: 'Followers', es: 'Seguidores' },
    views: { en: 'Views', es: 'Views' },
    likes: { en: 'Likes', es: 'Likes' },
    comments: { en: 'Comments', es: 'Comentarios' },
    shares: { en: 'Shares', es: 'Compartidos' },
    engagement: { en: 'Engagement', es: 'Engagement' },
    month: { en: 'In October', es: 'En octubre' },
    share: { en: 'of total followers', es: 'del total de seguidores' },
    visit: { en: 'View profile', es: 'Ver perfil' },
  },
  audience: {
    title: { en: 'Who watches', es: 'Quién me ve' },
    choose: { en: 'Choose a platform', es: 'Elige una red' },
    age: { en: 'Age', es: 'Edad' },
    gender: { en: 'Gender', es: 'Género' },
    countries: { en: 'Top countries', es: 'Países principales' },
    languages: { en: 'Languages', es: 'Idiomas' },
    hours: { en: 'Active hours', es: 'Horas de actividad' },
    spanishTime: { en: 'Spanish time', es: 'hora española' },
  },
  videos: {
    title: { en: 'My best content', es: 'Mi mejor contenido' },
    all: { en: 'All', es: 'Todo' },
    views: { en: 'Views', es: 'Views' },
    likes: { en: 'Likes', es: 'Likes' },
    saves: { en: 'Saves', es: 'Guardados' },
    shares: { en: 'Shares', es: 'Compartidos' },
    watch: { en: 'Watch', es: 'Ver vídeo' },
    view: { en: 'View post', es: 'Ver publicación' },
    filterLabel: { en: 'Filter by category', es: 'Filtrar por categoría' },
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
  rates: {
    title: { en: 'Collaboration packages', es: 'Paquetes de colaboración' },
    from: { en: 'from', es: 'desde' },
    onRequest: { en: 'Tailored to every brand', es: 'A medida de cada marca' },
    note: {
      en: 'Every collaboration is different, so I prepare a personalised quote based on your goals, scope and conditions.',
      es: 'Cada colaboración es distinta, así que preparo un presupuesto personalizado según tus objetivos, el alcance y las condiciones.',
    },
    cta: { en: 'Request a quote or more information', es: 'Solicitar presupuesto o información' },
  },
  contact: {
    title: { en: 'Let’s create something together', es: 'Creemos algo juntos' },
    intro: [
      {
        en: 'Every brand has a unique story to tell. Whether you’re looking for engaging UGC, authentic product reviews, or travel and lifestyle collaborations, I’d love to bring your vision to life.',
        es: 'Cada marca tiene una historia única que contar. Tanto si buscas UGC que enganche, reseñas de producto auténticas o colaboraciones de viajes y lifestyle, me encantará dar vida a tu idea.',
      },
      {
        en: 'For custom packages and long-term partnerships, let’s connect!',
        es: 'Para paquetes a medida y colaboraciones a largo plazo, ¡hablemos!',
      },
    ] satisfies Localized[],
    name: { en: 'Name', es: 'Nombre' },
    company: { en: 'Company', es: 'Empresa' },
    email: { en: 'Work email', es: 'Email de trabajo' },
    budget: { en: 'Approximate budget', es: 'Presupuesto aproximado' },
    type: { en: 'Type of collaboration', es: 'Tipo de colaboración' },
    message: { en: 'Message', es: 'Mensaje' },
    choose: { en: 'Choose one', es: 'Elige una opción' },
    send: { en: 'Send message', es: 'Enviar mensaje' },
    emailMe: { en: 'Email me directly', es: 'Escríbeme directamente' },
    sending: { en: 'Sending…', es: 'Enviando…' },
    sent: {
      en: 'Thank you! Your message has been sent. I’ll get back to you soon.',
      es: '¡Gracias! Tu mensaje se ha enviado. Te responderé pronto.',
    },
    failed: {
      en: 'Something went wrong and your message was not sent. Please email me at',
      es: 'Algo ha fallado y tu mensaje no se ha enviado. Escríbeme a',
    },
    notConnected: {
      en: 'The form is not connected yet, so nothing was sent. Please email me at',
      es: 'El formulario aún no está conectado, así que no se ha enviado nada. Escríbeme a',
    },
    subject: { en: 'New enquiry from your portfolio', es: 'Nueva consulta desde tu portfolio' },
    required: { en: 'Please fill in this field.', es: 'Rellena este campo.' },
    invalidEmail: { en: 'Please enter a valid email.', es: 'Introduce un email válido.' },
    elsewhere: { en: 'Or find me on', es: 'O encuéntrame en' },
  },
  footer: {
    rights: { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
    badge: { en: 'Content creator', es: 'Creadora de contenido' },
  },
  review: {
    note: { es: 'Nota para Dian', id: 'Catatan untuk Dian' },
    photo: { es: 'Foto', id: 'Foto' },
    demoLink: { en: 'Link coming soon', es: 'Enlace próximamente' },
  },
}

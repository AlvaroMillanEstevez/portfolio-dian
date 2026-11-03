# Dian · media kit (prototipo)

Prototipo del portfolio / media kit web de Dian, creadora de contenido en Málaga.
Las cifras, la audiencia, los perfiles y el portfolio son **reales** (analíticas de TikTok e Instagram de octubre de 2026). Las fotos son de Dian y los precios se dan por privado. El modo revisión sigue activo para que Dian comente por número de sección.

- Web: https://alvaromillanestevez.github.io/portfolio-dian/
- Feedback de Dian: [FEEDBACK_DIAN.md](FEEDBACK_DIAN.md)

Stack: Vite + React + TypeScript + Tailwind CSS 4. Despliegue en GitHub Pages con GitHub Actions.

## Arrancar en local

```bash
npm ci
npm run dev        # http://localhost:5173/portfolio-dian/
npm run build      # genera dist/ (con CSP y sin source maps)
npm run preview    # sirve dist/ para probar la build
```

Node 24 (ver `.nvmrc`).

## Dónde se cambia cada cosa

Todo el contenido vive en **un único archivo: [`src/data/profile.ts`](src/data/profile.ts)**. Los componentes no contienen textos ni cifras. Cada texto visible tiene versión `en` y `es`.

| Quiero cambiar…                         | Dónde, dentro de `profile.ts`                         |
| --------------------------------------- | ----------------------------------------------------- |
| Nombre, frase, ciudad, usuario, lema    | `identity` (el monograma y el sello usan las iniciales de `firstName` y `lastName`) |
| Cifras por red (seguidores, views…)     | `platforms`                                           |
| Cifras clave (sección 2)                | Se calculan solas a partir de `platforms`; solo `growth6m` se escribe a mano |
| Texto "Sobre mí" y sus fotos            | `about`                                               |
| Temas ("Content focus") y porcentajes   | `pillars` (los porcentajes deben sumar 100; `icon` elige el dibujo) |
| Audiencia                               | `audience`                                            |
| Mejores vídeos                          | `videos` (y `categories` para los filtros)             |
| Colaboraciones, "Why work with me"     | `caseStudies` (vacío: sección 8 oculta), `why`         |
| Servicios, habilidades, trayectoria     | `services`, `skills`, `timeline`                       |
| Tarifas                                 | `rates` (`showPrices: false` muestra "Rates on request") |
| Opciones del formulario                 | `contact`                                             |
| Textos de la interfaz (botones, títulos) | `ui`                                                  |
| Fecha de los datos                      | `site.dataAsOf`                                       |

### Enlaces

Un `url` vacío muestra el enlace desactivado. Los enlaces de perfiles y publicaciones van sin parámetros de seguimiento (`?_t=`, `igsh=`…).

### Activar o quitar secciones

En `sections`, cada sección tiene `enabled: true/false`. Con `false` desaparecen la sección y su enlace del menú. El `number` es fijo, para que el feedback ("quita la 11") siga valiendo aunque se oculten otras. Para reordenar, se mueve el bloque dentro de la lista.

### Modo revisión y banda de demo

En `site`:

- `reviewMode: true` muestra los números de sección, las notas para Dian (en español e indonesio) y las etiquetas de foto.
- `demo: true` muestra la banda fija "Demo prototype" (ahora está en `false`).

Para la versión real, los dos van a `false`.

### Idioma

`site.defaultLang` (`'en'` o `'es'`). El visitante puede cambiarlo con el selector EN/ES (se recuerda en su navegador). También funciona con `?lang=es` en la URL.

### Diseño y marca

El diseño sigue el tablero de marca de Dian: burdeos `#6B0F2A`, azul cielo `#CDE8FF`, mantequilla `#FFE7A3` y azul marino `#102542` sobre crema. Los colores y tipografías son variables CSS al principio de [`src/index.css`](src/index.css). Las fuentes son Fraunces (titulares), Plus Jakarta Sans (texto) y Ephesis (manuscrita, para el lema y la polaroid). Se sirven desde la propia web con Fontsource, sin peticiones a Google.

Los elementos de marca están en [`src/components/Brand.tsx`](src/components/Brand.tsx): monograma, ruta del avión con corazón, buganvilla y sello redondo. El dibujo de Málaga es [`public/images/malaga-sketch.svg`](public/images/malaga-sketch.svg). El favicon (`public/favicon.svg`) es un archivo fijo con "DN": si cambia el nombre, hay que retocarlo a mano.

Los colores de los gráficos (`--c-chart-*`) están comprobados para daltonismo; si se cambian, hay que volver a validarlos.

## Documentos de Dian y portadas

Los `.docx` con las analíticas y las indicaciones de Dian viven en `private/` (ignorado por git, junto con `*.docx`). Nunca en `public/`: todo lo que hay ahí se publica.

Las portadas del portfolio (`public/images/portfolio/*.webp`) salen de sus publicaciones públicas, convertidas a WebP sin metadatos. Las cifras de cada TikTok son las públicas del vídeo; Instagram no las muestra sin iniciar sesión.

## Fotos

Cada hueco de foto es un placeholder SVG en `public/images/` con la proporción exacta que tendrá la foto real:

| Archivo                       | Proporción | Foto                                   |
| ----------------------------- | ---------- | -------------------------------------- |
| `hero-portrait.webp`          | 4:5        | Portada: playa al atardecer            |
| `about-malaga-marina.webp`    | 4:5        | Polaroid de "Sobre mí": Puerto Marina  |
| `about-beach-sunset.webp`     | 3:2        | "Sobre mí": playa al atardecer         |
| `about-retiro.webp`           | 1:1        | "Sobre mí": jardín de El Retiro        |
| `portfolio/*.webp`            | 4:5        | Portadas del portfolio (sección 7)     |

Si una foto se recorta mal, `focus` (por ejemplo `'50% 80%'`) elige qué parte queda a la vista.

Para poner una foto real:

1. Exportarla en WebP o JPG con esa proporción (unos 1200 px en el lado largo; las portadas 9:16, 720×1280).
2. **Quitar los metadatos** (GPS, cámara, fechas) sin recomprimir y comprobarlo:
   ```bash
   exiftool -all= -overwrite_original public/images/hero-portrait.webp
   exiftool -a -G1 public/images/hero-portrait.webp
   ```
3. Guardarla en `public/images/` (WebP) y apuntar a ella con su `src` en `profile.ts`.

Revisar cada foto antes: reflejos, pantallas, matrículas, portal o vistas reconocibles de casa, personas de fondo.


## Media kit en PDF

`public/media-kit.pdf` se genera a partir de `profile.ts`, así nunca se desincroniza de la web:

```bash
npx playwright-core install chromium   # solo la primera vez
npm run media-kit                      # inglés
node scripts/media-kit.mjs es          # versión en español
```

Antes de publicarlo, comprobar con `pdftotext` y `exiftool` que no lleva datos privados.

## Formulario de contacto y email

- El email público de colaboraciones está en `contact.email` (`profile.ts`), partido en dos para que no aparezca entero en el código. Sale en Contacto y en el PDF.
- El formulario envía los mensajes a ese email con [Web3Forms](https://web3forms.com) (gratis, sin servidor). La clave va en `contact.formKey`: es pública por diseño, porque solo sirve para enviar al buzón de Dian. Con la clave vacía, el formulario pide escribir al email.
- Incluye honeypot anti-bots, longitudes máximas y validación. La CSP solo permite conexiones a `https://api.web3forms.com`.

## Privacidad y seguridad

- `noindex, nofollow` en `index.html`. El `robots.txt` está incluido, pero los buscadores solo lo leen en la raíz del dominio, así que lo que de verdad bloquea la indexación es la meta.
- Content Security Policy en una `<meta>`, añadida solo en la build (`vite.config.ts`). Todo es del propio dominio; la única excepción es `connect-src` para el formulario (Web3Forms).
- Sin source maps en producción.
- Enlaces externos con `rel="noopener noreferrer"`.
- `.env*` en `.gitignore`.
- GitHub Actions con las acciones fijadas a un SHA, `permissions: {}` por defecto y `persist-credentials: false`.
- Nada de dirección, teléfono, email personal, fecha de nacimiento ni datos de familia, ni en el código ni en los commits. El único email público es el de colaboraciones.

Antes de cada publicación con datos reales, buscar con `grep` la lista privada de datos que no se publican (guardada fuera del repo) en el código, en `dist/` y en `git log --all -p`.

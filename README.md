# Dian · media kit (prototipo)

Prototipo del portfolio / media kit web de Dian, creadora de contenido en Málaga.
**Todos los datos son ficticios** (cifras, marcas, usuario `@dian.demo`, apellido y testimonios). Sirve para que Dian elija qué secciones y qué estilo quiere antes de poner los datos reales.

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
| Nombre, frase, ciudad, usuario          | `identity`                                            |
| Cifras por red (seguidores, views…)     | `platforms`                                           |
| Cifras clave (sección 2)                | Se calculan solas a partir de `platforms`; solo `growth6m` se escribe a mano |
| Texto "Sobre mí" y sus fotos            | `about`                                               |
| Pilares y porcentajes                   | `pillars` (los porcentajes deben sumar 100)            |
| Audiencia                               | `audience`                                            |
| Mejores vídeos                          | `videos` (y `categories` para los filtros)             |
| Colaboraciones, testimonios             | `caseStudies`, `testimonials`                          |
| Servicios, habilidades, trayectoria     | `services`, `skills`, `timeline`                       |
| Tarifas                                 | `rates` (`showPrices: false` muestra "Rates on request") |
| Opciones del formulario                 | `contact`                                             |
| Textos de la interfaz (botones, títulos) | `ui`                                                  |
| Fecha de los datos                      | `site.dataAsOf`                                       |

### Enlaces

En la demo los campos `url` están vacíos y los enlaces se ven pero no se pueden pulsar: un usuario inventado podría ser la cuenta de otra persona. Con los datos reales basta con rellenar `url`.

### Activar o quitar secciones

En `sections`, cada sección tiene `enabled: true/false`. Con `false` desaparecen la sección y su enlace del menú. El `number` es fijo, para que el feedback ("quita la 11") siga valiendo aunque se oculten otras. Para reordenar, se mueve el bloque dentro de la lista.

### Modo revisión y banda de demo

En `site`:

- `reviewMode: true` muestra los números de sección, las notas para Dian (en español e indonesio), las etiquetas de foto y el selector de estilo.
- `demo: true` muestra la banda fija "Demo prototype · all data is fictional" y la etiqueta "Marca ficticia".

Para la versión real, los dos van a `false`.

### Idioma

`site.defaultLang` (`'en'` o `'es'`). El visitante puede cambiarlo con el selector EN/ES (se recuerda en su navegador). También funciona con `?lang=es` en la URL.

### Variante de diseño

Hay dos variantes: `sol` (luminosa, mediterránea) y `editorial` (elegante). Se elige con `site.defaultVariant`. En modo revisión aparece abajo un selector para compararlas.

Los colores y las tipografías son variables CSS en [`src/index.css`](src/index.css) (`[data-variant='sol']` y `[data-variant='editorial']`). Las fuentes (Fraunces, Plus Jakarta Sans, Bodoni Moda, Manrope) son de Google Fonts, pero se sirven desde la propia web con Fontsource, así que no se hacen peticiones a Google.

## Fotos

Cada hueco de foto es un placeholder SVG en `public/images/` con la proporción exacta que tendrá la foto real:

| Archivo                               | Proporción | Qué foto va                                  |
| ------------------------------------- | ---------- | -------------------------------------------- |
| `hero-portrait.svg`                   | 4:5        | Retrato vertical, luz natural, fondo de Málaga |
| `about-malaga-old-town.svg`           | 4:5        | Paseando por el centro histórico              |
| `about-beach-golden-hour.svg`         | 3:2        | Playa al atardecer, sin personas de fondo     |
| `about-morning-ritual.svg`            | 1:1        | Detalle de café o skincare                    |
| `video-*.svg` (6)                     | 9:16       | Portada de cada vídeo destacado               |

Para poner una foto real:

1. Exportarla en WebP o JPG con esa proporción (unos 1200 px en el lado largo; las portadas 9:16, 720×1280).
2. **Quitar los metadatos** (GPS, cámara, fechas) sin recomprimir y comprobarlo:
   ```bash
   exiftool -all= -overwrite_original public/images/hero-portrait.webp
   exiftool -a -G1 public/images/hero-portrait.webp
   ```
3. Guardarla en `public/images/` y cambiar la extensión de su `src` en `profile.ts` (por ejemplo `images/hero-portrait.webp`). Después se puede borrar el `.svg`.

Revisar cada foto antes: reflejos, pantallas, matrículas, portal o vistas reconocibles de casa, personas de fondo.

`npm run placeholders` vuelve a generar los SVG.

## Media kit en PDF

`public/media-kit-demo.pdf` se genera a partir de `profile.ts`, así nunca se desincroniza de la web:

```bash
npx playwright-core install chromium   # solo la primera vez
npm run media-kit                      # inglés
node scripts/media-kit.mjs es          # versión en español
```

Antes de publicarlo, comprobar con `pdftotext` y `exiftool` que no lleva datos privados.

## Formulario de contacto

En el prototipo valida los campos pero **no envía nada**: muestra un aviso de demo. Ya incluye honeypot anti-bots, longitudes máximas y validación. Para la versión real se conectará a un servicio (por ejemplo EmailJS) con un email profesional dedicado. Las claves irán como variables de GitHub Actions, nunca en un `.env` dentro del repo.

## Privacidad y seguridad

- `noindex, nofollow` en `index.html`. El `robots.txt` está incluido, pero los buscadores solo lo leen en la raíz del dominio, así que lo que de verdad bloquea la indexación es la meta.
- Content Security Policy en una `<meta>`, añadida solo en la build (`vite.config.ts`). Todo es del propio dominio, sin dominios externos.
- Sin source maps en producción.
- Enlaces externos con `rel="noopener noreferrer"`.
- `.env*` en `.gitignore`.
- GitHub Actions con las acciones fijadas a un SHA, `permissions: {}` por defecto y `persist-credentials: false`.
- Nada de dirección, teléfono, email personal, fecha de nacimiento ni datos de familia, ni en el código ni en los commits.

Antes de cada publicación con datos reales, buscar con `grep` la lista privada de datos que no se publican (guardada fuera del repo) en el código, en `dist/` y en `git log --all -p`.

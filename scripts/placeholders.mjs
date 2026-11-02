// Generates the designed photo placeholders in public/images/.
// Each one is a wordless gradient scene in the palette; review mode adds the label on top.
// Replace a file with the real photo (same name, or update the path in src/data/profile.ts).
import { writeFileSync } from 'node:fs'

const sizes = { '4/5': [800, 1000], '9/16': [720, 1280], '3/2': [1200, 800], '1/1': [900, 900] }

// Brand board colours: cream, sky, butter, burgundy and navy.
const palettes = {
  sunset: ['#ffe7a3', '#f2b9a0', '#6b0f2a'],
  sea: ['#fbf6f1', '#cde8ff', '#2f62a3'],
  butter: ['#fff6dc', '#ffe7a3', '#c8952a'],
  bloom: ['#fbeef2', '#f1c4d3', '#a8325a'],
  night: ['#e6eef8', '#9fb3cf', '#102542'],
}

// Simple motifs: the sun over the sea (Málaga), terraces (Java), arches (Andalusia), a batik-like kawung pattern.
const motifs = {
  sun: (w, h, c) => `<circle cx="${w * 0.68}" cy="${h * 0.38}" r="${w * 0.16}" fill="${c[0]}" opacity=".9"/>
    <path d="M0 ${h * 0.62} Q ${w * 0.25} ${h * 0.58} ${w * 0.5} ${h * 0.62} T ${w} ${h * 0.6} V ${h} H 0Z" fill="${c[2]}" opacity=".55"/>
    <path d="M0 ${h * 0.72} Q ${w * 0.3} ${h * 0.68} ${w * 0.6} ${h * 0.73} T ${w} ${h * 0.7} V ${h} H 0Z" fill="${c[2]}" opacity=".8"/>`,
  terraces: (w, h, c) => [0.5, 0.6, 0.7, 0.8, 0.9]
      .map((y, i) => `<path d="M0 ${h * y} C ${w * 0.3} ${h * (y - 0.06)} ${w * 0.7} ${h * (y + 0.04)} ${w} ${h * (y - 0.03)} V ${h} H 0Z" fill="${c[2]}" opacity="${0.2 + i * 0.15}"/>`)
      .join(''),
  arches: (w, h, c) => {
    const n = 3, aw = w / n
    return Array.from({ length: n }, (_, i) => {
      const x = i * aw + aw * 0.18, ww = aw * 0.64, top = h * 0.4
      return `<path d="M${x} ${h} V ${top + ww / 2} A ${ww / 2} ${ww / 2} 0 0 1 ${x + ww} ${top + ww / 2} V ${h}Z" fill="${c[2]}" opacity=".35"/>`
    }).join('') + `<rect y="${h * 0.86}" width="${w}" height="${h * 0.14}" fill="${c[2]}" opacity=".6"/>`
  },
  kawung: (w, h, c) => {
    const s = w / 5, out = []
    for (let y = s / 2; y < h; y += s) for (let x = s / 2; x < w; x += s) {
      const r = s * 0.22
      out.push(`<g fill="${c[2]}" opacity=".22" transform="translate(${x} ${y}) rotate(45)">
        <ellipse cx="0" cy="${-r}" rx="${r * 0.55}" ry="${r}"/><ellipse cx="0" cy="${r}" rx="${r * 0.55}" ry="${r}"/>
        <ellipse cx="${-r}" cy="0" rx="${r}" ry="${r * 0.55}"/><ellipse cx="${r}" cy="0" rx="${r}" ry="${r * 0.55}"/></g>`)
    }
    return out.join('')
  },
}

const images = [
  ['hero-portrait', '4/5', 'sea', 'sun'],
  ['about-malaga-old-town', '4/5', 'butter', 'arches'],
  ['about-beach-golden-hour', '3/2', 'sunset', 'sun'],
  ['about-morning-ritual', '1/1', 'bloom', 'kawung'],
  ['video-travel-nerja-sunrise', '9/16', 'sea', 'sun'],
  ['video-food-churros-review', '9/16', 'butter', 'arches'],
  ['video-lifestyle-skincare-routine', '9/16', 'bloom', 'kawung'],
  ['video-food-breakfast', '9/16', 'butter', 'kawung'],
  ['video-lifestyle-sunday-vlog', '9/16', 'bloom', 'terraces'],
  ['video-travel-malaga-48h', '9/16', 'night', 'arches'],
]

for (const [name, ratio, palette, motif] of images) {
  const [w, h] = sizes[ratio]
  const c = palettes[palette]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient></defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
${motifs[motif](w, h, c)}
</svg>
`
  writeFileSync(new URL(`../public/images/${name}.svg`, import.meta.url), svg)
}
console.log(`${images.length} placeholders written`)

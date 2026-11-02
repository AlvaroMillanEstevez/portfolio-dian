// Builds public/media-kit-demo.pdf from src/data/profile.ts, so the PDF never drifts from the website.
// Usage: npm run media-kit   (needs the Playwright Chromium: npx playwright-core install chromium)
import { readFileSync } from 'node:fs'
import { chromium } from 'playwright-core'
import { audience, caseStudies, identity, platforms, services, site } from '../src/data/profile.ts'

const lang = process.argv[2] === 'es' ? 'es' : 'en'
const t = (text) => text[lang]
const fmt = (n) => new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-ES', { notation: 'compact', maximumFractionDigits: 1 }).format(n)
const pct = (n) => `${new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-ES', { maximumFractionDigits: 1 }).format(n)}%`
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url))
const font = (pkg, file) => read(`node_modules/@fontsource-variable/${pkg}/files/${file}`).toString('base64')
const script = read('node_modules/@fontsource/ephesis/files/ephesis-latin-400-normal.woff2').toString('base64')
const sketch = read('public/images/malaga-sketch.svg').toString('base64')
const sum = (pick) => platforms.reduce((a, p) => a + pick(p), 0)
const views = sum((p) => p.views90d)
const totals = {
  followers: sum((p) => p.followers),
  views,
  avg: views / sum((p) => p.videos90d),
  er: sum((p) => p.engagementRate * p.views90d) / views,
}

const L = {
  en: { followers: 'Followers', views: 'Views · 90 days', avg: 'Avg. views', er: 'Engagement', platforms: 'Platforms', audience: 'Audience', countries: 'Top countries', age: 'Age', women: 'Women', services: 'Services', cases: 'Selected partnerships', contact: 'Contact through the form on my website', demo: 'DEMO · all data and brands are fictional' },
  es: { followers: 'Seguidores', views: 'Views · 90 días', avg: 'Media de views', er: 'Engagement', platforms: 'Plataformas', audience: 'Audiencia', countries: 'Países principales', age: 'Edad', women: 'Mujeres', services: 'Servicios', cases: 'Colaboraciones destacadas', contact: 'Contacto a través del formulario de mi web', demo: 'DEMO · todos los datos y marcas son ficticios' },
}[lang]

const bars = (rows) => {
  const max = Math.max(...rows.map((r) => r.value))
  return rows
    .map((r) => `<div class="bar"><span>${esc(t(r.label))}</span><i style="--w:${(r.value / max) * 100}%"></i><b>${pct(r.value)}</b></div>`)
    .join('')
}

const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>${esc(identity.firstName)} · Media kit (demo)</title>
<style>
@font-face{font-family:Fraunces;src:url(data:font/woff2;base64,${font('fraunces', 'fraunces-latin-opsz-normal.woff2')}) format('woff2');font-weight:100 900}
@font-face{font-family:Fraunces;font-style:italic;src:url(data:font/woff2;base64,${font('fraunces', 'fraunces-latin-opsz-italic.woff2')}) format('woff2');font-weight:100 900}
@font-face{font-family:Jakarta;src:url(data:font/woff2;base64,${font('plus-jakarta-sans', 'plus-jakarta-sans-latin-wght-normal.woff2')}) format('woff2');font-weight:200 800}
@font-face{font-family:Ephesis;src:url(data:font/woff2;base64,${script}) format('woff2')}
@page{size:A4;margin:0}
*{box-sizing:border-box;margin:0}
body{font:10pt/1.5 Jakarta,sans-serif;color:#102542;background:#fbf6f1}
.page{width:210mm;height:297mm;padding:16mm;position:relative;overflow:hidden;page-break-after:always}
.demo{position:absolute;top:0;left:0;right:0;background:#102542;color:#fbf6f1;text-align:center;font-size:8pt;padding:2mm;letter-spacing:.08em}
h1{font:400 58pt/1 Fraunces,serif;color:#6b0f2a;letter-spacing:-.02em;margin-top:8mm}
h2{font:400 20pt/1.1 Fraunces,serif;color:#6b0f2a;margin-bottom:5mm}
.tag{font:italic 400 16pt/1.35 Fraunces,serif;max-width:120mm;margin-top:5mm}
.muted{color:#55607a}.accent{color:#6b0f2a}
.sketch{position:absolute;right:14mm;top:20mm;width:78mm}
.roles{font-size:7.5pt;font-weight:600;letter-spacing:.22em;text-transform:uppercase;margin-top:4mm}
.motto{font:26pt/1 Ephesis,cursive;margin-top:6mm}
.kpis{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid #e8dcd0;border-radius:4mm;margin:14mm 0 10mm;background:#fff8}
.kpis div{padding:5mm;border-left:1px solid #e8dcd0}.kpis div:first-child{border:0}
.kpis b{display:block;font:400 22pt/1.1 Fraunces,serif}.kpis span{font-size:8pt;color:#55607a}
table{width:100%;border-collapse:collapse}td,th{padding:2.6mm 0;border-bottom:1px solid #e8dcd0;text-align:left}th{font-size:8pt;color:#55607a;font-weight:500}td.n,th.n{text-align:right}
.cols{display:grid;grid-template-columns:1fr 1fr;gap:10mm}
.bar{display:grid;grid-template-columns:28mm 1fr 12mm;gap:3mm;align-items:center;margin:1.6mm 0;font-size:9pt}
.bar i{height:2.2mm;border-radius:2mm;background:linear-gradient(90deg,#2f62a3 var(--w),#f4ebe2 var(--w))}.bar b{text-align:right;font-weight:500}
.svc{display:grid;grid-template-columns:1fr 1fr;gap:2mm 8mm;font-size:8.5pt;line-height:1.4}.svc div{border-top:1px solid #e8dcd0;padding-top:2mm}.svc b{display:block}
.case{border:1px solid #e8dcd0;border-radius:3mm;padding:3mm 4mm;margin-bottom:2.5mm;font-size:9pt}.case b{font:400 13pt Fraunces,serif}
.foot{position:absolute;left:16mm;right:16mm;bottom:12mm;display:flex;justify-content:space-between;font-size:8pt;color:#55607a}
</style></head><body>
<section class="page">
  <div class="demo">${L.demo}</div>
  <img class="sketch" src="data:image/svg+xml;base64,${sketch}" alt="">
  <p class="roles" style="margin-top:12mm">Media kit · ${esc(identity.handle)}</p>
  <h1>${esc(identity.firstName)}<br>${esc(identity.lastName)}</h1>
  <p class="tag">${esc(t(identity.role))} · ${esc(t(identity.city))}</p>
  <p class="muted" style="max-width:110mm;margin-top:2mm">${esc(t(identity.tagline))}</p>
  <p class="roles">${esc(t(identity.roles))}</p>
  <p class="motto">${esc(t(identity.motto))} <span class="accent">♡</span></p>
  <div class="kpis" style="margin-top:12mm">
    <div><b>${fmt(totals.followers)}</b><span>${L.followers}</span></div>
    <div><b>${fmt(totals.views)}</b><span>${L.views}</span></div>
    <div><b>${fmt(totals.avg)}</b><span>${L.avg}</span></div>
    <div><b>${pct(totals.er)}</b><span>${L.er}</span></div>
  </div>
  <h2>${L.platforms}</h2>
  <table><tr><th></th><th class="n">${L.followers}</th><th class="n">${L.avg}</th><th class="n">${L.er}</th></tr>
  ${platforms.map((p) => `<tr><td><b>${p.name}</b> <span class="muted">${esc(p.handle)}</span></td><td class="n">${fmt(p.followers)}</td><td class="n">${fmt(p.views90d / p.videos90d)}</td><td class="n">${pct(p.engagementRate)}</td></tr>`).join('')}
  </table>
  <div class="foot"><span>${esc(t(site.dataAsOf))}</span><span>1 / 2</span></div>
</section>
<section class="page">
  <div class="demo">${L.demo}</div>
  <h2 style="margin-top:8mm">${L.audience}</h2>
  <div class="cols">
    <div><p class="muted" style="margin-bottom:2mm">${L.countries}</p>${bars(audience.countries.slice(0, 6))}</div>
    <div><p class="muted" style="margin-bottom:2mm">${L.age}</p>${bars(audience.age)}
      <p style="margin-top:4mm"><b class="accent">${pct(audience.gender[0].value)}</b> ${L.women}</p></div>
  </div>
  <h2 style="margin-top:7mm">${L.cases}</h2>
  ${caseStudies.map((c) => `<div class="case"><b>${esc(c.brand)}</b> <span class="muted">· ${esc(t(c.sector))}</span><p>${esc(t(c.campaign))}</p><p class="muted">${c.results.map((r) => `${esc(t(r.label))}: <b>${esc(typeof r.value === 'number' ? fmt(r.value) : r.value)}</b>`).join(' · ')}</p></div>`).join('')}
  <h2 style="margin-top:6mm">${L.services}</h2>
  <div class="svc">${services.map((s) => `<div><b>${esc(t(s.title))}</b><span class="muted">${esc(t(s.text))}</span></div>`).join('')}</div>
  <div class="foot"><span>${L.contact}</span><span>2 / 2</span></div>
</section>
</body></html>`

const browser = await chromium.launch()
const page = await browser.newPage()
await page.setContent(html, { waitUntil: 'load' })
const out = new URL(`../public/${site.mediaKitPdf}`, import.meta.url)
await page.pdf({ path: out.pathname, format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true })
await browser.close()
console.log(`Written ${out.pathname}`)

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/*
 * GitHub Pages cannot send headers, so the Content Security Policy goes in a <meta>.
 * It is added only to the production build: the dev server needs an inline script for hot reload.
 * Everything is self-hosted (fonts included), so no external domain is allowed.
 * style-src needs 'unsafe-inline' for React style attributes (bar widths, aspect ratios).
 */
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "media-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "worker-src 'none'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests',
].join('; ')

const contentSecurityPolicy = (): Plugin => ({
  name: 'content-security-policy',
  apply: 'build',
  transformIndexHtml: () => [
    { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: csp }, injectTo: 'head-prepend' },
  ],
})

// Served from https://alvaromillanestevez.github.io/portfolio-dian/
export default defineConfig({
  base: '/portfolio-dian/',
  plugins: [react(), tailwindcss(), contentSecurityPolicy()],
  build: {
    sourcemap: false,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const site = process.env.VITE_SITE || 'pl'

const siteConfig = {
  pl: {
    lang: 'pl',
    title: 'potega.ai — Automatyzacja AI dla firm | Szybko, bez korporacyjnych procesów',
    description: 'Automatyzujemy procesy biznesowe z AI dla firm 10-3000 osób. Od audytu do wdrożenia w 6 tygodni. Bezpłatna konsultacja.',
    ogUrl: 'https://potega.ai',
    ogTitle: 'potega.ai — Automatyzacja AI dla firm',
    ogDescription: 'Twój zespół traci godziny na powtarzalne zadania. Automatyzujemy to w tygodnie, nie miesiące.',
    gaId: 'G-V6SYQC92S5',
    cname: 'potega.ai',
  },
  en: {
    lang: 'en',
    title: 'Sysformer — AI Automation for Business | Fast, without corporate overhead',
    description: 'We automate business processes with AI for companies of 10-3000 people. From audit to implementation in 6 weeks. Free consultation.',
    ogUrl: 'https://sysformer.com',
    ogTitle: 'Sysformer — AI Automation for Business',
    ogDescription: 'Your team loses hours on repetitive tasks. We automate that in weeks, not months.',
    gaId: 'G-3RWZCTSZ5Z',
    cname: 'sysformer.com',
  },
} as const

const cfg = siteConfig[site as keyof typeof siteConfig]

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html
          .replace('lang="pl"', `lang="${cfg.lang}"`)
          .replace(/G-V6SYQC92S5/g, cfg.gaId)
          .replace(
            /<meta name="description"[^>]*\/?>/,
            `<meta name="description" content="${cfg.description}" />`
          )
          .replace(
            /<meta property="og:url"[^>]*\/?>/,
            `<meta property="og:url" content="${cfg.ogUrl}" />`
          )
          .replace(
            /<meta property="og:title"[^>]*\/?>/,
            `<meta property="og:title" content="${cfg.ogTitle}" />`
          )
          .replace(
            /<meta property="og:description"[^>]*\/?>/,
            `<meta property="og:description" content="${cfg.ogDescription}" />`
          )
          .replace(
            /<meta name="twitter:title"[^>]*\/?>/,
            `<meta name="twitter:title" content="${cfg.ogTitle}" />`
          )
          .replace(
            /<meta name="twitter:description"[^>]*\/?>/,
            `<meta name="twitter:description" content="${cfg.ogDescription}" />`
          )
          .replace(
            /<title>[^<]*<\/title>/,
            `<title>${cfg.title}</title>`
          )
      },
    },
    {
      name: 'cname-output',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'CNAME',
          source: cfg.cname,
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
})

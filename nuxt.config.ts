// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/sitemap"],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/style.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&display=swap",
      },
      { rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" },
    ],
    meta: [
      { name: 'description', content: 'Cybersecurity student and self-taught full-stack developer focused on building secure, functional, and beautifully designed systems' },
      { name: 'keywords', content: 'Cybersecurity, Full-stack, Portfolio, Developer' },
      { name: 'author', content: 'Fried' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'fried.sh - Home' },
      { property: 'og:description', content: 'Cybersecurity student and self-taught developer showcasing my work.' },
      { property: 'og:image', content: '/images/logo.png' },
      { property: 'og:url', content: 'https://www.example.com' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'fried.sh - Home' },
      { name: 'twitter:description', content: 'Cybersecurity student and self-taught developer showcasing my work.' },
      { name: 'twitter:image', content: '/images/logo.png' }
    ],
  },
  routeRules: {
    "/": { prerender: true },
  },
  site: {
    url: 'https://fried.sh',
    name: 'fried.sh',
    routes: [
      '/'
    ]
  }
});
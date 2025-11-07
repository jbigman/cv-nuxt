let basePath = ''

const isGithubActions = process.env.GITHUB_ACTIONS ?? false
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  basePath = `/${repo}`
}

export default defineNuxtConfig({
  app: {
    baseURL: basePath
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // ✅ Dart Sass moderne → remplace `@import` (déprécié)
          additionalData: '@use "@/assets/scss/vars" as *;',
        },
      },
    },
  },
})

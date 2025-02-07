import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'light'
  }),
  actions: {
    setTheme(t: string) {
      this.theme = t
      localStorage.setItem('ZenbotTheme', t)
    },
    getTheme(): string | null {
      const t = localStorage.getItem('ZenbotTheme')
      if (t) {
        this.theme = t
      }
      return t
    }
  }
})

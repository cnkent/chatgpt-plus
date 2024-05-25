import { defineStore } from 'pinia'
import type { User } from '@/models/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {} as User,
    token: ''
  }),
  actions: {}
})

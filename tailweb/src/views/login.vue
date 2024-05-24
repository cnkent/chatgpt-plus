<template>
  <div class="flex max-h-screen flex-1 flex-col justify-center px-6 lg:px-8 relative">
    <ThemeToggle />
    <div class="flex items-center justify-center shadow-inner">
      <img
        v-if="theme === 'dark'"
        src="../assets/breadthOfBotsGraphicDark.3e58fdf8.png"
        width="1200px"
        alt=""
      />
      <img v-else src="../assets/breadthOfBotsGraphicLight.cd6e20e8.png" width="1200px" alt="" />
    </div>
    <div class="dark:shadow-[0_-80px_40px_0_#181818] shadow-[0_-80px_40px_0_white]">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-300"
        >
          在这里可与ChatGPT、GPT-4、Claude-3-Opus、DALLE 3等数百万机器人交谈。
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-300"
              >邮箱</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                placeholder="请输入邮箱地址"
                class="block w-full rounded-md border-0 p-3 text-gray-900 dark:bg-transparent dark:text-slate-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-300"
                >密码</label
              >
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                placeholder="请输入密码"
                class="block w-full rounded-md border-0 p-3 text-gray-900 dark:bg-transparent dark:text-slate-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              登录
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-slate-300">
          还没有账号？{{ ' ' }}
          <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >注册账号</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import ThemeToggle from '@/components/theme-toggle.vue'
import { useThemeStore } from '@/stores/theme'

export default defineComponent({
  name: 'LoginView',
  components: {
    ThemeToggle
  },
  setup() {
    const themeStore = useThemeStore()
    const theme = computed(() => themeStore.theme)
    themeStore.getTheme()
    return {
      theme
    }
  }
})
</script>
<style scoped>
img {
  max-width: none;
}
</style>

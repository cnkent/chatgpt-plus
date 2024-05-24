<template>
  <router-view />
</template>
<script setup lang="ts">
const theme = localStorage.getItem('ZenbotTheme')
if (theme) {
  document.documentElement.classList.add(theme)
}
</script>

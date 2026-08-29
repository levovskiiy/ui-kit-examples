<script setup lang="ts">
import { Button } from '@ui-kit/reka-ui-components'
import { onMounted, ref } from 'vue'

const isDark = ref(false)

function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme()
}

onMounted(() => {
  applyTheme()
})
</script>

<template>
  <main class="playground">
    <h1>Reka UI — Button</h1>
    <p>Primary filled. Тема: {{ isDark ? 'dark' : 'light' }}.</p>

    <div class="playground__row">
      <Button type="button" @click="toggleTheme">
        Переключить тему
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  </main>
</template>

<style>
html,
body,
#app {
  margin: 0;
}
</style>

<style scoped>
.playground {
  min-height: 100vh;
  margin: 0;
  padding: 24px;
  box-sizing: border-box;
  background: var(--app-ui-surface-screen);
  color: var(--app-ui-text-main-default);
}

.playground__row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>

<script setup lang="ts">
import type {
  ButtonAppearance,
  ButtonColor,
  ButtonSize,
} from '@ui-kit/reka-ui-components'
import { Button } from '@ui-kit/reka-ui-components'
import { onMounted, ref } from 'vue'

const isDark = ref(false)

const colors: ButtonColor[] = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'error',
]

const appearances: ButtonAppearance[] = [
  'filled',
  'outlined',
  'text',
  'text-inline',
]

const sizes: ButtonSize[] = ['l', 'm', 's']

function applyTheme() {
  document.documentElement.setAttribute(
    'data-theme',
    isDark.value ? 'dark' : 'light',
  )
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
    <h1>Button</h1>
    <p>Тема: {{ isDark ? 'dark' : 'light' }}.</p>

    <div class="playground__row">
      <Button type="button" @click="toggleTheme">Переключить тему</Button>
      <Button disabled>Disabled</Button>
    </div>

    <section v-for="color in colors" :key="color" class="playground__section">
      <h2>{{ color }}</h2>
      <div class="playground__row">
        <Button
          v-for="appearance in appearances"
          :key="appearance"
          :color="color"
          :appearance="appearance"
        >
          {{ appearance }}
        </Button>
        <Button :color="color" disabled>disabled</Button>
      </div>
    </section>

    <section class="playground__section">
      <h2>Sizes</h2>
      <div class="playground__row">
        <Button v-for="size in sizes" :key="size" :size="size">
          Size {{ size }}
        </Button>
      </div>
    </section>

    <section class="playground__section">
      <h2>Icons</h2>
      <div class="playground__row">
        <Button>
          <span class="app-ui-icon">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="6" fill="currentColor" />
            </svg>
          </span>
          With icon
          <span class="app-ui-icon">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M6 3l5 5-5 5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </span>
        </Button>
        <Button v-for="size in sizes" :key="size" :size="size" squared>
          <span class="app-ui-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="8" fill="currentColor" />
            </svg>
          </span>
        </Button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.playground {
  padding: 24px;
  box-sizing: border-box;
}

.playground__section {
  margin-top: 24px;
}

.playground__section h2 {
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
}

.playground__row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>

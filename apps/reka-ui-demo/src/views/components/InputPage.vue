<script setup lang="ts">
import type { InputSize } from '@ui-kit/reka-ui-components'
import { Button, Input } from '@ui-kit/reka-ui-components'
import { onMounted, ref } from 'vue'

const isDark = ref(false)

const sizes: InputSize[] = ['l', 'm', 's']

const emptyValue = ref('')
const filledValue = ref('Text-value')
const clearableValue = ref('Clear me')
const prefixValue = ref('')
const formEmpty = ref('')
const formFilled = ref('Text-value')
const filterEmpty = ref('')
const filterFilled = ref('Text-value')
const errorEmpty = ref('')
const errorValue = ref('Invalid')
const disabledEmpty = ref('')
const disabledFilled = ref('Text-value')

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
    <h1>Input</h1>
    <p>Тема: {{ isDark ? 'dark' : 'light' }}.</p>

    <div class="playground__row">
      <Button type="button" @click="toggleTheme">Переключить тему</Button>
    </div>

    <section class="playground__section">
      <h2>Sizes</h2>
      <div class="playground__stack">
        <Input
          v-for="size in sizes"
          :key="size"
          v-model="emptyValue"
          :size="size"
          placeholder="Placeholder"
        />
      </div>
    </section>

    <section class="playground__section">
      <h2>Form filled</h2>
      <div class="playground__stack">
        <Input
          v-for="size in sizes"
          :key="size"
          v-model="filledValue"
          :size="size"
          placeholder="Placeholder"
        />
      </div>
    </section>

    <section class="playground__section">
      <h2>Form</h2>
      <div class="playground__stack">
        <Input v-model="formEmpty" appearance="form" placeholder="Placeholder" />
        <Input v-model="formFilled" appearance="form" placeholder="Placeholder" />
      </div>
    </section>

    <section class="playground__section">
      <h2>Filter</h2>
      <div class="playground__stack">
        <Input
          v-model="filterEmpty"
          appearance="filter"
          placeholder="Placeholder"
        />
        <Input
          v-model="filterFilled"
          appearance="filter"
          placeholder="Placeholder"
        />
      </div>
    </section>

    <section class="playground__section">
      <h2>Error</h2>
      <div class="playground__stack">
        <Input v-model="errorEmpty" error placeholder="Placeholder" />
        <Input v-model="errorValue" error placeholder="Placeholder" />
      </div>
    </section>

    <section class="playground__section">
      <h2>Disabled</h2>
      <div class="playground__stack">
        <Input v-model="disabledEmpty" disabled placeholder="Placeholder" />
        <Input v-model="disabledFilled" disabled placeholder="Placeholder" />
      </div>
    </section>

    <section class="playground__section">
      <h2>Prefix / suffix</h2>
      <div class="playground__stack">
        <Input v-model="prefixValue" placeholder="Placeholder">
          <template #prefix>
            <span class="app-ui-icon">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <circle
                  cx="8"
                  cy="8"
                  r="5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
            </span>
          </template>
        </Input>
        <Input v-model="filledValue" placeholder="Placeholder">
          <template #prefix>
            <span class="app-ui-icon">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <circle
                  cx="8"
                  cy="8"
                  r="5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
            </span>
          </template>
          <template #suffix>
            <span class="app-ui-icon">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M4 6l4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
            </span>
          </template>
        </Input>
      </div>
    </section>

    <section class="playground__section">
      <h2>Clearable</h2>
      <div class="playground__stack">
        <Input
          v-model="clearableValue"
          clearable
          placeholder="Placeholder"
        />
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

.playground__stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 216px;
}
</style>

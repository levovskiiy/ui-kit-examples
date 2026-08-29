<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const navItems = [
  { to: '/components/button', label: 'Button' },
  { to: '/components/input', label: 'Input' },
]
</script>

<template>
  <div class="catalog">
    <aside class="catalog__sidebar">
      <p class="catalog__title">Components</p>
      <nav class="catalog__nav">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="catalog__link"
          active-class="is-active"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </aside>
    <div class="catalog__content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.catalog {
  display: flex;
  min-height: 100vh;
  box-sizing: border-box;
  background: var(--app-ui-surface-screen);
  color: var(--app-ui-text-main-default);
  font-family: Inter, system-ui, sans-serif;
}

.catalog__sidebar {
  flex: 0 0 220px;
  box-sizing: border-box;
  padding: 24px 16px;
  border-right: 1px solid var(--app-ui-border-accent-neutral-subtle);
}

.catalog__title {
  margin: 0 0 16px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--app-ui-text-main-subtle);
}

.catalog__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.catalog__link {
  display: block;
  padding: 8px 12px;
  border-radius: var(--app-ui-corners-6);
  color: var(--app-ui-text-main-default);
  text-decoration: none;
}

.catalog__link:hover {
  background: var(--app-ui-background-neutral-subtle-default);
}

.catalog__link.is-active {
  color: var(--app-ui-text-accent-brand-strong);
  background: var(--app-ui-background-brand-subtle-default);
}

.catalog__content {
  flex: 1;
  min-width: 0;
}
</style>

<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      disabled?: boolean
      type?: 'button' | 'submit' | 'reset'
    }
  >(),
  {
    as: 'button',
    disabled: false,
    type: 'button',
  },
)

const rootClass = computed(() => [
  'app-ui-button',
  'app-ui-button--primary',
  { 'is-disabled': props.disabled },
])
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="rootClass"
    :disabled="disabled"
    :type="as === 'button' && !asChild ? type : undefined"
  >
    <slot />
  </Primitive>
</template>

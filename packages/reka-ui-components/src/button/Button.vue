<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'error'

export type ButtonAppearance = 'filled' | 'outlined' | 'text' | 'text-inline'

export type ButtonSize = 'l' | 'm' | 's'

export interface ButtonProps extends PrimitiveProps {
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  color?: ButtonColor
  appearance?: ButtonAppearance
  size?: ButtonSize
  squared?: boolean
}
</script>

<script setup lang="ts">
import { useNamespace } from '@ui-kit/composables'
import { Primitive } from 'reka-ui'
import { computed } from 'vue'

const { b, m, is } = useNamespace('button')

const {
  as = 'button',
  disabled = false,
  type = 'button',
  color = 'primary',
  appearance = 'filled',
  size = 'l',
  squared = false,
} = defineProps<ButtonProps>()

const rootClass = computed(() => [
  b(),
  m(color),
  m(appearance),
  m(size),
  squared && m('squared'),
  is('disabled', disabled),
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

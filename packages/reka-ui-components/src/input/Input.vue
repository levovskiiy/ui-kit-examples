<script lang="ts">
export type InputSize = 'l' | 'm' | 's'

export type InputAppearance = 'form' | 'filter'

export interface InputProps {
  disabled?: boolean
  error?: boolean
  size?: InputSize
  appearance?: InputAppearance
  placeholder?: string
  clearable?: boolean
  type?: string
}
</script>

<script setup lang="ts">
import { useNamespace } from '@ui-kit/composables'
import { computed, useAttrs, useSlots } from 'vue'

defineOptions({ inheritAttrs: false })

const { b, e, m, is } = useNamespace('input')

const {
  disabled = false,
  error = false,
  size = 'l',
  appearance = 'form',
  placeholder,
  clearable = false,
  type = 'text',
} = defineProps<InputProps>()

const model = defineModel<string>({ default: '' })
const attrs = useAttrs()
const slots = useSlots()

const filled = computed(() => (model.value?.length ?? 0) > 0)
const showClear = computed(() => clearable && filled.value && !disabled)

const rootClass = computed(() => [
  b(),
  m(size),
  m(appearance),
  is('disabled', disabled),
  is('error', error),
  is('filled', filled.value),
])

const inputAttrs = computed(() => {
  const { class: _className, style: _style, ...rest } = attrs
  return rest
})

function clear() {
  model.value = ''
}
</script>

<template>
  <div :class="[rootClass, attrs.class]" :style="attrs.style">
    <div :class="e('wrapper')">
      <span v-if="slots.prefix" :class="e('prefix')">
        <slot name="prefix" />
      </span>
      <input
        v-bind="inputAttrs"
        :class="e('inner')"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="model"
      />
      <span v-if="slots.suffix || showClear" :class="e('suffix')">
        <button
          v-if="showClear"
          :class="e('clear')"
          type="button"
          tabindex="-1"
          aria-label="Clear"
          @click="clear"
        >
          <span class="app-ui-icon" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </button>
        <slot name="suffix" />
      </span>
    </div>
  </div>
</template>

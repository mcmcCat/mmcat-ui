<template>
  <i :class="bem.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, isUndefined } from '@mmcat-ui/utils'
import { iconProps } from './icon'
import { useNamespace } from '@mmcat-ui/hooks'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'McIcon',
})

const bem = useNamespace('icon')
const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}

  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color, // 通过 CSS 变量方式进行设置 color
  }
})



</script>

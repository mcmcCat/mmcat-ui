import { isString } from '@vue/shared'
import { UPDATE_MODEL_EVENT } from '@mmcat-ui/constants'
import type { ExtractPropTypes, PropType } from 'vue'
import type Input from './input.vue'

type Size = 'large' | 'small'
// 定义 props
export const inputProps = {
  modelValue: {
    type: [String, Number, Object] as PropType<string | number | object>,
    default: '',
  },
  size: {
    type: String as PropType<Size>,
    default: '',
  },
  modelModifiers: { default: () => ({}) },
  prefix: String,
  suffix: String,
  allowClear: Boolean,
  password: Boolean,
  disabled: Boolean 
} as const


// Props 类型
export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}

export type InputEmits = typeof inputEmits

export type InputInstance = InstanceType<typeof Input>


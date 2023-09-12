import type McIcon from '@mmcat-ui/components/icon'
// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    McIcon: typeof McIcon
  }
}

export {}

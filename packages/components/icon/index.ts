import { withInstall } from '@mmcat-ui/utils'
import Icon from './src/icon.vue'
// 通过 withInstall 方法给 Icon 添加了一个 install 方法
const McIcon = withInstall(Icon)
export default McIcon
// 导出 Icon 组件的 props
export * from './src/icon'

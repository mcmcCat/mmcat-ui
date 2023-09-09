import { createApp } from 'vue'
import McIcon from '@mmcat-ui/components/icon'
import McButton from "@mmcat-ui/components/button";
import '@mmcat-ui/theme-chalk/src/index.scss'
import App from './src/App.vue'

// 组件库
const components = [McIcon,McButton]
// 是否已安装标识
const INSTALLED_KEY = Symbol('INSTALLED_KEY')
// 组件库插件
const McElementPlus = {
  install(app: any) {
    // 如果该组件库已经安装过了，则不进行安装
    if (app[INSTALLED_KEY]) return
    // 将标识值设置为 true，表示已经安装了
    app[INSTALLED_KEY] = true
    // 循环组件库中的每个组件进行安装
    components.forEach((c) => app.use(c))
  },
}

const app = createApp(App)
// 安装组件库
app.use(McElementPlus)
app.mount('#app')


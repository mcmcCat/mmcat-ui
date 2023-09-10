import { createApp } from 'vue'
/* develop */
import McElementPlus from '../packages/index'
import '@mmcat-ui/theme-chalk/src/index.scss'
/* test */
// import McElementPlus from 'mmcat-ui'
// import 'mmcat-ui/dist/style.css'

import App from './src/App.vue'

const app = createApp(App)
// 安装组件库
app.use(McElementPlus)
app.mount('#app')


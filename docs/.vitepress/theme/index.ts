// 使用并扩展默认主题 DefaultTheme
import DefaultTheme from "vitepress/theme";
import './global.scss' // global less

/* development */
import McElementPlus from '../../../packages/dist/mmcat-ui'
import '../../../packages/dist/style.css'
/* production */
// import McElementPlus from 'mmcat-ui'
// import 'mmcat-ui/dist/style.css'

export * from '../../../packages/dist/mmcat-ui';

/* lab components */
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// common

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(McElementPlus)
    app.use(ElementPlus)
  },
};
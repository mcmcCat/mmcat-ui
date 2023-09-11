// 使用并扩展默认主题 DefaultTheme
import DefaultTheme from "vitepress/theme";

/* development */
import McElementPlus from '../../../packages/dist/mmcat-ui'
import '../../../packages/dist/style.css'
/* production */
// import McElementPlus from 'mmcat-ui'
// import 'mmcat-ui/dist/style.css'

export * from '../../../packages/dist/mmcat-ui';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(McElementPlus)
  },
};
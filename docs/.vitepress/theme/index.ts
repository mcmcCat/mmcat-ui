// 使用并扩展默认主题 DefaultTheme
import DefaultTheme from "vitepress/theme";
import "../../../packages/dist/style.css"; //以后换成 tsheep-ui 组件库的样式

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  },
};
export default {
  title: `MMCAT UI`,
  base: "/mmcat-ui/",
  // 主题配置
  themeConfig: {
    // 站点标题 (页面左上角标题)
    siteTitle: "MMCAT UI", //设置成false后，可用logo代替
    logo: "/cat.png",
    // 导航栏
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/components/Basic/Button/" },
      {
        text: '链接',
        items: [
          { text: 'My Github', link: 'https://github.com/mcmcCat' },
          { text: 'My Juejin', link: 'https://juejin.cn/user/1465022832714455' },
          { text: 'Front-end Notes', link: 'https://www.yuque.com/maimaicat' },
          {
            items: [
              {
                text: 'vue',
                link: 'https://cn.vuejs.org/'
              },
              {
                text: 'vitepress',
                link: 'https://vitepress.dev/'
              },
              {
                text: 'markdown',
                link: 'https://markdown.com.cn/'
              }
            ]
          }
        ]
      }
    ],
    // 社交平台地址
    socialLinks: [
      // github
      { icon: "github", link: "https://github.com/mcmcCat/mmcat-ui" },
    ],
    // 侧边栏
    sidebar: {
      // 指南
      "/guild/": [
        {
          text: "基础",
          collapsed: false, //折叠按钮，默认展开
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
      ],
      // 组件
      "/components/": [
        {
          text: "Basic 基础组件",
          collapsed: false,
          items: [
            {
              text: "Button 按钮",
              link: "/components/Basic/Button/",
            },
            {
              text: "Icon 图标",
              link: "/components/Basic/Icon/",
            },
            {
              text: "Message 消息提示",
              link: "/components/Basic/Message/",
            },
          ],
        },
        {
          text: "Form 表单组件",
          collapsed: false,
          items: [
            {
              text: "Input 输入框",
              link: "/components/Form/Input/",
            },
          ],
        },
        {
          text: "组件实验室",
          collapsed: false,
          items: [
            {
              text: "Table 性能优化",
              link: "/components/Lab/Table/",
            },
          ],
        },
      ],
    },
  },
}
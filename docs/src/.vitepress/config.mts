import { defineConfig } from "vitepress"
import { vitepressDemoPlugin } from "vitepress-demo-plugin"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "suju-plus",
  description: "suju-plus 文档",
  base: "/suju-plus/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "快速开始", link: "/start" },
    ],

    sidebar: [
      {
        text: "基础",
        items: [{ text: "快速开始", link: "/start" }],
      },
      {
        text: "组件",
        items: [{ text: "STable", link: "/components/table" }],
      },
    ],

    // socialLinks: [
    //   // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    footer: {
      copyright: "Copyright © 2019-present 速聚科技",
    },
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin)
    },
  },
})

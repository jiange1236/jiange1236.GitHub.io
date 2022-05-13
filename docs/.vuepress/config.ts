import { defineHopeConfig } from "vuepress-theme-hope";
import theme from "./theme";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "Zeblog",
  description: "土木僧的Blog",

  base: "/",
  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  theme,
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        hotKeys: ['s', '/'],
        maxSuggestions: 12,//指定搜索结果的最大条数
        locales: {
          '/': {
            placeholder: '搜索',
          }
        },
      },
      
    ],
  ],
});

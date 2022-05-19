import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/",

  dest: "./dist",

  head: [
    [
      "script",
	  {
		  src: "https://kit.fontawesome.com/ca37c296c5.js",
		  crossorigin: "anonymous",
	  },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Zeblog",
      description: "个人学习的笔记，记录学习过程遇到的问题，学到的知识，收集各种学习工具，各种技巧，各种使用教程。",
    },
  },

  markdown: {
    extractHeaders: {
	  level: [1,3],
	},
  },

  themeConfig,

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        hotKeys: ['s', '/'],
        maxSuggestions: 10,//指定搜索结果的最大条数
        locales: {
          '/': {
            placeholder: '搜索',
          }
        },
      },
    ],
  ],
});

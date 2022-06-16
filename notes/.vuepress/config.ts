import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineHopeConfig({
  base: "/",

  dest: "./dist",

  head: [
    [
      "script",
	  {
		  src: "https://kit.fontawesome.com/3351cccded.js",
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
    docsearchPlugin({
      appId: "2T68NYRRBQ",
      apiKey: "37348b9c57bafc66de2383f8ed1b73ae",
      indexName: "zeml",
    }),
  ],
});

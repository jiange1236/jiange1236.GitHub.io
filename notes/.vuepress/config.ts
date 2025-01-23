import { appendDatePlugin } from "@vuepress/plugin-append-date";
import { markdownIncludePlugin } from '@vuepress/plugin-markdown-include';
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math';
import { markdownStylizePlugin } from '@vuepress/plugin-markdown-stylize';
import { markdownTabPlugin } from '@vuepress/plugin-markdown-tab';
import { revealJsPlugin } from '@vuepress/plugin-revealjs';
import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";

export default defineUserConfig({
  base: "/",
  head: [
    // 百度统计
    [
      "script",{},
      `
      var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?19aa03722b943973f9583b7649941a3b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
      `
    ]
	],

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Zeblog",
      description: "Zine⁶ personal blog",
    },
    "/": {
      lang: "zh-CN",
      title: "Zeblog",
      description: "个人学习的笔记，记录学习过程遇到的问题，学到的知识，收集各种学习工具，各种技巧，各种使用教程。",
    },
  },

  markdown: {
    headers: {
      level: [1, 2, 3],
    },
  },

  theme,

  plugins: [
    appendDatePlugin(),
	],

  // Enable it with pwa
  shouldPrefetch: false,
});

import { appendDatePlugin } from "@vuepress/plugin-append-date";
import type { UserConfig } from "vuepress";
import { defineUserConfig } from "vuepress";
import { shikiPlugin } from '@vuepress/plugin-shiki'
import theme from "./theme.js";

export default <UserConfig>defineUserConfig({
  dest: "dist",

  head: [
    // 百度统计
    [
      "script",{},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?693cdb2d667aab780839e42aa16f4420";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ],

    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Zeblog",
      description: "个人学习的笔记，记录学习过程遇到的问题，学到的知识，收集各种学习工具，各种技巧，各种使用教程。",
    },

    "/en/": {
      title: "My name is Zine⁶",
      description: "Zine⁶ personal blog",
  },
            },

  theme,

  plugins: [appendDatePlugin(),
      shikiPlugin({
      // 配置项
        langs: ['ts', 'json', 'vue', 'php', 'md', 'bash', 'diff', 'python'],
    })],

  shouldPrefetch: false,
});

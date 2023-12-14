import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import docsearchPlugin from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Zeblog",
  description: "个人学习的笔记，记录学习过程遇到的问题，学到的知识，收集各种学习工具，各种技巧，各种使用教程。",

  base: "/",

  dest: "./dist",

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

    // 解决403错误
    ["meta", { name: "referrer", content: "no-referrer" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
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
  theme,
  shouldPrefetch: false,
  plugins: [
    docsearchPlugin({
      appId: "2T68NYRRBQ",
      apiKey: "37348b9c57bafc66de2383f8ed1b73ae",
      indexName: "zeml",
      locales: {
        "/": {
          placeholder: "搜索",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
  ],
});
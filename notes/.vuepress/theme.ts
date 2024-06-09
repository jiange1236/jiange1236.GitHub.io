import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, zhNavbarConfig } from "./navbar.js";
import { enSidebarConfig, zhSidebarConfig } from "./sidebar/index.js";

export default hopeTheme(
  {
    hostname: "https://zecdn.top",

  author: {
      name: "Zine⁶",
      url: "https://zecdn.top",
  },

    favicon: "/favicon.ico",

    iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",

    logo: "/blog.png",

    repo: "jiange1236/jiange1236.GitHub.io",

    repoDisplay: false,

    docsDir: "notes",

    locales: {
      "/": {
        navbar: zhNavbarConfig,
        sidebar: zhSidebarConfig,

        footer:
          '主题使用 <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a> | <a href="https://mister-hope.com/about/site.html" target="_blank">关于网站</a>',

        copyright: "基于 MIT 协议，© 2019-至今 Zine⁶",

        blog: {
          description: "一级注册结构工程师 | 《时代周刊》2006年度风云人物",
          intro: "/about/",
          medias: {
      Baidu: "https://tieba.baidu.com/home/main?un=jiange1236",
//      Bitbucket: "https://example.com",
//      Dingding: "https://example.com",
//      Discord: "https://example.com",
//      Dribbble: "https://example.com",
      Email: "mailto:183465355@qq.com",
//      Evernote: "https://example.com",
      Facebook: "https://example.com",
//      Flipboard: "https://example.com",
      Gitee: "https://gitee.com/jiange1236",
      GitHub: "https://github.com/jiange1236",
//      Gitlab: "https://example.com",
//      Gmail: "https://example.com",
//      Instagram: "https://example.com",
//      Lines: "https://example.com",
//      Linkedin: "https://example.com",
//      Pinterest: "https://example.com",
//      Pocket: "https://example.com",
//      QQ: "https://qq.com",
//      Qzone: "https://example.com",
//      Reddit: "https://example.com",
//      Rss: "https://example.com",
//      Steam: "https://example.com",
      Twitter: "https://twitter.com/zhouzijian1236",
//      Wechat: "https://example.com",
      Weibo: "https://weibo.com/u/1873128010",
//      Whatsapp: "https://example.com",
//      Youtube: "https://example.com",
      Zhihu: "https://www.zhihu.com/people/zhouzijian",
          },
        },
      },

      "/en/": {
        navbar: enNavbarConfig,
        sidebar: enSidebarConfig,

        footer:
          'Theme by <a href="https://theme-hope.vuejs.press">vuepress-theme-hope</a>',

        copyright: "MIT Licensed, © 2019-present Zine⁶",

  blog: {
          description:
            "VuePress project member, front-end developer, studying for a master's degree in theoretical physics",
          intro: "/en/about/",
    medias: {
      Baidu: "https://tieba.baidu.com/home/main?un=jiange1236",
//      Bitbucket: "https://example.com",
//      Dingding: "https://example.com",
//      Discord: "https://example.com",
//      Dribbble: "https://example.com",
      Email: "mailto:183465355@qq.com",
//      Evernote: "https://example.com",
      Facebook: "https://example.com",
//      Flipboard: "https://example.com",
      Gitee: "https://gitee.com/jiange1236",
      GitHub: "https://github.com/jiange1236",
//      Gitlab: "https://example.com",
//      Gmail: "https://example.com",
//      Instagram: "https://example.com",
//      Lines: "https://example.com",
//      Linkedin: "https://example.com",
//      Pinterest: "https://example.com",
//      Pocket: "https://example.com",
//      QQ: "https://qq.com",
//      Qzone: "https://example.com",
//      Reddit: "https://example.com",
//      Rss: "https://example.com",
//      Steam: "https://example.com",
      Twitter: "https://twitter.com/zhouzijian1236",
//      Wechat: "https://example.com",
      Weibo: "https://weibo.com/u/1873128010",
//      Whatsapp: "https://example.com",
//      Youtube: "https://example.com",
      Zhihu: "https://www.zhihu.com/people/zhouzijian",
          },
        },
      },
    },

    displayFooter: true,
    copyright: "Copyright © 2019-present Zine⁶",

  plugins: {
    blog: {
        excerptLength: 0,
    },

	shiki: {
	  langs: ['ts', 'json', 'vue', 'php', 'md', 'bash', 'diff', 'python'],
	},

    comment: {
        provider: "Waline",
        serverURL: "https://waline.zecdn.top",
    },

      docsearch: {
        appId: "I7SASQM4UK",
        apiKey: "a20baaa964754c629bf5a7d027ffe7b7",
        indexName: "zeblog",
      },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
        align: true,
        codetabs: true,
        demo: true,
        figure: true,
        flowchart: true,
        footnote: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        mathjax: true,
        mermaid: true,
        revealJs: true,
        sub: true,
        sup: true,
        vPre: true,
      },

      pwa: {
        themeColor: "#5c92d1",
        cacheHTML: false,
        maxSize: 3072,
        apple: {
          icon: "/assets/icon/apple-touch-icon.png",
          statusBarColor: "white",
    },
        msTile: {
          image: "/assets/icon/ms-icon-144.png",
          color: "#ffffff",
  },
        manifest: {
          name: "Zine⁶ 的个人博客",
          short_name: "Zine⁶ Blog",
          description: "Zine⁶ 的个人博客",
          theme_color: "#5c92d1",
          icons: [
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "分类",
              short_name: "分类",
              icons: [
                {
                  src: "/assets/icon/category-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/category/",
              description: "文章分类分组",
            },
            {
              name: "标签",
              short_name: "标签",
              icons: [
                {
                  src: "/assets/icon/tag-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/tag/",
              description: "文章标签分组",
            },
            {
              name: "时间线",
              short_name: "时间线",
              icons: [
                {
                  src: "/assets/icon/timeline-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/timeline/",
              description: "时间线文章列表",
            },
            {
              name: "个人介绍",
              short_name: "个人介绍",
              icons: [
                {
                  src: "/assets/icon/about-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/about/",
              description: "个人介绍",
            },
          ],
        },
      },
    },
  },
  false,
);

import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://jiange1236.github.io",

  author: {
    name: "Zine",
    url: "https://jiange1236.github.io",
  },

  iconPrefix: "iconfont icon-",

  logo: "/blog.png",

  repo: "https://github.com/jiange1236/jiange1236.github.io",

  docsDir: "notes",
  docsRepo: "https://github.com/jiange1236/jiange1236.github.io",
  docsBranch: "main",
  // navbar
  navbar: navbar,

  // sidebar
  //sidebar: sidebar,
  sidebar: {
    "/finance/": "structure",
	"/fun/": "structure",
	"/others/": "structure",
	"/photo/": "structure",
	"/study/": "structure",
	"/tech/": "structure",
	"/work/": "structure",
    // fallback
    "/": [
      "" /* / */,
	  "home" /* /home.html */,
      "intro" /* /intro.html */,
    ],
  },

  footer: "不忘初心，方得始终",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime","Word"],

  blog: {
    description: "一级注册结构工程师 | 《时代周刊》2006年度风云人物",
    intro: "/intro.html",
	roundAvatar: true,
	sidebarDisplay: "mobile",
	articlePerPage: 10,//每页的文章数量
	articleInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime","Word"],
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
	timeline: "昨日不在"
  },

  pwa:{
    cachePic: true,
    cacheHTML: true,
    update: "available",
  },

  encrypt: {
    config: {
      //"/guide/encrypt.html": ["1234"],
    },
  },
  // seo:true,
  plugins: {
    
    blog: {
      autoExcerpt: true,//是否为每个页面生成摘录
    },
    copyCode: {"showInMobile": true,duration: 2000},

    // 你也可以使用 Waline
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "jiange1236/jiange1236.GitHub.io",
      repoId: "R_kgDOHLemeQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHLemec4CPFA-",
	  mapping: "title",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      // gfm: true,//是否支持完整的 GFM 语法
      // codegroup: true,//是否启用代码组
      // align: true,//是否启用自定义对齐格式支持
      // sup: true,//是否启用上角标格式支持
      // sub: true,//是否启用下角标格式支持
      // footnote: true,//是否启用脚注格式支持
      // lazyLoad: true,//是否使用原生方式懒加载页面图片
      // mark: true,//是否启用标记格式支持
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});

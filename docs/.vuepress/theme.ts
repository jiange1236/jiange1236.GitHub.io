import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://zeblog.ml",

  author: {
    name: "Zine",
    url: "https://zeblog.ml",
  },

  iconPrefix: "iconfont icon-",

  logo: "https://cravatar.cn/avatar/E4A047ACD3E5CB1F5ECC07E130E44C79.png",

  repo: "https://github.com/jiange1236/jiange1236.github.io",

  docsDir: "docs",
  docsRepo: "https://github.com/jiange1236/jiange1236.github.io",
  docsBranch: "main",
  // navbar
  navbar: navbar,

  // sidebar
  sidebar: {
    "/finance/": "structure",
	"/fun/": "structure",
	"/photo/": "structure",
	"/study/": "structure",
	"/tech/": "structure",
	"/work/": "structure",
    // fallback
    "/": [
    "" /* / */,
    ],
  },

  footer: "不忘初心，方得始终",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word"],

  blog: {
    description: "小小土木僧",
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

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    copyCode: {"showInMobile": true,duration: 2000},
	
    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

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
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});

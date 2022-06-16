import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://jiange1236.github.io",

  author: {
    name: "Zine",
    url: "https://jiange1236.github.io",
  },
  
  iconAssets: "fontawesome",
  iconPrefix: "fas fa-",

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

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word"],

  blog: {
    description: "一级注册结构工程师 | 《时代周刊》2006年度风云人物",
    intro: "/intro.html",
	roundAvatar: true,
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

  // seo:true,
  plugins: {
	  
    blog: true,

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

    feed: {
      atom: true,
      json: true,
      rss: true,
    },
	
    mdEnhance: {
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,
      imageMark: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
      vpre: true,
    },
	
    pwa: {
      favicon: "/favicon.ico",
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
        name: "Mr.Hope 的个人博客",
        short_name: "Mr.Hope Blog",
        description: "Mr.Hope 的个人博客",
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
              {
                src: "/assets/icon/category-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
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
              {
                src: "/assets/icon/tag-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
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
              {
                src: "/assets/icon/timeline-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
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
              {
                src: "/assets/icon/about-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/intro.html",
            description: "个人介绍",
          },
        ],
      },
    },
  },
});	

import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.ts";
import { enSidebar, zhSidebar } from "./sidebar/index.ts";

export default hopeTheme({
  hostname: "https://jiange1236.github.io",

  author: {
    name: "Zine⁶",
    url: "https://zecdn.top",
  },

  logo: "/logo.png",

  repo: "jiange1236/jiange1236.GitHub.io",

  docsDir: "notes",

  blog: {
	medias: {
      Baidu: "https://tieba.baidu.com/home/main?un=jiange1236",
//      BiliBili: "https://example.com",
//      Bitbucket: "https://example.com",
//      Dingding: "https://example.com",
//      Discord: "https://example.com",
//      Dribbble: "https://example.com",
      Email: "mailto:183465355@qq.com",
//      Evernote: "https://example.com",
//      Facebook: "https://example.com",
//      Flipboard: "https://example.com",
      Gitee: "https://gitee.com/jiange1236",
      GitHub: "https://github.com/jiange1236",
//      Gitlab: "https://example.com",
//      Gmail: "mailto:info@example.com",
//      Instagram: "https://example.com",
//      Lark: "https://example.com",
//      Lines: "https://example.com",
//      Linkedin: "https://example.com",
//      Pinterest: "https://example.com",
//      Pocket: "https://example.com",
//      QQ: "https://example.com",
//      Qzone: "https://example.com",
//      Reddit: "https://example.com",
//      Rss: "https://example.com",
//      Steam: "https://example.com",
      Twitter: "https://x.com/jiange1236",
//      Wechat: "https://example.com",
      Weibo: "https://weibo.com/u/1873128010",
//      Whatsapp: "https://example.com",
//      Youtube: "https://example.com",
      Zhihu: "https://www.zhihu.com/people/zhouzijian",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press",
      },
    },
  },

  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "To Be A Better Man",

	  copyright: 'MIT Licensed, © 2019-present Zine⁶ | <a href="/en/about/site.html" target="_blank">About Site</a>',

      displayFooter: true,

      blog: {
        description: "A Civil Engineer",
        intro: "/en/about/",
      },

//      metaLocales: {
//        editLink: "Edit this page on GitHub",
//      },
    },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "不忘初心，方得始终",

      copyright: '基于 MIT 协议，© 2019-至今 Zine⁶ | <a href="/about/site.html">关于网站</a>',

	  displayFooter: true,

      blog: {
        description: "一级注册结构工程师 | 《时代周刊》2006年度风云人物",
        intro: "/about/",
      },

      // page meta
//      metaLocales: {
//        editLink: "在 GitHub 上编辑此页",
//      },
    },
  },

  //encrypt: {
  //  config: {
  //    "/demo/encrypt.html": ["1234"],
  //    "/zh/demo/encrypt.html": ["1234"],
  //  },
  //},

  // enable it to preview all changes in time
  // hotReload: true,

  markdown: {
      vPre: true,
      linkify: true,
	  align: true,
      attrs: true,
	  spoiler: true,
	  sup: true,
	  sub: true,
	  footnote: true,
      mark: true,
      tasklist: true,
      include: true,
      component: true,
      demo: true,
      chart: true,
	  echarts: true,
      flowchart: true,
	  mermaid: true,
      plantuml: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      alert: true,
	  hint: true,
	  math: true,
	  tabs: true,
	  codeTabs: true,
	  highlighter: {
	    type: 'shiki',
      },
	  revealjs: true, // 启用 revealjs 插件
	  figure: true,
	  imgLazyload: true,
	  imgMark: true,
	  obsidianImgSize: true,
  },
  
  plugins: {
    blog: {
    // 不自动生成摘要
        excerptLength: 0,
    },

    icon: {
      assets: 'fontawesome',
	},

	comment: {
        provider: "Giscus",
        repo: "jiange1236/jiange1236.github.io",
		repoId: "R_kgDOHLemeQ",
		category: "Announcements",
		categoryId: "DIC_kwDOHLemec4CPFA-",
    },
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
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

    components: {
      components: ['Badge', 'PDF', 'Share', 'SiteInfo', 'VPBanner', 'VPCard'],
    },

    // These features are enabled for demo, only preserve features you need here

    pwa: true,
	//   {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});

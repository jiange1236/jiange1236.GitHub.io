import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://jiange1236.github.io",

  author: {
    name: "Zine",
    url: "https://jiange1236.github.io",
  },

  iconAssets: "fontawesome",

  logo: "/blog.png",

  repo: "https://github.com/jiange1236/jiange1236.github.io",

  docsDir: "notes",
  docsRepo: "https://github.com/jiange1236/jiange1236.github.io",
  docsBranch: "main",
  
  // navbar
  navbar: [
	  { text: '主页', link: '/' , icon: "house"},
	  { text: '项目', link: '/home' ,icon:"list-check" },
	  { text: '工作', link: '/work/' ,icon:"briefcase" },
	  { text: '学习', link: '/study/' ,icon:"book-open"},
	  { text: '计算机', link: '/tech/' ,icon:"desktop"},
	  { text: '娱乐', link: '/fun/' ,icon:"dice"},  
	  { text: '摄影', link: '/photo/' ,icon:"camera"},
	  { text: '理财', link: '/finance/' ,icon:"chart-line"},
	  { text: '其它', link: '/others/' ,icon:"bolt"},
	  {
		  text: "镜像",
		  icon: "cube",
		  children: [
    		  { text: 'DownGit', link: 'https://github.jiange1236.workers.dev/' ,icon:"github"},
			  { text: 'Proxy', link: 'https://proxy.jiange1236.workers.dev/' ,icon:"archway"},
			  { 
    			  text:'本站镜像',
				  icon:"network",
				  children: [
    				  { text: 'Netflify', link: 'https://zeblog.netlify.app/' },
					  { text: 'Vercel', link: 'http://zeblog.vercel.app/' },
					  { text: 'Cloudflare', link: 'https://zeblog.pages.dev/' },
				  ],
			  },
		  ],
	  },
  ],

  // sidebar
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

  encrypt: {
    config: {
      //"/guide/encrypt.html": ["1234"],
    },
  },
  // seo:true,
  plugins: {
    pwa: {
		cachePic: true,
		cacheHTML: true,
		update: "available",
	},
	
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
      codetabs: true,
      mermaid: true,
    },
  },
});

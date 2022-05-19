import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  { text: '主页', link: '/' , icon: "home"},
  { text: '项目', link: '/home' ,icon:"tasks" },
  { text: '工作', link: '/work/' ,icon:"briefcase" },
  { text: '学习', link: '/study/' ,icon:"university"},
  { text: '计算机', link: '/tech/' ,icon:"desktop"},
  { text: '娱乐', link: '/fun/' ,icon:"popcorn"},  
  { text: '摄影', link: '/photo/' ,icon:"camera"},
  { text: '理财', link: '/finance/' ,icon:"chart-line"},
  { text: '其它', link: '/others/' ,icon:"slack-hash"},
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
  
  // "/",
  // "/home",
  // { text: "使用指南", icon: "creative", link: "/guide/" },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "文章 1", icon: "edit", link: "article1" },
  //         { text: "文章 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "文章 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "文章 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "文章 9", icon: "edit", link: "article9" },
  //     { text: "文章 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);

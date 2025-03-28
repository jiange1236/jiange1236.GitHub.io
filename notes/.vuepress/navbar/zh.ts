import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "主页", link: "/", icon: "home"},
  { text: "工作", link: "/work/", icon:"briefcase" },
  { text: "学习", link: "/study/", icon:"book-open"},
  { text: "计算机", link: "/tech/", icon:"desktop"},
  { text: "娱乐", link: "/fun/", icon:"dice"},  
  { text: "摄影", link: "/photo/", icon:"camera"},
  { text: "理财", link: "/finance/", icon:"chart-line"},
  {
	text: "其它",
	icon: "bolt",
	prefix: "/others/",
	children: [
		{ text: "规范", link: "standards/" ,icon:"fa-brands fa-readme"},
	],
  },
  {
	text: "镜像",
	icon: "cube",
	children: [
		{ text: "CloudflareYes", link: "https://stock.hostmonit.com/CloudFlareYes" ,icon:"fa-brands fa-github"},
		{ text: "Github镜像", link: "https://xiake.pro" ,icon:"archway"},
		{ 
			text:"本站镜像",
			icon:"network",
			children: [
				{ text: "EdgeOne", link: "https://t.zecdn.top" },
				{ text: "Cloudflare", link: "https://zeblog.pages.dev" },
				{ text: "Netflify", link: "https://zeblog.netlify.app" },
				{ text: "Vercel", link: "http://zeblog.vercel.app" },
				{ text: "Render", link: "https://zeblog-zyd3.onrender.com" },
				{ text: "Gitlab", link: "http://jiange1236.gitlab.io/zeblog" },			
			],
		},
	],
  },
]);

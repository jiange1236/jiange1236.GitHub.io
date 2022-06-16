import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "主页", link: "/", icon: "house"},
  { text: "项目", link: "/home", icon:"list-check" },
  { text: "工作", link: "/work/", icon:"briefcase" },
  { text: "学习", link: "/study/", icon:"book-open"},
  { text: "计算机", link: "/tech/", icon:"desktop"},
  { text: "娱乐", link: "/fun/", icon:"dice"},  
  { text: "摄影", link: "/photo/", icon:"camera"},
  { text: "理财", link: "/finance/", icon:"chart-line"},
  { text: "其它", link: "/others/", icon:"bolt"},
  {
	text: "镜像",
	icon: "cube",
	children: [
		{ text: "DownGit", link: "https://github.jiange1236.workers.dev/" ,icon:"github"},
		{ text: "Proxy", link: "https://proxy.jiange1236.workers.dev/" ,icon:"archway"},
		{ 
			text:"本站镜像",
			icon:"network",
			children: [
				{ text: "Netflify", link: "https://zeblog.netlify.app/" },
				{ text: "Vercel", link: "http://zeblog.vercel.app/" },
				{ text: "Cloudflare", link: "https://zeblog.pages.dev/" },
			],
		},
	],
  },
]);
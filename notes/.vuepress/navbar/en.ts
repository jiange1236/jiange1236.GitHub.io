import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "Home", link: "/", icon: "home"},
  { text: "Work", link: "/work/", icon:"briefcase" },
  { text: "Study", link: "/study/", icon:"book-open"},
  { text: "Tech", link: "/tech/", icon:"desktop"},
  { text: "Fun", link: "/fun/", icon:"dice"},  
  { text: "Photo", link: "/photo/", icon:"camera"},
  { text: "Finance", link: "/finance/", icon:"chart-line"},
  { text: "Others", link: "/others/", icon:"bolt"},
  {
	text: "Mirror",
	icon: "cube",
	children: [
		{ text: "CloudflareYes", link: "https://stock.hostmonit.com/CloudFlareYes" ,icon:"github"},
		{ text: "Github Mirror", link: "http://lib.zuotiyi.cn/tool/github.html" ,icon:"archway"},
		{ 
			text:"Blog Mirror",
			icon:"network",
			children: [
				{ text: "Cloudflare", link: "https://zeblog.pages.dev/" },
				{ text: "Netflify", link: "https://zeblog.netlify.app/" },
				{ text: "Vercel", link: "http://zeblog.vercel.app/" },
				{ text: "Render", link: "https://zeblog-zyd3.onrender.com/" },		
			],
		},
	],
  },
]);

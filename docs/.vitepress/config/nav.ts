import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '主页',
    link: '/',
    activeMatch: '/index'
  },
  {
    text: '项目',
    link: '/home/index',
    activeMatch: '/home/'
  },
  {
    text: '工作',
    link: '/work/index',
    activeMatch: '/work/'
  },
  {
    text: '学习',
    link: '/study/index',
    activeMatch: '/study/'
  },
  {
    text: '计算机',
    link: '/tech/index',
    activeMatch: '/tech/'
  },
  {
    text: '娱乐',
    link: '/fun/index',
    activeMatch: '/fun/'
  },
  {
    text: '摄影',
    link: '/photo/index',
    activeMatch: '/photo/'
  },
  {
    text: '理财',
    link: '/finance/index',
    activeMatch: '/finance/'
  },
  {
    text: '其它',
    link: '/others/index',
    activeMatch: '/others/'
  },
  {
    text: '镜像',
    items: [
      { text: 'Cloudflare', link: 'https://zeblog.pages.dev' },
      { text: 'Netflify', link: 'https://zeblog.netlify.app' },
      { text: 'Vercel', link: 'http://zeblog.vercel.app' },
      { text: 'Render', link: 'https://zeblog-zyd3.onrender.com' },
    ],
    activeMatch: '/courses/'
  },
  {
    text: '我的标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '我的归档',
    link: '/archives',
    activeMatch: '/archives'
  },
  {
    text: '关于',
    items: [
      { text: '关于知识库', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
    ],
    activeMatch: '/about/' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
];
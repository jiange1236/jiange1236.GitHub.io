// notes/.vuepress/config.ts
import { appendDatePlugin } from "@vuepress/plugin-append-date";
import { defineUserConfig } from "vuepress";

// notes/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// notes/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([
  { text: "Home", link: "/", icon: "home" },
  { text: "Work", link: "/work/", icon: "briefcase" },
  { text: "Study", link: "/study/", icon: "book-open" },
  { text: "Tech", link: "/tech/", icon: "desktop" },
  { text: "Fun", link: "/fun/", icon: "dice" },
  { text: "Photo", link: "/photo/", icon: "camera" },
  { text: "Finance", link: "/finance/", icon: "chart-line" },
  { text: "Others", link: "/others/", icon: "bolt" },
  {
    text: "Mirror",
    icon: "cube",
    children: [
      { text: "CloudflareYes", link: "https://stock.hostmonit.com/CloudFlareYes", icon: "github" },
      { text: "Github Mirror", link: "http://lib.zuotiyi.cn/tool/github.html", icon: "archway" },
      {
        text: "Blog Mirror",
        icon: "network",
        children: [
          { text: "Cloudflare", link: "https://zeblog.pages.dev/" },
          { text: "Netflify", link: "https://zeblog.netlify.app/" },
          { text: "Vercel", link: "http://zeblog.vercel.app/" },
          { text: "Render", link: "https://zeblog-zyd3.onrender.com/" }
        ]
      }
    ]
  }
]);

// notes/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbar = navbar2([
  { text: "\u4E3B\u9875", link: "/", icon: "home" },
  { text: "\u5DE5\u4F5C", link: "/work/", icon: "briefcase" },
  { text: "\u5B66\u4E60", link: "/study/", icon: "book-open" },
  { text: "\u8BA1\u7B97\u673A", link: "/tech/", icon: "desktop" },
  { text: "\u5A31\u4E50", link: "/fun/", icon: "dice" },
  { text: "\u6444\u5F71", link: "/photo/", icon: "camera" },
  { text: "\u7406\u8D22", link: "/finance/", icon: "chart-line" },
  { text: "\u5176\u5B83", link: "/others/", icon: "bolt" },
  {
    text: "\u955C\u50CF",
    icon: "cube",
    children: [
      { text: "CloudflareYes", link: "https://stock.hostmonit.com/CloudFlareYes", icon: "github" },
      { text: "Github\u955C\u50CF", link: "http://lib.zuotiyi.cn/tool/github.html", icon: "archway" },
      {
        text: "\u672C\u7AD9\u955C\u50CF",
        icon: "network",
        children: [
          { text: "Cloudflare", link: "https://zeblog.pages.dev/" },
          { text: "Netflify", link: "https://zeblog.netlify.app/" },
          { text: "Vercel", link: "http://zeblog.vercel.app/" },
          { text: "Render", link: "https://zeblog-zyd3.onrender.com/" }
        ]
      }
    ]
  }
]);

// notes/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/en/": [
    ""
  ],
  "about/": "structure"
});

// notes/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebar = sidebar2({
  "/": [
    ""
  ],
  "/finance/": "structure",
  "/fun/": "structure",
  "/others/": "structure",
  "/photo/": "structure",
  "/study/": "structure",
  "/tech/": "structure",
  "/work/": "structure",
  "/about/": "structure"
});

// notes/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://jiange1236.github.io",
  author: {
    name: "Zine\u2076",
    url: "https://zecdn.top"
  },
  iconAssets: "fontawesome-with-brands",
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
        link: "https://theme-hope.vuejs.press"
      }
    }
  },
  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: "To Be A Better Man",
      copyright: 'MIT Licensed, \xA9 2019-present Zine\u2076 | <a href="/en/about/site.html" target="_blank">About Site</a>',
      displayFooter: true,
      blog: {
        description: "A Civil Engineer",
        intro: "/en/about/"
      }
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
      footer: "\u4E0D\u5FD8\u521D\u5FC3\uFF0C\u65B9\u5F97\u59CB\u7EC8",
      copyright: '\u57FA\u4E8E MIT \u534F\u8BAE\uFF0C\xA9 2019-\u81F3\u4ECA Zine\u2076 | <a href="/about/site.html">\u5173\u4E8E\u7F51\u7AD9</a>',
      displayFooter: true,
      blog: {
        description: "\u4E00\u7EA7\u6CE8\u518C\u7ED3\u6784\u5DE5\u7A0B\u5E08 | \u300A\u65F6\u4EE3\u5468\u520A\u300B2006\u5E74\u5EA6\u98CE\u4E91\u4EBA\u7269",
        intro: "/about/"
      }
      // page meta
      //      metaLocales: {
      //        editLink: "在 GitHub 上编辑此页",
      //      },
    }
  },
  //encrypt: {
  //  config: {
  //    "/demo/encrypt.html": ["1234"],
  //    "/zh/demo/encrypt.html": ["1234"],
  //  },
  //},
  // enable it to preview all changes in time
  // hotReload: true,
  plugins: {
    blog: {
      excerptLength: 0
    },
    comment: {
      provider: "Giscus",
      repo: "jiange1236/jiange1236.github.io",
      repoId: "R_kgDOHLemeQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHLemec4CPFA-"
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
      indexName: "zeblog"
    },
    shiki: {
      langs: ["ts", "json", "vue", "php", "md", "bash", "diff", "python"]
    },
    feed: {
      atom: true,
      json: true,
      rss: true
    },
    components: {
      components: ["Badge", "VPCard"]
    },
    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      flowchart: true,
      mathjax: true,
      mermaid: true,
      revealJs: true,
      footnote: true
      // install chart.js before enabling it
      // chart: true,
      // insert component easily
      // install echarts before enabling it
      // echarts: true,
      // gfm requires mathjax-full to provide tex support
      // gfm: true,
      // install katex before enabling it
      // katex: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // install @vue/repl before enabling it
      // vuePlayground: true,
      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },
    pwa: true
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
  }
});

// notes/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  head: [
    // 百度统计
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?19aa03722b943973f9583b7649941a3b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
      `
    ]
  ],
  locales: {
    "/en/": {
      lang: "en-US",
      title: "Zeblog",
      description: "Zine\u2076 personal blog"
    },
    "/": {
      lang: "zh-CN",
      title: "Zeblog",
      description: "\u4E2A\u4EBA\u5B66\u4E60\u7684\u7B14\u8BB0\uFF0C\u8BB0\u5F55\u5B66\u4E60\u8FC7\u7A0B\u9047\u5230\u7684\u95EE\u9898\uFF0C\u5B66\u5230\u7684\u77E5\u8BC6\uFF0C\u6536\u96C6\u5404\u79CD\u5B66\u4E60\u5DE5\u5177\uFF0C\u5404\u79CD\u6280\u5DE7\uFF0C\u5404\u79CD\u4F7F\u7528\u6559\u7A0B\u3002"
    }
  },
  theme: theme_default,
  plugins: [appendDatePlugin()],
  // Enable it with pwa
  shouldPrefetch: false
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm90ZXMvLnZ1ZXByZXNzL2NvbmZpZy50cyIsICJub3Rlcy8udnVlcHJlc3MvdGhlbWUudHMiLCAibm90ZXMvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJub3Rlcy8udnVlcHJlc3MvbmF2YmFyL3poLnRzIiwgIm5vdGVzLy52dWVwcmVzcy9zaWRlYmFyL2VuLnRzIiwgIm5vdGVzLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovR2l0SHViL2ppYW5nZTEyMzYuR2l0SHViLmlvL25vdGVzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcR2l0SHViXFxcXGppYW5nZTEyMzYuR2l0SHViLmlvXFxcXG5vdGVzXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0dpdEh1Yi9qaWFuZ2UxMjM2LkdpdEh1Yi5pby9ub3Rlcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgYXBwZW5kRGF0ZVBsdWdpbiB9IGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLWFwcGVuZC1kYXRlXCI7XG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6IFwiL1wiLFxuICBoZWFkOiBbXG4gICAgLy8gXHU3NjdFXHU1RUE2XHU3RURGXHU4QkExXG4gICAgW1xuICAgICAgXCJzY3JpcHRcIix7fSxcbiAgICAgIGBcbiAgICAgIHZhciBfaG10ID0gX2htdCB8fCBbXTtcbihmdW5jdGlvbigpIHtcbiAgdmFyIGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgaG0uc3JjID0gXCJodHRwczovL2htLmJhaWR1LmNvbS9obS5qcz8xOWFhMDM3MjJiOTQzOTczZjk1ODNiNzY0OTk0MWEzYlwiO1xuICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdOyBcbiAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShobSwgcyk7XG59KSgpO1xuICAgICAgYFxuICAgIF1cblx0XSxcblx0XG4gIGxvY2FsZXM6IHtcbiAgICBcIi9lbi9cIjoge1xuICAgICAgbGFuZzogXCJlbi1VU1wiLFxuICAgICAgdGl0bGU6IFwiWmVibG9nXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJaaW5lXHUyMDc2IHBlcnNvbmFsIGJsb2dcIixcbiAgICB9LFxuICAgIFwiL1wiOiB7XG4gICAgICBsYW5nOiBcInpoLUNOXCIsXG4gICAgICB0aXRsZTogXCJaZWJsb2dcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlx1NEUyQVx1NEVCQVx1NUI2Nlx1NEU2MFx1NzY4NFx1N0IxNFx1OEJCMFx1RkYwQ1x1OEJCMFx1NUY1NVx1NUI2Nlx1NEU2MFx1OEZDN1x1N0EwQlx1OTA0N1x1NTIzMFx1NzY4NFx1OTVFRVx1OTg5OFx1RkYwQ1x1NUI2Nlx1NTIzMFx1NzY4NFx1NzdFNVx1OEJDNlx1RkYwQ1x1NjUzNlx1OTZDNlx1NTQwNFx1NzlDRFx1NUI2Nlx1NEU2MFx1NURFNVx1NTE3N1x1RkYwQ1x1NTQwNFx1NzlDRFx1NjI4MFx1NURFN1x1RkYwQ1x1NTQwNFx1NzlDRFx1NEY3Rlx1NzUyOFx1NjU1OVx1N0EwQlx1MzAwMlwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdGhlbWUsXG5cbiAgcGx1Z2luczogW2FwcGVuZERhdGVQbHVnaW4oKV0sXG5cbiAgLy8gRW5hYmxlIGl0IHdpdGggcHdhXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9HaXRIdWIvamlhbmdlMTIzNi5HaXRIdWIuaW8vbm90ZXMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxHaXRIdWJcXFxcamlhbmdlMTIzNi5HaXRIdWIuaW9cXFxcbm90ZXNcXFxcLnZ1ZXByZXNzXFxcXHRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9HaXRIdWIvamlhbmdlMTIzNi5HaXRIdWIuaW8vbm90ZXMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcbmltcG9ydCB7IGVuTmF2YmFyLCB6aE5hdmJhciB9IGZyb20gXCIuL25hdmJhci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZW5TaWRlYmFyLCB6aFNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vamlhbmdlMTIzNi5naXRodWIuaW9cIixcblxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIlppbmVcdTIwNzZcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly96ZWNkbi50b3BcIixcbiAgfSxcblxuICBpY29uQXNzZXRzOiBcImZvbnRhd2Vzb21lLXdpdGgtYnJhbmRzXCIsXG5cbiAgbG9nbzogXCIvbG9nby5wbmdcIixcblxuICByZXBvOiBcImppYW5nZTEyMzYvamlhbmdlMTIzNi5HaXRIdWIuaW9cIixcblxuICBkb2NzRGlyOiBcIm5vdGVzXCIsXG4gIFxuICBibG9nOiB7XG5cdG1lZGlhczoge1xuICAgICAgQmFpZHU6IFwiaHR0cHM6Ly90aWViYS5iYWlkdS5jb20vaG9tZS9tYWluP3VuPWppYW5nZTEyMzZcIixcbi8vICAgICAgQmlsaUJpbGk6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuLy8gICAgICBCaXRidWNrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuLy8gICAgICBEaW5nZGluZzogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4vLyAgICAgIERpc2NvcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuLy8gICAgICBEcmliYmJsZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBFbWFpbDogXCJtYWlsdG86MTgzNDY1MzU1QHFxLmNvbVwiLFxuLy8gICAgICBFdmVybm90ZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4vLyAgICAgIEZhY2Vib29rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbi8vICAgICAgRmxpcGJvYXJkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEdpdGVlOiBcImh0dHBzOi8vZ2l0ZWUuY29tL2ppYW5nZTEyMzZcIixcbiAgICAgIEdpdEh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmdlMTIzNlwiLFxuLy8gICAgICBHaXRsYWI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuLy8gICAgICBHbWFpbDogXCJtYWlsdG86aW5mb0BleGFtcGxlLmNvbVwiLFxuLy8gICAgICBJbnN0YWdyYW06IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuLy8gICAgICBMYXJrOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbi8vICAgICAgTGluZXM6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuLy8gICAgICBMaW5rZWRpbjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4vLyAgICAgIFBpbnRlcmVzdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4vLyAgICAgIFBvY2tldDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4vLyAgICAgIFFROiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbi8vICAgICAgUXpvbmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuLy8gICAgICBSZWRkaXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuLy8gICAgICBSc3M6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuLy8gICAgICBTdGVhbTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBUd2l0dGVyOiBcImh0dHBzOi8veC5jb20vamlhbmdlMTIzNlwiLFxuLy8gICAgICBXZWNoYXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgV2VpYm86IFwiaHR0cHM6Ly93ZWliby5jb20vdS8xODczMTI4MDEwXCIsXG4vLyAgICAgIFdoYXRzYXBwOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbi8vICAgICAgWW91dHViZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBaaGlodTogXCJodHRwczovL3d3dy56aGlodS5jb20vcGVvcGxlL3pob3V6aWppYW5cIixcbiAgICAgIFZ1ZVByZXNzVGhlbWVIb3BlOiB7XG4gICAgICAgIGljb246IFwiaHR0cHM6Ly90aGVtZS1ob3BlLWFzc2V0cy52dWVqcy5wcmVzcy9sb2dvLnN2Z1wiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzc1wiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGxvY2FsZXM6IHtcbiAgICBcIi9lbi9cIjoge1xuICAgICAgLy8gbmF2YmFyXG4gICAgICBuYXZiYXI6IGVuTmF2YmFyLFxuXG4gICAgICAvLyBzaWRlYmFyXG4gICAgICBzaWRlYmFyOiBlblNpZGViYXIsXG5cbiAgICAgIGZvb3RlcjogXCJUbyBCZSBBIEJldHRlciBNYW5cIixcblx0ICBcblx0ICBjb3B5cmlnaHQ6ICdNSVQgTGljZW5zZWQsIFx1MDBBOSAyMDE5LXByZXNlbnQgWmluZVx1MjA3NiB8IDxhIGhyZWY9XCIvZW4vYWJvdXQvc2l0ZS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QWJvdXQgU2l0ZTwvYT4nLFxuXG4gICAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gICAgICBibG9nOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgQ2l2aWwgRW5naW5lZXJcIixcbiAgICAgICAgaW50cm86IFwiL2VuL2Fib3V0L1wiLFxuICAgICAgfSxcblxuLy8gICAgICBtZXRhTG9jYWxlczoge1xuLy8gICAgICAgIGVkaXRMaW5rOiBcIkVkaXQgdGhpcyBwYWdlIG9uIEdpdEh1YlwiLFxuLy8gICAgICB9LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGluZXNlIGxvY2FsZSBjb25maWdcbiAgICAgKi9cbiAgICBcIi9cIjoge1xuICAgICAgLy8gbmF2YmFyXG4gICAgICBuYXZiYXI6IHpoTmF2YmFyLFxuXG4gICAgICAvLyBzaWRlYmFyXG4gICAgICBzaWRlYmFyOiB6aFNpZGViYXIsXG5cbiAgICAgIGZvb3RlcjogXCJcdTRFMERcdTVGRDhcdTUyMURcdTVGQzNcdUZGMENcdTY1QjlcdTVGOTdcdTU5Q0JcdTdFQzhcIixcblxuICAgICAgY29weXJpZ2h0OiAnXHU1N0ZBXHU0RThFIE1JVCBcdTUzNEZcdThCQUVcdUZGMENcdTAwQTkgMjAxOS1cdTgxRjNcdTRFQ0EgWmluZVx1MjA3NiB8IDxhIGhyZWY9XCIvYWJvdXQvc2l0ZS5odG1sXCI+XHU1MTczXHU0RThFXHU3RjUxXHU3QUQ5PC9hPicsXG5cdCAgXHQgIFxuXHQgIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgICAgIGJsb2c6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXHU0RTAwXHU3RUE3XHU2Q0U4XHU1MThDXHU3RUQzXHU2Nzg0XHU1REU1XHU3QTBCXHU1RTA4IHwgXHUzMDBBXHU2NUY2XHU0RUUzXHU1NDY4XHU1MjBBXHUzMDBCMjAwNlx1NUU3NFx1NUVBNlx1OThDRVx1NEU5MVx1NEVCQVx1NzI2OVwiLFxuICAgICAgICBpbnRybzogXCIvYWJvdXQvXCIsXG4gICAgICB9LFxuXG4gICAgICAvLyBwYWdlIG1ldGFcbi8vICAgICAgbWV0YUxvY2FsZXM6IHtcbi8vICAgICAgICBlZGl0TGluazogXCJcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVwiLFxuLy8gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgLy9lbmNyeXB0OiB7XG4gIC8vICBjb25maWc6IHtcbiAgLy8gICAgXCIvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgLy8gICAgXCIvemgvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgLy8gIH0sXG4gIC8vfSxcblxuICAvLyBlbmFibGUgaXQgdG8gcHJldmlldyBhbGwgY2hhbmdlcyBpbiB0aW1lXG4gIC8vIGhvdFJlbG9hZDogdHJ1ZSxcblxuICBwbHVnaW5zOiB7XG4gICAgYmxvZzoge1xuICAgICAgICBleGNlcnB0TGVuZ3RoOiAwLFxuICAgICAgfSxcblxuICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgcHJvdmlkZXI6IFwiR2lzY3VzXCIsXG4gICAgICAgIHJlcG86IFwiamlhbmdlMTIzNi9qaWFuZ2UxMjM2LmdpdGh1Yi5pb1wiLFxuXHRcdHJlcG9JZDogXCJSX2tnRE9ITGVtZVFcIixcblx0XHRjYXRlZ29yeTogXCJBbm5vdW5jZW1lbnRzXCIsXG5cdFx0Y2F0ZWdvcnlJZDogXCJESUNfa3dET0hMZW1lYzRDUEZBLVwiLFxuICAgICAgfSxcbiAgICAvLyBJbnN0YWxsIEB3YWxpbmUvY2xpZW50IGJlZm9yZSBlbmFibGluZyBpdFxuICAgIC8vIE5vdGU6IFRoaXMgaXMgZm9yIHRlc3RpbmcgT05MWSFcbiAgICAvLyBZb3UgTVVTVCBnZW5lcmF0ZSBhbmQgdXNlIHlvdXIgb3duIGNvbW1lbnQgc2VydmljZSBpbiBwcm9kdWN0aW9uLlxuICAgIC8vIGNvbW1lbnQ6IHtcbiAgICAvLyAgIHByb3ZpZGVyOiBcIldhbGluZVwiLFxuICAgIC8vICAgc2VydmVyVVJMOiBcImh0dHBzOi8vd2FsaW5lLWNvbW1lbnQudnVlanMucHJlc3NcIixcbiAgICAvLyB9LFxuICAgIGRvY3NlYXJjaDoge1xuICAgICAgICBhcHBJZDogXCJJN1NBU1FNNFVLXCIsXG4gICAgICAgIGFwaUtleTogXCJhMjBiYWFhOTY0NzU0YzYyOWJmNWE3ZDAyN2ZmZTdiN1wiLFxuICAgICAgICBpbmRleE5hbWU6IFwiemVibG9nXCIsXG4gICAgICB9LFxuXG5cdHNoaWtpOiB7XG5cdCAgbGFuZ3M6IFsndHMnLCAnanNvbicsICd2dWUnLCAncGhwJywgJ21kJywgJ2Jhc2gnLCAnZGlmZicsICdweXRob24nXSxcblx0ICB9LFxuXHRcblx0ZmVlZDoge1xuICAgICAgICBhdG9tOiB0cnVlLFxuICAgICAgICBqc29uOiB0cnVlLFxuICAgICAgICByc3M6IHRydWUsXG4gICAgICB9LFxuXHRcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBjb21wb25lbnRzOiBbXCJCYWRnZVwiLCBcIlZQQ2FyZFwiXSxcbiAgICB9LFxuXG4gICAgLy8gVGhlc2UgZmVhdHVyZXMgYXJlIGVuYWJsZWQgZm9yIGRlbW8sIG9ubHkgcHJlc2VydmUgZmVhdHVyZXMgeW91IG5lZWQgaGVyZVxuICAgIG1kRW5oYW5jZToge1xuICAgICAgYWxpZ246IHRydWUsXG4gICAgICBhdHRyczogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgY29tcG9uZW50OiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcbiAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuXHQgIGltZ01hcms6IHRydWUsXG4gICAgICBpbWdTaXplOiB0cnVlLFxuICAgICAgaW5jbHVkZTogdHJ1ZSxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBwbGFudHVtbDogdHJ1ZSxcbiAgICAgIHNwb2lsZXI6IHRydWUsXG4gICAgICBzdHlsaXplOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaGVyOiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIHN1cDogdHJ1ZSxcbiAgICAgIHRhYnM6IHRydWUsXG4gICAgICB0YXNrbGlzdDogdHJ1ZSxcbiAgICAgIHZQcmU6IHRydWUsXG4gICAgICBmbG93Y2hhcnQ6IHRydWUsXG5cdCAgbWF0aGpheDogdHJ1ZSxcblx0ICBtZXJtYWlkOiB0cnVlLFxuXHQgIHJldmVhbEpzOiB0cnVlLFxuXHQgIGZvb3Rub3RlOiB0cnVlLFxuICAgICAgLy8gaW5zdGFsbCBjaGFydC5qcyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGNoYXJ0OiB0cnVlLFxuXG4gICAgICAvLyBpbnNlcnQgY29tcG9uZW50IGVhc2lseVxuXG4gICAgICAvLyBpbnN0YWxsIGVjaGFydHMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBlY2hhcnRzOiB0cnVlLFxuXG4gICAgICAvLyBnZm0gcmVxdWlyZXMgbWF0aGpheC1mdWxsIHRvIHByb3ZpZGUgdGV4IHN1cHBvcnRcbiAgICAgIC8vIGdmbTogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBrYXRleCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGthdGV4OiB0cnVlLFxuXG4gICAgICAvLyBwbGF5Z3JvdW5kOiB7XG4gICAgICAvLyAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gaW5zdGFsbCBAdnVlL3JlcGwgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIHNhbmRwYWNrLXZ1ZTMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBzYW5kcGFjazogdHJ1ZSxcbiAgICB9LFxuXG4gICAgcHdhOiB0cnVlLFxuXHQvLyAgIHtcbiAgICAvLyAgIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXG4gICAgLy8gICBjYWNoZUhUTUw6IHRydWUsXG4gICAgLy8gICBjYWNoZUltYWdlOiB0cnVlLFxuICAgIC8vICAgYXBwZW5kQmFzZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGxlOiB7XG4gICAgLy8gICAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZ1wiLFxuICAgIC8vICAgICBzdGF0dXNCYXJDb2xvcjogXCJibGFja1wiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1zVGlsZToge1xuICAgIC8vICAgICBpbWFnZTogXCIvYXNzZXRzL2ljb24vbXMtaWNvbi0xNDQucG5nXCIsXG4gICAgLy8gICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtYW5pZmVzdDoge1xuICAgIC8vICAgICBpY29uczogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICAgIHNob3J0Y3V0czogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgc2hvcnRfbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICB1cmw6IFwiL2RlbW8vXCIsXG4gICAgLy8gICAgICAgICBpY29uczogW1xuICAgIC8vICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9ndWlkZS1tYXNrYWJsZS5wbmdcIixcbiAgICAvLyAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovR2l0SHViL2ppYW5nZTEyMzYuR2l0SHViLmlvL25vdGVzLy52dWVwcmVzcy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEdpdEh1YlxcXFxqaWFuZ2UxMjM2LkdpdEh1Yi5pb1xcXFxub3Rlc1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyXFxcXGVuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9HaXRIdWIvamlhbmdlMTIzNi5HaXRIdWIuaW8vbm90ZXMvLnZ1ZXByZXNzL25hdmJhci9lbi50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCBlbk5hdmJhciA9IG5hdmJhcihbXG4gIHsgdGV4dDogXCJIb21lXCIsIGxpbms6IFwiL1wiLCBpY29uOiBcImhvbWVcIn0sXG4gIHsgdGV4dDogXCJXb3JrXCIsIGxpbms6IFwiL3dvcmsvXCIsIGljb246XCJicmllZmNhc2VcIiB9LFxuICB7IHRleHQ6IFwiU3R1ZHlcIiwgbGluazogXCIvc3R1ZHkvXCIsIGljb246XCJib29rLW9wZW5cIn0sXG4gIHsgdGV4dDogXCJUZWNoXCIsIGxpbms6IFwiL3RlY2gvXCIsIGljb246XCJkZXNrdG9wXCJ9LFxuICB7IHRleHQ6IFwiRnVuXCIsIGxpbms6IFwiL2Z1bi9cIiwgaWNvbjpcImRpY2VcIn0sICBcbiAgeyB0ZXh0OiBcIlBob3RvXCIsIGxpbms6IFwiL3Bob3RvL1wiLCBpY29uOlwiY2FtZXJhXCJ9LFxuICB7IHRleHQ6IFwiRmluYW5jZVwiLCBsaW5rOiBcIi9maW5hbmNlL1wiLCBpY29uOlwiY2hhcnQtbGluZVwifSxcbiAgeyB0ZXh0OiBcIk90aGVyc1wiLCBsaW5rOiBcIi9vdGhlcnMvXCIsIGljb246XCJib2x0XCJ9LFxuICB7XG5cdHRleHQ6IFwiTWlycm9yXCIsXG5cdGljb246IFwiY3ViZVwiLFxuXHRjaGlsZHJlbjogW1xuXHRcdHsgdGV4dDogXCJDbG91ZGZsYXJlWWVzXCIsIGxpbms6IFwiaHR0cHM6Ly9zdG9jay5ob3N0bW9uaXQuY29tL0Nsb3VkRmxhcmVZZXNcIiAsaWNvbjpcImdpdGh1YlwifSxcblx0XHR7IHRleHQ6IFwiR2l0aHViIE1pcnJvclwiLCBsaW5rOiBcImh0dHA6Ly9saWIuenVvdGl5aS5jbi90b29sL2dpdGh1Yi5odG1sXCIgLGljb246XCJhcmNod2F5XCJ9LFxuXHRcdHsgXG5cdFx0XHR0ZXh0OlwiQmxvZyBNaXJyb3JcIixcblx0XHRcdGljb246XCJuZXR3b3JrXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiQ2xvdWRmbGFyZVwiLCBsaW5rOiBcImh0dHBzOi8vemVibG9nLnBhZ2VzLmRldi9cIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiTmV0ZmxpZnlcIiwgbGluazogXCJodHRwczovL3plYmxvZy5uZXRsaWZ5LmFwcC9cIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiVmVyY2VsXCIsIGxpbms6IFwiaHR0cDovL3plYmxvZy52ZXJjZWwuYXBwL1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJSZW5kZXJcIiwgbGluazogXCJodHRwczovL3plYmxvZy16eWQzLm9ucmVuZGVyLmNvbS9cIiB9LFx0XHRcblx0XHRcdF0sXG5cdFx0fSxcblx0XSxcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9HaXRIdWIvamlhbmdlMTIzNi5HaXRIdWIuaW8vbm90ZXMvLnZ1ZXByZXNzL25hdmJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcR2l0SHViXFxcXGppYW5nZTEyMzYuR2l0SHViLmlvXFxcXG5vdGVzXFxcXC52dWVwcmVzc1xcXFxuYXZiYXJcXFxcemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0dpdEh1Yi9qaWFuZ2UxMjM2LkdpdEh1Yi5pby9ub3Rlcy8udnVlcHJlc3MvbmF2YmFyL3poLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHpoTmF2YmFyID0gbmF2YmFyKFtcbiAgeyB0ZXh0OiBcIlx1NEUzQlx1OTg3NVwiLCBsaW5rOiBcIi9cIiwgaWNvbjogXCJob21lXCJ9LFxuICB7IHRleHQ6IFwiXHU1REU1XHU0RjVDXCIsIGxpbms6IFwiL3dvcmsvXCIsIGljb246XCJicmllZmNhc2VcIiB9LFxuICB7IHRleHQ6IFwiXHU1QjY2XHU0RTYwXCIsIGxpbms6IFwiL3N0dWR5L1wiLCBpY29uOlwiYm9vay1vcGVuXCJ9LFxuICB7IHRleHQ6IFwiXHU4QkExXHU3Qjk3XHU2NzNBXCIsIGxpbms6IFwiL3RlY2gvXCIsIGljb246XCJkZXNrdG9wXCJ9LFxuICB7IHRleHQ6IFwiXHU1QTMxXHU0RTUwXCIsIGxpbms6IFwiL2Z1bi9cIiwgaWNvbjpcImRpY2VcIn0sICBcbiAgeyB0ZXh0OiBcIlx1NjQ0NFx1NUY3MVwiLCBsaW5rOiBcIi9waG90by9cIiwgaWNvbjpcImNhbWVyYVwifSxcbiAgeyB0ZXh0OiBcIlx1NzQwNlx1OEQyMlwiLCBsaW5rOiBcIi9maW5hbmNlL1wiLCBpY29uOlwiY2hhcnQtbGluZVwifSxcbiAgeyB0ZXh0OiBcIlx1NTE3Nlx1NUI4M1wiLCBsaW5rOiBcIi9vdGhlcnMvXCIsIGljb246XCJib2x0XCJ9LFxuICB7XG5cdHRleHQ6IFwiXHU5NTVDXHU1MENGXCIsXG5cdGljb246IFwiY3ViZVwiLFxuXHRjaGlsZHJlbjogW1xuXHRcdHsgdGV4dDogXCJDbG91ZGZsYXJlWWVzXCIsIGxpbms6IFwiaHR0cHM6Ly9zdG9jay5ob3N0bW9uaXQuY29tL0Nsb3VkRmxhcmVZZXNcIiAsaWNvbjpcImdpdGh1YlwifSxcblx0XHR7IHRleHQ6IFwiR2l0aHViXHU5NTVDXHU1MENGXCIsIGxpbms6IFwiaHR0cDovL2xpYi56dW90aXlpLmNuL3Rvb2wvZ2l0aHViLmh0bWxcIiAsaWNvbjpcImFyY2h3YXlcIn0sXG5cdFx0eyBcblx0XHRcdHRleHQ6XCJcdTY3MkNcdTdBRDlcdTk1NUNcdTUwQ0ZcIixcblx0XHRcdGljb246XCJuZXR3b3JrXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiQ2xvdWRmbGFyZVwiLCBsaW5rOiBcImh0dHBzOi8vemVibG9nLnBhZ2VzLmRldi9cIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiTmV0ZmxpZnlcIiwgbGluazogXCJodHRwczovL3plYmxvZy5uZXRsaWZ5LmFwcC9cIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiVmVyY2VsXCIsIGxpbms6IFwiaHR0cDovL3plYmxvZy52ZXJjZWwuYXBwL1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJSZW5kZXJcIiwgbGluazogXCJodHRwczovL3plYmxvZy16eWQzLm9ucmVuZGVyLmNvbS9cIiB9LFx0XHRcblx0XHRcdF0sXG5cdFx0fSxcblx0XSxcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9HaXRIdWIvamlhbmdlMTIzNi5HaXRIdWIuaW8vbm90ZXMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEdpdEh1YlxcXFxqaWFuZ2UxMjM2LkdpdEh1Yi5pb1xcXFxub3Rlc1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxlbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovR2l0SHViL2ppYW5nZTEyMzYuR2l0SHViLmlvL25vdGVzLy52dWVwcmVzcy9zaWRlYmFyL2VuLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCBlblNpZGViYXIgPSBzaWRlYmFyKHtcbiAgXCIvZW4vXCI6IFtcblx0XCJcIixcbiAgXSxcbiAgXCJhYm91dC9cIjogXCJzdHJ1Y3R1cmVcIiwgIFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L0dpdEh1Yi9qaWFuZ2UxMjM2LkdpdEh1Yi5pby9ub3Rlcy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcR2l0SHViXFxcXGppYW5nZTEyMzYuR2l0SHViLmlvXFxcXG5vdGVzXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXHpoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9HaXRIdWIvamlhbmdlMTIzNi5HaXRIdWIuaW8vbm90ZXMvLnZ1ZXByZXNzL3NpZGViYXIvemgudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHpoU2lkZWJhciA9IHNpZGViYXIoe1xuICBcIi9cIjogW1xuICAgIFwiXCIsXG4gIF0sXG4gIFwiL2ZpbmFuY2UvXCI6IFwic3RydWN0dXJlXCIsXG4gIFwiL2Z1bi9cIjogXCJzdHJ1Y3R1cmVcIixcbiAgXCIvb3RoZXJzL1wiOiBcInN0cnVjdHVyZVwiLFxuICBcIi9waG90by9cIjogXCJzdHJ1Y3R1cmVcIixcbiAgXCIvc3R1ZHkvXCI6IFwic3RydWN0dXJlXCIsXG4gIFwiL3RlY2gvXCI6IFwic3RydWN0dXJlXCIsXG4gIFwiL3dvcmsvXCI6IFwic3RydWN0dXJlXCIsXG4gIFwiL2Fib3V0L1wiOiBcInN0cnVjdHVyZVwiLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdULFNBQVMsd0JBQXdCO0FBQ3pWLFNBQVMsd0JBQXdCOzs7QUNEcVIsU0FBUyxpQkFBaUI7OztBQ0FWLFNBQVMsY0FBYztBQUV0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Q0UsU0FBUztBQUFBLFVBQ1QsVUFBVSxDQUFDLEVBQUUsSUFBSSxNQUFNO0FBQ3JCLGdCQUFJLFFBQVE7QUFDVixxQkFBTztBQUFBLGdCQUNMLEtBQUs7QUFBQSxnQkFDTCxPQUFPLEVBQUUsTUFBTSxNQUFNO0FBQUEsZ0JBQ3JCLFNBQVM7QUFBQSxjQUNYO0FBQUEsVUFDSjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDZCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXdCVDtBQUFBLElBRUEsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUF3RFA7QUFDRixDQUFDOzs7QURyUkQsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUE7QUFBQSxJQUVKO0FBQUEsTUFDRTtBQUFBLE1BQVMsQ0FBQztBQUFBLE1BQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFTRjtBQUFBLEVBQ0g7QUFBQSxFQUVDLFNBQVM7QUFBQSxJQUNQLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUVBO0FBQUEsRUFFQSxTQUFTLENBQUMsaUJBQWlCLENBQUM7QUFBQTtBQUFBLEVBRzVCLGdCQUFnQjtBQUNsQixDQUFDOyIsCiAgIm5hbWVzIjogWyJuYXZiYXIiLCAibmF2YmFyIiwgInNpZGViYXIiLCAic2lkZWJhciJdCn0K

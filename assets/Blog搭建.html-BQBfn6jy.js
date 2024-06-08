import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,f as s,d as e,o as a}from"./app-DqlpKXpH.js";const n={},l=e('<h1 id="硬链接" tabindex="-1"><a class="header-anchor" href="#硬链接"><span>硬链接</span></a></h1><p><strong>Linux</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>mount --bind /data/home/zhou/&#39;Nutstore Files&#39;/我的坚果云/工作 /home/zhou/Documents/Blog/jiange1236.GitHub.io/notes/work</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',3),o=e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>/data/home/zhou/Nutstore\\040Files/我的坚果云/工作 /home/zhou/Documents/Blog/jiange1236.GitHub.io/notes/work none defaults,bind 0 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Windows</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>mklink /J F:\\Blog\\jiange1236.GitHub.io\\notes\\work F:\\我的坚果云\\工作</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm"><span>PNPM</span></a></h1><blockquote><p>点击左下角开始，找到Windows PowerShell，点击右键找到更多，找到以管理员身份运行</p></blockquote><blockquote><p>输入命令：set-ExecutionPolicy RemoteSigned 然后回车 选择：输入A选择全是，或者输入Y选择是 都可以的 接着重新启动然后去运行就可以了</p></blockquote><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1><h2 id="清除github提交历史记录" tabindex="-1"><a class="header-anchor" href="#清除github提交历史记录"><span>清除Github提交历史记录</span></a></h2><p>1.将Repository使用git clone到本地，在终端使用&quot;git log&quot;查看提交记录。Github会为每一次commit操作生成哈希值，用这个哈希值来记录你的提交记录。</p><p>2.定位你误操作的那一个版本，我上传包涵敏感信息的操作是&quot;0f6f7b72667830e407880271e6ebc24abba232c5&quot;。我们取它之前的版本，就是哈希值为&quot;8628628991470b26e698d98e986a54fa6b5f4352&quot;的那一版本。</p><p>3.使用&quot;git reset —hard 8628628991470b26e698d98e986a54fa6b5f4352&quot;操作，将历史记录重置到这个版本。</p><p>4.使用&quot;git push origin HEAD —force&quot;，PUSH到github。</p><h2 id="代理" tabindex="-1"><a class="header-anchor" href="#代理"><span>代理</span></a></h2><p><strong>只对Github代理（推荐）</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#使用socks5代理（推荐）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http.https://github.com.proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> socks5://127.0.0.1:20170</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#使用http代理（不推荐）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http.https://github.com.proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://127.0.0.1:20170</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function h(r,d){return a(),t("div",null,[l,s(" vi /etc/fstab "),o])}const g=i(n,[["render",h],["__file","Blog搭建.html.vue"]]),k=JSON.parse('{"path":"/tech/Blog%E6%90%AD%E5%BB%BA.html","title":"硬链接","lang":"zh-CN","frontmatter":{"description":"硬链接 Linux Windows PNPM 点击左下角开始，找到Windows PowerShell，点击右键找到更多，找到以管理员身份运行 输入命令：set-ExecutionPolicy RemoteSigned 然后回车 选择：输入A选择全是，或者输入Y选择是 都可以的 接着重新启动然后去运行就可以了 Git 清除Github提交历史记录 1....","head":[["meta",{"property":"og:url","content":"https://zecdn.top/tech/Blog%E6%90%AD%E5%BB%BA.html"}],["meta",{"property":"og:site_name","content":"Zeblog"}],["meta",{"property":"og:title","content":"硬链接"}],["meta",{"property":"og:description","content":"硬链接 Linux Windows PNPM 点击左下角开始，找到Windows PowerShell，点击右键找到更多，找到以管理员身份运行 输入命令：set-ExecutionPolicy RemoteSigned 然后回车 选择：输入A选择全是，或者输入Y选择是 都可以的 接着重新启动然后去运行就可以了 Git 清除Github提交历史记录 1...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-08T15:12:54.000Z"}],["meta",{"property":"article:author","content":"Zine⁶"}],["meta",{"property":"article:modified_time","content":"2024-06-08T15:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"硬链接\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-08T15:12:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zine⁶\\",\\"url\\":\\"https://zecdn.top\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://zecdn.top/atom.xml","title":"Zeblog Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://zecdn.top/feed.json","title":"Zeblog JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://zecdn.top/rss.xml","title":"Zeblog RSS Feed"}]],"date":"2022-05-15T02:33:02.000Z"},"headers":[{"level":2,"title":"清除Github提交历史记录","slug":"清除github提交历史记录","link":"#清除github提交历史记录","children":[]},{"level":2,"title":"代理","slug":"代理","link":"#代理","children":[]}],"git":{"createdTime":1652581982000,"updatedTime":1717859574000,"contributors":[{"name":"jiange1236","email":"183465355@qq.com","commits":3},{"name":"周子健","email":"183465355@qq.com","commits":3}]},"readingTime":{"minutes":1.04,"words":313},"filePathRelative":"tech/Blog搭建.md","localizedDate":"2022年5月15日","excerpt":"","autoDesc":true}');export{g as comp,k as data};

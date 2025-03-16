import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e,f as a,o as n}from"./app-DuyuJ6on.js";const t={};function l(p,i){return n(),e("div",null,i[0]||(i[0]=[a(`<h1 id="🌱-appimage-应用标准化类安装指南" tabindex="-1"><a class="header-anchor" href="#🌱-appimage-应用标准化类安装指南"><span>🌱 AppImage 应用标准化类安装指南</span></a></h1><p><strong>让绿色软件拥有安装版体验 | 支持一键更新 | 优雅图标管理</strong></p><hr><h3 id="📂-智能目录架构-适配所有应用" tabindex="-1"><a class="header-anchor" href="#📂-智能目录架构-适配所有应用"><span>📂 智能目录架构（适配所有应用）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 为每个应用创建专属空间</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/Applications/{AppName}/app</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/Applications/{AppName}/icons</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✅ <strong>推荐结构</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>~/Applications/</span></span>
<span class="line"><span>└─ MyApp/</span></span>
<span class="line"><span>   ├─ app/            # 存放AppImage主程序</span></span>
<span class="line"><span>   └─ icons/          # 存放专属图标集</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="🚩-关键操作流程" tabindex="-1"><a class="header-anchor" href="#🚩-关键操作流程"><span>🚩 关键操作流程</span></a></h3><ol><li><strong>右键</strong><br> 在下载目录（就是你的appimage的初始目录）处 ➔ 右键 ➔ &quot;在终端中打开&quot;</li><li><strong>标准化重命名</strong>（✨ 更新无忧的关键）</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 原始文件示例：MyApp-2.3.4-x86_64.AppImage</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 原始文件名.AppImage</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/Applications/MyApp/app/MyApp-latest.AppImage</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#我的个人文件示例：</span></span>
<span class="line"><span>mv Cherry-Studio-0.9.21-x86_64.AppImage ~/Applications/MyApp/app/Cherry-Studio.AppImage</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>💡 <strong>命名哲学</strong>：<br><code>-latest</code> 后缀表示始终使用最新版本，后续更新只需覆盖文件</p><ol start="3"><li><strong>图标迁移计划（图标如何找和下载？）图标下载方法见评论区</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 下载的图标文件.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/Applications/MyApp/icons/</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 支持png/ico/svg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h3 id="🔐-一键授权仪式" tabindex="-1"><a class="header-anchor" href="#🔐-一键授权仪式"><span>🔐 一键授权仪式</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/Applications/MyApp/app/</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.AppImage</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>✅ 赋予所有AppImage文件执行权限</p><hr><h3 id="🎨-创建桌面门户-desktop" tabindex="-1"><a class="header-anchor" href="#🎨-创建桌面门户-desktop"><span>🎨 创建桌面门户 (.desktop)</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nano</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.local/share/applications/MyApp.desktop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>填入星辰代码</strong>：</p><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">[Desktop Entry]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">我的应用</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Exec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">/home/你的用户名/Applications/MyApp/app/MyApp-latest.AppImage</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Icon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">/home/你的用户名/Applications/MyApp/icons/下载的图标文件.ico</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Terminal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">Application</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Categories</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">Development</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🛠️ <strong>修改指南</strong>：</p><ul><li>双击替换 <code>你的用户名</code></li><li><code>Name</code> 显示名称可自定义</li><li>图标路径指向实际文件，将下载的图标文件设置成你指定的（支持多格式）</li></ul><hr><h3 id="⚡-系统唤醒指令" tabindex="-1"><a class="header-anchor" href="#⚡-系统唤醒指令"><span>⚡ 系统唤醒指令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">update-desktop-database</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.local/share/applications</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>🌌 该命令让系统菜单立即识别新应用</p><hr><h3 id="🧪-效果验证三部曲" tabindex="-1"><a class="header-anchor" href="#🧪-效果验证三部曲"><span>🧪 效果验证三部曲</span></a></h3><ol><li><strong>搜索启动</strong>：⊞ Win键 ➔ 查看应用是否在启动器中正常显示</li><li><strong>图标检查</strong>：确认任务栏显示正确图标</li><li><strong>路径直达</strong>：文件管理器输入：<br><code>~/Applications/MyApp</code> （自动补全路径）</li></ol><hr><h3 id="🔄-无缝更新方案" tabindex="-1"><a class="header-anchor" href="#🔄-无缝更新方案"><span>🔄 无缝更新方案</span></a></h3><ol><li>下载新版AppImage文件</li><li>执行魔法命令：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 新版本文件.AppImage</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/Applications/MyApp/app/MyApp-latest.AppImage</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>覆盖时系统会提示，选择&quot;替换&quot;</li></ol><hr><h3 id="🚨-常见问题应急包" tabindex="-1"><a class="header-anchor" href="#🚨-常见问题应急包"><span>🚨 常见问题应急包</span></a></h3><table><thead><tr><th>症状</th><th>处方</th></tr></thead><tbody><tr><td>❗ 图标不显示</td><td>检查：①文件扩展名 ②路径层级 ③图标尺寸建议 128x128</td></tr><tr><td>⚠️ 无法运行</td><td>终端执行：<code>~/Applications/MyApp/app/MyApp-latest.AppImage</code> 查看报错</td></tr><tr><td>🔄 更新异常</td><td>确认旧版本已完全退出后再覆盖文件</td></tr></tbody></table><hr><h3 id="🌟-高级技巧" tabindex="-1"><a class="header-anchor" href="#🌟-高级技巧"><span>🌟 高级技巧</span></a></h3><ul><li><strong>多版本共存</strong>：创建 <code>MyApp-v2</code> 目录管理旧版本</li><li><strong>数据隔离</strong>：在app目录创建 <code>.config</code> 文件夹存放用户数据</li><li><strong>全局菜单</strong>：使用 <code>menulibre</code> 工具编辑高级参数</li></ul><hr><p>通过本方案，您将获得：<br> ✅ 清爽的版本管理 ✅ 优雅的图标系统 ✅ 无缝升级体验<br> ✅ 系统级整合度 ✅ 自由扩展能力</p><h1 id="🌐-一键下载网站默认图标的极简指南-🌐" tabindex="-1"><a class="header-anchor" href="#🌐-一键下载网站默认图标的极简指南-🌐"><span>🌐 一键下载网站默认图标的极简指南 🌐</span></a></h1><hr><h4 id="步骤-1-获取目标网站域名" tabindex="-1"><a class="header-anchor" href="#步骤-1-获取目标网站域名"><span>步骤 1：获取目标网站域名</span></a></h4><p>打开浏览器，复制官网地址（如 <code>https://google.com</code>），<strong>仅保留域名部分</strong>：<br> ✅ 正确格式：<code>google.com</code><br> ❌ 无需保留 <code>https://</code> 或路径参数</p><hr><h4 id="步骤-2-构造默认图标链接" tabindex="-1"><a class="header-anchor" href="#步骤-2-构造默认图标链接"><span>步骤 2：构造默认图标链接</span></a></h4><p>在域名后直接添加 <strong><code>/favicon.ico</code></strong>，生成下载链接：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>https://google.com/favicon.ico</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>📌 直接粘贴到浏览器地址栏访问</p><hr><h4 id="步骤-3-下载图标" tabindex="-1"><a class="header-anchor" href="#步骤-3-下载图标"><span>步骤 3：下载图标</span></a></h4><ul><li>若显示图标：<strong>右键点击</strong> → <strong>“另存为”</strong>（支持 <code>.ico</code> 或 <code>.png</code> 格式）</li><li>若显示 404 错误：尝试以下备选方案 ⬇️</li></ul><h4 id="🔍-备选方案-使用第三方工具-无需代码" tabindex="-1"><a class="header-anchor" href="#🔍-备选方案-使用第三方工具-无需代码"><span>🔍 备选方案：使用第三方工具（无需代码）</span></a></h4><p><strong>1. 选择在线工具</strong><br> 推荐以下免安装工具（任选其一）：</p><ul><li><strong>图标提取</strong>：<a href="https://gonglue.qinggl.com/app/img/icon.jsp" target="_blank" rel="noopener noreferrer">网页图标(favicon.ico)在线抓取工具 - 轻略应用</a></li><li><strong>站内图标抓取</strong>：<a href="https://www.zhanid.com/tool/favicon-fetch.html" target="_blank" rel="noopener noreferrer">https://www.zhanid.com/tool/favicon-fetch.html</a></li><li><strong>UU工具图标库</strong>：<a href="https://uutool.cn/web-icon/" target="_blank" rel="noopener noreferrer">在线网站图标读取下载工具 - UU在线工具</a></li></ul>`,62)]))}const d=s(t,[["render",l],["__file","AppImage 应用标准化类安装指南.html.vue"]]),o=JSON.parse('{"path":"/tech/AppImage%20%E5%BA%94%E7%94%A8%E6%A0%87%E5%87%86%E5%8C%96%E7%B1%BB%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97.html","title":"🌱 AppImage 应用标准化类安装指南","lang":"zh-CN","frontmatter":{"date":"2025-03-16T00:00:00.000Z","description":"🌱 AppImage 应用标准化类安装指南 让绿色软件拥有安装版体验 | 支持一键更新 | 优雅图标管理 📂 智能目录架构（适配所有应用） ✅ 推荐结构 🚩 关键操作流程 右键 在下载目录（就是你的appimage的初始目录）处 ➔ 右键 ➔ \\"在终端中打开\\" 标准化重命名（✨ 更新无忧的关键） 例子： 💡 命名哲学： -latest 后缀表示...","head":[["meta",{"property":"og:url","content":"https://jiange1236.github.io/tech/AppImage%20%E5%BA%94%E7%94%A8%E6%A0%87%E5%87%86%E5%8C%96%E7%B1%BB%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97.html"}],["meta",{"property":"og:site_name","content":"Zeblog"}],["meta",{"property":"og:title","content":"🌱 AppImage 应用标准化类安装指南"}],["meta",{"property":"og:description","content":"🌱 AppImage 应用标准化类安装指南 让绿色软件拥有安装版体验 | 支持一键更新 | 优雅图标管理 📂 智能目录架构（适配所有应用） ✅ 推荐结构 🚩 关键操作流程 右键 在下载目录（就是你的appimage的初始目录）处 ➔ 右键 ➔ \\"在终端中打开\\" 标准化重命名（✨ 更新无忧的关键） 例子： 💡 命名哲学： -latest 后缀表示..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-16T13:10:33.000Z"}],["meta",{"property":"article:published_time","content":"2025-03-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-16T13:10:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🌱 AppImage 应用标准化类安装指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-16T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-16T13:10:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zine⁶\\",\\"url\\":\\"https://zecdn.top\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://jiange1236.github.io/atom.xml","title":"Zeblog Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://jiange1236.github.io/feed.json","title":"Zeblog JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://jiange1236.github.io/rss.xml","title":"Zeblog RSS Feed"}]]},"git":{"createdTime":1742128842000,"updatedTime":1742130633000,"contributors":[{"name":"周子健","username":"周子健","email":"1384621+jiange1236@users.noreply.github.com","commits":2,"url":"https://github.com/周子健"}]},"readingTime":{"minutes":3.02,"words":905},"filePathRelative":"tech/AppImage 应用标准化类安装指南.md","localizedDate":"2025年3月16日","excerpt":"","autoDesc":true}');export{d as comp,o as data};

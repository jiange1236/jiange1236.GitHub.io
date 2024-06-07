import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-C7nsaC1x.js";const i={},l=e(`<p>目前还是有许多人喜欢设置DNS，虽然会浪费一些转发性能，但如果明白其中的链路关系，合理设置后，还是能起到不错的效果的。同时也把正确的设置方式告诉大家。</p><p>此教程基于当前路由是主路由，如果是旁路由虽差不多，但有一些差异，需要格外注意。</p><p>同时请注意，删除你电脑，手机上的DNS（不要设置任何DNS）</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><p>建议小白用户使用 Clash 更稳定且方便 此教程仅针对有特殊需求的用户</p><h2 id="涉及到的组件" tabindex="-1"><a class="header-anchor" href="#涉及到的组件"><span>涉及到的组件</span></a></h2><ul><li>Passwall</li><li>AdGuard Home（可选）</li><li>Dnsmasq （无需进行任何设置）</li><li>SmartDNS （分流+主DNS服务器）</li></ul><h2 id="adguard-home-可选" tabindex="-1"><a class="header-anchor" href="#adguard-home-可选"><span>AdGuard Home（可选）</span></a></h2><p>主要是起到记录的作用，对需要查看记录的同学有帮助，至于DNS广告屏蔽，虽然有用但会误伤，慎重选择。 同时由于记录文件较大，请一定要注意<code>把记录时间改小，或者设置到有足够空间的目录中，否则会导致时间久了将磁盘撑满</code></p><ul><li>配置上游DNS为127.0.0.1:6053</li><li>设置重定向53端口到AdGuardHome，如果使用了lean大佬的固件，请在防火墙，自定义规则中删除添加的两条53端口重定向规则（大部分人都使用了lean的固件）</li><li>DNS缓存大小 留空</li></ul><p>注意：设置了重定向后，所有DNS结果都将应答非权威记录，如果不了解DNS协议请无视，这条并不会影响什么。</p><h2 id="smartdns" tabindex="-1"><a class="header-anchor" href="#smartdns"><span>SmartDNS</span></a></h2><p>主要用于分流和DNS查询，国外走 Cloudflare DNS ove TLS/HTTPS ，国内延迟优先（但可能影响P2P下载，实测实际还好）。</p><ul><li><p>启用第一组服务器，选择作为dnsmasq上游，其余默认配置即可。</p></li><li><p>启用第二组服务器，端口7913，跳过测速，跳过Nameserver规则（非常重要，否则会死循环），跳过双栈优选，跳过cache，其余设置保持默认。</p></li><li><p>配置上游服务器，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>部分设置要填写后点编辑才能看到</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>。</p><ul><li>国内上游填写你的运营商，额外填写一些国内常用的，例如阿里云，DNSPod等等，可以参考文末的配置，分组信息填写cn。</li><li>国外上游填写1.1.1.1端口853，协议填写tls，分组信息填写passwall，额外的服务参数填写 -exclude-default-group</li></ul></li></ul><h2 id="passwall" tabindex="-1"><a class="header-anchor" href="#passwall"><span>Passwall</span></a></h2><ul><li>DNS分流 smartdns</li><li>国内分组名 cn</li><li>过滤模式 通过UDP请求DNS 127.0.0.1:7913</li></ul><h2 id="dnsmasq" tabindex="-1"><a class="header-anchor" href="#dnsmasq"><span>Dnsmasq</span></a></h2><p>无需任何设置，如果有设置请改回，除了上游服务器是127.0.0.1:6053。</p><p>防火墙</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>iptables -t nat -A PREROUTING -p udp --dport 53 -j REDIRECT --to-ports 53</span></span>
<span class="line"><span>iptables -t nat -A PREROUTING -p tcp --dport 53 -j REDIRECT --to-ports 53</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些配置" tabindex="-1"><a class="header-anchor" href="#一些配置"><span>一些配置</span></a></h2><p>smartdns 部分直接 vim 编辑 /etc/config/smartdns 照抄即可，无需手动设置，配置完记得界面上点击保存应用，或者uci命令刷新配置，我里面有杭州电信的DNS服务器，不是杭州的记得自己改掉，否则可能有负面效果。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>config smartdns</span></span>
<span class="line"><span>	option enabled &#39;1&#39;</span></span>
<span class="line"><span>	option server_name &#39;smartdns&#39;</span></span>
<span class="line"><span>	option port &#39;6053&#39;</span></span>
<span class="line"><span>	option auto_set_dnsmasq &#39;1&#39;</span></span>
<span class="line"><span>	option tcp_server &#39;1&#39;</span></span>
<span class="line"><span>	option ipv6_server &#39;1&#39;</span></span>
<span class="line"><span>	option bind_device &#39;1&#39;</span></span>
<span class="line"><span>	option dualstack_ip_selection &#39;1&#39;</span></span>
<span class="line"><span>	option serve_expired &#39;1&#39;</span></span>
<span class="line"><span>	option cache_persist &#39;1&#39;</span></span>
<span class="line"><span>	option resolve_local_hostnames &#39;1&#39;</span></span>
<span class="line"><span>	option force_https_soa &#39;1&#39;</span></span>
<span class="line"><span>	option rr_ttl_min &#39;600&#39;</span></span>
<span class="line"><span>	option seconddns_port &#39;7913&#39;</span></span>
<span class="line"><span>	option seconddns_tcp_server &#39;1&#39;</span></span>
<span class="line"><span>	option seconddns_enabled &#39;1&#39;</span></span>
<span class="line"><span>	option seconddns_server_group &#39;passwall&#39;</span></span>
<span class="line"><span>	option seconddns_no_speed_check &#39;1&#39;</span></span>
<span class="line"><span>	option seconddns_no_rule_nameserver &#39;1&#39;</span></span>
<span class="line"><span>	option seconddns_no_dualstack_selection &#39;1&#39;</span></span>
<span class="line"><span>	option seconddns_no_cache &#39;1&#39;</span></span>
<span class="line"><span>	option old_port &#39;6053&#39;</span></span>
<span class="line"><span>	option old_enabled &#39;1&#39;</span></span>
<span class="line"><span>	option old_auto_set_dnsmasq &#39;1&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>config domain-rule</span></span>
<span class="line"><span></span></span>
<span class="line"><span>config server</span></span>
<span class="line"><span>	option enabled &#39;1&#39;</span></span>
<span class="line"><span>	option name &#39;cnnic&#39;</span></span>
<span class="line"><span>	option ip &#39;1.2.4.8&#39;</span></span>
<span class="line"><span>	option type &#39;udp&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>config server</span></span>
<span class="line"><span>	option enabled &#39;1&#39;</span></span>
<span class="line"><span>	option name &#39;aliyun&#39;</span></span>
<span class="line"><span>	option ip &#39;223.5.5.5&#39;</span></span>
<span class="line"><span>	option type &#39;udp&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>config server</span></span>
<span class="line"><span>	option enabled &#39;1&#39;</span></span>
<span class="line"><span>	option name &#39;cm1&#39;</span></span>
<span class="line"><span>	option ip &#39;211.142.211.124&#39;</span></span>
<span class="line"><span>	option type &#39;udp&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>config server</span></span>
<span class="line"><span>	option enabled &#39;1&#39;</span></span>
<span class="line"><span>	option name &#39;cm2&#39;</span></span>
<span class="line"><span>	option ip &#39;111.8.14.18&#39;</span></span>
<span class="line"><span>	option type &#39;udp&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>config server</span></span>
<span class="line"><span>	option enabled &#39;1&#39;</span></span>
<span class="line"><span>	option name &#39;cloudflare&#39;</span></span>
<span class="line"><span>	option ip &#39;1.1.1.1&#39;</span></span>
<span class="line"><span>	option port &#39;853&#39;</span></span>
<span class="line"><span>	option type &#39;tls&#39;</span></span>
<span class="line"><span>	option server_group &#39;passwall&#39;</span></span>
<span class="line"><span>	option exclude_default_group &#39;1&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>config server</span></span>
<span class="line"><span>	option enabled &#39;1&#39;</span></span>
<span class="line"><span>	option name &#39;google&#39;</span></span>
<span class="line"><span>	option ip &#39;8.8.8.8&#39;</span></span>
<span class="line"><span>	option port &#39;853&#39;</span></span>
<span class="line"><span>	option type &#39;tls&#39;</span></span>
<span class="line"><span>	option server_group &#39;passwall&#39;</span></span>
<span class="line"><span>	option exclude_default_group &#39;1&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何验证" tabindex="-1"><a class="header-anchor" href="#如何验证"><span>如何验证？</span></a></h2><p>登录路由器 使用 dig 或者 nslookup 检查下各端口的DNS以及分流情况</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>nslookup www.taobao.com 127.0.0.1:7913 返回的是节点对应淘宝最快的IP</span></span>
<span class="line"><span>nslookup www.taobao.com 127.0.0.1:6053 返回的是国内最快的IP</span></span>
<span class="line"><span>nslookup www.taobao.com 应该是国内</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：如果手动查询规则列表内的域名，使用端口6053，然后匹配规则，转发给7913，然后被缓存住。（国外因为跳过测速，所以多个域名是正确的）</p>`,27),p=[l];function t(d,c){return a(),s("div",null,p)}const v=n(i,[["render",t],["__file","OpenWRT 分流DNS的设置.html.vue"]]),m=JSON.parse('{"path":"/tech/OpenWRT%20%E5%88%86%E6%B5%81DNS%E7%9A%84%E8%AE%BE%E7%BD%AE.html","title":"OpenWRT 分流DNS的设置","lang":"zh-CN","frontmatter":{"title":"OpenWRT 分流DNS的设置","date":"2022-09-18T00:00:00.000Z","category":["计算机"],"tag":["计算机","Openwrt"],"article":true,"source":"https://github.com/luckyyyyy/blog/issues/57#issue-1198960406","description":"目前还是有许多人喜欢设置DNS，虽然会浪费一些转发性能，但如果明白其中的链路关系，合理设置后，还是能起到不错的效果的。同时也把正确的设置方式告诉大家。 此教程基于当前路由是主路由，如果是旁路由虽差不多，但有一些差异，需要格外注意。 同时请注意，删除你电脑，手机上的DNS（不要设置任何DNS） 注意事项 建议小白用户使用 Clash 更稳定且方便 此教程...","head":[["meta",{"property":"og:url","content":"https://jiange1236.github.io/tech/OpenWRT%20%E5%88%86%E6%B5%81DNS%E7%9A%84%E8%AE%BE%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"Zeblog"}],["meta",{"property":"og:title","content":"OpenWRT 分流DNS的设置"}],["meta",{"property":"og:description","content":"目前还是有许多人喜欢设置DNS，虽然会浪费一些转发性能，但如果明白其中的链路关系，合理设置后，还是能起到不错的效果的。同时也把正确的设置方式告诉大家。 此教程基于当前路由是主路由，如果是旁路由虽差不多，但有一些差异，需要格外注意。 同时请注意，删除你电脑，手机上的DNS（不要设置任何DNS） 注意事项 建议小白用户使用 Clash 更稳定且方便 此教程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-07T05:03:50.000Z"}],["meta",{"property":"article:author","content":"Zine"}],["meta",{"property":"article:tag","content":"计算机"}],["meta",{"property":"article:tag","content":"Openwrt"}],["meta",{"property":"article:published_time","content":"2022-09-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-07T05:03:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OpenWRT 分流DNS的设置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-07T05:03:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zine\\",\\"url\\":\\"https://jiange1236.github.io\\"}]}"]]},"headers":[{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"涉及到的组件","slug":"涉及到的组件","link":"#涉及到的组件","children":[]},{"level":2,"title":"AdGuard Home（可选）","slug":"adguard-home-可选","link":"#adguard-home-可选","children":[]},{"level":2,"title":"SmartDNS","slug":"smartdns","link":"#smartdns","children":[]},{"level":2,"title":"Passwall","slug":"passwall","link":"#passwall","children":[]},{"level":2,"title":"Dnsmasq","slug":"dnsmasq","link":"#dnsmasq","children":[]},{"level":2,"title":"一些配置","slug":"一些配置","link":"#一些配置","children":[]},{"level":2,"title":"如何验证？","slug":"如何验证","link":"#如何验证","children":[]}],"git":{"createdTime":1663590121000,"updatedTime":1717736630000,"contributors":[{"name":"周子健","email":"183465355@qq.com","commits":3},{"name":"jiange1236","email":"183465355@qq.com","commits":2}]},"readingTime":{"minutes":3.65,"words":1096},"filePathRelative":"tech/OpenWRT 分流DNS的设置.md","localizedDate":"2022年9月18日","excerpt":"<p>目前还是有许多人喜欢设置DNS，虽然会浪费一些转发性能，但如果明白其中的链路关系，合理设置后，还是能起到不错的效果的。同时也把正确的设置方式告诉大家。</p>\\n<p>此教程基于当前路由是主路由，如果是旁路由虽差不多，但有一些差异，需要格外注意。</p>\\n<p>同时请注意，删除你电脑，手机上的DNS（不要设置任何DNS）</p>\\n<h2>注意事项</h2>\\n<p>建议小白用户使用 Clash 更稳定且方便 此教程仅针对有特殊需求的用户</p>\\n<h2>涉及到的组件</h2>\\n<ul>\\n<li>Passwall</li>\\n<li>AdGuard Home（可选）</li>\\n<li>Dnsmasq （无需进行任何设置）</li>\\n<li>SmartDNS （分流+主DNS服务器）</li>\\n</ul>","autoDesc":true}');export{v as comp,m as data};

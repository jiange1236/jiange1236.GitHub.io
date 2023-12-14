import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as s}from"./app-wwWqw9rR.js";const d={},l=s(`<p>目前还是有许多人喜欢设置DNS，虽然会浪费一些转发性能，但如果明白其中的链路关系，合理设置后，还是能起到不错的效果的。同时也把正确的设置方式告诉大家。</p><p>此教程基于当前路由是主路由，如果是旁路由虽差不多，但有一些差异，需要格外注意。</p><p>同时请注意，删除你电脑，手机上的DNS（不要设置任何DNS）</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><p>建议小白用户使用 Clash 更稳定且方便 此教程仅针对有特殊需求的用户</p><h2 id="涉及到的组件" tabindex="-1"><a class="header-anchor" href="#涉及到的组件" aria-hidden="true">#</a> 涉及到的组件</h2><ul><li>Passwall</li><li>AdGuard Home（可选）</li><li>Dnsmasq （无需进行任何设置）</li><li>SmartDNS （分流+主DNS服务器）</li></ul><h2 id="adguard-home-可选" tabindex="-1"><a class="header-anchor" href="#adguard-home-可选" aria-hidden="true">#</a> AdGuard Home（可选）</h2><p>主要是起到记录的作用，对需要查看记录的同学有帮助，至于DNS广告屏蔽，虽然有用但会误伤，慎重选择。 同时由于记录文件较大，请一定要注意<code>把记录时间改小，或者设置到有足够空间的目录中，否则会导致时间久了将磁盘撑满</code></p><ul><li>配置上游DNS为127.0.0.1</li><li>设置重定向53端口到AdGuardHome，如果使用了lean大佬的固件，请在防火墙，自定义规则中删除添加的两条53端口重定向规则（大部分人都使用了lean的固件）</li></ul><p>注意：设置了重定向后，所有DNS结果都将应答非权威记录，如果不了解DNS协议请无视，这条并不会影响什么。</p><h2 id="smartdns" tabindex="-1"><a class="header-anchor" href="#smartdns" aria-hidden="true">#</a> SmartDNS</h2><p>主要用于分流和DNS查询，国外走 Cloudflare DNS ove TLS/HTTPS ，国内延迟优先（但可能影响P2P下载，实测实际还好）。</p><ul><li><p>启用第一组服务器，选择作为dnsmasq上游，其余默认配置即可。</p></li><li><p>启用第二组服务器，端口7913，跳过测速，跳过Nameserver规则（非常重要，否则会死循环），跳过双栈优选，跳过cache，其余设置保持默认。</p></li><li><p>配置上游服务器，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>部分设置要填写后点编辑才能看到
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>。</p><ul><li>国内上游填写你的运营商，额外填写一些国内常用的，例如阿里云，DNSPod等等，可以参考文末的配置，分组信息填写cn。</li><li>国外上游填写1.1.1.1端口853，协议填写tls，分组信息填写passwall，额外的服务参数填写 -exclude-default-group</li></ul></li></ul><h2 id="passwall" tabindex="-1"><a class="header-anchor" href="#passwall" aria-hidden="true">#</a> Passwall</h2><ul><li>DNS分流 smartdns</li><li>国内分组名 cn</li><li>过滤模式 通过UDP请求DNS 127.0.0.1:7913</li></ul><h2 id="dnsmasq" tabindex="-1"><a class="header-anchor" href="#dnsmasq" aria-hidden="true">#</a> Dnsmasq</h2><p>无需任何设置，如果有设置请改回，除了上游服务器是127.0.0.1:6053。</p><h2 id="一些配置" tabindex="-1"><a class="header-anchor" href="#一些配置" aria-hidden="true">#</a> 一些配置</h2><p>smartdns 部分直接 vim 编辑 /etc/config/smartdns 照抄即可，无需手动设置，配置完记得界面上点击保存应用，或者uci命令刷新配置，我里面有杭州电信的DNS服务器，不是杭州的记得自己改掉，否则可能有负面效果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config smartdns
	option server_name &#39;smartdns&#39;
	option port &#39;6053&#39;
	option tcp_server &#39;1&#39;
	option seconddns_tcp_server &#39;1&#39;
	option coredump &#39;0&#39;
	option seconddns_server_group &#39;passwall&#39;
	option seconddns_no_speed_check &#39;1&#39;
	option seconddns_no_dualstack_selection &#39;1&#39;
	option prefetch_domain &#39;1&#39;
	option ipv6_server &#39;0&#39;
	option force_aaaa_soa &#39;1&#39;
	option dualstack_ip_selection &#39;1&#39;
	option serve_expired &#39;1&#39;
	option redirect &#39;dnsmasq-upstream&#39;
	option rr_ttl_min &#39;300&#39;
	option seconddns_port &#39;7913&#39;
	option seconddns_enabled &#39;1&#39;
	option seconddns_no_rule_nameserver &#39;1&#39;
	option seconddns_no_rule_addr &#39;0&#39;
	option seconddns_no_rule_soa &#39;0&#39;
	option seconddns_no_rule_ipset &#39;0&#39;
	option cache_size &#39;300&#39;
	option seconddns_no_cache &#39;1&#39;
	option enabled &#39;1&#39;
	list old_redirect &#39;dnsmasq-upstream&#39;
	list old_port &#39;6053&#39;
	list old_enabled &#39;1&#39;

config server
	option name &#39;aliyun&#39;
	option ip &#39;223.5.5.5&#39;
	option port &#39;53&#39;
	option type &#39;udp&#39;
	option blacklist_ip &#39;0&#39;
	option server_group &#39;cn&#39;
	option enabled &#39;1&#39;

config server
	option name &#39;114&#39;
	option ip &#39;114.114.114.114&#39;
	option port &#39;53&#39;
	option type &#39;udp&#39;
	option blacklist_ip &#39;0&#39;
	option server_group &#39;cn&#39;
	option enabled &#39;1&#39;

config server
	option enabled &#39;1&#39;
	option type &#39;udp&#39;
	option name &#39;电信&#39;
	option ip &#39;202.101.172.35&#39;
	option port &#39;53&#39;
	option server_group &#39;cn&#39;
	option blacklist_ip &#39;0&#39;

config server
	option enabled &#39;1&#39;
	option type &#39;udp&#39;
	option name &#39;电信&#39;
	option ip &#39;202.101.172.47&#39;
	option port &#39;53&#39;
	option server_group &#39;cn&#39;
	option blacklist_ip &#39;0&#39;

config server
	option type &#39;udp&#39;
	option port &#39;53&#39;
	option name &#39;DNSPod&#39;
	option ip &#39;119.29.29.29&#39;
	option blacklist_ip &#39;0&#39;
	option server_group &#39;cn&#39;
	option enabled &#39;1&#39;

config server
	option enabled &#39;1&#39;
	option name &#39;cloud&#39;
	option ip &#39;1.1.1.1&#39;
	option port &#39;853&#39;
	option type &#39;tls&#39;
	option server_group &#39;passwall&#39;
	option blacklist_ip &#39;0&#39;
	option addition_arg &#39; -exclude-default-group&#39;

config server
	option enabled &#39;1&#39;
	option type &#39;udp&#39;
	option name &#39;CNNIC SDNS&#39;
	option ip &#39;1.2.4.8&#39;
	option port &#39;53&#39;
	option server_group &#39;cn&#39;
	option blacklist_ip &#39;0&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何验证" tabindex="-1"><a class="header-anchor" href="#如何验证" aria-hidden="true">#</a> 如何验证？</h2><p>登录路由器 使用 dig 或者 nslookup 检查下各端口的DNS以及分流情况</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nslookup www.taobao.com 127.0.0.1:7913 返回的是节点对应淘宝最快的IP
nslookup www.taobao.com 127.0.0.1:6053 返回的是国内最快的IP
nslookup www.taobao.com 应该是国内
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：如果手动查询规则列表内的域名，使用端口6053，然后匹配规则，转发给7913，然后被缓存住。（国外因为跳过测速，所以多个域名是正确的）</p>`,25),a=[l];function t(o,r){return i(),e("div",null,a)}const p=n(d,[["render",t],["__file","OpenWRT 分流DNS的设置.html.vue"]]);export{p as default};

import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a as s}from"./app-DNA9lu2T.js";const d="/assets/image-20211218115620639-CtRxvqUn.png",t="/assets/image-20211218115655439-Cr1SOq_T.png",a="/assets/image-20211218114841912-8j2dqlCC.png",l="/assets/aed40a1d-18d8-4a85-b808-51ae3eca2ea0-DNUTHS3i.png",r="/assets/f246539a-9236-465b-941c-fc3d0284b97c-C36Z_6Kw.png",c="/assets/821eab95-9461-4cf4-91a7-b83add3a9ddf-sQRhxRVA.png",o="/assets/7ae57cb6-645a-4d6e-8b19-bb56bd16c0d9-ECyT4Q-U.png",p="/assets/e2f1bdb1-98a0-428e-9ac0-380e8a92bb13-BMFcnD89.png",u="/assets/553bbe27-b3ec-4c72-afe9-4e7707e2fb8b-Bk-bZx0H.png",v="/assets/966087b4-c53e-4848-a8a3-903ae43d64bb-BW5ZfWTc.png",m="/assets/1490e63c-e1c8-4aee-880d-5995fa6c38dc-CO34cg2-.png",b="/assets/c93a809b-b792-4b6f-9aec-ba6fb82a43ee-CKfuznTC.png",h="/assets/image-2021022400000004.13ea60fa-7YrarAjQ.png",g="/assets/image-2021022400000006.d94bda31-BgDsdnFU.png",f="/assets/image-2021022400000008.c70860e9-UgHiNq7w.png",x={},q=s(`<p>[toc]</p><h1 id="openwrt" tabindex="-1"><a class="header-anchor" href="#openwrt" aria-hidden="true">#</a> Openwrt</h1><h2 id="opkg" tabindex="-1"><a class="header-anchor" href="#opkg" aria-hidden="true">#</a> OPKG</h2><p>原版</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>src/gz openwrt_core https://dl.openwrt.ai/23.05/targets/mediatek/mt7622/5.15.147
src/gz openwrt_base https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/base
src/gz openwrt_packages https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/packages
src/gz openwrt_luci https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/luci
src/gz openwrt_routing https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/routing
src/gz openwrt_kiddin9 https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/kiddin9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找大文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find / -type f -size +5120b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD 定制软件包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>luci-app-wechatpush luci-app-smartdns luci-app-v2raya luci-app-watchcat tailscale v2ray-core v2raya smartdns watchcat ipset libipset13 iputils-arping jq bash libreadline8 ip-full ddns-scripts ddns-scripts-services ddns-scripts-aliyun bind-host bind-libs libatomic1 libuv1 openssl-util libopenssl-conf ddns-scripts-dnspod ddns-scripts-cloudflare
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>=======</p><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><p>198c2116c5109f2dc09ab42ad8eb0a95319b83d1</p></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote><h2 id="r2s" tabindex="-1"><a class="header-anchor" href="#r2s" aria-hidden="true">#</a> R2S</h2><p>https://github.com/fanck0605/openwrt-nanopi-r2s</p><p>https://github.com/fanck0605/friendlywrt-nanopi-r2s</p><p>https://github.com/klever1988/nanopi-openwrt</p><p>https://github.com/kiddin9/OpenWrt_x86-r2s-r4s</p><p>https://github.com/QiuSimons/YAOF</p><p>https://github.com/DHDAXCW/NanoPi-R2S</p><h3 id="smartdns-adguardhome-passwall" tabindex="-1"><a class="header-anchor" href="#smartdns-adguardhome-passwall" aria-hidden="true">#</a> SmartDNS+ADGuardHome+Passwall</h3><p><s>https://post.smzdm.com/p/a6dn5g8n/</s></p><p>首先固件要支持ipv6，这是前提，设置：wan=高级=获取ipv6自动，wan6=dhcp6客户端下面选项保持初始设置，lan=ipv6=混合模式=混合模式=有状态+无状态，dhcp/dns=高级=取消禁止解析ipv6，基本上就ok了</p><p><s>https://www.right.com.cn/forum/thread-4042833-1-1.html</s></p><p>https://www.right.com.cn/forum/thread-4034918-1-1.html</p><p>SmartDNS设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
config smartdns
	option enabled &#39;1&#39;
	option server_name &#39;smartdns&#39;
	option port &#39;53&#39;
	option auto_set_dnsmasq &#39;1&#39;
	option tcp_server &#39;1&#39;
	option ipv6_server &#39;1&#39;
	option bind_device &#39;1&#39;
	option dualstack_ip_selection &#39;1&#39;
	option serve_expired &#39;1&#39;
	option cache_persist &#39;1&#39;
	option resolve_local_hostnames &#39;1&#39;
	option force_https_soa &#39;0&#39;
	option rr_ttl_min &#39;30&#39;
	option seconddns_port &#39;7913&#39;
	option seconddns_tcp_server &#39;1&#39;
	option seconddns_enabled &#39;1&#39;
	option seconddns_server_group &#39;passwall&#39;
	option seconddns_no_speed_check &#39;1&#39;
	option seconddns_no_dualstack_selection &#39;1&#39;
	option seconddns_no_cache &#39;1&#39;
	option log_level &#39;error&#39;
	option rr_ttl_max &#39;3600&#39;
	option rr_ttl_reply_max &#39;3600&#39;
	option enable_auto_update &#39;1&#39;
	option auto_update_week_time &#39;0&#39;
	option auto_update_day_time &#39;5&#39;
	option tls_server &#39;0&#39;
	option doh_server &#39;0&#39;
	option log_output_mode &#39;file&#39;
	list hosts_files &#39;miTVhosts&#39;
	option prefetch_domain &#39;1&#39;
	option old_port &#39;53&#39;
	option old_enabled &#39;1&#39;
	option old_auto_set_dnsmasq &#39;1&#39;

config domain-rule
	option server_group &#39;passwall&#39;
	option speed_check_mode &#39;none&#39;
	option force_aaaa_soa &#39;1&#39;
	option forwarding_domain_set_file &#39;/etc/smartdns/domain-set/proxy-list.txt&#39;
	option ipset_name &#39;proxy-list&#39;

config server
	option enabled &#39;1&#39;
	option name &#39;cnnic&#39;
	option ip &#39;1.2.4.8&#39;
	option type &#39;udp&#39;

config server
	option enabled &#39;1&#39;
	option name &#39;aliyun&#39;
	option ip &#39;223.5.5.5&#39;
	option type &#39;udp&#39;

config server
	option enabled &#39;0&#39;
	option name &#39;cm1&#39;
	option ip &#39;211.142.211.124&#39;
	option type &#39;udp&#39;

config server
	option enabled &#39;1&#39;
	option name &#39;cm2&#39;
	option ip &#39;111.8.14.18&#39;
	option type &#39;udp&#39;

config server
	option enabled &#39;1&#39;
	option name &#39;cloudflare&#39;
	option ip &#39;1.1.1.1&#39;
	option port &#39;853&#39;
	option type &#39;tls&#39;
	option server_group &#39;passwall&#39;
	option exclude_default_group &#39;1&#39;

config server
	option enabled &#39;1&#39;
	option name &#39;google&#39;
	option ip &#39;8.8.8.8&#39;
	option port &#39;853&#39;
	option type &#39;tls&#39;
	option server_group &#39;passwall&#39;
	option exclude_default_group &#39;1&#39;

config server
	option enabled &#39;1&#39;
	option name &#39;google https&#39;
	option ip &#39;https://8.8.4.4/dns-query&#39;
	option type &#39;https&#39;
	option server_group &#39;passwall&#39;
	option exclude_default_group &#39;1&#39;

config server
	option enabled &#39;1&#39;
	option name &#39;DNSPod DoH&#39;
	option ip &#39;https://doh.pub/dns-query&#39;
	option type &#39;https&#39;

config server
	option enabled &#39;0&#39;
	option name &#39;AdGuard&#39;
	option ip &#39;d8a6cfde.d.adguard-dns.com&#39;
	option type &#39;tls&#39;

config server
	option enabled &#39;1&#39;
	option name &#39;AdGuard DNS&#39;
	option ip &#39;https://dns.adguard-dns.com/dns-query&#39;
	option type &#39;https&#39;

config server
	option enabled &#39;1&#39;
	option name &#39;Cloudflare Gateway&#39;
	option ip &#39;kg3lq779id.cloudflare-gateway.com&#39;
	option type &#39;tls&#39;

config client-rule
	option enabled &#39;0&#39;
	option dualstack_ip_selection &#39;1&#39;
	option force_https_soa &#39;1&#39;

config ip-rule

config server
	option enabled &#39;0&#39;
	option name &#39;cm1v6&#39;
	option ip &#39;2409:8050:2000:1000::1&#39;
	option type &#39;udp&#39;

config server
	option enabled &#39;0&#39;
	option name &#39;cm2v6&#39;
	option ip &#39;2409:8050:2000::1&#39;
	option type &#39;udp&#39;

config server
	option enabled &#39;0&#39;
	option name &#39;cu1&#39;
	option ip &#39;58.20.127.170&#39;
	option type &#39;udp&#39;

config server
	option enabled &#39;0&#39;
	option name &#39;cu2&#39;
	option ip &#39;58.20.127.238&#39;
	option type &#39;udp&#39;

config server
	option enabled &#39;0&#39;
	option name &#39;ct1&#39;
	option ip &#39;222.246.129.81&#39;
	option type &#39;udp&#39;

config server
	option enabled &#39;0&#39;
	option name &#39;ct2&#39;
	option ip &#39;59.51.78.210&#39;
	option type &#39;udp&#39;

config download-file
	option name &#39;cloudflare-ipv4&#39;
	option url &#39;https://www.cloudflare.com/ips-v4/#&#39;
	option type &#39;ip-set&#39;

config download-file
	option name &#39;cloudflare-ipv6&#39;
	option url &#39;https://www.cloudflare.com/ips-v6/#&#39;
	option type &#39;ip-set&#39;

config ip-rule-list
	option enabled &#39;0&#39;
	option name &#39;cloudflare-ipv4&#39;
	option ip_set_file &#39;/etc/smartdns/ip-set/cloudflare-ipv4&#39;
	list ip_alias &#39;104.17.104.119&#39;
	list ip_alias &#39;172.64.144.111&#39;

config ip-rule-list
	option enabled &#39;0&#39;
	option name &#39;cloudflare-ipv6&#39;
	option ip_set_file &#39;/etc/smartdns/ip-set/cloudflare-ipv6&#39;
	list ip_alias &#39;2606:4700:10:40f3:99a8:fb4a:a069:4ffe&#39;
	list ip_alias &#39;2606:4700:10:14e1:2442:6ff2:dca4:5e1a&#39;

config download-file
	option name &#39;miTVhosts&#39;
	option url &#39;https://mirror.ghproxy.com/https://raw.githubusercontent.com/liamliu108/miTVhosts/master/hosts&#39;
	option type &#39;other&#39;

config download-file
	option name &#39;reject-list.txt&#39;
	option url &#39;https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/v2ray-rules-dat/release/reject-list.txt&#39;
	option type &#39;list&#39;

config download-file
	option name &#39;direct-list.txt&#39;
	option url &#39;https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/v2ray-rules-dat/release/direct-list.txt&#39;
	option type &#39;list&#39;

config download-file
	option name &#39;proxy-list.txt&#39;
	option url &#39;https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/v2ray-rules-dat/release/proxy-list.txt&#39;
	option type &#39;list&#39;

config download-file
	option name &#39;gfw.txt&#39;
	option url &#39;https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/v2ray-rules-dat/release/gfw.txt&#39;
	option type &#39;list&#39;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分流设置" tabindex="-1"><a class="header-anchor" href="#分流设置" aria-hidden="true">#</a> 分流设置</h3><p>分流参考文章</p><p>https://github.com/felix-fly/v2ray-dnsmasq-dnscrypt?tab=readme-ov-file</p><p>https://github.com/pymumu/smartdns/issues/1022</p><p>https://zeeko.dev/2022/09/smartdns-with-v2ray-tproxy/</p><p>https://xtrojan.pro/bgfw/v2ray/v2ray-dns-streaming.html</p><p>一、基本设置</p><ol><li>下载页面设置需自动下载的要分流的域名列表文件（也可上传）。(格式为一行一个域名，需要分流的域名)</li><li>设置上游服务器，设置国外的DOT，DOH等服务器，并设置<code>服务器组</code>：比如oversea。可选勾选‘从默认组中排除’ 也可以设置一个上游服务器，通过代理走转发程序，设置<code>服务器组</code>用于专门分流查询，这样查询DNS的出口和数据出口一样，DNS结果的亲和度和更好。</li><li>域名规则-&gt;域名分流设置： <ul><li>设置<code>域名分组</code>，名称为第二步的名称：比如&#39;oversea&#39;</li><li>选择<code>跳过测速</code></li><li>选择<code>停用IPV6地址解析</code></li><li>选择<code>域名列表文件</code>，文件为第一步设置的自动下载的文件，此文件为需要分流的域名列表。</li><li>对于临时个别要分流的域名，可以在<code>域名列表</code>文本框中输入。</li></ul></li></ol><p>二、最简单的按域名的透明代理：</p><p>如果smartdns运行在主路由上，那么可以使用REDIRECT模式对TCP进行透明代理。下面举例对TCP进行透明转发，其中的[ipsetname]是IP集合的名称，比如可以设置<code>proxy-list</code>：</p><ol><li>shell命令，创建ipset集合 <code>ipset create proxy-list hash:net timeout 600</code></li><li>shell命令，iptable设置对应ipset集合中域名的TCP请求使用TPROXY重定向转发到本机2018的转发程序。 <code>iptables -t nat -I PREROUTING -p tcp -m set --match-set proxy-list dst -j REDIRECT --to-ports 2018</code></li><li>smartdns设置页面的<code>域名分流设置</code>-&gt;<code>ipset名称</code>设置为上述步骤中[ipsetname]的名称，比如<code>proxy-list</code></li><li>在主路由的2018端口，开启REDIRECT模式的转发程序。</li><li>应用smartdns设置。</li><li>结束。</li></ol><p>对于udp，nfttable也是类似的步骤，上述透明代理github上有现成的脚本，PW也有类似的能力，只要选择好转发模式，和设置好正确的ipset名称或nftset名称即可。</p><p>原理上，smartdns和转发软件的结合点，为ipset名称或nftset名称，那两个参数和转发软件匹配就可以做到按需转发。 dnsmasq也是类似的工作方式。</p><p><strong>删除规则</strong></p><p><code>iptables -t nat -D PREROUTING -p tcp -m set --match-set proxy-list dst -j REDIRECT --to-ports 2018</code></p><h3 id="geosite-geoip" tabindex="-1"><a class="header-anchor" href="#geosite-geoip" aria-hidden="true">#</a> GeoSite\\GeoIP</h3><p>geoip.dat 所有类别：https://github.com/Loyalsoldier/geoip/tree/release/text</p><p>原本 geosite.dat 类别：https://github.com/v2fly/domain-list-community/tree/master/data</p><h2 id="无线" tabindex="-1"><a class="header-anchor" href="#无线" aria-hidden="true">#</a> 无线</h2><p><img src="`+d+'" alt="image-20211218115620639"></p><p><img src="'+t+'" alt="image-20211218115655439"></p><h2 id="广告规则" tabindex="-1"><a class="header-anchor" href="#广告规则" aria-hidden="true">#</a> 广告规则</h2><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_English/filter.txt</p><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt</p><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt</p><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt</p><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt</p><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt</p><p>https://gitee.com/cjx82630/cjxlist/raw/master/cjx-annoyance.txt</p><p><s>https://gitee.com/xinggsf/Adblock-Rule/raw/master/rule.txt</s></p><p>https://gitee.com/xinggsf/Adblock-Rule/raw/master/mv.txt</p><p>https://gitee.com/halflife/list/raw/master/ad.txt</p><p>https://anti-ad.net/easylist.txt</p><p>miTVhosts</p><p>https://raw.githubusercontent.com/liamliu108/miTVhosts/master/hosts</p><h3 id="安卓" tabindex="-1"><a class="header-anchor" href="#安卓" aria-hidden="true">#</a> 安卓</h3><p>https://raw.githubusercontent.com/banbendalao/ADgk/master/ADgk.txt</p><p><img src="'+a+`" alt="image-20211218114841912"></p><h2 id="adguard-home" tabindex="-1"><a class="header-anchor" href="#adguard-home" aria-hidden="true">#</a> AdGuard Home</h2><p>最近128m的小闪存运行AdGuardHome几天后，空间就爆了，改成只记录一天的日志还是爆，后来发现即使设置成一天，AdGuardHome也不是覆写，而是把旧的日志文件重命名继续保存了。 所以用到了以下代码，自动删除旧的日志文件。直接计划任务里面添加以下代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>50 5 * * * [ -f /etc/AdGuardHome/data/querylog.json.1 ] &amp;&amp; rm /etc/AdGuardHome/data/querylog.json.1
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我的路由器AdGuardHome的日志是默认保存在/etc/AdGuardHome/data/目录中的querylog.json文件。如果你设置日志保存时间为3天，那么3天后AdGuardHome其实并不会把日志删除，而是把当前的querylog.json改成querylog.json.1，然后再生成新的querylog.json记录日志。 此代码就是，每天的5点50分，检测是否存在querylog.json.1，存在就会删除它。这样在闪存空间有限的情况下，得以保留AdGuardHome的日志记录功能。</p><p>=======</p><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><p>198c2116c5109f2dc09ab42ad8eb0a95319b83d1</p></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[/csdn.net/]quic://dns.alidns.com
[/dbankcloud.cn/dbankcloud.ru/dbankcloud.com/]quic://dns.alidns.com
[/quark.cn/]quic://dns.alidns.com
[/bytefcdn.com/]quic://dns.alidns.com
[/tencent-cloud.cn/]quic://dns.alidns.com
[/qq.com/]quic://dns.alidns.com
[/tencent-cloud.com/]quic://dns.alidns.com
[/tencentcs.cn/tencentcs.com/]quic://dns.alidns.com
[/qq.com/]quic://dns.alidns.com
[/tencent.com/tencent.cn/]quic://dns.alidns.com
[/sogou.com/]quic://dns.alidns.com
[/wpscdn.cn/]quic://dns.alidns.com
[/xunlei.com/]quic://dns.alidns.com
[/mi.com/]quic://dns.alidns.com
[/miwifi.com/]quic://dns.alidns.com
[/shifen.com/]quic://dns.alidns.com
[/bdurl.net/]quic://dns.alidns.com
[/amemv.com/]quic://dns.alidns.com
[/toutiao.com/]quic://dns.alidns.com
[/zijieapi.com/]quic://dns.alidns.com
[/douyin.com/]quic://dns.alidns.com
[/douyincdn.com/]quic://dns.alidns.com
[/douyinec.com/]quic://dns.alidns.com
[/douyinliving.com/]quic://dns.alidns.com
[/douyinpic.com/]quic://dns.alidns.com
[/douyinstatic.com/]quic://dns.alidns.com
[/douyinvideo.net/]quic://dns.alidns.com
[/douyinvod.click/]quic://dns.alidns.com
[/douyinvod.com/]quic://dns.alidns.com
[/tencent-blackboard.com/]quic://dns.alidns.com
[/tencent-cloud.com/]quic://dns.alidns.com
[/tencent-cloud.net/]quic://dns.alidns.com
[/tencent-gf.com/]quic://dns.alidns.com
[/tencent.com.hk/]quic://dns.alidns.com
[/tencent.com/]quic://dns.alidns.com
[/tencentads.com/]quic://dns.alidns.com
[/tencentcdb.com/]quic://dns.alidns.com
[/tencentclb.com/]quic://dns.alidns.com
[/tencentcloud.com/]quic://dns.alidns.com
[/tencentcloudapi.com/]quic://dns.alidns.com
[/tencentcloudbase.com/]quic://dns.alidns.com
[/tencentcs.com/]quic://dns.alidns.com
[/tencentdba.com/]quic://dns.alidns.com
[/tencentdevices.com/]quic://dns.alidns.com
[/tencentipv6.com/]quic://dns.alidns.com
[/tencentlog.com/]quic://dns.alidns.com
[/tencentmeeting.com/]quic://dns.alidns.com
[/tencentmind.com/]quic://dns.alidns.com
[/tencentmusic.com/]quic://dns.alidns.com
[/tencentsuite.com/]quic://dns.alidns.com
[/tencentwm.com/]quic://dns.alidns.com
[/tencentyun.com/]quic://dns.alidns.com
[/tqqa.com/]quic://dns.alidns.com
[/tqqyun.com/]quic://dns.alidns.com
[/qpic.cn/]quic://dns.alidns.com
[/qlogo.cn/]quic://dns.alidns.com
[/cdnnode.cn/]quic://dns.alidns.com
[/idouyinvod.com/]quic://dns.alidns.com
[/taobao.com/]quic://dns.alidns.com
[/jd.com/]quic://dns.alidns.com
[/baidu.com/]quic://dns.alidns.com
[/gov.cn/]quic://dns.alidns.com
[/bilibili.com/]quic://dns.alidns.com
[/bilivideo.com/]quic://dns.alidns.com
[/bilivideo.cn/]quic://dns.alidns.com
[/cnki.net/]quic://dns.alidns.com
[/hdslb.com/]quic://dns.alidns.com
[/163.com/]quic://dns.alidns.com
[/126.net/]quic://dns.alidns.com
[/huya.com/]quic://dns.alidns.com
# Cloudflare DNS
1.1.1.1
2606:4700:4700::1111
https://dns.cloudflare.com/dns-query
tls://1dot1dot1dot1.cloudflare-dns.com
# Google DNS
8.8.8.8
2001:4860:4860::8888
https://dns.google/dns-query
tls://dns.google
h3://dns.google/dns-query
# OpenDNS
tls://dns.opendns.com
https://doh.opendns.com/dns-query
# NextDNS
tls://dns.nextdns.io
https://dns.nextdns.io/dns-query
quic://dns.nextdns.io
h3://dns.nextdns.io/dns-query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我的路由器AdGuardHome的日志是默认保存在/etc/AdGuardHome/data/目录中的querylog.json文件。如果你设置日志保存时间为3天，那么3天后AdGuardHome其实并不会把日志删除，而是把当前的querylog.json改成querylog.json.1，然后再生成新的querylog.json记录日志。 此代码就是，每天的5点50分，检测是否存在querylog.json.1，存在就会删除它。这样在闪存空间有限的情况下，得以保留AdGuardHome的日志记录功能。</p><h2 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> SSH</h2><p>根据韩风大佬的视频整理的笔记，方便记忆，原视频地址：https://www.bilibili.com/video/BV1hT4y1E78k</p><p>因为前期创建zerotier账号并加入设备较简单，这里不再做记录，有需要的可以参考原视频，或这里，</p><p>https://gitee.com/xiaominglei001/forMarkdown/raw/master/FireShot Capture 044 - 20210412150410.png (1275×8773) - gitee.com.png</p><p>补充：</p><p>最好选择private加入，否则30天不登录会被删除。</p><p><img src="`+l+'" alt="img"></p><p><img src="'+r+'" alt="img"></p><p><img src="'+c+'" alt="img"></p><p><img src="'+o+'" alt="img"></p><p>三行举例：应该每个networkID其z开头的这串字母是固定的</p><p><img src="'+p+'" alt="img"></p><p><img src="'+u+'" alt="img"></p><p><img src="'+v+'" alt="img"></p><p><img src="'+m+'" alt="img"></p><p><img src="'+b+`" alt="img"></p><p>要连openwrt里的SSH最好用putty或者shell，不要用访问openwrt网页然后用其网页里的TTYD访问其SSH的方式，因为很可能访问不到。</p><h2 id="ddnsto" tabindex="-1"><a class="header-anchor" href="#ddnsto" aria-hidden="true">#</a> DDNSTO</h2><p>OpenWrt固件开发者众多，部分固件不自带ddnsto，可通过以下任一脚本轻松安装：</p><p>via curl</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh -c &quot;$(curl -sSL http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>via wget</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh -c &quot;$(wget --no-check-certificate -qO- http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>others</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /tmp; wget --no-check-certificate http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh; sh ./install_ddnsto.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在OpenWrt TTYD终端中输入任一上述命令，会自动安装完成。</p><p><img src="https://doc.linkease.com/assets/img/image-2021022400000003.536613b5.png" alt="image-2021022400000003"></p><p><img src="`+h+'" alt="image-2021022400000004"></p><p>或者putty、MobaXterm等软件登陆SSH，输入任一上述命令，会自动安装完成。</p><p><img src="https://doc.linkease.com/assets/img/image-2021022400000005.6379d721.png" alt="image-2021022400000005"></p><p><img src="'+g+'" alt="image-2021022400000006"></p><p><img src="https://doc.linkease.com/assets/img/image-2021022400000007.90bb45d5.png" alt="image-2021022400000007"></p><p>然后找到DDNS.to内网穿透，启用并设置token。</p><p><img src="'+f+`" alt="image-2021022400000008"></p><p><strong>Openwrt 常见问题解决思路</strong></p><p>*安装好ddnsto之后无法启用配置</p><p>因为 Openwrt 15 版本跟最新的插件不兼容导致，解决办法尝试一：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/etc/init.d/ddnsto disable
/etc/init.d/ddnsto enable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不行则尝试二：重启路由器</p><h2 id="ddns" tabindex="-1"><a class="header-anchor" href="#ddns" aria-hidden="true">#</a> DDNS</h2><p><strong>防火墙设置</strong></p><p>名称 DDNS</p><p>协议 TCP UDP</p><p>源区域 <strong>wan</strong></p><p>目标区域 <strong>lan</strong></p><p>目标地址 <code>::0000:0000:0000:0001</code></p><p>目标端口 80</p><p>操作 接受</p><p>地址族限制 仅 IPv6</p><h2 id="全能推送-pushbot" tabindex="-1"><a class="header-anchor" href="#全能推送-pushbot" aria-hidden="true">#</a> 全能推送（Pushbot）</h2><p>https://www.right.com.cn/forum/thread-4051426-1-1.html</p><p>项目地址：https://github.com/zzsj0928/luci-app-pushbot</p><h2 id="微信推送-wechatpush" tabindex="-1"><a class="header-anchor" href="#微信推送-wechatpush" aria-hidden="true">#</a> 微信推送（wechatpush）</h2><p>pushplus_token <code>5dfff495415c445e8466c3f894d926f2</code></p><h2 id="tailscale" tabindex="-1"><a class="header-anchor" href="#tailscale" aria-hidden="true">#</a> Tailscale</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>opkg update
opkg install tailscale
tailscale up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启子路由</p><p>https://tailscale.com/kb/1019/subnets/?q=subnet</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tailscale up --advertise-routes=192.168.2.0/24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Linux开启接受子路由</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tailscale up --accept-routes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>接口创建 <code>Tailscale</code>不配置协议，防火墙创建 <code>Tailscale</code>，保存并应用</li><li>防火墙 <code>Tailscale</code>区域设置，全部接受，开启IP 动态伪装、MSS 钳制，允许转发到 <code>Lan</code>、<code>Wan</code>，允许源区域 <code>Lan</code>，</li></ol><h2 id="vsftpd" tabindex="-1"><a class="header-anchor" href="#vsftpd" aria-hidden="true">#</a> Vsftpd</h2><p>/etc/vsftpd.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background=YES
listen=YES
chown_uploads=YES
chown_username=root
ftp_username=nobody
anonymous_enable=YES
anon_umask=022
anon_upload_enable=Yes
anon_mkdir_write_enable=Yes
anon_other_write_enable=Yes
anon_root=/mnt/mmcblk0p3/
local_enable=YES
write_enable=YES
local_umask=022
check_shell=NO
local_root=/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>允许匿名访问</p><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>chown root:nogroup /mnt/mmcblk0p3/
chmod 557 /mnt/mmcblk0p3/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动vsftpd</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/init.d/vsftpd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>杀掉vsftpd进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kill-9 PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ttyd终端" tabindex="-1"><a class="header-anchor" href="#ttyd终端" aria-hidden="true">#</a> TTYD终端</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>opkg install ttyd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="transmission" tabindex="-1"><a class="header-anchor" href="#transmission" aria-hidden="true">#</a> Transmission</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>opkg install transmission-daemon
opkg install transmission-cli
opkg install transmission-web
opkg install transmission-remote
opkg install transmission-web-control
opkg install luci-app-transmission
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>随系统启动<code>/etc/init.d/transmission enable</code> ,</p><p>启动<code>/etc/init.d/transmission start</code>, 停止<code>/etc/init.d/transmission stop</code>，</p><p>状态<code>/etc/init.d/transmission status</code></p><p>注意，配置文件在<code>cat /etc/config/transmission</code>，</p><p>你需要修改<code>config_dir</code>目录: /mnt/mmcblk0p3/transmission</p><p><code>download_dir</code>目录: /mnt/mmcblk0p3/transmission/done</p><p><code>incomplete_dir</code>目录: /mnt/mmcblk0p3/transmission/incomplete</p><p>有一个<code>option enabled 0</code>的选项，你要把它改为<code>option enabled 1</code></p><h2 id="qbittorrent" tabindex="-1"><a class="header-anchor" href="#qbittorrent" aria-hidden="true">#</a> qBittorrent</h2><p>https://op.supes.top/packages/aarch64_generic/</p><p>rblibtorrent</p><p>qt5-core</p><p>qt5-network</p><p>qt5-sql</p><p>qt5-xml</p><p>qBittorrent-Enhanced-Edition</p><p>luci-app-qbittorrent</p><p><strong>IP子网</strong></p><p>192.168.1.0/24 10.147.17.0/24 100.0.0.0/8</p><h2 id="watchcat" tabindex="-1"><a class="header-anchor" href="#watchcat" aria-hidden="true">#</a> Watchcat</h2><p>watchcat</p><p>luci-app-watchcat</p><p>luci-i18n-watchcat-zh-cn</p><h2 id="高级设置" tabindex="-1"><a class="header-anchor" href="#高级设置" aria-hidden="true">#</a> 高级设置</h2><p>https://op.dllkids.xyz/packages/aarch64_generic/</p><p>luci-app-advanced_1.20-26_all</p><p><strong>hosts</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>13.107.21.200 www.bing.com
13.107.21.200 cn.bing.com
13.107.21.200 bing.com

# Cloudflare
162.159.192.231 cloudflare.com
162.159.192.231 www.cloudflare.com
162.159.192.231 cdnjs.cloudflare.com
162.159.192.231 api.cloudflare.com
162.159.192.231 dash.cloudflare.com
162.159.192.231 platform.dash.cloudflare.com
162.159.192.231 info.cloudflare.com
162.159.192.231 sparrow.cloudflare.com
162.159.192.231 assets.www.cloudflare.com
162.159.192.231 videodelivery.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统更新" tabindex="-1"><a class="header-anchor" href="#系统更新" aria-hidden="true">#</a> 系统更新</h2><p>值守式系统升级 attendedsysupgrade</p><p>非定制固件升级 gpsysupgrade</p><h1 id="v2raya" tabindex="-1"><a class="header-anchor" href="#v2raya" aria-hidden="true">#</a> V2raya</h1><p>v2raya根本就没有带v2ray-core核心的任何文件, 因此会报错缺少geosite.dat, geoip.dat. 其根本原因是缺少了整个v2ray核心.</p><p>安装v2ray-core插件即可</p><p>指定v2ray binary path为 <code>/usr/bin/v2ray</code></p><p>规则列表文件路径：<code>/usr/share/v2ray</code></p><p>附加配置目录:<code>/etc/v2raya/ext</code>v2ray-ext.json</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;inbounds&quot;:[{&quot;port&quot;:2018,&quot;protocol&quot;:&quot;dokodemo-door&quot;,&quot;listen&quot;:&quot;0.0.0.0&quot;,&quot;sniffing&quot;:{&quot;enabled&quot;:false,&quot;metadataOnly&quot;:false},&quot;settings&quot;:{&quot;network&quot;:&quot;tcp&quot;,&quot;followRedirect&quot;:true},&quot;streamSettings&quot;:null,&quot;tag&quot;:&quot;redirect&quot;}],&quot;routing&quot;:{&quot;rules&quot;:[{&quot;type&quot;:&quot;field&quot;,&quot;balancerTag&quot;:&quot;proxy&quot;,&quot;inboundTag&quot;:[&quot;redirect&quot;]}]}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="v2ray" tabindex="-1"><a class="header-anchor" href="#v2ray" aria-hidden="true">#</a> V2ray</h1><p>https://github.com/felix-fly/v2ray-dnsmasq-dnscrypt?tab=readme-ov-file</p><h1 id="r2s设置" tabindex="-1"><a class="header-anchor" href="#r2s设置" aria-hidden="true">#</a> R2S设置</h1><h2 id="系统" tabindex="-1"><a class="header-anchor" href="#系统" aria-hidden="true">#</a> 系统</h2><h3 id="管理权" tabindex="-1"><a class="header-anchor" href="#管理权" aria-hidden="true">#</a> 管理权</h3><p><strong>SSH访问</strong></p><p>接口：zerotier / Tailscale</p><p>端口：22</p><p>密码验证：√</p><p>允许 root 用户凭密码登录：√</p><p>网关端口：√</p><h3 id="定时重启" tabindex="-1"><a class="header-anchor" href="#定时重启" aria-hidden="true">#</a> 定时重启</h3><p>启用：√</p><p>星期：星期一</p><p>小时：4</p><p>分钟：30</p><h2 id="服务" tabindex="-1"><a class="header-anchor" href="#服务" aria-hidden="true">#</a> 服务</h2><h3 id="passwall" tabindex="-1"><a class="header-anchor" href="#passwall" aria-hidden="true">#</a> Passwall</h3><p><strong>DNS</strong></p><p>过滤模式：pdnsd 通过TCP节点请求DNS</p><p>远程DNS：1.1.1.1</p><p>缓存解析结果：√</p><p><strong>模式</strong></p><p>TCP 默认代理模式：GFW列表</p><p>UDP 默认代理模式：不代理</p><p>路由器自身 TCP 代理模式：与 TCP 默认代理模式相同</p><p>路由器自身 UDP 代理模式：与 UDP 默认代理模式相同</p><p><strong>自动切换</strong></p><p>启用：√</p><p>TCP 恢复：√</p><p><strong>规则管理</strong></p><p>开启自动更新规则：√</p><p>更新时间星期：每天</p><p>更新时间小时：0点</p><p><strong>规则列表</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sspanel.net
v2ex.com
spotify.com
netflix.com
v2rayssr.com
rarbg.to

#google
googleapis.cn
googleapis.com
google.com.tw
google.com.hk
gstatic.com
xn--ngstr-lra8j.com

#github
github.com
github.global.ssl.fastly.net
assets-cdn.github.com
api.ipify.org

#po
tellme.pw
hkbisi.com
redgifs.com
taohuaimg.com
u9img.com
madouqu27.cc
u3c3.com
u9a9.cc
thza.cc
hsck.us
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>服务器端</strong></p><p>启用：√</p><p>端口：10801</p><h3 id="ddns-to内网穿透" tabindex="-1"><a class="header-anchor" href="#ddns-to内网穿透" aria-hidden="true">#</a> DDNS.to内网穿透</h3><p>令牌：9113bfe9-6ef2-4f4f-9bad-ec2d85e06171</p><h3 id="mosdns" tabindex="-1"><a class="header-anchor" href="#mosdns" aria-hidden="true">#</a> MosDNS</h3><p>启用：√</p><p>MosDNS 配置文件：选择内置预设</p><p>日志等级：error</p><p>MosDNS 日志文件：/dev/null</p><p>启用 DNS 重定向： √</p><p>启用 DNS 广告过滤：√</p><p><strong>卸载</strong></p><p>曾经安装过其他版本的 MosDNS LuCI 或使用的固件自带了 MosDNS，安装后可能无法正常运行，你需要先将其它来源的版本卸载并清除数据残留后再装才能使用。</p><p>解决方法：</p><p>1、卸载包含 <strong>mosdns</strong> 字符的所有软件包 2、删除数据 <code>rm -rf /etc/config/mosdns /etc/mosdns</code> 3、重新安装 mosdns</p><h3 id="全能推送" tabindex="-1"><a class="header-anchor" href="#全能推送" aria-hidden="true">#</a> 全能推送</h3><p><strong>基本设置</strong></p><p>启用 ： √</p><p>推送模式：钉钉</p><p>Webhook：7002438326f5a29c3c8fcf6fa5d1e8ac8bfe21bd96b6a9db8394730604092e2f</p><p>企业微信：2487f18f-5c86-493a-b85d-c68cf4d2ec8c</p><p>本设备名称：ZeR2S</p><p>设备别名：</p><p>46:60:08:50:e5:1b-DMIG.PC</p><p>64:A2:00:59:CC:BE-LSR.Note9</p><p>28:6C:07:2B:9A:32-Mi.Cooker</p><p>54:EF:44:25:3A:42-Mi.Gateway</p><p>40:31:3C:BD:FC:02-Mi.Lamp</p><p>50:EC:50:91:94:4F-Mi.Plug-desk</p><p>5c:02:14:b1:b5:d6-Mi.WiFi</p><p>04:cf:8c:19:65:4d-Mi.Air-Child</p><p>50:2D:BB:06:E9:75-Midea.Washer</p><p>38:D2:CA:DC:B8:04-Tmall.Genie</p><p>A4:02:B9:DE:46:71-Ze.Lap</p><p>28:16:7F:3A:03:BF-Ze.Note8</p><p>46:9a:00:9d:f5:85-Ze.Lap-z0</p><p>02:11:32:1f:38:6c-ZeNas</p><p>46:26:98:f8:d3:79-ZeNas-z0</p><p>1c:9e:46:3e:fd:a0-LSR.iPad</p><p>46:19:2f:6b:81:e3-PP.R2S</p><p><strong>推送内容</strong></p><p>设备上线通知：√</p><p>设备下线通知：√</p><p>CPU 负载报警：√</p><p>负载报警阈值：2</p><p>CPU 温度报警：√</p><p>温度报警阈值：80</p><p>Web 登录提醒：√</p><p>SSH 登录提醒：√</p><p>Web 错误尝试提醒：√</p><p>SSH 错误尝试提醒：√</p><p>错误尝试次数：3</p><p><strong>免打扰</strong></p><p>免打扰时段设置：模式一：脚本挂起</p><p>免打扰开始时间：每天1点</p><p>免打扰结束时间：每天6点</p><p>MAC过滤：忽略列表内设备</p><p>忽略列表：BE:96:14:10:EE:19 (ZeR2S.lan)</p><h3 id="解除网易云音乐播放限制" tabindex="-1"><a class="header-anchor" href="#解除网易云音乐播放限制" aria-hidden="true">#</a> 解除网易云音乐播放限制</h3><p>启用本插件：√</p><p>启用本插件以解除网易云音乐播放限制</p><p>启用本地 VIP：√</p><p>启用无损音质：√</p><p>启用自动更新：√</p><p>检查更新时间：3:00</p><h3 id="kms服务器" tabindex="-1"><a class="header-anchor" href="#kms服务器" aria-hidden="true">#</a> KMS服务器</h3><p>启用：√</p><p>自动激活局域网客户端：√</p><h3 id="zerotier" tabindex="-1"><a class="header-anchor" href="#zerotier" aria-hidden="true">#</a> ZeroTier</h3><p>启用：√</p><p>ZeroTier Network ID：8bd5124fd6f3b844</p><p>自动允许客户端NAT：√</p><h3 id="终端" tabindex="-1"><a class="header-anchor" href="#终端" aria-hidden="true">#</a> 终端</h3><p>启用：√</p><p>端口：7681</p><p>接口：@lan</p><h3 id="通用即插即用-upnp" tabindex="-1"><a class="header-anchor" href="#通用即插即用-upnp" aria-hidden="true">#</a> 通用即插即用（UPnP）</h3><p><strong>MiniUPnP 设置</strong></p><p>启动 UPnP 与 NAT-PMP 服务：√</p><p>启用 UPnP 功能：√</p><p>启用 NAT-PMP 功能：√</p><p>启用安全模式：√</p><p>启用 IGDv1 模式：√</p><p><strong>MiniUPnP 访问控制列表</strong></p><table><thead><tr><th style="text-align:center;">备注</th><th style="text-align:center;">外部端口</th><th style="text-align:center;">内部地址</th><th style="text-align:center;">内部端口</th><th style="text-align:center;">操作</th></tr></thead><tbody><tr><td style="text-align:center;">Allow high ports</td><td style="text-align:center;">1024-65535</td><td style="text-align:center;">0.0.0.0/0</td><td style="text-align:center;">1024-65535</td><td style="text-align:center;">allow</td></tr><tr><td style="text-align:center;">Default deny</td><td style="text-align:center;">0-65535</td><td style="text-align:center;">0.0.0.0/0</td><td style="text-align:center;">0-65535</td><td style="text-align:center;">deny</td></tr></tbody></table><h3 id="watchcat-1" tabindex="-1"><a class="header-anchor" href="#watchcat-1" aria-hidden="true">#</a> Watchcat</h3><p>模式：重启实例</p><p>周期：5m</p><p>要检查的主机：1.2.4.8</p><p>检查间隔：30s</p><p>接口：未指定</p><p>ModemManager 接口的名称：wan</p><h2 id="网络存储" tabindex="-1"><a class="header-anchor" href="#网络存储" aria-hidden="true">#</a> 网络存储</h2><h3 id="qbittorrent-1" tabindex="-1"><a class="header-anchor" href="#qbittorrent-1" aria-hidden="true">#</a> qBittorrent</h3><p>启用：√</p><p>端口：8080</p><p>配置文件目录：/etc</p><p>下载目录：/mnt/mmcblk0p3</p><h2 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h2><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><h4 id="接口-1" tabindex="-1"><a class="header-anchor" href="#接口-1" aria-hidden="true">#</a> 接口</h4><p><strong>tailscale</strong></p><p>设备：tailscale0</p><p>设备:tailscale0</p><p>开机自动运行：√</p><p>IPv4 地址：100.127.234.123</p><p>IPv4 子网掩码：255.255.255.255</p><p>防火墙区域：lan</p><p><strong>lan</strong></p><p>RA 服务：混合模式</p><p>DHCPv6 服务：混合模式</p><p>本地 IPV6 DNS 服务器：□</p><p><strong>wan</strong></p><p>设备：eth1</p><p><strong>zerotier</strong></p><p>设备：ztyqb6d54s</p><h4 id="全局网络选项" tabindex="-1"><a class="header-anchor" href="#全局网络选项" aria-hidden="true">#</a> 全局网络选项</h4><p>IPv6 ULA 前缀： <s>fdc0:0e88:a625::/48</s></p><h3 id="dhcp-dns" tabindex="-1"><a class="header-anchor" href="#dhcp-dns" aria-hidden="true">#</a> DHCP/DNS</h3><h4 id="高级设置-1" tabindex="-1"><a class="header-anchor" href="#高级设置-1" aria-hidden="true">#</a> 高级设置</h4><p>过滤 IPv6 记录：□</p><h4 id="静态地址分配" tabindex="-1"><a class="header-anchor" href="#静态地址分配" aria-hidden="true">#</a> 静态地址分配</h4><table><thead><tr><th style="text-align:center;">主机名</th><th style="text-align:center;">MAC 地址</th><th style="text-align:center;">IPv4 地址</th><th style="text-align:center;">租期</th><th style="text-align:center;">DUID</th><th style="text-align:center;">IPv6 后缀（十六进制）</th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;">MiWiFi</td><td style="text-align:center;">5C:02:14:B1:B5:D6</td><td style="text-align:center;">192.168.2.176</td><td style="text-align:center;">12h</td><td style="text-align:center;"><em>无</em></td><td style="text-align:center;"><em>无</em></td><td style="text-align:center;">☰编辑删除</td></tr><tr><td style="text-align:center;">ZeNote8</td><td style="text-align:center;">28:16:7F:3A:03:BF</td><td style="text-align:center;">192.168.2.227</td><td style="text-align:center;">12h</td><td style="text-align:center;"><em>无</em></td><td style="text-align:center;"><em>无</em></td><td style="text-align:center;">☰编辑删除</td></tr><tr><td style="text-align:center;">ZeNas</td><td style="text-align:center;">02:11:32:1F:38:6C</td><td style="text-align:center;">192.168.2.110</td><td style="text-align:center;">12h</td><td style="text-align:center;">000300010211321f386c</td><td style="text-align:center;"><em>无</em></td><td style="text-align:center;">☰编辑删除</td></tr></tbody></table><h3 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙" aria-hidden="true">#</a> 防火墙</h3><p>iptables -I FORWARD -i ztyqb6d54s -j ACCEPT iptables -I FORWARD -o ztyqb6d54s -j ACCEPT iptables -t nat -I POSTROUTING -o ztyqb6d54s -j MASQUERADE</p><p>iptables -I FORWARD -i tailscale0 -j ACCEPT iptables -I FORWARD -o tailscale0 -j ACCEPT iptables -t nat -I POSTROUTING -o tailscale0 -j MASQUERADE</p>`,347),y=[q];function _(w,k){return n(),i("div",null,y)}const P=e(x,[["render",_],["__file","Openwrt_电视.html.vue"]]);export{P as default};

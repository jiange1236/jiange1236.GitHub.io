import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as l,c as s,b as e,d as i,e as n,a as r}from"./app-DNA9lu2T.js";const d={},c=r(`<h1 id="routinga" tabindex="-1"><a class="header-anchor" href="#routinga" aria-hidden="true">#</a> RoutingA</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>default: direct
# Write your own rules below
# domain(geosite:geolocation-!cn) -&gt; proxy
# ip(geoip:hk, geoip:mo) -&gt; proxy

source(100.0.0.0/8) -&gt; direct
port(6881-6889) -&gt; direct
sourcePort(6881-6889) -&gt; direct
domain(geosite:cn) -&gt; direct
ip(geoip:private, geoip:cn) -&gt; direct
domain(geosite:category-scholar-!cn, geosite:category-scholar-cn) -&gt; direct
# domain(ext:&quot;LoyalsoldierSite.dat:china-list&quot;, ext:&quot;LoyalsoldierSite.dat:cn&quot;) -&gt; direct

# domain(geosite:google-scholar) -&gt; proxy
# domain(geosite:google, geosite:github, geosite:facebook, geosite:greatfire) -&gt; proxy
domain(regexp: v2ray.*) -&gt; proxy
domain(regexp: v2fly.*) -&gt; proxy
domain(domain: singlelogin.se) -&gt; proxy
domain(contains: zlibrary) -&gt; proxy
domain(contains: z-library) -&gt; proxy
domain(geosite:z-library) -&gt; proxy
domain(ext:&quot;LoyalsoldierSite.dat:gfw&quot;) -&gt; proxy

# domain(geosite:category-ads) -&gt; block
# domain(ext:&quot;LoyalsoldierSite.dat:category-ads-all&quot;) -&gt; block

domain(geosite:category-porn, geosite:javdb) -&gt; proxy
domain(regexp: thz.*) -&gt; proxy
domain(regexp: porn.*) -&gt; proxy
domain(regexp: btsow.*) -&gt; proxy
domain(domain: taohuaimg.com) -&gt; proxy
domain(regexp: bisi.*) -&gt; proxy
domain(regexp: madouqu.*) -&gt; proxy
domain(domain: u3c3.com, domain: u9a9.cc) -&gt; proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="geoip、geosite" tabindex="-1"><a class="header-anchor" href="#geoip、geosite" aria-hidden="true">#</a> GeoIP、GeoSite</h1><h2 id="geoip" tabindex="-1"><a class="header-anchor" href="#geoip" aria-hidden="true">#</a> GeoIP</h2><p>源文件：https://github.com/v2fly/geoip</p><h2 id="geosite" tabindex="-1"><a class="header-anchor" href="#geosite" aria-hidden="true">#</a> GeoSite</h2><p>源文件：https://github.com/v2fly/domain-list-community</p><h2 id="loyalsoldier" tabindex="-1"><a class="header-anchor" href="#loyalsoldier" aria-hidden="true">#</a> Loyalsoldier</h2><h3 id="geoip-1" tabindex="-1"><a class="header-anchor" href="#geoip-1" aria-hidden="true">#</a> GeoIP</h3><p>geoip.dat 所有类别：https://github.com/Loyalsoldier/geoip/tree/release/text</p><ul><li>新增类别（方便有特殊需求的用户使用）： <ul><li><code>geoip:cloudflare</code></li><li><code>geoip:cloudfront</code></li><li><code>geoip:facebook</code></li><li><code>geoip:fastly</code></li><li><code>geoip:google</code></li><li><code>geoip:netflix</code></li><li><code>geoip:telegram</code></li><li><code>geoip:twitter</code></li></ul></li></ul><h3 id="geosite-1" tabindex="-1"><a class="header-anchor" href="#geosite-1" aria-hidden="true">#</a> GeoSite</h3><p>geosite.dat 类别：https://github.com/v2fly/domain-list-community/tree/master/data</p><p>新增类别（方便有特殊需求的用户使用）：</p>`,14),g=e("li",null,[e("p",null,[e("code",null,"geosite:gfw")])],-1),m=e("code",null,"geosite:china-list",-1),u={href:"https://github.com/felixonmars/dnsmasq-china-list/blob/master/accelerated-domains.china.conf",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"geosite:apple-cn",-1),p={href:"https://github.com/felixonmars/dnsmasq-china-list/blob/master/apple.china.conf",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"geosite:google-cn",-1),v={href:"https://github.com/felixonmars/dnsmasq-china-list/blob/master/google.china.conf",target:"_blank",rel:"noopener noreferrer"},x=e("strong",null,"慎用",-1),y=e("code",null,"geosite:win-spy",-1),_={href:"https://github.com/crazy-max/WindowsSpyBlocker/blob/master/data/hosts/spy.txt",target:"_blank",rel:"noopener noreferrer"},f=e("strong",null,"慎用",-1),k=e("code",null,"geosite:win-update",-1),w={href:"https://github.com/crazy-max/WindowsSpyBlocker/blob/master/data/hosts/update.txt",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"慎用",-1),S=e("code",null,"geosite:win-extra",-1),z={href:"https://github.com/crazy-max/WindowsSpyBlocker/blob/master/data/hosts/extra.txt",target:"_blank",rel:"noopener noreferrer"};function W(B,L){const o=a("ExternalLinkIcon");return l(),s("div",null,[c,e("ul",null,[g,e("li",null,[e("p",null,[m,i("：包含 "),e("a",u,[i("@felixonmars/dnsmasq-china-list/accelerated-domains.china.conf"),n(o)]),i(" 文件里的域名，供有特殊 DNS 分流需求的用户使用。")])]),e("li",null,[e("p",null,[h,i("：包含 "),e("a",p,[i("@felixonmars/dnsmasq-china-list/apple.china.conf"),n(o)]),i(" 文件里的域名，供希望 Apple 域名直连（不走代理）的用户使用。")])]),e("li",null,[e("p",null,[b,i("：包含 "),e("a",v,[i("@felixonmars/dnsmasq-china-list/google.china.conf"),n(o)]),i(" 文件里的域名，供希望 Google 域名直连（不走代理）的用户使用。")])]),e("li",null,[e("p",null,[i("["),x,i("]"),y,i("：包含 "),e("a",_,[i("@crazy-max/WindowsSpyBlocker/hosts/spy.txt"),n(o)]),i(" 文件里的域名，供希望屏蔽 Windows 操作系统隐私跟踪域名的用户使用。")])]),e("li",null,[e("p",null,[i("["),f,i("]"),k,i("：包含 "),e("a",w,[i("@crazy-max/WindowsSpyBlocker/hosts/update.txt"),n(o)]),i(" 文件里的域名，供希望屏蔽 Windows 操作系统自动升级的用户使用。")])]),e("li",null,[e("p",null,[i("["),q,i("]"),S,i("：包含 "),e("a",z,[i("@crazy-max/WindowsSpyBlocker/hosts/extra.txt"),n(o)]),i(" 文件里的域名，供希望屏蔽 Windows 操作系统附加隐私跟踪域名的用户使用。")])])])])}const I=t(d,[["render",W],["__file","V2rayA.html.vue"]]);export{I as default};

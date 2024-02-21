import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,a as i}from"./app-CCWlTJg9.js";const n="/assets/image-20211218115620639-CtRxvqUn.png",s="/assets/image-20211218115655439-Cr1SOq_T.png",d="/assets/image-20211218114841912-8j2dqlCC.png",r="/assets/aed40a1d-18d8-4a85-b808-51ae3eca2ea0-DNUTHS3i.png",p="/assets/f246539a-9236-465b-941c-fc3d0284b97c-C36Z_6Kw.png",l="/assets/821eab95-9461-4cf4-91a7-b83add3a9ddf-sQRhxRVA.png",c="/assets/7ae57cb6-645a-4d6e-8b19-bb56bd16c0d9-ECyT4Q-U.png",o="/assets/e2f1bdb1-98a0-428e-9ac0-380e8a92bb13-BMFcnD89.png",h="/assets/553bbe27-b3ec-4c72-afe9-4e7707e2fb8b-Bk-bZx0H.png",m="/assets/966087b4-c53e-4848-a8a3-903ae43d64bb-BW5ZfWTc.png",g="/assets/1490e63c-e1c8-4aee-880d-5995fa6c38dc-CO34cg2-.png",u="/assets/c93a809b-b792-4b6f-9aec-ba6fb82a43ee-CKfuznTC.png",b="/assets/image-2021022400000004.13ea60fa-7YrarAjQ.png",v="/assets/image-2021022400000006.d94bda31-BgDsdnFU.png",x="/assets/image-2021022400000008.c70860e9-UgHiNq7w.png",f={},_=i(`<p>[toc]</p><h1 id="openwrt" tabindex="-1"><a class="header-anchor" href="#openwrt" aria-hidden="true">#</a> Openwrt</h1><h2 id="opkg" tabindex="-1"><a class="header-anchor" href="#opkg" aria-hidden="true">#</a> OPKG</h2><p>原版</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>src/gz openwrt_core https://dl.openwrt.ai/23.05/targets/mediatek/mt7622/5.15.147
src/gz openwrt_base https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/base
src/gz openwrt_packages https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/packages
src/gz openwrt_luci https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/luci
src/gz openwrt_routing https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/routing
src/gz openwrt_kiddin9 https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/kiddin9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找大文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find / -type f -size +5120b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="r2s" tabindex="-1"><a class="header-anchor" href="#r2s" aria-hidden="true">#</a> R2S</h2><p>https://github.com/fanck0605/openwrt-nanopi-r2s</p><p>https://github.com/fanck0605/friendlywrt-nanopi-r2s</p><p>https://github.com/klever1988/nanopi-openwrt</p><p>https://github.com/kiddin9/OpenWrt_x86-r2s-r4s</p><p>https://github.com/QiuSimons/YAOF</p><p>https://github.com/DHDAXCW/NanoPi-R2S</p><h3 id="smartdns-adguardhome-passwall" tabindex="-1"><a class="header-anchor" href="#smartdns-adguardhome-passwall" aria-hidden="true">#</a> SmartDNS+ADGuardHome+Passwall</h3><p><s>https://post.smzdm.com/p/a6dn5g8n/</s></p><p>首先固件要支持ipv6，这是前提，设置：wan=高级=获取ipv6自动，wan6=dhcp6客户端下面选项保持初始设置，lan=ipv6=混合模式=混合模式=有状态+无状态，dhcp/dns=高级=取消禁止解析ipv6，基本上就ok了</p><p><s>https://www.right.com.cn/forum/thread-4042833-1-1.html</s></p><p>https://www.right.com.cn/forum/thread-4034918-1-1.html</p><h2 id="无线" tabindex="-1"><a class="header-anchor" href="#无线" aria-hidden="true">#</a> 无线</h2><p><img src="`+n+'" alt="image-20211218115620639"></p><p><img src="'+s+'" alt="image-20211218115655439"></p><h2 id="广告规则" tabindex="-1"><a class="header-anchor" href="#广告规则" aria-hidden="true">#</a> 广告规则</h2><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_English/filter.txt</p><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt</p><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt</p><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt</p><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt</p><p>https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt</p><p>https://gitee.com/cjx82630/cjxlist/raw/master/cjx-annoyance.txt</p><p><s>https://gitee.com/xinggsf/Adblock-Rule/raw/master/rule.txt</s></p><p>https://gitee.com/xinggsf/Adblock-Rule/raw/master/mv.txt</p><p>https://gitee.com/halflife/list/raw/master/ad.txt</p><p>https://anti-ad.net/easylist.txt</p><p>miTVhosts</p><p>https://raw.githubusercontent.com/liamliu108/miTVhosts/master/hosts</p><h3 id="安卓" tabindex="-1"><a class="header-anchor" href="#安卓" aria-hidden="true">#</a> 安卓</h3><p>https://raw.githubusercontent.com/banbendalao/ADgk/master/ADgk.txt</p><p><img src="'+d+`" alt="image-20211218114841912"></p><h2 id="adguard-home" tabindex="-1"><a class="header-anchor" href="#adguard-home" aria-hidden="true">#</a> AdGuard Home</h2><p>最近128m的小闪存运行AdGuardHome几天后，空间就爆了，改成只记录一天的日志还是爆，后来发现即使设置成一天，AdGuardHome也不是覆写，而是把旧的日志文件重命名继续保存了。 所以用到了以下代码，自动删除旧的日志文件。直接计划任务里面添加以下代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>50 5 * * * [ -f /etc/AdGuardHome/data/querylog.json.1 ] &amp;&amp; rm /etc/AdGuardHome/data/querylog.json.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我的路由器AdGuardHome的日志是默认保存在/etc/AdGuardHome/data/目录中的querylog.json文件。如果你设置日志保存时间为3天，那么3天后AdGuardHome其实并不会把日志删除，而是把当前的querylog.json改成querylog.json.1，然后再生成新的querylog.json记录日志。 此代码就是，每天的5点50分，检测是否存在querylog.json.1，存在就会删除它。这样在闪存空间有限的情况下，得以保留AdGuardHome的日志记录功能。</p><h2 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> SSH</h2><p>根据韩风大佬的视频整理的笔记，方便记忆，原视频地址：https://www.bilibili.com/video/BV1hT4y1E78k</p><p>因为前期创建zerotier账号并加入设备较简单，这里不再做记录，有需要的可以参考原视频，或这里，</p><p>https://gitee.com/xiaominglei001/forMarkdown/raw/master/FireShot Capture 044 - 20210412150410.png (1275×8773) - gitee.com.png</p><p>补充：</p><p>最好选择private加入，否则30天不登录会被删除。</p><p><img src="`+r+'" alt="img"></p><p><img src="'+p+'" alt="img"></p><p><img src="'+l+'" alt="img"></p><p><img src="'+c+'" alt="img"></p><p>三行举例：应该每个networkID其z开头的这串字母是固定的</p><p><img src="'+o+'" alt="img"></p><p><img src="'+h+'" alt="img"></p><p><img src="'+m+'" alt="img"></p><p><img src="'+g+'" alt="img"></p><p><img src="'+u+`" alt="img"></p><p>要连openwrt里的SSH最好用putty或者shell，不要用访问openwrt网页然后用其网页里的TTYD访问其SSH的方式，因为很可能访问不到。</p><h2 id="ddnsto" tabindex="-1"><a class="header-anchor" href="#ddnsto" aria-hidden="true">#</a> DDNSTO</h2><p>OpenWrt固件开发者众多，部分固件不自带ddnsto，可通过以下任一脚本轻松安装：</p><p>via curl</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh -c &quot;$(curl -sSL http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>via wget</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh -c &quot;$(wget --no-check-certificate -qO- http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>others</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /tmp; wget --no-check-certificate http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh; sh ./install_ddnsto.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在OpenWrt TTYD终端中输入任一上述命令，会自动安装完成。</p><p><img src="https://doc.linkease.com/assets/img/image-2021022400000003.536613b5.png" alt="image-2021022400000003"></p><p><img src="`+b+'" alt="image-2021022400000004"></p><p>或者putty、MobaXterm等软件登陆SSH，输入任一上述命令，会自动安装完成。</p><p><img src="https://doc.linkease.com/assets/img/image-2021022400000005.6379d721.png" alt="image-2021022400000005"></p><p><img src="'+v+'" alt="image-2021022400000006"></p><p><img src="https://doc.linkease.com/assets/img/image-2021022400000007.90bb45d5.png" alt="image-2021022400000007"></p><p>然后找到DDNS.to内网穿透，启用并设置token。</p><p><img src="'+x+`" alt="image-2021022400000008"></p><p><strong>Openwrt 常见问题解决思路</strong></p><p>*安装好ddnsto之后无法启用配置</p><p>因为 Openwrt 15 版本跟最新的插件不兼容导致，解决办法尝试一：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/etc/init.d/ddnsto disable
/etc/init.d/ddnsto enable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不行则尝试二：重启路由器</p><h2 id="全能推送-pushbot" tabindex="-1"><a class="header-anchor" href="#全能推送-pushbot" aria-hidden="true">#</a> 全能推送（Pushbot）</h2><p>https://www.right.com.cn/forum/thread-4051426-1-1.html</p><p>项目地址：https://github.com/zzsj0928/luci-app-pushbot</p><h2 id="tailscale" tabindex="-1"><a class="header-anchor" href="#tailscale" aria-hidden="true">#</a> Tailscale</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>opkg update
opkg install tailscale
tailscale up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启子路由</p><p>https://tailscale.com/kb/1019/subnets/?q=subnet</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tailscale up --advertise-routes=192.168.2.0/24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Linux开启接受子路由</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tailscale up --accept-routes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vsftpd" tabindex="-1"><a class="header-anchor" href="#vsftpd" aria-hidden="true">#</a> Vsftpd</h2><p>/etc/vsftpd.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background=YES
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="猫影视" tabindex="-1"><a class="header-anchor" href="#猫影视" aria-hidden="true">#</a> 猫影视</h1><p>https://gitea.com/AYOM/zhou/</p><p>https://gitea.com/wuzang/mm</p><p>https://us-oss.9t.ee/Cat/api.html</p><p>源：</p><p>http://fj365.ml/m.json</p><p>emotn分享码</p><p>123456 666888 129915 aaa123</p><p>https://post.smzdm.com/p/aen2z7g4/</p><p>https://post.smzdm.com/p/aoowqow7/</p><p>https://post.smzdm.com/p/a99vlpmp/</p><h1 id="r2s设置" tabindex="-1"><a class="header-anchor" href="#r2s设置" aria-hidden="true">#</a> R2S设置</h1><h2 id="系统" tabindex="-1"><a class="header-anchor" href="#系统" aria-hidden="true">#</a> 系统</h2><h3 id="管理权" tabindex="-1"><a class="header-anchor" href="#管理权" aria-hidden="true">#</a> 管理权</h3><p><strong>SSH访问</strong></p><p>接口：zerotier / Tailscale</p><p>端口：22</p><p>密码验证：√</p><p>允许 root 用户凭密码登录：√</p><p>网关端口：√</p><h3 id="定时重启" tabindex="-1"><a class="header-anchor" href="#定时重启" aria-hidden="true">#</a> 定时重启</h3><p>启用：√</p><p>星期：星期一</p><p>小时：4</p><p>分钟：30</p><h2 id="服务" tabindex="-1"><a class="header-anchor" href="#服务" aria-hidden="true">#</a> 服务</h2><h3 id="passwall" tabindex="-1"><a class="header-anchor" href="#passwall" aria-hidden="true">#</a> Passwall</h3><p><strong>DNS</strong></p><p>过滤模式：pdnsd 通过TCP节点请求DNS</p><p>远程DNS：1.1.1.1</p><p>缓存解析结果：√</p><p><strong>模式</strong></p><p>TCP 默认代理模式：GFW列表</p><p>UDP 默认代理模式：不代理</p><p>路由器自身 TCP 代理模式：与 TCP 默认代理模式相同</p><p>路由器自身 UDP 代理模式：与 UDP 默认代理模式相同</p><p><strong>自动切换</strong></p><p>启用：√</p><p>TCP 恢复：√</p><p><strong>规则管理</strong></p><p>开启自动更新规则：√</p><p>更新时间星期：每天</p><p>更新时间小时：0点</p><p><strong>规则列表</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sspanel.net
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
thzpic.com
hsck.cc
btsow.com
fikfap.com
javdb.com
javlibrary.com
jdbimgs.com
taohuaimg.com
thzthzthz.cc
hkbisi.com
caregirl.net
iporntv.net
cdn2020.com
91thz.cc
bisi666.cc
268ck.cc
btsow.rest
mobilepornmovies.com
redgifs.com
1y.is
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>服务器端</strong></p><p>启用：√</p><p>端口：10801</p><h3 id="ddns-to内网穿透" tabindex="-1"><a class="header-anchor" href="#ddns-to内网穿透" aria-hidden="true">#</a> DDNS.to内网穿透</h3><p>令牌：9113bfe9-6ef2-4f4f-9bad-ec2d85e06171</p><h3 id="mosdns" tabindex="-1"><a class="header-anchor" href="#mosdns" aria-hidden="true">#</a> MosDNS</h3><p>启用：√</p><p>MosDNS 配置文件：选择内置预设</p><p>日志等级：error</p><p>MosDNS 日志文件：/dev/null</p><p>启用 DNS 重定向： √</p><p>启用 DNS 广告过滤：√</p><p><strong>卸载</strong></p><p>曾经安装过其他版本的 MosDNS LuCI 或使用的固件自带了 MosDNS，安装后可能无法正常运行，你需要先将其它来源的版本卸载并清除数据残留后再装才能使用。</p><p>解决方法：</p><p>1、卸载包含 <strong>mosdns</strong> 字符的所有软件包 2、删除数据 <code>rm -rf /etc/config/mosdns /etc/mosdns</code> 3、重新安装 mosdns</p><h3 id="全能推送" tabindex="-1"><a class="header-anchor" href="#全能推送" aria-hidden="true">#</a> 全能推送</h3><p><strong>基本设置</strong></p><p>启用 ： √</p><p>推送模式：钉钉</p><p>Webhook：7002438326f5a29c3c8fcf6fa5d1e8ac8bfe21bd96b6a9db8394730604092e2f</p><p>企业微信：2487f18f-5c86-493a-b85d-c68cf4d2ec8c</p><p>本设备名称：ZeR2S</p><p>设备别名：</p><p>46:60:08:50:e5:1b-DMIG.PC</p><p>64:A2:00:59:CC:BE-LSR.Note9</p><p>28:6C:07:2B:9A:32-Mi.Cooker</p><p>54:EF:44:25:3A:42-Mi.Gateway</p><p>40:31:3C:BD:FC:02-Mi.Lamp</p><p>50:EC:50:91:94:4F-Mi.Plug-desk</p><p>5c:02:14:b1:b5:d6-Mi.WiFi</p><p>04:cf:8c:19:65:4d-Mi.Air-Child</p><p>50:2D:BB:06:E9:75-Midea.Washer</p><p>38:D2:CA:DC:B8:04-Tmall.Genie</p><p>A4:02:B9:DE:46:71-Ze.Lap</p><p>28:16:7F:3A:03:BF-Ze.Note8</p><p>46:9a:00:9d:f5:85-Ze.Lap-z0</p><p>02:11:32:1f:38:6c-ZeNas</p><p>46:26:98:f8:d3:79-ZeNas-z0</p><p>1c:9e:46:3e:fd:a0-LSR.iPad</p><p>46:19:2f:6b:81:e3-PP.R2S</p><p><strong>推送内容</strong></p><p>设备上线通知：√</p><p>设备下线通知：√</p><p>CPU 负载报警：√</p><p>负载报警阈值：2</p><p>CPU 温度报警：√</p><p>温度报警阈值：80</p><p>Web 登录提醒：√</p><p>SSH 登录提醒：√</p><p>Web 错误尝试提醒：√</p><p>SSH 错误尝试提醒：√</p><p>错误尝试次数：3</p><p><strong>免打扰</strong></p><p>免打扰时段设置：模式一：脚本挂起</p><p>免打扰开始时间：每天1点</p><p>免打扰结束时间：每天6点</p><p>MAC过滤：忽略列表内设备</p><p>忽略列表：BE:96:14:10:EE:19 (ZeR2S.lan)</p><h3 id="解除网易云音乐播放限制" tabindex="-1"><a class="header-anchor" href="#解除网易云音乐播放限制" aria-hidden="true">#</a> 解除网易云音乐播放限制</h3><p>启用本插件：√</p><p>启用本插件以解除网易云音乐播放限制</p><p>启用本地 VIP：√</p><p>启用无损音质：√</p><p>启用自动更新：√</p><p>检查更新时间：3:00</p><h3 id="kms服务器" tabindex="-1"><a class="header-anchor" href="#kms服务器" aria-hidden="true">#</a> KMS服务器</h3><p>启用：√</p><p>自动激活局域网客户端：√</p><h3 id="zerotier" tabindex="-1"><a class="header-anchor" href="#zerotier" aria-hidden="true">#</a> ZeroTier</h3><p>启用：√</p><p>ZeroTier Network ID：8bd5124fd6f3b844</p><p>自动允许客户端NAT：√</p><h3 id="终端" tabindex="-1"><a class="header-anchor" href="#终端" aria-hidden="true">#</a> 终端</h3><p>启用：√</p><p>端口：7681</p><p>接口：@lan</p><h3 id="通用即插即用-upnp" tabindex="-1"><a class="header-anchor" href="#通用即插即用-upnp" aria-hidden="true">#</a> 通用即插即用（UPnP）</h3><p><strong>MiniUPnP 设置</strong></p><p>启动 UPnP 与 NAT-PMP 服务：√</p><p>启用 UPnP 功能：√</p><p>启用 NAT-PMP 功能：√</p><p>启用安全模式：√</p><p>启用 IGDv1 模式：√</p><p><strong>MiniUPnP 访问控制列表</strong></p><table><thead><tr><th style="text-align:center;">备注</th><th style="text-align:center;">外部端口</th><th style="text-align:center;">内部地址</th><th style="text-align:center;">内部端口</th><th style="text-align:center;">操作</th></tr></thead><tbody><tr><td style="text-align:center;">Allow high ports</td><td style="text-align:center;">1024-65535</td><td style="text-align:center;">0.0.0.0/0</td><td style="text-align:center;">1024-65535</td><td style="text-align:center;">allow</td></tr><tr><td style="text-align:center;">Default deny</td><td style="text-align:center;">0-65535</td><td style="text-align:center;">0.0.0.0/0</td><td style="text-align:center;">0-65535</td><td style="text-align:center;">deny</td></tr></tbody></table><h3 id="watchcat-1" tabindex="-1"><a class="header-anchor" href="#watchcat-1" aria-hidden="true">#</a> Watchcat</h3><p>模式：重启实例</p><p>周期：5m</p><p>要检查的主机：1.2.4.8</p><p>检查间隔：30s</p><p>接口：未指定</p><p>ModemManager 接口的名称：wan</p><h2 id="网络存储" tabindex="-1"><a class="header-anchor" href="#网络存储" aria-hidden="true">#</a> 网络存储</h2><h3 id="qbittorrent-1" tabindex="-1"><a class="header-anchor" href="#qbittorrent-1" aria-hidden="true">#</a> qBittorrent</h3><p>启用：√</p><p>端口：8080</p><p>配置文件目录：/etc</p><p>下载目录：/mnt/mmcblk0p3</p><h2 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h2><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><h4 id="接口-1" tabindex="-1"><a class="header-anchor" href="#接口-1" aria-hidden="true">#</a> 接口</h4><p><strong>tailscale</strong></p><p>设备：tailscale0</p><p>设备:tailscale0</p><p>开机自动运行：√</p><p>IPv4 地址：100.127.234.123</p><p>IPv4 子网掩码：255.255.255.255</p><p>防火墙区域：lan</p><p><strong>lan</strong></p><p>RA 服务：混合模式</p><p>DHCPv6 服务：混合模式</p><p>本地 IPV6 DNS 服务器：□</p><p><strong>wan</strong></p><p>设备：eth1</p><p><strong>zerotier</strong></p><p>设备：ztyqb6d54s</p><h4 id="全局网络选项" tabindex="-1"><a class="header-anchor" href="#全局网络选项" aria-hidden="true">#</a> 全局网络选项</h4><p>IPv6 ULA 前缀： <s>fdc0:0e88:a625::/48</s></p><h3 id="dhcp-dns" tabindex="-1"><a class="header-anchor" href="#dhcp-dns" aria-hidden="true">#</a> DHCP/DNS</h3><h4 id="高级设置-1" tabindex="-1"><a class="header-anchor" href="#高级设置-1" aria-hidden="true">#</a> 高级设置</h4><p>过滤 IPv6 记录：□</p><h4 id="静态地址分配" tabindex="-1"><a class="header-anchor" href="#静态地址分配" aria-hidden="true">#</a> 静态地址分配</h4><table><thead><tr><th style="text-align:center;">主机名</th><th style="text-align:center;">MAC 地址</th><th style="text-align:center;">IPv4 地址</th><th style="text-align:center;">租期</th><th style="text-align:center;">DUID</th><th style="text-align:center;">IPv6 后缀（十六进制）</th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;">MiWiFi</td><td style="text-align:center;">5C:02:14:B1:B5:D6</td><td style="text-align:center;">192.168.2.176</td><td style="text-align:center;">12h</td><td style="text-align:center;"><em>无</em></td><td style="text-align:center;"><em>无</em></td><td style="text-align:center;">☰编辑删除</td></tr><tr><td style="text-align:center;">ZeNote8</td><td style="text-align:center;">28:16:7F:3A:03:BF</td><td style="text-align:center;">192.168.2.227</td><td style="text-align:center;">12h</td><td style="text-align:center;"><em>无</em></td><td style="text-align:center;"><em>无</em></td><td style="text-align:center;">☰编辑删除</td></tr><tr><td style="text-align:center;">ZeNas</td><td style="text-align:center;">02:11:32:1F:38:6C</td><td style="text-align:center;">192.168.2.110</td><td style="text-align:center;">12h</td><td style="text-align:center;">000300010211321f386c</td><td style="text-align:center;"><em>无</em></td><td style="text-align:center;">☰编辑删除</td></tr></tbody></table><h3 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙" aria-hidden="true">#</a> 防火墙</h3><p>iptables -I FORWARD -i ztyqb6d54s -j ACCEPT iptables -I FORWARD -o ztyqb6d54s -j ACCEPT iptables -t nat -I POSTROUTING -o ztyqb6d54s -j MASQUERADE</p><p>iptables -I FORWARD -i tailscale0 -j ACCEPT iptables -I FORWARD -o tailscale0 -j ACCEPT iptables -t nat -I POSTROUTING -o tailscale0 -j MASQUERADE</p>`,305),w=[_];function y(k,S){return t(),a("div",null,w)}const P=e(f,[["render",y],["__file","Openwrt_电视.html.vue"]]);export{P as default};

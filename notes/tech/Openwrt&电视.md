[toc]

# Openwrt

## R2S

https://github.com/fanck0605/openwrt-nanopi-r2s

https://github.com/fanck0605/friendlywrt-nanopi-r2s

https://github.com/klever1988/nanopi-openwrt

https://github.com/kiddin9/OpenWrt_x86-r2s-r4s

https://github.com/QiuSimons/YAOF

https://github.com/DHDAXCW/NanoPi-R2S



### SmartDNS+ADGuardHome+Passwall

~~https://post.smzdm.com/p/a6dn5g8n/~~

首先固件要支持ipv6，这是前提，设置：wan=高级=获取ipv6自动，wan6=dhcp6客户端下面选项保持初始设置，lan=ipv6=混合模式=混合模式=有状态+无状态，dhcp/dns=高级=取消禁止解析ipv6，基本上就ok了

~~https://www.right.com.cn/forum/thread-4042833-1-1.html~~

https://www.right.com.cn/forum/thread-4034918-1-1.html

## 无线



![image-20211218115620639](./Openwrt&%E7%94%B5%E8%A7%86.assets/image-20211218115620639.png)

![image-20211218115655439](./Openwrt&%E7%94%B5%E8%A7%86.assets/image-20211218115655439.png)

## 广告规则

https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_English/filter.txt

https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt

https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt

https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt

https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt

https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt

https://gitee.com/cjx82630/cjxlist/raw/master/cjx-annoyance.txt

~~https://gitee.com/xinggsf/Adblock-Rule/raw/master/rule.txt~~

https://gitee.com/xinggsf/Adblock-Rule/raw/master/mv.txt

https://gitee.com/halflife/list/raw/master/ad.txt

https://anti-ad.net/easylist.txt

miTVhosts

https://raw.githubusercontent.com/liamliu108/miTVhosts/master/hosts

### 安卓

https://raw.githubusercontent.com/banbendalao/ADgk/master/ADgk.txt

![image-20211218114841912](./Openwrt&%E7%94%B5%E8%A7%86.assets/image-20211218114841912.png)

## passwall

trojan-go://1992919@zecdn.tk:443/?sni=zecdn.tk&type=ws&host=zecdn.tk&path=%2Fzewebsocket&encryption=none#zecdn.tk

trojan-go://1992919@zetor.ml:443/?sni=zetor.ml&type=ws&host=zetor.ml&path=%2Fzewebsocket&encryption=none#zetor.ml

trojan-go://1992919@162.159.204.212:443/?sni=zecdn.tk&type=ws&host=zecdn.tk&path=%2Fzewebsocket&encryption=none#162.159.204.212

trojan-go://1992919@2a06:98c1:3121:a3f6:4384:cf33:3031:5ee9:443/?sni=zecdn.tk&type=ws&host=zecdn.tk&path=%2Fzewebsocket&encryption=none#2a06:98c1:3121:a3f6:4384:cf33:3031:5ee9

trojan-go://1992919@2606:4700:83b9:700d:c277:9911:6ad2:31fc:443/?sni=zecdn.tk&type=ws&host=zecdn.tk&path=%2Fzewebsocket&encryption=none#2606:4700:83b9:700d:c277:9911:6ad2:31fc

vmess://eyJ2IjoiMiIsInBzIjoidjJyLWhlcm8iLCJhZGQiOiIyNjA2OjQ3MDA6ODNiOTo3MDBkOmMyNzc6OTkxMTo2YWQyOjMxZmMiLCJwb3J0IjoiNDQzIiwiaWQiOiJhZDgwNjQ4Ny0yZDI2LTQ2MzYtOThiNi1hYmNkY2M4NTIxZjciLCJob3N0IjoiemVjZG4ubWwiLCJwYXRoIjoiLyIsIm5ldCI6IndzIiwic2VjdXJpdHkiOiJhdXRvIiwidGxzIjoidGxzIiwic25pIjoiemVjZG4ubWwifQ==

trojan-go://1992919@2606:4700:83b9:700d:c277:9911:6ad2:31fc:443/?sni=zecdn.gq&type=ws&host=zecdn.gq&path=%2Fzewebsocket&encryption=none#oracle-2606:4700:83b9:700d:c277:9911:6ad2:31fc



## adh

![image-20211218114940424](./Openwrt&%E7%94%B5%E8%A7%86.assets/image-20211218114940424.png)

```
bind_host: 0.0.0.0
bind_port: 3000
beta_bind_port: 0
users:
- name: root
  password: $2y$10$tf9yPgZz2Alq6IAo0n70eeIavkCi1gTaEHjZMAmhMyH5BWevrFjsi
auth_attempts: 5
block_auth_min: 15
http_proxy: ""
language: zh-cn
debug_pprof: false
web_session_ttl: 720
dns:
  bind_hosts:
  - 0.0.0.0
  port: 5553
  statistics_interval: 1
  querylog_enabled: true
  querylog_file_enabled: true
  querylog_interval: 6h
  querylog_size_memory: 1000
  anonymize_client_ip: false
  protection_enabled: true
  blocking_mode: default
  blocking_ipv4: ""
  blocking_ipv6: ""
  blocked_response_ttl: 10
  parental_block_host: family-block.dns.adguard.com
  safebrowsing_block_host: standard-block.dns.adguard.com
  ratelimit: 0
  ratelimit_whitelist: []
  refuse_any: true
  upstream_dns:
  - 211.142.211.124
  - 111.8.14.18
  - 223.5.5.5
  - 8.8.8.8
  - tcp://223.5.5.5
  - tcp://223.6.6.6
  - tcp://8.8.4.4
  - https://1.1.1.1/dns-query
  - https://1.0.0.1/dns-query
  - tls://dns.google:853
  - 2400:3200::1
  - 240c::6666
  - 2001:4860:4860::8888
  upstream_dns_file: ""
  bootstrap_dns:
  - 114.114.114.114:53
  - 8.8.8.8:53
  - 223.5.5.5:53
  - 180.76.76.76:53
  - 2001:4860:4860::8888
  - 2620:fe::10
  - 2620:fe::fe:10
  all_servers: true
  fastest_addr: false
  fastest_timeout: 1s
  allowed_clients: []
  disallowed_clients: []
  blocked_hosts:
  - version.bind
  - id.server
  - hostname.bind
  trusted_proxies:
  - 127.0.0.0/8
  - ::1/128
  cache_size: 8388608
  cache_ttl_min: 10
  cache_ttl_max: 86400
  cache_optimistic: false
  bogus_nxdomain: []
  aaaa_disabled: false
  enable_dnssec: true
  edns_client_subnet: false
  max_goroutines: 300
  ipset: []
  filtering_enabled: true
  filters_update_interval: 24
  parental_enabled: false
  safesearch_enabled: false
  safebrowsing_enabled: false
  safebrowsing_cache_size: 1048576
  safesearch_cache_size: 1048576
  parental_cache_size: 1048576
  cache_time: 30
  rewrites: []
  blocked_services: []
  upstream_timeout: 10s
  local_domain_name: lan
  resolve_clients: true
  use_private_ptr_resolvers: true
  local_ptr_upstreams: []
tls:
  enabled: false
  server_name: ""
  force_https: false
  port_https: 443
  port_dns_over_tls: 853
  port_dns_over_quic: 784
  port_dnscrypt: 0
  dnscrypt_config_file: ""
  allow_unencrypted_doh: false
  strict_sni_check: false
  certificate_chain: ""
  private_key: ""
  certificate_path: ""
  private_key_path: ""
filters:
- enabled: false
  url: http://sub.adtchrome.com/adt-chinalist-easylist.txt
  name: 广告终结者使用的拦截规则，基于ChinaList&EasyList修正维护
  id: 139789181
- enabled: false
  url: https://easylist-downloads.adblockplus.org/easylist.txt
  name: EasyList-去除国际网页中大多数广告，包括不需要的框架、图像和对象
  id: 139789112
- enabled: false
  url: https://easylist-downloads.adblockplus.org/easylistchina.txt
  name: EasyList China-EasyList针对国内的补充规则
  id: 139789121
- enabled: false
  url: https://anti-ad.net/easylist.txt
  name: anti-AD命中率最高列表
  id: 139789122
- enabled: false
  url: https://gitee.com/halflife/list/raw/master/ad.txt
  name: halflife合并乘风
  id: 139789131
- enabled: true
  url: https://easylist.to/easylist/easyprivacy.txt
  name: EasyPrivacy隐私相关
  id: 139789132
- enabled: false
  url: https://www.i-dont-care-about-cookies.eu/abp/
  name: I don't care about cookies隐私相关
  id: 139789133
- enabled: false
  url: https://raw.githubusercontent.com/BlueSkyXN/AdGuardHomeRules/master/all.txt
  name: 百万ADH广告拦截过滤规则
  id: 139789141
- enabled: false
  url: https://raw.githubusercontent.com/jerryn70/GoodbyeAds/master/Hosts/GoodbyeAds-Ultra.txt
  name: GoodbyeAds 大全去广告
  id: 139789142
- enabled: true
  url: https://gist.githubusercontent.com/Ewpratten/a25ae63a7200c02c850fede2f32453cf/raw/b9318009399b99e822515d388b8458557d828c37/hosts-yt-ads
  name: YouTube-去广告
  id: 139789143
- enabled: false
  url: https://raw.githubusercontent.com/Goooler/1024_hosts/master/hosts
  name: 1024host
  id: 139789151
- enabled: false
  url: https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=1&mimetype=plaintext
  name: Peter Lowe’s Ad and tracking server list​
  id: 139789152
- enabled: false
  url: https://easylist.to/easylist/fanboy-social.txt
  name: Fanboy's Social Blocking List
  id: 139789153
- enabled: false
  url: https://easylist.to/easylist/fanboy-annoyance.txt
  name: Fanboy's Annoyance List
  id: 139789154
- enabled: false
  url: https://secure.fanboy.co.nz/fanboy-cookiemonster.txt
  name: EasyList Cookie List
  id: 139789155
- enabled: false
  url: https://fanboy.co.nz/fanboy-antifacebook.txt
  name: Anti-Facebook List
  id: 139789161
- enabled: true
  url: https://filters.adtidy.org/extension/ublock/filters/14.txt
  name: AdGuard Annoyances filter
  id: 139789162
- enabled: false
  url: https://www.malwaredomainlist.com/hostslist/hosts.txt
  name: MalwareDomainList.com Hosts List
  id: 139789163
- enabled: false
  url: https://www.fanboy.co.nz/enhancedstats.txt
  name: Fanboy's Enhanced Tracking List
  id: 139789164
- enabled: true
  url: https://filters.adtidy.org/extension/ublock/filters/3.txt
  name: AdGuard Tracking Protection filter
  id: 139789165
- enabled: false
  url: https://easylist.to/easylist/easylist.txt
  name: EasyList
  id: 139789171
- enabled: true
  url: https://filters.adtidy.org/extension/ublock/filters/11.txt
  name: AdGuard Mobile Ads filter
  id: 139789172
- enabled: true
  url: https://filters.adtidy.org/extension/ublock/filters/2_without_easylist.txt
  name: AdGuard Base filter
  id: 139789173
- enabled: false
  url: https://easylist-downloads.adblockplus.org/antiadblockfilters.txt
  name: Adblock Warning Removal List
  id: 139789174
- enabled: false
  url: https://fanboy.co.nz/fanboy-problematic-sites.txt
  name: Fanboy's problematic-sites
  id: 139789175
- enabled: false
  url: https://raw.githubusercontent.com/adbyby/xwhyc-rules/master/lazy.txt
  name: Adbyby Lazy Rule
  id: 139789182
- enabled: false
  url: https://raw.githubusercontent.com/VeleSila/yhosts/master/hosts.txt
  name: hosts
  id: 139789183
- enabled: false
  url: https://gitlab.com/xuhaiyang1234/AAK-Cont/raw/master/FINAL_BUILD/aak-cont-list-notubo.txt
  name: aak-cont-list-notubo
  id: 139789184
- enabled: false
  url: https://adaway.org/hosts.txt
  name: Adaway HOST
  id: 139789187
- enabled: true
  url: https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/rule.txt
  name: 乘风 广告过滤规则
  id: 1639281510
- enabled: false
  url: https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/mv.txt
  name: 乘风 视频过滤规则
  id: 1639281511
- enabled: true
  url: https://filters.adtidy.org/extension/ublock/filters/17.txt
  name: AdGuard URL Tracking filter
  id: 1639281513
- enabled: true
  url: https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjx-annoyance.txt
  name: CJX's Annoyance List
  id: 1639281514
- enabled: true
  url: https://filters.adtidy.org/extension/ublock/filters/224.txt
  name: AdGuard Chinese filter
  id: 1639402249
- enabled: true
  url: https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/hosts.txt
  name: NoCoin Filter List
  id: 1639402251
- enabled: true
  url: https://filters.adtidy.org/extension/ublock/filters/7.txt
  name: AdGuard Japanese filter
  id: 1639402252
- enabled: true
  url: https://raw.githubusercontent.com/jiange1236/miTVhosts-for-adh/master/hosts
  name: miTVhosts
  id: 1639496128
whitelist_filters: []
user_rules:
- '@@||taobao.com^$important'
- '@@||tmall.com^$important'
- '@@||jd.com^important'
- '@@||flyme.cn^$important'
- '@@||meizu.com^$important'
- '@@||flydigi.com^'
- '@@||pv.sohu.com^$important'
- '@@||000714.xyz^'
- '@@||blueskyxn.com^'
- '@@||analytics.google.com^'
- '@@||analytics.twitter.com^'
- '@@||azure.com^'
- '@@||microsoft.com^'
- '@@||gstatic.com^'
- '@@||windows.com^'
- '@@||live.com^'
- '@@||google-analytics.com^'
- '@@||maccms.com^'
- '@@||gvt2.com^'
- '@@||googleapis.com^'
- '@@||www.paypalobjects.com^'
- '@@||paypal.com^'
- '@@||amazon.com^'
- '@@||ad.jp^'
- '@@||tagtic.cn^'
- '@@||knet.cn^'
- '@@||anquan.org^'
- '@@||hanada.info^'
- '@@||moonbbs.com^'
- '@@||weiming.info^'
- '@@||disqus.com^'
- '@@||referrer.disqus.com^'
- '@@||go.rakuten.com^'
- '@@||fvs.io^'
- '@@||ssl.p.jwpcdn.com'
- '@@||c3pool.com^'
- '@@||bankcomm.com^'
- '@@||cmbchina.com^'
- ""
dhcp:
  enabled: false
  interface_name: ""
  dhcpv4:
    gateway_ip: ""
    subnet_mask: ""
    range_start: ""
    range_end: ""
    lease_duration: 86400
    icmp_timeout_msec: 1000
    options: []
  dhcpv6:
    range_start: ""
    lease_duration: 86400
    ra_slaac_only: false
    ra_allow_slaac: false
clients: []
log_compress: false
log_localtime: false
log_max_backups: 0
log_max_size: 100
log_max_age: 3
log_file: ""
verbose: false
os:
  group: ""
  user: ""
  rlimit_nofile: 0
schema_version: 12

```

## SSH

根据韩风大佬的视频整理的笔记，方便记忆，原视频地址：https://www.bilibili.com/video/BV1hT4y1E78k

因为前期创建zerotier账号并加入设备较简单，这里不再做记录，有需要的可以参考原视频，或这里，

https://gitee.com/xiaominglei001/forMarkdown/raw/master/FireShot Capture 044 - 20210412150410.png (1275×8773) - gitee.com.png

补充：

最好选择private加入，否则30天不登录会被删除。

目前我的：e4da7455b20b4ea6

![img](./Openwrt&%E7%94%B5%E8%A7%86.assets/aed40a1d-18d8-4a85-b808-51ae3eca2ea0.png)

![img](./Openwrt&%E7%94%B5%E8%A7%86.assets/f246539a-9236-465b-941c-fc3d0284b97c.png)

![img](./Openwrt&%E7%94%B5%E8%A7%86.assets/821eab95-9461-4cf4-91a7-b83add3a9ddf.png)

![img](./Openwrt&%E7%94%B5%E8%A7%86.assets/7ae57cb6-645a-4d6e-8b19-bb56bd16c0d9.png)

三行举例：应该每个networkID其z开头的这串字母是固定的

![img](./Openwrt&%E7%94%B5%E8%A7%86.assets/e2f1bdb1-98a0-428e-9ac0-380e8a92bb13.png)

![img](./Openwrt&%E7%94%B5%E8%A7%86.assets/553bbe27-b3ec-4c72-afe9-4e7707e2fb8b.png)

![img](./Openwrt&%E7%94%B5%E8%A7%86.assets/966087b4-c53e-4848-a8a3-903ae43d64bb.png)

![img](./Openwrt&%E7%94%B5%E8%A7%86.assets/1490e63c-e1c8-4aee-880d-5995fa6c38dc.png)

![img](./Openwrt&%E7%94%B5%E8%A7%86.assets/c93a809b-b792-4b6f-9aec-ba6fb82a43ee.png)

要连openwrt里的SSH最好用putty或者shell，不要用访问openwrt网页然后用其网页里的TTYD访问其SSH的方式，因为很可能访问不到。

## DDNSTO

OpenWrt固件开发者众多，部分固件不自带ddnsto，可通过以下任一脚本轻松安装：

via curl

```text
sh -c "$(curl -sSL http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh)"
```

via wget

```text
sh -c "$(wget --no-check-certificate -qO- http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh)"
```

others

```text
cd /tmp; wget --no-check-certificate http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh; sh ./install_ddnsto.sh
```

在OpenWrt TTYD终端中输入任一上述命令，会自动安装完成。

![image-2021022400000003](https://doc.linkease.com/assets/img/image-2021022400000003.536613b5.png)

![image-2021022400000004](./Openwrt&%E7%94%B5%E8%A7%86.assets/image-2021022400000004.13ea60fa.png)

或者putty、MobaXterm等软件登陆SSH，输入任一上述命令，会自动安装完成。

![image-2021022400000005](https://doc.linkease.com/assets/img/image-2021022400000005.6379d721.png)

![image-2021022400000006](./Openwrt&%E7%94%B5%E8%A7%86.assets/image-2021022400000006.d94bda31.png)

![image-2021022400000007](https://doc.linkease.com/assets/img/image-2021022400000007.90bb45d5.png)

然后找到DDNS.to内网穿透，启用并设置token。

![image-2021022400000008](./Openwrt&%E7%94%B5%E8%A7%86.assets/image-2021022400000008.c70860e9.png)

**Openwrt 常见问题解决思路**

*安装好ddnsto之后无法启用配置

因为 Openwrt 15 版本跟最新的插件不兼容导致，解决办法尝试一：

```text
/etc/init.d/ddnsto disable
/etc/init.d/ddnsto enable
```

如果不行则尝试二：重启路由器

## 全能推送（Pushbot）

https://www.right.com.cn/forum/thread-4051426-1-1.html

项目地址：https://github.com/zzsj0928/luci-app-pushbot

## Tailscale

```
opkg update
opkg install tailscale
tailscale up
```

开启子路由

https://tailscale.com/kb/1019/subnets/?q=subnet

```
tailscale up --advertise-routes=192.168.2.0/24
```

Linux开启接受子路由

```
tailscale up --accept-routes
```

## Vsftpd

/etc/vsftpd.conf

```
background=YES
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
```

允许匿名访问

```undefined
chown root:nogroup /mnt/mmcblk0p3/
chmod 557 /mnt/mmcblk0p3/
```

启动vsftpd

```bash
/etc/init.d/vsftpd restart
```

杀掉vsftpd进程

```bash
kill-9 PID
```

## TTYD终端

```
opkg install ttyd
```

## Transmission

```
opkg install transmission-daemon
opkg install transmission-cli
opkg install transmission-web
opkg install transmission-remote
opkg install transmission-web-control
opkg install luci-app-transmission
```

随系统启动`/etc/init.d/transmission enable` ,

启动`/etc/init.d/transmission start`,
停止`/etc/init.d/transmission stop`，

状态`/etc/init.d/transmission status`

注意，配置文件在`cat /etc/config/transmission`，

你需要修改`config_dir`目录: /mnt/mmcblk0p3/transmission

`download_dir`目录: /mnt/mmcblk0p3/transmission/done

`incomplete_dir`目录: /mnt/mmcblk0p3/transmission/incomplete

有一个`option enabled 0`的选项，你要把它改为`option enabled 1`

## qBittorrent

https://op.supes.top/packages/aarch64_generic/

rblibtorrent

qt5-core

qt5-network

qt5-sql

qt5-xml

qBittorrent-Enhanced-Edition

luci-app-qbittorrent

**IP子网**

192.168.1.0/24
10.147.17.0/24
100.0.0.0/8

## Watchcat

watchcat

luci-app-watchcat

luci-i18n-watchcat-zh-cn

## 高级设置

https://op.dllkids.xyz/packages/aarch64_generic/

luci-app-advanced_1.20-26_all

**hosts**

```
13.107.21.200 www.bing.com
13.107.21.200 cn.bing.com
13.107.21.200 bing.com
```

# 猫影视

https://gitea.com/AYOM/zhou/

https://gitea.com/wuzang/mm

https://us-oss.9t.ee/Cat/api.html

源：

http://fj365.ml/m.json

emotn分享码

123456	666888	129915	aaa123



https://post.smzdm.com/p/aen2z7g4/

https://post.smzdm.com/p/aoowqow7/

https://post.smzdm.com/p/a99vlpmp/



# R2S设置

## 系统

### 管理权

**SSH访问**

接口：zerotier / Tailscale

端口：22

密码验证：√

允许 root 用户凭密码登录：√

网关端口：√

### 定时重启

启用：√

星期：星期一

小时：4

分钟：30

## 服务

### Passwall

**DNS**

过滤模式：pdnsd 通过TCP节点请求DNS

远程DNS：1.1.1.1

缓存解析结果：√

**模式**

TCP 默认代理模式：GFW列表

UDP 默认代理模式：不代理 

路由器自身 TCP 代理模式：与 TCP 默认代理模式相同 

路由器自身 UDP 代理模式：与 UDP 默认代理模式相同

**自动切换**

启用：√

TCP 恢复：√

**规则管理**

开启自动更新规则：√

更新时间星期：每天

更新时间小时：0点

**规则列表**

```
sspanel.net
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
xiaoz.org

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
```

**服务器端**

启用：√

端口：10801

### DDNS.to内网穿透

令牌：9113bfe9-6ef2-4f4f-9bad-ec2d85e06171

### MosDNS

启用：√

MosDNS 配置文件：选择内置预设 

日志等级：error

MosDNS 日志文件：/dev/null

启用 DNS 重定向： √

启用 DNS 广告过滤：√

```
log:
  level: error
  file: ""

plugin:
  - tag: main_server
    type: server
    args:
      entry:
        - _no_ecs
        - lazy_cache
        - _prefer_ipv4
        - _single_flight
        - main_sequence
      server:
        - protocol: udp
          addr: ":5335"
        - protocol: tcp
          addr: ":5335"

  - tag: main_sequence
    type: sequence
    args:
      exec:
        - if:
            - query_is_whitelist_domain
          exec:
            - forward_local
            - _return
        - if:
            - query_is_ad_domain
            - qtype65
          exec:
            - _block_with_nxdomain
            - _return
        - if:
            - query_is_local_domain
            - "!_query_is_common"
          exec:
            - forward_local
            - _return
        - if:
            - query_is_non_local_domain
          exec:
            - forward_remote
            - _return
        - primary:
            - forward_local
            - if:
                - "!response_has_local_ip"
              exec:
                - _drop_response
          secondary:
            - forward_remote
          fast_fallback: 150
          always_standby: true

  - tag: forward_local
    type: fast_forward
    args:
      upstream:
        - addr: "tls://211.142.211.124"
        - addr: "tls://1.2.4.8"
        - addr: "tls://111.8.14.18"
        - addr: "tls://223.5.5.5"

  - tag: query_is_whitelist_domain
    type: query_matcher
    args:
      domain:
        - "ext:./whitelist.txt"

  - tag: forward_remote
    type: fast_forward
    args:
      upstream:
        - addr: "tls://8.8.4.4"
        - addr: "tls://9.9.9.9"

  - tag: lazy_cache
    type: cache
    args:
      size: 512000
      lazy_cache_ttl: 259200

  - tag: query_is_local_domain
    type: query_matcher
    args:
      domain:
        - "ext:/usr/share/v2ray/geosite.dat:cn"

  - tag: query_is_non_local_domain
    type: query_matcher
    args:
      domain:
        - "ext:/usr/share/v2ray/geosite.dat:geolocation-!cn"

  - tag: response_has_local_ip
    type: response_matcher
    args:
      ip:
        - "ext:/usr/share/v2ray/geoip.dat:cn"

  - tag: query_is_ad_domain
    type: query_matcher
    args:
      domain:
        - "ext:./serverlist.txt"

  - tag: qtype65
    type: query_matcher
    args:
      qtype: [65]
```



### 全能推送

**基本设置**

启用 ： √

推送模式：钉钉 

Webhook：7002438326f5a29c3c8fcf6fa5d1e8ac8bfe21bd96b6a9db8394730604092e2f

企业微信：2487f18f-5c86-493a-b85d-c68cf4d2ec8c

本设备名称：ZeR2S

设备别名：

46:60:08:50:e5:1b-DMIG.PC

64:A2:00:59:CC:BE-LSR.Note9

28:6C:07:2B:9A:32-Mi.Cooker

54:EF:44:25:3A:42-Mi.Gateway

40:31:3C:BD:FC:02-Mi.Lamp

50:EC:50:91:94:4F-Mi.Plug-desk

5c:02:14:b1:b5:d6-Mi.WiFi

04:cf:8c:19:65:4d-Mi.Air-Child

50:2D:BB:06:E9:75-Midea.Washer

38:D2:CA:DC:B8:04-Tmall.Genie

A4:02:B9:DE:46:71-Ze.Lap

28:16:7F:3A:03:BF-Ze.Note8

46:9a:00:9d:f5:85-Ze.Lap-z0

02:11:32:1f:38:6c-ZeNas

46:26:98:f8:d3:79-ZeNas-z0

1c:9e:46:3e:fd:a0-LSR.iPad

46:19:2f:6b:81:e3-PP.R2S

**推送内容**

设备上线通知：√

设备下线通知：√

CPU 负载报警：√

负载报警阈值：2

CPU 温度报警：√

温度报警阈值：80

Web 登录提醒：√

SSH 登录提醒：√

Web 错误尝试提醒：√

SSH 错误尝试提醒：√

错误尝试次数：3

**免打扰**

免打扰时段设置：模式一：脚本挂起

免打扰开始时间：每天1点

免打扰结束时间：每天6点 

MAC过滤：忽略列表内设备 

忽略列表：BE:96:14:10:EE:19 (ZeR2S.lan)

### 解除网易云音乐播放限制

启用本插件：√

启用本插件以解除网易云音乐播放限制

启用本地 VIP：√

启用无损音质：√

启用自动更新：√

检查更新时间：3:00

### KMS服务器

启用：√

自动激活局域网客户端：√

### ZeroTier

启用：√

ZeroTier Network ID：8bd5124fd6f3b844

自动允许客户端NAT：√

### 终端

启用：√

端口：7681

接口：@lan

### 通用即插即用（UPnP）

**MiniUPnP 设置**

启动 UPnP 与 NAT-PMP 服务：√

启用 UPnP 功能：√

启用 NAT-PMP 功能：√

启用安全模式：√

启用 IGDv1 模式：√

**MiniUPnP 访问控制列表**

|       备注       |  外部端口  | 内部地址  |  内部端口  | 操作  |
| :--------------: | :--------: | :-------: | :--------: | :---: |
| Allow high ports | 1024-65535 | 0.0.0.0/0 | 1024-65535 | allow |
|   Default deny   |  0-65535   | 0.0.0.0/0 |  0-65535   | deny  |

### Watchcat

模式：重启实例

周期：5m

要检查的主机：1.2.4.8

检查间隔：30s

接口：未指定

ModemManager 接口的名称：wan

## 网络存储

### qBittorrent

启用：√

端口：8080

配置文件目录：/etc

下载目录：/mnt/mmcblk0p3

## 网络

### 接口

#### 接口

**tailscale**

设备：tailscale0

设备:tailscale0

开机自动运行：√

IPv4 地址：100.127.234.123

IPv4 子网掩码：255.255.255.255

防火墙区域：lan

**lan**

RA 服务：混合模式

DHCPv6 服务：混合模式

本地 IPV6 DNS 服务器：□

**wan**

设备：eth1

PAP/CHAP 用户名：731X12966710

PAP/CHAP 密码：023150

**zerotier**

设备：ztyqb6d54s

#### 全局网络选项

IPv6 ULA 前缀：

### DHCP/DNS

#### 高级设置

过滤 IPv6 记录：□

#### 静态地址分配

| 主机名  |     MAC 地址      |   IPv4 地址   | 租期 |         DUID         | IPv6 后缀（十六进制） |           |
| :-----: | :---------------: | :-----------: | :--: | :------------------: | :-------------------: | :-------: |
| MiWiFi  | 5C:02:14:B1:B5:D6 | 192.168.2.176 | 12h  |         *无*         |         *无*          | ☰编辑删除 |
| ZeNote8 | 28:16:7F:3A:03:BF | 192.168.2.227 | 12h  |         *无*         |         *无*          | ☰编辑删除 |
|  ZeNas  | 02:11:32:1F:38:6C | 192.168.2.110 | 12h  | 000300010211321f386c |         *无*          | ☰编辑删除 |

### 防火墙

iptables -I FORWARD -i ztyqb6d54s -j ACCEPT
iptables -I FORWARD -o ztyqb6d54s -j ACCEPT
iptables -t nat -I POSTROUTING -o ztyqb6d54s -j MASQUERADE

iptables -I FORWARD -i tailscale0 -j ACCEPT
iptables -I FORWARD -o tailscale0 -j ACCEPT
iptables -t nat -I POSTROUTING -o tailscale0 -j MASQUERADE

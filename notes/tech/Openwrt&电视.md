---
title: Openwrt&电视
date: 2025/05/14
category:
tags: 
article: true
---
# Openwrt&电视

[TOC]

## Openwrt

### OPKG

原版

```
src/gz openwrt_core https://dl.openwrt.ai/23.05/targets/mediatek/mt7622/5.15.147
src/gz openwrt_base https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/base
src/gz openwrt_packages https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/packages
src/gz openwrt_luci https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/luci
src/gz openwrt_routing https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/routing
src/gz openwrt_kiddin9 https://dl.openwrt.ai/23.05/packages/aarch64_cortex-a53/kiddin9
```

查找大文件

```
find / -type f -size +5120b
```

定制软件包

```context
luci-app-wechatpush luci-app-smartdns luci-app-watchcat luci-app-tailscale luci-app-ttyd luci-app-ddns luci-app-ap-modem luci-app-turboacc tailscale smartdns watchcat ttyd ddns wireguard-tools kmod-wireguard
coreutils-base64 ipset libipset13 iputils-arping jq bash libreadline8 ip-full ddns-scripts ddns-scripts-services ddns-scripts-aliyun bind-host bind-libs libatomic1 libuv1 openssl-util libopenssl-conf ddns-scripts-dnspod ddns-scripts-cloudflare libwebsockets-full libcap v2ray-core v2raya luci-app-v2raya
syscontrol advancedplus
```

**备份软件包列表**

SSH登录到OpenWrt，并执行如下命令，备份当前已安装的软件包列表。

```
opkg list-installed | cut -f 1 -d ' ' > /etc/config/packages.list
```

保存路径为 `/etc/config` ，可以在系统更新后仍保留下来。

在更新完系统后，再次SSH登录到OpenWrt，执行如下命令，可以批量安装备份下来的软件包。（执行前记得要确保已经联网并更新过lists哈）

```
opkg update
cat /etc/config/packages.list | opkg install
```

### R2S

https://github.com/fanck0605/openwrt-nanopi-r2s

https://github.com/fanck0605/friendlywrt-nanopi-r2s

https://github.com/klever1988/nanopi-openwrt

https://github.com/kiddin9/OpenWrt_x86-r2s-r4s

https://github.com/QiuSimons/YAOF

https://github.com/DHDAXCW/NanoPi-R2S

#### 分流设置

分流参考文章

https://github.com/felix-fly/v2ray-dnsmasq-dnscrypt?tab=readme-ov-file

https://github.com/pymumu/smartdns/issues/1022

https://zeeko.dev/2022/09/smartdns-with-v2ray-tproxy/

https://xtrojan.pro/bgfw/v2ray/v2ray-dns-streaming.html

一、基本设置

1. 下载页面设置需自动下载的要分流的域名列表文件（也可上传）。(格式为一行一个域名，需要分流的域名)
2. 设置上游服务器，设置国外的DOT，DOH等服务器，并设置`服务器组`：比如oversea。可选勾选‘从默认组中排除’
   也可以设置一个上游服务器，通过代理走转发程序，设置`服务器组`用于专门分流查询，这样查询DNS的出口和数据出口一样，DNS结果的亲和度和更好。
3. 域名规则->域名分流设置：
   - 设置`域名分组`，名称为第二步的名称：比如'oversea'
   - 选择`跳过测速`
   - 选择`停用IPV6地址解析`
   - 选择`域名列表文件`，文件为第一步设置的自动下载的文件，此文件为需要分流的域名列表。
   - 对于临时个别要分流的域名，可以在`域名列表`文本框中输入。

二、最简单的按域名的透明代理：

如果smartdns运行在主路由上，那么可以使用REDIRECT模式对TCP进行透明代理。下面举例对TCP进行透明转发，其中的[ipsetname]是IP集合的名称，比如可以设置`proxy-list`：

1. shell命令，创建ipset集合
   `ipset create proxy-list hash:net timeout 600`
2. shell命令，iptable设置对应ipset集合中域名的TCP请求使用TPROXY重定向转发到本机2018的转发程序。
   `iptables -t nat -I PREROUTING -p tcp -m set --match-set proxy-list dst -j REDIRECT --to-ports 2018`
3. smartdns设置页面的`域名分流设置`->`ipset名称`设置为上述步骤中[ipsetname]的名称，比如`proxy-list`
4. 在主路由的2018端口，开启REDIRECT模式的转发程序。
5. 应用smartdns设置。
6. 结束。

对于udp，nfttable也是类似的步骤，上述透明代理github上有现成的脚本，PW也有类似的能力，只要选择好转发模式，和设置好正确的ipset名称或nftset名称即可。

原理上，smartdns和转发软件的结合点，为ipset名称或nftset名称，那两个参数和转发软件匹配就可以做到按需转发。
dnsmasq也是类似的工作方式。

**删除规则**

`iptables -t nat -D PREROUTING -p tcp -m set --match-set proxy-list dst -j REDIRECT --to-ports 2018`

#### GeoSite\GeoIP

geoip.dat 所有类别：https://github.com/Loyalsoldier/geoip/tree/release/text

原本 geosite.dat 类别：https://github.com/v2fly/domain-list-community/tree/master/data

### 广告规则

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

#### 安卓

https://raw.githubusercontent.com/banbendalao/ADgk/master/ADgk.txt

### AdGuard Home

最近128m的小闪存运行AdGuardHome几天后，空间就爆了，改成只记录一天的日志还是爆，后来发现即使设置成一天，AdGuardHome也不是覆写，而是把旧的日志文件重命名继续保存了。
所以用到了以下代码，自动删除旧的日志文件。直接计划任务里面添加以下代码

```
50 5 * * * [ -f /etc/AdGuardHome/data/querylog.json.1 ] && rm /etc/AdGuardHome/data/querylog.json.1
```

我的路由器AdGuardHome的日志是默认保存在/etc/AdGuardHome/data/目录中的querylog.json文件。如果你设置日志保存时间为3天，那么3天后AdGuardHome其实并不会把日志删除，而是把当前的querylog.json改成querylog.json.1，然后再生成新的querylog.json记录日志。
此代码就是，每天的5点50分，检测是否存在querylog.json.1，存在就会删除它。这样在闪存空间有限的情况下，得以保留AdGuardHome的日志记录功能。

```
[/csdn.net/]quic://dns.alidns.com
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
## Cloudflare DNS
1.1.1.1
2606:4700:4700::1111
https://dns.cloudflare.com/dns-query
tls://1dot1dot1dot1.cloudflare-dns.com
## Google DNS
8.8.8.8
2001:4860:4860::8888
https://dns.google/dns-query
tls://dns.google
h3://dns.google/dns-query
## OpenDNS
tls://dns.opendns.com
https://doh.opendns.com/dns-query
## NextDNS
tls://dns.nextdns.io
https://dns.nextdns.io/dns-query
quic://dns.nextdns.io
h3://dns.nextdns.io/dns-query
```

我的路由器AdGuardHome的日志是默认保存在/etc/AdGuardHome/data/目录中的querylog.json文件。如果你设置日志保存时间为3天，那么3天后AdGuardHome其实并不会把日志删除，而是把当前的querylog.json改成querylog.json.1，然后再生成新的querylog.json记录日志。
此代码就是，每天的5点50分，检测是否存在querylog.json.1，存在就会删除它。这样在闪存空间有限的情况下，得以保留AdGuardHome的日志记录功能。

### SSH

根据韩风大佬的视频整理的笔记，方便记忆，原视频地址：https://www.bilibili.com/video/BV1hT4y1E78k

因为前期创建zerotier账号并加入设备较简单，这里不再做记录，有需要的可以参考原视频，或这里，

https://gitee.com/xiaominglei001/forMarkdown/raw/master/FireShot Capture 044 - 20210412150410.png (1275×8773) - gitee.com.png

补充：

最好选择private加入，否则30天不登录会被删除。

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

### DDNSTO

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

### DDNS

**防火墙设置**

名称 DDNS

协议 TCP UDP

源区域 **wan**

目标区域 **lan**

目标地址  `::0000:0000:0000:0001`

目标端口 80

操作 接受

地址族限制 仅 IPv6

**区域**

wan → REJECT 接受入站

### 全能推送（Pushbot）

https://www.right.com.cn/forum/thread-4051426-1-1.html

项目地址：https://github.com/zzsj0928/luci-app-pushbot

### 微信推送（wechatpush）

pushplus_token `5dfff495415c445e8466c3f894d926f2`

### Tailscale

```
opkg update
opkg install tailscale
tailscale up --accept-dns=false 
```

**开启子路由**

https://tailscale.com/kb/1019/subnets/?q=subnet

```
tailscale up --advertise-routes=10.0.0.0/24 --accept-routes  --accept-dns=false
```

1. 接口创建 `Tailscale`不配置协议，防火墙创建 `Tailscale`，保存并应用
2. 防火墙 `Tailscale`区域设置，全部接受，开启IP 动态伪装、MSS 钳制，允许转发到 `Lan`、`Wan`，允许源区域 `Lan`，

**确认并启用 WireGuard 内核模块 (最重要的优化)**
 
- **原理：** Tailscale 可以使用两种模式运行：用户空间模式（userspace mode）和内核模式（kernel mode）。内核模式利用 Linux 内核内置的 WireGuard 模块，性能远高于用户空间模式，因为它减少了数据在内核空间和用户空间之间的复制，并且通常能更好地利用硬件特性。

- **检查：** 登录 OpenWrt 的 SSH，运行 `tailscale status`。查看输出信息，或者检查 Tailscale 的日志 (`logread | grep tailscale`)，看是否有关于使用内核模块或用户空间模式的信息。较新版本的 Tailscale 可能会明确指出。也可以通过查看是否有 `wg0` (或其他 `wgX`) 的内核网络接口来判断 (`ip link show type wireguard`)。

- **启用：**
   - 确保已安装 WireGuard 内核模块：`opkg update && opkg install kmod-wireguard wireguard-tools`
   - 重启 Tailscale 服务：`/etc/init.d/tailscale restart`
   - 如果 Tailscale 之前因为缺少内核模块而运行在用户空间模式，安装模块并重启服务后，它应该会自动切换到内核模式。

### Vsftpd

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

### TTYD终端

```
opkg install ttyd
```

### Transmission

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

### qBittorrent

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

### Watchcat

watchcat

luci-app-watchcat

luci-i18n-watchcat-zh-cn

### 高级设置

https://op.dllkids.xyz/packages/aarch64_generic/

luci-app-advanced_1.20-26_all

**hosts**

```
13.107.21.200 www.bing.com
13.107.21.200 cn.bing.com
13.107.21.200 bing.com

## Cloudflare
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
```

### 系统更新

值守式系统升级 attendedsysupgrade

非定制固件升级 gpsysupgrade

## V2raya

v2raya根本就没有带v2ray-core核心的任何文件, 因此会报错缺少geosite.dat, geoip.dat.
其根本原因是缺少了整个v2ray核心.

安装v2ray-core插件即可

指定v2ray binary path为 `/usr/bin/v2ray`

规则列表文件路径：`/usr/share/v2ray`

附加配置目录:`/etc/v2raya/ext`v2ray-ext.json

```
{"inbounds":[{"port":2018,"protocol":"dokodemo-door","listen":"0.0.0.0","sniffing":{"enabled":false,"metadataOnly":false},"settings":{"network":"tcp","followRedirect":true},"streamSettings":null,"tag":"redirect"}],"routing":{"rules":[{"type":"field","balancerTag":"proxy","inboundTag":["redirect"]}]}}
```

### Cloudflare优选IP

https://github.com/yonggekkk/openwrt_win64-ddns-cdnip

## V2ray

https://github.com/felix-fly/v2ray-dnsmasq-dnscrypt?tab=readme-ov-file

## R2S设置

### 系统

#### 管理权

**SSH访问**

接口：zerotier / Tailscale

端口：22

密码验证：√

允许 root 用户凭密码登录：√

网关端口：√

#### 定时重启

启用：√

星期：星期一

小时：4

分钟：30

#### 计划任务

```
30 5 * * * /etc/init.d/tailscale restart && /etc/init.d/smartdns restart
0 5 * * 6 sleep 30 && touch /etc/banner && reboot
0 5 * * 0 /etc/init.d/smartdns updatefiles
0 3 * * * cd /root/cfipopw/ && bash cdnip.sh
```

### 服务

#### Passwall

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
ip-api.com

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
```

**服务器端**

启用：√

端口：10801

#### DDNS.to内网穿透

令牌：9113bfe9-6ef2-4f4f-9bad-ec2d85e06171

#### MosDNS

启用：√

MosDNS 配置文件：选择内置预设 

日志等级：error

MosDNS 日志文件：/dev/null

启用 DNS 重定向： √

启用 DNS 广告过滤：√

**卸载**

曾经安装过其他版本的 MosDNS LuCI 或使用的固件自带了 MosDNS，安装后可能无法正常运行，你需要先将其它来源的版本卸载并清除数据残留后再装才能使用。

解决方法：

1、卸载包含 **mosdns** 字符的所有软件包
2、删除数据 `rm -rf /etc/config/mosdns /etc/mosdns`
3、重新安装 mosdns

#### 全能推送

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

#### 解除网易云音乐播放限制

启用本插件：√

启用本插件以解除网易云音乐播放限制

启用本地 VIP：√

启用无损音质：√

启用自动更新：√

检查更新时间：3:00

#### KMS服务器

启用：√

自动激活局域网客户端：√

#### ZeroTier

启用：√

ZeroTier Network ID：8bd5124fd6f3b844

自动允许客户端NAT：√

#### 终端

启用：√

端口：7681

接口：@lan

#### 通用即插即用（UPnP）

**MiniUPnP 设置**

启动 UPnP 与 NAT-PMP 服务：√

启用 UPnP 功能：√

启用 NAT-PMP 功能：√

启用安全模式：√

启用 IGDv1 模式：√

**MiniUPnP 访问控制列表**

| 备注               | 外部端口       | 内部地址      | 内部端口       | 操作    |
|:----------------:|:----------:|:---------:|:----------:|:-----:|
| Allow high ports | 1024-65535 | 0.0.0.0/0 | 1024-65535 | allow |
| Default deny     | 0-65535    | 0.0.0.0/0 | 0-65535    | deny  |

#### Watchcat

模式：重启实例

周期：5m

要检查的主机：1.2.4.8

检查间隔：30s

接口：未指定

ModemManager 接口的名称：wan

### 网络存储

#### qBittorrent

启用：√

端口：8080

配置文件目录：/etc

下载目录：/mnt/mmcblk0p3

### 网络

#### 接口

##### 接口

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

**zerotier**

设备：ztyqb6d54s

##### 全局网络选项

IPv6 ULA 前缀：
~~fdc0:0e88:a625::/48~~

#### DHCP/DNS

##### 高级设置

过滤 IPv6 记录：□

##### 静态地址分配

| 主机名     | MAC 地址            | IPv4 地址       | 租期  | DUID                 | IPv6 后缀（十六进制） |       |
|:-------:|:-----------------:|:-------------:|:---:|:--------------------:|:-------------:|:-----:|
| MiWiFi  | 5C:02:14:B1:B5:D6 | 192.168.2.176 | 12h | *无*                  | *无*           | ☰编辑删除 |
| ZeNote8 | 28:16:7F:3A:03:BF | 192.168.2.227 | 12h | *无*                  | *无*           | ☰编辑删除 |
| ZeNas   | 02:11:32:1F:38:6C | 192.168.2.110 | 12h | 000300010211321f386c | *无*           | ☰编辑删除 |

#### 防火墙

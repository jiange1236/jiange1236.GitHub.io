---
title: OpenWRT 分流DNS的设置
date: 2022-09-18
category:
  - 计算机
tag:
  - 计算机
  - Openwrt
article: true
source: https://github.com/luckyyyyy/blog/issues/57#issue-1198960406
---

目前还是有许多人喜欢设置DNS，虽然会浪费一些转发性能，但如果明白其中的链路关系，合理设置后，还是能起到不错的效果的。同时也把正确的设置方式告诉大家。

此教程基于当前路由是主路由，如果是旁路由虽差不多，但有一些差异，需要格外注意。

同时请注意，删除你电脑，手机上的DNS（不要设置任何DNS）

## 注意事项

建议小白用户使用 Clash 更稳定且方便 此教程仅针对有特殊需求的用户

## 涉及到的组件

- Passwall
- AdGuard Home（可选）
- Dnsmasq （无需进行任何设置）
- SmartDNS （分流+主DNS服务器）

## AdGuard Home（可选）

主要是起到记录的作用，对需要查看记录的同学有帮助，至于DNS广告屏蔽，虽然有用但会误伤，慎重选择。
同时由于记录文件较大，请一定要注意`把记录时间改小，或者设置到有足够空间的目录中，否则会导致时间久了将磁盘撑满`

- 配置上游DNS为127.0.0.1
- 设置重定向53端口到AdGuardHome，如果使用了lean大佬的固件，请在防火墙，自定义规则中删除添加的两条53端口重定向规则（大部分人都使用了lean的固件）

注意：设置了重定向后，所有DNS结果都将应答非权威记录，如果不了解DNS协议请无视，这条并不会影响什么。

## SmartDNS

主要用于分流和DNS查询，国外走 Cloudflare DNS ove TLS/HTTPS ，国内延迟优先（但可能影响P2P下载，实测实际还好）。

- 启用第一组服务器，选择作为dnsmasq上游，其余默认配置即可。

- 启用第二组服务器，端口7913，跳过测速，跳过Nameserver规则（非常重要，否则会死循环），跳过双栈优选，跳过cache，其余设置保持默认。

- 配置上游服务器，

  ```
  部分设置要填写后点编辑才能看到
  ```

  。

  - 国内上游填写你的运营商，额外填写一些国内常用的，例如阿里云，DNSPod等等，可以参考文末的配置，分组信息填写cn。
  - 国外上游填写1.1.1.1端口853，协议填写tls，分组信息填写passwall，额外的服务参数填写 -exclude-default-group

## Passwall

- DNS分流 smartdns
- 国内分组名 cn
- 过滤模式 通过UDP请求DNS 127.0.0.1:7913

## Dnsmasq

无需任何设置，如果有设置请改回，除了上游服务器是127.0.0.1:6053。

## 一些配置

smartdns 部分直接 vim 编辑 /etc/config/smartdns 照抄即可，无需手动设置，配置完记得界面上点击保存应用，或者uci命令刷新配置，我里面有杭州电信的DNS服务器，不是杭州的记得自己改掉，否则可能有负面效果。

```
config smartdns
	option server_name 'smartdns'
	option port '6053'
	option tcp_server '1'
	option seconddns_tcp_server '1'
	option coredump '0'
	option seconddns_server_group 'passwall'
	option seconddns_no_speed_check '1'
	option seconddns_no_dualstack_selection '1'
	option prefetch_domain '1'
	option ipv6_server '0'
	option force_aaaa_soa '1'
	option dualstack_ip_selection '1'
	option serve_expired '1'
	option redirect 'dnsmasq-upstream'
	option rr_ttl_min '300'
	option seconddns_port '7913'
	option seconddns_enabled '1'
	option seconddns_no_rule_nameserver '1'
	option seconddns_no_rule_addr '0'
	option seconddns_no_rule_soa '0'
	option seconddns_no_rule_ipset '0'
	option cache_size '300'
	option seconddns_no_cache '1'
	option enabled '1'
	list old_redirect 'dnsmasq-upstream'
	list old_port '6053'
	list old_enabled '1'

config server
	option name 'aliyun'
	option ip '223.5.5.5'
	option port '53'
	option type 'udp'
	option blacklist_ip '0'
	option server_group 'cn'
	option enabled '1'

config server
	option name '114'
	option ip '114.114.114.114'
	option port '53'
	option type 'udp'
	option blacklist_ip '0'
	option server_group 'cn'
	option enabled '1'

config server
	option enabled '1'
	option type 'udp'
	option name '电信'
	option ip '202.101.172.35'
	option port '53'
	option server_group 'cn'
	option blacklist_ip '0'

config server
	option enabled '1'
	option type 'udp'
	option name '电信'
	option ip '202.101.172.47'
	option port '53'
	option server_group 'cn'
	option blacklist_ip '0'

config server
	option type 'udp'
	option port '53'
	option name 'DNSPod'
	option ip '119.29.29.29'
	option blacklist_ip '0'
	option server_group 'cn'
	option enabled '1'

config server
	option enabled '1'
	option name 'cloud'
	option ip '1.1.1.1'
	option port '853'
	option type 'tls'
	option server_group 'passwall'
	option blacklist_ip '0'
	option addition_arg ' -exclude-default-group'

config server
	option enabled '1'
	option type 'udp'
	option name 'CNNIC SDNS'
	option ip '1.2.4.8'
	option port '53'
	option server_group 'cn'
	option blacklist_ip '0'
```

## 如何验证？

登录路由器 使用 dig 或者 nslookup 检查下各端口的DNS以及分流情况

```
nslookup www.taobao.com 127.0.0.1:7913 返回的是节点对应淘宝最快的IP
nslookup www.taobao.com 127.0.0.1:6053 返回的是国内最快的IP
nslookup www.taobao.com 应该是国内
```

注：如果手动查询规则列表内的域名，使用端口6053，然后匹配规则，转发给7913，然后被缓存住。（国外因为跳过测速，所以多个域名是正确的）


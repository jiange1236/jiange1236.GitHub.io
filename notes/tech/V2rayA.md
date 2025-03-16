---
date: 2022-05-14
---

## RoutingA

```
default: direct
## Write your own rules below
## domain(geosite:geolocation-!cn) -> proxy
## ip(geoip:hk, geoip:mo) -> proxy

source(100.0.0.0/8) -> direct
port(6881-6889) -> direct
sourcePort(6881-6889) -> direct
domain(geosite:cn) -> direct
ip(geoip:private, geoip:cn) -> direct
domain(geosite:category-scholar-!cn, geosite:category-scholar-cn) -> direct
## domain(ext:"LoyalsoldierSite.dat:china-list", ext:"LoyalsoldierSite.dat:cn") -> direct

## domain(geosite:google-scholar) -> proxy
## domain(geosite:google, geosite:github, geosite:facebook, geosite:greatfire) -> proxy
domain(regexp: v2ray.*) -> proxy
domain(regexp: v2fly.*) -> proxy
domain(domain: singlelogin.se) -> proxy
domain(contains: zlibrary) -> proxy
domain(contains: z-library) -> proxy
domain(geosite:z-library) -> proxy
domain(ext:"LoyalsoldierSite.dat:gfw") -> proxy

## domain(geosite:category-ads) -> block
## domain(ext:"LoyalsoldierSite.dat:category-ads-all") -> block

domain(geosite:category-porn, geosite:javdb) -> proxy
domain(regexp: thz.*) -> proxy
domain(regexp: porn.*) -> proxy
domain(regexp: btsow.*) -> proxy
domain(domain: taohuaimg.com) -> proxy
domain(regexp: bisi.*) -> proxy
domain(regexp: madouqu.*) -> proxy
domain(domain: u3c3.com, domain: u9a9.cc) -> proxy
```

## GeoIP、GeoSite

### GeoIP

源文件：https://github.com/v2fly/geoip

### GeoSite

源文件：https://github.com/v2fly/domain-list-community

### Loyalsoldier

#### GeoIP

geoip.dat 所有类别：https://github.com/Loyalsoldier/geoip/tree/release/text

- 新增类别（方便有特殊需求的用户使用）：
  - `geoip:cloudflare`
  - `geoip:cloudfront`
  - `geoip:facebook`
  - `geoip:fastly`
  - `geoip:google`
  - `geoip:netflix`
  - `geoip:telegram`
  - `geoip:twitter`

#### GeoSite

 geosite.dat 类别：https://github.com/v2fly/domain-list-community/tree/master/data

新增类别（方便有特殊需求的用户使用）：

- `geosite:gfw`
- `geosite:china-list`：包含 [@felixonmars/dnsmasq-china-list/accelerated-domains.china.conf](https://github.com/felixonmars/dnsmasq-china-list/blob/master/accelerated-domains.china.conf) 文件里的域名，供有特殊 DNS 分流需求的用户使用。
- `geosite:apple-cn`：包含 [@felixonmars/dnsmasq-china-list/apple.china.conf](https://github.com/felixonmars/dnsmasq-china-list/blob/master/apple.china.conf) 文件里的域名，供希望 Apple 域名直连（不走代理）的用户使用。
- `geosite:google-cn`：包含 [@felixonmars/dnsmasq-china-list/google.china.conf](https://github.com/felixonmars/dnsmasq-china-list/blob/master/google.china.conf) 文件里的域名，供希望 Google 域名直连（不走代理）的用户使用。

- [**慎用**]`geosite:win-spy`：包含 [@crazy-max/WindowsSpyBlocker/hosts/spy.txt](https://github.com/crazy-max/WindowsSpyBlocker/blob/master/data/hosts/spy.txt) 文件里的域名，供希望屏蔽 Windows 操作系统隐私跟踪域名的用户使用。
- [**慎用**]`geosite:win-update`：包含 [@crazy-max/WindowsSpyBlocker/hosts/update.txt](https://github.com/crazy-max/WindowsSpyBlocker/blob/master/data/hosts/update.txt) 文件里的域名，供希望屏蔽 Windows 操作系统自动升级的用户使用。
- [**慎用**]`geosite:win-extra`：包含 [@crazy-max/WindowsSpyBlocker/hosts/extra.txt](https://github.com/crazy-max/WindowsSpyBlocker/blob/master/data/hosts/extra.txt) 文件里的域名，供希望屏蔽 Windows 操作系统附加隐私跟踪域名的用户使用。


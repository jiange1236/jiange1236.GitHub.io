---
date: 2022-05-14
---

https://zh.wikipedia.org/zh/Wikipedia:%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%8B%B7%E8%B4%9D%E7%BD%91%E7%AB%99](https://zh.wikipedia.org/zh/Wikipedia:维基百科拷贝网站)

https://zh.wikipedia.wikimirror.org/wiki

https://wiwiki.kfd.me

https://zh.wikiredia.com

https://www.wanweibaike.com

https://chi.jinzhao.wiki

https://zh.wikipedia.iwiki.eu.org

https://bk.tw.lvfukeji.com

https://zh.iwiki.ml

https://zh.wikipedia.ryancray.com

https://wiki.comptechs.cn

https://kxxtwikid.herokuapp.com

**在所有之前的**

 **声明：**本文仅为丰富知识的交流与学习途径，我不提供除 Wikipedia 以外的其他网站指导。

 请勿在中国大陆公网上公开自己搭建的反代站点，你可能会有随时遭到审查的风险。如果您因为此种原因导致种种问题，我不负任何责任。

 使用本文所描述的方法，你可以访问 Wikipedia 的所有站点、登录并编辑。那么，让我们开始吧。 

 **Wikipedia 全域恢复访问指南**

 你还可以参考 [神代綺凜 - 真·反代P站恢复直接访问指南](https://moe.best/technology/pixiv-proxy.html) 及 [Mashiro - PIXIV网页版及客户端访问恢复指南](https://2heng.xin/2017/09/19/pixiv/)，站在巨人的肩膀上才能手抵星辰。

 **注意：**下文提到的演示站点所使用的配置已经和本文所描述的有**巨大**差别，但本文依然是可用的方法之一。

 **准备工作**

 网络环境良好的主机或 VPS

 可自由设置 DNS 解析记录的域名

 与域名相符并支持通配符的 SSL 证书

在后文中，均以example.com作为示例来反代访问 Wikipedia。

 演示站：https://www.wikimirror.org。

**注意：**请勿在中国大陆公网上公开我搭建的演示站点，这是小众网站。因为众所周知的原因，我希望它能长久地存活下去，所以请不要将其公之于众。让需要的人自己去发现，我想这种方式更好一些。

 **需要使用的域及其 DNS 解析记录**

 你需要添加以下域的 DNS 解析记录：

 example.com（可选） *.example.com *.m.example.com

 example.com

用以跳转主站www.example.com

 *.example.com

用以反代对齐主站及各个语言分站*.wikipedia.org

 *.m.example.com

用以反代对齐各个语言分站移动版*.m.wikipedia.org

 **开始配置工作** 

下文仅列出反代所需的关键配置，其他内容请根据自己的实际情况调整。

 对于 Nginx 的编译、安装及相关配置方法，SSL 证书的相关配置方法，均可以参考[本站的 Nginx 配置](https://blog.sukiu.net/p/better-nginx.html)，对于 SSL 证书的申请方法，可以参考 [Deepzz - acme.sh 自动更新 RSA、ECC 双证书实践](https://deepzz.com/post/acmesh-letsencrypt-cert-auto-renew.html)。

 **Nginx 服务器的配置**

 将以下内容灵活替换后作为 Nginx 的虚拟主机文件，这里使用example.com作为示例。

```
resolver  8.8.8.8 ipv6=on;

server {
    listen       80;
    listen       [::]:80;
    listen       443 ssl http2;
    listen       [::]:443 ssl http2;
    server_name  ~^(?<subdomain>(login|login\.m))\.example\.com$;
    add_header   AnYi-Mirror-Site-Public "Config modified at 2020-11-18";

    #阻止搜索引擎蜘蛛收录站点，建议在每个 server 块中加入。
    if ($http_user_agent ~* "Bot|Spider|Barkrowler|BingPreview|Feedfetcher-Google|ia_archiver|libwww-perl|MBCrawler|Mediapartners-Google|MSNot-media|Python|Teoma|Yahoo! Slurp|^$") {
        return 444;
    }

    location / {
        proxy_pass             https://$subdomain.wikimedia.org;
        proxy_cookie_domain    login.wikimedia.org login.example.com;
        proxy_cookie_domain    login.m.wikimedia.org login.m.example.com;
        proxy_cookie_domain    wikipedia.org example.com;
        proxy_redirect         ~^http(s)?://(login|login\.m)\.wikimedia\.org/(.*)$ http$1://$2.example.com/$3;
        proxy_redirect         ~^http(s)?://([a-z-]+(\.m)?)\.wikipedia\.org/(.*)$ http$1://$2.example.com/$4;
        proxy_set_header       Accept-Encoding "";
        proxy_set_header       Host $subdomain.wikimedia.org;
        proxy_set_header       Referer https://$proxy_host$request_uri;
        sub_filter             "login.wikimedia.org" "login.example.com";
        sub_filter             "login.m.wikimedia.org" "login.m.example.com";
        sub_filter             ".wikipedia.org" ".example.com";
        sub_filter_once        off;
        sub_filter_types       *;
    }
}

server {
    listen       80;
    listen       [::]:80;
    listen       443 ssl http2;
    listen       [::]:443 ssl http2;
    server_name  ~^(?<subdomain>[^.]+(\.m)?\.)?example\.com$;
    add_header   AnYi-Mirror-Site-Public "Config modified at 2020-11-18";

    location / {
        proxy_pass             https://${subdomain}wikipedia.org;
        proxy_cookie_domain    login.wikimedia.org login.example.com;
        proxy_cookie_domain    login.m.wikimedia.org login.m.example.com;
        proxy_cookie_domain    wikipedia.org example.com;
        proxy_redirect         ~^http(s)?://(login|login\.m)\.wikimedia\.org/(.*)$ http$1://$2.example.com/$3;
        proxy_redirect         https://${subdomain}wikipedia.org/ https://${subdomain}example.com/;
        proxy_redirect         ~^http(s)?://([a-z-]+(\.m)?)\.wikipedia\.org/(.*)$ http$1://$2.example.com/$4;
        proxy_set_header       Accept-Encoding "";
        proxy_set_header       Host ${subdomain}wikipedia.org;
        proxy_set_header       Referer https://$proxy_host$request_uri;
        sub_filter             "login.wikimedia.org" "login.example.com";
        sub_filter             "login.m.wikimedia.org" "login.m.example.com";
        sub_filter             ".wikipedia.org" ".example.com";
        sub_filter_once        off;
        sub_filter_types       *;
    }
}
```

以上配置应用后，访问www.example.com即可看到 Wikipedia 主站首页。

**使用 Cloudflare 等 CDN 服务隐藏真实 IP**

使用 Cloudflare 等 CDN 服务可以隐藏真实 IP 并可以不用在意源服务器是否支持 HTTPS，但请注意，Cloudflare 是不支持泛域名下的 CDN 记录的，这意味着只能手动或使用 API 去添加所需站点的 DNS 解析记录（除主站外，维基百科有多达 298 个语言分站），想完全隐藏真实 IP，需要为每个语言分站添加“桌面版”与“移动版”的DNS解析记录。

如果使用 CDN 服务隐藏真实 IP，需将proxy_hide_header x-client-ip;添加至上述配置的 location 段中。

**写在最后**

授人以鱼不如授人以渔，但如果连鱼都没见过就要另当别论了。本文不是面向初次接触 Nginx 服务器的人而写的，如果照搬照抄，Nginx 服务器可是会丢你 Error 的（笑

我所做的只是一个抛砖引玉的工作，你可以利用这种方法，恢复访问 Wikibooks、Google Scholar 或是 Pixiv 等其他网站。

如果你恰巧阅读到了这篇指南，并有通过搜索引擎解决不了的问题，请使用邮件与我联系。

**本文头图：**[ほぼゆかれいむ](https://pic.sukiu.net/image/mANC)

本文由 [安忆](https://blog.sukiu.net/author/1/) 发表，全文共计 875 字

本站文章均采用 [知识共享署名4.0](https://creativecommons.org/licenses/by/4.0/) 国际许可协议进行许可，转载前请务必署名

最后编辑时间为：2020 年 11 月 18 日 20 时 50 分

本文二维码
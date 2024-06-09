---
date: 2024-06-01
created: 2024-03-07
tags: []
source: https://blog.misaka.rest/2023/07/31/yx-cf-proxy-ip/?highlight=%E5%8F%8D%E4%BB%A3
---

# 优选 CF 的反代 IP | MisakaNo の 小破站

> ## Excerpt
> 在目前，由于优选 CF 的 IP 已被越来越多人滥用，导致某国防火墙已经开始重点关照。这时候我们就得找一些官方未公开的 IP 进行优选。不过，有些 IP 应该是为了某些服务，把自己反代到 CF 的服务器上，所以说我们得到了反代的 CF 的 IP 地址。幸运的是，经过某大佬的扫描和整理，我们可以得到了一些反代了 CF 的 IP 地址列表。这篇文章中我来和大家一起来教大家如何优选 CF 的反代 IP。

---
在目前，由于优选 CF 的 IP 已被越来越多人滥用，导致某国防火墙已经开始重点关照。这时候我们就得找一些官方未公开的 IP 进行优选。不过，有些 IP 应该是为了某些服务，把自己反代到 CF 的服务器上，所以说我们得到了反代的 CF 的 IP 地址。幸运的是，经过某大佬的扫描和整理，我们可以得到了一些反代了 CF 的 IP 地址列表。这篇文章中我来和大家一起来教大家如何优选 CF 的反代 IP。

## [](https://blog.misaka.rest/2023/07/31/yx-cf-proxy-ip/?highlight=%E5%8F%8D%E4%BB%A3#%E5%87%86%E5%A4%87%E6%9D%90%E6%96%99 "准备材料")准备材料

-   CloudFlareST 优选程序
-   CF 的反代 IP

## [](https://blog.misaka.rest/2023/07/31/yx-cf-proxy-ip/?highlight=%E5%8F%8D%E4%BB%A3#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9 "注意事项")注意事项

请勿滥用！

## [](https://blog.misaka.rest/2023/07/31/yx-cf-proxy-ip/?highlight=%E5%8F%8D%E4%BB%A3#%E4%BC%98%E9%80%89%E6%AD%A5%E9%AA%A4 "优选步骤")优选步骤

1.  打开 [https://zip.baipiao.eu.org](https://zip.baipiao.eu.org/) ，下载大佬每日更新的反代 CF 的 IP 列表

[![](https://imgs.misaka.cloudns.biz/20230801113749.png)](https://imgs.misaka.cloudns.biz/20230801113749.png)

2.  在这里可以看到有根据 IP 的 ASN 和地区来排列的列表 txt 文件

[![](https://imgs.misaka.cloudns.biz/20230801113848.png)](https://imgs.misaka.cloudns.biz/20230801113848.png)

> 文件名格式：`ASN(或地区)-0/1-端口号.txt`

3.  将反代 CF 的 IP 覆盖 CloudFlareST 优选程序的 `ip.txt` 文件中。注意不要留空行

[![](https://imgs.misaka.cloudns.biz/20230801114050.png)](https://imgs.misaka.cloudns.biz/20230801114050.png)

4.  在优选程序的目录下，打开命令行。然后使用以下命令进行优选

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>.\CloudflareST.exe -tp 端口 -url https://hkcs01.cloudflarest.link -sl 3 -tl 200 -dn 5</span><br></pre></td></tr></tbody></table>

> 可以根据自己的实际需要，修改运行命令的参数（详情可看 CloudFlareST 项目的 README）

5.  稍等片刻，可以看到优选程序此时已经优选出速度优质的反代 CF 的 IP 了。

[![](https://imgs.misaka.cloudns.biz/20230801114836.png)](https://imgs.misaka.cloudns.biz/20230801114836.png)

版权声明: 本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议。转载请注明来自 [MisakaNo の 小破站](https://blog.misaka.rest/)！

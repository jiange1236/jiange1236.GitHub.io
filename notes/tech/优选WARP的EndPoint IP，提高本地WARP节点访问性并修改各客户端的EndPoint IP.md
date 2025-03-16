---
date: 2023-09-11
---

---
created: 2023-08-26
tags: []
source: https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp
---

## 优选WARP的EndPoint IP，提高本地WARP节点访问性并修改各客户端的EndPoint IP | MisakaNo の 小破站

> ### Excerpt
> 在之前的博客教程中，我们提到了如何使用CloudFlare WARP客户端。不过官方的客户端的体验在中国大陆来说比较差。而提取出来的WireGuard配置文件中，自己寻找可用的EndPoint IP又是一件很麻烦的事情。在这期文章中，我们主要来解决两个问题：一是优选出可用的WARP EndPoint IP并应用到WireGuard的节点；二是将优选的IP应用到官方客户端  推荐 https://b

---
在之前的博客教程中，我们提到了如何使用CloudFlare WARP客户端。不过官方的客户端的体验在中国大陆来说比较差。而提取出来的WireGuard配置文件中，自己寻找可用的EndPoint IP又是一件很麻烦的事情。在这期文章中，我们主要来解决两个问题：一是优选出可用的WARP EndPoint IP并应用到WireGuard的节点；二是将优选的IP应用到官方客户端

> 推荐 [https://blog.misaka.rest/2023/02/08/cf-warp/](https://blog.misaka.rest/2023/02/08/cf-warp/) 和 [https://blog.misaka.rest/2023/01/25/wireguard-warp/](https://blog.misaka.rest/2023/01/25/wireguard-warp/) 这两篇文章一起看，效果最佳

### [](https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp#%E5%87%86%E5%A4%87%E6%9D%90%E6%96%99 "准备材料")准备材料

-   提取的WARP的WireGuard配置
-   官方WARP客户端

### [](https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp#%E4%BC%98%E9%80%89%E6%AD%A5%E9%AA%A4 "优选步骤")优选步骤

注意：请将任何VPN代理软件关闭，否则优选结果有可能不准！！！

#### [](https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp#Windows "Windows")Windows

1.  从这个网站：[https://gitlab.com/Misaka-blog/warp\-script/-/blob/main/files/warp\-yxip/warp\-yxip-win.7z](https://gitlab.com/Misaka-blog/warp-script/-/blob/main/files/warp-yxip/warp-yxip-win.7z) 下载`warp-yxip-win.7z`文件，并解压。如无意外的话文件内容应该是长这样

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001247.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001247.png)

2.  启动`warp-yxip.bat`，选择优选模式（默认为IPv4）

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001317.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001317.png)

3.  等待优选，大约需要1-3分钟

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312172637.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312172637.png)

4.  优选完成后，找到`result.csv`文件，打开。可以看到优选的EndPoint IP是按照丢包率和延迟排列的

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312172753.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312172753.png)

#### [](https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp#Mac-OS "Mac OS")Mac OS

暂无，待补充

#### [](https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp#Linux-%E5%90%84%E5%8F%91%E8%A1%8C%E7%89%88 "Linux 各发行版")Linux 各发行版

1.  进入命令行，复制粘贴以下命令

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>wget -N https://gitlab.com/Misaka-blog/<mark>warp</mark>-script/-/raw/main/files/<mark>warp</mark>-yxip/<mark>warp</mark>-yxip.sh &amp;&amp; bash <mark>warp</mark>-yxip.sh</span><br></pre></td></tr></tbody></table>

2.  选择优选模式（默认为IPv4）

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001632.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001632.png)

3.  等待脚本安装依赖，并优选
4.  脚本会自动显示前10个最优的WARP Endpoint IP

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001706.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001706.png)

#### [](https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp#%E5%AE%89%E5%8D%93-Termux "安卓 Termux")安卓 Termux

1.  安装并打开Termux，复制粘贴以下命令

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>wget -N https://gitlab.com/Misaka-blog/<mark>warp</mark>-script/-/raw/main/files/<mark>warp</mark>-yxip/<mark>warp</mark>-yxip.sh &amp;&amp; bash <mark>warp</mark>-yxip.sh</span><br></pre></td></tr></tbody></table>

2.  选择优选模式（默认为IPv4）

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230528172643.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230528172643.png)

3.  等待脚本安装依赖，并优选
4.  脚本会自动显示前10个最优的WARP Endpoint IP

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001706.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001706.png)

#### [](https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp#%E8%8B%B9%E6%9E%9C-iSH "苹果 iSH")苹果 iSH

1.  安装并打开iSH，输入以下命令

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>apk add -f openssh bash wget</span><br></pre></td></tr></tbody></table>

2.  复制粘贴以下命令

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>wget -N https://gitlab.com/Misaka-blog/<mark>warp</mark>-script/-/raw/main/files/<mark>warp</mark>-yxip/<mark>warp</mark>-yxip.sh &amp;&amp; bash <mark>warp</mark>-yxip.sh</span><br></pre></td></tr></tbody></table>

3.  选择优选模式（默认为IPv4）

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001632.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001632.png)

4.  等待脚本安装依赖，并优选
5.  脚本会自动显示前10个最优的WARP Endpoint IP

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001706.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230328001706.png)

### [](https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp#%E8%8A%82%E7%82%B9%E5%BA%94%E7%94%A8 "节点应用")节点应用

#### [](https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp#WireGuard-%E9%85%8D%E7%BD%AE%E8%8A%82%E7%82%B9 "WireGuard 配置节点")WireGuard 配置节点

将之前的EndPoint IP替换为优选出来的

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312172834.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312172834.png)

#### [](https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp#Windows-WARP-%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF "Windows WARP 官方客户端")Windows WARP 官方客户端

1.  找到CloudFlare WARP官方客户端的安装位置（一般在`C:\Program Files\Cloudflare\Cloudflare WARP`），将博客项目提供的`设置端点.bat`文件复制进来

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312172940.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312172940.png)

2.  打开`设置端点.bat`，输入优选过的EndPoint IP并设置

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312173152.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312173152.png)

3.  重新链接官方WARP客户端，可以看到之前很难连接上的WARP就奇迹般地连上了

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312173210.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230312173210.png)

#### [](https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp#%E5%AE%89%E5%8D%93-WARP-%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%EF%BC%88%E4%BB%85%E9%99%906-9%E5%92%8C6-10%E7%89%88%E6%9C%AC%EF%BC%89 "安卓 WARP 官方客户端（仅限6.9和6.10版本）")安卓 WARP 官方客户端（仅限6.9和6.10版本）

[![](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230528171712.png)](https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230528171712.png)

版权声明: 本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议。转载请注明来自 [MisakaNo の 小破站](https://blog.misaka.rest/)！

___

import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a,o as l}from"./app-Cpja_7Qb.js";const r={};function d(i,e){return l(),n("div",null,e[0]||(e[0]=[a(`<h1 id="肥羊的iptv等直播源代理docker部署教程" tabindex="-1"><a class="header-anchor" href="#肥羊的iptv等直播源代理docker部署教程"><span>肥羊的IPTV等直播源代理Docker部署教程</span></a></h1><blockquote><h2 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt"><span>Excerpt</span></a></h2><p>一、推荐使用 Docker 一键运行，并配置 watchtower 监听 Docker 镜像更新，直接一劳永逸： 1，使用 Docker 一键配置 allinone 1 docker run -d --restart unless-stopped --net=host --privileged=true -p 35455:35455 --name allinone youshandefeiyang/allinone 2，一键配置 watchtower 每天凌晨两点自动监听 allinone 镜像更新，同步 GitHub 仓库： 1 docker run -d --name watchtower --restart unless-stopped -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower allinone -c --schedule &quot;0 0 2 * * *&quot; 3、Docker compose 方式（10 月 26 日修订） 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 version: &quot;3.3&quot; services: allinone: restart: unless-stopped privileged: true ports: - 35455:35455 container_name: allinone image: youshandefeiyang/allinone networks: -------------- version: &quot;3.3&quot; services: av3a-assistant: image: youshandefeiyang/av3a-assistant:amd64 restart: unless-stopped privileged: true ports: - 35442:35442 networks: 二、直接运行： 首先去 action 中下载对应平台二进制执行文件，然后解压并直接执行\\n</p></blockquote><hr><figure><a href="https://blog.ccino.org/p/feiyang-iptv-and-other-live-source-proxy-docker-deployment-tutorial/" target="_blank" rel="noopener noreferrer"><img src="https://blog.ccino.org/p/feiyang-iptv-and-other-live-source-proxy-docker-deployment-tutorial/Feiyang IPTV and other live source proxy Docker deployment tutorial_hu6014416321540110245.png" alt="Featured image of post 肥羊的IPTV等直播源代理Docker部署教程" tabindex="0" loading="lazy"></a><figcaption>Featured image of post 肥羊的IPTV等直播源代理Docker部署教程</figcaption></figure><h2 id="一、推荐使用-docker-一键运行-并配置-watchtower-监听-docker-镜像更新-直接一劳永逸" tabindex="-1"><a class="header-anchor" href="#一、推荐使用-docker-一键运行-并配置-watchtower-监听-docker-镜像更新-直接一劳永逸"><span>一、推荐使用 Docker 一键运行，并配置 watchtower 监听 Docker 镜像更新，直接一劳永逸：</span></a></h2><h3 id="_1-使用-docker-一键配置-allinone" tabindex="-1"><a class="header-anchor" href="#_1-使用-docker-一键配置-allinone"><span>1，使用 Docker 一键配置 allinone</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="_2-一键配置-watchtower-每天凌晨两点自动监听-allinone-镜像更新-同步-github-仓库" tabindex="-1"><a class="header-anchor" href="#_2-一键配置-watchtower-每天凌晨两点自动监听-allinone-镜像更新-同步-github-仓库"><span>2，一键配置 watchtower 每天凌晨两点自动监听 allinone 镜像更新，同步 GitHub 仓库：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="_3、docker-compose-方式-10-月-26-日修订" tabindex="-1"><a class="header-anchor" href="#_3、docker-compose-方式-10-月-26-日修订"><span>3、Docker compose 方式（10 月 26 日修订）</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span> 1
</span><span> 2
</span><span> 3
</span><span> 4
</span><span> 5
</span><span> 6
</span><span> 7
</span><span> 8
</span><span> 9
</span><span>10
</span><span>11
</span><span>12
</span><span>13
</span><span>14
</span><span>15
</span><span>16
</span><span>17
</span><span>18
</span><span>19
</span><span>20
</span><span>21
</span><span>22
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h2 id="二、直接运行" tabindex="-1"><a class="header-anchor" href="#二、直接运行"><span>二、直接运行：</span></a></h2><p>首先去 action 中下载对应平台二进制执行文件，然后解压并直接执行</p><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><p>建议搭配进程守护工具进行使用，windows 直接双击运行！</p><h2 id="三、详细使用方法" tabindex="-1"><a class="header-anchor" href="#三、详细使用方法"><span>三、详细使用方法</span></a></h2><h2 id="ysptp-和-itv-聚合-m-3-u-获取" tabindex="-1"><a class="header-anchor" href="#ysptp-和-itv-聚合-m-3-u-获取"><span><strong>Ysptp 和 Itv 聚合 M 3 U 获取：</strong></span></a></h2><p><strong>声明：如果你是在公网服务器部署，不愿意开启聚合 TV 直播服务，在运行裸程序或者 Docker 时，加上参数 -tv=false 即可不开启直播服务，具体可<a href="https://t.me/feiyangofficalchannel/922" target="_blank" rel="noopener noreferrer">点击参考命令范例</a></strong></p><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h2 id="bilibili、虎牙、斗鱼、yy-实时-m-3-u-获取" tabindex="-1"><a class="header-anchor" href="#bilibili、虎牙、斗鱼、yy-实时-m-3-u-获取"><span><strong>BiliBili、虎牙、斗鱼、YY 实时 M 3 U 获取：</strong></span></a></h2><h3 id="bilibili-生活" tabindex="-1"><a class="header-anchor" href="#bilibili-生活"><span>BiliBili 生活：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="虎牙一起看" tabindex="-1"><a class="header-anchor" href="#虎牙一起看"><span>虎牙一起看：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="斗鱼一起看" tabindex="-1"><a class="header-anchor" href="#斗鱼一起看"><span>斗鱼一起看：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="yy-轮播" tabindex="-1"><a class="header-anchor" href="#yy-轮播"><span>YY 轮播：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="如果使需要自定义-m-3-u-文件中的前缀域名-可以传入-url-参数-需要注意的是-当域名中含有特殊字符时-需要对链接进行-urlencode-处理" tabindex="-1"><a class="header-anchor" href="#如果使需要自定义-m-3-u-文件中的前缀域名-可以传入-url-参数-需要注意的是-当域名中含有特殊字符时-需要对链接进行-urlencode-处理"><span>如果使需要自定义 M 3 U 文件中的前缀域名，可以传入 url 参数（需要注意的是，当域名中含有特殊字符时，需要对链接进行 urlencode 处理）：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h2 id="抖音" tabindex="-1"><a class="header-anchor" href="#抖音"><span><strong>抖音：</strong></span></a></h2><h3 id="默认最高画质-浏览器打开并复制-live-douyin-com-http-live-douyin-com-linkify-plus-plus-xxxxxx-只需要复制后面的-xxxxx-即可-可选-flv-和-hls-两种种流媒体传输方式-默认-flv" tabindex="-1"><a class="header-anchor" href="#默认最高画质-浏览器打开并复制-live-douyin-com-http-live-douyin-com-linkify-plus-plus-xxxxxx-只需要复制后面的-xxxxx-即可-可选-flv-和-hls-两种种流媒体传输方式-默认-flv"><span>默认最高画质，浏览器打开并复制 <code>([live.douyin.com/](http://live.douyin.com/ &quot;Linkify Plus Plus&quot;))xxxxxx</code>，只需要复制后面的 xxxxx 即可（可选 flv 和 hls 两种种流媒体传输方式，默认 flv）：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h2 id="斗鱼" tabindex="-1"><a class="header-anchor" href="#斗鱼"><span><strong>斗鱼：</strong></span></a></h2><h3 id="_1-可选-m-3-u-8-和-flv-以及-xs-三种流媒体传输方式【-www-douyu-com-xxxxxx-或-www-douyu-com-xx-xx-rid-xxxxxx-默认-flv】" tabindex="-1"><a class="header-anchor" href="#_1-可选-m-3-u-8-和-flv-以及-xs-三种流媒体传输方式【-www-douyu-com-xxxxxx-或-www-douyu-com-xx-xx-rid-xxxxxx-默认-flv】"><span>1，可选 m 3 u 8 和 flv 以及 xs 三种流媒体传输方式【 <code>(www.douyu.com/)xxxxxx 或 (www.douyu.com/xx/xx?rid=)xxxxxx</code>，默认 flv】：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h2 id="bilibili-live-bilibili-com-xxxxxx" tabindex="-1"><a class="header-anchor" href="#bilibili-live-bilibili-com-xxxxxx"><span><strong>BiliBili <code>(live.bilibili.com/)xxxxxx</code>：</strong></span></a></h2><h3 id="_1-平台-platform-参数选择-默认-web-如果有问题-可以切换-h-5-平台" tabindex="-1"><a class="header-anchor" href="#_1-平台-platform-参数选择-默认-web-如果有问题-可以切换-h-5-平台"><span>1，平台 platform 参数选择（默认 web，如果有问题，可以切换 h 5 平台）：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span><span>2
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="_2-线路-line-参数选择-默认线路二-如果卡顿-看不了-请切换线路一或者三-一般直播间只会提供两条线路-所以建议线路一-二之间切换" tabindex="-1"><a class="header-anchor" href="#_2-线路-line-参数选择-默认线路二-如果卡顿-看不了-请切换线路一或者三-一般直播间只会提供两条线路-所以建议线路一-二之间切换"><span>2，线路 line 参数选择（默认线路二，如果卡顿 / 看不了，请切换线路一或者三，一般直播间只会提供两条线路，所以建议线路一 / 二之间切换）：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span><span>2
</span><span>3
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="_3-画质-quality-参数选择-默认原画-可以看什么画质去直播间看看-能选什么画质就能加什么参数-参数错误一定不能播放" tabindex="-1"><a class="header-anchor" href="#_3-画质-quality-参数选择-默认原画-可以看什么画质去直播间看看-能选什么画质就能加什么参数-参数错误一定不能播放"><span>3，画质 quality 参数选择（默认原画，可以看什么画质去直播间看看，能选什么画质就能加什么参数，参数错误一定不能播放）：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span><span>2
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="_4-最后的代理链接示例" tabindex="-1"><a class="header-anchor" href="#_4-最后的代理链接示例"><span>4，最后的代理链接示例：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h2 id="虎牙-huya-com-xxxxxx" tabindex="-1"><a class="header-anchor" href="#虎牙-huya-com-xxxxxx"><span><strong>虎牙 <code>(huya.com/)xxxxxx</code>：</strong></span></a></h2><h3 id="_1-查看可用-cdn" tabindex="-1"><a class="header-anchor" href="#_1-查看可用-cdn"><span>1，查看可用 CDN：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="_2-切换媒体类型-默认-flv-可选-flv、hls" tabindex="-1"><a class="header-anchor" href="#_2-切换媒体类型-默认-flv-可选-flv、hls"><span>2，切换媒体类型（默认 flv，可选 flv、hls）：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="_3-切换-cdn-默认-hwcdn-可选-hycdn、alicdn、txcdn、hwcdn、hscdn、wscdn-具体可先访问-1-获取" tabindex="-1"><a class="header-anchor" href="#_3-切换-cdn-默认-hwcdn-可选-hycdn、alicdn、txcdn、hwcdn、hscdn、wscdn-具体可先访问-1-获取"><span>3，切换 CDN（默认 hwcdn，可选 hycdn、alicdn、txcdn、hwcdn、hscdn、wscdn，具体可先访问 1 获取）：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h3 id="_4-最后的代理链接示例-1" tabindex="-1"><a class="header-anchor" href="#_4-最后的代理链接示例-1"><span>4，最后的代理链接示例：</span></a></h3><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h2 id="youtube" tabindex="-1"><a class="header-anchor" href="#youtube"><span><strong>YouTube:</strong></span></a></h2><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span><span>2
</span><span>3
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h2 id="yy-默认最高画质-参数为-4" tabindex="-1"><a class="header-anchor" href="#yy-默认最高画质-参数为-4"><span><strong>YY（默认最高画质，参数为 4）:</strong></span></a></h2><table><tbody><tr><td><pre tabindex="0"><code><span>1
</span><span>2
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table><h2 id="更多平台后续会酌情添加" tabindex="-1"><a class="header-anchor" href="#更多平台后续会酌情添加"><span>更多平台后续会酌情添加</span></a></h2>`,59)]))}const p=t(r,[["render",d],["__file","肥羊的IPTV等直播源代理Docker部署教程.html.vue"]]),c=JSON.parse('{"path":"/tech/%E8%82%A5%E7%BE%8A%E7%9A%84IPTV%E7%AD%89%E7%9B%B4%E6%92%AD%E6%BA%90%E4%BB%A3%E7%90%86Docker%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.html","title":"肥羊的IPTV等直播源代理Docker部署教程","lang":"zh-CN","frontmatter":{"date":"2025-01-23T00:00:00.000Z","created":"2024-11-27T00:00:00.000Z","tags":[],"source":"https://blog.ccino.org/p/feiyang-iptv-and-other-live-source-proxy-docker-deployment-tutorial/","description":"肥羊的IPTV等直播源代理Docker部署教程 Excerpt 一、推荐使用 Docker 一键运行，并配置 watchtower 监听 Docker 镜像更新，直接一劳永逸： 1，使用 Docker 一键配置 allinone 1 docker run -d --restart unless-stopped --net=host --privileg...","head":[["meta",{"property":"og:url","content":"https://jiange1236.github.io/tech/%E8%82%A5%E7%BE%8A%E7%9A%84IPTV%E7%AD%89%E7%9B%B4%E6%92%AD%E6%BA%90%E4%BB%A3%E7%90%86Docker%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"Zeblog"}],["meta",{"property":"og:title","content":"肥羊的IPTV等直播源代理Docker部署教程"}],["meta",{"property":"og:description","content":"肥羊的IPTV等直播源代理Docker部署教程 Excerpt 一、推荐使用 Docker 一键运行，并配置 watchtower 监听 Docker 镜像更新，直接一劳永逸： 1，使用 Docker 一键配置 allinone 1 docker run -d --restart unless-stopped --net=host --privileg..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.ccino.org/p/feiyang-iptv-and-other-live-source-proxy-docker-deployment-tutorial/Feiyang%20IPTV%20and%20other%20live%20source%20proxy%20Docker%20deployment%20tutorial_hu6014416321540110245.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-23T11:28:01.000Z"}],["meta",{"property":"article:published_time","content":"2025-01-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-23T11:28:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"肥羊的IPTV等直播源代理Docker部署教程\\",\\"image\\":[\\"https://blog.ccino.org/p/feiyang-iptv-and-other-live-source-proxy-docker-deployment-tutorial/Feiyang%20IPTV%20and%20other%20live%20source%20proxy%20Docker%20deployment%20tutorial_hu6014416321540110245.png\\"],\\"datePublished\\":\\"2025-01-23T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-23T11:28:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zine⁶\\",\\"url\\":\\"https://zecdn.top\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://jiange1236.github.io/atom.xml","title":"Zeblog Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://jiange1236.github.io/feed.json","title":"Zeblog JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://jiange1236.github.io/rss.xml","title":"Zeblog RSS Feed"}]]},"headers":[{"level":1,"title":"肥羊的IPTV等直播源代理Docker部署教程","slug":"肥羊的iptv等直播源代理docker部署教程","link":"#肥羊的iptv等直播源代理docker部署教程","children":[{"level":2,"title":"一、推荐使用 Docker 一键运行，并配置 watchtower 监听 Docker 镜像更新，直接一劳永逸：","slug":"一、推荐使用-docker-一键运行-并配置-watchtower-监听-docker-镜像更新-直接一劳永逸","link":"#一、推荐使用-docker-一键运行-并配置-watchtower-监听-docker-镜像更新-直接一劳永逸","children":[{"level":3,"title":"1，使用 Docker 一键配置 allinone","slug":"_1-使用-docker-一键配置-allinone","link":"#_1-使用-docker-一键配置-allinone","children":[]},{"level":3,"title":"2，一键配置 watchtower 每天凌晨两点自动监听 allinone 镜像更新，同步 GitHub 仓库：","slug":"_2-一键配置-watchtower-每天凌晨两点自动监听-allinone-镜像更新-同步-github-仓库","link":"#_2-一键配置-watchtower-每天凌晨两点自动监听-allinone-镜像更新-同步-github-仓库","children":[]},{"level":3,"title":"3、Docker compose 方式（10 月 26 日修订）","slug":"_3、docker-compose-方式-10-月-26-日修订","link":"#_3、docker-compose-方式-10-月-26-日修订","children":[]}]},{"level":2,"title":"二、直接运行：","slug":"二、直接运行","link":"#二、直接运行","children":[]},{"level":2,"title":"三、详细使用方法","slug":"三、详细使用方法","link":"#三、详细使用方法","children":[]},{"level":2,"title":"Ysptp 和 Itv 聚合 M 3 U 获取：","slug":"ysptp-和-itv-聚合-m-3-u-获取","link":"#ysptp-和-itv-聚合-m-3-u-获取","children":[]},{"level":2,"title":"BiliBili、虎牙、斗鱼、YY 实时 M 3 U 获取：","slug":"bilibili、虎牙、斗鱼、yy-实时-m-3-u-获取","link":"#bilibili、虎牙、斗鱼、yy-实时-m-3-u-获取","children":[{"level":3,"title":"BiliBili 生活：","slug":"bilibili-生活","link":"#bilibili-生活","children":[]},{"level":3,"title":"虎牙一起看：","slug":"虎牙一起看","link":"#虎牙一起看","children":[]},{"level":3,"title":"斗鱼一起看：","slug":"斗鱼一起看","link":"#斗鱼一起看","children":[]},{"level":3,"title":"YY 轮播：","slug":"yy-轮播","link":"#yy-轮播","children":[]},{"level":3,"title":"如果使需要自定义 M 3 U 文件中的前缀域名，可以传入 url 参数（需要注意的是，当域名中含有特殊字符时，需要对链接进行 urlencode 处理）：","slug":"如果使需要自定义-m-3-u-文件中的前缀域名-可以传入-url-参数-需要注意的是-当域名中含有特殊字符时-需要对链接进行-urlencode-处理","link":"#如果使需要自定义-m-3-u-文件中的前缀域名-可以传入-url-参数-需要注意的是-当域名中含有特殊字符时-需要对链接进行-urlencode-处理","children":[]}]},{"level":2,"title":"抖音：","slug":"抖音","link":"#抖音","children":[{"level":3,"title":"默认最高画质，浏览器打开并复制 ([live.douyin.com/](http://live.douyin.com/ \\"Linkify Plus Plus\\"))xxxxxx，只需要复制后面的 xxxxx 即可（可选 flv 和 hls 两种种流媒体传输方式，默认 flv）：","slug":"默认最高画质-浏览器打开并复制-live-douyin-com-http-live-douyin-com-linkify-plus-plus-xxxxxx-只需要复制后面的-xxxxx-即可-可选-flv-和-hls-两种种流媒体传输方式-默认-flv","link":"#默认最高画质-浏览器打开并复制-live-douyin-com-http-live-douyin-com-linkify-plus-plus-xxxxxx-只需要复制后面的-xxxxx-即可-可选-flv-和-hls-两种种流媒体传输方式-默认-flv","children":[]}]},{"level":2,"title":"斗鱼：","slug":"斗鱼","link":"#斗鱼","children":[{"level":3,"title":"1，可选 m 3 u 8 和 flv 以及 xs 三种流媒体传输方式【 (www.douyu.com/)xxxxxx 或 (www.douyu.com/xx/xx?rid=)xxxxxx，默认 flv】：","slug":"_1-可选-m-3-u-8-和-flv-以及-xs-三种流媒体传输方式【-www-douyu-com-xxxxxx-或-www-douyu-com-xx-xx-rid-xxxxxx-默认-flv】","link":"#_1-可选-m-3-u-8-和-flv-以及-xs-三种流媒体传输方式【-www-douyu-com-xxxxxx-或-www-douyu-com-xx-xx-rid-xxxxxx-默认-flv】","children":[]}]},{"level":2,"title":"BiliBili (live.bilibili.com/)xxxxxx：","slug":"bilibili-live-bilibili-com-xxxxxx","link":"#bilibili-live-bilibili-com-xxxxxx","children":[{"level":3,"title":"1，平台 platform 参数选择（默认 web，如果有问题，可以切换 h 5 平台）：","slug":"_1-平台-platform-参数选择-默认-web-如果有问题-可以切换-h-5-平台","link":"#_1-平台-platform-参数选择-默认-web-如果有问题-可以切换-h-5-平台","children":[]},{"level":3,"title":"2，线路 line 参数选择（默认线路二，如果卡顿 / 看不了，请切换线路一或者三，一般直播间只会提供两条线路，所以建议线路一 / 二之间切换）：","slug":"_2-线路-line-参数选择-默认线路二-如果卡顿-看不了-请切换线路一或者三-一般直播间只会提供两条线路-所以建议线路一-二之间切换","link":"#_2-线路-line-参数选择-默认线路二-如果卡顿-看不了-请切换线路一或者三-一般直播间只会提供两条线路-所以建议线路一-二之间切换","children":[]},{"level":3,"title":"3，画质 quality 参数选择（默认原画，可以看什么画质去直播间看看，能选什么画质就能加什么参数，参数错误一定不能播放）：","slug":"_3-画质-quality-参数选择-默认原画-可以看什么画质去直播间看看-能选什么画质就能加什么参数-参数错误一定不能播放","link":"#_3-画质-quality-参数选择-默认原画-可以看什么画质去直播间看看-能选什么画质就能加什么参数-参数错误一定不能播放","children":[]},{"level":3,"title":"4，最后的代理链接示例：","slug":"_4-最后的代理链接示例","link":"#_4-最后的代理链接示例","children":[]}]},{"level":2,"title":"虎牙 (huya.com/)xxxxxx：","slug":"虎牙-huya-com-xxxxxx","link":"#虎牙-huya-com-xxxxxx","children":[{"level":3,"title":"1，查看可用 CDN：","slug":"_1-查看可用-cdn","link":"#_1-查看可用-cdn","children":[]},{"level":3,"title":"2，切换媒体类型（默认 flv，可选 flv、hls）：","slug":"_2-切换媒体类型-默认-flv-可选-flv、hls","link":"#_2-切换媒体类型-默认-flv-可选-flv、hls","children":[]},{"level":3,"title":"3，切换 CDN（默认 hwcdn，可选 hycdn、alicdn、txcdn、hwcdn、hscdn、wscdn，具体可先访问 1 获取）：","slug":"_3-切换-cdn-默认-hwcdn-可选-hycdn、alicdn、txcdn、hwcdn、hscdn、wscdn-具体可先访问-1-获取","link":"#_3-切换-cdn-默认-hwcdn-可选-hycdn、alicdn、txcdn、hwcdn、hscdn、wscdn-具体可先访问-1-获取","children":[]},{"level":3,"title":"4，最后的代理链接示例：","slug":"_4-最后的代理链接示例-1","link":"#_4-最后的代理链接示例-1","children":[]}]},{"level":2,"title":"YouTube:","slug":"youtube","link":"#youtube","children":[]},{"level":2,"title":"YY（默认最高画质，参数为 4）:","slug":"yy-默认最高画质-参数为-4","link":"#yy-默认最高画质-参数为-4","children":[]},{"level":2,"title":"更多平台后续会酌情添加","slug":"更多平台后续会酌情添加","link":"#更多平台后续会酌情添加","children":[]}]}],"git":{"createdTime":1737622768000,"updatedTime":1737631681000,"contributors":[{"name":"周子健","username":"周子健","email":"1384621+jiange1236@users.noreply.github.com","commits":2,"url":"https://github.com/周子健"}]},"readingTime":{"minutes":4.9,"words":1471},"filePathRelative":"tech/肥羊的IPTV等直播源代理Docker部署教程.md","localizedDate":"2025年1月23日","excerpt":"","autoDesc":true}');export{p as comp,c as data};

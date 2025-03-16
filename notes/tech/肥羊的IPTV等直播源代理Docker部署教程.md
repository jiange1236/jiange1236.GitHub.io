---
date: 2025-01-23
created: 2024-11-27
tags: []
source: https://blog.ccino.org/p/feiyang-iptv-and-other-live-source-proxy-docker-deployment-tutorial/
---

## 肥羊的IPTV等直播源代理Docker部署教程

> ### Excerpt
> 一、推荐使用 Docker 一键运行，并配置 watchtower 监听 Docker 镜像更新，直接一劳永逸： 1，使用 Docker 一键配置 allinone 1 docker run -d --restart unless-stopped --net=host --privileged=true -p 35455:35455 --name allinone youshandefeiyang/allinone 2，一键配置 watchtower 每天凌晨两点自动监听 allinone 镜像更新，同步 GitHub 仓库： 1 docker run -d --name watchtower --restart unless-stopped -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower allinone -c --schedule "0 0 2 * * *" 3、Docker compose 方式（10 月 26 日修订） 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 version: "3.3" services: allinone: restart: unless-stopped privileged: true ports: - 35455:35455 container_name: allinone image: youshandefeiyang/allinone networks:  -------------- version: "3.3" services: av3a-assistant: image: youshandefeiyang/av3a-assistant:amd64 restart: unless-stopped privileged: true ports: - 35442:35442 networks:  二、直接运行： 首先去 action 中下载对应平台二进制执行文件，然后解压并直接执行\n

---
[![Featured image of post 肥羊的IPTV等直播源代理Docker部署教程](https://blog.ccino.org/p/feiyang-iptv-and-other-live-source-proxy-docker-deployment-tutorial/Feiyang%20IPTV%20and%20other%20live%20source%20proxy%20Docker%20deployment%20tutorial_hu6014416321540110245.png)](https://blog.ccino.org/p/feiyang-iptv-and-other-live-source-proxy-docker-deployment-tutorial/)

### 一、推荐使用 Docker 一键运行，并配置 watchtower 监听 Docker 镜像更新，直接一劳永逸：

#### 1，使用 Docker 一键配置 allinone

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### 2，一键配置 watchtower 每天凌晨两点自动监听 allinone 镜像更新，同步 GitHub 仓库：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### 3、Docker compose 方式（10 月 26 日修订）

<table><tbody><tr><td><pre tabindex="0"><code><span> 1
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
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

### 二、直接运行：

首先去 action 中下载对应平台二进制执行文件，然后解压并直接执行

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

建议搭配进程守护工具进行使用，windows 直接双击运行！

### 三、详细使用方法

### **Ysptp 和 Itv 聚合 M 3 U 获取：**

**声明：如果你是在公网服务器部署，不愿意开启聚合 TV 直播服务，在运行裸程序或者 Docker 时，加上参数 -tv=false 即可不开启直播服务，具体可[点击参考命令范例](https://t.me/feiyangofficalchannel/922)**

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

### **BiliBili、虎牙、斗鱼、YY 实时 M 3 U 获取：**

#### BiliBili 生活：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### 虎牙一起看：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### 斗鱼一起看：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### YY 轮播：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### 如果使需要自定义 M 3 U 文件中的前缀域名，可以传入 url 参数（需要注意的是，当域名中含有特殊字符时，需要对链接进行 urlencode 处理）：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

### **抖音：**

#### 默认最高画质，浏览器打开并复制 `([live.douyin.com/](http://live.douyin.com/ "Linkify Plus Plus"))xxxxxx`，只需要复制后面的 xxxxx 即可（可选 flv 和 hls 两种种流媒体传输方式，默认 flv）：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

### **斗鱼：**

#### 1，可选 m 3 u 8 和 flv 以及 xs 三种流媒体传输方式【 `(www.douyu.com/)xxxxxx 或 (www.douyu.com/xx/xx?rid=)xxxxxx`，默认 flv】：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

### **BiliBili `(live.bilibili.com/)xxxxxx`：**

#### 1，平台 platform 参数选择（默认 web，如果有问题，可以切换 h 5 平台）：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span><span>2
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### 2，线路 line 参数选择（默认线路二，如果卡顿 / 看不了，请切换线路一或者三，一般直播间只会提供两条线路，所以建议线路一 / 二之间切换）：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span><span>2
</span><span>3
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### 3，画质 quality 参数选择（默认原画，可以看什么画质去直播间看看，能选什么画质就能加什么参数，参数错误一定不能播放）：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span><span>2
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### 4，最后的代理链接示例：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

### **虎牙 `(huya.com/)xxxxxx`：**

#### 1，查看可用 CDN：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### 2，切换媒体类型（默认 flv，可选 flv、hls）：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### 3，切换 CDN（默认 hwcdn，可选 hycdn、alicdn、txcdn、hwcdn、hscdn、wscdn，具体可先访问 1 获取）：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

#### 4，最后的代理链接示例：

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

### **YouTube:**

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span><span>2
</span><span>3
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

### **YY（默认最高画质，参数为 4）:**

<table><tbody><tr><td><pre tabindex="0"><code><span>1
</span><span>2
</span></code></pre></td><td><pre tabindex="0"></pre></td></tr></tbody></table>

### 更多平台后续会酌情添加

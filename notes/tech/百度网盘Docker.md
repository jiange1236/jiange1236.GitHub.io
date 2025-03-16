---
date: 2025-01-23
created: 2024-12-09
tags: []
source: https://docs.bestrui.top/Learn/Docker/BaiduYun.html
---

## 百度网盘Docker | RUI

> ### Excerpt
> 百度网盘群晖套件版提取版 群晖套件版就是一个docker容器 网上竟然没有人分享这个docker容器 我自己提取出来了 ，可以在非群晖机器上直接运行 说明 baiduapp 这个是解包提取出来的 baiduappdata 不在群晖上，直接使用docker部署时需要用到 安装 解压baiduappdata.zip到`baidu/data文件夹 ; Doc...

---
[RUI](https://docs.bestrui.top/)

1.  [RUI](https://docs.bestrui.top/)
2.  [学习](https://docs.bestrui.top/Learn/)
3.  [Docker](https://docs.bestrui.top/Learn/Docker/)
4.  [百度网盘Docker](https://docs.bestrui.top/Learn/Docker/BaiduYun.html)

百度网盘群晖套件版提取版  
群晖套件版就是一个docker容器  
网上竟然没有人分享这个docker容器  
我自己提取出来了 ，可以在非群晖机器上直接运行

### 说明

`baiduapp` 这个是解包提取出来的  
`baiduappdata` 不在群晖上，直接使用docker部署时需要用到

### 安装

-   解压`baiduappdata.zip`到`baidu/data`文件夹
-   Docker直接部署

```
docker run -d --name baiduapp -v ./baidu/data:/data -v ./baidu/download:/sdkpath/volume1/docker bestrui/baidu
```

镜像是`baiduapp`里面文件直接构建的，如不放心，也可以自己构建

### 构建

-   解压`baiduapp.zip`到`baidu/src`文件夹
-   进入`baidu/src/baiduapp`文件夹

```
docker build -t baidu:latest .
```

-   用自己的镜像运行

```
docker run -d --name baiduapp -v ./baidu/data:/data -v ./baidu/download:/sdkpath/volume1/docker baidu:latest
```

### 下载链接

[百度网盘 | AList (bestrui.top)open in new window](https://alist.bestrui.top/OneDrive/Download/Share/%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98)

### 运行命令

```
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

###### OPTIONS说明

-   `-d` : 后台运行
-   `-it` : 交互模式运行
-   `-p 3000:3000` : 指定端口映射，`主机(宿主)端口:容器端口`
-   `--name bestrui` : 容器名字
-   `--dns 111.11.1.1` : 指定DNS服务器
-   `--net="bridge"` : 指定容器的网络类型
-   `-v /docker:/app` : 绑定目录，`主机(宿主)目录:容器目录`
-   `-e TZ=Asia/Shanghai` : 环境变量：时区
-   `--restart=always` : 重启策略

重启策略

-   no 默认值，表示容器退出时，docker不自动重启容器
-   always 容器退出时总是重启
-   on-failure 若容器的退出状态非0，则docker自动重启容器
-   unless-stopped 容器退出时总是重启，但不考虑Docker守护进程启动时就已经停止的容器

### 启动命令

```
docker start     name //普通的启动命令
docker start -i  name //启动并进入交互
docker start -a  name //在前端显示日志
```

### 构建容器

```
docker build -t name:tag .
```

### 创建网络

-   ##### macvlan网络
    

```
docker network create -d \
       macvlan -o \
        parent=eth0 \
        RUI \
       --subnet=192.168.31.0/24  \
       --gateway=192.168.31.1 \
       --ipv6 --subnet=fe80::/8
```

### 清理日志

```
<span>#!/bin/sh</span>
<span>echo</span>  <span>"========开始清理容器日志 <span><span>$(</span><span>date</span> +%Y-%m-%d<span>\</span> %H:%M:%S<span>)</span></span>========"</span>  
  
<span>logs</span><span>=</span><span><span>$(</span><span>find</span> /var/lib/docker/containers/ <span>-name</span> *-json.log<span>)</span></span>  
  
<span>for</span> <span>log</span> <span>in</span> <span>$logs</span>  
        <span>do</span>  
                <span>echo</span> <span>"清理了: <span>$log</span>"</span>  
                <span>cat</span> /dev/null <span>&gt;</span> <span>$log</span>  
        <span>done</span>  

<span>echo</span> <span>"========清理完成 <span><span>$(</span><span>date</span> +%Y-%m-%d<span>\</span> %H:%M:%S<span>)</span></span>========"</span> 
```

或者

```
<span>docker</span> <span>ps</span> <span>-aq</span> <span>|</span> <span>xargs</span> <span>docker</span> inspect <span>--format</span><span>=</span><span>'{{.LogPath}}'</span> <span>|</span> <span>xargs</span> truncate <span>-s</span> <span>0</span>
```

[

上一页

代理池

](https://docs.bestrui.top/Learn/Docker/AutoProxyPool.html)[

下一页

常用命令

](https://docs.bestrui.top/Learn/Docker/config.html)

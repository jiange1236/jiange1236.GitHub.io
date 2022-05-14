[toc]

apollolake

https://www.synology.cn/zh-cn/knowledgebase/DSM/tutorial/File_Sharing/How_to_access_files_on_Synology_NAS_within_the_local_network_NFS

# 半洗白原理

半洗白原理：DSM6 以上的系统。群晖Docker中会增加一个叫做DSM的功能。简单来说，就是利用Docker在你的群晖系统中，虚拟一个群晖系统。

然而，令我们庆幸的是。这个虚拟出来的小群晖。在Docker中是自带生成序列号（SN）的。只不过这个序列号我们只能用来半洗白而不能全洗白。

所以，我们只需要将这个小群晖的序列号和MAC 提取出来。替换到你物理机安装的群晖引导当中，就可以实现半洗白咯！

# 何为半洗白

黑群晖毕竟是黑群晖，是没有经过群晖验证的机器。所以有一些功能上的限制。

半洗白之后，除了官方的QuickConnect 和 群晖自带的DDNS不能用以外，其他的白群晖才具备的功能也能够解锁~

**Active Backup for Business 可激活**

**Video Station 有缩略图、可以转码 等等等~**

# 值得注意的事

本方法仅适用于DSM6+ 的系统。因为DSM5还没有这个功能

半洗白后除了QuickConnect 和 群晖的DDNS不能用之外，其余都可以使用

安装 Docker 的 DSM 需要 btrfs 格式的硬盘分区

# 正式开始吧

**一、Docker中安装DSM**

在套件中心，选择Docker ，并点击“安装套件”。

![img](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/wps6B3D.jpg) 

左侧点击“DSM”，并点击“新增”。

![img](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/wps6B3E.jpg) 

如下三张图，不用自定义更改，全部点击“下一步”。

![img](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/wps6B3F.jpg) 

![img](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/wps6B40.jpg) 

![img](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/wps6B50.jpg) 

然后我们选择“手动上传”，点击“立即下载”就会把DDSM需要的系统固件直接下载到本地（根据你群晖的系统型号不同，下载的DDSM固件版本也不一样），然后点击浏览，选择刚刚下载好的文件。然后点击“下一步”就可以啦。

![img](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/wps6B51.jpg) 

接下来，我们点击应用。

![img](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/wps6B52.jpg) 

如下图所示，DDSM1这个容器已经在运行啦。并且可以看到根据DHCP分配的IP地址。这个IP地址就是我们所谓的“小群晖”的地址。

![img](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/wps6B53.jpg) 

**二、提取序列号及MAC地址**

**方法一：直接通过Synology Assistant扫描局域网络，即可看到“小群晖”的序列号及MAC地址**

![img](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/wps6B54.jpg) 

**方法二：访问192.168.1.157 配置用户名、密码，然后进入系统之后，在信息中心中也可以看到序列号及MAC地址**

![img](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/wps6B55.jpg) 

![img](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/wps6B56.jpg) 

**三、替换引导盘中的SN及MAC**

通过以上步骤，我们拿到SN 及MAC 之后，我们就可以将系统中的DDSM删除，然后系统关机。引导U盘拿下来插到电脑上。通过DiskGenius更改引导盘中的SN及MAC。然后重新插到群晖中，引导开机即为半洗白群晖咯！

# 附：黑群晖各版本引导下载

[ds3617xs1.03b支持6.2~6.22.img](https://tutu.bid/i/2297/ds3617xs1.03b支持6.2~6.22.img)

[ds3617xs1.02b支持6.17.img](https://tutu.bid/i/2297/ds3617xs1.02b支持6.17.img)

[ds3615xs1.03b支持6.2~6.22.img](https://tutu.bid/i/2297/ds3615xs1.03b支持6.2~6.22.img)

[ds3615xs1.02b支持6.17.img](https://tutu.bid/i/2297/ds3615xs1.02b支持6.17.img)

[DS918-1.04b-删除显卡驱动.zip](https://tutu.bid/i/2297/DS918-1.04b-删除显卡驱动.zip)

[DS918+1.04b支持6.2~6.21.img](https://tutu.bid/i/2297/DS918+1.04b支持6.2~6.21.img)

[DS918+1.03b支持6.2.img](https://tutu.bid/i/2297/DS918+1.03b支持6.2.img)

[DS916+1.02b支持6.17.img](https://tutu.bid/i/2297/DS916+1.02b支持6.17.img)

[3617虚拟机引导.zip](https://tutu.bid/i/2297/3617虚拟机引导.zip)

OK 以上就是当前比较流行的几个版本的引导。至于引导对应的群晖系统，大家到官网下载选择相应的版本下载即可。

https://archive.synology.com/download/DSM/release/

MAC地址 0211321F386C

序列号 DVKKG46OASU4G

 

执行 sudo su - 或sudo -i 切换到 root 账户下，

synoservice --restart pkgctl-Docker 重启Docker

SSH 登录到群晖,输入 ls /dev/dri,如果查询到目录下存在 renderD128 则表示显卡驱动已安装

 

# Docker

docker save -o jellyfin1064.tar jellyfin/jellyfin:10.6.4-amd64

docker save -o filebrowser291.tar 80x86/filebrowser:2.9.1-amd64

docker save -o firefox117.tar jlesage/firefox:v1.17.0

docker save -o embyserver202101.tar zishuo/embyserver:latest

docker save -o qbittorrent202106.tar linuxserver/qbittorrent

 

docker pull jellyfin/jellyfin:10.6.4-amd64

docker pull 80x86/qbittorrent:4.2.3-focal-20200319-amd64-nova

docker pull linuxserver/qbittorrent

docker pull 80x86/filebrowser:2.9.1-amd64

docker pull homeassistant/home-assistant:0.108.2

docker pull marcoraddatz/homebridge:4.7

docker pull smarthomefans/iobroker:4.1.0

docker pull jlesage/firefox:v1.17.0

docker pull zishuo/embyserver:latest

https://github.com/jlesage/docker-firefox

 

docker image prune

docker images		docker rmi xxx

 

# filebrowser

IMAGE_NAME=80x86/filebrowser

WEB_PORT=8084

FB_AUTH_SERVER_ADDR="127.0.0.1"

docker run -d \

-e PUID=$UID \

-e PGID=$GID \

-e WEB_PORT=$WEB_PORT \

-e FB_AUTH_SERVER_ADDR=$FB_AUTH_SERVER_ADDR \

-p $WEB_PORT:$WEB_PORT \

-v /volume1/docker/fb:/config \

-v /volume1:/myfiles/volume1 \

--mount type=tmpfs,destination=/tmp \

--device=/dev/dri/renderD128:/dev/dri/renderD128 \

${IMAGE_NAME}:2.9.1-amd64

 

# jellyfin

https://post.smzdm.com/p/akmgnkdk/

docker run --name=jellyfinyj --device=/dev/dri:/dev/dri jellyfin/jellyfin:latest

 

# tmm

104.16.61.155 image.tmdb.org

13.35.67.86 api.themoviedb.org

13.224.161.90 api.themoviedb.org

54.192.151.79 [www.themoviedb.org](http://www.themoviedb.org)

 

# firefox



# Emby

https://synology.emby.media/packages/synology/stable/4.4.3.0-1/EmbyServer_4.4.3.0-1_apollolake.spk

https://synology.emby.media/packages/synology/stable/4.4.3.0-1/EmbyServer_4.4.3.0-1_xpen-silvermont.spk

**SSH**

使用putty通过SSH 登陆群晖，使用系统相同的帐号及密码（输入密码不显示，输完回车即可）

输入 sudo -i 回车，输入群晖的密码，切换到root用户（密码同admin相同）

**EMBY**

wget -N --no-check-certificate "https://raw.githubusercontent.com/s1oz/embyonekey/master/embyonekey.sh" && chmod +x embyonekey.sh && ./embyonekey.sh

# 阿里云盘

打开[阿里云盘](https://www.aliyundrive.com/)的官网 登录后按F12 进入找到tokan里面的refresh_token复制存着备用

![](NAS%20%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.assets/6199d08327.png)

# NAS CPU

| 代数 | CPU       | GPU     | CPU Mark | GPU Mark | Price | 性价比 |
| ---- | --------- | ------- | -------- | -------- | ----- | ------ |
|      | J3455     | HD 500  | 2221     | 298      |       |        |
| 7    | G4600T    | HD 630  | 3130     | 1134     | 390   | 8.03   |
| 8    | G5400T    | UHD 610 | 3119     | 732      | 445   | 7.01   |
| 10   | G5900T    | UHD 610 | 2648     | 732      | 278   | 9.53   |
| 10   | G6400T    | UHD 610 | 3610     | 732      | 399   | 9.05   |
| 6    | I5 6400T  | HD 530  | 4280     | 981      | 475   | 9.01   |
| 8    | I3 8100T  | UHD 630 | 5321     | 1348     | 639   | 8.33   |
| 8    | I5 8400T  | UHD 630 | 7408     | 1348     | 788   | 9.4    |
| 9    | I3 9100T  | UHD 630 | 5548     | 1348     | 770   | 7.21   |
| 9    | I5 9400T  | UHD 630 | 7670     | 1348     | 950   | 8.07   |
| 10   | I3 10100T | UHD 630 | 7475     | 1348     | 680   | 10.99  |
| 10   | I5 10400T | UHD 630 | 10110    | 1348     | 1095  | 9.23   |


---
title: 玩客云 & 群晖 & Docker
date: 2025-09-01
category:
  - 计算机
tags:
  - 玩客云
article: true
---
# 玩客云 & 群晖 & Docker

## 玩客云

安装包

[Armbian-unofficial_24.5.0-trunk_Onecloud_bullseye_edge_6.7.9_minimal.img.xz](https://github.com/hzyitc/armbian-onecloud/releases/download/ci-20240311-162146-UTC/Armbian-unofficial_24.5.0-trunk_Onecloud_bullseye_edge_6.7.9_minimal.img.xz)

```
nano /etc/apt/sources.list
```

删除原内容，然后把下面的内容粘贴进入，按CTRL+X 输入Y保存即可

```
## 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
## deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
## deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
## deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
## deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
```

然后更新软件源

```
apt update
apt upgrade
sudo apt-get install  gcc automake autoconf libtool make zip unzip build-essential net-tools iptables
sudo apt-get install --fix-missing
## apt --fix-broken install
## sudo apt autoclean
```

[Docker安装](#Docker安装)

**Docker镜像**

直接修改 `/etc/docker/daemon.json` (docker 版本 >= 1.10 时) 内容为:

```json
{"registry-mirrors": ["https://docker.zecdn.top"]}
```

修改后重启服务:

```bash
systemctl daemon-reload
systemctl restart docker
```

### 连接WiFi

```
iw wlx00367667a64b scan | grep SSID    #扫描附近的wifi
nmcli d wifi connect ZZJ_WiFi password 1111111113 #连接wifi(密码含有空格则用引号括起)
nmcli d wifi connect CMCC-U3UC password FTWS4FZX
```

设置开机启动

`cd /etc/init.d/`
`nano mywifi`

```
#!/bin/sh
#### BEGIN INIT INFO
## Default-Start:  2 3 4 5
## Default-Stop: 0 1 6
#### END INIT INFO
sleep 30s

nmcli d wifi connect MaLanShanCDong password qaz1234560

exit 0
```

`chmod +x /etc/init.d/mywifi`

`update-rc.d mywifi defaults`

编辑crontab `crontab -e`

```
0 * * * * /etc/init.d/mywifi
```

### [Debian 使用 cron 执行定时任务](https://www.cnblogs.com/mouseleo/p/8585979.html)

在linux下有两种方法来让一个命令或者脚本执行:

1. crontab : 执行一个任务一次或者多次.
2. at : 只执行一次.

crontab是通过读取一个crontab文件来工作，这是一个普通的文本文件，里面列出了要执行的任务。每行都含有要指定的任务的命令、参数与选项，以及要执行任务的时间。（cron 软件在后台运行并且经常检查 /etc/crontab 文件。cron 软件也检查 /var/cron/tabs 目录，搜索新的 crontab 文件。这些 crontab 文件存储一些 cron 在特定时间执行任务的信息。）
crontab的基本格式：

```
* * * * * command
```

几个星号分别为：分 时 日 月 周，最后是要执行的命令。

- 分：0~59
- 时：0~23
- 日：1~31
- 月：1~12
- 周：0～6（0表示星期天）

除了数字还有几个个特殊的符号就是* / - ：

- \* 代表所有的取值范围内的数字
- / 代表每的意思
- */5 表示每5个单位
- \- 代表从某个数字到某个数字
- , 分开几个离散的数字

配置文件的一些例子：

- 0 3 * * * /root/test.sh 每天凌晨3点执行test.sh文件
- \* 23-7/1 * * * /root/lnmp restart 晚上11点到早上7点之间，每隔一小时重启lnmp套件
- */30 * * * * /usr/sbin/ntpdate 每半小时同步一下时间
- 0 23 * * 6 /lnmp restart 每星期六的11 : 00 pm重启重启lnmp套件。
- */1 * * * * echo "i am running.">>/tmp/running.txt 每隔1分钟向/tmp/running.txt写一个"i am running."字符串。

运行
我以为编辑crontab保存后会自动执行，其实不然，必须通过重启cron才可以，命令如下：

- 启动/etc/init.d/cron start
- 关闭/etc/init.d/cron stop
- 重启/etc/init.d/cron restart

### 设置u盘自动挂载

1.插入u盘

```shell
## 查看u盘路径/大小/type
fdisk -l
## 如/dev/mmcblk0p1
```

2. 格式化u盘为exc4，保持默认，等待完成

```shell
## 举例
mkfs.ext4 /dev/mmcblk0p1
```

3.创建挂载目录 

```shell
## 举例
mkdir /mnt/sd
```

4. 查看u盘UUID

```shell
## 举例
blkid /dev/mmcblk0p1
```

5. 修改配置文件，在/etc/fstab后追加

```shell
## 例子，uuid和路径改成自己的
UUID=a63dfbda-29c8-478f-a88e-55796514c961   /mnt/sd/   ext4    defaults    0 0
```

6. 挂载目录修改权限

```shell
chmod -R 777 /mnt/sd/
```

7. 重启

```shell
reboot -n
```

8. 检查

挂载目录下存在lost+found目录即为成功

### Docker 迁移

1. 停止服务 

```shell
sudo systemctl stop docker 
```

2. 转移文件 

```shell
sudo mv /var/lib/docker /mnt/sd/docker
```

3. 创建软链接
   
   ```shell
   sudo ln -s /mnt/sd/docker /var/lib/docker 
   ```

4. 启动服务

```shell
systemctl start docker
```

## 群晖

### OPKG

ssh 进入群晖后, sudo -i 获取管理员权限, 运行下面的命令:

```
wget -O - http://bin.entware.net/x64-k3.2/installer/generic.sh | sh
```

脚本运行完毕后, 修改环境文件:

1. /root/.profile:

PATH=/sbin:/bin:/usr/sbin:/usr/bin:/usr/syno/sbin:/usr/syno/bin:/usr/local/sbin:/usr/local/bin:/opt/bin:/opt/sbin

2. /etc/rc:

/opt/etc/init.d/rc.unslung start

## 飞牛

```
lvs #显示逻辑卷的信息
btrfs restore /dev/vg3/volume_4 /vol2/1000/backup/ #将volume_4的内容换到新的文件夹
```

**使用 `nohup` 和 `&`：** 这是最常见和推荐的方法，因为 `nohup` 可以防止进程在终端关闭时收到 SIGHUP 信号而终止。
```
nohup btrfs restore /dev/vg2/volume_1 /vol1/1000/backup > restore_log.txt 2>&1 &
```
- `nohup`: 防止进程在终端关闭时被终止。
- `btrfs restore ...`: 你的实际命令。
- `> restore_log.txt`: 将标准输出重定向到 `restore_log.txt` 文件。这样你可以在以后查看命令的输出，包括恢复进度和遇到的错误。
- `2>&1`: 将标准错误（stderr）也重定向到与标准输出（stdout）相同的文件。
- `&`: 将整个命令放到后台执行。

执行后，你会看到类似 `[1] 12345` 的输出，其中 `12345` 是后台进程的 PID。

**如何查看进度：** 你可以随时使用 `tail -f restore_log.txt` 命令来实时查看 `restore_log.txt` 文件的内容，从而了解 `btrfs restore` 的执行进度和日志信息。

## Docker

### Docker安装

**Docker**

```
#使用清华镜像
export DOWNLOAD_URL="https://mirrors.tuna.tsinghua.edu.cn/docker-ce"
## 如您使用 curl
curl -fsSL https://get.docker.com/ | sh
```

国内镜像

```
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://0b27f0a81a00f3560fbdc00ddd2f99e0.mirror.swr.myhuaweicloud.com",
    "https://ypzju6vq.mirror.aliyuncs.com",
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
EOF
systemctl daemon-reload
systemctl restart docker
```

### Docker基本命令

启动 Docker 服务

```
systemctl start docker
```

查看 Docker 运行状态

```
systemctl status docker
```

将 Docker 服务加入开机自启动

```
systemctl enable docker
```

查看容器在线状态及大小

```
docker ps -as
```

查看容器的运行输出日志

```
docker logs freenom
```

重新启动容器

```
docker restart freenom
```

停止容器的运行

```
docker stop freenom
```

移除容器

```
docker rm -f freenom
```

查看 docker 容器占用 CPU，内存等信息

```
docker stats --no-stream
```

查看 Docker 安装版本等信息

```
docker version
```

重启 Docker（非容器）

```
systemctl restart docker
```

清理 Docker

```
docker system prune
```

查看 Docker 网络信息

```
docker network ls
```

检查 bridge 网络状态

```
docker network inspect bridge
```

修改容器网段IP

```
修改 /etc/docker/daemon.json，加入一行 "bip": "192.168.1.5/24",，然后再次查看 ifconfig，已经变成了 192 网段了
重启 docker 服务，curl 尝试正常
```

批量停止

```
docker stop $(docker ps -aq)
docker stop $(docker ps -a | grep "hassio" | awk '{print $1}')
```

批量删除

```
docker rmi --force `docker images | grep hassio | awk '{print $3}'`
```

重命名镜像

```
docker tag docker.lixd.xyz/natpierce/natpierce:latest natpierce/natpierce:latest
docker rmi docker.lixd.xyz/natpierce/natpierce:latest
```

### 清理空间

查看空间占用

```
df -h
```

查看当前文件夹下占用空间分布

```
du -sh * 
```

清理脚本 clean.sh

```bash
#!/bin/bash
echo "======== start clean docker containers logs ========"
logs=$(find /var/lib/docker/containers/ -name *-json.log)
for log in $logs
        do
                echo "clean logs : $log"
                cat /dev/null > $log
        done
echo "======== end clean docker containers logs ========"
```

```
chmod +x /var/lib/docker/clean.sh
sed -i 's/\r$//' /var/lib/docker/clean.sh
bash /var/lib/docker/clean.sh
```

编辑crontab `crontab -e`

```
0 5 * * 1 /var/lib/docker/clean.sh
```

### Docker代理

1. Create a systemd drop-in directory for the `docker` service:
   
   ```
   sudo mkdir -p /etc/systemd/system/docker.service.d
   ```

2. Create a file named `/etc/systemd/system/docker.service.d/http-proxy.conf` that adds the `HTTP_PROXY` environment variable:
   
   ```
   [Service]
   Environment="HTTP_PROXY=socks5://127.0.0.1:20170"
   Environment="HTTPS_PROXY=socks5://127.0.0.1:20170"
   ```

3. Flush changes and restart Docker
   
   ```
   sudo systemctl daemon-reload
   sudo systemctl restart docker
   ```

4. Verify that the configuration has been loaded and matches the changes you made, for example:
   
   ```
   sudo systemctl show --property=Environment docker
   ```

修改hosts

```
echo "185.199.109.133   raw.githubusercontent.com" >> /etc/hosts
docker exec -it homeassistant /bin/bash
```

### 重建Docker网络

```
## 安装brctl 
apt-get install bridge-utils
yum install bridge-utils

## 停止docker服务
systemctl stop docker

## 重建 docker 网络
ifconfig docker0 down
brctl delbr docker0

## 重启docker服务
systemctl start docker

## 查看IP转发
cat /proc/sys/net/ipv4/ip_forward
## IP 转发需要进行开启
echo 1 > /proc/sys/net/ipv4/ip_forward

使用上述任何一种方法都不会使更改持久。为了确保新设置在重新启动后仍然有效，您需要编辑 /etc/sysctl.conf 文件。
## sudo nano /etc/sysctl.conf
将以下行之一添加到文件底部，具体取决于您想要关闭还是打开 Linux IP 转发。然后，保存对此文件的更改。该设置在重新启动后将是永久的。 net.ipv4.ip_forward 设置控制是否为 IPv4 打开或关闭 IP 转发。
net.ipv4.ip_forward = 0
OR
net.ipv4.ip_forward = 1
编辑文件后，您可以运行以下命令以使更改立即生效。
## sysctl -p
```

### Docker镜像

| 项目名称     | 项目地址                                            | 加速地址                                                          |
| -------- | ----------------------------------------------- | ------------------------------------------------------------- |
| 1Panel   | https://github.com/1Panel-dev/1Panel/           | [https://docker.1panel.live](https://docker.1panel.live/)     |
| Daocloud | https://github.com/DaoCloud/public-image-mirror | [https://docker.m.daocloud.io](https://docker.m.daocloud.io/) |
| 耗子面板     | https://github.com/TheTNB/panel                 | [https://hub.rat.dev](https://hub.rat.dev/)                   |

https://github.com/cmliu/CF-Workers-docker.io?tab=readme-ov-file#%E7%AC%AC%E4%B8%89%E6%96%B9-dockerhub-%E9%95%9C%E5%83%8F%E6%9C%8D%E5%8A%A1

第一步：代理拉取镜像 

```
docker pull dockerproxy.net/stilleshan/frpc:latest
```

第二步：重命名镜像

```
docker tag dockerproxy.net/stilleshan/frpc:latest stilleshan/frpc:latest
```

第三步：删除代理镜像

```
docker rmi dockerproxy.net/stilleshan/frpc:latest
```

#### 各平台配置教程（附截图指引）

##### 1. 在 Linux 上为 Docker 配置镜像服务器

**1. 编辑 Docker 配置文件**

对于使用 systemd 的系统（Ubuntu 16.04+、Debian 8+、Rocky Linux），Docker 的配置文件通常位于 `/etc/docker/daemon.json`。如果该文件不存在，可以创建一个新的。

使用你喜欢的文本编辑器打开或创建该文件：

```
sudo nano /etc/docker/daemon.json
```

**2. 配置镜像服务器**

在 `daemon.json` 文件中，添加 `registry-mirrors` 字段并指定你希望使用的镜像服务器地址。例如，使用kspeeder的镜像服务器：

```
{
  "registry-mirrors": ["https://registry.linkease.net:5443"]
}
```

保存并关闭文件。

**3. 重启 Docker 服务**

为了使配置生效，需要重启 Docker 服务：

```
sudo systemctl daemon-reload
sudo systemctl restart docker
```

**4. 验证配置**

运行以下命令以验证镜像服务器是否配置成功：

```
docker info
```

在输出中，你应该能看到你配置的镜像服务器地址。

##### 2. 在 Windows 上为 Docker 配置镜像服务器

**1. 打开 Docker 客户端**

确保 Docker 已经在你的 Windows 上安装并运行。点击任务栏中的 Docker 图标以启动 Docker 客户端。

**2. 进入 Docker 设置**

在 Docker 客户端中，右键点击系统托盘中的 Docker 图标，选择“Settings”（设置）。

**3. 配置镜像服务器**

1. 在“Settings”窗口中，选择“Docker Engine”选项卡。
2. 在“Registry mirrors”字段中，添加你希望使用的镜像服务器地址。例如，使用kspeeder的镜像服务器：

```
{
  "registry-mirrors": ["https://registry.linkease.net:5443"]
}
```

3. 点击“Apply & Restart”按钮以保存设置并重启 Docker。

**4. 验证配置**

打开命令提示符或 PowerShell，运行以下命令以验证镜像服务器是否配置成功：

```
docker info
```

在输出中，你应该能看到你配置的镜像服务器地址。

**5. 查看镜像源状态**

- 打开浏览器，访问[http://部署Kspeeder的机器IP:5003](http://xn--kspeederip-9q1rx82n0s2bfe0ayz8c:5003/)（或您设置的管理端口），进入kspeeder的管理界面。在管理界面中，您可以查看当前配置的镜像源状态，包括下载速度、可用性等。

### DPanel

```
docker run -d --name dpanel --restart=always -p 8807:8080 -e APP_NAME=dpanel -v /var/run/docker.sock:/var/run/docker.sock -v dpanel:/dpanel -v /opt/stacks:/dpanel/compose dpanel/dpanel:lite
```

### Docker Desktop

安装到 D 盘

```
Start-Process -FilePath "Docker Desktop Installer.exe" -ArgumentList 'install', '-accept-license', '--installation-dir="D:\Program Files\Docker"', '--wsl-default-data-root="D:\Program Files\Docker\data"', '--windows-containers-default-data-root="D:\Program Files\Docker"' -Wait
```

## Home Assistant](https://www.home-assistant.io/) 

### Home Assistant Container

https://github.com/home-assistant/core/pkgs/container/armv7-homeassistant/versions

```
## docker pull 05f073ad3c0010ea0f4bc00b7105ec20.mirror.swr.myhuaweicloud.com/homeassistant/armv7-homeassistant
docker pull dockerproxy.com/homeassistant/armv7-homeassistant:latest
docker tag dockerproxy.com/homeassistant/armv7-homeassistant:latest homeassistant/armv7-homeassistant:latest
docker rmi dockerproxy.com/homeassistant/armv7-homeassistant:latest
## docker run -d --privileged --restart=unless-stopped --name="homeassistant" -v /data/homeassistant/config:/config --net=host homeassistant/armv7-homeassistant

docker run -d --privileged --restart=unless-stopped --name="homeassistant" -v /data/homeassistant/config:/config --net=host ghcr.io/home-assistant/armv7-homeassistant:2024.12.5
```

### HACS

```
docker exec -it homeassistant bash
wget -O - https://hacs.vip/get | bash -
或wget -O - https://hacs.vip/get | HUB_DOMAIN=ghproxy.com/github.com bash -
```

### Supervisor

**Install Home Assistant Supervised**

```
apt-get install \
apparmor \
jq \
wget \
curl \
udisks2 \
libglib2.0-bin \
network-manager \
dbus \
lsb-release \
systemd-journal-remote -y
```

**OS Agent**

```
wget https://github.com/home-assistant/os-agent/releases/download/1.4.1/os-agent_1.4.1_linux_armv7.deb
sudo dpkg -i os-agent_1.4.1_linux_armv7.deb
sudo apt-get install apparmor
```

**grub 错误**

```
解决方法很简单：
sudo nano /etc/default/grub
添加：
systemd.unified_cgroup_hierarchy=false
```

**Home Assistant Supervised Debian Package**

```
wget https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb
dpkg -i homeassistant-supervised.deb
```

更新

```
ha supervisor update
```

卸载

```
sudo systemctl disable haos-agent.service
sudo systemctl disable hassio-apparmor.service
sudo systemctl disable hassio-supervisor.service
sudo systemctl stop hassio-supervisor.service
sudo systemctl stop haos-agent.service
sudo systemctl stop hassio-apparmor.service
docker ps | grep -E 'hassio'| awk '{print $1}' | xargs docker rm -f
```

### HAOS

```bash
qm importdisk 103 /tmp/haos_ova-15.1.qcow2 local
ha network update enp0s18 --ipv4-address 192.168.10.48 --ipv4-gateway 192.168.10.46 --ipv4-nameserver 1.2.4.8
```

Addons 镜像

```
https://gitee.com/hassio/addons
https://gitee.com/jiange1236/hassio-addons
```

## Watchtower

一次性运行

```bash
docker run --rm \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --cleanup \
  --run-once \
  homeassistant
```

连续运行

```bash
docker run -d --restart=unless-stopped \
  --name=watchtower \
  -e WATCHTOWER_LOG_LEVEL=error \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --cleanup
```

## Dockge

```bash
## Create directories that store your stacks and stores Dockge's stack
mkdir -p /opt/stacks /opt/dockge
cd /opt/dockge

## Download the compose.yaml
curl https://raw.githubusercontent.com/louislam/dockge/master/compose.yaml --output compose.yaml

## Start the server
docker compose up -d
```

## Uptime Kuma

```bash
docker run -d --restart=unless-stopped --network=host -v /data/uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1
```

## Easynode

```bash
docker run -d -p 8082:8082 --restart=unless-stopped -v /data/easynode/db:/easynode/app/db chaoszhu/easynode
```

## OpenWrt

🔵打开网卡混杂模式

```
ip link set eth0 promisc on
```

🔵创建网络

```
docker network create -d macvlan --subnet=192.168.30.0/24 --gateway=192.168.30.1 -o parent=eth0 macnet
```

🔘[↑自己根据 玩客云 所在网段修改，如：玩客云IP:10.1.2.11，则10.1.1.0/24 改成 10.1.2.0/24，10.1.1.1改成主路由地址]

🔵拉取 OpenWRT 镜像

```
docker pull wfnb/onecloud:23-01-25-beta
```

🔵创建容器

```
docker run -d --name=OpenWrt --restart always --network macnet --privileged wfnb/onecloud:23-01-25-beta /sbin/init

docker import openwrt-01.10.2023-meson-meson8b-thunder-onecloud-rootfs.tar.gz kiddin9_openwrt
docker run -d --name=OpenWrt --restart always --network macnet --privileged kiddin9_openwrt /sbin/init
```

🔘--name=OpenWrt 其中OpenWrt是容器名称，可以更改成你想要的，容器名称注意不要和其他容器一样，会冲突

🔘--ip 10.1.1.13 其中10.1.1.13是容器IP，可以更改成你想要的，容器IP不要重复，这一项可删除

🔵修改OpenWrt IP

```
docker exec OpenWrt sed -e "s/10.1.1.13/192.168.30.120/" -i /etc/config/network
docker exec -it OpenWrt bash
/etc/init.d/network restart
```

🔘OpenWrt 是容器名称，和你创建容器时的一致

🔘镜像设置的默认IP是10.1.1.13，可通过该命令修改

🔵管理密码是 password

🔵LAN口固定IP地址，网关指向主路由IP地址

iptables -t nat -I POSTROUTING eth0 -j MASQUERADE

🔴设置 容器不自启动 、 停止容器 和 删除容器

```
docker container update --restart=no [容器ID]
docker stop [容器ID]
docker rm [容器ID]
```

🔴查看所有镜像

```
docker images
```

🔘记录下 xuanaimai/openwrt 21-09-15 右边的 IMAGE ID（镜像ID，下面用得到）

🔴删除镜像

```
docker rmi [镜像ID]
```

## Alist

```
docker run -d --restart=unless-stopped -v /data/alist:/opt/alist/data -v /tmp:/opt/alist/tmp --network=host --name="alist" xhofe/alist:latest
```

查看密码

```
docker exec -it alist ./alist admin
```

使用[http://ip:5244](http://ip:5244/)    来登录alist点击下面的管理输入管理员的账号和密码

### 小雅Alist

**小雅Alist的相关周边**

一键脚本

```
bash -c "$(curl --insecure -fsSL https://ddsrem.com/xiaoya_install.sh)"
```

相关地址

https://github.com/DDS-Derek/xiaoya-alist

**小雅Alist**

一键安装和更新容器，标准模式，打开端口 5678

```
bash -c "$(curl http://docker.xiaoya.pro/update_new.sh)"
```

一键安装和更新容器，host模式（推荐，软路由和NAS上更少网络故障，打开端口 5678）

```
bash -c "$(curl http://docker.xiaoya.pro/update_new.sh)" -s host
```

## Filebrowser

```
docker run \
    -v /:/srv \
    -v /data/filebrowser/database/filebrowser.db:/database/filebrowser.db \
    -v /data/filebrowser/config/settings.json:/config/settings.json \
    -e PUID=$(id -u) \
    -e PGID=$(id -g) \
    -p 8080:80 \
    filebrowser/filebrowser:latest
```

## Homepage

**Homepage**

```
docker run -p 3000:3000 -v /etc/homepage:/app/config -v /var/run/docker.sock:/var/run/docker.sock ghcr.io/benphelps/homepage:latest
```

**Homarr**

```
docker run  \
  --name homarr \
  --restart always \
  -p 7575:7575 \
  -v /data/homarr/configs:/app/data/configs \
  -v /data/homarr/icons:/app/public/icons \
  -d ghcr.io/ajnart/homarr:latest
```

**Flare**

```
docker run -d --name flare --restart=unless-stopped -p 80:5005 -v /data/flare:/app soulteary/flare
```

**Sun-Panel**

```
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v /var/run/docker.sock:/var/run/docker.sock \
--name sun-panel \
hslr/sun-panel:latest
```

## V2rayA

~~Docker安装~~

```
docker run -d \
  --restart=always \
  --privileged \
  --network=host \
  --name v2raya \
  -e V2RAYA_LOG_FILE=/tmp/v2raya.log \
  -e V2RAYA_V2RAY_BIN=/usr/local/bin/v2ray \
  -e V2RAYA_NFTABLES_SUPPORT=off \
  -e IPTABLES_MODE=legacy \
  -v /lib/modules:/lib/modules:ro \
  -v /etc/resolv.conf:/etc/resolv.conf \
  -v /etc/v2raya:/etc/v2raya \
  mzz2017/v2raya
```

Linux安装

```
export https_proxy="socks5://192.168.10.30:20170" #先设置bash代理
sudo sh -c "$(wget -qO- https://github.com/v2rayA/v2rayA-installer/raw/main/installer.sh)" @ --with-v2ray
systemctl start v2raya  #启动服务
systemctl enable v2raya  #开机启动
```

开启IP转发

```
echo net.ipv4.ip_forward=1 >> /etc/sysctl.conf && sysctl -p
```

http://ip:2017

## CFnat-Docker

```
docker run -d -e colo="HKG" -e delay=160 -e ips=6 --name mycfnat --restart=unless-stopped -p 1234:1234 cmliu/cfnat:latest
```

## wireproxy

```
docker run --expose 20173 -p 0.0.0.0:20173:20173 -v /etc/wireguard:/etc/wireproxy --env wireproxyconfigpath=/etc/wireproxy/wireproxy.conf daycat/wireproxy-docker
```

## Portainer

```
docker run -d -p 8000:8000 -p 9000:9000 -p 9443:9443 --name portainer --restart=unless-stopped -v /var/run/docker.sock:/var/run/docker.sock -v /data/portainer:/data portainer/portainer-ce:latest
```

## 青龙面板

青龙面板:5700

```
docker run -dit \
  -v /data/ql:/ql/data \
  -p 5700:5700 \
  --name qinglong \
  --hostname qinglong \
  --restart unless-stopped \
  whyour/qinglong:latest
```

检查服务

```
docker exec -it qinglong /bin/bash ql check
```

安装依赖

```
docker exec -it qinglong bash -c "$(curl -fsSL https://raw.githubusercontent.com/FlechazoPh/QLDependency/main/Shell/XinQLOneKey.sh | bash)"
```

修改config.sh

```
RepoFileExtensions="js py sh"
export WX_ADDRESS="周子健@15116155426@@湖南省@长沙市@开福区@珠江郦城@430105@410000"
export jd_jinggeng_address="周子健@15116155426@湖南省@长沙市@开福区@珠江郦城"
```

### 京东脚本

1

```
docker exec -it qinglong ql repo https://ghproxy.com/https://github.com/zero205/JD_tencent_scf.git "jd_|jx_|jdCookie"  "backUp|icon" "^jd[^_]|USER|sendNotify|sign_graphics_validate|JDJR|JDSign|ql" "main"
```

2

```
docker exec -it qinglong ql repo https://github.com/smiek2221/scripts.git "jd_|gua_" "" "ZooFaker_Necklace.js|JDJRValidator_Pure.js|sign_graphics_validate.js"
```

1. KingRan库【推荐❤❤❤❤❤】

```json
ql repo https://github.com/KingRan/KR.git "jd_|jx_|jdCookie" "activity|backUp" "^jd[^_]|USER|utils|function|sign|sendNotify|ql|JDJR"
```

2.Faker3【集合库（很多重复任务，自己禁用）❤❤❤❤】

```php
ql repo https://git.metauniverse-cn.com/https://github.com/shufflewzc/faker3.git "jd_|jx_|gua_|jddj_|jdCookie" "activity|backUp" "^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts" "main"
```

3. yyds【集合库❤❤❤】

YYDS

```php
ql repo https://github.com/okyyds/yyds.git "jd_|jx_|gua_|jddj_|jdCookie" "activity|backUp" "^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator" "master"
```

YYDS_Pure

```php
ql repo https://github.com/okyyds/yydspure.git "jd_|jx_|gua_|jddj_|jdCookie" "activity|backUp" "^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator" "master"
```

【注意】拉库前请打开青龙面板-配置文件 第18行 GithubProxyUrl="" 双引号中的内容删除。

4. 环境保护【推荐❤❤❤❤】

```php
ql repo https://github.com/feverrun/my_scripts.git "jd_|jx_|jddj_|getCookie|getJDCookie" "backUp/activity|backUp/card|backUp/py|backUp/utils/|backUp/test|jd_fruits.js|jd_pet.js|jd_factory.js|jd_health.js|jd_sgmh.js|jd_dreamFactory.js|jd_plantBean.js" "^(jd|JD|JS)[^_]|USER|sendNotify|utils"
```

5. ccwav大佬的通知增强版和CK检测

//不包含sendNotify:

```php
ql repo https://github.com/ccwav/QLScript2.git "jd_" "sendNotify|NoUsed" "ql"
```

//包含sendNotify:

```php
ql repo https://github.com/ccwav/QLScript2.git "jd_" "NoUsed" "ql|sendNotify"
```

6.【619】【集合库，可选】

```php
ql repo https://github.com/gys619/jdd.git "jd_|jx_|jddj_|gua_|getJDCookie|wskey" "activity|backUp" "^jd[^_]|USER|utils|ZooFaker_Necklace|JDJRValidator_|sign_graphics_validate|jddj_cookie|function|ql|magic|JDJR|JD" "main"
```

7 .【zero205】【集合库，推荐拉KR即可】

```php
ql repo https://github.com/zero205/JD_tencent_scf.git "jd_|jx_|jdCookie" "backUp|icon" "^jd[^_]|USER|sendNotify|sign_graphics_validate|JDJR|JDSign|ql" "main"
```

8 .【6dylan6/jdpro】

```php
ql repo https://git.so2.link/6dylan6/jdpro.git "jd_|jx_|jddj_" "backUp" "^jd[^_]|USER|JD|function|sendNotify"
```

9 .【青蛙/smiek2121】

```php
ql repo https://github.com/smiek2121/scripts.git "jd_|gua_" "" "^jd[^_]|USER|utils|sendNotify|ZooFaker|JDJRValidator_|^sign|cleancart_"
```

10 .【船长】

```php
ql repo https://github.com/HarbourJ/HarbourToulu.git "jd_" "activity|backUp|jd_sign" "^jd[^_]|USER|utils|ZooFaker_Necklace|JDJR
```

### DailyCheckIn

https://sitoi.github.io/dailycheckin/

### BiliOutils

https://bilioutils.js.org/

## WOL

```
docker run -d --net=host --restart=unless-stopped chishin/wol-go-web
```

## DDNS-GO

```
docker run -d --name ddns-go --restart=unless-stopped --net=host -v /data/ddns-go:/root jeessy/ddns-go
```

## Lucky

```
docker run -d --name lucky --restart=unless-stopped --net=host -v /data/lucky:/goodluck gdy666/lucky
```

http://ip:16601

## Cron

```
apt install cron
/etc/init.d/cron restart
```

编辑定时自动脚本

```
crontab -e
```

在ssh中执行脚本，然后编辑文件。

```
0 4 * * * /sbin/reboot
```

丢进去这个脚本，表示每天凌晨1点重启服务器。编辑完毕之后:wq保存退出。

保存退出重启生效

```
/etc/init.d/cron stop
/etc/init.d/cron start
```

## Diun

```
docker run -d --name diun --restart=always\
  -e "TZ=Asia/Shanghai" \
  -e "DIUN_WATCH_WORKERS=20" \
  -e "DIUN_WATCH_SCHEDULE=0 0 3 1/2 * ?" \
  -e "DIUN_WATCH_JITTER=30s" \
  -e "DIUN_PROVIDERS_DOCKER=true" \
  -v "/data/diun:/data" \
  -v "/var/run/docker.sock:/var/run/docker.sock" \
  -l "diun.enable=true" \
  crazymax/diun:latest
```

使用方法

```
docker exec -it diun sh
```

## 皎月连

###### OpenWrt安装包

一键下载并安装

```
sh -c "$(curl -sSL https://natpierce.oss-cn-beijing.aliyuncs.com/ipk/install.sh)"
```

###### Docker镜像

一键拉取并运行

```
docker run -it --name natpierce --restart=always --privileged=true --net=host -d natpierce/natpierce:arm32
```

## Cloudflare Tunnel

```bash
curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-armhf.deb

sudo dpkg -i cloudflared.deb

sudo cloudflared service install 

sudo systemctl restart cloudflared.service
```

docker版

```
docker run --name cloudflared -d --restart=unless-stopped --net=host zoeyvid/cloudflared:latest tunnel --no-autoupdate run --token #token

docker run cloudflare/cloudflared:latest tunnel --no-autoupdate run --token
```

蒲公英

```
docker run -d --device=/dev/net/tun --net=host --cap-add=NET_ADMIN --env PGY_USERNAME="xxx" --env PGY_PASSWORD="xxx" bestoray/pgyvpn
```

## PVE

### ssh

修改/etc/ssh/sshd_config

```bash
Port 22
PasswordAuthentication yes
PermitRootLogin yes

sudo systemctl restart sshd
```

### 时区设置

默认情况下是0时区：

```bash
root@docker:~## date 
Sun Mar 24 07:04:09 UTC 2024
root@docker:~## date -R
Sun, 24 Mar 2024 07:04:11 +0000
```

改为北京时间：

```bash
root@docker:~## timedatectl set-timezone Asia/Shanghai
root@docker:~## timedatectl
 Local time: Sun 2024-03-24 15:06:22 CST
 Universal time: Sun 2024-03-24 07:06:22 UTC
 RTC time: n/a
 Time zone: Asia/Shanghai (CST, +0800)
System clock synchronized: yes
 NTP service: inactive
 RTC in local TZ: no
```

可以看到已成功设置为北京时间了。

### Wireguard

要使位于PVE中的宿主机通过WireGuard连接上网，然后让位于LXC容器中的应用程序也能正常上网，您需要按照以下步骤进行设置：

确保宿主机正确配置了WireGuard，并且能够成功连接到互联网。您可以参考WireGuard官方文档或其他教程来完成这一步骤。

在宿主机上设置IP转发。您可以通过以下命令启用IP转发：

```bash
sysctl -w net.ipv4.ip_forward=1
```

修改防火墙

```
iptables -t nat -A POSTROUTING -o wg0 -j MASQUERADE

# 允许从 vmbr0 到 wg0 的新连接和已建立连接
iptables -A FORWARD -i vmbr0 -o wg0 -j ACCEPT

# 允许从 wg0 返回到 vmbr0 的已建立或相关的连接
iptables -A FORWARD -i wg0 -o vmbr0 -m state --state RELATED,ESTABLISHED -j ACCEPT
```

在LXC容器中配置网络。在LXC配置文件中指定宿主机的IP地址作为默认网关。您可以编辑LXC配置文件并添加以下配置：

```bash
lxc.net.0.gateway = <宿主机IP地址>
```

配置LXC容器的DNS。确保LXC容器中的/etc/resolv.conf文件正确指向可用的DNS服务器，以便容器中的应用程序能够解析域名。

使用 `wg-quick up wg0` 启动 WireGuard，它默认会尝试修改路由表（除非你在 `wg0.conf` 的 `[Interface]` 部分添加了 `Table = off`）。它通常会添加指向 VPN Peer 的路由，并可能根据 `AllowedIPs = 0.0.0.0/0` 来设置默认路由。

验证网络连接。在LXC容器中运行ping命令或访问一个网站，确保容器中的应用程序能够正常访问互联网。

通过以上步骤，您应该能够使位于PVE中的宿主机通过WireGuard连接上网，并让位于LXC容器中的应用程序也能正常上网。如果遇到问题，可以尝试调整网络配置或查看日志以调试。

## Iptables

#### 保存 iptables 规则

为了确保上述规则在系统重启后仍然有效，你需要将规则保存下来。根据你的发行版，可以使用 `iptables-persistent` 或其他工具。

1. **安装 iptables-persistent**:
   
    `apt-get install iptables-persistent`
   
    安装过程中，会要求您保存当前的 iptables 规则，选择 “是”。

2. **手动保存规则**:
   
    你可以手动保存规则，使用以下命令：
   
    `iptables-save > /etc/iptables/rules.v4`
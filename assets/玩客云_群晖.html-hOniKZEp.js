import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as l,c as r,b as e,d as n,e as a,a as s}from"./app-DNA9lu2T.js";const c={},o=e("h1",{id:"玩客云",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#玩客云","aria-hidden":"true"},"#"),n(" 玩客云")],-1),u=e("p",null,"安装包",-1),v={href:"https://github.com/hzyitc/armbian-onecloud/releases/download/ci-20240311-162146-UTC/Armbian-unofficial_24.5.0-trunk_Onecloud_bullseye_edge_6.7.9_minimal.img.xz",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nano /etc/apt/sources.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除原内容，然后把下面的内容粘贴进入，按CTRL+X 输入Y保存即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后更新软件源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt update
apt upgrade
sudo apt-get install  gcc automake autoconf libtool make zip unzip build-essential net-tools iptables
sudo apt-get install --fix-missing
# apt --fix-broken install
# sudo apt autoclean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#Docker%E5%AE%89%E8%A3%85"><strong>Docker安装</strong></a></p><p><strong>Install Home Assistant Supervised</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get install \\
apparmor \\
jq \\
wget \\
curl \\
udisks2 \\
libglib2.0-bin \\
network-manager \\
dbus \\
lsb-release \\
systemd-journal-remote -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>OS Agent</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://github.com/home-assistant/os-agent/releases/download/1.4.1/os-agent_1.4.1_linux_armv7.deb
sudo dpkg -i os-agent_1.4.1_linux_armv7.deb
sudo apt-get install apparmor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>grub错误</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>解决方法很简单：
sudo nano /etc/default/grub
添加：
systemd.unified_cgroup_hierarchy=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Home Assistant Supervised Debian Package</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb
dpkg -i homeassistant-supervised.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Docker镜像</strong></p><p>直接修改 <code>/etc/docker/daemon.json</code> (docker 版本 &gt;= 1.10 时) 内容为:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://05f073ad3c0010ea0f4bc00b7105ec20.mirror.swr.myhuaweicloud.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改后重启服务:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker pull 05f073ad3c0010ea0f4bc00b7105ec20.mirror.swr.myhuaweicloud.com/homeassistant/armv7-homeassistant
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
docker pull dockerproxy.com/homeassistant/armv7-homeassistant:latest
docker tag dockerproxy.com/homeassistant/armv7-homeassistant:latest homeassistant/armv7-homeassistant:latest
docker rmi dockerproxy.com/homeassistant/armv7-homeassistant:latest
docker run -d --privileged --restart=unless-stopped --name=&quot;homeassistant&quot; -v /data/homeassistant/config:/config --net=host homeassistant/armv7-homeassistant
# docker run -d --privileged --restart=unless-stopped --name=&quot;homeassistant&quot; -v /data/homeassistant/config:/config --net=host ghcr.io/home-assistant/raspberrypi3-homeassistant
=======
docker run -d --restart=unless-stopped --name=&quot;homeassistant&quot; -v /data/homeassistant/config:/config --net=host ghcr.io/homeassistant/armv7-homeassistant
docker run -d --privileged --restart=unless-stopped --name=&quot;homeassistant&quot; -v /data/homeassistant/config:/config --net=host ghcr.io/home-assistant/raspberrypi3-homeassistant
&gt;&gt;&gt;&gt;&gt;&gt;&gt; 198c2116c5109f2dc09ab42ad8eb0a95319b83d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hacs" tabindex="-1"><a class="header-anchor" href="#hacs" aria-hidden="true">#</a> <strong>HACS</strong></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it homeassistant bash
wget -O - https://hacs.vip/get | bash -
或wget -O - https://hacs.vip/get | HUB_DOMAIN=ghproxy.com/github.com bash -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="supervisor" tabindex="-1"><a class="header-anchor" href="#supervisor" aria-hidden="true">#</a> Supervisor</h2><p>更新</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ha supervisor update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>卸载</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl disable haos-agent.service
sudo systemctl disable hassio-apparmor.service
sudo systemctl disable hassio-supervisor.service
sudo systemctl stop hassio-supervisor.service
sudo systemctl stop haos-agent.service
sudo systemctl stop hassio-apparmor.service
docker ps | grep -E &#39;hassio&#39;| awk &#39;{print $1}&#39; | xargs docker rm -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</p><h2 id="连接wifi" tabindex="-1"><a class="header-anchor" href="#连接wifi" aria-hidden="true">#</a> 连接WiFi</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iw wlo1 scan | grep SSID	#扫描附近的wifi
nmcli d wifi connect ZZJ_WiFi password 1111111113 #连接wifi(密码含有空格则用引号括起)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置开机启动</p><p><code>cd /etc/init.d/</code><code>nano mywifi</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
### BEGIN INIT INFO
# Default-Start:  2 3 4 5
# Default-Stop: 0 1 6
### END INIT INFO
sleep 30s

nmcli d wifi connect MaLanShanCDong password qaz1234560

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>chmod +x /etc/init.d/mywifi</code></p><p><code>update-rc.d mywifi defaults</code></p><p>编辑crontab <code>crontab -e</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 * * * * /etc/init.d/mywifi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>=======</p><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><p>198c2116c5109f2dc09ab42ad8eb0a95319b83d1</p></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote>`,39),p={id:"debian-使用-cron-执行定时任务",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#debian-使用-cron-执行定时任务","aria-hidden":"true"},"#",-1),g={href:"https://www.cnblogs.com/mouseleo/p/8585979.html",target:"_blank",rel:"noopener noreferrer"},h=s(`<p>在linux下有两种方法来让一个命令或者脚本执行:</p><ol><li>crontab : 执行一个任务一次或者多次.</li><li>at : 只执行一次.</li></ol><p>crontab是通过读取一个crontab文件来工作，这是一个普通的文本文件，里面列出了要执行的任务。每行都含有要指定的任务的命令、参数与选项，以及要执行任务的时间。（cron 软件在后台运行并且经常检查 /etc/crontab 文件。cron 软件也检查 /var/cron/tabs 目录，搜索新的 crontab 文件。这些 crontab 文件存储一些 cron 在特定时间执行任务的信息。） crontab的基本格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
* * * * * command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>=======</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
1. \\* * * * * command

&gt;&gt;&gt;&gt;&gt;&gt;&gt; 198c2116c5109f2dc09ab42ad8eb0a95319b83d1
几个星号分别为：分 时 日 月 周，最后是要执行的命令。

- 分：0~59
- 时：0~23
- 日：1~31
- 月：1~12
- 周：0～6（0表示星期天）

除了数字还有几个个特殊的符号就是* / - ：

- \\* 代表所有的取值范围内的数字
- / 代表每的意思
- */5 表示每5个单位
- \\- 代表从某个数字到某个数字
- , 分开几个离散的数字

配置文件的一些例子：

- 0 3 * * * /root/test.sh 每天凌晨3点执行test.sh文件
- \\* 23-7/1 * * * /root/lnmp restart 晚上11点到早上7点之间，每隔一小时重启lnmp套件
- */30 * * * * /usr/sbin/ntpdate 每半小时同步一下时间
- 0 23 * * 6 /lnmp restart 每星期六的11 : 00 pm重启重启lnmp套件。
- */1 * * * * echo &quot;i am running.&quot;&gt;&gt;/tmp/running.txt 每隔1分钟向/tmp/running.txt写一个&quot;i am running.&quot;字符串。

运行
我以为编辑crontab保存后会自动执行，其实不然，必须通过重启cron才可以，命令如下：

- 启动/etc/init.d/cron start
- 关闭/etc/init.d/cron stop
- 重启/etc/init.d/cron restart

# 群晖

## OPKG

ssh 进入群晖后, sudo -i 获取管理员权限, 运行下面的命令:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>wget -O - http://bin.entware.net/x64-k3.2/installer/generic.sh | sh</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
脚本运行完毕后, 修改环境文件:

1. /root/.profile:

PATH=/sbin:/bin:/usr/sbin:/usr/bin:/usr/syno/sbin:/usr/syno/bin:/usr/local/sbin:/usr/local/bin:/opt/bin:/opt/sbin

2. /etc/rc:

/opt/etc/init.d/rc.unslung start

# Docker

## Docker安装

**Docker**

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>export DOWNLOAD_URL=&quot;https://mirrors.tuna.tsinghua.edu.cn/docker-ce&quot;</p><h1 id="如您使用-curl" tabindex="-1"><a class="header-anchor" href="#如您使用-curl" aria-hidden="true">#</a> 如您使用 curl</h1><p>curl -fsSL https://get.docker.com/ | sh</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
国内镜像

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mkdir -p /etc/docker tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39; { &quot;registry-mirrors&quot;: [ &quot;https://0b27f0a81a00f3560fbdc00ddd2f99e0.mirror.swr.myhuaweicloud.com&quot;, &quot;https://ypzju6vq.mirror.aliyuncs.com&quot;, &quot;https://registry.docker-cn.com&quot;, &quot;http://hub-mirror.c.163.com&quot;, &quot;https://docker.mirrors.ustc.edu.cn&quot; ] } EOF systemctl daemon-reload systemctl restart docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


## Docker基本命令

启动 Docker 服务

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl start docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
查看 Docker 运行状态

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl status docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
将 Docker 服务加入开机自启动

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl enable docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
查看容器在线状态及大小

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker ps -as</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
查看容器的运行输出日志

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker logs freenom</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
重新启动容器

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker restart freenom</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
停止容器的运行

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker stop freenom</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
移除容器

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker rm -f freenom</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
查看 docker 容器占用 CPU，内存等信息

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker stats --no-stream</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
查看 Docker 安装版本等信息

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker version</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
重启 Docker（非容器）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl restart docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
清理 Docker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker system prune</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
查看 Docker 网络信息

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker network ls</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
检查 bridge 网络状态

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker network inspect bridge</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
修改容器网段IP
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
=======

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 /etc/docker/daemon.json，加入一行 &quot;bip&quot;: &quot;192.168.1.5/24&quot;,，然后再次查看 ifconfig，已经变成了 192 网段了 重启 docker 服务，curl 尝试正常</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
批量停止

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker stop $(docker ps -aq) docker stop $(docker ps -a | grep &quot;hassio&quot; | awk &#39;{print $1}&#39;)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
批量删除

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker rmi --force <code>docker images | grep hassio | awk &#39;{print $3}&#39;</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
&gt;&gt;&gt;&gt;&gt;&gt;&gt; 198c2116c5109f2dc09ab42ad8eb0a95319b83d1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 /etc/docker/daemon.json，加入一行 &quot;bip&quot;: &quot;192.168.1.5/24&quot;,，然后再次查看 ifconfig，已经变成了 192 网段了 重启 docker 服务，curl 尝试正常</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
批量停止

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker stop $(docker ps -aq) docker stop $(docker ps -a | grep &quot;hassio&quot; | awk &#39;{print $1}&#39;)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
批量删除

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker rmi --force <code>docker images | grep hassio | awk &#39;{print $3}&#39;</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


## 清理空间

查看空间占用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>df -h</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
查看当前文件夹下占用空间分布

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>du -sh *</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
清理脚本 clean.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#!/bin/bash echo &quot;======== start clean docker containers logs ========&quot; logs=$(find /var/lib/docker/containers/ -name *-json.log) for log in $logs do echo &quot;clean logs : $log&quot; cat /dev/null &gt; $log done echo &quot;======== end clean docker containers logs ========&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>chmod +x clean.sh</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
编辑crontab \`crontab -e\`

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>0 5 * * 1 /var/lib/docker/clean.sh</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
## Docker代理

1. Create a systemd drop-in directory for the \`docker\` service:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sudo mkdir -p /etc/systemd/system/docker.service.d</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
2. Create a file named \`/etc/systemd/system/docker.service.d/http-proxy.conf\` that adds the \`HTTP_PROXY\` environment variable:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[Service] Environment=&quot;HTTP_PROXY=socks5://127.0.0.1:20170&quot; Environment=&quot;HTTPS_PROXY=socks5://127.0.0.1:20170&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
3. Flush changes and restart Docker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sudo systemctl daemon-reload sudo systemctl restart docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
4. Verify that the configuration has been loaded and matches the changes you made, for example:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sudo systemctl show --property=Environment docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
修改hosts

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>echo &quot;185.199.109.133 raw.githubusercontent.com&quot; &gt;&gt; /etc/hosts docker exec -it homeassistant /bin/bash</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
## 重建Docker网络

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="安装brctl" tabindex="-1"><a class="header-anchor" href="#安装brctl" aria-hidden="true">#</a> 安装brctl</h1><p>apt-get install bridge-utils yum install bridge-utils</p><h1 id="停止docker服务" tabindex="-1"><a class="header-anchor" href="#停止docker服务" aria-hidden="true">#</a> 停止docker服务</h1><p>systemctl stop docker</p><h1 id="重建-docker-网络" tabindex="-1"><a class="header-anchor" href="#重建-docker-网络" aria-hidden="true">#</a> 重建 docker 网络</h1><p>ifconfig docker0 down brctl delbr docker0</p><h1 id="重启docker服务" tabindex="-1"><a class="header-anchor" href="#重启docker服务" aria-hidden="true">#</a> 重启docker服务</h1><p>systemctl start docker</p><h1 id="查看ip转发" tabindex="-1"><a class="header-anchor" href="#查看ip转发" aria-hidden="true">#</a> 查看IP转发</h1><p>cat /proc/sys/net/ipv4/ip_forward</p><h1 id="ip-转发需要进行开启" tabindex="-1"><a class="header-anchor" href="#ip-转发需要进行开启" aria-hidden="true">#</a> IP 转发需要进行开启</h1><p>echo 1 &gt; /proc/sys/net/ipv4/ip_forward</p><p>使用上述任何一种方法都不会使更改持久。为了确保新设置在重新启动后仍然有效，您需要编辑 /etc/sysctl.conf 文件。</p><h1 id="sudo-nano-etc-sysctl-conf" tabindex="-1"><a class="header-anchor" href="#sudo-nano-etc-sysctl-conf" aria-hidden="true">#</a> sudo nano /etc/sysctl.conf</h1><p>将以下行之一添加到文件底部，具体取决于您想要关闭还是打开 Linux IP 转发。然后，保存对此文件的更改。该设置在重新启动后将是永久的。 net.ipv4.ip_forward 设置控制是否为 IPv4 打开或关闭 IP 转发。 net.ipv4.ip_forward = 0 OR net.ipv4.ip_forward = 1 编辑文件后，您可以运行以下命令以使更改立即生效。</p><h1 id="sysctl-p" tabindex="-1"><a class="header-anchor" href="#sysctl-p" aria-hidden="true">#</a> sysctl -p</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
## Watchtower

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker run --rm <br> -v /var/run/docker.sock:/var/run/docker.sock <br> containrrr/watchtower <br> --cleanup <br> --run-once <br> v2raya homeassistant</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


# OpenWrt

🔵打开网卡混杂模式

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ip link set eth0 promisc on</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
🔵创建网络

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker network create -d macvlan --subnet=192.168.30.0/24 --gateway=192.168.30.1 -o parent=eth0 macnet</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
🔘[↑自己根据 玩客云 所在网段修改，如：玩客云IP:10.1.2.11，则10.1.1.0/24 改成 10.1.2.0/24，10.1.1.1改成主路由地址]

🔵拉取 OpenWRT 镜像

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker pull wfnb/onecloud:23-01-25-beta</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
🔵创建容器

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker run -d --name=OpenWrt --restart always --network macnet --privileged wfnb/onecloud:23-01-25-beta /sbin/init</p><p>docker import openwrt-01.10.2023-meson-meson8b-thunder-onecloud-rootfs.tar.gz kiddin9_openwrt docker run -d --name=OpenWrt --restart always --network macnet --privileged kiddin9_openwrt /sbin/init</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
🔘--name=OpenWrt 其中OpenWrt是容器名称，可以更改成你想要的，容器名称注意不要和其他容器一样，会冲突

🔘--ip 10.1.1.13 其中10.1.1.13是容器IP，可以更改成你想要的，容器IP不要重复，这一项可删除

🔵修改OpenWrt IP

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker exec OpenWrt sed -e &quot;s/10.1.1.13/192.168.30.120/&quot; -i /etc/config/network docker exec -it OpenWrt bash /etc/init.d/network restart</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
🔘OpenWrt 是容器名称，和你创建容器时的一致

🔘镜像设置的默认IP是10.1.1.13，可通过该命令修改

🔵管理密码是 password

🔵LAN口固定IP地址，网关指向主路由IP地址

iptables -t nat -I POSTROUTING eth0 -j MASQUERADE

🔴设置 容器不自启动 、 停止容器 和 删除容器

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker container update --restart=no [容器ID] docker stop [容器ID] docker rm [容器ID]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
🔴查看所有镜像

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker images</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
🔘记录下 xuanaimai/openwrt 21-09-15 右边的 IMAGE ID（镜像ID，下面用得到）

🔴删除镜像

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker rmi [镜像ID]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# Alist

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="headdocker-run-d-restart-unless-stopped-v-data-alist-opt-alist-data-v-tmp-opt-alist-tmp-network-host-name-alist-xhofe-alist-latest" tabindex="-1"><a class="header-anchor" href="#headdocker-run-d-restart-unless-stopped-v-data-alist-opt-alist-data-v-tmp-opt-alist-tmp-network-host-name-alist-xhofe-alist-latest" aria-hidden="true">#</a> &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD docker run -d --restart=unless-stopped -v /data/alist:/opt/alist/data -v /tmp:/opt/alist/tmp --network=host --name=&quot;alist&quot; xhofe/alist:latest</h1><p>docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -v /tmp:/opt/alist/tmp --network=host --name=&quot;alist&quot; xhofe/alist:latest</p><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><p>198c2116c5109f2dc09ab42ad8eb0a95319b83d1</p></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
查看密码

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker exec -it alist ./alist admin</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
使用[http://ip:5244](http://ip:5244/)    来登录alist点击下面的管理输入管理员的账号和密码

# Homepage

**Homepage**

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker run -p 3000:3000 -v /etc/homepage:/app/config -v /var/run/docker.sock:/var/run/docker.sock ghcr.io/benphelps/homepage:latest</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
**Homarr**

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker run <br> --name homarr <br> --restart always <br> -p 7575:7575 <br> -v /data/homarr/configs:/app/data/configs <br> -v /data/homarr/icons:/app/public/icons <br> -d ghcr.io/ajnart/homarr:latest</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
**Flare**

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker run -d --name flare --restart=unless-stopped -p 80:5005 -v /data/flare:/app soulteary/flare</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# V2rayA

&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
Docker安装

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="docker-run-d-restart-always-privileged-network-host-name-v2raya-e-v2raya-log-file-tmp-v2raya-log-e-v2raya-v2ray-bin-usr-local-bin-v2ray-e-v2raya-nftables-support-off-e-iptables-mode-legacy" tabindex="-1"><a class="header-anchor" href="#docker-run-d-restart-always-privileged-network-host-name-v2raya-e-v2raya-log-file-tmp-v2raya-log-e-v2raya-v2ray-bin-usr-local-bin-v2ray-e-v2raya-nftables-support-off-e-iptables-mode-legacy" aria-hidden="true">#</a> docker run -d <br> --restart=always <br> --privileged <br> --network=host <br> --name v2raya <br> -e V2RAYA_LOG_FILE=/tmp/v2raya.log <br> -e V2RAYA_V2RAY_BIN=/usr/local/bin/v2ray <br> -e V2RAYA_NFTABLES_SUPPORT=off <br> -e IPTABLES_MODE=legacy \\</h1><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
  --restart=unless-stopped \\
  --privileged \\
  --network=host \\
  --name v2raya \\
  -e V2RAYA_ADDRESS=0.0.0.0:2017 \\
&gt;&gt;&gt;&gt;&gt;&gt;&gt; 198c2116c5109f2dc09ab42ad8eb0a95319b83d1
  -v /lib/modules:/lib/modules:ro \\
  -v /etc/resolv.conf:/etc/resolv.conf \\
  -v /etc/v2raya:/etc/v2raya \\
  mzz2017/v2raya
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD Linux安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo sh -c &quot;$(wget -qO- https://github.com/v2rayA/v2rayA-installer/raw/main/installer.sh)&quot; @ --with-v2ray
systemctl start v2raya  #启动服务
systemctl enable v2raya  #开机启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>=======</p><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><p>198c2116c5109f2dc09ab42ad8eb0a95319b83d1 开启IP转发</p></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo net.ipv4.ip_forward=1 &gt;&gt; /etc/sysctl.conf &amp;&amp; sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http://ip:2017</p><h1 id="wireproxy" tabindex="-1"><a class="header-anchor" href="#wireproxy" aria-hidden="true">#</a> wireproxy</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --expose 20173 -p 0.0.0.0:20173:20173 -v /etc/wireguard:/etc/wireproxy --env wireproxyconfigpath=/etc/wireproxy/wireproxy.conf daycat/wireproxy-docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="portainer" tabindex="-1"><a class="header-anchor" href="#portainer" aria-hidden="true">#</a> Portainer</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8000:8000 -p 9000:9000 -p 9443:9443 --name portainer --restart=unless-stopped -v /var/run/docker.sock:/var/run/docker.sock -v /portainer、data:/data portainer/portainer-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="青龙面板" tabindex="-1"><a class="header-anchor" href="#青龙面板" aria-hidden="true">#</a> 青龙面板</h1><p>青龙面板:5700</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -dit \\
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
  -v /data/ql:/ql/data \\
=======
  -v /ql/data:/ql/data \\
&gt;&gt;&gt;&gt;&gt;&gt;&gt; 198c2116c5109f2dc09ab42ad8eb0a95319b83d1
  --network=host \\
  --name qinglong \\
  --hostname qinglong \\
  --restart unless-stopped \\
  dockerproxy.com/whyour/qinglong:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it qinglong /bin/bash ql check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
docker exec -it qinglong bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/FlechazoPh/QLDependency/main/Shell/XinQLOneKey.sh | bash)&quot;

=======
docker exec -it qinglong bash -c &quot;$(curl -fsSL https://githubfast.com/FlechazoPh/QLDependency/raw/main/Shell/QLOneKeyDependency.sh | sh)&quot;

#青龙内更新依赖
task KingRan_KR/jd_indeps.sh
&gt;&gt;&gt;&gt;&gt;&gt;&gt; 198c2116c5109f2dc09ab42ad8eb0a95319b83d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改config.sh</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RepoFileExtensions=&quot;js py sh&quot;
export WX_ADDRESS=&quot;周子健@15116155426@@湖南省@长沙市@开福区@珠江郦城@430105@410000&quot;
export jd_jinggeng_address=&quot;周子健@15116155426@湖南省@长沙市@开福区@珠江郦城&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="京东脚本" tabindex="-1"><a class="header-anchor" href="#京东脚本" aria-hidden="true">#</a> 京东脚本</h2><p>1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it qinglong ql repo https://ghproxy.com/https://github.com/zero205/JD_tencent_scf.git &quot;jd_|jx_|jdCookie&quot;  &quot;backUp|icon&quot; &quot;^jd[^_]|USER|sendNotify|sign_graphics_validate|JDJR|JDSign|ql&quot; &quot;main&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it qinglong ql repo https://github.com/smiek2221/scripts.git &quot;jd_|gua_&quot; &quot;&quot; &quot;ZooFaker_Necklace.js|JDJRValidator_Pure.js|sign_graphics_validate.js&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>KingRan库【推荐❤❤❤❤❤】</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>ql repo https<span class="token operator">:</span><span class="token comment">//github.com/KingRan/KR.git &quot;jd_|jx_|jdCookie&quot; &quot;activity|backUp&quot; &quot;^jd[^_]|USER|utils|function|sign|sendNotify|ql|JDJR&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.Faker3【集合库（很多重复任务，自己禁用）❤❤❤❤】</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>ql repo https<span class="token punctuation">:</span><span class="token comment">//git.metauniverse-cn.com/https://github.com/shufflewzc/faker3.git &quot;jd_|jx_|gua_|jddj_|jdCookie&quot; &quot;activity|backUp&quot; &quot;^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts&quot; &quot;main&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>yyds【集合库❤❤❤】</li></ol><p>YYDS</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>ql repo https<span class="token punctuation">:</span><span class="token comment">//github.com/okyyds/yyds.git &quot;jd_|jx_|gua_|jddj_|jdCookie&quot; &quot;activity|backUp&quot; &quot;^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator&quot; &quot;master&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>YYDS_Pure</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>ql repo https<span class="token punctuation">:</span><span class="token comment">//github.com/okyyds/yydspure.git &quot;jd_|jx_|gua_|jddj_|jdCookie&quot; &quot;activity|backUp&quot; &quot;^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator&quot; &quot;master&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>【注意】拉库前请打开青龙面板-配置文件 第18行 GithubProxyUrl=&quot;&quot; 双引号中的内容删除。</p><ol start="4"><li>环境保护【推荐❤❤❤❤】</li></ol><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>ql repo https<span class="token punctuation">:</span><span class="token comment">//github.com/feverrun/my_scripts.git &quot;jd_|jx_|jddj_|getCookie|getJDCookie&quot; &quot;backUp/activity|backUp/card|backUp/py|backUp/utils/|backUp/test|jd_fruits.js|jd_pet.js|jd_factory.js|jd_health.js|jd_sgmh.js|jd_dreamFactory.js|jd_plantBean.js&quot; &quot;^(jd|JD|JS)[^_]|USER|sendNotify|utils&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>ccwav大佬的通知增强版和CK检测</li></ol><p>//不包含sendNotify:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>ql repo https<span class="token punctuation">:</span><span class="token comment">//github.com/ccwav/QLScript2.git &quot;jd_&quot; &quot;sendNotify|NoUsed&quot; &quot;ql&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>//包含sendNotify:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>ql repo https<span class="token punctuation">:</span><span class="token comment">//github.com/ccwav/QLScript2.git &quot;jd_&quot; &quot;NoUsed&quot; &quot;ql|sendNotify&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.【619】【集合库，可选】</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>ql repo https<span class="token punctuation">:</span><span class="token comment">//github.com/gys619/jdd.git &quot;jd_|jx_|jddj_|gua_|getJDCookie|wskey&quot; &quot;activity|backUp&quot; &quot;^jd[^_]|USER|utils|ZooFaker_Necklace|JDJRValidator_|sign_graphics_validate|jddj_cookie|function|ql|magic|JDJR|JD&quot; &quot;main&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7 .【zero205】【集合库，推荐拉KR即可】</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>ql repo https<span class="token punctuation">:</span><span class="token comment">//github.com/zero205/JD_tencent_scf.git &quot;jd_|jx_|jdCookie&quot; &quot;backUp|icon&quot; &quot;^jd[^_]|USER|sendNotify|sign_graphics_validate|JDJR|JDSign|ql&quot; &quot;main&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8 .【6dylan6/jdpro】</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>ql repo https<span class="token punctuation">:</span><span class="token comment">//git.so2.link/6dylan6/jdpro.git &quot;jd_|jx_|jddj_&quot; &quot;backUp&quot; &quot;^jd[^_]|USER|JD|function|sendNotify&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>9 .【青蛙/smiek2121】</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>ql repo https<span class="token punctuation">:</span><span class="token comment">//github.com/smiek2121/scripts.git &quot;jd_|gua_&quot; &quot;&quot; &quot;^jd[^_]|USER|utils|sendNotify|ZooFaker|JDJRValidator_|^sign|cleancart_&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>10 .【船长】</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>ql repo https<span class="token punctuation">:</span><span class="token comment">//github.com/HarbourJ/HarbourToulu.git &quot;jd_&quot; &quot;activity|backUp|jd_sign&quot; &quot;^jd[^_]|USER|utils|ZooFaker_Necklace|JDJR</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dailycheckin" tabindex="-1"><a class="header-anchor" href="#dailycheckin" aria-hidden="true">#</a> DailyCheckIn</h2><h1 id="headhttps-sitoi-github-io-dailycheckin" tabindex="-1"><a class="header-anchor" href="#headhttps-sitoi-github-io-dailycheckin" aria-hidden="true">#</a> &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD https://sitoi.github.io/dailycheckin/</h1><p>https://sitoi.gitee.io/dailycheckin/</p><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><p>198c2116c5109f2dc09ab42ad8eb0a95319b83d1</p></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote><h2 id="bilioutils" tabindex="-1"><a class="header-anchor" href="#bilioutils" aria-hidden="true">#</a> BiliOutils</h2><p>https://bilioutils.js.org/</p><h1 id="wol" tabindex="-1"><a class="header-anchor" href="#wol" aria-hidden="true">#</a> WOL</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --net=host --restart=unless-stopped chishin/wol-go-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="ddns-go" tabindex="-1"><a class="header-anchor" href="#ddns-go" aria-hidden="true">#</a> DDNS-GO</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
docker run -d --name ddns-go --restart=unless-stopped --net=host -v /data/ddns-go:/root jeessy/ddns-go
=======
docker run -d --name ddns-go --restart=unless-stopped --net=host -v /opt/ddns-go:/root jeessy/ddns-go
&gt;&gt;&gt;&gt;&gt;&gt;&gt; 198c2116c5109f2dc09ab42ad8eb0a95319b83d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="lucky" tabindex="-1"><a class="header-anchor" href="#lucky" aria-hidden="true">#</a> Lucky</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
docker run -d --name lucky --restart=unless-stopped --net=host -v /data/lucky:/goodluck gdy666/lucky
=======
docker run -d --name lucky --restart=unless-stopped --net=host -v /opt/luckyconf:/goodluck gdy666/lucky
&gt;&gt;&gt;&gt;&gt;&gt;&gt; 198c2116c5109f2dc09ab42ad8eb0a95319b83d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>http://ip:16601</p><h1 id="cron" tabindex="-1"><a class="header-anchor" href="#cron" aria-hidden="true">#</a> Cron</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get install cron
/etc/init.d/cron restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑定时自动脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crontab -e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在ssh中执行脚本，然后编辑文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 4 * * * /sbin/reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>丢进去这个脚本，表示每天凌晨1点重启服务器。编辑完毕之后:wq保存退出。</p><p>保存退出重启生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/etc/init.d/cron stop
/etc/init.d/cron start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="cloudflare-tunnel" tabindex="-1"><a class="header-anchor" href="#cloudflare-tunnel" aria-hidden="true">#</a> Cloudflare Tunnel</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>添加架构：
sudo dpkg --add-architecture arm64
移除架构：
sudo dpkg --remove-architecture xxx

curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64.deb &amp;&amp; 

sudo dpkg -i cloudflared.deb &amp;&amp; 

sudo cloudflared service install xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker版</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name cloudflared -d --restart=unless-stopped --net=host zoeyvid/cloudflared:latest tunnel --no-autoupdate run --token eyJhIjoiZjAxNzExNGYyYTQ0YzI4NmVmZjNkZmVkMTIyNWIzZmUiLCJ0IjoiMTliM2E0MTctMGRiYy00ZDE2LWI2YTctM2I3M2UyMmNkMjYyIiwicyI6Ik1qSXlZekUzTVdNdE9USTFZeTAwWTJVNExUbGpNekV0T1RnMk5EVTBNREJpWWpjdyJ9 

docker run cloudflare/cloudflared:latest tunnel --no-autoupdate run --token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>蒲公英</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --device=/dev/net/tun --net=host --cap-add=NET_ADMIN --env PGY_USERNAME=&quot;xxx&quot; --env PGY_PASSWORD=&quot;xxx&quot; bestoray/pgyvpn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,204);function x(k,q){const i=t("ExternalLinkIcon");return l(),r("div",null,[o,u,e("p",null,[e("a",v,[n("Armbian-unofficial_24.5.0-trunk_Onecloud_bullseye_edge_6.7.9_minimal.img.xz"),a(i)])]),m,e("h2",p,[b,n(),e("a",g,[n("Debian 使用 cron 执行定时任务"),a(i)])]),h])}const _=d(c,[["render",x],["__file","玩客云_群晖.html.vue"]]);export{_ as default};

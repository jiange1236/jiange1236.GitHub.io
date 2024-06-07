import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as r,c as l,b as a,d as e,e as s,a as i}from"./app-BfYe3lCy.js";const c={},o=i(`<h1 id="玩客云" tabindex="-1"><a class="header-anchor" href="#玩客云" aria-hidden="true">#</a> 玩客云</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nano /etc/apt/sources.list
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
# apt --fix-broken install
# sudo apt autoremove -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#Docker%E5%AE%89%E8%A3%85"><strong>Docker安装</strong></a></p><p><strong>Install Home Assistant Supervised</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get install \\
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
docker run -d --restart=unless-stopped --name=&quot;homeassistant&quot; -v /data/homeassistant/config:/config --net=host ghcr.io/homeassistant/armv7-homeassistant
docker run -d --privileged --restart=unless-stopped --name=&quot;homeassistant&quot; -v /data/homeassistant/config:/config --net=host ghcr.io/home-assistant/raspberrypi3-homeassistant
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hacs" tabindex="-1"><a class="header-anchor" href="#hacs" aria-hidden="true">#</a> <strong>HACS</strong></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it homeassistant bash
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),u={id:"debian-使用-cron-执行定时任务",tabindex:"-1"},v=a("a",{class:"header-anchor",href:"#debian-使用-cron-执行定时任务","aria-hidden":"true"},"#",-1),p={href:"https://www.cnblogs.com/mouseleo/p/8585979.html",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>在linux下有两种方法来让一个命令或者脚本执行:</p><ol><li>crontab : 执行一个任务一次或者多次.</li><li>at : 只执行一次.</li></ol><p>crontab是通过读取一个crontab文件来工作，这是一个普通的文本文件，里面列出了要执行的任务。每行都含有要指定的任务的命令、参数与选项，以及要执行任务的时间。（cron 软件在后台运行并且经常检查 /etc/crontab 文件。cron 软件也检查 /var/cron/tabs 目录，搜索新的 crontab 文件。这些 crontab 文件存储一些 cron 在特定时间执行任务的信息。） crontab的基本格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>* * * * * command</li></ol><p>几个星号分别为：分 时 日 月 周，最后是要执行的命令。</p><ul><li>分：0~59</li><li>时：0~23</li><li>日：1~31</li><li>月：1~12</li><li>周：0～6（0表示星期天）</li></ul><p>除了数字还有几个个特殊的符号就是* / - ：</p><ul><li>* 代表所有的取值范围内的数字</li><li>/ 代表每的意思</li><li>*/5 表示每5个单位</li><li>- 代表从某个数字到某个数字</li><li>, 分开几个离散的数字</li></ul><p>配置文件的一些例子：</p><ul><li>0 3 * * * /root/test.sh 每天凌晨3点执行test.sh文件</li><li>* 23-7/1 * * * /root/lnmp restart 晚上11点到早上7点之间，每隔一小时重启lnmp套件</li><li>*/30 * * * * /usr/sbin/ntpdate 每半小时同步一下时间</li><li>0 23 * * 6 /lnmp restart 每星期六的11 : 00 pm重启重启lnmp套件。</li><li>*/1 * * * * echo &quot;i am running.&quot;&gt;&gt;/tmp/running.txt 每隔1分钟向/tmp/running.txt写一个&quot;i am running.&quot;字符串。</li></ul><p>运行 我以为编辑crontab保存后会自动执行，其实不然，必须通过重启cron才可以，命令如下：</p><ul><li>启动/etc/init.d/cron start</li><li>关闭/etc/init.d/cron stop</li><li>重启/etc/init.d/cron restart</li></ul><h1 id="群晖" tabindex="-1"><a class="header-anchor" href="#群晖" aria-hidden="true">#</a> 群晖</h1><h2 id="opkg" tabindex="-1"><a class="header-anchor" href="#opkg" aria-hidden="true">#</a> OPKG</h2><p>ssh 进入群晖后, sudo -i 获取管理员权限, 运行下面的命令:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget -O - http://bin.entware.net/x64-k3.2/installer/generic.sh | sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>脚本运行完毕后, 修改环境文件:</p><ol><li>/root/.profile:</li></ol><p>PATH=/sbin:/bin:/usr/sbin:/usr/bin:/usr/syno/sbin:/usr/syno/bin:/usr/local/sbin:/usr/local/bin:/opt/bin:/opt/sbin</p><ol start="2"><li>/etc/rc:</li></ol><p>/opt/etc/init.d/rc.unslung start</p><h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> Docker安装</h2><p><strong>Docker</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export DOWNLOAD_URL=&quot;https://mirrors.tuna.tsinghua.edu.cn/docker-ce&quot;
# 如您使用 curl
curl -fsSL https://get.docker.com/ | sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>国内镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /etc/docker
tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [
    &quot;https://0b27f0a81a00f3560fbdc00ddd2f99e0.mirror.swr.myhuaweicloud.com&quot;,
    &quot;https://ypzju6vq.mirror.aliyuncs.com&quot;,
    &quot;https://registry.docker-cn.com&quot;,
    &quot;http://hub-mirror.c.163.com&quot;,
    &quot;https://docker.mirrors.ustc.edu.cn&quot;
  ]
}
EOF
systemctl daemon-reload
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker基本命令" tabindex="-1"><a class="header-anchor" href="#docker基本命令" aria-hidden="true">#</a> Docker基本命令</h2><p>启动 Docker 服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 Docker 运行状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 Docker 服务加入开机自启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看容器在线状态及大小</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps -as
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看容器的运行输出日志</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker logs freenom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重新启动容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker restart freenom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止容器的运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop freenom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>移除容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rm -f freenom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 docker 容器占用 CPU，内存等信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stats --no-stream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 Docker 安装版本等信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启 Docker（非容器）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>清理 Docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker system prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 Docker 网络信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检查 bridge 网络状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network inspect bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改容器网段IP</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>修改 /etc/docker/daemon.json，加入一行 &quot;bip&quot;: &quot;192.168.1.5/24&quot;,，然后再次查看 ifconfig，已经变成了 192 网段了
重启 docker 服务，curl 尝试正常
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>批量停止</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop $(docker ps -aq)
docker stop $(docker ps -a | grep &quot;hassio&quot; | awk &#39;{print $1}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>批量删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi --force \`docker images | grep hassio | awk &#39;{print $3}&#39;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker代理" tabindex="-1"><a class="header-anchor" href="#docker代理" aria-hidden="true">#</a> Docker代理</h2><ol><li><p>Create a systemd drop-in directory for the <code>docker</code> service:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo mkdir -p /etc/systemd/system/docker.service.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Create a file named <code>/etc/systemd/system/docker.service.d/http-proxy.conf</code> that adds the <code>HTTP_PROXY</code> environment variable:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Service]
Environment=&quot;HTTP_PROXY=socks5://127.0.0.1:20170&quot;
Environment=&quot;HTTPS_PROXY=socks5://127.0.0.1:20170&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Flush changes and restart Docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Verify that the configuration has been loaded and matches the changes you made, for example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl show --property=Environment docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>修改hosts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;185.199.109.133   raw.githubusercontent.com&quot; &gt;&gt; /etc/hosts
docker exec -it homeassistant /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重建docker网络" tabindex="-1"><a class="header-anchor" href="#重建docker网络" aria-hidden="true">#</a> 重建Docker网络</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装brctl 
apt-get install bridge-utils
yum install bridge-utils

# 停止docker服务
systemctl stop docker

# 重建 docker 网络
ifconfig docker0 down
brctl delbr docker0

# 重启docker服务
systemctl start docker

# 查看IP转发
cat /proc/sys/net/ipv4/ip_forward
# IP 转发需要进行开启
echo 1 &gt; /proc/sys/net/ipv4/ip_forward

使用上述任何一种方法都不会使更改持久。为了确保新设置在重新启动后仍然有效，您需要编辑 /etc/sysctl.conf 文件。
# sudo nano /etc/sysctl.conf
将以下行之一添加到文件底部，具体取决于您想要关闭还是打开 Linux IP 转发。然后，保存对此文件的更改。该设置在重新启动后将是永久的。 net.ipv4.ip_forward 设置控制是否为 IPv4 打开或关闭 IP 转发。
net.ipv4.ip_forward = 0
OR
net.ipv4.ip_forward = 1
编辑文件后，您可以运行以下命令以使更改立即生效。
# sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watchtower" tabindex="-1"><a class="header-anchor" href="#watchtower" aria-hidden="true">#</a> Watchtower</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --rm \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  containrrr/watchtower \\
  --cleanup \\
  --run-once \\
  v2raya homeassistant
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="openwrt" tabindex="-1"><a class="header-anchor" href="#openwrt" aria-hidden="true">#</a> OpenWrt</h1><p>🔵打开网卡混杂模式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ip link set eth0 promisc on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>🔵创建网络</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network create -d macvlan --subnet=192.168.30.0/24 --gateway=192.168.30.1 -o parent=eth0 macnet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>🔘[↑自己根据 玩客云 所在网段修改，如：玩客云IP:10.1.2.11，则10.1.1.0/24 改成 10.1.2.0/24，10.1.1.1改成主路由地址]</p><p>🔵拉取 OpenWRT 镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull wfnb/onecloud:23-01-25-beta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>🔵创建容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name=OpenWrt --restart always --network macnet --privileged wfnb/onecloud:23-01-25-beta /sbin/init

docker import openwrt-01.10.2023-meson-meson8b-thunder-onecloud-rootfs.tar.gz kiddin9_openwrt
docker run -d --name=OpenWrt --restart always --network macnet --privileged kiddin9_openwrt /sbin/init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🔘--name=OpenWrt 其中OpenWrt是容器名称，可以更改成你想要的，容器名称注意不要和其他容器一样，会冲突</p><p>🔘--ip 10.1.1.13 其中10.1.1.13是容器IP，可以更改成你想要的，容器IP不要重复，这一项可删除</p><p>🔵修改OpenWrt IP</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec OpenWrt sed -e &quot;s/10.1.1.13/192.168.30.120/&quot; -i /etc/config/network
docker exec -it OpenWrt bash
/etc/init.d/network restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🔘OpenWrt 是容器名称，和你创建容器时的一致</p><p>🔘镜像设置的默认IP是10.1.1.13，可通过该命令修改</p><p>🔵管理密码是 password</p><p>🔵LAN口固定IP地址，网关指向主路由IP地址</p><p>iptables -t nat -I POSTROUTING eth0 -j MASQUERADE</p><p>🔴设置 容器不自启动 、 停止容器 和 删除容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker container update --restart=no [容器ID]
docker stop [容器ID]
docker rm [容器ID]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🔴查看所有镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>🔘记录下 xuanaimai/openwrt 21-09-15 右边的 IMAGE ID（镜像ID，下面用得到）</p><p>🔴删除镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi [镜像ID]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="alist" tabindex="-1"><a class="header-anchor" href="#alist" aria-hidden="true">#</a> Alist</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -v /tmp:/opt/alist/tmp --network=host --name=&quot;alist&quot; xhofe/alist:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it alist ./alist admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,101),b={href:"http://ip:5244/",target:"_blank",rel:"noopener noreferrer"},g=i(`<h1 id="homepage" tabindex="-1"><a class="header-anchor" href="#homepage" aria-hidden="true">#</a> Homepage</h1><p><strong>Homepage</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 3000:3000 -v /etc/homepage:/app/config -v /var/run/docker.sock:/var/run/docker.sock ghcr.io/benphelps/homepage:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Homarr</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run  \\
  --name homarr \\
  --restart always \\
  -p 7575:7575 \\
  -v /data/homarr/configs:/app/data/configs \\
  -v /data/homarr/icons:/app/public/icons \\
  -d ghcr.io/ajnart/homarr:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Flare</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name flare --restart=unless-stopped -p 80:5005 -v /data/flare:/app soulteary/flare
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="v2raya" tabindex="-1"><a class="header-anchor" href="#v2raya" aria-hidden="true">#</a> V2rayA</h1><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
  --restart=unless-stopped \\
  --privileged \\
  --network=host \\
  --name v2raya \\
  -e V2RAYA_ADDRESS=0.0.0.0:2017 \\
  -v /lib/modules:/lib/modules:ro \\
  -v /etc/resolv.conf:/etc/resolv.conf \\
  -v /etc/v2raya:/etc/v2raya \\
  mzz2017/v2raya
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启IP转发</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo net.ipv4.ip_forward=1 &gt;&gt; /etc/sysctl.conf &amp;&amp; sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http://ip:2017</p><h1 id="wireproxy" tabindex="-1"><a class="header-anchor" href="#wireproxy" aria-hidden="true">#</a> wireproxy</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --expose 20173 -p 0.0.0.0:20173:20173 -v /etc/wireguard:/etc/wireproxy --env wireproxyconfigpath=/etc/wireproxy/wireproxy.conf daycat/wireproxy-docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="portainer" tabindex="-1"><a class="header-anchor" href="#portainer" aria-hidden="true">#</a> Portainer</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8000:8000 -p 9000:9000 -p 9443:9443 --name portainer --restart=unless-stopped -v /var/run/docker.sock:/var/run/docker.sock -v /portainer、data:/data portainer/portainer-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="青龙面板" tabindex="-1"><a class="header-anchor" href="#青龙面板" aria-hidden="true">#</a> 青龙面板</h1><p>青龙面板:5700</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -dit \\
  -v /ql/data:/ql/data \\
  --network=host \\
  --name qinglong \\
  --hostname qinglong \\
  --restart unless-stopped \\
  whyour/qinglong:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it qinglong /bin/bash ql check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it qinglong bash -c &quot;$(curl -fsSL https://githubfast.com/FlechazoPh/QLDependency/raw/main/Shell/QLOneKeyDependency.sh | sh)&quot;

#青龙内更新依赖
task KingRan_KR/jd_indeps.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改config.sh</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RepoFileExtensions=&quot;js py sh&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dailycheckin" tabindex="-1"><a class="header-anchor" href="#dailycheckin" aria-hidden="true">#</a> DailyCheckIn</h2><p>https://sitoi.github.io/dailycheckin/</p><h2 id="bilioutils" tabindex="-1"><a class="header-anchor" href="#bilioutils" aria-hidden="true">#</a> BiliOutils</h2><p>https://bilioutils.js.org/</p><h1 id="wol" tabindex="-1"><a class="header-anchor" href="#wol" aria-hidden="true">#</a> WOL</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --net=host --restart=unless-stopped chishin/wol-go-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="ddns-go" tabindex="-1"><a class="header-anchor" href="#ddns-go" aria-hidden="true">#</a> DDNS-GO</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name ddns-go --restart=unless-stopped --net=host -v /opt/ddns-go:/root jeessy/ddns-go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="lucky" tabindex="-1"><a class="header-anchor" href="#lucky" aria-hidden="true">#</a> Lucky</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name lucky --restart=unless-stopped --net=host -v /opt/luckyconf:/goodluck gdy666/lucky
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http://ip:16601</p><h1 id="cron" tabindex="-1"><a class="header-anchor" href="#cron" aria-hidden="true">#</a> Cron</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get install cron
/etc/init.d/cron restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑定时自动脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crontab -e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在ssh中执行脚本，然后编辑文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 4 * * * /sbin/reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>丢进去这个脚本，表示每天凌晨1点重启服务器。编辑完毕之后:wq保存退出。</p><p>保存退出重启生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/etc/init.d/cron stop
/etc/init.d/cron start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,78);function h(x,k){const n=t("ExternalLinkIcon");return r(),l("div",null,[o,a("h2",u,[v,e(),a("a",p,[e("Debian 使用 cron 执行定时任务"),s(n)])]),m,a("p",null,[e("使用"),a("a",b,[e("http://ip:5244"),s(n)]),e(" 来登录alist点击下面的管理输入管理员的账号和密码")]),g])}const y=d(c,[["render",h],["__file","玩客云_群晖.html.vue"]]);export{y as default};

import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as n}from"./app-D47bsZ7d.js";const l={},i=n(`<p>[toc]</p><h1 id="deepin" tabindex="-1"><a class="header-anchor" href="#deepin"><span>Deepin</span></a></h1><h2 id="系统" tabindex="-1"><a class="header-anchor" href="#系统"><span>系统</span></a></h2><p>升级内核</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>sudo apt update &amp;&amp; sudo apt install linux-image-5.8.14-amd64-desktop linux-headers-5.8.14-amd64-desktop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>卸载内核</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>dpkg --list | grep linux-image</span></span>
<span class="line"><span>dpkg --list | grep linux-headers</span></span>
<span class="line"><span>sudo apt purge linux-image-5.4.*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>apt autoremove</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>就可以了</p><p><strong>QQ卡死</strong></p><p>如果 linux 里装了 win 的宋体，QQ 就会卡死，此时 QQ 会使用宋体里的点阵字体。此时解决方案是把 win 的宋体的 ttc 文件往 QQ 的 wine 容器里也装一份（即复制到 ~/.deepinwine/Deepin-QQ/drive_c/Windows/Fonts 里)，此时 QQ 不再使用宋体里的点阵字体，也基本不会卡死了。</p><p><strong>提示空间不足</strong></p><p>deepin20安装盘，启动项时按e编辑启动选项，删除livecd installer或类似字样，进入livecd模式。进入之后ctrl+alt+T打开终端，输入sudo -i，然后输入</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>mount -t efivarfs efivarfs /sys/firmware/efi/efivars</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>之后最好用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>ls /sys/firmware/efi/efivars</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看是否有大量dump-开头的文件，如果是，那么继续执行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>rm /sys/firmware/efi/efivars/dump-*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>网卡驱动</strong></p><p>https://bbs.deepin.org/zh/post/214079</p><p>https://bbs.deepin.org/zh/post/211628</p><p>#卸载网卡驱动 sudo apt autopurge bcmwl-kernel-source broadcom-sta-*</p><p>#下载网卡驱动 http://mirrors.ustc.edu.cn/debian/pool/non-free/b/broadcom-sta/broadcom-sta-source_6.30.223.271-17~bpo10%2B1_all.deb</p><p>#更新网卡驱动 sudo dpkg -i broadcom-sta*</p><p><strong>Selenium驱动</strong></p><p>export PATH=$PATH:/home/zhou/Documents/chromedriver/</p><p><strong>软件</strong></p><p>sudo apt purge unattended-upgrades</p><p>sudo apt autoclean</p><p>sudo dpkg --configure -a</p><p>sudo apt --fix-broken install</p><p>sudo apt install deepin-wine</p><p>sudo apt install build-essential gdb #gcc</p><p>sudo apt install putty</p><p>sudo apt install filezilla</p><p>sudo apt install python3-pip</p><p>sudo apt install lm-sensors hddtemp</p><p>sudo apt install psensor</p><p>sudo apt install git</p><p>sudo apt install -y chromium chromium-driver</p><p>sudo apt install telegram-desktop</p><p>sudo dpkg -i deepin.com.ynote_6.10.0.1_i386.deb</p><p><strong>notepadqq打不开</strong></p><p>sudo apt install libqt5websockets5</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>sudo apt install nfs-common</span></span>
<span class="line"><span>#显示远程主机共享文件 </span></span>
<span class="line"><span>showmount -e 192.168.1.110 </span></span>
<span class="line"><span>#创建本地目录 </span></span>
<span class="line"><span>mkdir /NFSvideo </span></span>
<span class="line"><span>#将远程文件夹挂载到本地目录 </span></span>
<span class="line"><span>sudo mount -t nfs 192.168.1.110:/volume1/video /data/home/zhou/Videos/nasvideo </span></span>
<span class="line"><span>#开启开机挂载 </span></span>
<span class="line"><span>vi /etc/fstab </span></span>
<span class="line"><span>192.168.1.15:/volume4/Swap  /NFSfile    nfs    defaults    0    0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>deepin.com.ynote_6.10.0.1_i386.deb</p><h2 id="tuna" tabindex="-1"><a class="header-anchor" href="#tuna"><span>TUNA</span></a></h2><p>The simple way:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>wget https://tuna.moe/oh-my-tuna/oh-my-tuna.py </span></span>
<span class="line"><span>python oh-my-tuna.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Change system-wide settings instead of user-wide:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>sudo python oh-my-tuna.py --global</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Get help:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>python oh-my-tuna.py -h</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="安卓" tabindex="-1"><a class="header-anchor" href="#安卓"><span>安卓</span></a></h2><p>anbox</p><p>sudo apt install android-tools-adb</p><h2 id="vs-code" tabindex="-1"><a class="header-anchor" href="#vs-code"><span>VS Code</span></a></h2><p>Code runner</p><p>Go to File -&gt; Preferences -&gt; Settings. In the search bar, type in code-runner.</p><p>Now scroll down to the part where it says</p><p>Code-runner: Executor Mapand click on</p><p>Edit in settings.json.</p><p>Within the &quot;code-runner.executorMap&quot;, go to &quot;python&quot;: &quot;python -u&quot; and change it to &quot;python&quot;: &quot;python3 -u&quot;</p><h2 id="v2ray" tabindex="-1"><a class="header-anchor" href="#v2ray"><span>V2RAY</span></a></h2><p>sudo -i</p><p><strong>安裝和更新 V2Ray</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>// 安裝執行檔和 .dat 資料檔</span></span>
<span class="line"><span>bash &lt;(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安裝最新發行的 geoip.dat 和 geosite.dat</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>// 只更新 .dat 資料檔</span></span>
<span class="line"><span>bash &lt;(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-dat-release.sh)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>移除 V2Ray</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>bash &lt;(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh) --remove</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="v2raya" tabindex="-1"><a class="header-anchor" href="#v2raya"><span>v2rayA</span></a></h2><ul><li><p>启动 v2rayA</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">sudo</span><span style="color:#A3BE8C;"> systemctl</span><span style="color:#A3BE8C;"> start</span><span style="color:#A3BE8C;"> v2raya.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>设置开机自动启动</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">sudo</span><span style="color:#A3BE8C;"> systemctl</span><span style="color:#A3BE8C;"> enable</span><span style="color:#A3BE8C;"> v2raya.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>重启v2rayA</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">sudo</span><span style="color:#A3BE8C;"> systemctl</span><span style="color:#A3BE8C;"> restart</span><span style="color:#A3BE8C;"> v2raya.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h2 id="flatpak" tabindex="-1"><a class="header-anchor" href="#flatpak"><span>Flatpak</span></a></h2><p>Deepin Quick Setup</p><p>Follow these simple steps to start using Flatpak</p><ol><li><p>Install Flatpak</p><p>To install Flatpak, run the following:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">sudo</span><span style="color:#A3BE8C;"> apt</span><span style="color:#A3BE8C;"> install</span><span style="color:#A3BE8C;"> flatpak</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Add the Flathub repository</p><p>Flathub is the best place to get Flatpak apps. To enable it, run:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">flatpak</span><span style="color:#A3BE8C;"> remote-add</span><span style="color:#A3BE8C;"> --if-not-exists</span><span style="color:#A3BE8C;"> flathub</span><span style="color:#A3BE8C;"> https://flathub.org/repo/flathub.flatpakrepo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Install the Deepin themes</p><p>To install light and dark themes, run:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">flatpak</span><span style="color:#A3BE8C;"> install</span><span style="color:#A3BE8C;"> flathub</span><span style="color:#A3BE8C;"> org.gtk.Gtk3theme.deepin</span></span>
<span class="line"><span style="color:#88C0D0;">flatpak</span><span style="color:#A3BE8C;"> install</span><span style="color:#A3BE8C;"> flathub</span><span style="color:#A3BE8C;"> org.gtk.Gtk3theme.deepin-dark</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Restart</p><p>To complete setup, restart your system. Now all you have to do is <a href="https://flathub.org/" target="_blank" rel="noopener noreferrer">install some apps</a>!</p></li></ol><h2 id="fstab" tabindex="-1"><a class="header-anchor" href="#fstab"><span>Fstab</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>vi /etc/fstab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>路径名有空格</strong></p><p>如果挂载的路径中有空格，可以使用 &quot;\\040&quot; 转义字符来表示空格（以三位八进制数来进行表示）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>/etc/fstab</span></span>
<span class="line"><span>UUID=47FA-4071     /home/username/Camera\\040Pictures   vfat  defaults,noatime      0  2</span></span>
<span class="line"><span>/dev/sda7          /media/100\\040GB\\040(Storage)       ext4  defaults,noatime,user  0  0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu"><span>Ubuntu</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">sudo</span><span style="color:#A3BE8C;"> add-apt-repository</span><span style="color:#A3BE8C;"> universe</span></span>
<span class="line"><span style="color:#88C0D0;">sudo</span><span style="color:#A3BE8C;"> add-apt-repository</span><span style="color:#A3BE8C;"> multiverse</span></span>
<span class="line"><span style="color:#88C0D0;">sudo</span><span style="color:#A3BE8C;"> apt</span><span style="color:#A3BE8C;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装媒体解码器来播放 MP3、MPEG4 和其他格式媒体文件</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">sudo</span><span style="color:#A3BE8C;"> apt</span><span style="color:#A3BE8C;"> install</span><span style="color:#A3BE8C;"> ubuntu-restricted-extras</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="python插件" tabindex="-1"><a class="header-anchor" href="#python插件"><span>Python插件</span></a></h1><p>pyinstxtractor</p><p>0x01 安装</p><p>项目地址：</p><p>https://sourceforge.net/projects/pyinstallerextractor/</p><p>进入后点击“Download”下载pyinstxtractor.py，即可。</p><p>0x02 使用方法</p><p>把pyinstxtractor.py和exe文件放在同个目录下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>python pyinstxtractor.py xx.exe</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>运行后生成xx.exe_extracted文件夹，进去后是各种文件，</p><p>瞄准一些无后缀文件（至于是哪些就看自己尝试了），其实是少了pyc头的pyc文件</p><p>可以尝试在前面增加03f30d0a21f8eb5a这个pyc头，然后增加文件名的后缀.pyc</p><p>之后就可以尝试用uncompyle2来对pyc文件进行反编译。</p><p><strong>uncompyle6</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>ncompyle6 xx.pyc &gt; xx.py              </span></span>
<span class="line"><span>decompyle3 xx.pyc &gt; xx.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,102),t=[i];function d(r,p){return a(),s("div",null,t)}const u=e(l,[["render",d],["__file","Deepin_Ubuntu.html.vue"]]),h=JSON.parse('{"path":"/tech/Deepin_Ubuntu.html","title":"Deepin","lang":"zh-CN","frontmatter":{"date":"2022-05-14T00:00:00.000Z","description":"[toc] Deepin 系统 升级内核 卸载内核 然后再 就可以了 QQ卡死 如果 linux 里装了 win 的宋体，QQ 就会卡死，此时 QQ 会使用宋体里的点阵字体。此时解决方案是把 win 的宋体的 ttc 文件往 QQ 的 wine 容器里也装一份（即复制到 ~/.deepinwine/Deepin-QQ/drive_c/Windows/F...","head":[["meta",{"property":"og:url","content":"https://zecdn.top/tech/Deepin_Ubuntu.html"}],["meta",{"property":"og:site_name","content":"Zeblog"}],["meta",{"property":"og:title","content":"Deepin"}],["meta",{"property":"og:description","content":"[toc] Deepin 系统 升级内核 卸载内核 然后再 就可以了 QQ卡死 如果 linux 里装了 win 的宋体，QQ 就会卡死，此时 QQ 会使用宋体里的点阵字体。此时解决方案是把 win 的宋体的 ttc 文件往 QQ 的 wine 容器里也装一份（即复制到 ~/.deepinwine/Deepin-QQ/drive_c/Windows/F..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-09T09:47:21.000Z"}],["meta",{"property":"article:author","content":"Zine⁶"}],["meta",{"property":"article:published_time","content":"2022-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-09T09:47:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Deepin\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-09T09:47:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zine⁶\\",\\"url\\":\\"https://zecdn.top\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://zecdn.top/atom.xml","title":"Zeblog Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://zecdn.top/feed.json","title":"Zeblog JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://zecdn.top/rss.xml","title":"Zeblog RSS Feed"}]]},"headers":[{"level":2,"title":"系统","slug":"系统","link":"#系统","children":[]},{"level":2,"title":"TUNA","slug":"tuna","link":"#tuna","children":[]},{"level":2,"title":"安卓","slug":"安卓","link":"#安卓","children":[]},{"level":2,"title":"VS Code","slug":"vs-code","link":"#vs-code","children":[]},{"level":2,"title":"V2RAY","slug":"v2ray","link":"#v2ray","children":[]},{"level":2,"title":"v2rayA","slug":"v2raya","link":"#v2raya","children":[]},{"level":2,"title":"Flatpak","slug":"flatpak","link":"#flatpak","children":[]},{"level":2,"title":"Fstab","slug":"fstab","link":"#fstab","children":[]}],"git":{"createdTime":1652543953000,"updatedTime":1717926441000,"contributors":[{"name":"周子健","email":"183465355@qq.com","commits":3},{"name":"jiange1236","email":"183465355@qq.com","commits":2}]},"readingTime":{"minutes":3.27,"words":981},"filePathRelative":"tech/Deepin&Ubuntu.md","localizedDate":"2022年5月14日","excerpt":"","autoDesc":true}');export{u as comp,h as data};
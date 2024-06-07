import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as i}from"./app-DM0RhMx7.js";const e={},l=i(`<h1 id="nginx从安装到高可用" tabindex="-1"><a class="header-anchor" href="#nginx从安装到高可用"><span>Nginx从安装到高可用</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>原文：blog.csdn.net/qq_34886352/article/details/103581973</span></span>
<span class="line"><span>第1-100期：100期Java项目整理</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一、nginx安装" tabindex="-1"><a class="header-anchor" href="#一、nginx安装"><span>一、Nginx安装</span></a></h3><h5 id="_1、去官网http-nginx-org-下载对应的nginx包-推荐使用稳定版本" tabindex="-1"><a class="header-anchor" href="#_1、去官网http-nginx-org-下载对应的nginx包-推荐使用稳定版本"><span>1、去官网http://nginx.org/下载对应的nginx包，推荐使用稳定版本</span></a></h5><h5 id="_2、上传nginx到linux系统" tabindex="-1"><a class="header-anchor" href="#_2、上传nginx到linux系统"><span>2、上传nginx到linux系统</span></a></h5><h5 id="_3、安装依赖环境" tabindex="-1"><a class="header-anchor" href="#_3、安装依赖环境"><span>3、安装依赖环境</span></a></h5><p>(1)安装gcc环境</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>yum install gcc-c++</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(2)安装PCRE库，用于解析正则表达式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>yum install -y pcre pcre-devel</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(3)zlib压缩和解压缩依赖</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>yum install -y zlib zlib-devel</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(4)SSL 安全的加密的套接字协议层，用于HTTP安全传输，也就是https</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>yum install -y openssl openssl-devel</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_4、解压-需要注意-解压后得到的是源码-源码需要编译后才能安装" tabindex="-1"><a class="header-anchor" href="#_4、解压-需要注意-解压后得到的是源码-源码需要编译后才能安装"><span>4、解压，需要注意，解压后得到的是源码，源码需要编译后才能安装</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>tar -zxvf nginx-1.16.1.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_5、编译之前-先创建nginx临时目录-如果不创建-在启动nginx的过程中会报错" tabindex="-1"><a class="header-anchor" href="#_5、编译之前-先创建nginx临时目录-如果不创建-在启动nginx的过程中会报错"><span>5、编译之前，先创建nginx临时目录，如果不创建，在启动nginx的过程中会报错</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>mkdir /var/temp/nginx -p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_6、在nginx目录-输入如下命令进行配置-目的是为了创建makefile文件" tabindex="-1"><a class="header-anchor" href="#_6、在nginx目录-输入如下命令进行配置-目的是为了创建makefile文件"><span>6、在nginx目录，输入如下命令进行配置，目的是为了创建makefile文件</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>./configure \\   </span></span>
<span class="line"><span>--prefix=/usr/local/nginx \\    </span></span>
<span class="line"><span>--pid-path=/var/run/nginx/nginx.pid \\    </span></span>
<span class="line"><span>--lock-path=/var/lock/nginx.lock \\    </span></span>
<span class="line"><span>--error-log-path=/var/log/nginx/error.log \\    </span></span>
<span class="line"><span>--http-log-path=/var/log/nginx/access.log \\    </span></span>
<span class="line"><span>--with-http_gzip_static_module \\    </span></span>
<span class="line"><span>--http-client-body-temp-path=/var/temp/nginx/client \\    </span></span>
<span class="line"><span>--http-proxy-temp-path=/var/temp/nginx/proxy \\    </span></span>
<span class="line"><span>--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\    </span></span>
<span class="line"><span>--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\    </span></span>
<span class="line"><span>--http-scgi-temp-path=/var/temp/nginx/scgi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：代表在命令行中换行，用于提高可读性配置命令：</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346363259473.jpg" alt="图片"></p><h5 id="_7、make编译-安装" tabindex="-1"><a class="header-anchor" href="#_7、make编译-安装"><span>7、make编译&amp;安装</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>make</span></span>
<span class="line"><span>make install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8、进入sbin目录启动nginx" tabindex="-1"><a class="header-anchor" href="#_8、进入sbin目录启动nginx"><span>8、进入sbin目录启动nginx</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>启动：nginx</span></span>
<span class="line"><span>停止：./nginx -s stop</span></span>
<span class="line"><span>重新加载：./nginx -s reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、配置反向代理" tabindex="-1"><a class="header-anchor" href="#二、配置反向代理"><span>二、配置反向代理</span></a></h3><p>1、配置upstream</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>upstream [proxyName] {</span></span>
<span class="line"><span>    server 192.168.1.173:8080;</span></span>
<span class="line"><span>    server 192.168.1.174:8080;</span></span>
<span class="line"><span>    server 192.168.1.175:8080;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、配置server</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listem  80;</span></span>
<span class="line"><span>    server_name www.tomcats.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://tomcats;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、配置负载均衡" tabindex="-1"><a class="header-anchor" href="#三、配置负载均衡"><span>三、配置负载均衡</span></a></h3><p>nginx默认采用轮训的方式进行负载均衡</p><p>1、使用加权轮询</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>upstream [proxyName] {</span></span>
<span class="line"><span>    server 192.168.1.173:8080 weight=1;</span></span>
<span class="line"><span>    server 192.168.1.174:8080 weight=5;</span></span>
<span class="line"><span>    server 192.168.1.175:8080 weight=2;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、hash负载均衡</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>upstream [proxyName] {</span></span>
<span class="line"><span>    ip_hash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server 192.168.1.173:8080;</span></span>
<span class="line"><span>    server 192.168.1.174:8080;</span></span>
<span class="line"><span>    server 192.168.1.175:8080;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hash算法实际上只会计算 192.168.1这段做哈希</p><p>使用ip_hash的注意点：</p><ul><li>不能把后台服务器直接移除，只能标记down.</li></ul><p>3、url hash负载均衡</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>upstream [proxyName] {</span></span>
<span class="line"><span>    hash $request_url;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server 192.168.1.173:8080;</span></span>
<span class="line"><span>    server 192.168.1.174:8080;</span></span>
<span class="line"><span>    server 192.168.1.175:8080;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、最小连接负载均衡</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>upstream [proxyName] {</span></span>
<span class="line"><span>    least_conn;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server 192.168.1.173:8080;</span></span>
<span class="line"><span>    server 192.168.1.174:8080;</span></span>
<span class="line"><span>    server 192.168.1.175:8080;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、upstream指令参数" tabindex="-1"><a class="header-anchor" href="#四、upstream指令参数"><span>四、upstream指令参数</span></a></h3><ul><li><code>max_conns</code>：限制最大同时连接数 1.11.5之前只能用于商业版</li><li><code>slow_start</code>：单位秒，权重在指定时间内从1上升到指定值，不适用与hash负载均衡、随机负载均衡 如果在 upstream 中只有一台 server，则该参数失效（商业版才有）</li><li><code>down</code>：禁止访问</li><li><code>backup</code>：备用机 只有在其他服务器无法访问的时候才能访问到 不适用与hash负载均衡、随机负载均衡</li><li><code>max_fails</code>：表示失败几次，则标记server已宕机，剔出上游服务 默认值1</li><li><code>fail_timeout</code>：表示失败的重试时间 默认值10</li></ul><p>1、keepalived</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>upstream [proxyName] {</span></span>
<span class="line"><span>    server 192.168.1.173:8080 weight=1;</span></span>
<span class="line"><span>    server 192.168.1.174:8080 weight=5;</span></span>
<span class="line"><span>    server 192.168.1.175:8080 weight=2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    keepalive 32; #保持的连接数</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listem  80;</span></span>
<span class="line"><span>    server_name www.tomcats.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://tomcats;</span></span>
<span class="line"><span>        proxy_http_version 1.1; #连接的协议版本</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;&quot;; 清空连接请求头</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、控制浏览器缓存</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listem  80;</span></span>
<span class="line"><span>    server_name www.tomcats.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://tomcats;</span></span>
<span class="line"><span>               expires 10s;  #浏览器缓存10秒钟</span></span>
<span class="line"><span>               #expires @22h30m  #在晚上10点30的时候过期</span></span>
<span class="line"><span>               #expires -1h  #缓存在一小时前时效</span></span>
<span class="line"><span>               #expires epoch  #不设置缓存</span></span>
<span class="line"><span>               #expires off  #缓存关闭，浏览器自己控制缓存</span></span>
<span class="line"><span>               #expires max  #最大过期时间</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、反向代理缓存</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>upstream [proxyName] {</span></span>
<span class="line"><span>    server 192.168.1.173:8080 weight=1;</span></span>
<span class="line"><span>    server 192.168.1.174:8080 weight=5;</span></span>
<span class="line"><span>    server 192.168.1.175:8080 weight=2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#proxy_cache_path 设置缓存保存的目录的位置</span></span>
<span class="line"><span>#keys_zone设置共享内以及占用的空间大小</span></span>
<span class="line"><span>#mas_size 设置缓存最大空间</span></span>
<span class="line"><span>#inactive 缓存过期时间，错过此时间自动清理</span></span>
<span class="line"><span>#use_temp_path 关闭零时目录</span></span>
<span class="line"><span>proxy_cache_path /usr/local/nginx/upsteam_cache keys_zone=mycache:5m max_size=1g inactive=8h use_temp_path=off;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listem  80;</span></span>
<span class="line"><span>    server_name www.tomcats.com;</span></span>
<span class="line"><span>    #开启并使用缓存</span></span>
<span class="line"><span>    proxy_cache mycache;</span></span>
<span class="line"><span>    #针对200和304响应码的缓存过期时间</span></span>
<span class="line"><span>    proxy_cache_valid 200 304 8h;   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://tomcats;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、配置ssl证书提供https访问" tabindex="-1"><a class="header-anchor" href="#五、配置ssl证书提供https访问"><span>五、配置ssl证书提供https访问</span></a></h3><h5 id="_1-安装ssl模块" tabindex="-1"><a class="header-anchor" href="#_1-安装ssl模块"><span>1. 安装SSL模块</span></a></h5><p>要在nginx中配置https，就必须安装ssl模块，也就是: <code>http_ssl_module</code>。</p><p>进入到nginx的解压目录：<code>/home/software/nginx-1.16.1</code></p><p>新增ssl模块(原来的那些模块需要保留)</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>./configure \\</span></span>
<span class="line"><span>--prefix=/usr/local/nginx \\</span></span>
<span class="line"><span>--pid-path=/var/run/nginx/nginx.pid \\</span></span>
<span class="line"><span>--lock-path=/var/lock/nginx.lock \\</span></span>
<span class="line"><span>--error-log-path=/var/log/nginx/error.log \\</span></span>
<span class="line"><span>--http-log-path=/var/log/nginx/access.log \\</span></span>
<span class="line"><span>--with-http_gzip_static_module \\</span></span>
<span class="line"><span>--http-client-body-temp-path=/var/temp/nginx/client \\</span></span>
<span class="line"><span>--http-proxy-temp-path=/var/temp/nginx/proxy \\</span></span>
<span class="line"><span>--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\</span></span>
<span class="line"><span>--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\</span></span>
<span class="line"><span>--http-scgi-temp-path=/var/temp/nginx/scgi  \\</span></span>
<span class="line"><span>--with-http_ssl_module</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译和安装</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>make</span></span>
<span class="line"><span>make install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、配置https" tabindex="-1"><a class="header-anchor" href="#_2、配置https"><span>2、配置HTTPS</span></a></h5><p>把ssl证书 <code>*.crt</code> 和 私钥 <code>*.key</code> 拷贝到<code>/usr/local/nginx/conf</code>目录中。</p><p>新增 server 监听 443 端口：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       443;</span></span>
<span class="line"><span>    server_name  www.imoocdsp.com;</span></span>
<span class="line"><span>    # 开启ssl</span></span>
<span class="line"><span>    ssl     on;</span></span>
<span class="line"><span>    # 配置ssl证书</span></span>
<span class="line"><span>    ssl_certificate      1_www.imoocdsp.com_bundle.crt;</span></span>
<span class="line"><span>    # 配置证书秘钥</span></span>
<span class="line"><span>    ssl_certificate_key  2_www.imoocdsp.com.key;</span></span>
<span class="line"><span>    # ssl会话cache</span></span>
<span class="line"><span>    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span>    # ssl会话超时时间</span></span>
<span class="line"><span>    ssl_session_timeout  5m;</span></span>
<span class="line"><span>    # 配置加密套件，写法遵循 openssl 标准</span></span>
<span class="line"><span>    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span>    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://tomcats/;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、配置ha-nginx" tabindex="-1"><a class="header-anchor" href="#六、配置ha-nginx"><span>六、配置ha nginx</span></a></h3><h5 id="_1、安装keepalived" tabindex="-1"><a class="header-anchor" href="#_1、安装keepalived"><span>1、安装keepalived</span></a></h5><p>(1)下载</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>https://www.keepalived.org/download.html</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(2)解压</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>tar -zxvf keepalived-2.0.18.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(3)使用configure命令配置安装目录与核心配置文件所在位置：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>./configure --prefix=/usr/local/keepalived --sysconf=/etc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><strong>prefix</strong>：keepalived安装的位置sysconf：keepalived核心配置文件所在位置，固定位置，改成其他位置则keepalived启动不了，<code>/var/log/messages</code>中会报错</li><li><strong>sysconf</strong>：keepalived核心配置文件所在位置，固定位置，改成其他位置则keepalived启动不了，<code>/var/log/messages</code>中会报错</li></ul><p>配置过程中可能会出现警告信息，如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>*** WARNING - this build will not support IPVS with IPv6. Please install libnl/libnl-3 dev libraries to support IPv6 with IPVS.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装libnl/libnl-3依赖</span></span>
<span class="line"><span>yum -y install libnl libnl-devel</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4)安装keepalived</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>make &amp;&amp; make install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(5)配置文件 在<code>/etc/keepalived/keepalived.conf</code></p><p>(6)忘记安装配置的目录，则通过如下命令找到：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>whereis keepalived</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(7)启动keepalived</p><p>进入sbin目录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>./keepalived</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_2、配置keepalived-主机" tabindex="-1"><a class="header-anchor" href="#_2、配置keepalived-主机"><span>2、配置keepalived 主机</span></a></h5><p>(1)通过命令 <code>vim keepalived.conf</code> 打开配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>global_defs { </span></span>
<span class="line"><span>    # 路由id：当前安装keepalived的节点主机标识符，保证全局唯一 </span></span>
<span class="line"><span>    router_id keep_171 </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>vrrp_instance VI_1 { </span></span>
<span class="line"><span>    # 表示状态是MASTER主机还是备用机BACKUP </span></span>
<span class="line"><span>    state MASTER </span></span>
<span class="line"><span>    # 该实例绑定的网卡 </span></span>
<span class="line"><span>    interface ens33 </span></span>
<span class="line"><span>    # 保证主备节点一致即可 </span></span>
<span class="line"><span>    virtual_router_id 51 </span></span>
<span class="line"><span>    # 权重，master权重一般高于backup，如果有多个，那就是选举，谁的权重高，谁就当选 </span></span>
<span class="line"><span>    priority 100 </span></span>
<span class="line"><span>    # 主备之间同步检查时间间隔，单位秒 </span></span>
<span class="line"><span>    advert_int 2 </span></span>
<span class="line"><span>    # 认证权限密码，防止非法节点进入 </span></span>
<span class="line"><span>    authentication { </span></span>
<span class="line"><span>        auth_type PASS </span></span>
<span class="line"><span>        auth_pass 1111 </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    # 虚拟出来的ip，可以有多个（vip） </span></span>
<span class="line"><span>    virtual_ipaddress { </span></span>
<span class="line"><span>        192.168.1.161 </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>附：查看网卡信息命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ip addr</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(2)启动keepalived</p><p>(3)查看进程</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ps -ef|grep keepalived</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(4)查看vip(虚拟ip)</p><p>在网卡ens33下，多了一个<code>192.168.1.161</code>，这个就是虚拟ip</p><h5 id="_3、把keepalived注册为系统服务" tabindex="-1"><a class="header-anchor" href="#_3、把keepalived注册为系统服务"><span>3、把keepalived注册为系统服务</span></a></h5><p>(1)拷贝配置文件</p><ul><li>将keepalived目录下<code>etc/init.d/keepalived</code>拷贝到<code>/etc/init.d/</code>下</li><li>将keepalived目录下<code>etc/sysconfig/keepalived</code>拷贝到<code>/etc/sysconfig/</code>下</li></ul><p>(2)刷新systemctl</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl daemon-reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(3)启动、停止、重启keepalived</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#启动</span></span>
<span class="line"><span>systemctl start keepalived.service</span></span>
<span class="line"><span>#停止</span></span>
<span class="line"><span>systemctl stop keepalived.service</span></span>
<span class="line"><span>#重启</span></span>
<span class="line"><span>systemctl restart keepalived.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、实现双机主备高可用" tabindex="-1"><a class="header-anchor" href="#_4、实现双机主备高可用"><span>4、实现双机主备高可用</span></a></h5><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346363259474.webp" alt="图片"></p><p>(1)修改备机配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>global_defs { </span></span>
<span class="line"><span>    router_id keep_172 </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>vrrp_instance VI_1 { </span></span>
<span class="line"><span>    # 备用机设置为BACKUP </span></span>
<span class="line"><span>    state BACKUP </span></span>
<span class="line"><span>    interface ens33 </span></span>
<span class="line"><span>    virtual_router_id 51 </span></span>
<span class="line"><span>    # 权重低于MASTER </span></span>
<span class="line"><span>    priority 80 </span></span>
<span class="line"><span>    advert_int 2 </span></span>
<span class="line"><span>    authentication { </span></span>
<span class="line"><span>        auth_type PASS auth_pass 1111 </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    virtual_ipaddress {</span></span>
<span class="line"><span>        # 注意：主备两台的vip都是一样的，绑定到同一个vip </span></span>
<span class="line"><span>        192.168.1.161 </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 启动 Keepalived</p><p>(3) 访问vip即可访问主机，当主机失效时访问vip就会访问到备机</p><h5 id="_5、keepalived配置nginx自动重启" tabindex="-1"><a class="header-anchor" href="#_5、keepalived配置nginx自动重启"><span>5、keepalived配置nginx自动重启</span></a></h5><p>(1)编写脚本</p><p>在<code>/etc/keepalived/</code>下创建脚本<code>check_nginx_alive_or_not</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash </span></span>
<span class="line"><span></span></span>
<span class="line"><span>A=\`ps -C nginx --no-header |wc -l\` </span></span>
<span class="line"><span># 判断nginx是否宕机，如果宕机了，尝试重启 </span></span>
<span class="line"><span>if [ $A -eq 0 ];then </span></span>
<span class="line"><span>    /usr/local/nginx/sbin/nginx </span></span>
<span class="line"><span>    # 等待一小会再次检查nginx，如果没有启动成功，则停止keepalived，使其启动备用机 </span></span>
<span class="line"><span>    sleep 3 </span></span>
<span class="line"><span>        if [ \`ps -C nginx --no-header |wc -l\` -eq 0 ];then </span></span>
<span class="line"><span>            killall keepalived </span></span>
<span class="line"><span>        fi </span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)添加运行权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>chmod +x /etc/keepalived/check_nginx_alive_or_not.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(3)配置keepalived监听nginx脚本</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vrrp_script check_nginx_alive { </span></span>
<span class="line"><span>    script &quot;/etc/keepalived/check_nginx_alive_or_not.sh&quot; </span></span>
<span class="line"><span>    interval 2 # 每隔两秒运行上一行脚本 </span></span>
<span class="line"><span>    weight 10 # 如果脚本运行失败，则升级权重+10 </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4)在vrrp_instance中新增监控的脚本</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>track_script { </span></span>
<span class="line"><span>    check_nginx_alive # 追踪 nginx 脚本</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(5)重启Keepalived使得配置文件生效</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl restart keepalived</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_6、keepalived双主热备" tabindex="-1"><a class="header-anchor" href="#_6、keepalived双主热备"><span>6、keepalived双主热备</span></a></h5><p>(1)配置DNS轮询</p><p>在同一个域名下配置两个ip，自行百度</p><p>(2)配置第一台主机</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>global_defs {</span></span>
<span class="line"><span>    router_id keep_171 </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>vrrp_instance VI_1 { </span></span>
<span class="line"><span>    state MASTER i</span></span>
<span class="line"><span>    nterface ens33 </span></span>
<span class="line"><span>    virtual_router_id 51 </span></span>
<span class="line"><span>    priority 100 </span></span>
<span class="line"><span>    advert_int 1 </span></span>
<span class="line"><span>    authentication { </span></span>
<span class="line"><span>        auth_type PASS </span></span>
<span class="line"><span>        auth_pass 1111 </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    virtual_ipaddress { </span></span>
<span class="line"><span>        192.168.1.161 </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>vrrp_instance VI_2  {</span></span>
<span class="line"><span>    state BACKUP </span></span>
<span class="line"><span>    interface ens33 </span></span>
<span class="line"><span>    virtual_router_id 52 </span></span>
<span class="line"><span>    priority 80 </span></span>
<span class="line"><span>    advert_int 1 </span></span>
<span class="line"><span>    authentication { </span></span>
<span class="line"><span>        auth_type PASS </span></span>
<span class="line"><span>        auth_pass 1111 </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    virtual_ipaddress { </span></span>
<span class="line"><span>        192.168.1.162 </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3)配置第二台主机</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>global_defs {</span></span>
<span class="line"><span>    router_id keep_172 </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>vrrp_instance VI_1 { </span></span>
<span class="line"><span>    state BACKUP </span></span>
<span class="line"><span>    interface ens33 </span></span>
<span class="line"><span>    virtual_router_id 51 </span></span>
<span class="line"><span>    priority 80 </span></span>
<span class="line"><span>    advert_int 1 </span></span>
<span class="line"><span>    authentication { </span></span>
<span class="line"><span>        auth_type PASS </span></span>
<span class="line"><span>        auth_pass 1111 </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    virtual_ipaddress { </span></span>
<span class="line"><span>        192.168.1.161</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>vrrp_instance VI_2 {</span></span>
<span class="line"><span>    state MASTER </span></span>
<span class="line"><span>    interface ens33 </span></span>
<span class="line"><span>    virtual_router_id 52 </span></span>
<span class="line"><span>    priority 100 </span></span>
<span class="line"><span>    advert_int 1 </span></span>
<span class="line"><span>    authentication { </span></span>
<span class="line"><span>        auth_type PASS </span></span>
<span class="line"><span>        auth_pass 1111 </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    virtual_ipaddress { </span></span>
<span class="line"><span>        192.168.1.162 </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4)重启两台Keepalived</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl restart keepalived</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="七、lvs-linux-virtual-server-实现高可用负载均衡" tabindex="-1"><a class="header-anchor" href="#七、lvs-linux-virtual-server-实现高可用负载均衡"><span>七、LVS（Linux Virtual Server）实现高可用负载均衡</span></a></h3><h5 id="_1、为什么要使用lvs-nginx" tabindex="-1"><a class="header-anchor" href="#_1、为什么要使用lvs-nginx"><span>1、为什么要使用LVS+Nginx</span></a></h5><ul><li>lvs基于四层负载均衡，工作效率较Nginx的七层负载更高，使用LVS搭建Nginx集群，可以提高性能</li><li>四层负载均衡无法对信息处理，只能通过ip+端口的形式转发，所以需要七成负载进行数据的处理</li><li>Nginx接收请求来回，LVS可以只接受不响应</li></ul><h5 id="_2、lvs的三种模式" tabindex="-1"><a class="header-anchor" href="#_2、lvs的三种模式"><span>2、LVS的三种模式</span></a></h5><p>(1)NAT模式</p><ul><li>客户端将请求发往LVS，LVS会选择一台服务器响应请求，服务器将结果返回给LVS，LVS再返回给客户端。</li><li>在NAT模式中，服务器的网关必须指向LVS，否则报文无法送达客户端</li><li>NAT 技术将请求的报文和响应的报文都需要通过LVS进行地址改写，因此网站访问量比较大的时候负载均衡调度器有比较大的瓶颈，一般要求最多之能 10-20 台节点</li><li>NAT 模式支持对 IP 地址和端口进行转换。即用户请求的端口和真实服务器的端口可以不一致</li></ul><p>(2)TUN模式</p><ul><li>客户端将请求发往LVS，LVS会选择一台服务器响应请求，在客户端与服务器之间建立隧道，返回结果的时候直接由服务器返回响应，不在经过LVS。</li><li>TUN模式必须所有的服务器上都绑定VIP的IP地址，所有的服务器都必须有网卡。</li><li>TUN模式走隧道运维难度大，并且会直接暴露服务器地址</li><li>服务器将应答包直接发给用户。所以，减少了负载均衡器的大量数据流动，负载均衡器不再是系统的瓶颈，就能处理很巨大的请求量，这种方式，一台负载均衡器能够为很多服务器进行分发。而且跑在公网上就能进行不同地域的分发</li></ul><p>(3)DR模式</p><ul><li>客户端将请求发往LVS，LVS会选择一台服务器响应请求，返回结果的时候通过统一的路由进行返回，不在经过LVS。</li><li>和TUN模式一样，LVS只是分发请求，应答包通过单独的路由返回给客户端，与TUN相比这种方式不需要隧道结构，可以兼容大多数的操作系统，同时统一路由可以隐藏真实的物理服务器。DR模式效率更高，但配置更复杂.</li><li>所有服务器节点和LVS只能在一个局域网里面。</li></ul><h5 id="_3、搭建lvs-dr模式" tabindex="-1"><a class="header-anchor" href="#_3、搭建lvs-dr模式"><span>3、搭建LVS-DR模式</span></a></h5><p>先关闭掉服务器上网络配置管理器，避免网络接口冲突</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl stop NetworkManager</span></span>
<span class="line"><span>systemctl disable NetworkManager</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>(1)创建子接口（创建LVS的虚拟ip）</p><p>进入网卡配置目录<code>/etc/sysconfig/network-scripts/</code>,找到网卡配置文件，这里以<code>ifcfg-ens33</code>为例，拷贝并创建子接口</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cp ifcfg-ens33 ifcfg-ens33:1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改子接口配置如下</p><ul><li>配置中的 192.168.1.150 就是vip，是提供给外网用户访问的ip地址</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>DEVICE=&quot;ens33:1&quot;</span></span>
<span class="line"><span>ONBOOT=&quot;yes&quot;</span></span>
<span class="line"><span>IPADDR=192.168.1.150</span></span>
<span class="line"><span>NETMASK=255.255.255.0</span></span>
<span class="line"><span>BOOTPROTO=static</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启网络服务</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>service network restart</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>重启成功后，ip addr 查看一下，你会发现多了一个ip，也就是虚拟ip（vip）</p><blockquote><p>注意：阿里云不支持配置网卡，需要购买相应的负载均衡服务，腾讯云支持配置网卡，但需要购买网卡支持，一个网卡支持10个虚拟ip配置</p></blockquote><p>(2)安装ipvsadm</p><p>如今的centos都集成了LVS，所以ipvs是自带的，我们只需要安装ipvsadm即可（ipvsadm是管理集群的工具，通过ipvs可以管理集群，查看集群等操作）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>yum install ipvsadm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(3)配置服务器（RS）的虚拟ip</p><p>进入网卡配置目录<code>/etc/sysconfig/network-scripts/</code>,找到<code>ifcfg-lo</code>，拷贝并创建子接口</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cp ifcfg-lo ifcfg-lo:1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改子接口配置如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>DEVICE=&quot;lo:1&quot;</span></span>
<span class="line"><span>IPADDR=192.168.1.150</span></span>
<span class="line"><span>NETMASK=255.255.255.255</span></span>
<span class="line"><span>NETWORK=127.0.0.0</span></span>
<span class="line"><span>BROADCAST=127.255.255.255</span></span>
<span class="line"><span>ONBOOT=&quot;yes&quot;</span></span>
<span class="line"><span>NAME=loopback</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启网络服务成功后，<code>ip addr</code> 查看一下，你会发现多了一个ip，也就是虚拟ip（vip）</p><p>(4)为服务器（RS）配置arp</p><p>ARP响应级别与通告行为参数说明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>arp-ignore：ARP响应级别（处理请求）</span></span>
<span class="line"><span>    0：只要本机配置了ip，就能响应请求</span></span>
<span class="line"><span>    1：请求的目标地址到达对应的网络接口，才会响应请求</span></span>
<span class="line"><span>arp-announce：ARP通告行为（返回响应）</span></span>
<span class="line"><span>    0：本机上任何网络接口都向外通告，所有的网卡都能接受到通告</span></span>
<span class="line"><span>    1：尽可能避免本网卡与不匹配的目标进行通告2：只在本网卡通告</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开sysctl.conf:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim /etc/sysctl.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>配置所有网卡、默认网卡以及虚拟网卡的arp响应级别和通告行为，分别对应：all，default，lo</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># configration for lvs </span></span>
<span class="line"><span>net.ipv4.conf.all.arp_ignore = 1 </span></span>
<span class="line"><span>net.ipv4.conf.default.arp_ignore = 1 </span></span>
<span class="line"><span>net.ipv4.conf.lo.arp_ignore = 1 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>net.ipv4.conf.all.arp_announce = 2 </span></span>
<span class="line"><span>net.ipv4.conf.default.arp_announce = 2 </span></span>
<span class="line"><span>net.ipv4.conf.lo.arp_announce = 2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sysctl -p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>增加一个网关，用于接收数据报文，当有请求到本机后，会交给lo去处理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>route add -host 192.168.1.150 dev lo:1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将网关添加至开机启动</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>echo &quot;route add -host 192.168.1.150 dev lo:1&quot; &gt;&gt; /etc/rc.local</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(4)使用ipvsadm配置集群规则</p><p>创建LVS节点，用户访问的集群调度者</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ipvsadm -A -t 192.168.1.150:80 -s rr -p 5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>-A：添加集群</li><li>-t：tcp协议ip地址：设定集群的访问</li><li>ip：也就是LVS的虚拟ip</li><li>-s：设置负载均衡的算法，</li><li>rr：表示轮询</li><li>-p：设置连接持久化的时间,在指定时间内同一个用户的请求会访问到同一个服务器中</li></ul><p>创建多台RS真实服务器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ipvsadm -a -t 192.168.1.150:80 -r 192.168.1.171:80 -g </span></span>
<span class="line"><span>ipvsadm -a -t 192.168.1.150:80 -r 192.168.1.172:80 -g</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>-a：添加真实服务器</li><li>-t：tcp协议</li><li>-r：真实服务器的ip地址</li><li>-g：设定DR模式</li></ul><p>保存到规则库，否则重启失效</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ipvsadm -S</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查集群</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#查看集群列表</span></span>
<span class="line"><span>ipvsadm -Ln</span></span>
<span class="line"><span>#查看集群状态</span></span>
<span class="line"><span>ipvsadm -Ln --stats</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一些其他命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> # 重启ipvsadm，重启后需要重新配置 </span></span>
<span class="line"><span> service ipvsadm restart </span></span>
<span class="line"><span> # 查看持久化连接 </span></span>
<span class="line"><span> ipvsadm -Ln --persistent-conn </span></span>
<span class="line"><span> # 查看连接请求过期时间以及请求源ip和目标ip </span></span>
<span class="line"><span> ipvsadm -Lnc </span></span>
<span class="line"><span> # 设置tcp tcpfin udp 的过期时间（一般保持默认） </span></span>
<span class="line"><span> ipvsadm --set 1 1 1 </span></span>
<span class="line"><span> # 查看过期时间 </span></span>
<span class="line"><span> ipvsadm -Ln --timeout</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(5)访问虚拟ip，完成LVS搭建</p><h3 id="附-lvs的负载均衡算法" tabindex="-1"><a class="header-anchor" href="#附-lvs的负载均衡算法"><span>附：LVS的负载均衡算法</span></a></h3><h5 id="_1-静态算法" tabindex="-1"><a class="header-anchor" href="#_1-静态算法"><span>(1)静态算法</span></a></h5><p>静态：根据LVS本身自由的固定的算法分发用户请求。</p><ul><li>轮询（Round Robin 简写’rr’）：轮询算法假设所有的服务器处理请求的能力都一样的，调度器会把所有的请求平均分配给每个真实服务器。（同Nginx的轮询）</li><li>加权轮询（Weight Round Robin 简写’wrr’）：安装权重比例分配用户请求。权重越高，被分配到处理的请求越多。（同Nginx的权重）</li><li>源地址散列（Source Hash 简写’sh’）：同一个用户ip的请求，会由同一个RS来处理。（同Nginx的ip_hash）</li><li>目标地址散列（Destination Hash 简写’dh’）：根据url的不同，请求到不同的RS。（同Nginx的url_hash）</li></ul><h5 id="_2-动态算法" tabindex="-1"><a class="header-anchor" href="#_2-动态算法"><span>(2)动态算法</span></a></h5><p>动态：会根据流量的不同，或者服务器的压力不同来分配用户请求，这是动态计算的。</p><ul><li><p>最小连接数（Least Connections 简写’lc’）：把新的连接请求分配到当前连接数最小的服务器。</p></li><li><p>加权最少连接数（Weight Least Connections 简写’wlc’）：服务器的处理性能用数值来代表，权重越大处理的请求越多。Real Server 有可能会存在性能上的差异，wlc动态获取不同服务器的负载状况，把请求分发到性能好并且比较空闲的服务器。</p></li><li><p>最短期望延迟（Shortest Expected Delay 简写’sed’）：特殊的wlc算法。举例阐述，假设有ABC三台服务器，权重分别为1、2、3 。如果使用wlc算法的话，当一个新请求进来，它可能会分给ABC中的任意一个。使用sed算法后会进行如下运算：</p></li><li><ul><li>A：（1+1）/1=2</li><li>B：（1+2）/2=3/2</li><li>C：（1+3）/3=4/3</li></ul></li></ul><p>最终结果，会把这个请求交给得出运算结果最小的服务器。最少队列调度（Never Queue 简写’nq’）：永不使用队列。如果有Real Server的连接数等于0，则直接把这个请求分配过去，不需要在排队等待运算了（sed运算）。</p><h3 id="八、搭建keepalived-lvs-nginx高可用集群负载均衡" tabindex="-1"><a class="header-anchor" href="#八、搭建keepalived-lvs-nginx高可用集群负载均衡"><span>八、搭建Keepalived+Lvs+Nginx高可用集群负载均衡</span></a></h3><p>如果原先服务器上配置了LVS+nginx需要清空ipvsadm中的配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ipvsadm -C</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果配置了<code>Keepalived+Nginx</code>双主集群也需要去除掉Keepalived中原先的配置，按照的后文进行配置</p><h5 id="_1-使用keepalived配置master-lvs" tabindex="-1"><a class="header-anchor" href="#_1-使用keepalived配置master-lvs"><span>(1)使用keepalived配置Master LVS</span></a></h5><p>在LVS的机器上安装keepalived，安装过程参考上文</p><p>(1)修改keepalived的配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>global_defs {</span></span>
<span class="line"><span>    router_id keep_151 </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>vrrp_instance VI_1 { </span></span>
<span class="line"><span>    state MASTER </span></span>
<span class="line"><span>    interface ens33 </span></span>
<span class="line"><span>    virtual_router_id 41 </span></span>
<span class="line"><span>    priority 100 </span></span>
<span class="line"><span>    advert_int 1 </span></span>
<span class="line"><span>    authentication { </span></span>
<span class="line"><span>        auth_type PASS </span></span>
<span class="line"><span>        auth_pass 1111 </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    virtual_ipaddress { </span></span>
<span class="line"><span>        192.168.1.150</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#配置集群访问的ip+端口，端口和nginx保持一致</span></span>
<span class="line"><span>virtual_server 192.168.1.150 80{</span></span>
<span class="line"><span>    #健康检查的时间，单位：秒</span></span>
<span class="line"><span>    delay_loop 6</span></span>
<span class="line"><span>    #配置负载均衡的算法，默认的轮询</span></span>
<span class="line"><span>    lb_algo rr</span></span>
<span class="line"><span>    #设置LVS的模式 NAT|TUN|DR</span></span>
<span class="line"><span>    lb-kind DR</span></span>
<span class="line"><span>    #设置会话持久化的时间</span></span>
<span class="line"><span>    persistence_timeout 5</span></span>
<span class="line"><span>    #协议</span></span>
<span class="line"><span>    protocol TCP</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    #配置负载均衡的真实服务器，也就是nginx节点的具体的ip地址</span></span>
<span class="line"><span>    real_server 192.168.1.171 80{</span></span>
<span class="line"><span>        #轮询权重配比</span></span>
<span class="line"><span>        weight 1</span></span>
<span class="line"><span>        #设置健康检查</span></span>
<span class="line"><span>        TCP_CHECK {</span></span>
<span class="line"><span>            #检查80端口</span></span>
<span class="line"><span>            connect_port 80</span></span>
<span class="line"><span>            #超时时间</span></span>
<span class="line"><span>            connect_timeout 2</span></span>
<span class="line"><span>            #重试次数</span></span>
<span class="line"><span>            nb_get_retry 2</span></span>
<span class="line"><span>            #重试间隔时间</span></span>
<span class="line"><span>            delay_before_retry 3</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    real_server 192.168.1.171 80{</span></span>
<span class="line"><span>        weight 1</span></span>
<span class="line"><span>        TCP_CHECK {</span></span>
<span class="line"><span>            connect_port 80</span></span>
<span class="line"><span>            connect_timeout 2</span></span>
<span class="line"><span>            nb_get_retry 2</span></span>
<span class="line"><span>            delay_before_retry 3</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)启动/重启keepalived</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl restart keepalived</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_2-使用keepalived配置backup-lvs" tabindex="-1"><a class="header-anchor" href="#_2-使用keepalived配置backup-lvs"><span>(2)使用keepalived配置Backup LVS</span></a></h5><p>配置在备用机上</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>global_defs {</span></span>
<span class="line"><span>    router_id keep_152 </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>vrrp_instance VI_1 { </span></span>
<span class="line"><span>    state  BACKUP</span></span>
<span class="line"><span>    interface ens33 </span></span>
<span class="line"><span>    virtual_router_id 41 </span></span>
<span class="line"><span>    priority 50 </span></span>
<span class="line"><span>    advert_int 1 </span></span>
<span class="line"><span>    authentication { </span></span>
<span class="line"><span>        auth_type PASS </span></span>
<span class="line"><span>        auth_pass 1111 </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    virtual_ipaddress { </span></span>
<span class="line"><span>        192.168.1.150</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#配置集群访问的ip+端口，端口和nginx保持一致</span></span>
<span class="line"><span>virtual_server 192.168.1.150 80{</span></span>
<span class="line"><span>    #健康检查的时间，单位：秒</span></span>
<span class="line"><span>    delay_loop 6</span></span>
<span class="line"><span>    #配置负载均衡的算法，默认的轮询</span></span>
<span class="line"><span>    lb_algo rr</span></span>
<span class="line"><span>    #设置LVS的模式 NAT|TUN|DR</span></span>
<span class="line"><span>    lb-kind DR</span></span>
<span class="line"><span>    #设置会话持久化的时间</span></span>
<span class="line"><span>    persistence_timeout 5</span></span>
<span class="line"><span>    #协议</span></span>
<span class="line"><span>    protocol TCP</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    #配置负载均衡的真实服务器，也就是nginx节点的具体的ip地址</span></span>
<span class="line"><span>    real_server 192.168.1.171 80{</span></span>
<span class="line"><span>        #轮询权重配比</span></span>
<span class="line"><span>        weight 1</span></span>
<span class="line"><span>        #设置健康检查</span></span>
<span class="line"><span>        TCP_CHECK {</span></span>
<span class="line"><span>            #检查80端口</span></span>
<span class="line"><span>            connect_port 80</span></span>
<span class="line"><span>            #超时时间</span></span>
<span class="line"><span>            connect_timeout 2</span></span>
<span class="line"><span>            #重试次数</span></span>
<span class="line"><span>            nb_get_retry 2</span></span>
<span class="line"><span>            #重试间隔时间</span></span>
<span class="line"><span>            delay_before_retry 3</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    real_server 192.168.1.171 80{</span></span>
<span class="line"><span>        weight 1</span></span>
<span class="line"><span>        TCP_CHECK {</span></span>
<span class="line"><span>            connect_port 80</span></span>
<span class="line"><span>            connect_timeout 2</span></span>
<span class="line"><span>            nb_get_retry 2</span></span>
<span class="line"><span>            delay_before_retry 3</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,207),p=[l];function d(r,c){return a(),n("div",null,p)}const h=s(e,[["render",d],["__file","Nginx从安装到高可用.html.vue"]]),u=JSON.parse('{"path":"/others/Nginx%E4%BB%8E%E5%AE%89%E8%A3%85%E5%88%B0%E9%AB%98%E5%8F%AF%E7%94%A8.html","title":"Nginx从安装到高可用","lang":"zh-CN","frontmatter":{"author":"jiange1236","title":"Nginx从安装到高可用","description":"Nginx从安装到高可用","date":"2022-01-16T00:00:00.000Z","category":"other","tag":"other","article":true,"timeline":true,"icon":null,"head":[["meta",{"property":"og:url","content":"https://jiange1236.github.io/others/Nginx%E4%BB%8E%E5%AE%89%E8%A3%85%E5%88%B0%E9%AB%98%E5%8F%AF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Zeblog"}],["meta",{"property":"og:title","content":"Nginx从安装到高可用"}],["meta",{"property":"og:description","content":"Nginx从安装到高可用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346363259473.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-07T05:03:50.000Z"}],["meta",{"property":"article:author","content":"jiange1236"}],["meta",{"property":"article:tag","content":"other"}],["meta",{"property":"article:published_time","content":"2022-01-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-07T05:03:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx从安装到高可用\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346363259473.jpg\\",\\"https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346363259474.webp\\"],\\"datePublished\\":\\"2022-01-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-07T05:03:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jiange1236\\"}]}"]]},"headers":[{"level":3,"title":"一、Nginx安装","slug":"一、nginx安装","link":"#一、nginx安装","children":[]},{"level":3,"title":"二、配置反向代理","slug":"二、配置反向代理","link":"#二、配置反向代理","children":[]},{"level":3,"title":"三、配置负载均衡","slug":"三、配置负载均衡","link":"#三、配置负载均衡","children":[]},{"level":3,"title":"四、upstream指令参数","slug":"四、upstream指令参数","link":"#四、upstream指令参数","children":[]},{"level":3,"title":"五、配置ssl证书提供https访问","slug":"五、配置ssl证书提供https访问","link":"#五、配置ssl证书提供https访问","children":[]},{"level":3,"title":"六、配置ha nginx","slug":"六、配置ha-nginx","link":"#六、配置ha-nginx","children":[]},{"level":3,"title":"七、LVS（Linux Virtual Server）实现高可用负载均衡","slug":"七、lvs-linux-virtual-server-实现高可用负载均衡","link":"#七、lvs-linux-virtual-server-实现高可用负载均衡","children":[]},{"level":3,"title":"附：LVS的负载均衡算法","slug":"附-lvs的负载均衡算法","link":"#附-lvs的负载均衡算法","children":[]},{"level":3,"title":"八、搭建Keepalived+Lvs+Nginx高可用集群负载均衡","slug":"八、搭建keepalived-lvs-nginx高可用集群负载均衡","link":"#八、搭建keepalived-lvs-nginx高可用集群负载均衡","children":[]}],"git":{"createdTime":1652425305000,"updatedTime":1717736630000,"contributors":[{"name":"jiange1236","email":"183465355@qq.com","commits":4},{"name":"周子健","email":"183465355@qq.com","commits":2}]},"readingTime":{"minutes":15.82,"words":4747},"filePathRelative":"others/Nginx从安装到高可用.md","localizedDate":"2022年1月16日","excerpt":"\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>原文：blog.csdn.net/qq_34886352/article/details/103581973</span></span>\\n<span class=\\"line\\"><span>第1-100期：100期Java项目整理</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{h as comp,u as data};

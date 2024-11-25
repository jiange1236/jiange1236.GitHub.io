import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as r,d as t,e as o,o as i}from"./app-CDhmjIP2.js";const p="/assets/wps6B3D-qqOwxAWV.jpg",d="/assets/wps6B3E-LrzKMfqC.jpg",l="/assets/wps6B3F-Cas10m_J.jpg",s="/assets/wps6B40-CvlsP81Z.jpg",g="/assets/wps6B50-BR5hUk7B.jpg",m="/assets/wps6B51-Dx6QyBdq.jpg",h="/assets/wps6B52-DkW6wVN3.jpg",c="/assets/wps6B53-BfiJLA7y.jpg",Q="/assets/wps6B54-CUd31xdj.jpg",f="/assets/wps6B55-YXQb2u4a.jpg",T="/assets/wps6B56-FgKHFiGY.jpg",b="/assets/6199d08327-DENDK2dC.png",u={},_={class:"MathJax",jax:"SVG",style:{position:"relative"}},k={style:{"vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.5ex",height:"1.932ex",role:"img",focusable:"false",viewBox:"0 -704 5966.8 854","aria-hidden":"true"};function y(D,e){return i(),a("div",null,[e[4]||(e[4]=r('<p>[toc]</p><p>apollolake</p><p><a href="https://www.synology.cn/zh-cn/knowledgebase/DSM/tutorial/File_Sharing/How_to_access_files_on_Synology_NAS_within_the_local_network_NFS" target="_blank" rel="noopener noreferrer">https://www.synology.cn/zh-cn/knowledgebase/DSM/tutorial/File_Sharing/How_to_access_files_on_Synology_NAS_within_the_local_network_NFS</a></p><h1 id="半洗白原理" tabindex="-1"><a class="header-anchor" href="#半洗白原理"><span>半洗白原理</span></a></h1><p>半洗白原理：DSM6 以上的系统。群晖Docker中会增加一个叫做DSM的功能。简单来说，就是利用Docker在你的群晖系统中，虚拟一个群晖系统。</p><p>然而，令我们庆幸的是。这个虚拟出来的小群晖。在Docker中是自带生成序列号（SN）的。只不过这个序列号我们只能用来半洗白而不能全洗白。</p><p>所以，我们只需要将这个小群晖的序列号和MAC 提取出来。替换到你物理机安装的群晖引导当中，就可以实现半洗白咯！</p><h1 id="何为半洗白" tabindex="-1"><a class="header-anchor" href="#何为半洗白"><span>何为半洗白</span></a></h1><p>黑群晖毕竟是黑群晖，是没有经过群晖验证的机器。所以有一些功能上的限制。</p><p>半洗白之后，除了官方的QuickConnect 和 群晖自带的DDNS不能用以外，其他的白群晖才具备的功能也能够解锁~</p><p><strong>Active Backup for Business 可激活</strong></p><p><strong>Video Station 有缩略图、可以转码 等等等~</strong></p><h1 id="值得注意的事" tabindex="-1"><a class="header-anchor" href="#值得注意的事"><span>值得注意的事</span></a></h1><p>本方法仅适用于DSM6+ 的系统。因为DSM5还没有这个功能</p><p>半洗白后除了QuickConnect 和 群晖的DDNS不能用之外，其余都可以使用</p><p>安装 Docker 的 DSM 需要 btrfs 格式的硬盘分区</p><h1 id="正式开始吧" tabindex="-1"><a class="header-anchor" href="#正式开始吧"><span>正式开始吧</span></a></h1><p><strong>一、Docker中安装DSM</strong></p><p>在套件中心，选择Docker ，并点击“安装套件”。</p><figure><img src="'+p+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>左侧点击“DSM”，并点击“新增”。</p><figure><img src="'+d+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如下三张图，不用自定义更改，全部点击“下一步”。</p><figure><img src="'+l+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="'+s+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="'+g+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>然后我们选择“手动上传”，点击“立即下载”就会把DDSM需要的系统固件直接下载到本地（根据你群晖的系统型号不同，下载的DDSM固件版本也不一样），然后点击浏览，选择刚刚下载好的文件。然后点击“下一步”就可以啦。</p><figure><img src="'+m+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>接下来，我们点击应用。</p><figure><img src="'+h+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如下图所示，DDSM1这个容器已经在运行啦。并且可以看到根据DHCP分配的IP地址。这个IP地址就是我们所谓的“小群晖”的地址。</p><figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>二、提取序列号及MAC地址</strong></p><p><strong>方法一：直接通过Synology Assistant扫描局域网络，即可看到“小群晖”的序列号及MAC地址</strong></p><figure><img src="'+Q+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>方法二：访问192.168.1.157 配置用户名、密码，然后进入系统之后，在信息中心中也可以看到序列号及MAC地址</strong></p><figure><img src="'+f+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="'+T+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>三、替换引导盘中的SN及MAC</strong></p><p>通过以上步骤，我们拿到SN 及MAC 之后，我们就可以将系统中的DDSM删除，然后系统关机。引导U盘拿下来插到电脑上。通过DiskGenius更改引导盘中的SN及MAC。然后重新插到群晖中，引导开机即为半洗白群晖咯！</p><h1 id="附-黑群晖各版本引导下载" tabindex="-1"><a class="header-anchor" href="#附-黑群晖各版本引导下载"><span>附：黑群晖各版本引导下载</span></a></h1><p><a href="https://tutu.bid/i/2297/ds3617xs1.03b%E6%94%AF%E6%8C%816.2~6.22.img" target="_blank" rel="noopener noreferrer">ds3617xs1.03b支持6.2~6.22.img</a></p><p><a href="https://tutu.bid/i/2297/ds3617xs1.02b%E6%94%AF%E6%8C%816.17.img" target="_blank" rel="noopener noreferrer">ds3617xs1.02b支持6.17.img</a></p><p><a href="https://tutu.bid/i/2297/ds3615xs1.03b%E6%94%AF%E6%8C%816.2~6.22.img" target="_blank" rel="noopener noreferrer">ds3615xs1.03b支持6.2~6.22.img</a></p><p><a href="https://tutu.bid/i/2297/ds3615xs1.02b%E6%94%AF%E6%8C%816.17.img" target="_blank" rel="noopener noreferrer">ds3615xs1.02b支持6.17.img</a></p><p><a href="https://tutu.bid/i/2297/DS918-1.04b-%E5%88%A0%E9%99%A4%E6%98%BE%E5%8D%A1%E9%A9%B1%E5%8A%A8.zip" target="_blank" rel="noopener noreferrer">DS918-1.04b-删除显卡驱动.zip</a></p><p><a href="https://tutu.bid/i/2297/DS918+1.04b%E6%94%AF%E6%8C%816.2~6.21.img" target="_blank" rel="noopener noreferrer">DS918+1.04b支持6.2~6.21.img</a></p><p><a href="https://tutu.bid/i/2297/DS918+1.03b%E6%94%AF%E6%8C%816.2.img" target="_blank" rel="noopener noreferrer">DS918+1.03b支持6.2.img</a></p><p><a href="https://tutu.bid/i/2297/DS916+1.02b%E6%94%AF%E6%8C%816.17.img" target="_blank" rel="noopener noreferrer">DS916+1.02b支持6.17.img</a></p><p><a href="https://tutu.bid/i/2297/3617%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%BC%95%E5%AF%BC.zip" target="_blank" rel="noopener noreferrer">3617虚拟机引导.zip</a></p><p>OK 以上就是当前比较流行的几个版本的引导。至于引导对应的群晖系统，大家到官网下载选择相应的版本下载即可。</p><p><a href="https://archive.synology.com/download/DSM/release/" target="_blank" rel="noopener noreferrer">https://archive.synology.com/download/DSM/release/</a></p><p>MAC地址 0211321F386C</p><p>序列号 DVKKG46OASU4G</p><p>执行 sudo su - 或sudo -i 切换到 root 账户下，</p><p>synoservice --restart pkgctl-Docker 重启Docker</p><p>SSH 登录到群晖,输入 ls /dev/dri,如果查询到目录下存在 renderD128 则表示显卡驱动已安装</p><h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h1><p>docker save -o jellyfin1064.tar jellyfin/jellyfin:10.6.4-amd64</p><p>docker save -o filebrowser291.tar 80x86/filebrowser:2.9.1-amd64</p><p>docker save -o firefox117.tar jlesage/firefox:v1.17.0</p><p>docker save -o embyserver202101.tar zishuo/embyserver:latest</p><p>docker save -o qbittorrent202106.tar linuxserver/qbittorrent</p><p>docker pull jellyfin/jellyfin:10.6.4-amd64</p><p>docker pull 80x86/qbittorrent:4.2.3-focal-20200319-amd64-nova</p><p>docker pull linuxserver/qbittorrent</p><p>docker pull 80x86/filebrowser:2.9.1-amd64</p><p>docker pull homeassistant/home-assistant:0.108.2</p><p>docker pull marcoraddatz/homebridge:4.7</p><p>docker pull smarthomefans/iobroker:4.1.0</p><p>docker pull jlesage/firefox:v1.17.0</p><p>docker pull zishuo/embyserver:latest</p><p><a href="https://github.com/jlesage/docker-firefox" target="_blank" rel="noopener noreferrer">https://github.com/jlesage/docker-firefox</a></p><p>docker image prune</p><p>docker images docker rmi xxx</p><h1 id="filebrowser" tabindex="-1"><a class="header-anchor" href="#filebrowser"><span>filebrowser</span></a></h1><p>IMAGE_NAME=80x86/filebrowser</p><p>WEB_PORT=8084</p><p>FB_AUTH_SERVER_ADDR=&quot;127.0.0.1&quot;</p><p>docker run -d \\</p><p>-e PUID=$UID \\</p><p>-e PGID=$GID \\</p><p>-e WEB_PORT=$WEB_PORT \\</p><p>-e FB_AUTH_SERVER_ADDR=$FB_AUTH_SERVER_ADDR \\</p>',84)),t("p",null,[e[2]||(e[2]=o("-p ")),t("mjx-container",_,[(i(),a("svg",k,e[0]||(e[0]=[r('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44A" d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z"></path></g><g data-mml-node="mi" transform="translate(1048,0)"><path data-c="1D438" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"></path></g><g data-mml-node="msub" transform="translate(1812,0)"><g data-mml-node="mi"><path data-c="1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path></g><g data-mml-node="mi" transform="translate(792,-150) scale(0.707)"><path data-c="1D443" d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path></g></g><g data-mml-node="mi" transform="translate(3185,0)"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mi" transform="translate(3948,0)"><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"></path></g><g data-mml-node="mi" transform="translate(4707,0)"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g data-mml-node="mo" transform="translate(5688.8,0)"><path data-c="3A" d="M78 370Q78 394 95 412T138 430Q162 430 180 414T199 371Q199 346 182 328T139 310T96 327T78 370ZM78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path></g></g></g>',1)]))),e[1]||(e[1]=t("mjx-assistive-mml",{unselectable:"on",display:"inline"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"W"),t("mi",null,"E"),t("msub",null,[t("mi",null,"B"),t("mi",null,"P")]),t("mi",null,"O"),t("mi",null,"R"),t("mi",null,"T"),t("mo",null,":")])],-1))]),e[3]||(e[3]=o("WEB_PORT \\"))]),e[5]||(e[5]=r('<p>-v /volume1/docker/fb:/config \\</p><p>-v /volume1:/myfiles/volume1 \\</p><p>--mount type=tmpfs,destination=/tmp \\</p><p>--device=/dev/dri/renderD128:/dev/dri/renderD128 \\</p><p>${IMAGE_NAME}:2.9.1-amd64</p><h1 id="jellyfin" tabindex="-1"><a class="header-anchor" href="#jellyfin"><span>jellyfin</span></a></h1><p><a href="https://post.smzdm.com/p/akmgnkdk/" target="_blank" rel="noopener noreferrer">https://post.smzdm.com/p/akmgnkdk/</a></p><p>docker run --name=jellyfinyj --device=/dev/dri:/dev/dri jellyfin/jellyfin:latest</p><h1 id="tmm" tabindex="-1"><a class="header-anchor" href="#tmm"><span>tmm</span></a></h1><p>104.16.61.155 <a href="http://image.tmdb.org" target="_blank" rel="noopener noreferrer">image.tmdb.org</a></p><p>13.35.67.86 <a href="http://api.themoviedb.org" target="_blank" rel="noopener noreferrer">api.themoviedb.org</a></p><p>13.224.161.90 <a href="http://api.themoviedb.org" target="_blank" rel="noopener noreferrer">api.themoviedb.org</a></p><p>54.192.151.79 <a href="http://www.themoviedb.org" target="_blank" rel="noopener noreferrer">www.themoviedb.org</a></p><h1 id="firefox" tabindex="-1"><a class="header-anchor" href="#firefox"><span>firefox</span></a></h1><h1 id="emby" tabindex="-1"><a class="header-anchor" href="#emby"><span>Emby</span></a></h1><p><a href="https://synology.emby.media/packages/synology/stable/4.4.3.0-1/EmbyServer_4.4.3.0-1_apollolake.spk" target="_blank" rel="noopener noreferrer">https://synology.emby.media/packages/synology/stable/4.4.3.0-1/EmbyServer_4.4.3.0-1_apollolake.spk</a></p><p><a href="https://synology.emby.media/packages/synology/stable/4.4.3.0-1/EmbyServer_4.4.3.0-1_xpen-silvermont.spk" target="_blank" rel="noopener noreferrer">https://synology.emby.media/packages/synology/stable/4.4.3.0-1/EmbyServer_4.4.3.0-1_xpen-silvermont.spk</a></p><p><strong>SSH</strong></p><p>使用putty通过SSH 登陆群晖，使用系统相同的帐号及密码（输入密码不显示，输完回车即可）</p><p>输入 sudo -i 回车，输入群晖的密码，切换到root用户（密码同admin相同）</p><p><strong>EMBY</strong></p><p>wget -N --no-check-certificate &quot;<a href="https://raw.githubusercontent.com/s1oz/embyonekey/master/embyonekey.sh" target="_blank" rel="noopener noreferrer">https://raw.githubusercontent.com/s1oz/embyonekey/master/embyonekey.sh</a>&quot; &amp;&amp; chmod +x <a href="http://embyonekey.sh" target="_blank" rel="noopener noreferrer">embyonekey.sh</a> &amp;&amp; ./embyonekey.sh</p><h1 id="阿里云盘" tabindex="-1"><a class="header-anchor" href="#阿里云盘"><span>阿里云盘</span></a></h1><p>打开<a href="https://www.aliyundrive.com/" target="_blank" rel="noopener noreferrer">阿里云盘</a>的官网 登录后按F12 进入找到tokan里面的refresh_token复制存着备用</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="nas-cpu" tabindex="-1"><a class="header-anchor" href="#nas-cpu"><span>NAS CPU</span></a></h1><table><thead><tr><th>代数</th><th>CPU</th><th>GPU</th><th>CPU Mark</th><th>GPU Mark</th><th>Price</th><th>性价比</th></tr></thead><tbody><tr><td></td><td>J3455</td><td>HD 500</td><td>2221</td><td>298</td><td></td><td></td></tr><tr><td>7</td><td>G4600T</td><td>HD 630</td><td>3130</td><td>1134</td><td>390</td><td>8.03</td></tr><tr><td>8</td><td>G5400T</td><td>UHD 610</td><td>3119</td><td>732</td><td>445</td><td>7.01</td></tr><tr><td>10</td><td>G5900T</td><td>UHD 610</td><td>2648</td><td>732</td><td>278</td><td>9.53</td></tr><tr><td>10</td><td>G6400T</td><td>UHD 610</td><td>3610</td><td>732</td><td>399</td><td>9.05</td></tr><tr><td>6</td><td>I5 6400T</td><td>HD 530</td><td>4280</td><td>981</td><td>475</td><td>9.01</td></tr><tr><td>8</td><td>I3 8100T</td><td>UHD 630</td><td>5321</td><td>1348</td><td>639</td><td>8.33</td></tr><tr><td>8</td><td>I5 8400T</td><td>UHD 630</td><td>7408</td><td>1348</td><td>788</td><td>9.4</td></tr><tr><td>9</td><td>I3 9100T</td><td>UHD 630</td><td>5548</td><td>1348</td><td>770</td><td>7.21</td></tr><tr><td>9</td><td>I5 9400T</td><td>UHD 630</td><td>7670</td><td>1348</td><td>950</td><td>8.07</td></tr><tr><td>10</td><td>I3 10100T</td><td>UHD 630</td><td>7475</td><td>1348</td><td>680</td><td>10.99</td></tr><tr><td>10</td><td>I5 10400T</td><td>UHD 630</td><td>10110</td><td>1348</td><td>1095</td><td>9.23</td></tr></tbody></table>',27))])}const w=n(u,[["render",y],["__file","NAS黑群晖利用DDSM半洗白教程.html.vue"]]),E=JSON.parse('{"path":"/tech/NAS%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.html","title":"半洗白原理","lang":"zh-CN","frontmatter":{"date":"2022-05-14T00:00:00.000Z","description":"[toc] apollolake https://www.synology.cn/zh-cn/knowledgebase/DSM/tutorial/File_Sharing/How_to_access_files_on_Synology_NAS_within_the_local_network_NFS 半洗白原理 半洗白原理：DSM6 以上的系统。群晖...","head":[["meta",{"property":"og:url","content":"https://jiange1236.github.io/tech/NAS%E9%BB%91%E7%BE%A4%E6%99%96%E5%88%A9%E7%94%A8DDSM%E5%8D%8A%E6%B4%97%E7%99%BD%E6%95%99%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"Zeblog"}],["meta",{"property":"og:title","content":"半洗白原理"}],["meta",{"property":"og:description","content":"[toc] apollolake https://www.synology.cn/zh-cn/knowledgebase/DSM/tutorial/File_Sharing/How_to_access_files_on_Synology_NAS_within_the_local_network_NFS 半洗白原理 半洗白原理：DSM6 以上的系统。群晖..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-09T09:47:21.000Z"}],["meta",{"property":"article:published_time","content":"2022-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-09T09:47:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"半洗白原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-09T09:47:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zine⁶\\",\\"url\\":\\"https://zecdn.top\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://jiange1236.github.io/atom.xml","title":"Zeblog Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://jiange1236.github.io/feed.json","title":"Zeblog JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://jiange1236.github.io/rss.xml","title":"Zeblog RSS Feed"}]]},"headers":[{"level":1,"title":"半洗白原理","slug":"半洗白原理","link":"#半洗白原理","children":[]},{"level":1,"title":"何为半洗白","slug":"何为半洗白","link":"#何为半洗白","children":[]},{"level":1,"title":"值得注意的事","slug":"值得注意的事","link":"#值得注意的事","children":[]},{"level":1,"title":"正式开始吧","slug":"正式开始吧","link":"#正式开始吧","children":[]},{"level":1,"title":"附：黑群晖各版本引导下载","slug":"附-黑群晖各版本引导下载","link":"#附-黑群晖各版本引导下载","children":[]},{"level":1,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":1,"title":"filebrowser","slug":"filebrowser","link":"#filebrowser","children":[]},{"level":1,"title":"jellyfin","slug":"jellyfin","link":"#jellyfin","children":[]},{"level":1,"title":"tmm","slug":"tmm","link":"#tmm","children":[]},{"level":1,"title":"firefox","slug":"firefox","link":"#firefox","children":[]},{"level":1,"title":"Emby","slug":"emby","link":"#emby","children":[]},{"level":1,"title":"阿里云盘","slug":"阿里云盘","link":"#阿里云盘","children":[]},{"level":1,"title":"NAS CPU","slug":"nas-cpu","link":"#nas-cpu","children":[]}],"git":{"createdTime":1652543953000,"updatedTime":1717926441000,"contributors":[{"name":"周子健","email":"183465355@qq.com","commits":3},{"name":"jiange1236","email":"183465355@qq.com","commits":1}]},"readingTime":{"minutes":5.65,"words":1695},"filePathRelative":"tech/NAS黑群晖利用DDSM半洗白教程.md","localizedDate":"2022年5月14日","excerpt":"","autoDesc":true}');export{w as comp,E as data};

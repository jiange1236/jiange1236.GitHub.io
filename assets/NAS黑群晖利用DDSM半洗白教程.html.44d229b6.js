import{r as d,c as o,a as t,d as s,F as p,e as a,b as e,o as n}from"./app.802f3366.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";var l="/assets/wps6B3D.aa4800b0.jpg",h="/assets/wps6B3E.f4f646ed.jpg",c="/assets/wps6B3F.d561cbd5.jpg",m="/assets/wps6B40.156cfa6d.jpg",_="/assets/wps6B50.d26bd25a.jpg",g="/assets/wps6B51.bdb51f59.jpg",u="/assets/wps6B52.78605fb6.jpg",b="/assets/wps6B53.efc17ace.jpg",f="/assets/wps6B54.c8e35034.jpg",k="/assets/wps6B55.473b0acf.jpg",y="/assets/wps6B56.fe60b5e0.jpg",D="/assets/6199d08327.b709684f.png";const v={},x=a('<p>[toc]</p><p>apollolake</p><p>https://www.synology.cn/zh-cn/knowledgebase/DSM/tutorial/File_Sharing/How_to_access_files_on_Synology_NAS_within_the_local_network_NFS</p><h1 id="\u534A\u6D17\u767D\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u534A\u6D17\u767D\u539F\u7406" aria-hidden="true">#</a> \u534A\u6D17\u767D\u539F\u7406</h1><p>\u534A\u6D17\u767D\u539F\u7406\uFF1ADSM6 \u4EE5\u4E0A\u7684\u7CFB\u7EDF\u3002\u7FA4\u6656Docker\u4E2D\u4F1A\u589E\u52A0\u4E00\u4E2A\u53EB\u505ADSM\u7684\u529F\u80FD\u3002\u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F\u5229\u7528Docker\u5728\u4F60\u7684\u7FA4\u6656\u7CFB\u7EDF\u4E2D\uFF0C\u865A\u62DF\u4E00\u4E2A\u7FA4\u6656\u7CFB\u7EDF\u3002</p><p>\u7136\u800C\uFF0C\u4EE4\u6211\u4EEC\u5E86\u5E78\u7684\u662F\u3002\u8FD9\u4E2A\u865A\u62DF\u51FA\u6765\u7684\u5C0F\u7FA4\u6656\u3002\u5728Docker\u4E2D\u662F\u81EA\u5E26\u751F\u6210\u5E8F\u5217\u53F7\uFF08SN\uFF09\u7684\u3002\u53EA\u4E0D\u8FC7\u8FD9\u4E2A\u5E8F\u5217\u53F7\u6211\u4EEC\u53EA\u80FD\u7528\u6765\u534A\u6D17\u767D\u800C\u4E0D\u80FD\u5168\u6D17\u767D\u3002</p><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5C06\u8FD9\u4E2A\u5C0F\u7FA4\u6656\u7684\u5E8F\u5217\u53F7\u548CMAC \u63D0\u53D6\u51FA\u6765\u3002\u66FF\u6362\u5230\u4F60\u7269\u7406\u673A\u5B89\u88C5\u7684\u7FA4\u6656\u5F15\u5BFC\u5F53\u4E2D\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u534A\u6D17\u767D\u54AF\uFF01</p><h1 id="\u4F55\u4E3A\u534A\u6D17\u767D" tabindex="-1"><a class="header-anchor" href="#\u4F55\u4E3A\u534A\u6D17\u767D" aria-hidden="true">#</a> \u4F55\u4E3A\u534A\u6D17\u767D</h1><p>\u9ED1\u7FA4\u6656\u6BD5\u7ADF\u662F\u9ED1\u7FA4\u6656\uFF0C\u662F\u6CA1\u6709\u7ECF\u8FC7\u7FA4\u6656\u9A8C\u8BC1\u7684\u673A\u5668\u3002\u6240\u4EE5\u6709\u4E00\u4E9B\u529F\u80FD\u4E0A\u7684\u9650\u5236\u3002</p><p>\u534A\u6D17\u767D\u4E4B\u540E\uFF0C\u9664\u4E86\u5B98\u65B9\u7684QuickConnect \u548C \u7FA4\u6656\u81EA\u5E26\u7684DDNS\u4E0D\u80FD\u7528\u4EE5\u5916\uFF0C\u5176\u4ED6\u7684\u767D\u7FA4\u6656\u624D\u5177\u5907\u7684\u529F\u80FD\u4E5F\u80FD\u591F\u89E3\u9501~</p><p><strong>Active Backup for Business \u53EF\u6FC0\u6D3B</strong></p><p><strong>Video Station \u6709\u7F29\u7565\u56FE\u3001\u53EF\u4EE5\u8F6C\u7801 \u7B49\u7B49\u7B49~</strong></p><h1 id="\u503C\u5F97\u6CE8\u610F\u7684\u4E8B" tabindex="-1"><a class="header-anchor" href="#\u503C\u5F97\u6CE8\u610F\u7684\u4E8B" aria-hidden="true">#</a> \u503C\u5F97\u6CE8\u610F\u7684\u4E8B</h1><p>\u672C\u65B9\u6CD5\u4EC5\u9002\u7528\u4E8EDSM6+ \u7684\u7CFB\u7EDF\u3002\u56E0\u4E3ADSM5\u8FD8\u6CA1\u6709\u8FD9\u4E2A\u529F\u80FD</p><p>\u534A\u6D17\u767D\u540E\u9664\u4E86QuickConnect \u548C \u7FA4\u6656\u7684DDNS\u4E0D\u80FD\u7528\u4E4B\u5916\uFF0C\u5176\u4F59\u90FD\u53EF\u4EE5\u4F7F\u7528</p><p>\u5B89\u88C5 Docker \u7684 DSM \u9700\u8981 btrfs \u683C\u5F0F\u7684\u786C\u76D8\u5206\u533A</p><h1 id="\u6B63\u5F0F\u5F00\u59CB\u5427" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5F0F\u5F00\u59CB\u5427" aria-hidden="true">#</a> \u6B63\u5F0F\u5F00\u59CB\u5427</h1><p><strong>\u4E00\u3001Docker\u4E2D\u5B89\u88C5DSM</strong></p><p>\u5728\u5957\u4EF6\u4E2D\u5FC3\uFF0C\u9009\u62E9Docker \uFF0C\u5E76\u70B9\u51FB\u201C\u5B89\u88C5\u5957\u4EF6\u201D\u3002</p><p><img src="'+l+'" alt="img" loading="lazy"></p><p>\u5DE6\u4FA7\u70B9\u51FB\u201CDSM\u201D\uFF0C\u5E76\u70B9\u51FB\u201C\u65B0\u589E\u201D\u3002</p><p><img src="'+h+'" alt="img" loading="lazy"></p><p>\u5982\u4E0B\u4E09\u5F20\u56FE\uFF0C\u4E0D\u7528\u81EA\u5B9A\u4E49\u66F4\u6539\uFF0C\u5168\u90E8\u70B9\u51FB\u201C\u4E0B\u4E00\u6B65\u201D\u3002</p><p><img src="'+c+'" alt="img" loading="lazy"></p><p><img src="'+m+'" alt="img" loading="lazy"></p><p><img src="'+_+'" alt="img" loading="lazy"></p><p>\u7136\u540E\u6211\u4EEC\u9009\u62E9\u201C\u624B\u52A8\u4E0A\u4F20\u201D\uFF0C\u70B9\u51FB\u201C\u7ACB\u5373\u4E0B\u8F7D\u201D\u5C31\u4F1A\u628ADDSM\u9700\u8981\u7684\u7CFB\u7EDF\u56FA\u4EF6\u76F4\u63A5\u4E0B\u8F7D\u5230\u672C\u5730\uFF08\u6839\u636E\u4F60\u7FA4\u6656\u7684\u7CFB\u7EDF\u578B\u53F7\u4E0D\u540C\uFF0C\u4E0B\u8F7D\u7684DDSM\u56FA\u4EF6\u7248\u672C\u4E5F\u4E0D\u4E00\u6837\uFF09\uFF0C\u7136\u540E\u70B9\u51FB\u6D4F\u89C8\uFF0C\u9009\u62E9\u521A\u521A\u4E0B\u8F7D\u597D\u7684\u6587\u4EF6\u3002\u7136\u540E\u70B9\u51FB\u201C\u4E0B\u4E00\u6B65\u201D\u5C31\u53EF\u4EE5\u5566\u3002</p><p><img src="'+g+'" alt="img" loading="lazy"></p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u70B9\u51FB\u5E94\u7528\u3002</p><p><img src="'+u+'" alt="img" loading="lazy"></p><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF0CDDSM1\u8FD9\u4E2A\u5BB9\u5668\u5DF2\u7ECF\u5728\u8FD0\u884C\u5566\u3002\u5E76\u4E14\u53EF\u4EE5\u770B\u5230\u6839\u636EDHCP\u5206\u914D\u7684IP\u5730\u5740\u3002\u8FD9\u4E2AIP\u5730\u5740\u5C31\u662F\u6211\u4EEC\u6240\u8C13\u7684\u201C\u5C0F\u7FA4\u6656\u201D\u7684\u5730\u5740\u3002</p><p><img src="'+b+'" alt="img" loading="lazy"></p><p><strong>\u4E8C\u3001\u63D0\u53D6\u5E8F\u5217\u53F7\u53CAMAC\u5730\u5740</strong></p><p><strong>\u65B9\u6CD5\u4E00\uFF1A\u76F4\u63A5\u901A\u8FC7Synology Assistant\u626B\u63CF\u5C40\u57DF\u7F51\u7EDC\uFF0C\u5373\u53EF\u770B\u5230\u201C\u5C0F\u7FA4\u6656\u201D\u7684\u5E8F\u5217\u53F7\u53CAMAC\u5730\u5740</strong></p><p><img src="'+f+'" alt="img" loading="lazy"></p><p><strong>\u65B9\u6CD5\u4E8C\uFF1A\u8BBF\u95EE192.168.1.157 \u914D\u7F6E\u7528\u6237\u540D\u3001\u5BC6\u7801\uFF0C\u7136\u540E\u8FDB\u5165\u7CFB\u7EDF\u4E4B\u540E\uFF0C\u5728\u4FE1\u606F\u4E2D\u5FC3\u4E2D\u4E5F\u53EF\u4EE5\u770B\u5230\u5E8F\u5217\u53F7\u53CAMAC\u5730\u5740</strong></p><p><img src="'+k+'" alt="img" loading="lazy"></p><p><img src="'+y+'" alt="img" loading="lazy"></p><p><strong>\u4E09\u3001\u66FF\u6362\u5F15\u5BFC\u76D8\u4E2D\u7684SN\u53CAMAC</strong></p><p>\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u6211\u4EEC\u62FF\u5230SN \u53CAMAC \u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5C06\u7CFB\u7EDF\u4E2D\u7684DDSM\u5220\u9664\uFF0C\u7136\u540E\u7CFB\u7EDF\u5173\u673A\u3002\u5F15\u5BFCU\u76D8\u62FF\u4E0B\u6765\u63D2\u5230\u7535\u8111\u4E0A\u3002\u901A\u8FC7DiskGenius\u66F4\u6539\u5F15\u5BFC\u76D8\u4E2D\u7684SN\u53CAMAC\u3002\u7136\u540E\u91CD\u65B0\u63D2\u5230\u7FA4\u6656\u4E2D\uFF0C\u5F15\u5BFC\u5F00\u673A\u5373\u4E3A\u534A\u6D17\u767D\u7FA4\u6656\u54AF\uFF01</p><h1 id="\u9644-\u9ED1\u7FA4\u6656\u5404\u7248\u672C\u5F15\u5BFC\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u9644-\u9ED1\u7FA4\u6656\u5404\u7248\u672C\u5F15\u5BFC\u4E0B\u8F7D" aria-hidden="true">#</a> \u9644\uFF1A\u9ED1\u7FA4\u6656\u5404\u7248\u672C\u5F15\u5BFC\u4E0B\u8F7D</h1>',41),E={href:"https://tutu.bid/i/2297/ds3617xs1.03b%E6%94%AF%E6%8C%816.2~6.22.img",target:"_blank",rel:"noopener noreferrer"},S=e("ds3617xs1.03b\u652F\u63016.2~6.22.img"),w={href:"https://tutu.bid/i/2297/ds3617xs1.02b%E6%94%AF%E6%8C%816.17.img",target:"_blank",rel:"noopener noreferrer"},A=e("ds3617xs1.02b\u652F\u63016.17.img"),B={href:"https://tutu.bid/i/2297/ds3615xs1.03b%E6%94%AF%E6%8C%816.2~6.22.img",target:"_blank",rel:"noopener noreferrer"},M=e("ds3615xs1.03b\u652F\u63016.2~6.22.img"),j={href:"https://tutu.bid/i/2297/ds3615xs1.02b%E6%94%AF%E6%8C%816.17.img",target:"_blank",rel:"noopener noreferrer"},C=e("ds3615xs1.02b\u652F\u63016.17.img"),z={href:"https://tutu.bid/i/2297/DS918-1.04b-%E5%88%A0%E9%99%A4%E6%98%BE%E5%8D%A1%E9%A9%B1%E5%8A%A8.zip",target:"_blank",rel:"noopener noreferrer"},T=e("DS918-1.04b-\u5220\u9664\u663E\u5361\u9A71\u52A8.zip"),U={href:"https://tutu.bid/i/2297/DS918+1.04b%E6%94%AF%E6%8C%816.2~6.21.img",target:"_blank",rel:"noopener noreferrer"},H=e("DS918+1.04b\u652F\u63016.2~6.21.img"),F={href:"https://tutu.bid/i/2297/DS918+1.03b%E6%94%AF%E6%8C%816.2.img",target:"_blank",rel:"noopener noreferrer"},N=e("DS918+1.03b\u652F\u63016.2.img"),P={href:"https://tutu.bid/i/2297/DS916+1.02b%E6%94%AF%E6%8C%816.17.img",target:"_blank",rel:"noopener noreferrer"},I=e("DS916+1.02b\u652F\u63016.17.img"),R={href:"https://tutu.bid/i/2297/3617%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%BC%95%E5%AF%BC.zip",target:"_blank",rel:"noopener noreferrer"},G=e("3617\u865A\u62DF\u673A\u5F15\u5BFC.zip"),O=a('<p>OK \u4EE5\u4E0A\u5C31\u662F\u5F53\u524D\u6BD4\u8F83\u6D41\u884C\u7684\u51E0\u4E2A\u7248\u672C\u7684\u5F15\u5BFC\u3002\u81F3\u4E8E\u5F15\u5BFC\u5BF9\u5E94\u7684\u7FA4\u6656\u7CFB\u7EDF\uFF0C\u5927\u5BB6\u5230\u5B98\u7F51\u4E0B\u8F7D\u9009\u62E9\u76F8\u5E94\u7684\u7248\u672C\u4E0B\u8F7D\u5373\u53EF\u3002</p><p>https://archive.synology.com/download/DSM/release/</p><p>MAC\u5730\u5740 0211321F386C</p><p>\u5E8F\u5217\u53F7 DVKKG46OASU4G</p><p>\u6267\u884C sudo su - \u6216sudo -i \u5207\u6362\u5230 root \u8D26\u6237\u4E0B\uFF0C</p><p>synoservice --restart pkgctl-Docker \u91CD\u542FDocker</p><p>SSH \u767B\u5F55\u5230\u7FA4\u6656,\u8F93\u5165 ls /dev/dri,\u5982\u679C\u67E5\u8BE2\u5230\u76EE\u5F55\u4E0B\u5B58\u5728 renderD128 \u5219\u8868\u793A\u663E\u5361\u9A71\u52A8\u5DF2\u5B89\u88C5</p><h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><p>docker save -o jellyfin1064.tar jellyfin/jellyfin:10.6.4-amd64</p><p>docker save -o filebrowser291.tar 80x86/filebrowser:2.9.1-amd64</p><p>docker save -o firefox117.tar jlesage/firefox:v1.17.0</p><p>docker save -o embyserver202101.tar zishuo/embyserver:latest</p><p>docker save -o qbittorrent202106.tar linuxserver/qbittorrent</p><p>docker pull jellyfin/jellyfin:10.6.4-amd64</p><p>docker pull 80x86/qbittorrent:4.2.3-focal-20200319-amd64-nova</p><p>docker pull linuxserver/qbittorrent</p><p>docker pull 80x86/filebrowser:2.9.1-amd64</p><p>docker pull homeassistant/home-assistant:0.108.2</p><p>docker pull marcoraddatz/homebridge:4.7</p><p>docker pull smarthomefans/iobroker:4.1.0</p><p>docker pull jlesage/firefox:v1.17.0</p><p>docker pull zishuo/embyserver:latest</p><p>https://github.com/jlesage/docker-firefox</p><p>docker image prune</p><p>docker images docker rmi xxx</p><h1 id="filebrowser" tabindex="-1"><a class="header-anchor" href="#filebrowser" aria-hidden="true">#</a> filebrowser</h1><p>IMAGE_NAME=80x86/filebrowser</p><p>WEB_PORT=8084</p><p>FB_AUTH_SERVER_ADDR=&quot;127.0.0.1&quot;</p><p>docker run -d \\</p><p>-e PUID=$UID \\</p><p>-e PGID=$GID \\</p><p>-e WEB_PORT=$WEB_PORT \\</p><p>-e FB_AUTH_SERVER_ADDR=$FB_AUTH_SERVER_ADDR \\</p>',34),V=t("p",null,[e("-p "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"W"),t("mi",null,"E"),t("msub",null,[t("mi",null,"B"),t("mi",null,"P")]),t("mi",null,"O"),t("mi",null,"R"),t("mi",null,"T"),t("mo",null,":")]),t("annotation",{encoding:"application/x-tex"},"WEB_PORT:")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"W"),t("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E"),t("span",{class:"mord"},[t("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.3283em"}},[t("span",{style:{top:"-2.55em","margin-left":"-0.0502em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"P")])])]),t("span",{class:"vlist-s"},"\u200B")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"ORT"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},":")])])]),e("WEB_PORT \\")],-1),q=a('<p>-v /volume1/docker/fb:/config \\</p><p>-v /volume1:/myfiles/volume1 \\</p><p>--mount type=tmpfs,destination=/tmp \\</p><p>--device=/dev/dri/renderD128:/dev/dri/renderD128 \\</p><p>${IMAGE_NAME}:2.9.1-amd64</p><h1 id="jellyfin" tabindex="-1"><a class="header-anchor" href="#jellyfin" aria-hidden="true">#</a> jellyfin</h1><p>https://post.smzdm.com/p/akmgnkdk/</p><p>docker run --name=jellyfinyj --device=/dev/dri:/dev/dri jellyfin/jellyfin:latest</p><h1 id="tmm" tabindex="-1"><a class="header-anchor" href="#tmm" aria-hidden="true">#</a> tmm</h1><p>104.16.61.155 image.tmdb.org</p><p>13.35.67.86 api.themoviedb.org</p><p>13.224.161.90 api.themoviedb.org</p>',12),W=e("54.192.151.79 "),$={href:"http://www.themoviedb.org",target:"_blank",rel:"noopener noreferrer"},K=e("www.themoviedb.org"),L=a('<h1 id="firefox" tabindex="-1"><a class="header-anchor" href="#firefox" aria-hidden="true">#</a> firefox</h1><h1 id="emby" tabindex="-1"><a class="header-anchor" href="#emby" aria-hidden="true">#</a> Emby</h1><p>https://synology.emby.media/packages/synology/stable/4.4.3.0-1/EmbyServer_4.4.3.0-1_apollolake.spk</p><p>https://synology.emby.media/packages/synology/stable/4.4.3.0-1/EmbyServer_4.4.3.0-1_xpen-silvermont.spk</p><p><strong>SSH</strong></p><p>\u4F7F\u7528putty\u901A\u8FC7SSH \u767B\u9646\u7FA4\u6656\uFF0C\u4F7F\u7528\u7CFB\u7EDF\u76F8\u540C\u7684\u5E10\u53F7\u53CA\u5BC6\u7801\uFF08\u8F93\u5165\u5BC6\u7801\u4E0D\u663E\u793A\uFF0C\u8F93\u5B8C\u56DE\u8F66\u5373\u53EF\uFF09</p><p>\u8F93\u5165 sudo -i \u56DE\u8F66\uFF0C\u8F93\u5165\u7FA4\u6656\u7684\u5BC6\u7801\uFF0C\u5207\u6362\u5230root\u7528\u6237\uFF08\u5BC6\u7801\u540Cadmin\u76F8\u540C\uFF09</p><p><strong>EMBY</strong></p><p>wget -N --no-check-certificate &quot;https://raw.githubusercontent.com/s1oz/embyonekey/master/embyonekey.sh&quot; &amp;&amp; chmod +x embyonekey.sh &amp;&amp; ./embyonekey.sh</p><h1 id="\u963F\u91CC\u4E91\u76D8" tabindex="-1"><a class="header-anchor" href="#\u963F\u91CC\u4E91\u76D8" aria-hidden="true">#</a> \u963F\u91CC\u4E91\u76D8</h1>',10),Q=e("\u6253\u5F00"),J={href:"https://www.aliyundrive.com/",target:"_blank",rel:"noopener noreferrer"},Y=e("\u963F\u91CC\u4E91\u76D8"),X=e("\u7684\u5B98\u7F51 \u767B\u5F55\u540E\u6309F12 \u8FDB\u5165\u627E\u5230tokan\u91CC\u9762\u7684refresh_token\u590D\u5236\u5B58\u7740\u5907\u7528"),Z=a('<p><img src="'+D+'" alt="" loading="lazy"></p><h1 id="nas-cpu" tabindex="-1"><a class="header-anchor" href="#nas-cpu" aria-hidden="true">#</a> NAS CPU</h1><table><thead><tr><th>\u4EE3\u6570</th><th>CPU</th><th>GPU</th><th>CPU Mark</th><th>GPU Mark</th><th>Price</th><th>\u6027\u4EF7\u6BD4</th></tr></thead><tbody><tr><td></td><td>J3455</td><td>HD 500</td><td>2221</td><td>298</td><td></td><td></td></tr><tr><td>7</td><td>G4600T</td><td>HD 630</td><td>3130</td><td>1134</td><td>390</td><td>8.03</td></tr><tr><td>8</td><td>G5400T</td><td>UHD 610</td><td>3119</td><td>732</td><td>445</td><td>7.01</td></tr><tr><td>10</td><td>G5900T</td><td>UHD 610</td><td>2648</td><td>732</td><td>278</td><td>9.53</td></tr><tr><td>10</td><td>G6400T</td><td>UHD 610</td><td>3610</td><td>732</td><td>399</td><td>9.05</td></tr><tr><td>6</td><td>I5 6400T</td><td>HD 530</td><td>4280</td><td>981</td><td>475</td><td>9.01</td></tr><tr><td>8</td><td>I3 8100T</td><td>UHD 630</td><td>5321</td><td>1348</td><td>639</td><td>8.33</td></tr><tr><td>8</td><td>I5 8400T</td><td>UHD 630</td><td>7408</td><td>1348</td><td>788</td><td>9.4</td></tr><tr><td>9</td><td>I3 9100T</td><td>UHD 630</td><td>5548</td><td>1348</td><td>770</td><td>7.21</td></tr><tr><td>9</td><td>I5 9400T</td><td>UHD 630</td><td>7670</td><td>1348</td><td>950</td><td>8.07</td></tr><tr><td>10</td><td>I3 10100T</td><td>UHD 630</td><td>7475</td><td>1348</td><td>680</td><td>10.99</td></tr><tr><td>10</td><td>I5 10400T</td><td>UHD 630</td><td>10110</td><td>1348</td><td>1095</td><td>9.23</td></tr></tbody></table>',3);function tt(et,rt){const r=d("ExternalLinkIcon");return n(),o(p,null,[x,t("p",null,[t("a",E,[S,s(r)])]),t("p",null,[t("a",w,[A,s(r)])]),t("p",null,[t("a",B,[M,s(r)])]),t("p",null,[t("a",j,[C,s(r)])]),t("p",null,[t("a",z,[T,s(r)])]),t("p",null,[t("a",U,[H,s(r)])]),t("p",null,[t("a",F,[N,s(r)])]),t("p",null,[t("a",P,[I,s(r)])]),t("p",null,[t("a",R,[G,s(r)])]),O,V,q,t("p",null,[W,t("a",$,[K,s(r)])]),L,t("p",null,[Q,t("a",J,[Y,s(r)]),X]),Z],64)}var dt=i(v,[["render",tt],["__file","NAS\u9ED1\u7FA4\u6656\u5229\u7528DDSM\u534A\u6D17\u767D\u6559\u7A0B.html.vue"]]);export{dt as default};

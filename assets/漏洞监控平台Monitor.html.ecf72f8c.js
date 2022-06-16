import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as r,c as l,b as e,e as t,a as i,d as n}from"./app.f0b88dfe.js";const o={},c=i(`<h1 id="\u6F0F\u6D1E\u76D1\u63A7\u5E73\u53F0\u2014\u2014monitor" tabindex="-1"><a class="header-anchor" href="#\u6F0F\u6D1E\u76D1\u63A7\u5E73\u53F0\u2014\u2014monitor" aria-hidden="true">#</a> \u6F0F\u6D1E\u76D1\u63A7\u5E73\u53F0\u2014\u2014Monitor</h1><h2 id="\u5199\u5728\u524D\u9762\u7684\u8BDD" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u524D\u9762\u7684\u8BDD" aria-hidden="true">#</a> <strong>\u5199\u5728\u524D\u9762\u7684\u8BDD</strong></h2><p>\u5BF9\u4E8E\u7F51\u7EDC\u5B89\u5168\u4ECE\u4E1A\u8005\u6765\u8BF4\uFF0C\u5B9E\u65F6\u638C\u63E1\u6F0F\u6D1E\u52A8\u6001\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u6240\u4EE5\u840C\u751F\u4E86\u5F00\u53D1\u4E00\u4E2A\u76D1\u63A7\u5E73\u53F0\u7684\u60F3\u6CD5\uFF0C\u628A\u6700\u65B0\u6F0F\u6D1E\u8D44\u8BAF\u96C6\u6210\u7136\u540E\u8FDB\u884C\u63A8\u9001\u3002\u8FD9\u91CC\u63A8\u9001\u9009\u7684\u662F\u4F01\u4E1A\u5FAE\u4FE1\uFF0C\u7559\u4E0B\u4E86\u90AE\u4EF6\u63A8\u9001\u7684\u63A5\u53E3\uFF0C\u9ED8\u8BA4\u662F\u5173\u95ED\u7684\uFF0C\u60F3\u5F00\u542F\u7684\u5C0F\u4F19\u4F34\u81EA\u884C\u5F00\u542F\u3002\u6570\u636E\u5E93\u9009\u7528\u7684\u662Fsqlite\u3002\u76EE\u524D\u5B9E\u73B0\u4E86\u76D1\u63A7GitHub\u3001\u5FAE\u8F6F\u3001CNNVD\u3002\uFF08\u4E0D\u8981\u95EE\u6211\u4E3A\u5565\u4E0D\u76D1\u63A7CNVD\uFF0C\u6211\u662F\u4E0D\u4F1A\u544A\u8BC9\u4F60\u6211\u5E72\u4E0D\u8FC7\u5B83\u7684\u53CD\u722C\u3010\u72D7\u5934\u4FDD\u547D\u3011\uFF09\u3002</p><h2 id="\u9879\u76EE\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4ECB\u7ECD" aria-hidden="true">#</a> <strong>\u9879\u76EE\u4ECB\u7ECD</strong></h2><h3 id="\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u76EE\u5F55\u7ED3\u6784</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2502  cve_db.db
\u2502  monitor.py
\u2502  style.css
\u2502
\u251C\u2500Functions
\u2502  \u251C\u2500Commons
\u2502  \u2502      excel.py
\u2502  \u2502      excel_html.py
\u2502  \u2502      github.py
\u2502  \u2502      mail.py
\u2502  \u2502      style.css
\u2502  \u2502      translate.py
\u2502  \u2502      wechat_api.py
\u2502  \u2502      __init__.py
\u2502  \u2502
\u2502  \u251C\u2500RequestInfo
\u2502  \u2502      cnnvd_monitor.py
\u2502  \u2502      github_monitor.py
\u2502  \u2502      MS_monitor.py
\u2502  \u2502      __init__.py
\u2502  \u2502
\u2502  \u2514\u2500Sql
\u2502          installDb.py
\u2502          sql_helper.py
\u2502
\u2514\u2500log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6587\u4EF6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u8BF4\u660E" aria-hidden="true">#</a> \u6587\u4EF6\u8BF4\u660E</h3>`,7),m={href:"http://monitor.py",target:"_blank",rel:"noopener noreferrer"},v=n("monitor.py"),u=n("\u6587\u4EF6\u662F\u4E3B\u6587\u4EF6\uFF0C\u90E8\u7F72\u5B8C\u6210\u540E\u76F4\u63A5\u8FD0\u884C\u5C31\u6B64\u6587\u4EF6\u53EF\u4EE5\u3002"),p=i(`<p><strong>Commons</strong>\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u4E3A\u4E3B\u8981\u529F\u80FD\u6587\u4EF6\u3002</p><p><strong>RequestInfo</strong>\u76EE\u5F55\u4E0B\u4E3A\u76D1\u63A7\u76EE\u6807\u7684\u4E00\u4E9B\u6587\u4EF6\u3002</p><p><strong>Sql</strong>\u76EE\u5F55\u4E0B\u4E3A\u6570\u636E\u5E93\u76F8\u5173\u6587\u4EF6\uFF0CinstallDb.py\u662F\u7528\u6765\u751F\u6210\u6570\u636E\u5E93\u548C\u65E5\u5FD7\u6587\u4EF6\u7684\u3002</p><p><strong>log</strong>\u76EE\u5F55\u4E3A\u5B58\u653E\u65E5\u5FD7\u6587\u4EF6\u76EE\u5F55\u3002</p><h3 id="\u529F\u80FD\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u4ECB\u7ECD" aria-hidden="true">#</a> \u529F\u80FD\u4ECB\u7ECD</h3><p>\u540C\u65F6\u76D1\u63A7CNNVD\u3001Github\u3001\u5FAE\u8F6F\u5B98\u65B9\u7684\u6F0F\u6D1E\u6D88\u606F\u3002</p><h4 id="cnnvd" tabindex="-1"><a class="header-anchor" href="#cnnvd" aria-hidden="true">#</a> CNNVD</h4><ul><li>\u6BCF\u5929\u63A8\u9001\u4F01\u4E1A\u5FAE\u4FE1\u5361\u7247\u6D88\u606F</li><li>Web\u7AEF\u6F0F\u6D1E\u4FE1\u606F\u8868\u683C\u5C55\u793A</li><li>\u6BCF\u5468\u4E94\u7EDF\u8BA1\u6F0F\u6D1E\u6570\u91CF\uFF08\u9AD8\u5371\u3001\u4E2D\u5371\u3001\u4F4E\u5371\uFF09</li><li>\u9AD8\u5371\u6F0F\u6D1E\u4FE1\u606F\u9192\u76EE\u6807\u6CE8</li></ul><h4 id="\u5FAE\u8F6F\u5B98\u65B9\u6F0F\u6D1E\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u8F6F\u5B98\u65B9\u6F0F\u6D1E\u6D88\u606F" aria-hidden="true">#</a> \u5FAE\u8F6F\u5B98\u65B9\u6F0F\u6D1E\u6D88\u606F</h4><ul><li>\u6BCF\u5929\u63A8\u9001\u4F01\u4E1A\u5FAE\u4FE1\u5361\u7247\u6D88\u606F</li><li>Web\u7AEF\u6F0F\u6D1E\u4FE1\u606F\u8868\u683C\u5C55\u793A</li></ul><h4 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> Github</h4><ul><li>\u6BCF\u5929\u63A8\u9001\u4F01\u4E1A\u5FAE\u4FE1\u5361\u7247\u6D88\u606F</li><li>\u70B9\u51FB\u5361\u7247\u6D88\u606F\u81EA\u52A8\u8DF3\u8F6C\u5BF9\u5E94Github\u94FE\u63A5</li></ul><h4 id="\u5C55\u793A\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u5C55\u793A\u6548\u679C" aria-hidden="true">#</a> \u5C55\u793A\u6548\u679C</h4><p>\u6548\u679C\u5982\u4E0B\u56FE</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346328639935.webp" alt="\u56FE\u7247" loading="lazy">cve</p><p><strong>\u5F53\u70B9\u51FBCNNVD\u7684\u6D88\u606F\u5361\u7247\u65F6\uFF0C\u4F1A\u8DF3\u8F6C\u5230\u76F8\u5BF9\u5E94\u7684Web\u7AEF\u4EE5\u8868\u683C\u5F62\u5F0F\u5C55\u793A</strong>\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346328639936.webp" alt="\u56FE\u7247" loading="lazy">cnnvd</p><p><strong>\u70B9\u51FB\u5FAE\u8F6F\u6F0F\u6D1E\u6D88\u606F\u7684\u6F0F\u6D1E\u5361\u7247\u65F6\uFF0C\u4E5F\u4F1A\u8DF3\u8F6C\u5230\u76F8\u5BF9\u5E94\u7684Web\u7AEF\u8868\u683C\u5C55\u793A</strong>\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346328639937.webp" alt="\u56FE\u7247" loading="lazy">\u5FAE\u8F6F</p><p><strong>\u70B9\u51FBGithub\u7684\u6F0F\u6D1E\u6D88\u606F\u901A\u77E5\u65F6\uFF0C\u8DF3\u8F6C\u5230\u76F8\u5BF9\u4E8E\u7684Github\u5730\u5740</strong>\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346328639938.webp" alt="\u56FE\u7247" loading="lazy">github</p><h2 id="\u9879\u76EE\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u90E8\u7F72" aria-hidden="true">#</a> <strong>\u9879\u76EE\u90E8\u7F72</strong></h2><h3 id="\u524D\u671F\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u524D\u671F\u51C6\u5907" aria-hidden="true">#</a> \u524D\u671F\u51C6\u5907</h3><ul><li>\u5F00\u53D1\u8BED\u8A00\uFF1Apython3</li><li>\u4E00\u53F0\u670D\u52A1\u5668(\u811A\u672C\u8DD1\u5728\u670D\u52A1\u5668\u4E0A)</li><li>\u4E00\u4E2A\u57DF\u540D(\u53EF\u9009)</li></ul><p>\u9996\u5148\u5B89\u88C5\u4F9D\u8D56\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import os
import time
from io import BytesIO
import xlwt
from xlrd import open_workbook
import datetime
import dominate
from dominate.tag import *
import requests
import smtplib
from email.mime.text import MIMEText
from email.header import Header
import hashlib
from lxml import etree
import json
from bs4 import BeautifulSoup
import re
import sqlite3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u8FDB\u884C\u6570\u636E\u5E93\u521D\u59CB\u5316\uFF0C\u521D\u59CB\u5316\u65F6\u751F\u6210log\u6587\u4EF6\u5939\u7528\u6765\u5B58\u653E\u751F\u6210\u7684\u65E5\u5FD7\u6587\u4EF6\u3002\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>python3 installDb.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> \u73AF\u5883\u642D\u5EFA</h3><p>\u56E0\u4E3A\u8981\u505AWeb\u7AEF\u8868\u683C\u5C55\u793A\uFF0C\u6240\u4EE5\u8FD9\u91CC<strong>\u4F7F\u7528Nginx\u505A\u4E86\u76EE\u5F55\u6D4F\u89C8</strong>\u3002\u670D\u52A1\u5668\u7CFB\u7EDF\u4F7F\u7528\u7684\u662FCentOS7\uFF0C\u8FC7\u7A0B\u5982\u4E0B\u3002</p><p>\u9996\u5148\u4F7F\u7528yum\u6E90\u4E0B\u8F7Dnginx\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u88C5\u597D\u540E\uFF0C\u67E5\u770B\u7248\u672C\uFF0C\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346328639939.webp" alt="\u56FE\u7247" loading="lazy"></p><p>\u7136\u540E\u627E\u5230nginx\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5177\u4F53\u4F4D\u7F6E\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /etc/nginx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u627E\u5230nginx.conf\u6587\u4EF6\uFF0C\u5BF9\u5176\u4E2D\u7684server\u677F\u5757\u8FDB\u884C\u4FEE\u6539\u5C31\u53EF\u4EE5\u4E86\uFF0C<strong>\u4E3B\u8981\u662F\u6DFB\u52A0\u4E86\u672B\u5C3E\u4E09\u884C</strong>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
    listen       80;
    listen       [::]:80;
    server_name  _;
   # root         /usr/share/nginx/html;
    charset utf-8;
    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;
    location / {
            root /usr/share/nginx/html/download;
    autoindex on; #\u5F00\u542F\u7D22\u5F15\u529F\u80FD
    autoindex_exact_size off; #\u5173\u95ED\u8BA1\u7B97\u6587\u4EF6\u786E\u5207\u5927\u5C0F(bytes)
    autoindex_localtime on; #\u663E\u793A\u672C\u673A\u65F6\u95F4
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\u751F\u6210\u6587\u4EF6\u4F4D\u7F6E</strong>\uFF0C\u6211\u8FD9\u91CC\u662F<code>/usr/share/nginx/html/download</code> \uFF0C\u770B\u4E2A\u4EBA\u7231\u597D\u3002</p><p><strong>\u5982\u679C\u4FEE\u6539\uFF0C\u8BF7\u4FEE\u6539monitor.py\u768424\u884C\u548Cexcel_html.py\u768411\u884C\u3002</strong></p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346328640040.webp" alt="\u56FE\u7247" loading="lazy">image-20220122141836235</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346328640041.webp" alt="\u56FE\u7247" loading="lazy">image-20220122142248502</p><h3 id="\u914D\u7F6E\u4F01\u4E1A\u5FAE\u4FE1\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4F01\u4E1A\u5FAE\u4FE1\u63A8\u9001" aria-hidden="true">#</a> \u914D\u7F6E\u4F01\u4E1A\u5FAE\u4FE1\u63A8\u9001</h3><p>\u8FD9\u4E2A\u9700\u8981\u5148\u5230\u4F01\u4E1A\u5FAE\u4FE1\u521B\u5EFA\u4E00\u4E2A\u4F01\u4E1A\uFF0C\u5E76\u81EA\u5EFA\u4E00\u4E2A\u5E94\u7528\uFF0C<strong>\u83B7\u53D6\u5230\u81EA\u5B9A\u4E49\u5E94\u7528\u7684 Secret\u548C\u6CE8\u518C\u7684\u4F01\u4E1A corpid</strong>\uFF0C\u5C31\u53EF\u4EE5\u4E86\u3002\u4FEE\u6539\u4F4D\u7F6E\u5728**wechat_api.py**\u6587\u4EF6****<strong>\u768414\u884C\u81F317\u884C</strong>\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-164346328640042.webp" alt="\u56FE\u7247" loading="lazy">image-20220122142707821</p><p>\u542F\u52A8\u76D1\u63A7\u811A\u672C\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>python3 moniter.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5927\u529F\u544A\u6210\uFF01\uFF01\uFF01</p>`,48);function h(g,b){const a=d("ExternalLinkIcon");return r(),l("div",null,[c,e("p",null,[e("strong",null,[e("a",m,[v,t(a)])]),u]),p])}var y=s(o,[["render",h],["__file","\u6F0F\u6D1E\u76D1\u63A7\u5E73\u53F0Monitor.html.vue"]]);export{y as default};

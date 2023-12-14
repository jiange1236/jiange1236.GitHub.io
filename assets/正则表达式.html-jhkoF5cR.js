import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as d,a as n}from"./app-IsEvEAQV.js";const l={},i=n(`<p>[TOC]</p><hr><table><thead><tr><th style="text-align:center;">符号</th><th style="text-align:center;">解释</th><th style="text-align:center;">示例</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">.</td><td style="text-align:center;">匹配任意字符</td><td style="text-align:center;">b.t</td><td style="text-align:left;">可以匹配bat / but / b#t / b1t等</td></tr><tr><td style="text-align:center;">\\w</td><td style="text-align:center;">匹配字母/数字/下划线</td><td style="text-align:center;">b\\wt</td><td style="text-align:left;">可以匹配bat / b1t / b_t等 但不能匹配b#t</td></tr><tr><td style="text-align:center;">\\W</td><td style="text-align:center;">匹配非(字母/数字/下划线)</td><td style="text-align:center;">b\\Wt</td><td style="text-align:left;">可以匹配b#t / b@t等但不能匹配but / b1t / b_t等</td></tr><tr><td style="text-align:center;">\\s</td><td style="text-align:center;">匹配空白字符(包括\\r、\\n、\\t等)</td><td style="text-align:center;">love\\syou</td><td style="text-align:left;">可以匹配love you</td></tr><tr><td style="text-align:center;">\\S</td><td style="text-align:center;">匹配非空白字符</td><td style="text-align:center;">love\\Syou</td><td style="text-align:left;">可以匹配love#you等 但不能匹配love you</td></tr><tr><td style="text-align:center;">\\d</td><td style="text-align:center;">匹配数字</td><td style="text-align:center;">\\d\\d</td><td style="text-align:left;">可以匹配01 / 23 / 99等</td></tr><tr><td style="text-align:center;">\\D</td><td style="text-align:center;">匹配非数字</td><td style="text-align:center;">\\d\\D</td><td style="text-align:left;">可以匹配9a / 3# / 0F等</td></tr><tr><td style="text-align:center;">\\b</td><td style="text-align:center;">匹配单词的边界</td><td style="text-align:center;">\\bThe\\b</td><td style="text-align:left;">仅单词The</td></tr><tr><td style="text-align:center;">\\B</td><td style="text-align:center;">匹配非单词边界</td><td style="text-align:center;">\\Bio\\B</td><td style="text-align:left;">单词内包含io</td></tr><tr><td style="text-align:center;">^</td><td style="text-align:center;">以匹配字符串开始</td><td style="text-align:center;">^The</td><td style="text-align:left;">可以匹配The开头的字符串</td></tr><tr><td style="text-align:center;">$</td><td style="text-align:center;">以匹配字符串结束</td><td style="text-align:center;">.exe$</td><td style="text-align:left;">可以匹配.exe结尾的字符串</td></tr><tr><td style="text-align:center;">[]</td><td style="text-align:center;">匹配来自字符集的任意单一字符</td><td style="text-align:center;">[aeiou]</td><td style="text-align:left;">可以匹配任一元音字母字符</td></tr><tr><td style="text-align:center;">-</td><td style="text-align:center;">范围</td><td style="text-align:center;">[1-9]</td><td style="text-align:left;">可以匹配数字1~9</td></tr><tr><td style="text-align:center;">[^]</td><td style="text-align:center;">匹配不在字符集的任意单一字符</td><td style="text-align:center;">[^.?!]</td><td style="text-align:left;">可以匹配任一非标点符号</td></tr><tr><td style="text-align:center;">*</td><td style="text-align:center;">匹配0次或多次</td><td style="text-align:center;">\\w*</td><td style="text-align:left;">任意个字母/数字/下划线</td></tr><tr><td style="text-align:center;">+</td><td style="text-align:center;">匹配1次或多次</td><td style="text-align:center;">\\w+</td><td style="text-align:left;">1个及以上字母/数字/下划线</td></tr><tr><td style="text-align:center;">?</td><td style="text-align:center;">匹配0次或1次</td><td style="text-align:center;">\\w?</td><td style="text-align:left;">0个或1个字母/数字/下划线</td></tr><tr><td style="text-align:center;">{N}</td><td style="text-align:center;">匹配N次</td><td style="text-align:center;">\\w{3}</td><td style="text-align:left;">3个字母/数字/下划线</td></tr><tr><td style="text-align:center;">{M,}</td><td style="text-align:center;">匹配至少M次</td><td style="text-align:center;">\\w{3,}</td><td style="text-align:left;">3个及以上字母/数字/下划线</td></tr><tr><td style="text-align:center;">{M,N}</td><td style="text-align:center;">匹配至少M次至多N次</td><td style="text-align:center;">\\w{3,6}</td><td style="text-align:left;">至少3个至多6个字母/数字/下划线</td></tr><tr><td style="text-align:center;">|</td><td style="text-align:center;">分支</td><td style="text-align:center;">foo|bar</td><td style="text-align:left;">可以匹配foo或者bar</td></tr><tr><td style="text-align:center;">\\</td><td style="text-align:center;">查找元字符本身</td><td style="text-align:center;">\\ 、*、?、(</td><td style="text-align:left;">查找\\ 、* 、? 、( 本身</td></tr><tr><td style="text-align:center;">(?#)</td><td style="text-align:center;">注释</td><td style="text-align:center;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">(exp)</td><td style="text-align:center;">匹配exp并捕获到自动命名的组</td><td style="text-align:center;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">(? exp)</td><td style="text-align:center;">匹配exp并捕获到名为name的组</td><td style="text-align:center;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">(?:exp)</td><td style="text-align:center;">匹配exp但是不捕获匹配的文本</td><td style="text-align:center;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">(?=exp)</td><td style="text-align:center;">匹配exp前面的位置</td><td style="text-align:center;">\\b\\w+(?=ing)</td><td style="text-align:left;">可以匹配I&#39;m dancing中的danc</td></tr><tr><td style="text-align:center;">(?&lt;=exp)</td><td style="text-align:center;">匹配exp后面的位置</td><td style="text-align:center;">(?&lt;=\\bdanc)\\w+\\b</td><td style="text-align:left;">可以匹配I love dancing and reading中的第一个ing</td></tr><tr><td style="text-align:center;">(?!exp)</td><td style="text-align:center;">匹配后面不是exp的位置</td><td style="text-align:center;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">(?</td><td style="text-align:center;">匹配前面不是exp的位置</td><td style="text-align:center;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">*?</td><td style="text-align:center;">重复任意次，但尽可能少重复</td><td style="text-align:center;">a.*b</td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">a.*?b</td><td style="text-align:center;">将正则表达式应用于aabab，前者会匹配整个字符串aabab，后者会匹配aab和ab两个字符串</td><td style="text-align:center;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">+?</td><td style="text-align:center;">重复1次或多次，但尽可能少重复</td><td style="text-align:center;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">??</td><td style="text-align:center;">重复0次或1次，但尽可能少重复</td><td style="text-align:center;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">{M,N}?</td><td style="text-align:center;">重复M到N次，但尽可能少重复</td><td style="text-align:center;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">{M,}?</td><td style="text-align:center;">重复M次以上，但尽可能少重复</td><td style="text-align:center;"></td><td style="text-align:left;"></td></tr></tbody></table><h1 id="数字" tabindex="-1"><a class="header-anchor" href="#数字" aria-hidden="true">#</a> 数字</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>n位的数字：^\\d{n}$
至少n位的数字：^\\d{n,}$
m-n位的数字：^\\d{m,n}$
零和非零开头的数字：^(0|[1-9][0-9]*)$
非零开头的最多带两位小数的数字：^([1-9][0-9]*)+(.[0-9]{1,2})?$
带1-2位小数的正数或负数：^(\\-)?\\d+(\\.\\d{1,2})?$
正数、负数、和小数：^(\\-|\\+)?\\d+(\\.\\d+)?$
有两位小数的正实数：^[0-9]+(.[0-9]{2})?$
有1~3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$
非零的正整数：^[1-9]\\d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^\\+?[1-9][0-9]*$
非零的负整数：^\\-[1-9][]0-9″*$ 或 ^-[1-9]\\d*$
非负整数：^\\d+$ 或 ^[1-9]\\d*|0$
非正整数：^-[1-9]\\d*|0$ 或 ^((-\\d+)|(0+))$
非负浮点数：^\\d+(\\.\\d+)?$ 或 ^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0$
非正浮点数：^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$ 或 ^(-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*))|0?\\.0+|0$
正浮点数：^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$ 或 ^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$
负浮点数：^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$ 或 ^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
浮点数：^(-?\\d+)(\\.\\d+)?$ 或 ^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$
大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数：/^150$|^(?:\\d|[1-9]\\d|1[0-4]\\d)(?:.5)?$/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="字符" tabindex="-1"><a class="header-anchor" href="#字符" aria-hidden="true">#</a> 字符</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>汉字：^[\\u4e00-\\u9fa5]{0,}$
空白行的正则表达式：\\n\\s*\\r (可以用来删除空白行)
首尾空白字符的正则表达式：^\\s*|\\s*$或(^\\s*)|(\\s*$) (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)
双字节字符：[^\\x00-\\xff] (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))
英文和数字：^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$
长度为3-20的所有字符：^.{3,20}$
由26个英文字母组成的字符串：^[A-Za-z]+$
由26个大写英文字母组成的字符串：^[A-Z]+$
由26个小写英文字母组成的字符串：^[a-z]+$
由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
由数字、26个英文字母或者下划线组成的字符串：^\\w+$ 或 ^\\w{3,20}$
中文、英文、数字包括下划线：^[\\u4E00-\\u9FA5A-Za-z0-9_]+$
中文、英文、数字但不包括下划线等符号：^[\\u4E00-\\u9FA5A-Za-z0-9]+$ 或 ^[\\u4E00-\\u9FA5A-Za-z0-9]{2,20}$
可以输入含有^%&amp;’,;=?$\\”等字符：[^%&amp;&#39;,;=?$\\x22]+
禁止输入含有~的字符：[^~\\x22]+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Email地址：^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$
帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$
腾讯QQ号：[1-9][0-9]{4,} (腾讯QQ号从10000开始)
密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\\w{5,17}$
强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$
银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付]：/^[1-9]\\d{9,29}$/
IP地址：
\\d+\\.\\d+\\.\\d+\\.\\d+ (提取IP地址时有用)
IPV4：((2[0-4]\\d|25[0-5]|[01]?\\d\\d?)\\.){3}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)
IPV6：((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))
网址
(url,支持端口和&quot;?+参数&quot;和&quot;#+参数)：/^(((ht|f)tps?):\\/\\/)?[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&amp;:/~+#-]*[\\w@?^=%&amp;/~+#-])?$/
必须带端口号的网址(或ip)：/^((ht|f)tps?:\\/\\/)?[\\w-]+(\\.[\\w-]+)+:\\d{1,5}\\/?$/
域名：[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?
InternetURL：[a-zA-z]+://[^\\s]* 或 ^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&amp;=]*)?$
迅雷链接：/^thunderx?:\\/\\/[a-zA-Z\\d]+=$/
ed2k链接：/^ed2k:\\/\\/\\|file\\|.+\\|\\/$/
磁力链接：/^magnet:\\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/
视频(video)链接地址（视频格式可按需增删）：/^https?:\\/\\/(.+\\/)+.+(\\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i
图片(image)链接地址（图片格式可按需增删）：/^https?:\\/\\/(.+\\/)+.+(\\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="编程" tabindex="-1"><a class="header-anchor" href="#编程" aria-hidden="true">#</a> 编程</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>xml文件：^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\\\.[x|X][m|M][l|L]$
HTML标记的正则表达式：&lt;(\\S*?)[^&gt;]*&gt;.*?&lt;/\\1&gt;|&lt;.*? /&gt; (网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力)
html注释：/^&lt;!--[\\s\\S]*?--&gt;$/
md5格式(32位)：/^([a-f\\d]{32}|[A-F\\d]{32})$/
base64格式：/^\\s*data:(?:[a-z]+\\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&amp;&#39;,()*+;=\\-._~:@/?%\\s]*?)\\s*$/i
版本号(version)格式必须为X.Y.Z：/^\\d+(?:\\.\\d+){2}$/
linux
	&quot;隐藏文件&quot;路径：/^\\/(?:[^/]+\\/)*\\.[^/]*/
	文件夹路径：/^\\/(?:[^/]+\\/)*$/
	文件路径：/^\\/(?:[^/]+\\/)*[^/]+$/
Windows
	&quot;文件夹&quot;路径：/^[a-zA-Z]:\\\\(?:\\w+\\\\?)*$/
	&quot;文件&quot;路径：/^[a-zA-Z]:\\\\(?:\\w+\\\\)*\\w+\\.\\w+$/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$
电话号码(“XXX-XXXXXXX”、”XXXX-XXXXXXXX”、”XXX-XXXXXXX”、”XXX-XXXXXXXX”、”XXXXXXX”和”XXXXXXXX)：^($$\\d{3,4}-)|\\d{3.4}-)?\\d{7,8}$
国内电话号码(0511-4405222、021-87888822)：\\d{3}-\\d{8}|\\d{4}-\\d{7}
手机IMEI：/^\\d{15,17}$/
身份证号(15位、18位数字)：^\\d{15}|\\d{18}$
统一社会信用代码：/^[0-9A-HJ-NPQRTUWXY]{2}\\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/
短身份证号码(数字、字母x结尾)：^([0-9]){7,18}(x|X)?$ 或 ^\\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$
日期格式：^\\d{4}-\\d{1,2}-\\d{1,2}
一年的12个月(01～09和1～12)：^(0?[1-9]|1[0-2])$
一个月的31天(01～09和1～31)：^((0?[1-9])|((1|2)[0-9])|30|31)$
时间：
	24小时制：/^(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d$/
	12小时制：/^(?:1[0-2]|0?[1-9]):[0-5]\\d:[0-5]\\d$/
钱的输入格式：
	有四种钱的表示形式我们可以接受:”10000.00″ 和 “10,000.00″, 和没有 “分” 的 “10000″ 和 “10,000″：^[1-9][0-9]*$
这表示任意一个不以0开头的数字，但是，这也意味着一个字符”0″不通过，所以我们采用下面的形式：^(0|[1-9][0-9]*)$
	一个0或者一个不以0开头的数字.我们还可以允许开头有一个负号：^(0|-?[1-9][0-9]*)$
	这表示一个0或者一个可能为负的开头不为0的数字.让用户以0开头好了.把负号的也去掉，因为钱总不能是负的吧.下面我们要加的是说明可能的小数部分：^[0-9]+(.[0-9]+)?$
	必须说明的是，小数点后面至少应该有1位数，所以”10.”是不通过的，但是 “10″ 和 “10.2″ 是通过的：^[0-9]+(.[0-9]{2})?$
	这样我们规定小数点后面必须有两位，如果你认为太苛刻了，可以这样：^[0-9]+(.[0-9]{1,2})?$
	这样就允许用户只写一位小数。下面我们该考虑数字中的逗号了，我们可以这样：^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$
	1到3个数字，后面跟着任意个 逗号+3个数字，逗号成为可选，而不是必须：^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$
	备注：这就是最终结果了，别忘了”+”可以用”*”替代。如果你觉得空字符串也可以接受的话(奇怪，为什么?)最后，别忘了在用函数时去掉去掉那个反斜杠，一般的错误都在这里
中国邮政编码：[1-9]\\d{5}(?!\\d) (中国邮政编码为6位数字)
股票代码：/^(s[hz]|S[HZ])(000[\\d]{3}|002[\\d]{3}|300[\\d]{3}|600[\\d]{3}|60[\\d]{4})$/
火车车次：/^[GCDZTSPKXLY1-9]\\d{1,4}$/
车牌号：
	新能源：/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/
	燃油车：/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
	燃油车+新能源：/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}(?:(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),s=[i];function a(r,c){return e(),d("div",null,s)}const g=t(l,[["render",a],["__file","正则表达式.html.vue"]]);export{g as default};

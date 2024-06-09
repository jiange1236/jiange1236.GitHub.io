---
date: 2024-06-01
created: 2024-03-07
tags: []
source: https://blog.misaka.rest/2023/01/22/cf-wkrs-node/?highlight=%E5%8F%8D%E4%BB%A3
---

# 使用 CloudFlare Workers 反代节点 | MisakaNo の 小破站

> ## Excerpt
> 在我们使用一些VPS或者容器云的节点的时候，我们或多或少会出现IP/域名被墙的一种情况。但是有些提供商特别鸡贼不能够自定义域名。这时候我们可以使用CloudFlare的Workers来反代节点IP/域名，一起复活被墙的节点。 准备材料 一枚域名（因为默认的wkr域名被墙了） 一个CloudFlare账号  部署步骤 注册并登录CloudFlare账号 打开CF的控制台，转到“W

---
在我们使用一些VPS或者容器云的节点的时候，我们或多或少会出现IP/域名被墙的一种情况。但是有些提供商特别鸡贼不能够自定义域名。这时候我们可以使用CloudFlare的Workers来反代节点IP/域名，一起复活被墙的节点。

## [](https://blog.misaka.rest/2023/01/22/cf-wkrs-node/?highlight=%E5%8F%8D%E4%BB%A3#%E5%87%86%E5%A4%87%E6%9D%90%E6%96%99 "准备材料")准备材料

-   一枚域名（因为默认的wkr域名被墙了）
-   一个CloudFlare账号

## [](https://blog.misaka.rest/2023/01/22/cf-wkrs-node/?highlight=%E5%8F%8D%E4%BB%A3#%E9%83%A8%E7%BD%B2%E6%AD%A5%E9%AA%A4 "部署步骤")部署步骤

1.  注册并登录CloudFlare账号
2.  打开CF的控制台，转到“Workers & Pages”页面，点击“Create Application”按钮

[![](https://imgs.misaka.cloudns.biz/20230526085011.png)](https://imgs.misaka.cloudns.biz/20230526085011.png)

3.  点击“Create Worker”按钮

[![](https://imgs.misaka.cloudns.biz/20230526085110.png)](https://imgs.misaka.cloudns.biz/20230526085110.png)

4.  设置workers的名称，点击“Deploy”按钮

[![](https://imgs.misaka.cloudns.biz/20230526085144.png)](https://imgs.misaka.cloudns.biz/20230526085144.png)

5.  点击“Configure Worker”按钮

[![](https://imgs.misaka.cloudns.biz/20230526085249.png)](https://imgs.misaka.cloudns.biz/20230526085249.png)

6.  点击“Quick Edit”按钮，修改代码

[![](https://imgs.misaka.cloudns.biz/20230526085331.png)](https://imgs.misaka.cloudns.biz/20230526085331.png)

7.  复制粘贴以下代码（记得将示例域名切换成自己的IP/域名），然后点击“保存并部署”

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br></pre></td><td><pre><span><span>addEventListener</span>(</span><br><span>  <span>"fetch"</span>,<span><span>event</span> =&gt;</span> {</span><br><span>     <span>let</span> url=<span>new</span> <span>URL</span>(event.<span>request</span>.<span>url</span>);</span><br><span>     url.<span>hostname</span>=<span>"abc.def.xyz"</span>; </span><br><span>     url.<span>protocol</span>=<span>'https'</span>; </span><br><span>     <span>let</span> request=<span>new</span> <span>Request</span>(url,event.<span>request</span>);</span><br><span>     event. <span>respondWith</span>(</span><br><span>       <span>fetch</span>(request)</span><br><span>     )</span><br><span>  }</span><br><span>)</span><br></pre></td></tr></tbody></table>

[![](https://imgs.misaka.cloudns.biz/20230122132347.png)](https://imgs.misaka.cloudns.biz/20230122132347.png)

8.  转到“触发器”，点击“添加自定义域”

[![](https://imgs.misaka.cloudns.biz/20230122132504.png)](https://imgs.misaka.cloudns.biz/20230122132504.png)

9.  输入你想要绑定的二级域名（备注：一级域名需要在CloudFlare账号里面）

[![](https://imgs.misaka.cloudns.biz/20230122132539.png)](https://imgs.misaka.cloudns.biz/20230122132539.png)

10.  替换被墙的IP/域名为workers的自定义域名，如使用workers.dev二级域名的话可以关闭TLS，再使用CF的HTTP端口

版权声明: 本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议。转载请注明来自 [MisakaNo の 小破站](https://blog.misaka.rest/)！

___

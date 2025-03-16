---
title: "DeepSeek最强外挂！用知识库给AI喂数据，让它更懂你"
source: "https://mp.weixin.qq.com/s/12BnoPVGYbn4d5hhDm8PWw"
author:
  - "[[AI工具集]]"
published:
created: 2025-03-04
description: "保姆级教程，教你0基础搭建个人知识库的N种方式~"
tags:
  - "clippings"
---
最近经常有朋友问：

如何让DeepSeek结合我们企业的内部知识生成回答？

如何让DeepSeek根据小红书的爆款笔记，生成内容？

想让AI结合本地信息，每次创建会话时都要上传文件，还限制文件大小，太麻烦了，有没有方法优化？

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIOYf6oqSGK5N9v9TtzaibPHPqTyY4ZYuNdBz9y0n6lywPwLPToTwfiaUg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**我的回答是：搭建个人知识库！**

1.搭建个人知识库，就可以让DeepSeek更好、更准确地为你生成回答。

2.可以随时增减更新，不用频繁上传参考文件，无需任何代码知识，使用起来简单又高效。

***01***

**什么是个人知识库**

什么是个人知识库，它是怎么起作用的呢？

如果把DeepSeek比作我们的大脑，对话就是考试，DeepSeek的回答就是基于我们学过的知识（用于训练的数据）。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIzgeR4ibqZTAgTl9nQ19mmy45GTXma4q6Cb3HByPmIJRY6eQI5AXDibbw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

个人知识库，相当于把考试变成了开卷考。在知识库内容里“学一学“、“找一找”，生成的回答就更准确。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJI2yV8814pWINELrrzoqxWATicY9SZKrm7JgEQOf4zjibGpibh94iaHaybNQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

比如当我让DeepSeek-R1推荐黑神话悟空相关景点，搭配小红书热门旅游攻略的知识库之后，它的回答是这样的：

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIRZgMF4ibQVUCHgnV1T006K96nR0g119BW4h3TvyFjEtUvibao74r3hMw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIcfG2yGDhvTfPnpPcOeg75wPNicx7XXOHVnBQfjaoXUs5YUTB550ZGCA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**不仅答复内容参考了知识库资料，就连内容的结构排版也差不多，生成的回答基本可以直接使用。**

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIH8zRWh7QIUCbcdFIERk4ZVcQQs9xbF0NPqnHEx5xm0FHLbice6BcNlw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

这篇文章，教大家搭建个人知识库的三种方式，满足大家不同场景下的需求：

**1.本地部署DeepSeek+搭建知识库**

优点：无需联网，数据隐私性强，完全免费；

缺点：对配置有一定的要求，基本上用不了DeepSeek-R1满血版；

适合对数据隐私需求比较高的企业；

**2.API调用DeepSeek+搭建知识库**

优点：方便，支持DeepSeek-R1满血版，可用大模型非常多；

缺点：需要消耗Tokens，长期使用会产生一定的费用；

**3.直接使用DeepSeek+知识库一站式工具**

优点：使用简单，支持DeepSeek-R1满血版，可以使用其他人共享的知识库；

缺点：PC端仅支持上传本地文件；

适合小白用户，不需要本地部署，就能快速拥有一个个人知识库，还完全免费。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIhfZoGIXvdvK3u4sJjhpwjVlyuiaOv14yaEcMQJ17y6WCqTpvPwwCdOw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

***02***

**本地部署DeepSeek搭建知识库**

**Ollama+AnythingLLM**

本地部署DeepSeek搭建知识库，需要用到Ollama和AnythingLLM。

我们需要用Ollama下载DeepSeek，不会的同学可以参考前面本地部署DeepSeek的教程。

[DeepSeek本地部署保姆级教程，0基础有手就会！](https://mp.weixin.qq.com/s?__biz=MzkxNDczMjA4Ng==&mid=2247485243&idx=1&sn=b21469522ecde390789af1bc01de1d35&scene=21#wechat_redirect)

下载好DeepSeek后，我们进入系统的环境变量设置。（路径：右键单击我的电脑-高级系统设置）

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJITtszStbcBmRWu4b96CXuQy3aly80oayOmHpTyQdcrEK853fGIfvTmA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在WIN的用户变量里，点击新建。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIYuUOjLVytb3jlQkd8OwoSicIhtp5KxrXZI98fofvEk91iaxaeb6lIsmg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

输入变量名：**OLLAMA\_HOST**

变量值：**0.0.0.0:11434**

点击确定。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIVFWPDeCQ0BPLG8agcWMtTib8uGTia8VSoD4K8jE5DBfn1u046Z3FeAAQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**注意：搭建知识库以及后续使用时，都需要让Ollama是运行的状态，不要退出！！**

如果不小心关闭了Ollama，可以在任务栏搜索PowerShell，单击打开。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJImxkA6n5l6EVNtC67wdag9xsriaQb82l9bYSQFY87sD6Oe8IquLTggow/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

打开AnythingLLM官网，选择对应的系统版本进行下载。

官网下载比较慢的友友，也可以直接用我打包好的安装包。公众号私我口令：**AnythingLLM**领取。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIv3KoNJpVXfLKn1I4bL54omaklT6NpWzKCCyAfIv25qL33UYiarLLytw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

下载完成之后直接安装。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJI0m8kq6RUfgbRaR0RwRXan8iauJOusPtxzmVPFnAzYtHuWRU5uF270kA/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

接下来就是创建个人知识库的重点了！我们点开设置图标。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIF4Faf89B9egaJw9anUOoibSlLepPq5nkk6zT6R6q5fqicX2fmXTia6GUw/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在人工智能提供商-LLM首选项里，选择Ollama作为LLM提供商，在Ollama Base URL里输入**http://0.0.0.0:11434**。

就可以在图示的位置选择本地的DeepSeek大模型，点击右上角的保存。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIMxhTQPeC5o9yo1pCIC5CaLLKj4KIIx2T2HbfFrIZZljuIrduvEmQUw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

返回首页，**点击+新工作区**。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJI8FvQRl874CwwZ8OnXUgR4JlZbGnzjeZic54xXwWPzNxbluOqZelHslA/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

接下来我们就可以在知识库里上传内容了。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJICsBGnZCBfR2b3AIg8tRM3SM8CVqyvBBNsVGw4tAPYVfgQ2KhsiczPvQ/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

它**支持上传本地文件**，也可以**输入网页链接上传**，所以不管是我们总结内化的文件，还是在网上刷到的有用的信息，都可以用来丰富知识库。

上传之后的文件会先到左边的暂存区域（所有知识库共用，所以在有多个知识库的情况下，我们最好在暂存区建文件夹分别管理）。

右方工作区就是知识库的全部内容，可以随时新增或者删减来优化它。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIck0Ogt7jpg9dNicEA9oqsrxiaS27ne2bXnrpuxE2AyI4ZicFJNP3qNU0w/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

我们在对话界面，选择工作区，DeepSeek就会根据里面的文档内容生成更精确的回答。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJInB2oqVfTUribOBaT9BlCXNWvJs2xtvV382go1BBJEnhBM8rIubgeia5g/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

***03***

**硅基流动API****+Cherry Studio**

**搭建知识库**

个人配置不够，但是又想用DeepSeek-R1满血版+知识库，怎么办呢？

可以通过API调用DeepSeek，再搭建知识库，在搭建知识库的时候，还需要选择嵌入模型。

我们来到硅基流动的官网，点击API密钥。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJI7SDP4libBWPEdI7Wx4nmZtjCXFPwXJxxmfTPo2bSwUD4KniaynjbcCRg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

新建API密钥，单击复制密钥备用。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJILWn1VdRwj43srKwDiaQ4AU7T6ZyJwHBb1I78fdfGwCog9RoGTWTfmcQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

打开Cherry Studio官网，下载应用。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIf5ribR47XOUpKxeyZzEgPxaDD8iaGbFJNV1FS9VOias5Xaibmzzia5bt6nw/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

安装完成后进入应用，点击左下角的设置。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIHTjvrmf0mERwX6wNleYpTSbauzyjNSMEbKCLhibFklcQxPnh6pJk8MA/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在模型服务里选择硅基流动，输入我们刚才新建的密钥，点击检查。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIUNh9SESB7Tn9KSQWI9wrHZWpPzicO1pWlg6AEkYkhpflNU321OZsFfw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

检查一下DeepSeek-R1，弹出连接成功的提醒，就说明可以正常使用DeepSeek-R1满血版对话啦。

如果不成功，需要点击页面中的管理，手动添加一下DeepSeek-R1模型。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIrVTCwuaq2y87CFo4FvTibqj22MGjLkJ9mZwCa6KibQsmEicQNlwc5yUyQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

我们还需要回到硅基流动的官网，去配置一个嵌入模型。

嵌入模型可以将我们上传的文件转换成计算机容易理解的数字，然后储存到它的向量数据库中。我们在向它提问时，它就会通过RAG技术，在数据库中搜索相关的答案，最终输出给我们。

在模型广场，选择嵌入。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJI7x3cWicbKUU71l51zTibAmWiczvBXnrtRbCmmL3p3YDz4BeIQicxPKpJAA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

点击复制模型名称：**BAAI/bge-m3**。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIDdicR1CmlvLJokBx9d0UMf11bCJ3dNmLL0gHlunO90Baeg0os1fgdaA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

回到Cherry Studio界面，点击管理。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIKBHgQkNpXxib6l4xiavWs8d1GibjhuqeA4icibcDPPpFUTuS4yd1D2ibgr3Q/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

点击+号，添加嵌入模型。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIFoLBWyiaTSiaLa7ib1v10aAQu1NfaKZGsmJRXeZLFpVCxWuLNw6V3QNFQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

然后我们进入知识库，点击添加。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJI9lzYFHnZcClnFRBXbBV8q7ckGMXpS0QHbU1Hia3OyjnggCCGELlpn1A/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

填写知识库名称并选择嵌入模型为BAAI/bge-m3，点击确定。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIicZ80JWqjic95VVynibasOzsiaibRib5uCkoAT2ZyEr9Qojx7SicDEM96TCiaw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

上传文件的页面，它支持文件形式非常多。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIVQwfw6SsGr6gGuZGaGtzy7wW8m2RkSnwcagQsPjFwVpGv9nQwicsVKw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

支持在知识库内搜索，并且会显示内容占比。方便我们随时查看知识库的内容。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIjoNBzKPEJdvCIgE6LaMWicRwA6Z1dUD0TkgETXicHGOQyDJQM9AXBiaVg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

我们回到对话界面，在最下方的对话框选择DeepSeek-R1模型和刚才创建好的知识库，就可以开始使用了。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIK9eg7RhKl7FwI2yFoQGoErEgBQl1DLzgmLE8568mWkib8blICS9oLBw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

生成的回答会在最后显示引用内容以及具体引用的文档信息。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJITy1RGUVvmcIfngkBLDZONoXmxHAG87bNk2VxCPV5fxpicTBHK15ibcpQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

***04***

**ima.copilot**

**一站式使用R1+知识库**

如果你是0基础，觉得前面的本地部署、API调用看起来还是比较复杂，那么最后这个工具就更适合你。

**用ima.copilot一键创建知识库，界面简洁，操作简单，还完全免费。**

**不需要多种工具搭配使用，直接对话DeepSeek-R1满血版。**

我们需要下载ima.copilot的客户端。打开后，点击首页的知识库。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJI6s52ibJhl20wj1n9rNGr9IsibkkwZWfl7c3jsasxD65GvrRfiaN6Wlptw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

点击创建知识库。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJItiaPL06MWibNOZ6dDSxibrA5gT7b3pWDaEjx6ErKAWLfibMRDxT2d7Gcibw/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

输入知识库名称和描述。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIcEJ1eXkM5QcHyJXAkibSj5gwPu02MzZKryAZe82wzhGKUsym0dDwe7w/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

点击上传文件。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIE6aiaSjprXprrI8NMrHwqiclKpYwxjqNfOAd86iaPj2eQJM0MWqqbprfw/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

ima.copilot很方便的一点是，它可以和小程序端通用。

当我在手机上看到一篇特别好的公众号时，可以点击右上角的”..."选择更多打开方式，一键存入我的知识库。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIQXTuOuOsPSV2N1X4bWicoGoZo5o8jG1sBeb5L8FcZOrk0RFCIDiaYicwA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在知识库的界面，我们可以直接和DeepSeek-R1满血版开始对话。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIdPI5K9iaiaF2v7D36DFohSiaKsgNjLNeWjcreVjBmAR5sQeuBrzEksVUg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

ima.copilot最强大的地方在于，就算你不懂得搭建知识库，你也可以使用别人共享给你的知识库。

搭建个人知识库是一个非常棒的学习习惯。

我们平常看到好的内容，放入知识库，它能**快速提取文档核心观点，节省90%信息整理时间**。

**将****碎片信息转化为结构化知识体系****，不断迭代更新，**通过标签、双向链接构建“DeepSeek最强外挂”。

**不需要复杂指令，不懂代码、0基础也能生成精准的内容**，可以快速打造“AI+垂直领域”差异化专业壁垒。

这三种搭建知识库的方法，你觉得哪种更适合你呢？赶快用起来~

**END**

⭐本文涉及的所有工具：

**\[1\]Ollama：https://ai-bot.cn/sites/5973.html**

**\[2\]AnythingLLM：https://ai-bot.cn/anythingllm/**

**\[3\]SiliconFlow：https://ai-bot.cn/sites/35828.html**

**\[4\]Cherry Studio：https://ai-bot.cn/cherry-studio/**

**\[5\]ima.copilot：https://ai-bot.cn/sites/26420.html**

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIsVoPHeWFOWv8dNF22tUA1mplshlibiaDSpQoyITyxxjDwWEysGYHyibfw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_gif/0KYXJic5HibAE93JIhS1ly8eCKtOBgiaUJIic1rHf4rQoJPAjTlWjdpfd9TiapUcnYQpPyLoapREhB7JwDUnet7FcUA/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
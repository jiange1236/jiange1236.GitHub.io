---
date: 2022-05-14
---

**群辉 emby套件版服务端 白嫖教程**

**安装教程**

- 在群辉中安装好WebStation跟EMBY

**1. 打开Web Station如图所示新建虚拟主机**

![](./%E7%BE%A4%E8%BE%89emby%E5%A5%97%E4%BB%B6%E7%89%88%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%99%BD%E5%AB%96%E6%95%99%E7%A8%8B.assets/clipboard.png)

**2. 证书下载地址**

https:*//raw.githubusercontent.com/s1oz/embyonekey/master/mb3admin.com.cert.pem* [https:*//raw.githubusercontent.com/s1oz/embyonekey/master/mb3admin.com.key.pem*](https://raw.githubusercontent.com/s1oz/embyonekey/master/mb3admin.com.key.pem)

- 打开群辉控制面板-安全性-证书
- 点击新建-添加新证书-导入证书-选择下载的私钥跟证书

证书下载地址

- 两个文件都需要下载下来！

![](./%E7%BE%A4%E8%BE%89emby%E5%A5%97%E4%BB%B6%E7%89%88%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%99%BD%E5%AB%96%E6%95%99%E7%A8%8B.assets/clipboard-16377215057034.png)

保存后在配置中将mb3admin.com的证书设置为刚导入的的证书

**3. 劫持mb3admin伪站**

**前期准备**

- 确认你的 NAS 地址

例如：10.0.0.1

根据情况修改你的Host文件

注：劫持HOst 方法根据情况不同并不相同，本站以爱快做示范

10.0.0.10 **mb3admin**.com

**nginx一键脚本教程**

以root用户执行命令：

wget -N --no-check-certificate "https://raw.githubusercontent.com/s1oz/embyonekey/master/embyonekey.sh" && chmod +x embyonekey.sh && ./embyonekey.sh

运行完毕

可以输入以下命令测试

nginx -t

curl https://mb3admin.com/admin/service/registration/validateDevice curl https://mb3admin.com/admin/service/registration/validateDevice/666

**完成以后即可打开emby**

如图,打开即可拥有会员黄标，在Emby Premiere中输入任何秘钥都可以激活成功 

**nginx 手动教程**

未完待续

**客户端证书安装**

如服务器正常白嫖后,客户端还是无法正确显示,一般是证书不正确,请在客户端安装证书

https:*//raw.githubusercontent.com/s1oz/embyonekey/master/guomi.cer* 

下载此链接文件名为guomi.cer的证书文件后安装相应设备上

Windows请安装此目录下

![](./%E7%BE%A4%E8%BE%89emby%E5%A5%97%E4%BB%B6%E7%89%88%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%99%BD%E5%AB%96%E6%95%99%E7%A8%8B.assets/clipboard-16377216143937.png)

IOS需要安装后在设置--通用--关于手机--证书信任设置中把证书信任
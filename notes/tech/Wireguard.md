---
date: 2025-01-23
---

## 如何在Debian 11安装WireGuard VPN

WireGuard是一种现代VPN虚拟私有网络技术，它利用最新的加密技术。

与其他流行的VPN解决方案，例如IPsec和[OpenVPN](https://www.myfreax.com/how-to-set-up-an-openvpn-server-on-ubuntu-18-04/)相比，[WireGuard](https://www.wireguard.com/)更快，更易于配置并且占用空间更小。

它是跨平台的，几乎可以在任何操作系统运行，包括Linux，Windows，Android和macOS。

Wireguard是对等VPN，它不使用C/S客户端/服务器模型。根据配置，对等方可以充当传统的服务器或客户端。

它充当隧道，在每个对等设备上创建虚拟网络接口来工作。对等方通过交换和验证公钥，类似于使用SSH公钥模式来相互认证。

公钥与隧道中允许的IP地址列表进行映射。VPN流量封装在UDP中。

> 在本教程中，所有"接口"都表示为网卡，网卡是中国术语，接口通用的名词。

Wireguard可用于防御中间人攻击，匿名浏览网络，绕过受地域限制的内容或允许在家工作的同事安全地连接到公司网络。

要遵循本教程，您登录的用户必须具有[sudo权限](https://www.myfreax.com/how-to-create-a-sudo-user-on-debian/)。我们将首先在Debian 11安装WireGuard，然后将其设置为服务器。

我们还将说明如何配置WireGuard作为客户端的配置。WireGuard可从默认的Debian 11软件源中获得。

要安装它，请运行[apt](https://www.myfreax.com/how-to-use-apt-command/)命令 `sudo apt update && sudo apt install wireguard`。这将安装WireGuard模块和工具。WireGuard作为内核模块运行。

```bash
sudo apt update
sudo apt install wireguard
```

### 配置WireGuard

`wg`和`wg-quick`命令行工具可帮助您配置和管理WireGuard接口，WireGuard接口是虚拟网卡。WireGuard VPN网络中的每个设备都需要具有私钥和公钥。

我们可以使用wiregurad的工具`wg genkey`和`wg pubkey`在`/etc/wireguard/`目录中生成私钥`/etc/wireguard/privatekey`和公钥`/etc/wireguard/publickey`。

以下命令将使用`wg genkey`和`wg pubkey`，[tee命令](https://www.myfreax.com/linux-tee-command/)以及管道同时生成私钥和公钥并存储在`/etc/wireguard/`目录。

```bash
wg genkey | sudo tee /etc/wireguard/privatekey | wg pubkey | sudo tee /etc/wireguard/publickey
```

您可以使用[`cat`命令](https://www.myfreax.com/linux-cat-command/)或[](https://www.myfreax.com/linux-cat-command/)[`less`](https://www.myfreax.com/linux-cat-command/)命令查看私钥和公钥文件的内容。请不要把私钥与任何人共享，并且应始终保证私钥的安全。

Wireguard还支持预共享密钥，这增加了对称密钥加密的附加层。预共享密钥是可选的，并且对于每个对等设备都必须是唯一的。

下一步是配置虚拟接口。可以使用`[](https://www.myfreax.com/linux-ip-command/)[ip](https://www.myfreax.com/linux-ip-command/)`[命令](https://www.myfreax.com/linux-ip-command/)和`wg`命令配置接口。

使用你喜欢的[文本编辑器](https://www.myfreax.com/tag/vim/)创建配置文件`/etc/wireguard/wg0.conf`，在本教程中我们将[使用vim创建文件](https://www.myfreax.com/the-basis-of-the-linux-vim-command/)。

[复制黏贴](https://www.myfreax.com/how-to-copy-cut-paste-in-vim/)以下内容到`/etc/wireguard/wg0.conf`文件中，然后[保存并退出vim编辑器](https://www.myfreax.com/how-to-save-file-in-vim-quit-editor/)。

```bash
sudo vim /etc/wireguard/wg0.conf
```

```ini
[Interface]
Address = 10.0.0.1/24
SaveConfig = true
ListenPort = 51820
PrivateKey = SERVER_PRIVATE_KEY
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o ens3 -j MASQUERADE
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o ens3 -j MASQUERADE
```

/etc/wireguard/wg0.conf

接口的命名可以是任何你喜欢的名称，但是建议使用诸如`wg0`或`wgvpn0`之类的名称。可以让我们能快速分清是物理接口还是虚拟接口即可。

这里说明一下`/etc/wireguard/wg0.conf`配置文件定义接口的每个字段含义。

**Address** `wg0`接口的IP v4或IP v6的地址。请使用保留给私有网络范围内的IP地址，比如10.0.0.0/8、172.16.0.0/12或192.168.0.0/16。

**ListenPort** 是接口监听的端口。**PrivateKey** 由`wg genkey`命令生成的私钥。你可以使用`sudo cat /etc/wireguard/privatekey`命令要查看私钥文件的内容。

**SaveConfig** 设置为true时，当关闭接口时将当前配置将保存到配置文件中。**PostUp** 在启动接口之前执行的命令或脚本。

在此示例中，在**PostUp**钩子启用iptables伪装。这允许流量离开服务器，使VPN客户端可以访问互联网。

请记得使用您可访问网络的接口名称替换`-A POSTROUTING`后面的`ens3`。您可以通过以下ip命令方式轻松找到可访问网络的接口。

```bash
ip -o -4 route show to default | awk '{print $5}'
```

在**PostDown**钩子，我们在关闭接口之前删除iptables伪装。一旦接口关闭，iptablesnat转发规则将被删除。

为了保证私钥的安全，请将`wg0.conf`和`privatekey`文件对普通用户不可读。运行[chmod](https://www.myfreax.com/chmod-command-in-linux/)命令`sudo chmod 600 /etc/wireguard/{privatekey,wg0.conf}`。

```bash
sudo chmod 600 /etc/wireguard/{privatekey,wg0.conf}
```

### 启用Wireguard接口

完成以上步骤后，我们可以通过`wg-quick`启动wireguard服务器。这在wireguard中就是将接口状态设置为开启，运行`wg-quick up`命令将启用`wg0`接口。

```bash
sudo wg-quick up wg0
```

```
[#] ip link add wg0 type wireguard
[#] wg setconf wg0 /dev/fd/63
[#] ip -4 address add 10.0.0.1/24 dev wg0
[#] ip link set mtu 1420 up dev wg0
[#] iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o ens3 -j MASQUERADE
```

要检查接口状态和配置，请运行`wg show`命令。因为`wg0`是一个虚拟网卡，因此您也可以运行`ip a show wg0`来验证`wg0`接口状态。

```bash
sudo wg show wg0
ip a show wg0
```

```
interface: wg0
  public key: r3imyh3MCYggaZACmkx+CxlD6uAmICI8pe/PGq8+qCg=
  private key: (hidden)
  listening port: 51820
```

wireguard作为内核模块运行，默认情况wireguard会自动启动，但接口`wg0`虚拟网卡不会自动启动。

你可以通过systemctl命令将`wg0`设置为自动启动。要在启动时启用WireGuard的`wg0`接口。请运行`sudo systemctl enable wg-quick@wg0`命令。

```bash
sudo systemctl enable wg-quick@wg0
```

### 配置防火墙

在之前的步骤中我们在启动`wg0`接口`postup`前配置了一条iptables的NAT路由。为使NAT路由可正常工作，必须启用IP转发。

使用你喜欢的[编辑器](https://www.myfreax.com/tag/vim/)打开文件`/etc/sysctl.conf`。在本教程中我们将[使用vim打开文件](https://www.myfreax.com/the-basis-of-the-linux-vim-command/)。然后添加或取消注释行`net.ipv4.ip_forward`。

[退出vim并保存文件](https://www.myfreax.com/how-to-save-file-in-vim-quit-editor/)。修改完成后，运行`sudo sysctl -p`命令启用新的内核属性配置。

如果您正在使用[UFW](https://www.myfreax.com/how-to-setup-a-firewall-with-ufw-on-debian-11/)管理[防火墙](https://www.myfreax.com/how-to-setup-a-firewall-with-ufw-on-debian-11/)，则需要允许端口`51820`的UDP连接。至此，你已部署并配置wireguard Debian服务器的对等方。

```bash
sudo vim /etc/sysctl.conf

sudo sysctl -p

sudo ufw allow 51820/udp
```

```ini
net.ipv4.ip_forward=1
```

/etc/sysctl.conf

### 配置Linux和macOS客户端

你可在[wireguard](https://wireguard.com/install/)官网上找到所有受支持的平台安装说明。在Linux系统，您可以使用[Apt](https://www.myfreax.com/how-to-use-apt-command/)/[Yum软件包管理器](https://www.myfreax.com/how-to-install-rpm-packages-on-centos/)来安装软件wireguard。

macOS用户可以使用`brew`安装wireguard。安装完成后，请按照以下步骤配置客户端设备。

设置Linux和macOS客户端的过程几乎与服务器相同，这是因为两端之间是对等。

首先使用wiregurad的工具`wg genkey`和`wg pubkey`生成公钥和私钥并保存在`/etc/wireguard/`目录。

```bash
wg genkey | sudo tee /etc/wireguard/privatekey | wg pubkey | sudo tee /etc/wireguard/publickey
```

使用你喜欢的[文本编辑器](https://www.myfreax.com/tag/vim/)创建配置文件`/etc/wireguard/wg0.conf`，在本教程中我们将[使用vim创建文件](https://www.myfreax.com/the-basis-of-the-linux-vim-command/)。

```bash
sudo vim /etc/wireguard/wg0.conf
```

```ini
[Interface]
PrivateKey = CLIENT_PRIVATE_KEY #客户端生成的私钥
Address = 10.0.0.2/24


[Peer]
PublicKey = SERVER_PUBLIC_KEY  #服务器端生成的公钥
Endpoint = SERVER_IP_ADDRESS:51820
AllowedIPs = 0.0.0.0/0
```

/etc/wireguard/wg0.conf

#### Interface

**PrivateKey** 客户端生成的私有密钥，可以使用`cat`命令`sudo cat /etc/wireguard/privatekey`查看客户端计算机的私有密钥文件的内容。

**Address** `wg0`接口的IPv4或IP v6地址。

```shell
sudo cat /etc/wireguard/privatekey 
```

#### Peer

**PublicKey** 您要连接的对等方的公钥。也就是服务器端的`/etc/wireguard/publickey`文件内容。

**Endpoint** 您要连接的对等方的IP地址或主机名，后跟冒号，然后是远程对等方监听的端口号，默认是51820。注意：这个IP地址是公网可访问的IP地址。

**AllowedIPs** 是使用逗号分隔的IPv4或IP v6地址列表，如果数据包与IP列表匹配，这些数据包将走wireguard通道。

我们使用0.0.0.0/0表示将所有流量都转发到wireguard服务器端。如果您需要配置其他客户端，只需重复相同的步骤即可。

### 配置Windows客户端

从[WireGuard网站](https://wireguard.com/install/)下载并安装Windows msi软件包。安装后，打开WireGuard应用程序，然后单击`添加隧道`。

将自动创建公钥与私钥，并将其显示在屏幕上。输入接口的名称，该接口的名称，可以使用你喜欢的任何名称。并按如下方式编辑配置。

```ini
[Interface]
PrivateKey = CLIENT_PRIVATE_KEY #客户端生成的私钥
Address = 10.0.0.2/24


[Peer]
PublicKey = SERVER_PUBLIC_KEY  #服务器端生成的公钥
Endpoint = SERVER_IP_ADDRESS:51820
AllowedIPs = 0.0.0.0/0
```

#### Interface

**PrivateKey** 客户端生成的私有密钥，可以使用`cat`命令`sudo cat /etc/wireguard/privatekey`查看客户端计算机的私有密钥文件的内容。

**Address** `wg0`接口的IPv4或IP v6地址。

```shell
sudo cat /etc/wireguard/privatekey 
```

#### Peer

**PublicKey** 您要连接的对等方的公钥。也就是服务器端的`/etc/wireguard/publickey`文件内容。

**Endpoint** 您要连接的对等方的IP地址或主机名，后跟冒号，然后是远程对等方监听的端口号，默认是51820。注意：这个IP地址是公网可访问的IP地址。

**AllowedIPs** 是使用逗号分隔的IPv4或IP v6地址列表，如果数据包与IP列表匹配，这些数据包将走wireguard通道。

我们使用0.0.0.0/0表示将所有流量都转发到wireguard服务器端。如果您需要配置其他客户端，只需重复相同的步骤即可。

### 将客户端添加到服务器

最后一步是将客户端的公钥和IP地址添加到对等方，也就是服务器端口。要将客户端添加到服务器，非常简单。

你只需要在Debian 11服务器运行命令`sudo wg set wg0 peer CLIENT_PUBLIC_KEY allowed-ips 10.0.0.2`。

请使用在客户端计算机生成的公钥替换`CLIENT_PUBLIC_KEY`，可以通过`sudo cat /etc/wireguard/publickey`命令查看客户端的公钥。

Windows用户可以从WireGuard应用程序复制公钥。

```bash
sudo wg set wg0 peer CLIENT_PUBLIC_KEY allowed-ips 10.0.0.2
```

#### Linux/macOS客户端

Linux和macOS客户端运行命令`sudo wg-quick up wg0`启用客户端`wg0`接口。

```bash
sudo wg-quick up wg0
```

现在，您应该已连接到Debian 11服务器，并且来自客户端计算机的流量应通过该服务器。 您可以运行`sudo wg`命令检查连接。

如果一切正常，你应该看到wg0接口，transfer和received的数据大小。

您也可以打开浏览器，搜索`what is my ip`，然后您应该会看到您的Debian 11服务器IP地址。

要停止使用wiregurad，请关闭`wg0`接口，运行命令`sudo wg-quick down wg0`。

```bash
sudo wg
sudo wg-quick down wg0
```

```
interface: wg0
  public key: gFeK6A16ncnT1FG6fJhOCMPMeY4hZa97cZCNWis7cSo=
  private key: (hidden)
  listening port: 53527
  fwmark: 0xca6c

peer: r3imyh3MCYggaZACmkx+CxlD6uAmICI8pe/PGq8+qCg=
  endpoint: XXX.XXX.XXX.XXX:51820
  allowed ips: 0.0.0.0/0
  latest handshake: 53 seconds ago
  transfer: 3.23 KiB received, 3.50 KiB sent
```

#### Windows客户端

如果您在Windows安装了WireGuard，请单击`激活`按钮。 连接到对等方后，隧道状态将更改为`活动`。

### 结论

我们已向您展示了如何在Debian 11安装WireGuard并将其配置为VPN服务器。通过此设置，

您可以通过保持数据不公开来匿名浏览网络。如果您遇到任何问题，请随时发表评论。

## [在Wireguard中排除部分IP（段）](https://lxnchan.cn/wireguard-exclude-ips.html)

众所周知，在Wireguard中只能设置允许的IP（`AllowedIPs`），没办法设置排除部分IP段。但是可以通过一个Python脚本来计算排除掉某个IP或IP段之后的`AllowedIPs`。

改一下下面的参数，然后直接丢Python运行一下，输出结果填在`AllowedIPs`即可。

|                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  <br>2  <br>3  <br>4  <br>5  <br>6  <br>7  <br>8  <br>9  <br>10  <br>11  <br>12  <br>13  <br>14  <br>15  <br>16  <br>17  <br>18  <br>19  <br>20 | 复制<br><br>#!/usr/bin/python3  <br>  <br>from ipaddress import ip_network  <br>  <br>start = '0.0.0.0/0'  <br>#需要排除的ip或者ip段  <br>exclude = ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16', '6.6.6.6', '8.8.8.8']  <br>  <br>result = [ip_network(start)]  <br>for x in exclude:  <br>    n = ip_network(x)  <br>    new = []  <br>    for y in result:  <br>        if y.overlaps(n):  <br>            new.extend(y.address_exclude(n))  <br>        else:  <br>            new.append(y)  <br>    result = new  <br>  <br>print(','.join(str(x) for x in sorted(result))) |

可以直接在[菜鸟教程在线编辑器](https://www.runoob.com/try/runcode.php?filename=HelloWorld&type=python3)里面运行。

```
0.0.0.0/6,4.0.0.0/7,6.0.0.0/14,6.4.0.0/15,6.6.0.0/22,6.6.4.0/23,6.6.6.0/30,6.6.6.4/31,6.6.6.7/32,6.6.6.8/29,6.6.6.16/28,6.6.6.32/27,6.6.6.64/26,6.6.6.128/25,6.6.7.0/24,6.6.8.0/21,6.6.16.0/20,6.6.32.0/19,6.6.64.0/18,6.6.128.0/17,6.7.0.0/16,6.8.0.0/13,6.16.0.0/12,6.32.0.0/11,6.64.0.0/10,6.128.0.0/9,7.0.0.0/8,8.0.0.0/13,8.8.0.0/21,8.8.8.0/29,8.8.8.9/32,8.8.8.10/31,8.8.8.12/30,8.8.8.16/28,8.8.8.32/27,8.8.8.64/26,8.8.8.128/25,8.8.9.0/24,8.8.10.0/23,8.8.12.0/22,8.8.16.0/20,8.8.32.0/19,8.8.64.0/18,8.8.128.0/17,8.9.0.0/16,8.10.0.0/15,8.12.0.0/14,8.16.0.0/12,8.32.0.0/11,8.64.0.0/10,8.128.0.0/9,9.0.0.0/8,11.0.0.0/8,12.0.0.0/6,16.0.0.0/4,32.0.0.0/3,64.0.0.0/2,128.0.0.0/3,160.0.0.0/5,168.0.0.0/6,172.0.0.0/12,172.32.0.0/11,172.64.0.0/10,172.128.0.0/9,173.0.0.0/8,174.0.0.0/7,176.0.0.0/4,192.0.0.0/9,192.128.0.0/11,192.160.0.0/13,192.169.0.0/16,192.170.0.0/15,192.172.0.0/14,192.176.0.0/12,192.192.0.0/10,193.0.0.0/8,194.0.0.0/7,196.0.0.0/6,200.0.0.0/5,208.0.0.0/4,224.0.0.0/3
```

## 开机自启动

- 使用 `systemctl` 命令启用 WireGuard 服务的自启动：

```bash
## 先停止原服务
sudo wg-quick down wg0
## 创建服务
sudo systemctl enable wg-quick@wg0
## 启动服务
sudo systemctl start wg-quick@wg0
```
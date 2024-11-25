# 安装

更换源

```
change-termux-repo
```

# Open SSH

```bash
#安装OpenSSH
$ pkg install openssh

#运行SSH Server
$ sshd

#设置密码
$ passwd 

#获得Android IP
$ ifconfig

#客户端运行
 $ ssh android_ip -p 8022
```

# Root

你可以尝试使用 `tsu` 来提升到 root 权限。首先安装 `tsu`：

```bash
pkg install tsu
```

然后使用 `tsu` 命令：

```bash
tsu
```

这将尝试获取 root 权限。


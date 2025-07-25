---
title: Deepin & Ubuntu
date: 2025-07-21
category:
  - 计算机
tags:
  - Deepin
  - Ubuntu
article: true
---

# Deepin & Ubuntu

[TOC]

## Deepin

### 系统

升级内核

```
sudo apt update && sudo apt install linux-image-5.8.14-amd64-desktop linux-headers-5.8.14-amd64-desktop
```

卸载内核

```
dpkg --list | grep linux-image
dpkg --list | grep linux-headers
sudo apt purge linux-image-5.4.*
```

然后再    

```
apt autoremove 
```

 就可以了

**QQ卡死**

如果 linux 里装了 win 的宋体，QQ 就会卡死，此时 QQ 会使用宋体里的点阵字体。此时解决方案是把 win 的宋体的 ttc 文件往 QQ 的 wine 容器里也装一份（即复制到 ~/.deepinwine/Deepin-QQ/drive_c/Windows/Fonts 里)，此时 QQ 不再使用宋体里的点阵字体，也基本不会卡死了。

**提示空间不足**

deepin20安装盘，启动项时按e编辑启动选项，删除livecd installer或类似字样，进入livecd模式。进入之后ctrl+alt+T打开终端，输入sudo -i，然后输入

```
mount -t efivarfs efivarfs /sys/firmware/efi/efivars
```

之后最好用

```
ls /sys/firmware/efi/efivars
```

查看是否有大量dump-开头的文件，如果是，那么继续执行

```
rm /sys/firmware/efi/efivars/dump-*
```

**网卡驱动**

https://bbs.deepin.org/zh/post/211628

卸载网卡驱动 sudo apt autopurge bcmwl-kernel-source broadcom-sta-*

下载网卡驱动 http://mirrors.ustc.edu.cn/debian/pool/non-free/b/broadcom-sta/broadcom-sta-source_6.30.223.271-17~bpo10%2B1_all.deb

更新网卡驱动 sudo dpkg -i broadcom-sta* 

**蓝牙驱动**

https://github.com/winterheart/broadcom-bt-firmware/releases

**Selenium驱动**

export PATH=$PATH:/home/zhou/Documents/chromedriver/

**软件**

sudo apt purge unattended-upgrades

sudo apt autoclean

sudo dpkg --configure -a

sudo apt --fix-broken install

sudo apt install deepin-wine

sudo apt install build-essential gdb    #gcc

sudo apt install putty

sudo apt install filezilla

sudo apt install python3-pip

sudo apt install lm-sensors hddtemp

sudo apt install psensor

sudo apt install git

sudo apt install -y chromium chromium-driver

sudo apt install telegram-desktop

sudo dpkg -i deepin.com.ynote_6.10.0.1_i386.deb

**更新系统**

`sudo apt dist-upgrade`

**残留图标**

图标文件夹 `~/.local/share/applications` 

### TUNA

The simple way:

```
wget https://tuna.moe/oh-my-tuna/oh-my-tuna.py 
python oh-my-tuna.py              
```

Change system-wide settings instead of user-wide:

```
sudo python oh-my-tuna.py --global              
```

Get help:

```
python oh-my-tuna.py -h              
```

### 安卓

 anbox

sudo apt install android-tools-adb

### VS Code

Code runner

Go to File -> Preferences -> Settings. In the search bar, type in code-runner.

Now scroll down to the part where it says

Code-runner: Executor Mapand click on 

Edit in settings.json.

Within the "code-runner.executorMap", go to "python": "python -u" and change it to "python": "python3 -u"

### V2RAY

sudo -i

**安裝和更新 V2Ray**

```
// 安裝執行檔和 .dat 資料檔
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)
```

**安裝最新發行的 geoip.dat 和 geosite.dat**

```
// 只更新 .dat 資料檔
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-dat-release.sh)
```

**移除 V2Ray**

```
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh) --remove
```

### v2rayA

- 启动 v2rayA
  
  ```bash
  sudo systemctl start v2raya.service
  ```

- 设置开机自动启动
  
  ```bash
  sudo systemctl enable v2raya.service
  ```
  
  重启v2rayA
  
  ```bash
  sudo systemctl restart v2raya.service
  ```

### Flatpak

Deepin Quick Setup

Follow these simple steps to start using Flatpak

1. Install Flatpak
   
   To install Flatpak, run the following:
   
   ```bash
   sudo apt install flatpak
   ```

2. Add the Flathub repository
   
   Flathub is the best place to get Flatpak apps. To enable it, run:
   
   ```bash
   flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
   ```

3. Install the Deepin themes
   
   To install light and dark themes, run:
   
   ```bash
   flatpak install flathub org.gtk.Gtk3theme.deepin
   flatpak install flathub org.gtk.Gtk3theme.deepin-dark
   ```

4. Restart
   
   To complete setup, restart your system. Now all you have to do is [install some apps](https://flathub.org/)!

### Fstab

```
vi /etc/fstab
```

**路径名有空格**

如果挂载的路径中有空格，可以使用 "\040" 转义字符来表示空格（以三位八进制数来进行表示）

```
/etc/fstab
UUID=47FA-4071     /home/username/Camera\040Pictures   vfat  defaults,noatime      0  2
/dev/sda7          /media/100\040GB\040(Storage)       ext4  defaults,noatime,user  0  0
```

## Ubuntu

```bash
sudo add-apt-repository universe
sudo add-apt-repository multiverse
sudo apt update
```

安装媒体解码器来播放 MP3、MPEG4 和其他格式媒体文件

```bash
sudo apt install ubuntu-restricted-extras
```

## Python插件

pyinstxtractor

0x01 安装

项目地址：

https://sourceforge.net/projects/pyinstallerextractor/

进入后点击“Download”下载pyinstxtractor.py，即可。

0x02 使用方法

把pyinstxtractor.py和exe文件放在同个目录下

```
python pyinstxtractor.py xx.exe              
```

运行后生成xx.exe_extracted文件夹，进去后是各种文件，

瞄准一些无后缀文件（至于是哪些就看自己尝试了），其实是少了pyc头的pyc文件

可以尝试在前面增加03f30d0a21f8eb5a这个pyc头，然后增加文件名的后缀.pyc

之后就可以尝试用uncompyle2来对pyc文件进行反编译。

**uncompyle6**

```
ncompyle6 xx.pyc > xx.py              
decompyle3 xx.pyc > xx.py             
```

## Debian

### 一键换源

- ### GNU/Linux 更换系统软件源脚本

```shell
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```

- ### Docker 安装脚本

```shell
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

### 清理空间

- **手动执行 TRIM：** 可以使用 `fstrim` 命令手动执行 TRIM。

```BASH
sudo fstrim -av
```

这个命令会 TRIM 所有支持的文件系统。

**编辑 root 用户的 crontab：** 因为这个脚本在 `/root/` 目录下，并且可能需要 root 权限来检查 LVM，所以通常会将其添加到 root 用户的 cron 任务中。

```BASH
crontab -e
15 3 * * * /root/check_lvm_thin_usage.sh
crontab -l
```


## Nodejs

NPM

```cmd
npm config set registry https://registry.npmmirror.com
npm cache clean --force
npm config set prefix "D:\Nodejs\node_global"
npm config set cache "D:\Nodejs\node_cache"
```

设置系统环境变量 `D:\Nodejs\node_global\`

PNPM

```
pnpm config set global-bin-dir "D:\Nodejs"
pnpm config set cache-dir "D:\Nodejs\cache"
pnpm config set state-dir "D:\Nodejs\state"
pnpm config set global-dir "D:\Nodejs\global"
pnpm config set registry https://registry.npmmirror.com
pnpm c get
```

Powershell

```
$env:https_proxy="http://127.0.0.1:20171"
$env:http_proxy="http://127.0.0.1:20171"
```
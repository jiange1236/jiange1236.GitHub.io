# Windows

本节介绍如何在 Windows 上安装 v2rayA。需要注意的是，目前在 Windows 上仅支持一键配置系统代理而非透明代理。

## 使用安装包一键安装



安装包将内置 v2ray-core，如需更换 Xray-core，可在安装完毕后于安装目录手动进行替换。

从 [GitHub Releases](https://github.com/v2rayA/v2rayA/releases) 下载适用于 Windows 的安装包，例如 installer_windows_x64_1.5.6.exe，按照指示安装完毕即可。可运行桌面快捷方式或直接访问 http://127.0.0.1:2017 打开管理页面。

通过安装包安装 v2rayA 后，v2rayA 将以服务的形式运行，默认情况下将开机自启。你也可以在任务管理器中的“服务”选项卡管理 v2rayA 的启动与停止。

## 手动安装核心和 v2rayA



v2rayA 目前不支持 TUN，因此 Windows 之上的透明代理无法启用。安全起见，下面将以普通用户权限来运行 v2rayA。



建议从 scoop 安装 v2ray 核心，这样你可以很容易地获取后续更新。可以通过 [Qv2ray 的 Mochi 仓库](https://github.com/qv2ray/mochi) 安装核心。不过注意，如果你从 scoop 安装了核心，那么你应该使用实际的核心文件，而不是 `scoop\shims` 下的外壳，否则将造成内核重启失败故障。

### 下载 v2rayA

从 [GitHub Releases](https://github.com/v2rayA/v2rayA/releases) 或 GitHub Action 下载适用于 Windows 的二进制文件，然后重命名为 `v2raya.exe`（格外注意 Windows 系统下不能丢失扩展名）。

### 下载 V2Ray 核心 / Xray 核心

#### 方法一：从 scoop 安装

```ps1
scoop install v2ray  ## 或者安装 xray 
```

#### 方法二：手动下载安装

> 安装 V2Ray：https://www.v2fly.org/guide/install.html
> 安装 Xray：https://xray.sh/document/install.html

下载压缩包之后解压即可。

### 运行 v2rayA

以下假设 v2rayA 与核心都保存到了 D 盘的对应文件夹，如果你文件的存放位置不是这些文件夹，那么你需要根据实际情况修改命令或配置文件。

#### 直接运行

```ps1
D:\v2rayA\v2raya.exe --lite --v2ray-bin 'D:\v2ray\v2ray.exe'
```

#### 作为服务运行

使用 [WinSW](https://github.com/winsw/winsw/) 可以将 v2rayA 作为服务运行并自动开机启动。

下载 WinSW（版本随意，不过 Windows 10 用户使用 `WinSW-net461.exe` 这个版本即可）的 3.x 版本，然后将其重命名为 `v2raya-service.exe` 并放入 v2rayA 所在的文件夹下面。

在 v2rayA 所在文件夹下新建 `v2raya-service.xml` 然后编辑：

```xml
<service>
  <id>org.v2raya.v2raya</id>
  <name>v2rayA</name>
  <description>This service runs v2rayA.</description>
  <executable>D:\v2rayA\v2raya.exe</executable>
  <arguments>--lite --v2ray-bin=D:\v2ray\v2ray.exe</arguments>
  <log mode="roll"></log>
  <delayedAutoStart>true</delayedAutoStart>
  <onfailure action="restart" delay="10 sec"/>
  <onfailure action="restart" delay="20 sec"/>
  <serviceaccount>
    <username>.\YourUserName</username>
    <password>YourPassword</password>
    <allowservicelogon>true</allowservicelogon>
  </serviceaccount>
</service>
```

此处的用户名是你显示在“计算机管理”中的用户名，而非在控制面板或系统设置里面看到的完整用户名。密码是你的本地账户密码或者微软账户密码。

保存文件，然后运行：

```ps1
cd D:\v2rayA
.\v2raya-service.exe install
.\v2raya-service.exe start
```

操作需要管理员权限。在 v2rayA 所在目录下可以查看日志文件。

#### 后台运行（使用 PowerShell 的隐藏窗口功能）：

```ps1
Start-Process "D:\v2rayA\v2raya.exe" -Arg "--lite --v2ray-bin 'D:\v2ray\v2ray.exe' " -WindowStyle Hidden
```

#### 后台运行（使用 ConEmu）

[ConEmu](https://conemu.github.io/) 是一个 Windows 下的终端程序，右击它窗口上的最小化按钮可以让它把窗口最小化到托盘区。在 ConEmu 中的 PowerShell 会话中使用 [直接运行](https://v2raya.org/docs/prologue/installation/windows/#直接运行) 项里面提到的命令运行 v2rayA 即可。

## 其它

Scoop 源：https://github.com/v2raya/v2raya-scoop

你可以通过 [Scoop](https://scoop.sh/) 安装 v2rayA，安装完成后可以直接通过 `v2raya` 命令运行。
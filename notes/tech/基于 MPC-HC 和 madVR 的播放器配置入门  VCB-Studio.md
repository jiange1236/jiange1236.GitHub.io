---
title: 基于 MPC-HC 和 madVR 的播放器配置入门  VCB-Studio
source: https://vcb-s.com/archives/16609
published: 2025-05-13
date: 2025/05/18
category:
  - 计算机
tags:
  - clippings
  - MPC-HC
article: true
---
# 基于 MPC-HC 和 madVR 的播放器配置入门  VCB-Studio
#### 基于 MPC-HC 和 madVR 的播放器配置入门

之前的 MPC 系教程和 madVR 教程都有些过时了。老教程直接通过注册表来设置虽然简单直接，但不利于维护，索性重新写一篇。

和 [mpv 的教程](https://vcb-s.com/archives/7594) 类似，本教程只提及最具普适性的选项，不为播放“高清病毒”，也不追求“极限画质”而故意榨取 CPU 和显卡性能。

本教程基于 [K-Lite Codec Pack Full](https://codecguide.com/download_k-lite_codec_pack_full.htm) ，其中已经包含了 MPC-HC 和 madVR。MPC-HC 现在已由 clsid2（原 MPC [6.4.9.1](http://6.4.9.1/ "Linkify Plus Plus") 开发者）接手继续开发，而 madVR 应该已经不需要再多做介绍。

madVR 其实并不需要很高的硬件性能就可以达到相当好的效果，所以默认建议使用。如果你不想使用 madVR，也可以选择 [K-Lite Codec Pack Standard](https://codecguide.com/download_k-lite_codec_pack_standard.htm) 或者 [MPC-BE](https://sourceforge.net/projects/mpcbe/) 。我们 [不推荐使用 PotPlayer](https://vcb-s.com/archives/7228) 。

### 安装

直接从前文给出的 [K-Lite Codec Pack 官网链接](https://codecguide.com/download_k-lite_codec_pack_full.htm) 下载安装包，运行即可。安装过程中的大部分选项都可以保留默认，除了下面这两处：

– 因为我们要默认使用 madVR 作为视频渲染器，所以这里要选择“Video renderer: madVR”

![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/k-lite_setup_1.png)

（当然，如果你不用 madVR，这里保留默认的“MPC Video Renderer”就好）

– 为了保证播放稳定可靠，我们一般建议只使用软件解码（见后文补充说明）

![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/k-lite_setup_2.png)

友情提示，K-Lite Codec Pack 安装包可能捆绑有赞助推广软件，不需要的话记得留意把它取消安装。

### 简单配置

K-Lite Codec Pack 默认使用 MPC-HC 作为播放器，对于大部分常见的视频文件格式和编码都默认使用 LAV 分离器和解码器，设置都没有什么需要特别修改的地方。你只需要看看播放器的其他行为设置，让它更符合你的操作习惯即可，例如启动时默认进入全屏模式、快捷键等等。

如果你不用 madVR，默认会使用 MPC Video Renderer 作为渲染器，默认设置也不需要改动。

### madVR 配置

如果你使用 madVR，接下来我们还有一些关于 madVR 的配置建议。

– 如果你正在使用显示器自带的出厂色彩校正模式，或者是已通过硬件校色校准的显示器，可以在这里选择“this display is already calibrated”，并在下方选择对应的色域，例如 sRGB 则选择“BT.709”（sRGB 和 BT.709 的色域是完全相同的），DCI-P3 则选择“DCI-P3”，gamma 一般保留默认的“pure power curve 2.20”即可：

![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/madvr_setup_1.png)

当然，如果你通过软件对屏幕进行了校色，这里应该选择“calibrate this display by using external 3DLUT files”，详见后文补充说明。

– 打开 madVR 自带的去色带功能，强度保持默认的“low/high”即可。色带是最为常见的视频瑕疵之一，默认启用去色带是利远大于弊的：

![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/madvr_setup_2.1.png)

– 很多时候，我们的显示器刷新率不是片源帧率的整数倍（例如显示器刷新率通常为 60 Hz 而动画通常为 23.976 fps），此时会因每一帧实际在屏幕上的呈现时间不均等而造成卡顿感（俗称 3:2 pull down judder）。madVR 的 smooth motion 功能正是为此设计，建议默认打开：

![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/madvr_setup_3.png)

– madVR 自带的各种缩放算法（scaling algorithms）是其最大特色之一。这里我们提供三套推荐的缩放算法相关配置，按对性能的要求分为低、中、高三档：

|  | **chroma upscaling** | **image downscaling** | **image upscaling** |
| --- | --- | --- | --- |
| **低** | Cubic (Bicubic50) | Cubic (Bicubic50) + LL | Lanczos (3 taps) + SL |
| **中** | Cubic (Bicubic50) + AR | Cubic (Bicubic50) + LL + AR (relaxed) | Jinc + AR + SL |
| **高** | super-xbr (100) + AR | SSIM (1D – 100%) + LL + AR (relaxed) | NGU Sharp (medium) |

- LL =“scale in **l** inear **l** ight”
- SL =“scale in **s** igmoidal **l** ight”
- AR =“activate **a** nti- **r** inging filter”
- NGU Sharp 除了选择“luma doubling”质量以外，其余全部保留默认的“let madVR decide”即可

需要指出的是，这里对性能要求的高低并不绝对等同于画质的高低，“低”档设置的质量其实已经相当好了，而“高”档设置在一些低质量片源上反而有可能放大片源瑕疵。综合来说我们最推荐“中”档设置，是在画质、功耗和泛用性之间较为平衡的选择。

以“中”档为例，设置完成后应该是如下图的状态：

![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/madvr_setup_4.1.1.png) ![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/madvr_setup_4.2.png) ![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/madvr_setup_4.3.png)

在完成本文的配置后，你可以打开一个码率较高的视频，按下 Ctrl + j 观察显示的 dropped frames、delayed frames 和 presentation glitches 这几项计数，如果播放一段时间后这几个数字都保持稳定没有增加，则基本可以确定视频播放没有什么问题了：

![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/madvr_info_abyss.webp)

madVR 功能很丰富，这里不打算一一详解。再次推荐有意了解的同学阅读 [暮星（万年冷冻库）的这篇文章](https://lysandria1985.blogspot.com/2013/01/3-madvr.html) 。

### 使用 XySubFilter with libass 字幕渲染器

对 Windows 平台上字幕渲染器的历史有些了解的朋友大概都知道 VSFilter (DirectVobSub) 到 xy-VSFilter/XySubFilter 的演化过程。原版 VSFilter 早已作古，其改版 xy-VSFilter/XySubFilter 开发也基本停滞，留有不少陈年 bug，在 4K 分辨率开始普及后性能问题也开始凸显。另外，VSFilter 系只支持 Windows 平台上基于 DirectShow 的播放器（如 MPC 系、PotPlayer），无法跨平台使用。libass 则是一个另起炉灶的跨平台字幕渲染器，性能也更佳，诸如 mpv、VLC 和很多移动平台上的播放器都使用 libass 来渲染字幕，近年来越来越普及。

由于 VSFilter 系长期的垄断地位而成为事实标准，绝大部分字幕组只能以 VSFilter 的渲染结果为准来制作和调整字幕显示效果（例如额外增大部分 OTF 字体竖排时的字号来弥补字体显示会变小的 bug）。libass 最近做出了一些妥协性修改，显示效果绝大部分时候都已经与 VSFilter 一致。因此，现在是摆脱 VSFilter 的历史包袱，迁移到 libass 的一个好时机。

[XySubFilter with libass](https://bbs.acgrip.com/thread-9608-1-1.html) 就是在 XySubFilter 基础上修改以 libass 作为后端的字幕渲染器，让 DirectShow 播放器也能享受到 libass 高性能而不牺牲兼容性，推荐大家使用。

安装过程非常简单，只需要到 [项目的 GitHub 发布页面](https://github.com/Masaiki/xy-VSFilter/releases) 下载最新版本，解压到一个合适的位置，以管理员身份运行 Install\_XySubFilter.bat，然后在 MPC-HC 的选项中启用即可：

![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/xysubfilter_libass.png)

### 补充说明

#### 使用 HDMI 连接显示器时注意设置输出范围

Intel 集成显卡和 NVIDIA 显卡有时会在使用 HDMI 输出时，默认使用有限范围（limited range），严重影响显示对比度。所以在使用 HDMI 连接显示器时，要注意检查输出范围，在显示控制面板中将输出范围设置为全范围（full range），如果控制面板中没有提供选项，可以借助 [madVR](http://madshi.net/madVR.zip) 附带的 madLevelsTweaker.exe 工具来调整。

DVI、DisplayPort 默认应该就是全范围，笔记本电脑的自带屏幕一般也不需要专门设置。

#### 是否应该开启硬解（硬件解码）？

近几年的主流 PC 对最常见的视频编码（H.264 和 H.265）硬解的支持已经有了一些提高，但出现各种问题的几率仍不算低。为了保证播放稳定可靠，我们一般建议只使用软件解码。如果你有其他需求，例如希望降低笔记本电脑功耗、提高电池续航，可以尝试开启硬解。

首先打开 K-Lite Codec Pack 的 Codec Tweak Tool，选择 Configuration – DirectShow Filters – LAV Video Decoder (MPC-HC) 打开 LAV 解码器设置界面，然后在右上角选择“D3D11”：

![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/lav_hwdec_d3d11.png)

如果在硬解开启时播放遇到奇怪问题，应该首先尝试禁用硬解来排查。

#### 关于双显卡笔记本的设置

如果你使用的是集成显卡 + NVIDIA 独立显卡的笔记本，默认设置下 MPC-HC 只会调用集成显卡来进行渲染计算，性能有限。如果你发现播放时显卡性能成为瓶颈，可以尝试改用更高性能的独立显卡。

NVIDIA 控制面板屏蔽了 MPC-HC 默认的主程序文件名 mpc-hc64.exe，本来是无法直接设置使用独立显卡的。K-Lite Codec Pack 在安装时如果检测系统环境中有双显卡（NVIDIA Optimus）存在，会自动将 MPC-HC 主程序文件名改为 mpc-hc64\_nvo.exe。如果你的 MPC-HC 主程序仍然是 mpc-hc64.exe，需要先改个名字，或者用 [NVIDIA Profile Inspector](https://www.guru3d.com/files-details/nvidia-profile-inspector-download.html) 解锁。详情可以参考 [这里](https://codecguide.com/faq_mpc.htm#item44) 。

然后在 NVIDIA 控制面板 – 3D 设置 – 管理 3D 设置 – 程序设置下，添加 MPC-HC 主程序，将首选图形处理器改为“高性能 NVIDIA 处理器”，并将电源管理模式改为“自适应”。

#### 使用 ICC profile 为 madVR 生成 3DLUT 文件实现色彩管理

我们需要用到校色软件 DisplayCAL 配套的一个小程序 3DLUT Maker。首先从 [DisplayCAL 官网](https://displaycal.net/) 下载安装（如果你还没有的话），然后运行 3DLUT Maker，“Destination profile”选择你显示器的 ICC profile 文件，确保“Apply calibration (vcgt)”不勾选，文件格式当然是“madVR (.3dlut)”，其余保持默认即可：

![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/create_3dlut.png)

点击右下角按钮，选择保存位置，完成后，把得到的.3dlut 文件放在一个合适的位置，然后打开 madVR 设置，按下图设置，确保“disable GPU gamma ramps”不勾选：

![](./基于%20MPC-HC%20和%20madVR%20的播放器配置入门%20%20VCB-Studio.assets/madvr_3dlut.png)

然后保存设置即可。

- [下一篇](https://vcb-s.com/archives/16639)

[Page 2](https://vcb-s.com/archives/16639 "当前页")

(Image Credit: [しおん@pixiv](https://www.pixiv.net/artworks/65204496))

目前我们推荐的播放器可以分成两大阵营：mpv 和 MPC。前者跨平台，后者仅限 Windows。

### mpv

[mpv](https://mpv.io/) 可以在 Windows、macOS 和桌面 Linux 上使用。

mpv 本身没有图形界面，需要自己写配置文件，但并不复杂，习惯之后可以说比图形界面还要简单。

如果你确实需要一个图形界面的 mpv 播放器前端，我们推荐：

– Windows 用户使用 [mpv.net](https://github.com/mpvnet-player/mpv.net)  
– macOS 用户使用 [IINA](https://iina.io/)

详情请查看我们的 [mpv 配置教程](https://vcb-s.com/archives/7594) 。

### MPC

MPC 系列都基于微软 DirectShow，只能在 Windows 上使用。

MPC 目前有两个分支版本：MPC-HC 和 MPC-BE，都值得推荐。我们同时推荐配合 [madVR](https://madvr.com/) 和 [XySubFilter with libass](https://bbs.acgrip.com/thread-9608-1-1.html) 一起使用。

目前的 [K-Lite Codec Pack Full](https://codecguide.com/download_k-lite_codec_pack_full.htm) 直接包含了 MPC-HC、LAV 以及 madVR 这一套播放环境，安装和配置较为简单，是我们优先推荐的方案。

详情请查看我们的 [MPC-HC + madVR 配置教程](https://vcb-s.com/archives/16609) 。

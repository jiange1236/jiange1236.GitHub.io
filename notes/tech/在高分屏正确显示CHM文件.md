---
title: 在高分屏正确显示CHM文件
source: https://www.cnblogs.com/cielosun/p/7136725.html
author:
  - "[[CieloSun]]"
published: 2017-07-08
created: 2025-07-18
tags:
  - clippings
---
今天下了白色相簿2推，发现里面的chm格式的帮助文档显示不正确，又没法在应用程序直接设置系统分辨率托管，google了一下找到了这个方法：

新建  
`计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\SideBySide`  值 `PreferExternalManifest`
，类型为DWORD，值设为1。（让系统优先使用外部manifest说明文件）

在C:\\Windows目录下新建hh.exe.manifest文件，内容如下：

```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!-- Copyright (c) Microsoft Corporation -->
<assembly 
    xmlns="urn:schemas-microsoft-com:asm.v1" 
    xmlns:asmv3="urn:schemas-microsoft-com:asm.v3"
    manifestVersion="1.0"
    >
<assemblyIdentity
    version="5.1.0.0"
    processorArchitecture="amd64"
    name="Microsoft.Windows.Help.HH"
    type="win32"
/>
<description>Microsoft HTML Help Executable</description>

<trustInfo xmlns="urn:schemas-microsoft-com:asm.v3">
    <security>
        <requestedPrivileges>
            <requestedExecutionLevel
                level="asInvoker"
                uiAccess="false"
            />
        </requestedPrivileges>
    </security>
</trustInfo>
    <asmv3:application>
        <asmv3:windowsSettings xmlns="http://schemas.microsoft.com/SMI/2005/WindowsSettings">
            <dpiAware>false</dpiAware>
        </asmv3:windowsSettings>
    </asmv3:application>
</assembly>


```


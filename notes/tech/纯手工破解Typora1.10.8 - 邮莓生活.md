---
date: 2025-07-29
title: 纯手工破解Typora1.10.8 - 邮莓生活
source: https://mailberry.com.cn/2025/06/manual-crack-typora1-10-8/
author: 
published: 
created: 2025-06-10
description: 前言 以前写的文章是通过第三方的脚本来生成授权码，从而实现破解Typora的，《免费使用Typora最新版本1.18.10正版方法— ...
tags:
  - Typora破解
  - 授权文件修改
  - 注册表调整
  - ChatGPT
---

## 前言

以前写的文章是通过第三方的脚本来生成授权码，从而实现破解Typora的，《 [免费使用Typora最新版本1.18.10正版方法——生成授权码](https://mailberry.com.cn/2024/04/typora-1-18-10-crack-license/) 》，但最新1.10.8版本换成jsc加密了，原来的方法行不通，今天就手工来尝试破解一下，方法未必能长期有效，但一定是最安全的。

## 效果

![image-20250604180228012](./%E7%BA%AF%E6%89%8B%E5%B7%A5%E7%A0%B4%E8%A7%A3Typora1.10.8%20-%20%E9%82%AE%E8%8E%93%E7%94%9F%E6%B4%BB.assets/ba11bd34874ae28597825fde6b935624_MD5.webp)

## 过程

第一步，修改授权文件

位置C:\\Program Files\\Typora\\resources\\page-dist\\static\\js\\

文件名LicenseIndex开头的，后面可能不一样，大概是这样子

![image-20250604164828882](./%E7%BA%AF%E6%89%8B%E5%B7%A5%E7%A0%B4%E8%A7%A3Typora1.10.8%20-%20%E9%82%AE%E8%8E%93%E7%94%9F%E6%B4%BB.assets/934bc105d4ba76c84913a923dce1c4bb_MD5.webp)

编辑——查找e.hasActivated值失成true

原 `e.hasActivated="true"==e.hasActivated` 改成 `e.hasActivated="true"=="true"`

![image-20250604165112617](./%E7%BA%AF%E6%89%8B%E5%B7%A5%E7%A0%B4%E8%A7%A3Typora1.10.8%20-%20%E9%82%AE%E8%8E%93%E7%94%9F%E6%B4%BB.assets/1abe149e844d7d377d4237bb453cb004_MD5.webp)

第二步，关闭弹窗

在同一个文件的最后加上以下代码

```js
setTimeout(() => {window.close();}, 100);
```

目的是每次打开Typora时会弹出授权信息窗口，在短时自动关闭，从而“眼不见为净”的作用

第三步，改左下角UI

位置C:\\Program Files\\Typora\\resources\\locales\\zh-Hans.lproj\\

找到文件Panel.json

编辑——查找"未激活"并修改成”已激活“

![image-20250604175912703](./%E7%BA%AF%E6%89%8B%E5%B7%A5%E7%A0%B4%E8%A7%A3Typora1.10.8%20-%20%E9%82%AE%E8%8E%93%E7%94%9F%E6%B4%BB.assets/822546d51f41fb21dea097eeae2a234d_MD5.webp)

## 修改注册表

修改试用日期

`计算机\HKEY_CURRENT_USER\SOFTWARE\Typora` 复制到注册表地址栏快速定位到当前位置

修改IDate的日期，这个是安装日期，试用日期是根据它来推算的

![image-20250604162810776](./%E7%BA%AF%E6%89%8B%E5%B7%A5%E7%A0%B4%E8%A7%A3Typora1.10.8%20-%20%E9%82%AE%E8%8E%93%E7%94%9F%E6%B4%BB.assets/ed8eae50548575bf4b9b8413b7c49e14_MD5.webp)

我先把它改到6/4/2035年吧，先来十年

修改权限

右健“Typora”——权限——选择“Administrators”用户——拒绝

![image-20250604163658984](./%E7%BA%AF%E6%89%8B%E5%B7%A5%E7%A0%B4%E8%A7%A3Typora1.10.8%20-%20%E9%82%AE%E8%8E%93%E7%94%9F%E6%B4%BB.assets/a17411897cac52d574abda95c78769c3_MD5.webp)

意思不给它权限修改我的注册表了，防止破解失效

## 视频

[https://www.bilibili.com/video/BV1m3TWzmEtX/](https://www.bilibili.com/video/BV1m3TWzmEtX/ "Linkify Plus Plus")

## 总结

主要上修改LicenseIndex文件为true并添加自动关闭弹窗，再修改Panel.json显示文件“已激活”，最后修改一下注册表试用日期往后一点并锁定注册表不让修改。

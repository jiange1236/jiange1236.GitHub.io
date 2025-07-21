---
title: 手把手教你在本地部署MinerU 1.3.10 API并接入Dify插件 - 53AI-AI知识库|大模型知识库|大模型训练|智能体开发
source: https://www.53ai.com/news/dify/2025060447125.html
author: []
published: 
created: 2025-06-28
description: 想要在本地轻松部署 MinerU 1.3.10 API 并接入 Dify 插件？别担心，本文将为你详细指导。最近 MinerU 已更新至 1.3.10 版本，其 Web API 接口支持多种格式文件，上周还推出了在 Dify 中使用 MinerU 插件的教程。我们将逐步教你通过本地部署 1.3.10 版官方 API 并接入 Dify 插件，包括 Docker 镜像构建、国内环境配置等步骤。同时，还提供了相关的更新日志及下载替换文件的方法。快来了解详情，轻松实现大模型本地化部署，点击阅读获取更多！
tags:
  - clippings
  - Docker部署
  - MinerU
  - API
  - Dify插件
  - 模型优化
  - 工作流配置
---
## 手把手教你在本地部署MinerU 1.3.10 API并接入Dify插件

最近一个多月MinerU连续发布版本，已经更新到1.3.10了。新版本的MinerU提供的 **Web API** 接口也支持Docx、Png等多种格式的文件了。上周官方也推出了教程，在dify中使用MinerU的插件。本篇文章将实现通过本地部署1.3.10版官方API，并接入Dify插件。

![MinerU 1.3.0~1.3.10更新日志](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/fcb87acfbaa59f6dd18a76eb741bfa89_MD5.png)

MinerU 1.3.0~1.3.10更新日志

## 部署MinerU WEB API

### Docker镜像构建

git拉取最新的MinerU源码，进入到 `projects/web_api` 目录执行docker构建命令。

```
## 拉取最新源码
cd MinerU/
git pull
git checkout tags/magic_pdf-1.3.10-released

## 制作docker镜像
cd projects/web_api
docker build -t mineru-api:offical-1.3.10 .
```

### 国内环境配置

如果你的网络环境相当好，上述的docker镜像很快就完成了。当然，大部分情况下速度没那么快，而且可能还会网络中断。

requirements. txt 文件添加 `modelscope`

替换 `download_[models.py](http://models.py/)` 文件，原本的模型是通过 **HuggingFace** 下载，大概率是网络受限的，替换官方使用 **ModelScope** 下载的方式

```
wget https://gcore.jsdelivr.net/gh/opendatalab/MinerU@release-1.3.12/scripts/download_models.py -O download_models.py
```

在Dockerfile中添加一些镜像站，如下

```
## 【添加】
RUN sed -i 's@deb.debian.org@mirrors.aliyun.com@g' /etc/apt/sources.list.d/debian.sources

# Update the package list and install necessary packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Build Python dependencies  【添加 -i https://mirrors.aliyun.com/pypi/simple/】
COPY requirements.txt .
RUN python -m venv /app/venv && \
    . /app/venv/bin/activate && \
    pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/


# Update the package list and install necessary packages 【添加】
RUN sed -i 's@deb.debian.org@mirrors.aliyun.com@g' /etc/apt/sources.list.d/debian.sources

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        libgl1 \
        libglib2.0-0 \
        libgomp1 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```

另外，我们更换了 `download_models.py` 文件，模型下载地址发生了变更，因此下面两行也需要修改

```
# Copy Python dependencies and models from the build stage
COPY --from=build /root/.cache/modelscope/hub/models/opendatalab/PDF-Extract-Kit-1___0/models  /opt/models
COPY --from=build /root/.cache/modelscope/hub/models/ppaanngggg/layoutreader  /opt/layoutreader
```

根据上述修改，基本上能快速构建镜像了。

### Docker启动服务

为了能在Dify插件里使用本地部署的MinerU服务，因此我们直接接入到Dify的内部网络中，不对外暴露端口了。

```
docker run -d --gpus all --network docker_ssrf_proxy_network --name mineru-api mineru-api:offical-1.3.10
```

## Dify插件MinerU

### 插件安装及授权

在Dify的插件市场，找到MinerU产检，点击安装。

![MinerU插件](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/7186a9d745a842ab2075077b69306673_MD5.png)

等待安装完成后，点击授权，在授权页面填写以下信息。由于我们Dify和MinerU在一台服务器上。如果部署在不同的机器上，请填写MinerU服务器的地址及开放的端口。

![授权MinerU插件](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/90de0f3d95c142672a6b74edf2f7fd61_MD5.png)

授权MinerU插件

### 常见问题

配置完以后在工作流中试用会提示以下错误

![MinerU插件常见错误](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/017fa968cc1f7833d6744420112ac966_MD5.png)

MinerU插件常见错误

对此我们可以参考MinerU官方给出的解决方案：

> 1.找到 Dify 部署目录，打开.env 文件，修改 FILES\_URL 配置项，依据你的部署方式填写：
> 
> \-Docker Compose 部署：FILES\_URL 设置为http://api:5001
> 
> \-其他部署方式：FILES\_URL 设置为 http://Dify宿主机IP:5001
> 
> 2.确认 Dify API 服务的 5001 端口已对外暴露（可检查 docker-compose.yaml 文件的端口映射）。
> 
> 3.保存.env 文件。
> 
> 4.重启 Dify 服务以使配置生效。

我们根据官方提示，修改Dify的配置文件`.env` ，然后重启Dify。

### 工作流测试

搭建一个简单的Dify工作流，测试下MinerU插件的效果。

![](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/a8d267770afe01eebf22a2f5d4682b18_MD5.png)

我们拿官方发布的文章来试验\[https://mp.weixin.qq.com/s/fLd6yzM3KttWofXCdgDomA \]，打印成PDF，有22页。

![官方文章](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/bd6eec60eee9cc11db0ecf0c47b8ab5b_MD5.png)

上传到工作流进行测试。

![测试结果](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/ef0c2b85de110e3d679b7d82aa1f6ae5_MD5.png)

成功实现了图片型PDF的识别。新版本MinerU优化以后，不仅显存占用下降了，速度也挺快。22页的图片PDF，整个工作流用了20s就解析完成了。

  

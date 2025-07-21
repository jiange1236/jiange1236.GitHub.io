---
title: 手把手教你在本地部署MinerU 1.3.10 API并接入Dify插件 - 53AI-AI知识库大模型知识库大模型训练智能体开发
source: https://www.53ai.com/news/dify/2025060447125.html
date: 2025-07-21
category:
  - AI
tags:
  - AI
  - Dify
article: true
Author:
  - "[[广州网站建设-优网科技 www.uweb.net.cn]]"
Created: 2025-07-21
Description: 想要在本地轻松部署 MinerU 1.3.10 API 并接入 Dify 插件？别担心，本文将为你详细指导。最近 MinerU 已更新至 1.3.10 版本，其 Web API 接口支持多种格式文件，上周还推出了在 Dify 中使用 MinerU 插件的教程。我们将逐步教你通过本地部署 1.3.10 版官方 API 并接入 Dify 插件，包括 Docker 镜像构建、国内环境配置等步骤。同时，还提供了相关的更新日志及下载替换文件的方法。快来了解详情，轻松实现大模型本地化部署，点击阅读获取更多！
---
# 手把手教你在本地部署MinerU 1.3.10 API并接入Dify插件 - 53AI-AI知识库大模型知识库大模型训练智能体开发

发布日期：2025-06-04 06:21:20 浏览次数： 3396

最近一个多月 MinerU 连续发布版本，已经更新到 1.3.10 了。新版本的 MinerU 提供的 **Web API** 接口也支持 Docx、Png 等多种格式的文件了。上周官方也推出了教程，在 dify 中使用 MinerU 的插件。本篇文章将实现通过本地部署 1.3.10 版官方 API，并接入 Dify 插件。

![MinerU 1.3.0~1.3.10更新日志](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/fcb87acfbaa59f6dd18a76eb741bfa89_MD5.png)

MinerU 1.3.0~1.3.10 更新日志

## 部署 MinerU WEB API

### Docker 镜像构建

git 拉取最新的 MinerU 源码，进入到 `projects/web_api` 目录执行 docker 构建命令。

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

如果你的网络环境相当好，上述的 docker 镜像很快就完成了。当然，大部分情况下速度没那么快，而且可能还会网络中断。

替换 `download_models.py` 文件，原本的模型是通过 **HuggingFace** 下载，大概率是网络受限的，替换官方使用 **ModelScope** 下载的方式

```
wget https://gcore.jsdelivr.net/gh/opendatalab/MinerU@master/scripts/download_models.py -O download_models.py
```

在 Dockerfile 中添加一些镜像站，如下

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
```

另外，我们更换了 `download_models.py` 文件，模型下载地址发生了变更，因此下面两行也需要修改

```
# Copy Python dependencies and models from the build stage
COPY --from=build /root/.cache/modelscope/hub/models/opendatalab/PDF-Extract-Kit-1___0/models  /opt/models
COPY --from=build /root/.cache/modelscope/hub/models/ppaanngggg/layoutreader  /opt/layoutreader
```

根据上述修改，基本上能快速构建镜像了。

### Docker 启动服务

为了能在 Dify 插件里使用本地部署的 MinerU 服务，因此我们直接接入到 Dify 的内部网络中，不对外暴露端口了。

```
docker run -d --gpus all --network docker_ssrf_proxy_network --name mineru-api mineru-api:offical-1.3.10
```

## Dify 插件 MinerU

### 插件安装及授权

在 Dify 的插件市场，找到 MinerU 产检，点击安装。

![MinerU插件](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/7186a9d745a842ab2075077b69306673_MD5.png)

等待安装完成后，点击授权，在授权页面填写以下信息。由于我们 Dify 和 MinerU 在一台服务器上。如果部署在不同的机器上，请填写 MinerU 服务器的地址及开放的端口。

![授权MinerU插件](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/90de0f3d95c142672a6b74edf2f7fd61_MD5.png)

授权 MinerU 插件

### 常见问题

配置完以后在工作流中试用会提示以下错误

![MinerU插件常见错误](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/017fa968cc1f7833d6744420112ac966_MD5.png)

MinerU 插件常见错误

对此我们可以参考 MinerU 官方给出的解决方案：

> 1. 找到 Dify 部署目录，打开. Env 文件，修改 FILES\_URL 配置项，依据你的部署方式填写：
> 
> \-Docker Compose 部署：FILES\_URL 设置为http://api:5001
> 
> \-其他部署方式：FILES\_URL 设置为 http://Dify宿主机IP:5001
> 
> 2. 确认 Dify API 服务的 5001 端口已对外暴露（可检查 docker-compose. Yaml 文件的端口映射）。
> 
> 3. 保存. Env 文件。
> 
> 4. 重启 Dify 服务以使配置生效。

我们根据官方提示，修改 Dify 的配置文件 `.env` ，然后重启 Dify。

### 工作流测试

搭建一个简单的 Dify 工作流，测试下 MinerU 插件的效果。

![](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/a8d267770afe01eebf22a2f5d4682b18_MD5.png)

我们拿官方发布的文章来试验\[https://mp.weixin.qq.com/s/fLd6yzM3KttWofXCdgDomA \]，打印成 PDF，有 22 页。

![官方文章](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/bd6eec60eee9cc11db0ecf0c47b8ab5b_MD5.png)

上传到工作流进行测试。

![测试结果](./%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2MinerU%201.3.10%20API%E5%B9%B6%E6%8E%A5%E5%85%A5Dify%E6%8F%92%E4%BB%B6%20-%2053AI-AI%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9F%A5%E8%AF%86%E5%BA%93%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%E6%99%BA%E8%83%BD%E4%BD%93%E5%BC%80%E5%8F%91.assets/ef0c2b85de110e3d679b7d82aa1f6ae5_MD5.png)

成功实现了图片型 PDF 的识别。新版本 MinerU 优化以后，不仅显存占用下降了，速度也挺快。22 页的图片 PDF，整个工作流用了 20s 就解析完成了。

  

53AI，企业落地大模型首选服务商

**产品** ：场景落地咨询+大模型应用平台+行业解决方案

**承诺** ：免费场景 POC 验证，效果验证后签署服务协议。 **零风险落地应用大模型** ，已交付 160+中大型企业

热点资讯 [53AI Studio：高准确率是企业级AI应用的“终局之选”](https://www.53ai.com/news/dify/2025062539650.html)

[

手把手教你在本地部署 MinerU 1.3.10 API 并接入 Dify 插件

](https://www.53ai.com/news/dify/2025060447125.html)[

速看！最新版 Dify 连接 Ollama 与 vLLM 全攻略

](https://www.53ai.com/news/dify/2025042817568.html)[

Dify 实现 AI 智能体工作流实战手册

](https://www.53ai.com/news/dify/2025060386095.html)[

Dify 升级指南：1.1.13->1.3.1

](https://www.53ai.com/news/dify/2025050875983.html)[

在 Dify 中使用本地 MCP 工具

](https://www.53ai.com/news/dify/2025050869753.html)[

Dify 支持视频生成了！附 AI 视频应用搭建教程

](https://www.53ai.com/news/dify/2025060256410.html)[

MinerU-API | 支持多格式解析，进一步提升 Dify 文档能力

](https://www.53ai.com/news/dify/2025051909876.html)[

如何在 dify 对话中使用表单 Form 打造一个可对话的客服工单反馈系统？

](https://www.53ai.com/news/dify/2025052954819.html)[

DifyAI 关键技术深度剖析

](https://www.53ai.com/news/dify/2025062908679.html)

大家都在问[万字演讲：Dify 插件如何助力 AI Agent 应用开发？](https://www.53ai.com/news/dify/2025062621864.html)

[

万字演讲：Dify 插件如何助力 AI Agent 应用开发？

](https://www.53ai.com/news/dify/2025061779354.html)[

如何在 dify 对话中使用表单 Form 打造一个可对话的客服工单反馈系统？

](https://www.53ai.com/news/dify/2025052954819.html)[

怎么用 dify 搭建一个工单系统？

](https://www.53ai.com/news/dify/2025052882035.html)[

如何使用 Dify 搭建自己的工作流？

](https://www.53ai.com/news/dify/2025052253628.html)[

Docker 部署 dify 连接 ollama 模型报错？

](https://www.53ai.com/news/dify/2025042732856.html)[

从开发角度对比 dify 和 n8n：哪个更适合你？

](https://www.53ai.com/news/dify/2025041580642.html)[

Dify 实现 DeepResearch 工作流拆解并再看升级版 Dify 能否搭建出 Manus？

](https://www.53ai.com/news/dify/2025032008746.html)
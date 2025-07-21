---
title: "ComfyUI FLUX.1 Kontext （Dev、Pro、Max）完整使用指南：原生工作流、API调用与提示词优化 | ComfyUI Wiki"
source: "https://comfyui-wiki.com/zh/tutorial/advanced/image/flux/flux-1-kontext#%E7%9B%B8%E5%85%B3%E6%A8%A1%E5%9E%8B%E4%BF%9D%E5%AD%98%E4%BD%8D%E7%BD%AE"
author:
published: 2025-07-15
created: 2025-07-18
description: "全面掌握FLUX.1 Kontext 各版本在ComfyUI中的图像编辑技术：涵盖原生工作流配置、GGUF/FP8多版本模型使用、API节点调用、多轮编辑技巧、角色一致性保持、提示词优化策略等核心技能，从基础入门到高级应用的完整实战指南"
tags:
  - "clippings"
---
## ComfyUI FLUX.1 Kontext （Dev、Pro、Max）完整使用指南：原生工作流、API调用与提示词优化

ComfyUI Flux.1 Kontext Dev Native Support

FLUX.1 Kontext 是一个专为文本和图像驱动编辑设计的生成式模型套件。与传统的文本到图像（T2I）模型不同，Kontext 支持基于上下文的图像处理，能够同时理解图像和文本内容，实现更精确的图像编辑功能。

**FLUX.1 Kontext 模型特点**

- **同图像连续编辑** ：在多个编辑步骤中保持同一图像的一致性
- **精确对象修改** ：准确修改图像中的特定对象
- **角色一致性编辑** ：在多步编辑过程中保持角色特征不变
- **风格保持与转换** ：既能保持原有风格，也能进行风格迁移
- **图像文字编辑** ：直接编辑图像中的文本内容
- **构图控制** ：精确控制画面构图、相机角度和姿态
- **快速推理** ：高效的图像生成和编辑速度

## Pro、Max 和 Dev 版本对比

- Pro 和 Max 版本一如既往，是 Black forest Lab 相关模型的最顶尖的能力仅可以通过 API 来调用
- Dev 版本是开源版本供社区学习和研究使用，目前已经开源。相关的代码和模型权重地址都可以在 [官网](https://bfl.ai/models/flux-kontext#get-started) 找到。

Dev 版本是不可商用的，但是你也可以购买 Dev 版本的 License 来使用，具体请参考 [Black Forest Labs 官网](https://bfl.ai/models/flux-kontext#get-started) 购买商用的许可。

相对于 Pro 和 Max 版本， Dev 版本在实际使用中会需要花更多时间来撰写提示词，不会像 Pro 和 Max 版本那样使用简单的提示词就可以得到不错的结果。

在有些提示词下，Dev 版本可能完全不会对图像进行任何的编辑，这需要你再对提示词进行调整和修改。

**本篇教程内容介绍**

在本篇教程中我们将会涉及以下内容：

1. 基础的 Flux.1 Kontext Dev 原生工作流 （fb16,fp8\_scaled,gguf）
2. Flux.1 Kontext 加速（Nunchaku、TeaCake）
3. 多轮次图像编辑实现
4. 多图像参考的方法
5. Flux.1 Kontext Dev 图像输入标记建议
6. Flux.1 Kontext API 节点工作流（Pro、Max）
7. Flux.1 Kontext 提示词使用指南

## Flux.1 Kontext Dev 相关模型

由于在本篇教程中涉及了多个不同版本模型的使用，所以在这里我们相对模型和权重进行一个简单的介绍。 Flux.1 Kontext Dev 模型除了 Diffusion models 之外，其它模型（Text Encoder、VAE）和原来的 Flux 系列的模型是一致的，如果你之前有使用过相关工作流，那么你仅需要下载 Flux.1 Kontext Dev 的相关模型即可。

### Kontext 模型的不同版本

这里我收集了三个不同版本的模型，你可以按需要选择一个下载即可，其中 **原始版本** 和 **Fp8 版本** 在 ComfyUI 中使用和存储位置都是相同的，而 **GGUF** 版本则需要保存到 `ComfyUI/models/Unet/` 目录下，并使用 [ComfyUI-GGUF](https://github.com/city96/ComfyUI-GGUF) 的 **Unet Loader (GGUF)** 节点进行加载。

**Flux.1 Kontext Dev 原始模型权重及社区版本**

- Black Forest Labs原始版本： [flux1-kontext-dev.safetensors](https://huggingface.co/black-forest-labs/FLUX.1-Kontext-dev/blob/main/flux1-kontext-dev.safetensors)
- ComfyOrg 提供的 FP8 版本： [flux1-dev-kontext\_fp8\_scaled.safetensors](https://huggingface.co/Comfy-Org/flux1-kontext-dev_ComfyUI/blob/main/split_files/diffusion_models/flux1-dev-kontext_fp8_scaled.safetensors)
- 社区 GGUF 版本： [FLUX.1-Kontext-dev-GGUF](https://huggingface.co/bullerwins/FLUX.1-Kontext-dev-GGUF/tree/main)
- Nunchaku 加速推理版: [nunchaku-flux.1-kontext-dev](https://huggingface.co/mit-han-lab/nunchaku-flux.1-kontext-dev/)

**Flux.1 Kontext Dev 不同版本模型模型效果及显存要求对比**

![Flux.1 Kontext Dev 不同类型模型对比](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/0b351727128094ce4adbce08713f5a97_MD5.jpg)

Flux.1 Kontext Dev 不同类型模型对比

### Text Encoder

- [clip\_l.safetensors](https://huggingface.co/comfyanonymous/flux_text_encoders/resolve/main/clip_l.safetensors)
- [t5xxl\_fp8\_e4m3fn\_scaled.safetensors](https://huggingface.co/comfyanonymous/flux_text_encoders/resolve/main/t5xxl_fp8_e4m3fn_scaled.safetensors) 或者 [t5xxl\_fp16.safetensors](https://huggingface.co/comfyanonymous/flux_text_encoders/resolve/main/t5xxl_fp16.safetensors)

### VAE

- [ae.safetensors](https://huggingface.co/Comfy-Org/Lumina_Image_2.0_Repackaged/blob/main/split_files/vae/ae.safetensors)

### 相关模型保存位置

```
📂 ComfyUI/
├── 📂 models/
│   ├── 📂 diffusion_models/
│   │   └── flux1-dev-kontext_fp8_scaled.safetensors 或者 flux1-kontext-dev.safetensors
│   ├── 📂 unet/
│   │   └── 如 flux1-kontext-dev-Q4_K_M.gguf， # 仅在你需要使用 GGUF 版本时下载
│   ├── 📂 vae/
│   │   └── ae.safetensors
│   └── 📂 text_encoders/
│       ├── clip_l.safetensors
│       └── t5xxl_fp16.safetensors or t5xxl_fp8_e4m3fn_scaled.safetensors
```

## ComfyUI Flux.1 Kontext Dev 原生基础工作流

对应基础部分的工作流程，由于我已经在 ComfyUI 的模板中为大家制作好了对应的模板，所以请在 ComfyUI 中找到 Flux.1 Kontext Dev 相关模板即可

![Flux.1 Kontext Dev 基础工作流](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/07d75c89b863bb5d64385771a57c7e1e_MD5.jpg)

Flux.1 Kontext Dev 基础工作流

### 1\. 工作流及示例素材下载

下载下面的文件，并拖入 ComfyUI 中加载对应工作流

![ComfyUI Flux.1 Kontext Pro Image API 节点 工作流](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/0dde50ea6599481c13b2d2d86ec5f958_MD5.png)

ComfyUI Flux.1 Kontext Pro Image API 节点 工作流

**输入图片**

![ComfyUI Flux Kontext 原生工作流输入](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/29d954c6d3f0c45512de3b12fca173d2_MD5.jpg)

ComfyUI Flux Kontext 原生工作流输入

### 2\. 按步骤完成工作流的运行

![工作流步骤图](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/1fdcc28f59734089258a7e86d0f71603_MD5.jpg) 你可参考图片中的序号来完成图工作流的运行：

1. 在 `Load Diffusion Model` 节点中加载 `flux1-dev-kontext_fp8_scaled.safetensors` 模型
2. 在 `DualCLIP Load` 节点中确保： `clip_l.safetensors` 及 `t5xxl_fp16.safetensors` 或 `t5xxl_fp8_e4m3fn_scaled.safetensors` 已经加载
3. 在 `Load VAE` 节点中确保加载 `ae.safetensors` 模型
4. 在 `Load Image(from output)` 节点中加载提供的输入图像
5. 在 `CLIP Text Encode` 节点中修改提示词，仅支持英文
6. 点击 `Queue` 按钮，或者使用快捷键 `Ctrl(cmd) + Enter(回车)` 来运行工作流

## FLux.1 Kontext Dev GGUF 版本工作流

使用 GGUF 模型需要使用 [ComfyUI-GGUF](https://github.com/city96/ComfyUI-GGUF) 的 **Unet Loader (GGUF)** 节点进行加载，请首先使用 [ComfyUI-Manager](https://github.com/Comfy-Org/ComfyUI-Manager) 安装对应插件，或者参考 [如何安装自定义节点](https://comfyui-wiki.com/zh/install/install-custom-nodes) 部分了解如何安装自定义节点。

其实相关工作流也比较简单，只需要使用 [Flux.1 Kontext Dev 基础工作流](https://comfyui-wiki.com/zh/tutorial/advanced/image/flux/#comfyui-flux1-kontext-dev-%E5%8E%9F%E7%94%9F%E5%9F%BA%E7%A1%80%E5%B7%A5%E4%BD%9C%E6%B5%81) 中的工作流，并使用 `Unet Loader (GGUF)` 节点替换 `Load Diffusion Model` 节点即可。

### 工作流文件下载

![输入图片](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/b0f08ca0e01df35fb0e519f55b08a96d_MD5.jpg)

### 步骤说明

![Flux.1 Kontext Dev GGUF 版本工作流](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/6c6c74b67a80bbe64ee2a7994130d0e8_MD5.jpg)

Flux.1 Kontext Dev GGUF 版本工作流

1. 在 `Unet Loader (GGUF)` 节点中加载 `flux1-kontext-dev-Q4_K_M.gguf` （或者其它版本）
2. 在 `DualCLIP Load` 节点中确保： `clip_l.safetensors` 及 `t5xxl_fp16.safetensors` 或 `t5xxl_fp8_e4m3fn_scaled.safetensors` 已经加载
3. 在 `Load VAE` 节点中确保加载 `ae.safetensors` 模型
4. 在 `Load Image(from output)` 节点中加载提供的输入图像
5. 在 `CLIP Text Encode` 节点中修改提示词，仅支持英文
6. 点击 `Queue` 按钮，或者使用快捷键 `Ctrl(cmd) + Enter(回车)` 来运行工作流

## Flux.1 Kontext Dev 加速推理版

这个部分将涉及两个Flux.1 Kontext Dev 的加速, Nunchaku 和 TeaCache,两个版本

- Nunchaku 需要配合专门的模型
- TeaCache 可以配合原生工作流和 GGUF 工作流来进行

### Flux.1 Kontext Dev Nunchaku 加速推理版

Nunchaku 加速推理版是 MIT-HAN-LAB 提供的一个加速推理版本，这个版本需要搭配对应的模型来使用，目前有提供了两个版本的模型：

- 针对 **Blackwell架构的 50系显卡专用版本**:[svdq-fp4\_r32-flux.1-kontext-dev.safetensors](https://huggingface.co/mit-han-lab/nunchaku-flux.1-kontext-dev/resolve/main/svdq-fp4_r32-flux.1-kontext-dev.safetensors)
- **其它显卡** ： [svdq-int4\_r32-flux.1-kontext-dev.safetensors](https://huggingface.co/mit-han-lab/nunchaku-flux.1-kontext-dev/resolve/main/svdq-int4_r32-flux.1-kontext-dev.safetensors)

对应模型同样需要安装下载至 `ComfyUI/models/diffusion_models/` 目录下。

你可以参考这个视频完成相应的工作流教程：

Nunchaku 加速推理版安装演示

![](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/97618286720696af3e94941f91582ffc_MD5.unknown)

> 视频里加载工作流是从我的自定义节点 [ComfyUI-Wiki-Workflows](https://github.com/comfyui-wiki/ComfyUI-Wiki-Workflows) 中加载的这是一个仅有工作流的自定义节点不会有任何的依赖冲突。

#### 1\. 自定义节点安装

插件地址： [ComfyUI-nunchaku](https://github.com/mit-han-lab/ComfyUI-nunchaku)

使用 Nunchaku 的模型需要专门使用 Nunchaku 的节点，并安装好对应的 wheel,请参考 [如何安装自定义节点](https://comfyui-wiki.com/zh/install/install-custom-nodes) 部分了解如何安装自定义节点。

1. 在首次安装完成后，由于对应的 wheel 没有安装，所以仍旧会有一两个节点提示缺失，需要安装好 Wheel
2. 使用 “Nunchaku Wheel Installer” 节点来安装 wheel, 安装成功后重启 ComfyUI 即可

#### 2\. 工作流文件下载

请下载下面的图片作为输入图片

![输入图片](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/f09b030aa70a8d957ebb55c5fac486b5_MD5.png)

#### 3\. 按步骤完成工作流运行

![Flux.1 Kontext Dev Nunchaku 加速推理版工作流步骤](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/f1191b812a2629a777d1482fcf3748ec_MD5.jpg)

Flux.1 Kontext Dev Nunchaku 加速推理版工作流步骤

1. 参照备注, 首次运行删除 **Step-0** 之外的节点，然后运行工作流以安装 Nunchaku 的 Wheel, 之后重启 ComfyUI 再加载工作流
2. 对应模型链接和自定义节点链接已在对应 Markdown 节点中提供
3. 确保所有的模型都正确加载（区分 **Blackwell** 架构的显卡和其它显卡的模型类型）
4. 在 `Load Image(from output)` 节点中加载提供的输入图像
5. 在 `CLIP Text Encode` 节点中修改提示词，仅支持英文
6. 点击 `Queue` 按钮，或者使用快捷键 `Ctrl(cmd) + Enter(回车)` 来运行工作流

如果你有遇到 Nunchaku 相关的安装问题， [ComfyUI-nunchaku](https://github.com/mit-han-lab/ComfyUI-nunchaku) 获取更多帮助。

### Flux.1 Kontext Dev TeaCache 加速版本

这个版本需要安装 [ComfyUI-Teaache](https://github.com/welltop-cn/ComfyUI-TeaCache) 插件，你可以在加载工作流之后使用 ComfyUI Manager 安装缺失节点的功能来完成

#### 1\. 工作流文件

依旧使用这张图片作为输入

![输入图片](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/f09b030aa70a8d957ebb55c5fac486b5_MD5.png)

#### 2\. 按步骤完成工作流运行

![Flux.1 Kontext Dev TeaCache 加速版本工作流步骤](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/69efbed56d77c5a38e0539db8de77d11_MD5.jpg)

Flux.1 Kontext Dev TeaCache 加速版本工作流步骤

1. 在 `Load Diffusion Model` 节点中加载 `flux1-dev-kontext_fp8_scaled.safetensors` 模型
2. 在 `DualCLIP Load` 节点中确保： `clip_l.safetensors` 及 `t5xxl_fp16.safetensors` 或 `t5xxl_fp8_e4m3fn_scaled.safetensors` 已经加载
3. 在 `Load VAE` 节点中确保加载 `ae.safetensors` 模型
4. 在 `Load Image(from output)` 节点中加载提供的输入图像
5. `TeaCache` 节点已经应用了默认的设置，你可以不用调整，如果你发现这个节点缺失，请使用 ComfyUI-Manager 安装 [ComfyUI-Teaache](https://github.com/welltop-cn/ComfyUI-TeaCache)
6. 在 `CLIP Text Encode` 节点中修改提示词，仅支持英文
7. 点击 `Queue` 按钮，或者使用快捷键 `Ctrl(cmd) + Enter(回车)` 来运行工作流

## Flux.1 Kontext Dev 多轮次图像编辑实现

### 1\. 使用 Load Image(from output) 节点

对于多轮编辑，在此次 Flux.1 Kontext Dev 的相关发布支持中， **Load Image(from output)** 节点的一个潜在问题已经被修复，在 basic 的工作流中，你可以直接使用 `Load Image(from output)` 节点来加载上一轮的输出图像，并使用 `Load Image(from output)` 节点来加载上一轮的输出图像

![Load Image(from output) 节点](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/098228c7c7c94613a411b4ed39706d77_MD5.jpg)

Load Image(from output) 节点

![Load Image(from output) 节点](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/5e8d753fb6aebde4cdcfd08d06daea52_MD5.jpg)

Load Image(from output) 节点

当你想要对当前的工作流结果进行编辑时，点击 `refresh` 按钮即可获取到最新的一个输出图像然后在重新运行工作流即可。

### 2\. 使用组节点

组节点是针对 Flux.1 Kontext Dev 版本新增的一个功能，在选择工具箱中新增了一个快速添加组节点的 `编辑` 按钮，具体使用方式请参考下面这个视频：

ComfyUI new feature for Flux.1 Kontext Dev

你可以从 `Load Image` 节点开始，然后使用对应的选择工具箱功能来完成对应的新增组节点的添加：

- 由于每个组节点的种子是固定的，所以仅有最后一个组节点会运行
- 当你对结果不满意时可以改变种子重新运行工作流
- 可以创建分支，探索不同分支和编辑效果

## 多图输入参考

对于多图输入，目前的 ComfyUI 内有两种实现方式：

- 将多张图像拼合为一张图像，使用 **Image Stitch** 节点
- 将不同图像分别编码到 潜空间（Latent Space），然后将多个 **ReferenceLatent** 节点的条件串联

下面是两种方式的对比： ![多图输入对比](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/1dd5cb4bc76885a728a631df7ea08fbb_MD5.jpg)

1. **Image Stitch** 节点在多图输入时效果更好
2. 使用 **ReferenceLatent** 节点串联时：
	- 当输入的角色数量较多时，它经常会混合不同主体的特征，难以保持一致性
	- 输入多个角色，它有时总会丢失一个两个角色

### 1\. 使用 Image Stitch 节点

这个思路比较简单就是将多张图像拼合为一张然后作为单独图像输入，在模板中，只要将另一个 `Load Image` 节点选中然后用 Ctrl+ B 即可启动多图输入功能。

![多图输入](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/861d02b6d07aac0d79d76cba8a336b50_MD5.jpg)

在这种情况下，由于拼合后的图像尺寸可能不一定是预期的尺寸大小，比如想要 1:1 的尺寸，但拼合后的图像可能不是 1:1 这时候建议使用一个 `EmptySD3LatentImage` 节点来自定义 Latent 空间的大小将其连接到 KSampler 节点中来自定义输出的尺寸。

当然对于拼合的图像输入模式这种方式，我仍旧有一些使用建议：

![多图输入建议](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/d2a4aa30cdeb68eeae816088eea6ef80_MD5.jpg)

1. 注意拼合后物体的相对尺寸大小，合适的相对大小可以带来更好的输出结果
2. 主要参考图像的尺寸应该占比较大，这样会使用更多它的图像特征

### 2\. 使用 ReferenceLatent 串联节点

![串联节点ReferenceLatent](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/2b0f8d069afa4812b707e997c61b6a98_MD5.jpg)

串联节点ReferenceLatent

1、2 序号时将不同的图像编码，序号 3 时将多个图像的编码结果串联，然后使用 `ReferenceLatent` 节点来使用，同样在 序号 4 里，可以用来 `EmptySD3LatentImage` 自定义尺寸

![串联](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/4afe2a23e7eb4828661ae3ba2ad0672b_MD5.jpg)

## Flux.1 Kontext Dev 图像标记输入

在输入参考图像时，你可以在输入图像中使用一些标记来让模型更容易识别你想要编辑的区域：

1. 比如想要编辑重绘区域，建议使用半透明的红色遮罩标记想要修改的地方
2. 红色框标记在 Flux.1 Kontext Pro 和 Max 的 API 版本中识别能力较好，但是在 Flux.1 Kontext Dev 中识别能力没有那么准确，建议使用一个半透明的遮罩来标记想要修改的地方，或者需要让这个红色框元素更突出一些
3. 半透明的遮罩能够让物体模型了解原始图像的特征，这在重绘的时候会比较有用。

![Flux.1 Kontext Ddev 图像标记使用](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/51871e56bf3d32c6231c3bc71a94d699_MD5.jpg)

Flux.1 Kontext Ddev 图像标记使用

## 通过 API 在 ComfyUI 中使用 FLUX.1 Kontext Pro 及 Max

FLUX.1 Kontext 目前以 **API 节点** 的形式在 ComfyUI 中提供服务，我已经在 ComfyUI文档中撰写了比较完整的使用教程。

[FLUX.1 Kontext API 节点官方使用教程](http://docs.comfy.org/tutorials/api-nodes/black-forest-labs/flux-1-kontext)

1. 请更新你的 ComfyUI Portable 或者 Desktop 到最新版本。
2. 在菜单栏中选择 **工作流** -> **浏览模板** -> **Image API** 分类，找到 FLUX.1 Kontext 相关模板。

![FLUX.1 Kontext 模板](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/d6c91dff033bad86bc2c157ffdf76871_MD5.jpg)

FLUX.1 Kontext 模板

使用 API 节点需要你登录，并保证在账户中有充足的余额，请参考 [ComfyUI API 节点概览](http://docs.comfy.org/tutorials/api-nodes/overview) 了解积分系统。

由于对应节点使用非常简单，基本上就是在 API Node 中找到 `Flux.1 Kontext [pro] Image` 或者 `Flux.1 Kontext [pro] Image` 节点使用 `Load Image` 以及 `Save Image` 节点即可。

![FLUX.1 Kontext (Max Image) 编辑步骤](./ComfyUI%20FLUX.1%20Kontext%20%EF%BC%88Dev%E3%80%81Pro%E3%80%81Max%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%EF%BC%9A%E5%8E%9F%E7%94%9F%E5%B7%A5%E4%BD%9C%E6%B5%81%E3%80%81API%E8%B0%83%E7%94%A8%E4%B8%8E%E6%8F%90%E7%A4%BA%E8%AF%8D%E4%BC%98%E5%8C%96%20_%20ComfyUI%20Wiki.assets/4943af3898d0e46c7059c20b703a1a9f_MD5.jpg)

FLUX.1 Kontext (Max Image) 编辑步骤

1. 在 `Load Image` 节点中加载需要编辑的图像
2. 在 `Flux.1 Kontext Pro Image` 或者 `Flux.1 Kontext Max Image` 节点中修改必要的参数：
	- `prompt` 输入你想要编辑的图像的提示词
	- `aspect_ratio` 设置原图的高宽比，比例必须在 1:4 到 4:1 之间
	- `prompt_upsampling` 设置是否使用提示词上采样，如果开启，会自动修改提示词以获得更丰富的结果，但结果是不可重复的
3. 点击 `Run` 按钮，或者使用快捷键 `Ctrl(cmd) + Enter(回车)` 来执行图像的编辑。
4. 等待 API 返回结果后，你可在 `Save Image` 节点中查看编辑后的图像，对应的图像也会被保存至 `ComfyUI/output/` 目录下。

## FLUX.1 Kontext 提示词完全使用指南

### AI 提示词生成器

对于这个部分我创建了一个提示词生成器，你可以使用下面的提示词来让 AI 帮你生成提示词：

```
# FLUX.1 Kontext 提示词生成助手
 
你是一位专业的 FLUX.1 Kontext 图像编辑提示词专家。你的任务是帮助用户生成高质量、精确的 Kontext 提示词,以实现他们想要的图像编辑效果。
 
## 欢迎信息
 
当用户首次与你互动时,请用以下信息问候:
 
---
 
👋 **欢迎使用 FLUX.1 Kontext 提示词生成器!**
 
我在这里帮助你为 FLUX.1 Kontext 图像编辑创建完美的提示词。我可以协助你:
 
✨ **对象修改** (颜色、纹理、形状)
🎨 **风格转换** (艺术风格、滤镜、效果)  
🌟 **场景转换** (背景、光照、氛围)
👤 **角色一致性** (在编辑过程中保持身份特征)
📝 **文本编辑** (标志、标签、排版)
 
**开始使用:**
- 描述你想要在图像中改变什么
- 上传图片(可选)
- 告诉我你的编辑目标
 
对于复杂的转换,我会提供:
- 🚀 **一步到位方案** (单个综合提示词)
- 📋 **逐步方案** (多个连续提示词)
 
所有提示词将使用**英语**生成以获得最佳 Kontext 性能。
 
**今天想要编辑什么?** 🎯
 
---
 
## 核心原则
 
### 1. 精确优先
- 使用具体描述而不是模糊术语
- 明确指定颜色、风格、动作和其他细节
- 避免主观表达如"让它看起来更好"
- 记住:最大提示词限制为 512 个 token
- **重要提示:所有提示词必须使用英语生成**
 
### 2. 保持一致性
- 明确指定应保持不变的元素
- 使用"while maintaining..."等短语来保护重要特征
- 避免意外改变用户不想修改的元素
 
### 3. 逐步处理
- 建议将复杂修改分解为多个步骤
- 每次编辑专注于一个主要改变
- 利用 Kontext 的迭代编辑能力
 
## 提示词结构模板
 
### 基本对象修改
\`Change the [specific object]'s [specific attribute] to [specific value]\`
 
示例: "Change the car color to red"
 
### 风格转换
\`Convert to [specific style] while maintaining [elements to preserve]\`
 
示例: "Convert to pencil sketch with natural graphite lines, cross-hatching, and visible paper texture"
 
### 背景/环境改变
\`Change the background to [new environment] while keeping the [subject] in the exact same position, scale, and pose. Maintain identical subject placement, camera angle, framing, and perspective.\`
 
### 角色一致性
\`[Action/change description] while preserving [character's] exact facial features, [specific characteristics], and [other identity markers]\`
 
### 文本编辑
\`Replace '[original text]' with '[new text]'\`
 
示例: "Replace 'joy' with 'BFL'"
 
## 高级技巧
 
### 风格转换:
1. **指定具体风格**: 不要用"make it artistic",而要用"Transform to Bauhaus art style"
2. **引用知名艺术家/流派**: "Renaissance painting style," "1960s pop art poster"
3. **详述关键特征**: "Oil painting with visible brushstrokes, thick paint texture, and rich color depth"
4. **保留重要内容**: "while maintaining the original composition and object placement"
 
### 角色一致性:
1. **建立参考**: 用"The woman with short black hair"而不是"her"
2. **指定转换**: 环境、活动或风格变化
3. **保留身份标记**: "maintaining the same facial features, hairstyle, and expression"
 
### 构图控制:
- 使用"exact same position, scale, and pose"
- 添加"Only replace the environment around them"
 
## 常见问题解决模式
 
### 当身份变化过大时:
- 添加: "while preserving exact facial features, eye color, and facial expression"
- 使用: "Change the clothes to [description]"而不是"Transform the person into [description]"
 
### 当构图发生偏移时:
- 添加: "while keeping the person in the exact same position, scale, and pose"
- 指定: "Maintain identical subject placement, camera angle, framing, and perspective"
 
### 当风格应用不正确时:
- 更具体地描述风格特征
- 为重要元素添加保留说明
- 使用详细的风格描述而不是泛泛而谈
 
## 动词选择指南
 
- **"Transform"** → 暗示完全改变,谨慎使用
- **"Change the [specific element]"** → 更受控的修改
- **"Replace the [specific element]"** → 针对性替换
- **"Convert to [style]"** → 以风格为重点的转换
 
## 最佳实践检查清单
 
生成提示词时,确保:
- [ ] 使用具体而非模糊的语言
- [ ] 为不变元素提供清晰的保留说明
- [ ] 根据所需变化程度选择适当的动词
- [ ] 直接命名主体而不是使用代词
- [ ] 为要编辑的文本加上引号
- [ ] 对复杂变化采用逐步方法
- [ ] 必要时进行明确的构图控制
 
## 对话流程管理
 
### 理解用户上下文
- 每次对话可能涉及不同的编辑请求
- 用户可能提供参考图像或口头描述图像
- 请求可能从简单的对象更改到复杂的场景转换
- 如果用户意图不清晰,始终要求澄清
 
### 处理参考图像
当用户提供图像时:
- 分析图像内容并识别关键元素
- 询问具体想要改变什么
- 确定应该保留的元素
- 考虑图像的风格、构图和主题
 
当用户描述图像而不提供时:
- 询问图像内容的关键细节
- 明确当前状态与期望状态
- 请求关于需要保留的重要元素的信息
 
## 响应格式
 
当用户请求 Kontext 提示词时,提供:
 
### 简单请求:
1. **优化提示词**: 单个精心制作的指令
2. **故障排除提示**: 潜在问题和解决方案
 
### 复杂请求:
始终提供两种版本:
 
1. **一步到位方案**: 
   - 单个综合提示词尝试完成全部转换
   - 警告关于复杂单步编辑的潜在问题
   
2. **逐步方案**: 
   - 按逻辑步骤分解的连续提示词
   - 解释为什么推荐这种方法
   - 清晰的编号和操作顺序
 
3. **建议**: 解释哪种方法可能更好以及原因
 
## 示例响应结构
 
### 示例 1: 简单请求
**用户请求**: "将汽车颜色改为蓝色"
 
**优化提示词**: 
"Change the car color to deep blue while maintaining the same car model, position, lighting, and background"
 
**故障排除**: 如果其他元素意外改变,添加"keeping everything else exactly the same"
 
### 示例 2: 复杂请求
**用户请求**: "我想将白天的街景照片转换为赛博朋克风格的夜景,带有霓虹灯和未来元素"
 
**一步到位方案**: 
"Transform the daytime street scene into a cyberpunk night environment with neon lights, holographic advertisements, futuristic architecture, and atmospheric fog, while maintaining the same camera angle, street layout, and overall composition"
 
*⚠️ 警告: 这种复杂的一步转换可能会改变非预期元素或丢失重要细节。*
 
**逐步方案** (推荐):
1. "Change the lighting from daytime to nighttime with dark sky and street lighting"
2. "Add neon signs and colorful neon lighting to buildings and storefronts"
3. "Transform the architecture to have more futuristic, cyberpunk elements while keeping the street layout"
4. "Add atmospheric effects like fog, light rays, and holographic advertisements"
 
**建议**: 强烈推荐使用逐步方案进行这种复杂转换,因为它能更好地控制每个元素并减少不必要的变化风险。
 
### 示例 3: 带参考图像分析
**用户请求**: *[提供公园中一位女士的图片]* "让她看起来像在中世纪奇幻场景中"
 
**图像分析问题**:
- 是否要保持她的现代服装还是改为中世纪服装?
- 是否要保持她的确切外貌和姿势?
- 公园场景是否要变成中世纪景观,还是只添加奇幻元素?
 
**一步到位方案**: 
"Transform the park setting into a medieval fantasy landscape with castles, ancient trees, and mystical atmosphere, while changing her clothing to medieval dress and maintaining her exact facial features, pose, and expression"
 
**逐步方案**:
1. "Change her modern clothing to a medieval dress while preserving her exact facial features and pose"
2. "Transform the park background into a medieval landscape with ancient trees and stone pathways"
3. "Add fantasy elements like a distant castle and mystical lighting atmosphere"
 
**建议**: 推荐使用逐步方案以确保整个转换过程中角色特征的一致性。
 
## 自适应对话指南
 
### 首次互动:
- 使用上述欢迎信息问候新用户
- 如果他们提供图像,分析并询问澄清问题
- 如果他们描述图像,询问当前与期望状态的关键细节
- 引导他们了解你可以提供帮助的能力
 
### 后续互动:
- 每个新请求都应视为新的编辑目标
- 在相关时参考之前的对话上下文
- 根据新请求调整复杂度评估
- 对复杂请求始终提供两种方案
 
### 复杂度评估标准:
**简单请求** (单一提示词方案):
- 单个对象/属性更改
- 基本颜色修改
- 简单文本替换
- 轻微光照调整
 
**复杂请求** (提供两种方案):
- 多个同时更改
- 风格转换
- 场景/环境更改
- 角色/身份修改
- 需要构图控制的背景替换
 
### 沟通风格:
- 解释要清晰简洁
- 使用项目符号列出多步骤说明
- 提供潜在问题警告
- 解释建议背后的原因
- 必要时询问后续问题
- **无论用户使用何种语言,始终用英语生成提示词**
 
## 语言要求
 
**重要**: 所有 FLUX.1 Kontext 提示词必须仅用英语编写。即使用户使用其他语言交流,始终:
- 用用户的语言(如果与英语不同)进行解释
- **提示词仅使用英语**
- 清楚标明哪些部分是提示词,哪些是解释
 
当用户使用中文时的示例格式:
 
解释：这个提示词将会...
Prompt: "Change the car color to red while maintaining the same lighting and background"
 
记住: 只要每次编辑的指令数量不太复杂,把事情说得更明确总是有帮助的。始终将用户成功置于简洁之上。
```

### FLUX.1 Kontext 提示词基础知识

**重要提示** ：FLUX.1 Kontext 的最大提示词限制为 **512 个 token** ，请合理安排提示词长度。

请使用英文书写对应提示词 Kontext 的核心优势在于理解图像上下文，您只需指定想要改变的内容，无需详细描述整个场景。这使得图像编辑变得更加简单直观。

### FLUX.1 Kontext 基本对象修改

Kontext 在直接对象修改方面表现出色，例如改变颜色、替换物体等。

**基础修改示例** ：

| 修改类型 | 提示词示例 | 效果说明 |
| --- | --- | --- |
| 颜色修改 | ”Change the car color to red” | 仅改变汽车颜色，保持其他不变 |
| 物体替换 | ”Change the flowers to yellow” | 改变花朵颜色 |
| 简单添加 | ”Add an apple on the table” | 在现有场景中添加新物体 |

### 提示词精确度等级对比

不同详细程度的提示词会产生不同的编辑效果。以下是三个精确度等级的对比：

#### 等级对比表

| 精确度等级 | 特点 | 优势 | 劣势 | 适用场景 |
| --- | --- | --- | --- | --- |
| **简单编辑** | 简洁直接 | 快速便捷 | 可能改变原图风格 | 快速测试想法 |
| **受控编辑** | 添加保持指令 | 风格更稳定 | 提示词稍长 | 需要保持原图特征 |
| **复杂变换** | 详细描述所有要求 | 精确控制结果 | 提示词较长 | 多重修改需求 |

#### 具体示例对比

**场景：将夜景改为白天**

| 精确度等级 | 提示词 | 预期效果 |
| --- | --- | --- |
| 简单编辑 | ”Change to daytime” | 时间改变，但可能风格也会改变 |
| 受控编辑 | ”Change to daytime while maintaining the same style of the painting” | 时间改变，风格基本保持 |
| 复杂变换 | ”Change the setting to a day time, add a lot of people walking the sidewalk while maintaining the same style of the painting” | 多重修改，精确控制 |

### 风格转换完整指南

#### 风格转换原则表

| 原则 | 说明 | 好的示例 | 避免的示例 |
| --- | --- | --- | --- |
| **明确指定风格** | 使用具体风格名称 | ”Transform to Bauhaus art style" | "Make it artistic” |
| **引用知名流派** | 提及具体艺术运动 | ”1960s pop art poster style" | "Modern art style” |
| **描述关键特征** | 详细描述视觉元素 | ”Visible brushstrokes, thick paint texture" | "Make it look better” |
| **保留重要元素** | 明确保持的内容 | ”While maintaining the original composition and object placement” | 不指定保留内容 |

#### 风格转换提示词对比

**将照片转换为绘画风格**

| 效果类型 | 提示词 | 结果质量 |
| --- | --- | --- |
| ❌ 基础（可能失去细节） | “Make it a sketch” | 风格改变但细节丢失 |
| ✅ 改进（保持结构） | “Convert to pencil sketch with natural graphite lines, cross-hatching, and visible paper texture” | 风格转换且保留场景细节 |
| ✅ 最佳（全面控制） | “Convert to pencil sketch with natural graphite lines, cross-hatching, and visible paper texture while maintaining all background details and character features” | 完美平衡风格与细节 |

#### 常用风格转换提示词模板

| 风格类型 | 推荐提示词模板 |
| --- | --- |
| **油画风格** | ”Transform to oil painting with visible brushstrokes, thick paint texture, and rich color depth” |
| **水彩画风格** | ”Convert to watercolor painting with transparent colors, paper texture, and natural paint flow effects” |
| **铅笔素描** | ”Convert to pencil sketch with natural graphite lines, cross-hatching, and visible paper texture” |
| **动漫风格** | ”Transform to anime style with clear lines, vibrant colors, and typical anime character features” |
| **黏土动画** | ”Restyle to Claymation style with 3D sculpted texture and soft lighting effects” |

### FLUX.1 Kontext 角色一致性编辑框架

#### 角色一致性三步法

| 步骤 | 作用 | 示例 | 重要性 |
| --- | --- | --- | --- |
| **1\. 建立参考** | 明确角色身份 | ”The woman with short black hair” | ⭐⭐⭐⭐⭐ |
| **2\. 指定变换** | 说明改变内容 | ”Now in a tropical beach setting” | ⭐⭐⭐⭐ |
| **3\. 保留标记** | 明确保持特征 | ”While maintaining the same facial features and expression” | ⭐⭐⭐⭐⭐ |

#### 角色描述用词对比

| 描述方式 | 效果 | 示例 | 推荐度 |
| --- | --- | --- | --- |
| ❌ 代词引用 | 容易混淆身份 | ”She”, “He”, “This person” | 不推荐 |
| ✅ 具体描述 | 身份明确 | ”The woman with short black hair” | 强烈推荐 |
| ✅ 特征标记 | 精确识别 | ”The man with glasses”, “The girl in red coat” | 推荐 |

#### 连续编辑示例序列

**角色：年轻女性**

| 编辑步骤 | 提示词 | 目标 |
| --- | --- | --- |
| 步骤 1 | ”She’s now taking a selfie in a street in Freiburg, it’s a lovely day out” | 改变环境和活动 |
| 步骤 2 | ”Remove the thing from her face” | 移除特定物品 |
| 步骤 3 | ”It’s now snowing, everything is covered in snow” | 改变天气环境 |

### 文字编辑专项技巧

#### 文字编辑语法规则

| 编辑类型 | 语法格式 | 示例 |
| --- | --- | --- |
| **替换文字** | ”Replace ‘\[original text\]’ with ‘\[new text\]‘" | "Replace ‘joy’ with ‘BFL‘“ |
| **修改样式** | ”Replace ‘\[original text\]’ with ‘\[new text\]’ while maintaining \[style requirements\]" | "Replace ‘SALE’ with ‘OPEN’ while maintaining the same font style and color” |
| **添加文字** | ”Add text ‘\[content\]’ at \[position\]" | "Add text ‘WELCOME’ on the sign” |

#### 文字编辑最佳实践对比

| 做法 | 效果 | 示例 |
| --- | --- | --- |
| ✅ 使用引号包围 | 精确识别目标文字 | ”Replace ‘OPEN’ with ‘CLOSED’” |
| ❌ 不使用引号 | 可能识别错误 | ”Change OPEN to CLOSED” |
| ✅ 指定保持样式 | 保持原有视觉效果 | ”While maintaining the same font style and color” |
| ❌ 不指定保持 | 可能改变整体设计 | 仅指定文字内容 |

### FLUX.1 Kontext 问题排除对照表

#### 常见问题及解决方案

| 问题类型 | 问题表现 | 错误示例 | 正确解决方案 |
| --- | --- | --- | --- |
| **角色身份改变** | 人物面部特征变化过大 | ”Transform the person into a Viking" | "Transform the man into a viking warrior while preserving his exact facial features, eye color, and facial expression” |
| **构图位置偏移** | 主体位置或比例改变 | ”Put him on a beach" | "Change the background to a beach while keeping the person in the exact same position, scale, and pose” |
| **风格细节丢失** | 转换风格时丢失重要细节 | ”Make it a sketch" | "Convert to pencil sketch with natural graphite lines, cross-hatching, and visible paper texture while preserving all scene details” |
| **意外元素改变** | 不想改变的部分被修改 | ”Change to daytime" | "Change to daytime while everything else should stay black and white and maintain the original style” |

#### 动词选择对效果的影响

| 动词类型 | 含义强度 | 适用场景 | 示例 |
| --- | --- | --- | --- |
| **”Transform”** | 完全改变 | 风格完全改变时 | ”Transform to oil painting style" |
| **"Change”** | 部分修改 | 修改特定元素时 | ”Change the clothing color" |
| **"Replace”** | 直接置换 | 物体或文字替换时 | ”Replace the background with forest" |
| **"Add”** | 增加元素 | 在现有基础上增加时 | ”Add a small bird" |
| **"Remove”** | 删除元素 | 去除不需要的内容时 | ”Remove the cars from background” |

### FLUX.1 Kontext 高级提示词组合技巧

#### 多重编辑提示词结构

**模板格式** ：

```
[主要修改] + [保持要求] + [细节说明]
```

**实际示例** ：

| 编辑需求 | 按模板组织的提示词 |
| --- | --- |
| 改变背景+保持人物 | ”Change the background to a forest scene while keeping the person in exactly the same position and pose, maintaining the original lighting” |
| 风格转换+保持构图 | ”Transform to watercolor painting style while maintaining the original composition and all object positions, using soft color transitions” |
| 多对象修改 | ”Change the car to red and the sky to sunset colors while keeping the road and buildings in their original appearance” |

#### 提示词优先级指南

| 优先级 | 内容类型 | 示例 |
| --- | --- | --- |
| **最高** | 保持人物身份 | ”While maintaining the exact same facial features” |
| **高** | 主要修改目标 | ”Change the background to beach” |
| **中** | 风格和质感 | ”Using watercolor painting style” |
| **低** | 细节补充 | ”Add soft lighting effects” |

### FLUX.1 Kontext 实用提示词检查清单

在使用提示词前，请检查以下要点：

#### 基础检查项

- 是否明确指定了要修改的内容？
- 是否说明了需要保持不变的元素？
- 提示词长度是否在512 token限制内？
- 是否使用了具体而非模糊的描述？

#### 高级检查项

- 角色编辑时是否用具体描述而非代词？
- 风格转换时是否描述了具体特征？
- 文字编辑时是否使用了引号？
- 是否选择了合适的动词（transform/change/replace）？

通过这个全面的提示词指南，您可以更好地掌握 FLUX.1 Kontext 的使用技巧，实现更精确的图像编辑效果。

### FLUX.1 Kontext 提示词最佳实践总结

1. **具体明确** ：精确的语言能带来更好的结果。使用准确的颜色名称、详细描述和清晰的动作动词，避免模糊术语。
2. **从简单开始** ：在增加复杂性之前先进行核心更改。首先测试基本编辑，然后在成功结果的基础上构建。
3. **有意保留** ：明确说明应保持不变的内容。使用”同时保持相同的\[面部特征/构图/光照\]“等短语来保护重要元素。
4. **必要时迭代** ：复杂的变换通常需要多个步骤。将剧烈变化分解为连续编辑以获得更好的控制。
5. **直接命名主体** ：使用”这位黑色短发的女性”或”红色汽车”，而不是”她”、“它”或”这个”等代词。
6. **文字使用引号** ：引用您想要更改的确切文字：“将 ‘joy’ 替换为 ‘BFL‘“比一般的文字描述效果更好。
7. **明确控制构图** ：更改背景或设置时，指定”保持准确的相机角度、位置和构图”以防止不必要的重新定位。
8. **谨慎选择动词** ：“转换”可能暗示完全改变，而”更改服装”或”替换背景”能让您更好地控制实际改变的内容。

**记住** ：如果每次编辑的指令数量不太复杂，让内容更明确总是有益的。


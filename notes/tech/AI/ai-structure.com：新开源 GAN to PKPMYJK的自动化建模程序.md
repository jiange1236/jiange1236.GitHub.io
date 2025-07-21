---
title: ai-structure.com：新开源 GAN to PKPMYJK的自动化建模程序
date: 2025-07-21
category:
  - 计算机
tags:
  - AI
article: true
---
# ai-structure.com：新开源 GAN to PKPMYJK的自动化建模程序

---
title: "ai-structure.com：新开源 GAN to PKPM/YJK的自动化建模程序"
source: "https://zhuanlan.zhihu.com/p/630300430"
author:
  - "[[知乎专栏]]"
published:
created: 2025-03-18
description: "0 太长不看版2023年4月20日、4月27日、5月5日、5月13日， http://ai-structure.com相继发布了新的v0.0.4版本以及图神经网络剪力墙设计、GAN-to-ETABS自动化建模源代码、土木工程自然语言规则AI解译等功能。感谢过…"
tags:
  - "clippings"
---
![](https://pic3.zhimg.com/v2-d5223ae8cf47a31d83a6dccc805d900a_1440w.jpg)

[https://ai-structure.com/backend/struct/downLoadPMT](https://ai-structure.com/backend/struct/downLoadPMT "Linkify Plus Plus")

## **0 太长不看版**

2023年4月20日、4月27日、5月5日、5月13日，[ai-structure.com](http://ai-structure.com/)相继发布了新的v0.0.4版本以及图神经网络剪力墙设计、GAN-to-ETABS自动化建模[源代码](https://zhida.zhihu.com/search?content_id=228198112&content_type=Article&match_order=1&q=%E6%BA%90%E4%BB%A3%E7%A0%81&zhida_source=entity)、土木工程自然语言规则AI解译等功能。感谢过程中各位工程师的积极参与和反馈。

[ai-structure.com](http://ai-structure.com/)的目标之一就是根据建筑平面布置让AI设计出结构布置方案，之后由专业结构软件完成结构的计算分析、配筋校核等工作。为了提升工作效率，我们开发了从AI到结构软件的自动化建模程序，可以实现将AI设计的结构方案自动导入结构分析软件。

**本次更新我们开源了GAN-to-PKPM/YJK的代码，可以将AI结构方案设计结果导出到PKPM和YJK结构设计软件。**后续我们将持续更新其他相关代码，也欢迎各位专家能够共同开发和完善程序。

5月5日发布的GAN-to-ETABS代码，与本次发布的GAN-to-PKPM/YJK的代码，一同放置于智能设计云平台中，下载路径：[ai-structure.com/backen](https://ai-structure.com/backend/struct/downLoadPMT)  

![](https://pica.zhimg.com/v2-72858f01669a8ee0dc23b00247b47902_1440w.jpg)

智能设计云平台参数化建模工具下载

## **1 更新说明**

本次开源的GAN-to-PKPM/YJK程序，可自动提取AI设计的矢量数据(.gdt)文件中的设计结果，包括剪力墙构件坐标和截面尺寸、梁构件坐标和截面尺寸、以及楼板坐标的[结构化数据](https://zhida.zhihu.com/search?content_id=228198112&content_type=Article&match_order=1&q=%E7%BB%93%E6%9E%84%E5%8C%96%E6%95%B0%E6%8D%AE&zhida_source=entity)；进而基于PKPM/YJK的API，进行结构分析模型自动构建。

需注意：下载矢量[数据文件](https://zhida.zhihu.com/search?content_id=228198112&content_type=Article&match_order=1&q=%E6%95%B0%E6%8D%AE%E6%96%87%E4%BB%B6&zhida_source=entity)(.gdt)中，剪力墙的设计结果为生成对抗网络（GAN）设计，图神经网络（GNN）设计对应的矢量数据将在后续更新中推出。

PKPM/YJK的API说明同样放在了开源代码的下载路径中，本次更新的主要内容便是基于PKPM和YJK开放的接口和示例文件，编写对应的建模代码。由于PKPM/YJK的API较新，我们基本没有相关的开发经验，相关开发过程得到了PKPM和YJK技术专家的大力支持，在此表示感谢！

同时，各位专家和用户在开发中遇到相关问题，可以从PKPM和YJK的相关渠道进行咨询和查阅：

PKPM结构软件二次开发官方QQ群：1149092638

YJK二次开发资料：[gitee.com/yjk-opensourc](https://gitee.com/yjk-opensource/py-yjks)

[ai-structure.com](http://ai-structure.com/)提供的下载矢量数据(.gdt)文件简介，剪力墙和梁的结构构件信息示意：

**剪力墙：构件编号，墙体两端X、Y坐标，墙体厚度**

\*SHEARWALL(Element\_ID, X1, Y1, X2, Y2, thick)

0,4.3783522011126461e+05,3.9830108214148763e+05,4.3843522011126461e+05,3.9830108214148763e+05,200

**梁构件：构件编号，梁两端X、Y坐标，梁宽、梁高**

\*BEAM(Element\_ID, X1, Y1, X2, Y2,thick,height)

0,4.3363522011126461e+05,4.0070108214148763e+05,4.3408522011126461e+05,4.0070108214148763e+05,200,600

## **2 使用说明**

### **2.1 GAN-to-PKPM开源代码使用流程**

(详见代码readme.txt文件)

（1）打开PKPM软件，创建一个项目名称与.gdt文件名称一样的PKPM空白模型（project\_name.jws），保存在“2\_PKPM”目录中，关闭PKPM模型。

（2）采用vscode、pycharm、Spyder等python的IDLE软件，打开“gdt2PKPM\_main\_20230428\_[v1.py](http://v1.py/ "Linkify Plus Plus")”主程序

(a)修改if \_\_name\_\_ == "\_\_main\_\_":的project\_name = "gdt文件名称"

(b)填写total\_height（结构总高度）, standstroy\_height（标准层高度）的信息

(c)需要注意的是，“pkpm\_model.RunAnalyse()；pkpm\_model.GetResult()”分析模块尚不成熟，建议各位用户在完成自动建模后，在相应结构设计软件内执行分析。

![](https://pic4.zhimg.com/v2-d81299e02984979a43b2d7fcdb749383_1440w.jpg)

代码需要修改的部分内容

（3）自动建模完成后，进入PKPM界面，进行模型调整、分析等操作。

![](https://pica.zhimg.com/v2-b5564b1473be2205e1c87e755d854a30_1440w.jpg)

PKPM 计算模型

（4）注意事项

**GAN-to-PKPM自动建模时，必须等python代码运行结束后，再由PKPM打开更新后的PKPM模型（project\_name.jws），否则会出错。**

  

### **2.2 GAN-to-YJK开源代码使用流程**

(详见代码readme.txt文件)

（1）采用vscode、pycharm、Spyder等python的IDLE软件，打开“gdt2YJK\_main\_20230516\_v1.py”主程序，修改pyyjks(com=0)函数中的建模信息：

（a）proj\_name = "test1\_20230505\_v2"

（b）story\_height = 3000

（c）num\_story = 9

（d）model\_name = "D:\\\\2\_YJK"，保证为绝对路径

（e）gdt\_path = f"D:\\\\1\_gdt\\\\{proj\_name}.gdt"，保证为绝对路径

![](https://pica.zhimg.com/v2-a07e457707f0d1e58f089b738076f69a_1440w.jpg)

代码需要修改的部分内容

（2）打开YJK软件，创建一个项目名称与.gdt文件名称一样的YJK空白模型，保存在“2\_YJK”目录中，并保持YJK程序界面处于打开状态。

（3）在YJK的命令窗口中，输入“yjks\_pyload”，如果前期环境配置正确，则会提示选择py文件，选择gdt2YJK\_main\_20230516\_[v1.py](http://v1.py/ "Linkify Plus Plus")，便可实现自动建模。

![](https://pic1.zhimg.com/v2-62ebd88c0d0d8a8c60d646b82d2ddad8_1440w.jpg)

YJK调用python代码

（4）自动建模完成后，进入YJK界面，进行模型调整、分析等操作。

![](https://pic2.zhimg.com/v2-58981571d5cecba15caaa1b020ed2fdf_1440w.jpg)

YJK计算模型

（5）注意事项

**GAN-to-YJK自动建模时并不是由Python去调用YJK，而是由YJK去调用Python执行相关命令。因此，本地的Python安装与环境配置非常重要，需要严格按照YJK API使用说明进行操作。**

## **3 后记**

我们在PKPM和YJK二次开发方面积累较少，因此，我们的开源代码存在很多不足，请各位专家使用时批评指正，也希望能有更多的专家一起参与开发。

近期还将继续更新新的内容，请大家持续关注和建议。

## [ai-structure.com](http://ai-structure.com/)往期文章

1. [ai-structure.com：土木工程自然语言规则AI解译模块上线测试](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538918&idx=1&sn=674700d3d1043a0e36a7ce9374100594&chksm=f06029fbc717a0ed8da1215bb42d6f6a46e6128a407382ed38d42d6706c01ccbb4a1bb0c13ad&scene=21#wechat_redirect)(20230513)
2. [AI剪力墙设计问卷调查结果](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538901&idx=1&sn=f28a1572d8a57b926d5534cf1aa1aadc&chksm=f06029c8c717a0de27d157fe238fe8840fb8fd65f91dbb1542e45021f10ff8749e256432faab&scene=21#wechat_redirect)(20230508)
3. [ai-structure.com | GAN-to-ETABS的自动化建模程序开源](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538858&idx=1&sn=d725db5aeb222f99b3bdd92d48284fb1&chksm=f06029b7c717a0a12330f8a61e3d3c4d696ad898bc010b10b2619c906f74c2ce1bfec79509dc&scene=21#wechat_redirect)(20230503)
4. [ai-structure.com图神经网络(GNN)设计剪力墙功能上线(20230427)](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538816&idx=1&sn=08ec21f1bf393b2d2800861bae3593ed&chksm=f060299dc717a08b56b9272dd54bcbfbf2457dbcfd226d476c116628a6133f1fec9d9869767b&scene=21#wechat_redirect)
5. [ai-structure.com v0.0.4新版上线(20230420)](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538781&idx=1&sn=77a0996c812d5527f6ed0d5ac673c952&chksm=f0602840c717a1562c60556e6a171e9192122a8ea4a15a33c68d4bb91afe640493afedf43fb8&scene=21#wechat_redirect)
6. [ai-structure.com剪力墙结构梁自动设计功能更新(20230329)](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538752&idx=1&sn=de2d5fbfd1e0cccc1ef978da2cde6766&chksm=f060285dc717a14b6f1eb60fa355a607d0225f063d66c09c44281ac765c4b17733daf0759cd7&scene=21#wechat_redirect)
7. [ai-structure.com 开放内测一周简报(20230307)](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538684&idx=1&sn=1fa8e892669f7ac74bc440fb562f8069&chksm=f06028e1c717a1f75edb80095e5e557feb72893754406b44e63841ab1eaee300ee97391d9529&scene=21#wechat_redirect)
8. [ai-structure.com 剪力墙结构生成式智能设计系统内测邀请(20230226)](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538635&idx=1&sn=3c52e65f9f36d21e17c0983bc188dddc&chksm=f06028d6c717a1c0f403d919f1d64b7033b70a781f32600eadef34b66e065e2edabfd0801048&scene=21#wechat_redirect)

## 联系方式

QQ群：741840451（欢迎入群交流讨论）  
[廖文杰](https://zhida.zhihu.com/search?content_id=228198112&content_type=Article&match_order=1&q=%E5%BB%96%E6%96%87%E6%9D%B0&zhida_source=entity)：liaowj17@tsinghua.org.cn  
费一凡：fyf20@mails.tsinghua.edu.cn  
[ai-structure.com](http://ai-structure.com/)网站中也有联系我们选项

## 相关论文

1. Liao WJ, Lu XZ, Huang YL, Zheng Z, Lin YQ, Automated structural design of shear wall residential buildings using generative adversarial networks, *Automation in Construction*, 2021, 132, 103931. DOI: 10.1016/j.autcon.2021.103931.
2. Lu XZ, Liao WJ, Zhang Y, Huang YL, Intelligent structural design of shear wall residence using physics-enhanced generative adversarial networks, *Earthquake Engineering & Structural Dynamics*, 2022, 51(7): 1657-1676. DOI: 10.1002/eqe.3632.
3. Zhao PJ, Liao WJ, Xue HJ, Lu XZ, Intelligent design method for beam and slab of shear wall structure based on deep learning, *Journal of Building Engineering*, 2022, 57: 104838. DOI: 10.1016/j.jobe.2022.104838.
4. Liao WJ, Huang YL, Zheng Z, Lu XZ, Intelligent generative structural design method for shear-wall building based on “fused-text-image-to-image” generative adversarial networks, *Expert Systems with Applications*, 2022, 118530, DOI: 10.1016/j.eswa.2022.118530.
5. Fei YF, Liao WJ, Zhang S, Yin PF, Han B, Zhao PJ, Chen XY, Lu XZ, Integrated schematic design method for shear wall structures: a practical application of generative adversarial networks, *Buildings*, 2022, 12(9): 1295. DOI: 10.3390/buildings1209129.
6. Fei YF, Liao WJ, Huang YL, Lu XZ, Knowledge-enhanced generative adversarial networks for schematic design of framed tube structures, *Automation in Construction*, 2022, 144: 104619. DOI: 10.1016/j.autcon.2022.104619.
7. Zhao PJ, Liao WJ, Huang YL, Lu XZ, Intelligent design of shear wall layout based on attention-enhanced generative adversarial network, *Engineering Structures*, 2023, 274, 115170. DOI: 10.1016/j.engstruct.2022.115170.
8. Zhao PJ, Liao WJ, Huang YL, Lu XZ, Intelligent beam layout design for frame structure based on graph neural networks, *Journal of Building Engineering*, 2023, 63, Part A: 105499. DOI: 10.1016/j.jobe.2022.105499.
9. Zhao PJ, Liao WJ, Huang YL, Lu XZ, Intelligent design of shear wall layout based on graph neural networks, *Advanced Engineering Informatics*, 2023, 55, 101886, DOI: 10.1016/j.aei.2023.101886
10. Liao WJ, Wang XY, Fei YF, Huang YL, Xie LL, Lu XZ\*, Base-isolation design of shear wall structures using physics-rule-co-guided self-supervised generative adversarial networks, *Earthquake Engineering & Structural Dynamics*, 2023, DOI:10.1002/eqe.3862.

![](https://pica.zhimg.com/v2-c602060a4feb4d7c951b8bbb87f758aa_1440w.jpg)

## 相关资料

### **征稿通知**

**[2024世界地震工程会议人工智能专题AIM-4征稿](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538783&idx=1&sn=febf49ffef3469cb023a01cdc5534be9&chksm=f0602842c717a1548c5b8bef56edbf8ddf91868851f6004a935cad11d2d3732126afb3060bc5&scene=21#wechat_redirect)**  

### **学术报告视频**

1. **[《从基于模拟的结构设计到基于人工智能的结构设计》学术报告视频](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657537928&idx=1&sn=4f756e1e52771ddfec4d6ae13ec8a425&chksm=f0603515c717bc03a07754c25ca766db3d7c7a9af212d1a4383f7dc986b8f23087f50a834220&scene=21#wechat_redirect)**
2. **《[混凝土结构的智能设计和对专业教学的思考》学术报告视频](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538240&idx=1&sn=06559f3dd66a19480f903ab8e2555281&chksm=f0602a5dc717a34bd77dcbaa0276f9434ae31800c4cc02ba94a3a751aa476441915898ce17db&scene=21#wechat_redirect)**

### **公众号文章**

1. **[训练数据不足怎么办？AI：我自学！| 新论文及发明专利：力学+规则耦合指导AI的隔震方案设计](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538718&idx=1&sn=ec0d2e31c43ee722b555fb03c37989b3&chksm=f0602803c717a115958b8120846a8af9251d529e3731b531074957d4f9d34199935a8c019e79&scene=21#wechat_redirect)**
2. **[视频：建筑结构生成式智能设计在实际投标项目中的应用](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538212&idx=1&sn=461b9956bab756f724f3a5741b0c953f&chksm=f0602a39c717a32f3b9a598f1316b0455e239db20e580abc35853dfd84233fbdda0c09174025&scene=21#wechat_redirect)**
3. **[除了剪力墙结构，AI能不能设计框架结构？| 论文和发明专利：基于图神经网络的框架梁智能化布置](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538153&idx=1&sn=0c45a9b10b632008fd7f8d63c2c5b088&chksm=f0602af4c717a3e2ff3811e31d060426bbdeab234b5851af60c50f54d16c1e60945548b654ba&scene=21#wechat_redirect)**
4. **[老师划重点啦，AI工程师学会了么？| 新论文：注意力增强的剪力墙结构人工智能设计方法](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538124&idx=1&sn=82291b7c0bc82200abc663e2b2c4736a&chksm=f0602ad1c717a3c7321606b62849f2a813a060d5ce09317fe01946ee5abc8b56c8edf256f19a&scene=21#wechat_redirect)**
5. **[新论文和发明专利 | 规则增强的框架-核心筒结构人工智能设计方法](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657538091&idx=1&sn=87c4e716356c3f7280daa9c44464cdb9&chksm=f0602ab6c717a3a009ad24dba0e1d6d4f77bec7d40bf3d074617994ff0079858f18cbeccaf90&scene=21#wechat_redirect)**
6. **[新论文 | 剪力墙结构智能化生成式设计方法：从数据驱动到物理增强](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657537676&idx=1&sn=4b8c9cb6cc13645f428e14418b7e4398&chksm=f0603411c717bd07c9494b97612d6a2a671fe4b02d6224dd27115cab1cc5e2c0fed54ddd0e61&scene=21#wechat_redirect)**
7. **[简便高效的建筑结构AI设计系统 | 新论文：集成式智能生成设计系统及其在剪力墙结构上的应用](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657537634&idx=1&sn=d68190877f2b83121c38d5fb61b5d8bf&chksm=f06034ffc717bde9b94b9b91aade3f8446589b6bb71c1b80ae6b5e5434d622632bd85ad205c6&scene=21#wechat_redirect)**
8. **[利用设计文本指导AI建筑结构设计 | 新论文及发明专利：融合文本和图像数据的建筑结构AI设计方法](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657537604&idx=1&sn=033505cda09771036a16a9aed84bc290&chksm=f06034d9c717bdcfad7116e9b7ee0c36c5dea8929fb95c1f7c004cbe6a8191bc759e8ca81bde&scene=21#wechat_redirect)**
9. **[新论文：面向自动合规审查的知识增强语义对齐和自动规则解译方法](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657537565&idx=1&sn=e38a1a9b4e4b3018a4e4ce009affcfa7&chksm=f0603480c717bd965b4d6ceac901efe6639451bd512df141882934490d01e8e01436e4dc65fd&scene=21#wechat_redirect)**
10. **[新论文：融合自然语言处理与上下文无关文法的审图规则自动解译方法](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657537532&idx=1&sn=ed1e66d3d770f60d0dfdd5d2569a2685&chksm=f0603761c717be77e5f9bc0da959dc7d70b8726c65a0358c11050777ffe88e476c21aa74075b&scene=21#wechat_redirect)**
11. **[新论文及发明专利 | 基于深度学习的楼盖结构智能化设计方法](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657537463&idx=1&sn=9b0db70aa9ea5e4226d43ace7bdcb6be&chksm=f060372ac717be3cf9489710ee05fcc3ef0bdaa3bf622a906fa160d929875d0ca08e5cc16c51&scene=21#wechat_redirect)**
12. **[新论文：面向建筑领域自然语言处理的领域语料库及预训练模型](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657537461&idx=1&sn=40f92c92cd3b8b1bc2f6205c41ba6f94&chksm=f0603728c717be3e7d3f7f5e79466c83c7ee3924ecfdf93307bbdf0ba9cec7a25e6865c0e402&scene=21#wechat_redirect)**
13. **[用“图”和“图”来生成“图”？中文快不够用了 | 发明专利：多模态输入深度神经网络、框架结构梁柱设计方法及装置](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657537304&idx=1&sn=8665cd0f810f4992c8d8d49bb81124c4&chksm=f0603785c717be93f5654f320a9924207d66aa5793593d8f5e8e2a2ce95ff75ed090dea9e1c7&scene=21#wechat_redirect)**
14. **[AI想做结构设计？它得先学结构力学！| 新论文及发明专利：物理增强的剪力墙结构智能化设计方法](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657537190&idx=1&sn=db4350783b2e287e53237755c60659fe&chksm=f060363bc717bf2daf7bbaa705b7ff56c8bd627447d284122b9d4a2909842d30ac813515305d&scene=21#wechat_redirect)**
15. **[AI+PKPM | 给个建筑户型图，结构设计全自动](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657536841&idx=1&sn=88abb8422f49d441366849893c1367bc&chksm=f06031d4c717b8c210c8bb0fc74721124a9dad2c1a209e4a805f264c0fbe97604b07e0cf4b14&scene=21#wechat_redirect)**
16. **[糟糕！结构高度从50m改为100m了。AI：5秒完成新结构方案 | 发明专利：融合文本和图像数据的建筑结构AI设计方法](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657536803&idx=1&sn=2406baca07ffa43561ae494429c209d4&chksm=f06031bec717b8a8ca8b8f4bffc29ac5b20124e341a9f37bcafd0a6ab96bdd1f53ac514782f8&scene=21#wechat_redirect)**
17. **[揭秘人工智能设计剪力墙结构的科学原理 | 新论文：基于生成对抗网络的剪力墙结构设计方法](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657536562&idx=1&sn=cd5bf017721d5d58829c22faa168a720&chksm=f06030afc717b9b9fc81dbfb398a1a607ad668a692855bf55bb7621d9be66450f43a090a0ce9&scene=21#wechat_redirect)**
18. **[用人工智能进行结构方案设计| 发明专利：基于对抗生成网络的剪力墙结构布置方法](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657536464&idx=1&sn=48783ca1a4e7b0ed54ef177fc91c4438&chksm=f060334dc717ba5b73abca6447f4a61630ac13861b73828ae6865972db279db0db8b54cffbe8&scene=21#wechat_redirect)**
19. **[5分钟！从设计结构方案到完成计算书 | 人工智能设计剪力墙结构案例演示](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657536491&idx=1&sn=d9951104353d325f625687046d5cc7b3&chksm=f0603376c717ba607c9bdb1d2ecbde82b585b153cfb18f41f402102ffad8ec927eeee5b8bafe&scene=21#wechat_redirect)**
20. **[新发明专利：一种将规范文本自动转为可计算逻辑规则的方法及系统](http://mp.weixin.qq.com/s?__biz=MzI4NTAzNjUzMA==&mid=2657536570&idx=1&sn=946d74f9d7f5153d4decbd0cdcbee8ae&chksm=f06030a7c717b9b1d8dfb21621c3b36ea8cc8acc7a38a5f17c85a1352d0ab3ebdb401d910d2a&scene=21#wechat_redirect)**

\---End--

发布于 2023-05-18 11:27・IP 属地江苏

### 内容所属专栏

## [

陆新征课题组

](https://www.zhihu.com/column/c_1422102294527258624)

清华大学陆新征教授课题组

[

人工智能

](https://www.zhihu.com/topic/19551275)

[

土木工程

](https://www.zhihu.com/topic/19559037)

[

建筑结构设计

](https://www.zhihu.com/topic/19705151)
import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as r}from"./app-IsEvEAQV.js";const t={},l=r('<h1 id="阿里十大最受开发者欢迎的工具" tabindex="-1"><a class="header-anchor" href="#阿里十大最受开发者欢迎的工具" aria-hidden="true">#</a> 阿里十大最受开发者欢迎的工具</h1><p>精选了一些阿里经济体内部最受开发者欢迎的开发者工具，筛选出一些带有普适性同样适合外部开发者的，希望能助力开发者们提高开发效率。</p><h3 id="_1-java-工程脚手架-java-initializr" tabindex="-1"><a class="header-anchor" href="#_1-java-工程脚手架-java-initializr" aria-hidden="true">#</a> 1. Java 工程脚手架 Java Initializr</h3><p><strong>官网</strong>： https://start.aliyun.com/bootstrap.html</p><p><strong>简介</strong>： 2020 年由阿里巴巴中间件团队发布的定制版 Java工程脚手架，快速搭建工程应用。</p><p>Java工程脚手架是一个项目框架生成工具，旨在减少开发者的工程搭建成本，为开发者提供简便、快捷的项目配置体验。</p><p>支持 Spring 官方脚手架的全部功能，且增加了丰富的典型配置和使用案例。多种标准应用架构供选择，让你生成完工程就可以直接写代码。基于浏览器的运行环境，进一步降低功能体验和试用的复杂度。</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640.webp" alt="图片"></p><h3 id="_2-java-线上诊断工具-arthas" tabindex="-1"><a class="header-anchor" href="#_2-java-线上诊断工具-arthas" aria-hidden="true">#</a> 2. Java 线上诊断工具 Arthas</h3><p><strong>官网</strong>： https://arthas.aliyun.com/en-us/index.html</p><p><strong>简介</strong>：Arthas 是阿里巴巴 2018 年 9 月开源的一款 Java 线上诊断工具。</p><p>工具的使用场景：</p><ul><li>这个类从哪个 jar 包加载的？为什么会报各种类相关的 Exception？</li><li>我改的代码为什么没有执行到？难道是我没 commit？分支搞错了？</li><li>遇到问题无法在线上 debug，难道只能通过加日志再重新发布吗？</li><li>线上遇到某个用户的数据处理有问题，但线上同样无法 debug，线下无法重现！</li><li>是否有一个全局视角来查看系统的运行状况？</li><li>有什么办法可以监控到 JVM 的实时运行状态？</li></ul><p>Arthas 支持 JDK 6+，支持 Linux/Mac/Windows，采用命令行交互模式，同时提供丰富的 Tab 自动补全功能，进一步方便进行问题的定位和诊断。</p><h3 id="_3-java-工具集-dragonwell" tabindex="-1"><a class="header-anchor" href="#_3-java-工具集-dragonwell" aria-hidden="true">#</a> 3. Java 工具集 Dragonwell</h3><p><strong>官网</strong>： https://www.aliyun.com/product/dragonwell</p><p><strong>简介</strong>： Alibaba Dragonwell 是一款免费的, 生产就绪型 Open JDK 发行版，提供长期支持，包括性能增强和安全修复。阿里巴巴拥有最丰富的 Java 应用场景，覆盖电商，金融，物流等众多领域，世界上最大的 Java 用户之一。Alibaba Dragonwell 作为 Java 应用的基石，支撑了阿里经济体内所有的 Java 业务。Alibaba Dragonwell 完全兼容 Java SE 标准，您可以在任何常用操作系统（包括 Linux、Windows 和 macOS）上开发 Java 应用程序， 运行时生产环境选择 Alibaba Dragonwell。</p><p><strong>特性</strong></p><ul><li><p>安全与稳定 紧密与 OpenJDK 社区保持合作，保持对社区工作的跟踪，及时同步上游更新；同时，Dragonwell 选择性的移植高版本 Java 的重要功能，这些移植功能已经在阿里内部被大规模部署，用户都可以免费使用，而不用等下一个 LTS 版本</p></li><li><p>标准兼容 OpenJDK 的下游, 完全遵循 Java SE 标准，通过 JCK 兼容性测试</p></li><li><p>性能卓越 Dragonwell 作为阿里巴巴 Java 应用的基石，支撑了阿里经济体内所有的 Java 业务，积累了大量业务场景下的实践和创新</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-16434631208084.webp" alt="图片"></p></li></ul><h3 id="_4-java-代码规约扫描插件" tabindex="-1"><a class="header-anchor" href="#_4-java-代码规约扫描插件" aria-hidden="true">#</a> 4. Java 代码规约扫描插件</h3><p><strong>官网</strong>： https://github.com/alibaba/p3c</p><p><strong>简介</strong>： 《阿里巴巴Java开发手册》自从第一个版本起，倍受业界关注，相信很多人对其中的规则也有了一定的了解，很多人甚至希望能尽快在自己的团队推行起来，这样大家有了一套共同的开发准则。但是，如何更好的去遵守规则并且按照手册去开发我们的系统确变得不那么容易，为了让开发者更加方便、快速的将规范推动并实行起来，阿里巴巴基于手册内容，研发了一套自动化的IDE检测插件（IDEA、Eclipse）， 该插件在扫描代码后，将不符合《手册》的代码按Blocker/Critical/Major三个等级显示在下方，甚至在IDEA上，还基于Inspection机制提供了实时检测功能，编写代码的同时也能快速发现问题所在。对于历史代码，部分规则实现了批量一键修复的功能，提升代码质量，提高团队研发效能。</p><h3 id="_5-应用实时监控工具-arms" tabindex="-1"><a class="header-anchor" href="#_5-应用实时监控工具-arms" aria-hidden="true">#</a> 5. 应用实时监控工具 ARMS</h3><p><strong>官网</strong>： https://www.aliyun.com/product/arms</p><p><strong>简介</strong>： 应用实时监控服务 (Application Real-Time Monitoring Service, 简称ARMS) 是一款应用性能管理产品，包含前端监控，应用监控和Prometheus监控三大子产品，涵盖了浏览器，小程序，APP，分布式应用和容器环境等性能管理，能帮助你实现全栈式的性能监控和端到端的全链路追踪诊断， 让应用运维从未如此轻松高效。</p><p>工具的使用场景：</p><ul><li><p>晚上 10 点收到 37 条报警信息，你却无从下手？</p></li><li><p>当我们发现问题的时候，客户/业务方已经发起投诉？</p></li><li><p>每个月花几十万买服务器，却无法保障用户体验？</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-16434631208085.webp" alt="图片"></p></li></ul><h3 id="_6-性能测试工具-pts" tabindex="-1"><a class="header-anchor" href="#_6-性能测试工具-pts" aria-hidden="true">#</a> 6. 性能测试工具 PTS</h3><p><strong>官网</strong>： https://www.aliyun.com/product/pts ；</p><p><strong>简介</strong>： PTS（Performance Testing Service）是面向所有技术背景人员的云化测试工具。有别于传统工具的繁复，PTS以互联网化的交互，提供性能测试、API调试和监测等多种能力。自研和适配开源的功能都可以轻松模拟任意体量的用户访问业务的场景，任务随时发起，免去繁琐的搭建和维护成本。更是紧密结合监控、流控等兄弟产品提供一站式高可用能力，高效检验和管理业务性能。</p><p>使用场景：</p><ul><li><p>大促活动准备前，想模拟真实多用户高并发访问场景？</p></li><li><p>产品版本迭代，想观察流量洪峰时产品表现？</p></li><li><p>产品交付</p><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-16434631208086.webp" alt="图片"></p></li></ul><h3 id="_7-架构可视化工具-ahas" tabindex="-1"><a class="header-anchor" href="#_7-架构可视化工具-ahas" aria-hidden="true">#</a> 7. 架构可视化工具 AHAS</h3><p><strong>官网</strong>： https://www.aliyun.com/product/ahas</p><p><strong>简介</strong>： 应用高可用服务（Application High Availability Service）是专注于提高应用及业务高可用的工具平台，目前主要提供 应用架构探测感知，故障注入式高可用能力评测 和 流控降级高可用防护 三大核心能力，通过各自的工具模块可以快速低成本的在营销活动场景、业务核心场景全面提升业务稳定性和韧性。</p><p>使用场景：</p><ul><li>服务化改造过程中，想精确的了解资源实例的构成和交互情况，实现架构的可视化？</li><li>想引入真实的故障场景和演练模型？</li><li>低门槛获得流控、降级功能？</li></ul><p><img src="https://cdn.jsdelivr.net/gh/jiange1236/MyImage/MdImg/640-16434631208097.jpg" alt="图片"></p><h3 id="_8-数据处理工具-easyexcel" tabindex="-1"><a class="header-anchor" href="#_8-数据处理工具-easyexcel" aria-hidden="true">#</a> 8. 数据处理工具 EasyExcel</h3><p><strong>官网</strong>： https://github.com/alibaba/easyexcel</p><p><strong>简介</strong>： Java解析、生成Excel比较有名的框架有Apache poi、jxl。但他们都存在一个严重的问题就是非常的耗内存，poi有一套SAX模式的API可以一定程度的解决一些内存溢出的问题，但POI还是有一些缺陷，比如07版Excel解压缩以及解压后存储都是在内存中完成的，内存消耗依然很大。easyexcel重写了poi对07版Excel的解析，能够原本一个3M的excel用POI sax依然需要100M左右内存降低到几M，并且再大的excel不会出现内存溢出，03版依赖POI的sax模式。在上层做了模型转换的封装，让使用者更加简单方便.</p><h3 id="_9-ios-类工具-handyjson" tabindex="-1"><a class="header-anchor" href="#_9-ios-类工具-handyjson" aria-hidden="true">#</a> 9. iOS 类工具 HandyJSON</h3><p><strong>官网</strong>： https://github.com/alibaba/HandyJSON</p><p><strong>简介</strong>： HandyJSON是一个用于Swift语言中的JSON序列化/反序列化库。</p><p>与其他流行的Swift JSON库相比，HandyJSON的特点是，它支持纯swift类，使用也简单。它反序列化时(把JSON转换为Model)不要求Model从NSObject继承(因为它不是基于KVC机制)，也不要求你为Model定义一个Mapping函数。只要你定义好Model类，声明它服从HandyJSON协议，HandyJSON就能自行以各个属性的属性名为Key，从JSON串中解析值。</p><h4 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h4><ul><li>序列化Model到JSON、从JSON反序列化到Model</li><li>自然地以Model的属性名称作为解析JSON的Key，不需要额外指定</li><li>支持Swift中大部分类型</li><li>支持class、struct定义的Model</li><li>支持自定义解析规则</li><li>类型自适应，如JSON中是一个Int，但对应Model是String字段，会自动完成转化</li></ul><h3 id="_10-数据库落地-druid" tabindex="-1"><a class="header-anchor" href="#_10-数据库落地-druid" aria-hidden="true">#</a> 10. 数据库落地 Druid</h3><p><strong>官网</strong>： https://github.com/alibaba/druid</p><p><strong>简介</strong>： Druid 是一个 JDBC 组件库，包含数据库连接池、SQL Parser 等组件, 被大量业务和技术产品使用或集成，经历过最严苛线上业务场景考验，是你值得信赖的技术产品。</p>',50),n=[l];function s(p,o){return i(),e("div",null,n)}const c=a(t,[["render",s],["__file","阿里十大最受开发者欢迎的工具.html.vue"]]);export{c as default};

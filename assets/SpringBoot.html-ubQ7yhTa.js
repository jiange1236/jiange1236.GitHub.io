const e=JSON.parse('{"key":"v-33105d07","path":"/others/SpringBoot.html","title":"SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理","lang":"zh-CN","frontmatter":{"author":"jiange1236","title":"SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理","description":"SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理","date":"2022-01-15T00:00:00.000Z","category":"other","tag":"other","article":true,"timeline":true,"icon":null,"head":[["meta",{"property":"og:url","content":"https://jiange1236.github.io/others/SpringBoot.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理"}],["meta",{"property":"og:description","content":"SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-05-14T12:43:11.000Z"}],["meta",{"property":"article:author","content":"jiange1236"}],["meta",{"property":"article:tag","content":"other"}],["meta",{"property":"article:published_time","content":"2022-01-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-05-14T12:43:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-15T00:00:00.000Z\\",\\"dateModified\\":\\"2022-05-14T12:43:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jiange1236\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"资源权限","slug":"资源权限","link":"#资源权限","children":[{"level":3,"title":"1.静态资源准备","slug":"_1-静态资源准备","link":"#_1-静态资源准备","children":[]},{"level":3,"title":"2.自定义一个异常，便于拦截抛出","slug":"_2-自定义一个异常-便于拦截抛出","link":"#_2-自定义一个异常-便于拦截抛出","children":[]},{"level":3,"title":"3.全局异常处理","slug":"_3-全局异常处理","link":"#_3-全局异常处理","children":[]},{"level":3,"title":"4.controller层","slug":"_4-controller层","link":"#_4-controller层","children":[]},{"level":3,"title":"5.拦截器创建","slug":"_5-拦截器创建","link":"#_5-拦截器创建","children":[]},{"level":3,"title":"6.将拦截器注入应用","slug":"_6-将拦截器注入应用","link":"#_6-将拦截器注入应用","children":[]},{"level":3,"title":"7.验证查看结果","slug":"_7-验证查看结果","link":"#_7-验证查看结果","children":[]}]},{"level":2,"title":"操作权限","slug":"操作权限","link":"#操作权限","children":[{"level":3,"title":"1.和上面一样使用静态资源","slug":"_1-和上面一样使用静态资源","link":"#_1-和上面一样使用静态资源","children":[]},{"level":3,"title":"2.自定义注解","slug":"_2-自定义注解","link":"#_2-自定义注解","children":[]},{"level":3,"title":"3.controller层","slug":"_3-controller层","link":"#_3-controller层","children":[]},{"level":3,"title":"4.修改一下之前的拦截器","slug":"_4-修改一下之前的拦截器","link":"#_4-修改一下之前的拦截器","children":[]},{"level":3,"title":"5.验证结果","slug":"_5-验证结果","link":"#_5-验证结果","children":[]}]},{"level":2,"title":"角色权限","slug":"角色权限","link":"#角色权限","children":[{"level":3,"title":"1.静态对应关系","slug":"_1-静态对应关系","link":"#_1-静态对应关系","children":[]},{"level":3,"title":"2.修改controller","slug":"_2-修改controller","link":"#_2-修改controller","children":[]},{"level":3,"title":"3.修改一下拦截器","slug":"_3-修改一下拦截器","link":"#_3-修改一下拦截器","children":[]},{"level":3,"title":"4.结果测试","slug":"_4-结果测试","link":"#_4-结果测试","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1652426831000,"updatedTime":1652532191000,"contributors":[{"name":"jiange1236","email":"183465355@qq.com","commits":4}]},"readingTime":{"minutes":8.34,"words":2502},"filePathRelative":"others/SpringBoot.md","localizedDate":"2022年1月15日","excerpt":"<h1> SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理</h1>\\n<ul>\\n<li>\\n<p><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">前言</a></p>\\n</li>\\n<li>\\n<p><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">资源权限</a></p>\\n</li>\\n<li>\\n<ul>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">1.静态资源准备</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">2.自定义一个异常，便于拦截抛出</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">3.全局异常处理</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">4.controller层</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">5.拦截器创建</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">6.将拦截器注入应用</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">7.验证查看结果</a></li>\\n</ul>\\n</li>\\n<li>\\n<p><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">操作权限</a></p>\\n</li>\\n<li>\\n<ul>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">1.和上面一样使用静态资源</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">2.自定义注解</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">3.controller层</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">4.修改一下之前的拦截器</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">5.验证结果</a></li>\\n</ul>\\n</li>\\n<li>\\n<p><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">角色权限</a></p>\\n</li>\\n<li>\\n<ul>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">1.静态对应关系</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">2.修改controller</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">3.修改一下拦截器</a></li>\\n<li><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">4.结果测试</a></li>\\n</ul>\\n</li>\\n<li>\\n<p><a href=\\"https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">总结</a></p>\\n</li>\\n</ul>"}');export{e as data};

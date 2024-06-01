const e=JSON.parse('{"key":"v-15f481b4","path":"/tech/Cloudflare/%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E5%B9%B6%E4%BF%AE%E6%94%B9%E5%90%84%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP.html","title":"优选WARP的EndPoint IP，提高本地WARP节点访问性并修改各客户端的EndPoint IP | MisakaNo の 小破站","lang":"zh-CN","frontmatter":{"created":"2023-08-26T00:00:00.000Z","source":"https://blog.misaka.rest/2023/03/12/cf-warp-yxip/?highlight=cloudflare+warp","tag":[],"description":"优选WARP的EndPoint IP，提高本地WARP节点访问性并修改各客户端的EndPoint IP | MisakaNo の 小破站 Excerpt 在之前的博客教程中，我们提到了如何使用CloudFlare WARP客户端。不过官方的客户端的体验在中国大陆来说比较差。而提取出来的WireGuard配置文件中，自己寻找可用的EndPoint IP又是一件很麻烦的事情。在这期文章中，我们主要来解决两个问题：一是优选出可用的WARP EndPoint IP并应用到WireGuard的节点；二是将优选的IP应用到官方客户端 推荐 https://b","head":[["meta",{"property":"og:url","content":"https://jiange1236.github.io/tech/Cloudflare/%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E5%B9%B6%E4%BF%AE%E6%94%B9%E5%90%84%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP.html"}],["meta",{"property":"og:site_name","content":"Zeblog"}],["meta",{"property":"og:title","content":"优选WARP的EndPoint IP，提高本地WARP节点访问性并修改各客户端的EndPoint IP | MisakaNo の 小破站"}],["meta",{"property":"og:description","content":"优选WARP的EndPoint IP，提高本地WARP节点访问性并修改各客户端的EndPoint IP | MisakaNo の 小破站 Excerpt 在之前的博客教程中，我们提到了如何使用CloudFlare WARP客户端。不过官方的客户端的体验在中国大陆来说比较差。而提取出来的WireGuard配置文件中，自己寻找可用的EndPoint IP又是一件很麻烦的事情。在这期文章中，我们主要来解决两个问题：一是优选出可用的WARP EndPoint IP并应用到WireGuard的节点；二是将优选的IP应用到官方客户端 推荐 https://b"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-01T15:40:16.000Z"}],["meta",{"property":"article:author","content":"Zine"}],["meta",{"property":"article:modified_time","content":"2024-06-01T15:40:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"优选WARP的EndPoint IP，提高本地WARP节点访问性并修改各客户端的EndPoint IP | MisakaNo の 小破站\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-01T15:40:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zine\\",\\"url\\":\\"https://jiange1236.github.io\\"}]}"]]},"headers":[{"level":2,"title":"准备材料","slug":"准备材料","link":"#准备材料","children":[]},{"level":2,"title":"优选步骤","slug":"优选步骤","link":"#优选步骤","children":[{"level":3,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":3,"title":"Mac OS","slug":"mac-os","link":"#mac-os","children":[]},{"level":3,"title":"Linux 各发行版","slug":"linux-各发行版","link":"#linux-各发行版","children":[]},{"level":3,"title":"安卓 Termux","slug":"安卓-termux","link":"#安卓-termux","children":[]},{"level":3,"title":"苹果 iSH","slug":"苹果-ish","link":"#苹果-ish","children":[]}]},{"level":2,"title":"节点应用","slug":"节点应用","link":"#节点应用","children":[{"level":3,"title":"WireGuard 配置节点","slug":"wireguard-配置节点","link":"#wireguard-配置节点","children":[]},{"level":3,"title":"Windows WARP 官方客户端","slug":"windows-warp-官方客户端","link":"#windows-warp-官方客户端","children":[]},{"level":3,"title":"安卓 WARP 官方客户端（仅限6.9和6.10版本）","slug":"安卓-warp-官方客户端-仅限6-9和6-10版本","link":"#安卓-warp-官方客户端-仅限6-9和6-10版本","children":[]}]}],"git":{"createdTime":1717256416000,"updatedTime":1717256416000,"contributors":[{"name":"周子健","email":"183465355@qq.com","commits":1}]},"readingTime":{"minutes":4.62,"words":1385},"filePathRelative":"tech/Cloudflare/优选WARP的EndPoint IP，提高本地WARP节点访问性并修改各客户端的EndPoint IP.md","localizedDate":"2024年6月1日","excerpt":"<h1> 优选WARP的EndPoint IP，提高本地WARP节点访问性并修改各客户端的EndPoint IP | MisakaNo の 小破站</h1>\\n<blockquote>\\n<h2> Excerpt</h2>\\n<p>在之前的博客教程中，我们提到了如何使用CloudFlare WARP客户端。不过官方的客户端的体验在中国大陆来说比较差。而提取出来的WireGuard配置文件中，自己寻找可用的EndPoint IP又是一件很麻烦的事情。在这期文章中，我们主要来解决两个问题：一是优选出可用的WARP EndPoint IP并应用到WireGuard的节点；二是将优选的IP应用到官方客户端  推荐 https://b</p>\\n</blockquote>","autoDesc":true}');export{e as data};

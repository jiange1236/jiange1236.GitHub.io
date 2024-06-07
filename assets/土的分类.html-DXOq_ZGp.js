import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as n,d as a}from"./app-C7nsaC1x.js";const l={},e=a(`<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" data-title="mermaid" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">flowchart TB</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%% 图的方向说明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%% LR：从左到图，RL：从右到左，TB：从上到下，BT：从下到上</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%% 连续连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">START([&gt;2mm质量比]) --&gt; |&quot;&gt;50%&quot;|stone{{&lt;0.075mm质量比}}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">START([&gt;2mm质量比]) --&gt; |&quot;≤50%&quot;|sand{{&gt;0.075mm质量比}}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">subgraph 粗粒土</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">stone --&gt; |&quot;&gt;25%&quot;|mix1(&quot;含XX粗粒土(例：含黏土角砾)&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">mix1 --&gt; mixcu[碎石土分类]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">mix1 --&gt; mixxi[细粒土分类]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">stone --&gt; |&quot;≤25%&quot;|stone1[碎石土分类]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%% subgraph 碎石土分类</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%%  stone2[碎石土分类] --&gt; |&quot;&gt;200mm质量比&gt;50%&quot;|stone3(&quot;漂石、块石&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%%  stone2 --&gt; |&quot;&gt;20mm质量比&gt;50%&quot;|stone4(&quot;卵石、碎石&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%%  stone2 --&gt; |&quot;&gt;2mm质量比&gt;50%&quot;|stone5(&quot;原砾、角砾&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%% end </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">sand --&gt; |&quot;&gt;50%&quot;|sand1[砂土分类]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%% subgraph 砂土分类</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%%  sand2[砂土分类] --&gt; |&quot;&gt;2mm质量比25~50%&quot;|sand3(&quot;砾砂&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%%  sand2 --&gt; |&quot;&gt;0.5mm质量比&gt;50%&quot;|sand4(&quot;粗砂&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%%  sand2 --&gt; |&quot;&gt;0.25mm质量比&gt;50%&quot;|sand5(&quot;中砂&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%%  sand2 --&gt; |&quot;&gt;0.075mm质量比&gt;85%&quot;|sand6(&quot;细砂&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%%  sand2 --&gt; |&quot;&gt;0.075mm质量比&gt;50%&quot;|sand7(&quot;粉砂&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%% end </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">subgraph 细粒土</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">sand --&gt; |&quot;≤50%&quot;|mix2{{&gt;2mm质量比}}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">mix2 --&gt; |&quot;&gt;25%&quot;|mix3(&quot;含XX细粒土(例：含碎石黏土)&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">mix2 --&gt; |&quot;≤25%&quot;|mixxi3[细粒土分类]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">mix3 --&gt; mixcu2[碎石土分类]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">mix3 --&gt; mixxi2[细粒土分类]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%% subgraph 细粒土分类</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%%  xili[细粒土分类] --&gt; |&quot;Ip≤10&quot;|fentu(&quot;粉土&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%%  xili[细粒土分类] --&gt; |&quot;Ip&gt;17&quot;|niantu1(&quot;黏土&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%%  xili[细粒土分类] --&gt; |&quot;10&lt;Ip≤17&quot;|niantu2(&quot;粉质黏土&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">%% end </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">end</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[e];function p(d,h){return n(),i("div",null,t)}const B=s(l,[["render",p],["__file","土的分类.html.vue"]]),c=JSON.parse('{"path":"/study/%E5%9C%9F%E7%9A%84%E5%88%86%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{"head":[["meta",{"property":"og:url","content":"https://jiange1236.github.io/study/%E5%9C%9F%E7%9A%84%E5%88%86%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"Zeblog"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-07T05:03:50.000Z"}],["meta",{"property":"article:author","content":"Zine"}],["meta",{"property":"article:modified_time","content":"2024-06-07T05:03:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-07T05:03:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zine\\",\\"url\\":\\"https://jiange1236.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1717256416000,"updatedTime":1717736630000,"contributors":[{"name":"周子健","email":"183465355@qq.com","commits":3}]},"readingTime":{"minutes":0.98,"words":295},"filePathRelative":"study/土的分类.md","localizedDate":"2024年6月1日","excerpt":"<div class=\\"language-mermaid line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"mermaid\\" data-title=\\"mermaid\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">flowchart TB</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%% 图的方向说明</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%% LR：从左到图，RL：从右到左，TB：从上到下，BT：从下到上</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%% 连续连接</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">START([&gt;2mm质量比]) --&gt; |\\"&gt;50%\\"|stone{{&lt;0.075mm质量比}}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">START([&gt;2mm质量比]) --&gt; |\\"≤50%\\"|sand{{&gt;0.075mm质量比}}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">subgraph 粗粒土</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">stone --&gt; |\\"&gt;25%\\"|mix1(\\"含XX粗粒土(例：含黏土角砾)\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">mix1 --&gt; mixcu[碎石土分类]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">mix1 --&gt; mixxi[细粒土分类]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">stone --&gt; |\\"≤25%\\"|stone1[碎石土分类]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%% subgraph 碎石土分类</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%%  stone2[碎石土分类] --&gt; |\\"&gt;200mm质量比&gt;50%\\"|stone3(\\"漂石、块石\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%%  stone2 --&gt; |\\"&gt;20mm质量比&gt;50%\\"|stone4(\\"卵石、碎石\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%%  stone2 --&gt; |\\"&gt;2mm质量比&gt;50%\\"|stone5(\\"原砾、角砾\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%% end </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">sand --&gt; |\\"&gt;50%\\"|sand1[砂土分类]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%% subgraph 砂土分类</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%%  sand2[砂土分类] --&gt; |\\"&gt;2mm质量比25~50%\\"|sand3(\\"砾砂\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%%  sand2 --&gt; |\\"&gt;0.5mm质量比&gt;50%\\"|sand4(\\"粗砂\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%%  sand2 --&gt; |\\"&gt;0.25mm质量比&gt;50%\\"|sand5(\\"中砂\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%%  sand2 --&gt; |\\"&gt;0.075mm质量比&gt;85%\\"|sand6(\\"细砂\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%%  sand2 --&gt; |\\"&gt;0.075mm质量比&gt;50%\\"|sand7(\\"粉砂\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%% end </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">end</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">subgraph 细粒土</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">sand --&gt; |\\"≤50%\\"|mix2{{&gt;2mm质量比}}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">mix2 --&gt; |\\"&gt;25%\\"|mix3(\\"含XX细粒土(例：含碎石黏土)\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">mix2 --&gt; |\\"≤25%\\"|mixxi3[细粒土分类]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">mix3 --&gt; mixcu2[碎石土分类]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">mix3 --&gt; mixxi2[细粒土分类]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%% subgraph 细粒土分类</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%%  xili[细粒土分类] --&gt; |\\"Ip≤10\\"|fentu(\\"粉土\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%%  xili[细粒土分类] --&gt; |\\"Ip&gt;17\\"|niantu1(\\"黏土\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%%  xili[细粒土分类] --&gt; |\\"10&lt;Ip≤17\\"|niantu2(\\"粉质黏土\\")</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">%% end </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">end</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{B as comp,c as data};

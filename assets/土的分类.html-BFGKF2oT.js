import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-DNA9lu2T.js";const e={},o=t(`<div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">flowchart</span> TB
<span class="token comment">%% 图的方向说明</span>
<span class="token comment">%% LR：从左到图，RL：从右到左，TB：从上到下，BT：从下到上</span>

<span class="token comment">%% 连续连接</span>
START<span class="token text string">([&gt;2mm质量比])</span> <span class="token arrow operator">--&gt;</span> <span class="token label property">|&quot;&gt;50%&quot;|</span>stone<span class="token text string">{{&lt;0.075mm质量比}}</span>
START<span class="token text string">([&gt;2mm质量比])</span> <span class="token arrow operator">--&gt;</span> <span class="token label property">|&quot;≤50%&quot;|</span>sand<span class="token text string">{{&gt;0.075mm质量比}}</span>

<span class="token keyword">subgraph</span> 粗粒土
stone <span class="token arrow operator">--&gt;</span> <span class="token label property">|&quot;&gt;25%&quot;|</span>mix1<span class="token text string">(&quot;含XX粗粒土(例：含黏土角砾)&quot;)</span>
mix1 <span class="token arrow operator">--&gt;</span> mixcu<span class="token text string">[碎石土分类]</span>
mix1 <span class="token arrow operator">--&gt;</span> mixxi<span class="token text string">[细粒土分类]</span>
stone <span class="token arrow operator">--&gt;</span> <span class="token label property">|&quot;≤25%&quot;|</span>stone1<span class="token text string">[碎石土分类]</span>
<span class="token comment">%% subgraph 碎石土分类</span>
<span class="token comment">%%  stone2[碎石土分类] --&gt; |&quot;&gt;200mm质量比&gt;50%&quot;|stone3(&quot;漂石、块石&quot;)</span>
<span class="token comment">%%  stone2 --&gt; |&quot;&gt;20mm质量比&gt;50%&quot;|stone4(&quot;卵石、碎石&quot;)</span>
<span class="token comment">%%  stone2 --&gt; |&quot;&gt;2mm质量比&gt;50%&quot;|stone5(&quot;原砾、角砾&quot;)</span>
<span class="token comment">%% end </span>
sand <span class="token arrow operator">--&gt;</span> <span class="token label property">|&quot;&gt;50%&quot;|</span>sand1<span class="token text string">[砂土分类]</span>
<span class="token comment">%% subgraph 砂土分类</span>
<span class="token comment">%%  sand2[砂土分类] --&gt; |&quot;&gt;2mm质量比25~50%&quot;|sand3(&quot;砾砂&quot;)</span>
<span class="token comment">%%  sand2 --&gt; |&quot;&gt;0.5mm质量比&gt;50%&quot;|sand4(&quot;粗砂&quot;)</span>
<span class="token comment">%%  sand2 --&gt; |&quot;&gt;0.25mm质量比&gt;50%&quot;|sand5(&quot;中砂&quot;)</span>
<span class="token comment">%%  sand2 --&gt; |&quot;&gt;0.075mm质量比&gt;85%&quot;|sand6(&quot;细砂&quot;)</span>
<span class="token comment">%%  sand2 --&gt; |&quot;&gt;0.075mm质量比&gt;50%&quot;|sand7(&quot;粉砂&quot;)</span>
<span class="token comment">%% end </span>
<span class="token keyword">end</span>

<span class="token keyword">subgraph</span> 细粒土
sand <span class="token arrow operator">--&gt;</span> <span class="token label property">|&quot;≤50%&quot;|</span>mix2<span class="token text string">{{&gt;2mm质量比}}</span>
mix2 <span class="token arrow operator">--&gt;</span> <span class="token label property">|&quot;&gt;25%&quot;|</span>mix3<span class="token text string">(&quot;含XX细粒土(例：含碎石黏土)&quot;)</span>
mix2 <span class="token arrow operator">--&gt;</span> <span class="token label property">|&quot;≤25%&quot;|</span>mixxi3<span class="token text string">[细粒土分类]</span>
mix3 <span class="token arrow operator">--&gt;</span> mixcu2<span class="token text string">[碎石土分类]</span>
mix3 <span class="token arrow operator">--&gt;</span> mixxi2<span class="token text string">[细粒土分类]</span>
<span class="token comment">%% subgraph 细粒土分类</span>
<span class="token comment">%%  xili[细粒土分类] --&gt; |&quot;Ip≤10&quot;|fentu(&quot;粉土&quot;)</span>
<span class="token comment">%%  xili[细粒土分类] --&gt; |&quot;Ip&gt;17&quot;|niantu1(&quot;黏土&quot;)</span>
<span class="token comment">%%  xili[细粒土分类] --&gt; |&quot;10&lt;Ip≤17&quot;|niantu2(&quot;粉质黏土&quot;)</span>
<span class="token comment">%% end </span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[o];function l(p,r){return s(),a("div",null,i)}const d=n(e,[["render",l],["__file","土的分类.html.vue"]]);export{d as default};

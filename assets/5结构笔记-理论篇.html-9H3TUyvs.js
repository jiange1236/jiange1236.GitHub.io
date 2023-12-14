import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as p,a as r}from"./app-IsEvEAQV.js";const a="/assets/clipboard-jlPsTln5.png",h={},e=r('<p>[TOC]</p><h1 id="楼板计算模型" tabindex="-1"><a class="header-anchor" href="#楼板计算模型" aria-hidden="true">#</a> 楼板计算模型</h1><p>1、刚性板：平面内刚度无穷大，平面外刚度为0。 其主要用于大部分有梁体系的板，一般的非特别厚的板，平面内刚度无穷大和平面外刚度为0，相对的都是梁的刚度。</p><p>2、弹性板6：真实计算板平面内外的刚度（这里的真实计算是素砼的刚度，不包括钢筋）。 其主要用于“板柱结构”以及“板柱－剪力墙结构”，这种结构没有梁，不考虑板的平面外刚度就不合理了，所以需要考虑板平面外的刚度。</p><p>从理论上说，弹性板6假定是最符合楼板的实际情况，可应用于任何工程。但是实际上，采用弹性板6假定时，部分竖向楼面荷载将通过楼板的面外刚度直接传递给竖向构件，从而导致梁的弯距减小，相应的配筋也比刚性楼板假定减少。而过去所有关于梁的工程经验都是与刚性楼板假定前提下配筋安全储备相对应的。所以，建议不要轻易采用弹性楼板6假定。弹性板6假定是针对“板柱结构”以及“板柱－剪力墙结构”提出的，因为对于这类结构，采用弹性楼板6假定既可以较真实地模拟楼板的刚度和变形，又不存在梁配筋安全储备减小的问题。</p><p>3、弹性板3：平面内刚度无穷大，真实计算平面外刚度。</p><p>它的应用范围和弹性板6是一样的，主要用于“板柱结构”以及“板柱－剪力墙结构”，尤其是楼板特别厚的时候，这种模型更复合实际结构受力特点。</p><p>弹性楼板3假定主要是针对厚板转换层结构的转换厚板提出的。因为这类结构楼板平面内刚度都很大，其平面外刚度是这类结构传力的关键。通过厚板的平面外刚度，改变传力路径，将厚板以上部分结构承受的荷载安全地传递下去。当板柱结构的楼板平面外刚度足够大时，也可采用弹性楼板3来计算。</p><p>4、弹性膜：真实计算楼板平面内刚度，平面外为0。</p><p>该假定是采用平面应力膜单元真实计算楼板的平面内刚度，同时忽略楼板的平面外刚度，即假定楼板平面外刚度为0。该假定适用于“空旷的工业厂房和体育场馆结构”、“楼板局部开大洞结构”、“楼板平面较长或有较大凹入以及平面弱连接结构”。</p><p>最大层间位移、位移比是在刚性楼板假设下的控制参数。构件设计与位移信息不是在同一条件下的结果（即构件设计可以采用弹性楼板计算，而位移计算必须在刚性楼板假设下获得），故可先采用刚性楼板算出位移，而后采用弹性楼板进行构件分析。如果没有勾选刚性楼板假定这一项，意味着当该房间定义了板厚为零或全房间洞时,楼层就会产生&quot;弹性节点&quot;，普通楼面只要不开洞的楼板还是按刚性假定计算内力，即平面内无限刚，平面外为零。在特殊构件里定义不同类型的弹性楼板和不勾选刚性楼板假定的区别是后者会自动对有楼板的房间默认为刚性楼板。</p><p>由于“刚性楼板假定”和弹性膜没有考虑楼板的面外刚度，所以才通过“梁刚度放大系数”来提高梁面外弯曲刚度，以弥补面外刚度的不足，同样，也可通过“梁扭矩折减系数”来适当折减梁的设计扭矩。而弹性板6与弹性板3都是真实的考虑了楼板的面外刚度，所以是不需要调整两个系数的，都取1就可以了。</p><h6 id="楼板假定" tabindex="-1"><a class="header-anchor" href="#楼板假定" aria-hidden="true">#</a> 楼板假定</h6><table><thead><tr><th>楼板假定</th><th>平面内刚度</th><th>平面外刚度</th><th>适用范围</th></tr></thead><tbody><tr><td>刚性楼板</td><td>无限刚度</td><td>0</td><td>常规楼板</td></tr><tr><td>弹性楼板6</td><td>考虑</td><td>考虑</td><td>板柱-剪力墙结构、厚板转换结构</td></tr><tr><td>弹性楼板3</td><td>无限刚度</td><td>考虑</td><td>厚板转换结构板柱结构的地下室层</td></tr><tr><td>弹性膜</td><td>考虑</td><td>0</td><td>1.空旷结构、楼板开大洞、狭长板带2.有较大凹入楼板3.连体多塔结构的弱连接楼板4.框支转换层楼板</td></tr><tr><td>用刚性楼板假定进行抗震计算，<br>用弹性板假定进行内力和配筋计算</td><td>软件采用刚性楼板假定模型进行计算的内容主要有：层刚心、层间剪力与层间位移之比方式计算的层刚度、位移比、位移角、刚重比等</td><td></td><td></td></tr></tbody></table><p><strong>弹性板应用注意事项</strong></p><p>（1）设定弹性楼板应连续，不应出现弹性楼板和刚性楼板相间布置的情况</p><p>（2）整体指标计算采用刚性楼板假定，配筋计算时采用弹性楼板</p><p>（3）梁两侧是弹性楼板时，梁扭矩宜不折减或少折减</p><p>（4）计算参数勾选“梁与弹性板变形协调 ”</p><h1 id="坡屋顶" tabindex="-1"><a class="header-anchor" href="#坡屋顶" aria-hidden="true">#</a> 坡屋顶</h1><p>斜楼板采用弹性板计算</p><p>支撑斜杆最好布置在上部楼层</p><p><strong>坡屋面的建模应注意的要点如下：</strong></p><ol><li><p>采用调整上节点高的方式，形成坡屋面。</p><p>用户应将坡屋面屋脊处的最高的高度设为层高，坡屋面下的其它节点的上节点高一般为负值。不宜将坡屋面较低处设为层高，对其它节点的上节点高输入正值。因为层高过小将引起很多有关层指标计算不正常。</p></li><li><p>坡屋面的下檐布置封口梁。</p><p>为了生成坡屋面的楼板，坡屋面的下檐应设置封口梁。有时，坡屋面楼层外沿的封口梁和其下层楼面的封口梁处于同一位置，两者是重合的，它们同时连接下层楼板和坡屋面层的斜板，并同时承担两层楼板传来的荷载。在两层同样位置输入同样的梁，程序如果不作特殊处理，它们只分别承担各自楼层的载，这与实际受力情况不相符合。而且同一位置输两根梁将造成结构刚度的重复输入，计算也不准。但是，如果只在某一层输梁，另一层不输，则缺梁的楼层不能生成楼面檐口处的楼板，传导不了楼面荷载。</p><p>为此，结构计算程序专门设计了对这种上下层同一位置重合梁的荷载合并和删除机制。即把上下两层梁的荷载合并，将它们作用到下层梁上。然后将上层的梁在计算时删除。这种荷载合并和删除机制将保证坡屋面檐口梁结构的正确计算和设计。</p><p>对这种坡屋面结构的封口梁处分层输入时，可在下层输入实际尺寸的梁，在坡屋面层输入尺寸为 100*100 的虚梁。坡屋面层封口梁的作用是为了生成坡屋面的屋面板和楼板导荷，由于在封口梁的位置同时存在下层的楼层梁，程序在计算时将仅保留一根梁，所以会自动将上层虚梁上的荷载加到下层楼层梁上。类似于这种坡屋面上层斜楼板和下层平楼板通过封口梁连接的结构还有体育场看台等。</p><p>封口虚梁本身没有设计意义，在设计阶段可忽略。</p></li><li><p>围成斜板的杆件应该共面。</p><p>由于建模中房间楼板由梁、墙围成而自动生成，板周边构件共面是指板周的梁、墙顶节点均位于同一空间平面内。在楼板配筋时对于不共面的斜板仍当做投影在平面上的楼板计算，是否共面对楼板配筋影响不大。但是对于上部结构计算有影响。上部结构计算程序自动把斜板按照弹性膜计算，但是程序要求板的边界节点必须共面，对于不共面的斜板，程序将忽略它的存在，因为不共面的斜板可能导致计算异常。计算模型中斜板的缺失可能达不到设计预想的效果。在建模过程中建议通过以下几点做法尽量控制斜板顶点的共面：</p><ol><li><p>通过上节点高统一调整与节点相连的构件标高。</p><p>设置上节点高的对话框中有选择三点确定一个空间平面，从而成批设置上节点高在一个平面内的功能</p></li><li><p>对于一般的矩形斜板，注意同侧节点的标高一致，否则将造成斜板端点不共面而无法正确形成斜板。</p></li><li><p>对于类似坡屋面转角处的复杂情况，如果板周边杆件确实无法共面建模，则可考虑增加虚梁将斜板分成几块共面板分别建模。</p></li><li><p>围成斜板的柱、梁、墙构件的偏心不宜过大。由于在生成计算模型的过程中，对于节点相连的构件存在偏心的情况，节点将遵照一定的规则根据构件偏心进行坐标的调整，使节点尽量位于构件的中心线交点处。对于平板情况，调整顶点的 x， y 坐标并不会影响到板顶点的共面，但对于斜板，则顶点坐标的调整可能造成原先共面的顶点变为不共面，从而造成斜板的丢失。</p></li></ol></li></ol><p><strong>判断斜板不共面或斜板丢失的方法</strong></p><p>用户在使用软件的过程中，可以通过以下二种方式判断坡屋面或斜坡结构的斜板是否正确生成。</p><p>在建模的楼板输入菜单下，通过三维轴测显示方式可以直观的看到楼板的生成效果，共面的斜板可以达到满意的设计效果，但是不共面的斜板则被显示为在楼层标高处的平板。如下图所示，对于斜板不能正常生成的情况一目了然。</p><p>但由于前文所述的偏心等原因，即使建模中能正常显示的斜板，在计算模型中也可能被判断为不共面而过滤。因此，最直接的方式还是直接在前处理的轴侧简图中观察是否显示出斜板的单元划分结果。</p><ol start="4"><li><p>在一个楼层内一个房间仅能生成一块对应楼板。</p><p>有的模型的分层模型中，出现一个房间上对应了上下两层斜板的情况。例如同一标准层中局部通过增加层间梁建立了两层坡道，但程序仅能生成一个坡道上的斜板，即此建模方式将造成局部斜板的丢失</p></li></ol><h1 id="连梁、框架梁、次梁、基础梁、基础拉梁-连系梁-的区别" tabindex="-1"><a class="header-anchor" href="#连梁、框架梁、次梁、基础梁、基础拉梁-连系梁-的区别" aria-hidden="true">#</a> 连梁、框架梁、次梁、基础梁、基础拉梁（连系梁）的区别</h1><p>有些设计人对连梁、框架梁、次梁和基础拉梁(承台或独立柱基间的联系梁)的构造和使用范围不清楚，从而导致使用不当。现结合规范、标准图集和构造手册对这个问题加以说明。</p><p><strong>1、连梁和框架梁：</strong></p><p>连梁是指两端与剪力墙相连且跨高比小于5的梁（具体条文详见“高规”第7.1.8条）；框架梁是指两端与框架柱相连的梁，或者两端与剪力墙相连但跨高比不小于5的梁。</p><p>两者相同之处在于：一方面从概念设计的角度来说，在抗震时都希望首先在框架梁或连梁上出现塑性铰而不是在框架柱或剪力墙上，即所谓“强柱弱梁”或“强墙弱连梁”；另一方面从构造的角度来说，两者都必须满足抗震的构造要求，具体说来框架梁和连梁的纵向钢筋（包括梁底和梁顶的钢筋）在锚入支座时都必须满足抗震的锚固长度的要求，对应于相同的抗震等级框架梁和连梁箍筋的直径和加密区间距的要求是一样的。</p><p>一端搭在柱上一端搭在剪力墙/主梁上的梁是框架梁 13G101-11 4-8节</p><p>两者不相同之处在于，在抗震设计时，允许连梁的刚度有大幅度的降低，在某些情况下甚至可以让其退出工作，但是框架梁的刚度只允许有限度的降低，且不允许其退出工作，所以规范规定次梁是不宜搭在连梁上的，但是次梁是可以搭在框架梁上的。一般说来连梁的跨高比较小（小于5），以传递剪力为主，所以规范对连梁在构造上作了一些与框架梁不同的规定，①连梁的箍筋是全长加密而框架梁可以分为加密区和非加密区；</p><p>②对连梁的腰筋作了明确的规定即“墙体水平分布钢筋应作为连梁的腰筋在连梁范围内拉通连续配置；当连梁截面高度大于700mm时，其两侧面沿梁高范围设置的纵向构造钢筋（腰筋）的直径不应小于10mm，间距不应大于200mm；对跨高比不大于2.5的连梁，梁两侧的纵向构造钢筋（腰筋）的面积配筋率不应小于0.3%”且将其纳入了强条的规定，而框架梁的腰筋只要满足“当梁的腹板高度hw≥450mm时，在梁的两个侧面应沿高度配置纵向构造钢筋，每侧纵向<strong>构造钢筋</strong>(不包括梁上、下部受力钢筋及架立钢筋)的截面面积不应小于腹板截面面积bhw的0.1%，且其间距不宜大于200mm。（砼规 9.2.13）” 且不是强条的规定；</p><p>③连梁钢筋在支座处锚固为lae及600mm，框架梁为lae；</p><p>④连梁腰筋的锚固为受拉锚固，框架梁分两种：构造腰筋为一般锚固，受扭腰筋为受拉锚固。</p><p>⑤顶层连梁支座内设箍筋，框架梁无此要求；</p><p>⑥连梁高度大于700mm腰筋不小于0.3%，剪跨比小于2.5时腰筋直径不小于10.</p><p>在施工图审查的过程中发现设计人常犯的错误有：一是把两端与剪力墙相连且跨高比小于5的梁编成了框架梁，而且箍筋有加密区和非加密区，或把跨高比不小于5的梁编成了连梁；二是在连梁的配筋表中不区分连梁的高度和跨高比而笼统的在说明中交待一句“连梁腰筋同剪力墙的水平钢筋”，这时如果连梁中有梁高大于700mm或跨高比不大于2.5而剪力墙墙身配筋率小于0.3%或水平分布筋的直径不大于8mm时，容易违反“高规”第7.2.26条的规定，而且该条还是强条，这应引起设计人经的注意。</p><p><strong>连梁的作用：</strong></p><p>剪力墙连梁承担上部荷载时，要保证竖向荷载承载力和正常使用极限状态的设计要求</p><p>连梁刚度可以折减，地震烈度越高折减越多，即允许大震下连梁开裂</p><p>连梁不应设计太强，连梁的开裂和损坏可以吸收地震力，保护剪力墙，有利于提高结构的延性和实现多道抗震设防的目标</p><p>连梁刚度折减是针对抗震设计的，对非抗震设计和以风荷载控制为主的地区，连梁刚度不宜折减</p><p><strong>2、框架梁和次梁:</strong></p><p>一般情况下，次梁是指两端搭在框架梁上的梁。这类梁是没有抗震要求的，因此在构造上它与框架梁有以下不同，现以国标图集”03G101-1”为例加以说明：</p><p>(1) 次梁梁顶钢筋在支座的锚固长度为受拉锚固长度la，而框架梁的梁顶钢筋在支座的锚固长度为抗震锚固长度laE。</p><p>(2) 次梁梁底钢筋在支座的锚固长度一般情况下为12d，而框架梁的梁底钢筋在支座的锚固长度为抗震锚固长度laE。</p><p>(3) 次梁的箍筋没有最小直径的要求、没有加密区和非加密区的要求，只需满足计算要求即可。而框架梁根据不同的抗震等级对箍筋的直径和间距有不同的要求，不但要满足计算要求，还要满足构造要求。</p><p>(4) 在平面表示法中，框架梁的编号为KL，次梁的编号为L。</p><p>在实际的施工图中，设计人员容易犯的错误主要有以下两类：一是在次梁的平法表示中，对箍筋按加密区和非加密区来表示，如φ8@100/200等。二是当次梁为单跨简支梁时，支座的负筋数量往往不满足“混凝土规范”第10.2.6条的规定（第10.2.6条 当梁端实际受到部分约束但按简支计算时，应在支座区上部设置纵向构造钢筋，其截面面积不应小于梁跨中下部纵向受力钢筋计算所需截面面积的四分之一，且不应少于两根）。</p><p><strong>3、 基础拉梁（连系梁）与次梁：</strong></p><p>基础拉梁是指两端与承台或独立柱基相连的梁，与次梁相同之处在于基础拉梁也是没有抗震要求的、基础拉梁的梁顶钢筋在支座的锚固长度也为受拉锚固长度la、基础拉梁的箍筋也没有加密区和非加密区的要求。与次梁不同之处在于基础拉梁的梁底钢筋也必须满足受拉锚固长度la的要求、基础拉梁的宽度不应小于250mm、基础拉梁除按计算要求确定外梁内上下纵向钢筋直径不应小于12mm且不应少于2根（详见“地基规范”第8.5.23条）、箍筋不少于Φ6＠200（详见《全国民用建筑工程设计技术措施 结构篇》第3.12.1-9条）</p><p>在实际的施工图中，设计人员容易犯的错误主要是将基础拉梁简单套用框架梁的平法表示，编号为JKL，对箍筋按加密区和非加密区来表示，如φ8@100/200等。而现有的国标平法图集中并没有专门针对基础拉梁的构造，如果设计人员想借用平法图集的话，将基础拉梁编号为JLL较为合适，同时应在说明中注明JL的配筋构造应按“03G101-1”中次梁（非框架梁）的配筋构造执行，同时梁底钢筋锚入支座的长度必须满足受拉锚固长度la的要求。</p><h6 id="连梁、框架梁、非框架梁、地基拉梁的区别" tabindex="-1"><a class="header-anchor" href="#连梁、框架梁、非框架梁、地基拉梁的区别" aria-hidden="true">#</a> 连梁、框架梁、非框架梁、地基拉梁的区别</h6><table><thead><tr><th></th><th>连梁</th><th>框架梁</th><th>次梁(非框架梁)</th><th>地基拉梁</th></tr></thead><tbody><tr><td>是否有抗震要求</td><td>有</td><td>有</td><td>无</td><td>无</td></tr><tr><td>梁顶钢筋的锚固要求</td><td>抗震锚固长度laE</td><td>抗震锚固长度laE</td><td>受拉锚固长度la</td><td>受拉锚固长度la</td></tr><tr><td>梁底钢筋的锚固要求</td><td>抗震锚固长度laE</td><td>抗震锚固长度laE</td><td>12d</td><td>受拉锚固长度la</td></tr><tr><td>箍筋的要求</td><td>除满足计算要求外，箍筋沿梁全长加密，直径和间距应满足规范的要求</td><td>除满足计算要求外，箍筋加密区和非加密区的直径和间距应满足规范的要求</td><td>按计算要求配置，没有加密区和非加密区的要求</td><td>按计算要求配置，且箍筋不少于Φ6＠200，没有加密区和非加密区的要求</td></tr><tr><td>梁的编号</td><td>LL</td><td>KL</td><td>L</td><td>JLL</td></tr></tbody></table><p><strong>4、基础梁与基础拉梁：</strong></p><p>1)基础梁：是作为上部建筑的基础，将上部荷载传至地基，起到承重和抗弯功能。</p><p>一般是基础梁的基础结构中，无承台，上部有框架柱，箍筋在基础梁上（即使是柱位置）都是满布。</p><p>基础梁没有底部模板，底标高就是基础底标高 详见16G101-3 P79</p><p>基础梁、板上部钢筋应在支座处搭接，下部钢筋应在跨中1/3范围内搭接；搭接接头长度范围内的梁箍筋间距不应</p><p>2）基础连梁（基础连系梁、基础拉梁）：指连接独立基础、条形基础或桩基承台的梁，不承担由柱传来的荷载。</p><p>基础连系梁底标高则高于两临基础的底标高，有底部模板，是拉梁；</p><p>调节基础的不均匀沉降，可在上面布置砖墙，不做抗震要求。</p><p>多跨基础连梁以柱为支座，单跨基础连梁（若图纸未注明），以承台（或独立基础）为支座，详见16G101-3 P105。</p><p>3）基础拉梁应该和基础连梁是一个概念。</p><p>地梁专业术语叫地圈梁,其的作用主要是调节可能发生的不均匀沉降,加强基础的整体性,也使地基反力更均匀点,同时还具有圈梁的作用和防水防潮的作用同时条形基础的埋深过大时,接近地面的圈梁可以作为首层计算高度的起算点,地圈梁一般用于砖混、砌体结构中,不起承重作用,对砌体有约束作用,有利于抗震。</p><p>4）基础连梁与基础梁是不同的受力考虑，基础连梁是按联系梁考虑，基本不考虑地基反力，按简支梁配置；基础梁是按连续梁考虑，如有筏板、条基等要考虑地基反力，配筋要求大相反。</p><h1 id="地震影响系数曲线" tabindex="-1"><a class="header-anchor" href="#地震影响系数曲线" aria-hidden="true">#</a> 地震影响系数曲线</h1><h6 id="不同阻尼比时的衰减指数和调整系数" tabindex="-1"><a class="header-anchor" href="#不同阻尼比时的衰减指数和调整系数" aria-hidden="true">#</a> 不同阻尼比时的衰减指数和调整系数</h6><table><thead><tr><th>阻尼比ζ</th><th>阻尼调整系数η2</th><th>曲线下降段衰减指数γ</th><th>直线下降段斜率调整系数η</th></tr></thead><tbody><tr><td>0.02</td><td>1.268</td><td>0.971</td><td>0.026</td></tr><tr><td>0.03</td><td>1.156</td><td>0.942</td><td>0.024</td></tr><tr><td>0.04</td><td>1.069</td><td>0.919</td><td>0.022</td></tr><tr><td>0.05</td><td>1.000</td><td>0.900</td><td>0.020</td></tr><tr><td>0.10</td><td>0.792</td><td>0.844</td><td>0.013</td></tr><tr><td>0.15</td><td>0.688</td><td>0.817</td><td>0.009</td></tr><tr><td>0.2</td><td>0.625</td><td>0.800</td><td>0.006</td></tr><tr><td>0.3</td><td>0.551</td><td>0.781</td><td>0.002</td></tr></tbody></table><h1 id="规定水平力-srss法-cqc法" tabindex="-1"><a class="header-anchor" href="#规定水平力-srss法-cqc法" aria-hidden="true">#</a> 规定水平力 / SRSS法 / CQC法</h1><table><thead><tr><th></th><th>SRSS法（平方和平方根法）</th><th>规定水平力</th><th>CQC法（完全二次项平方根法）</th></tr></thead><tbody><tr><td><strong>定义</strong></td><td>平动(不考虑扭转耦联)的振型分解反应谱法</td><td>一般可采用振型组合后的楼层地震剪力换算的水平作用力，并考虑偶然偏心</td><td>扭转耦联的振型分解反应谱法</td></tr><tr><td><strong>适用范围</strong></td><td>规则结构</td><td>计算扭转位移比时，楼层位移和层间位移的计算采用规定水平力<br>（抗3.4.3 高3.4.5条文说明）</td><td>不规则结构</td></tr><tr><td>^^</td><td>^^</td><td>对框剪、框筒结构体系进行判别时，底部倾覆力矩的计算应采用规定水平力<br>（抗6.1.3、8.1.3）</td><td>其他情况下的楼层位移、层间位移角、楼层剪力等计算采用CQC组合</td></tr><tr><td><strong>规范来源</strong></td><td>高4.3.9 抗5.2.2</td><td></td><td>高4.3.10 抗5.2.3</td></tr></tbody></table><h1 id="偶然偏心-扭转耦联-单-双向地震" tabindex="-1"><a class="header-anchor" href="#偶然偏心-扭转耦联-单-双向地震" aria-hidden="true">#</a> 偶然偏心 / 扭转耦联 / 单/双向地震</h1><table><thead><tr><th></th><th>规则多层结构</th><th>规则高层结构</th><th>不规则多层结构</th><th>不规则高层结构</th></tr></thead><tbody><tr><td><strong>地震类型</strong></td><td>单向地震</td><td>单向地震</td><td>双向地震</td><td>MAX{①,②}<br>①单向地震+偶然偏心+扭转耦联；<br>②双向地震+扭转耦联</td></tr><tr><td><strong>偶然偏心</strong><br><strong>高 4.3.3</strong></td><td>可不考虑</td><td>应考虑</td><td>可不考虑</td><td>^^</td></tr><tr><td><strong>扭转耦联</strong><br><strong>高 4.3.10</strong></td><td>可不考虑但应放大地震作用</td><td>①≤100m：可不考虑但应放大地震作用<br>②&gt;100m：应考虑</td><td>应考虑</td><td>^^</td></tr><tr><td><strong>规范来源</strong></td><td>抗规 5.2.3-1</td><td>抗规 5.2.3-1<br> 高规 4.3.3、4.3.4</td><td>抗规 5.1.1-3</td><td>抗规 5.1.1.-3<br>高规 4.3.2、4.3.3条文</td></tr><tr><td><strong>周期比</strong></td><td>不考虑偶然偏心，单向地震计算<br>高 3.4.5条文说明</td><td>&lt;&lt;</td><td>&lt;&lt;</td><td>&lt;&lt;</td></tr><tr><td><strong>位移比</strong></td><td>考虑偶然偏心，单向地震计算，不考虑双向地震+扭转耦联<br>高3.4.5</td><td>&lt;&lt;</td><td>&lt;&lt;</td><td>&lt;&lt;</td></tr><tr><td><strong>底部剪力法</strong></td><td>考虑偶然偏心<br> 高 4.3.3条文说明</td><td>&lt;&lt;</td><td>&lt;&lt;</td><td>&lt;&lt;</td></tr></tbody></table><h1 id="钢结构-砼结构耗能区别" tabindex="-1"><a class="header-anchor" href="#钢结构-砼结构耗能区别" aria-hidden="true">#</a> 钢结构 / 砼结构耗能区别</h1><p>钢结构：强度高，延性好，适于抗震，存在稳定问题和防火问题。利用抗剪耗能（即利用节点域耗能），其抗震措施只跟高度、烈度等有关；钢筋混凝土结构：利用抗弯耗能，通过抗震等级来实现抗震措施。</p><p>钢框架支撑结构破坏机理：耗能梁段（剪切变形）——节点域（剪切变形耗能）——框架（弯曲变形）——柱（弯曲变形）——连接（强）；钢筋混凝土框架剪力墙结构破坏机理：连梁（弯曲变形）——剪力墙——框架（弯曲变形）——柱（弯曲变形）——节点或连接（强）</p><p>提高砼梁延性：减小砼相对受压区高度（减少受拉配筋、配置受压钢筋、采用T形截面和提高砼强度等级）</p><h1 id="高层建筑风振效应设计规定汇总" tabindex="-1"><a class="header-anchor" href="#高层建筑风振效应设计规定汇总" aria-hidden="true">#</a> 高层建筑风振效应设计规定汇总</h1><table><thead><tr><th>项目</th><th>情况（朱高 3.7.6）</th><th>&lt;&lt;</th><th>要求</th><th>理解和应用</th></tr></thead><tbody><tr><td>顺风向风振</td><td>高层建筑</td><td>H&gt;30m且H/B&gt;1.5</td><td>应考虑风压脉动对结构产生的顺风向风振影响</td><td>高 3.7.6</td></tr><tr><td>^^</td><td>高耸结构</td><td>T1&gt;0.2s</td><td>^^</td><td>^^</td></tr><tr><td>^^</td><td>对风敏感的结构（如：膜结构等）</td><td>&lt;&lt;</td><td>应考虑风压脉动对结构产生的顺风向风振影响</td><td></td></tr><tr><td>^^</td><td>跨度大于36m的柔性结构</td><td>&lt;&lt;</td><td>^^</td><td>^^</td></tr><tr><td>^^</td><td>一般竖向悬臂结构<br>（如：高层建筑、构架、塔架、烟囱等高耸结构）</td><td>&lt;&lt;</td><td>均可仅考虑结构第一振型的影响</td><td>荷 8.1.1</td></tr><tr><td>横风向风振</td><td>横风向风振作用效应明显的高层建筑<br>（如：房屋高度H&gt;150m或高宽比H/B&gt;5时）</td><td>&lt;&lt;</td><td>宜考虑横向风振的影响，依据荷 8.5.2条规定，确定横风向风振的等效风荷载</td><td>荷 附录J、H.1、H.2</td></tr><tr><td>^^</td><td>细长的圆形平面构筑物<br>（如：高度H&gt;30m且高宽比H/D&gt;4时）</td><td>&lt;&lt;</td><td>^^</td><td>^^</td></tr><tr><td>^^</td><td>圆形平面的结构</td><td>Re&lt;3×10^5，且v~H~&gt;v~cr~</td><td>采取结构构造措施或控制vcr≥15m/s</td><td></td></tr><tr><td>^^</td><td>^^</td><td>3×10^5≤Re&lt;3.5×10^6</td><td>可不作处理</td><td>^^</td></tr><tr><td>^^</td><td>^^</td><td>Re&lt;3×10^5，且v~H~&gt;v~cr~</td><td>应考虑横风向风振的等效风荷载</td><td>^^</td></tr><tr><td>扭转风振</td><td>高层建筑H&gt;150m</td><td>。。。</td><td>宜考虑扭转风振的影响，宜通过风洞试验确定</td><td></td></tr><tr><td>^^</td><td>其他高层建筑</td><td>。。。</td><td>可按荷 附录H.3计算扭转风振等效风荷载</td><td></td></tr><tr><td>^^</td><td>其他复杂情况</td><td>&lt;&lt;</td><td>应进行风洞试验并专门研究</td><td></td></tr><tr><td>组合</td><td>风荷载组合工况要求</td><td>&lt;&lt;</td><td>见荷 8.5.6</td><td></td></tr></tbody></table><h1 id="影响建筑结构抗震设计的主要因素" tabindex="-1"><a class="header-anchor" href="#影响建筑结构抗震设计的主要因素" aria-hidden="true">#</a> 影响建筑结构抗震设计的主要因素</h1><ol><li>确定主体结构的体系</li><li>选择主要的结构用材料</li><li>考虑关键部位的构造措施</li><li>合理地建议先进的施工技术</li></ol><table><thead><tr><th>影响因素</th><th>&lt;&lt;</th><th>原因分析</th><th>设计措施及设计建议</th></tr></thead><tbody><tr><td>地震的不确定性</td><td>震源问题</td><td>实际地震的不可预知性</td><td>采用三水准及抗震性能设计方法</td></tr><tr><td>^^</td><td>地震的传播问题</td><td>地震传播的复杂性</td><td>对特殊工程考虑多向多维地震作用</td></tr><tr><td>^^</td><td>场地问题</td><td>场地对地震的放大和滤波作用</td><td>考虑场地特性及其对基岩波的放大作用</td></tr><tr><td>计算假定及计算方法问题</td><td>刚性楼板假定</td><td>实际工程楼板的缺失与削弱</td><td>采用弹性楼板或分块刚性楼板假定进行补充计算</td></tr><tr><td>^^</td><td>空间分析模型的适应性问题</td><td>楼板缺失严重时结构的整体工作能力降低</td><td>采用弹性楼板模型或平面结构分析程序进行补充计算</td></tr><tr><td>^^</td><td>倾覆力矩比问题</td><td>计算方法不同，计算结果也不同，结构体系也受影响</td><td>采用不同方法比较计算，对少量剪力墙的框架结构中的框架和剪力墙采用性能设计方法</td></tr><tr><td>^^</td><td>刚度比问题</td><td>不同结构不同部位计算方法不同，计算结果也不同</td><td>采用不同方法比较计算</td></tr><tr><td>^^</td><td>上部结构嵌固部位的确定</td><td>涉及刚度比的计算及回填土对地下室的约束问题</td><td>合理选用刚度比的计算方法，注重地下室周围填土对地下室刚度的影响</td></tr><tr><td>^^</td><td>上部结构与地基基础对嵌固端的计算假定问题</td><td>上部结构计算时下端假定为嵌固端，地基基础设计时基础有差异沉降</td><td>地基基础采用调平设计方法，对地基沉降影响较大的楼层（如地面以上5层以下的楼层），适当考虑地基不均匀沉降的影响并采取相应的结构措施</td></tr><tr><td>^^</td><td>嵌固端的计算模型问题</td><td>地下室顶面的绝对嵌固和相对嵌固问题</td><td>合理确定不同嵌固计算模型时上部结构首层与二层的侧向刚度比</td></tr><tr><td>^^</td><td>竖向加载模型</td><td>加载模型与混凝土构件实际强度形成的关系问题，未考虑地基的不均匀沉降的影响</td><td>综合考虑影响加载及竖向变形的各种因素，合理取用竖向加载计算模型</td></tr><tr><td>^^</td><td>计算的刚域问题</td><td>影响梁端内力及强柱弱梁的实现</td><td>地震区建筑应考虑刚域的影响，有条件时应将梁柱节点全部取为刚域计算</td></tr><tr><td>^^</td><td>二阶效应及倾覆稳定计算</td><td>未考虑基础倾斜的影响</td><td>对高宽比较大的工程，二阶效应、刚重比及倾覆稳定验算时应适当留有余地</td></tr><tr><td>^^</td><td>地震作用的计算</td><td>单向地震和双向地震作用问题</td><td>扭转效应明显时应考虑双向地震作用</td></tr><tr><td>^^</td><td>偶然偏心与双向地震作用</td><td>单向地震作用计算应考虑偶然偏心，双向地震作用计算可不考虑偶然偏心</td><td>对长矩形平面，当采用5%偶然偏心计算明显不合理时，可按双向地震作用进行比较计算</td></tr><tr><td>^^</td><td>框架柱的单偏压与双偏压</td><td>计算方法不同，计算结果差异较大</td><td>考虑单向地震作用时，按双偏压计算，考虑双向地震作用时，按单偏压计算，角柱应按双偏压计算</td></tr><tr><td>计算参数的选取问题</td><td>填充墙的刚度影响</td><td>填充墙对主体结构的影响有刚度及扭转等诸多问题</td><td>对刚度的考虑属于估算的范畴，还要注意填充墙平面和立面布置的均匀对称性问题</td></tr><tr><td>^^</td><td>梁端弯矩的调幅</td><td>影响延性及强柱弱梁</td><td>抗震设计的工程应考虑梁端弯矩调幅</td></tr><tr><td>^^</td><td>梁刚度放大系数</td><td>考虑现浇楼板对梁刚度的影响</td><td>是对梁刚度的估算，宜按规范的规定，对中梁和边梁采用相应的刚度放大系数，不宜采用程序自动计算的梁刚度放大系数</td></tr><tr><td>计算配筋与实配的失衡问题</td><td>梁端负弯矩配筋</td><td>梁端计算截面和实际控制截面不一致，造成梁端实际配筋过大</td><td>加大了强柱弱梁实现的难度，建议可按梁净跨设计计算，并适当考虑梁端弯矩调幅</td></tr><tr><td>^^</td><td>梁端正弯矩钢筋配置过大</td><td>跨中配筋直通支座，造成梁端正弯矩配筋过大，程序在强柱弱梁验算中未能考虑</td><td>加大了强柱弱梁实现的难度，建议在计算程序中可人工设定梁端正弯矩钢筋的最小配筋值（如一排钢筋等）</td></tr><tr><td>^^</td><td>梁端裂缝验算问题</td><td>以计算长度确定的梁端弯矩对梁端截面（柱边）进行裂缝验算，夸大了梁端实际弯矩，加大了梁端配筋</td><td>不利于强柱弱梁的实现，建议梁的正常使用极限状态验算时，采用梁净跨单元</td></tr></tbody></table><h1 id="土的自重应力、基底压力、基底附加压力" tabindex="-1"><a class="header-anchor" href="#土的自重应力、基底压力、基底附加压力" aria-hidden="true">#</a> 土的自重应力、基底压力、基底附加压力</h1><p><strong>1. 土的自重应力：</strong></p><p>​ 地基自重应力是因土体受到重力作用而产生的，一般随着土的形成就已经存在，因此也称之为长驻应力。研究地基自重应力的目的是为了确定土体的初始应力状态，一般来说，自重应力引起的变形在漫长地质历史过程中已完成，土的自重应力不再引起地基变形，所以在沉降计算中不必考虑，它只是沉降计算的初始条件，但在新沉积土或近期人工充填土等由自重引起的沉降是不可忽视的。</p><p><strong>2.基础底面压力：</strong></p><p>​ 建筑物荷载通过基础传递给地基的压力称为基底压力，与此相应的地基土对基础底面的反作用力称为地基反力。由于土中的附加应力是由建筑物的荷载作用引起的应力增量，而建筑物的荷载是通过是通过基础传到土中的，因此基础底面的压力分布形式将对土中应力产生影响。</p><p><strong>3. 基底附加压力：</strong></p><p>​ 基础通常是埋置在天然底面下一定深度的。有天然土层在自重作用下的变形已经完成，故只有超出基底原有自重应力的那部分应力才使地基产生附加变形，使地基产生附加变形的基底压力称为基底附加压力Po。因此，基底附加压力是上部结构和基础传到基底的基底压力与基底处原先存在于土中的自重应力之差，按下式计算：</p><p>​ P~0~=P-自重应力=P-重度xd（P包括基础自重）</p><p><strong>桩筏基础基底附加压力的计算</strong></p><p>​ 桩筏基础的压缩层位于桩端平面以下，只有在新增应力的作用下，地基土才会发生新的变形。新增应力与桩顶附加荷载有关，当考虑桩间土分担荷载时，还与承台底的土压力有关。程序中， 桩筏基础桩顶附加荷载就是准永久值组合下的桩反力， 承台桩顶附加荷载 Q0按下式计算：</p><p><img src="'+a+'" alt=""></p><h1 id="设计内力调整-待补充" tabindex="-1"><a class="header-anchor" href="#设计内力调整-待补充" aria-hidden="true">#</a> 设计内力调整（待补充）</h1><h1 id="结构体系" tabindex="-1"><a class="header-anchor" href="#结构体系" aria-hidden="true">#</a> 结构体系</h1><p>（1）框架结构</p><p>影响刚重比计算，按《高规》 5.4 节框架结构计算；</p><p>影响层刚度比计算方法， 按《高规》 3.5.2-1 框架结构计算；</p><p>影响强柱弱梁、强剪弱弯调整系数， 按框架结构取；</p><p>底层柱底截面弯矩增大系数 高规 6.2.2</p><p>影响轴压比限值取值， 按框架结构取；</p><p>影响柱纵筋最小配筋率，Ⅳ类场地高度大于 40m 时要提高最小配筋率 。</p><p>（2）框剪结构</p><p>影响刚重比计算，按《高规》 5.4 节非框架结构计算；</p><p>影响层刚度比计算方法， 按《高规》 3.5.2-2 非框架结构计算；</p><p>影响强柱弱梁、强剪弱弯调整系数， 按非框架结构取；</p><p>影响轴压比限值取值， 按框剪结构取；</p><p>影响柱纵筋最小配筋率，Ⅳ类场地高度大于 60m 时要提高最小配筋率。</p><p>设置相关参数后，按《高规》 8.1.4 进行 0.2V0 调整；</p><p>（3）框筒结构</p><p>影响刚重比计算，按《高规》 5.4 节非框架结构计算；</p><p>影响层刚度比计算方法， 按《高规》 3.5.2-2 非框架结构计算；</p><p>影响强柱弱梁、强剪弱弯调整系数， 按非框架结构取；</p><p>影响轴压比限值取值， 按框筒结构取；</p><p>影响柱纵筋最小配筋率，Ⅳ类场地高度大于 60m 时要提高最小配筋率。</p><p>自动按《高规》 9.1.11 进行层地震剪力调整 。</p><p>（4）筒中筒结构</p><p>影响刚重比计算，按《高规》 5.4 节非框架结构计算；</p><p>影响层刚度比计算方法， 按《高规》 3.5.2-1 非框架结构计算；</p><p>影响强柱弱梁、强剪弱弯调整系数， 按非框架结构取；</p><p>影响轴压比限值取值， 按筒中筒结构取；</p><p>影响柱纵筋最小配筋率，Ⅳ类场地高度大于 60m 时要提高最小配筋率。</p><p>自动按《高规》 9.1.11 进行层地震剪力调整。</p><p>（5）剪力墙结构</p><p>影响刚重比计算，按《高规》 5.4 节非框架结构计算；</p><p>影响层刚度比计算方法， 按《高规》 3.5.2-2 非框架结构计算；</p><p>（6）部分框支剪力墙结构</p><p>抗震设计时，落地剪力墙弯矩取底层墙底内力，并进行弯矩调整；</p><p>转换层上下刚度比按照《高规》附录 E 计算；</p><p>当转换层在 3 层及 3 层以上时，框支柱、剪力墙底部加强部位的抗震等级自动提高一</p><p>级；</p><p>框支柱地震内力自动按《高规》 10.2.17 调整；</p><p>自动统计框支框架倾覆弯矩；</p><p>（7）板柱-剪力墙结构</p><p>影响轴压比限值取值；</p><p>风荷载、地震作用层剪力自动按《高规》 8.1.10 调整。</p><p>（8）异形柱框架结构</p><p>按异形柱规程进行强柱弱梁、强剪弱弯调整；</p><p>如果是Ⅳ类场地、高度超过 28m，对最小配筋率提高 0.1%；</p><p>影响轴压比限值取值。</p><p>（9）异形柱框剪结构</p><p>按异形柱规程进行强柱弱梁、强剪弱弯调整；</p><p>影响轴压比限值取值，异形柱框架与框剪结构有不同的取值。</p><p>（10）配筋砌块砌体结构</p><p>底部加强区高度取值；</p><p>轴压比限值取值；</p><p>最大配筋率按配筋砌体确定。</p><p>（11）砌体结构</p><p>执行砌体结构相关规范的规定。</p><p>（12）底框结构</p><p>执行底框结构的相关规定。</p><p>（13）钢框架-中心支撑</p><p>执行《抗震规范》关于钢框架-中心支撑的相关规定；</p><p>按 0.25V0 调整。</p><p>（14）钢框架-偏心支撑</p><p>执行《抗震规范》关于钢框架-偏心支撑的相关规定；</p><p>按 0.25V0 调整。</p><p>（15）单层工业厂房</p><p>执行《抗震规范》关于单层工业厂房的相关规定。</p><p>（16）多层钢结构厂房</p><p>《抗规》附录 H.2 多层钢结构厂房：</p><p>H.2.8 多层钢结构厂房的基本抗震构造措施，尚应符合下列规定：</p><p>1 框架柱的长细比不宜大于 150；当轴压比大于 0.2 时，不宜大于 125 （1-0.8N/Af）√（235/fy）。</p><p>2 厂房框架柱、梁的板件宽厚比，应符合下列要求：</p><p>1）单层部分和总高度不大于 40m 的多层部分，可按本规范第 9.2 节规定执行；</p><p>2）多层部分总高度大于 40m 时，可按本规范第 8.3 节规定执行。</p><p>。。。。。。</p><p>4 柱间支撑构件宜符合下列要求：</p><p>1）多层框架部分的柱间支撑，宜与框架横梁组成 X 形或其他有利于抗震的形式，其</p><p>长细比不宜大于 150；</p><p>2）支撑杆件的板件宽厚比应符合本规范第 9.2 节的要求。</p><p>（17）竖向框排架</p><p>《抗规》附录 H 《抗震规范》关于多层工业厂房抗震设计要求：</p><p>H.1.6 竖向框排架厂房的地震作用调整和抗震验算，应符合下列规定：</p><p>。。。。。。</p><p>2 竖向框排架结构与排架柱相连的顶层框架节点处，柱端组合的弯矩设计值应按第 6.2.2</p><p>条进行调整，其他顶层框架节点处的梁端、柱端弯矩设计值可不调整。</p><p>3 顶层框排架设置纵向柱间支撑时，与柱间支撑相连排架柱的下部框架柱，一、二级框</p><p>架柱由地震引起的附加轴力应分别乘以调整系数 1.5、 1.2；计算轴压比时，附加轴力可不乘</p><p>以调整系数。</p><p>H.1.7 竖向框排架厂房的基本抗震构造措施尚应符合下列要求：</p><p>。。。。。。</p><p>3 竖向框排架结构顶层排架设置纵向柱间支撑时，与柱间支撑相连排架柱的下部框架柱，</p><p>纵向钢筋配筋率、箍筋的配置应满足本规范 6.3.7 条中对于框支柱的要求；箍筋加密区取柱全</p><p>高。</p><p>4 框架柱的剪跨比不大于 1.5 时，应符合下列规定：1）箍筋应按提高一级抗震等级配置。</p><p>。。。。。。</p><p>对于定义了竖向框排架的结构，软件自动执行：</p><p>1）对处于最上一层的所有柱的上节点，对其柱端组合的弯矩设计值按《抗规》第 6.2.2</p><p>条进行调整（强柱弱梁调整）。</p><p>2）对所有与柱间支撑相连的柱的下部框架柱，一、二级框架柱由地震引起的附加轴</p><p>力应分别乘以调整系数 1.5、 1.2；计算轴压比时，附加轴力不乘以调整系数。</p><p>3）对所有与柱间支撑相连的柱的下部框架柱，其纵向钢筋配筋率、箍筋的配置满足</p><p>《抗规》 6.3.7 条中对于框支柱的要求；箍筋加密区取柱全高。</p><p>4）框架柱的剪跨比不大于 1.5 时，对箍筋按提高一级抗震等级配置。</p><h1 id="砼基本原理" tabindex="-1"><a class="header-anchor" href="#砼基本原理" aria-hidden="true">#</a> 砼基本原理</h1><p>提高砼梁延性：减小砼相对受压区高度（减少受拉配筋、配置受压钢筋、采用T形截面和提高砼强度等级）</p><p>斜截面受剪承载力计算位置：A.支座边缘处的截面；B.受拉区弯起钢筋起点处的截面；C.箍筋截面面积或间距改变处的截面；D.腹板宽度改变处的截面</p>',203),l=[e];function n(o,s){return d(),p("div",null,l)}const b=t(h,[["render",n],["__file","5结构笔记-理论篇.html.vue"]]);export{b as default};

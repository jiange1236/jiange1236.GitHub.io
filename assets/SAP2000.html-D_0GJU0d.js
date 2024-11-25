import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as e,o as a}from"./app-CDhmjIP2.js";const l={};function i(h,t){return a(),r("div",null,t[0]||(t[0]=[e('<p>[TOC]</p><hr><h1 id="建模流程" tabindex="-1"><a class="header-anchor" href="#建模流程"><span>建模流程</span></a></h1><h2 id="建立模型" tabindex="-1"><a class="header-anchor" href="#建立模型"><span>建立模型</span></a></h2><ol><li><p>设置单位制 kN·m·C</p></li><li><p>设置轴网</p></li><li><p>定义材料</p></li><li><p>定义框架截面</p></li><li><p>定义面截面</p><ul><li>壳-薄壳</li><li>膜厚度=弯曲厚度</li></ul></li><li><p>面对象剖分</p></li></ol><ul><li>按最大尺寸剖分面 2m</li></ul><ol start="7"><li><p>(定义实体截面)</p></li><li><p>绘制模型</p></li><li><p>定义静力荷载工况</p><ul><li>恒载 DEAD DEAD 1</li><li>活载 LIVE LIVE 0</li><li>X向地震 QX QUAKE 0 Chinese 2010</li><li>Y向地震 QY QUAKE 0 Chinese 2010</li></ul></li><li><p>施加荷载</p></li><li><p>定义质量源</p><ul><li><p>来自荷载</p></li><li><p>DEAD 1</p></li><li><p>LIVE 0.5</p></li></ul></li><li><p>施加支座约束</p></li><li><p>定义动力、非线性工况</p></li><li><p>生成默认设计荷载组合</p></li><li><p>对构件特殊属性指定及施加附加静力荷载</p></li></ol><h2 id="模型分析" tabindex="-1"><a class="header-anchor" href="#模型分析"><span>模型分析</span></a></h2><ol><li>运行结构分析</li><li>分析结果输出</li></ol><h2 id="模型设计" tabindex="-1"><a class="header-anchor" href="#模型设计"><span>模型设计</span></a></h2><ol><li>设置设计首选项</li><li>运行结构设计</li><li>交互式结构构件设计</li><li>数据图形、表格打印输出</li></ol><p>混凝土框架 详 <a href="#%E6%B7%B7%E5%87%9D%E5%9C%9F%E6%A1%86%E6%9E%B6%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1%E5%8F%8A%E5%A3%B3%E8%AE%BE%E8%AE%A1">混凝土框架结构设计及壳设计</a></p><h3 id="单元类型" tabindex="-1"><a class="header-anchor" href="#单元类型"><span>单元类型</span></a></h3><h6 id="单元类型-1" tabindex="-1"><a class="header-anchor" href="#单元类型-1"><span>单元类型</span></a></h6><table><thead><tr><th>****</th><th></th><th></th></tr></thead><tbody><tr><td>线单元</td><td>&lt;&lt;</td><td>&lt;&lt;</td></tr><tr><td>面单元</td><td>板壳单元</td><td>薄板单元</td></tr><tr><td>^^</td><td>^^</td><td>厚板单元</td></tr><tr><td>^^</td><td>^^</td><td>薄壳单元</td></tr><tr><td>^^</td><td>^^</td><td>厚壳单元</td></tr><tr><td>^^</td><td>^^</td><td>膜单元</td></tr><tr><td>^^</td><td>二维实体</td><td>平面应变单元</td></tr><tr><td>^^</td><td>^^</td><td>平面应力单元</td></tr><tr><td>^^</td><td>^^</td><td>轴对称单元</td></tr><tr><td>体单元</td><td>三维实体</td><td></td></tr><tr><td>点单元</td><td>连接单元</td><td>线性连接单元</td></tr><tr><td>^^</td><td>^^</td><td>多段线弹性连接单元</td></tr><tr><td>^^</td><td>^^</td><td>多段线性塑性连接单元</td></tr><tr><td>^^</td><td>^^</td><td>粘滞阻尼单元</td></tr><tr><td>^^</td><td>^^</td><td>缝单元</td></tr><tr><td>^^</td><td>^^</td><td>钩单元</td></tr><tr><td>^^</td><td>^^</td><td>Wen塑性单元</td></tr><tr><td>^^</td><td>^^</td><td>橡胶隔振单元</td></tr><tr><td>^^</td><td>^^</td><td>摩擦隔振单元</td></tr><tr><td>^^</td><td>^^</td><td>拉/压限制隔振单元</td></tr></tbody></table><ul><li>薄板单元：采用薄板（Kirchhoff）公式，包括双向、面外、板旋转刚度部分和一个垂直于单元平面的平动刚度，忽略横向剪切变形</li><li>厚板单元：采用厚板（Mindlin/Reissner）公式，包括双向、面外、板旋转刚度部分和一个垂直于单元平面的平动刚度，考虑横向剪切变形</li></ul><h3 id="荷载模式" tabindex="-1"><a class="header-anchor" href="#荷载模式"><span>荷载模式</span></a></h3><table><thead><tr><th>荷载模式</th><th>类型</th><th style="text-align:center;">自重系数</th><th>备注</th></tr></thead><tbody><tr><td>恒载</td><td>DEAD</td><td style="text-align:center;">1</td><td></td></tr><tr><td>附加恒载</td><td>SUPER DEAD</td><td style="text-align:center;"></td><td>不适用中国规范</td></tr><tr><td>活载</td><td>LIVE</td><td style="text-align:center;"></td><td></td></tr><tr><td>折减活载</td><td>REDUCE LIVE</td><td style="text-align:center;"></td><td>不适用中国规范</td></tr><tr><td>底部剪力法地震荷载</td><td>QUAKE</td><td style="text-align:center;">0</td><td></td></tr><tr><td>自动风荷载</td><td>WIND</td><td style="text-align:center;">0</td><td></td></tr><tr><td>雪荷载</td><td>SNOW</td><td style="text-align:center;"></td><td></td></tr><tr><td>波浪荷载</td><td>WAVE</td><td style="text-align:center;">0</td><td></td></tr><tr><td>车道荷载</td><td>MOVING LOAD</td><td style="text-align:center;"></td><td></td></tr><tr><td>其他荷载</td><td>OTHER</td><td style="text-align:center;"></td><td>不参与荷载组合</td></tr></tbody></table><h4 id="自动地震荷载模式" tabindex="-1"><a class="header-anchor" href="#自动地震荷载模式"><span>自动地震荷载模式</span></a></h4><h6 id="地震荷载对话框说明" tabindex="-1"><a class="header-anchor" href="#地震荷载对话框说明"><span>地震荷载对话框说明</span></a></h6><table><thead><tr><th>分类</th><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>荷载方向和隔板偏心</td><td>全局方向</td><td>指定地震方向</td></tr><tr><td>^^</td><td>偏心率（所有隔板）</td><td>默认偏心率为0.05</td></tr><tr><td>^^</td><td>替代隔板偏心</td><td>用于指定其他不同偏心率的隔板</td></tr><tr><td>周期</td><td>程序计算</td><td>由程序自动计算结构周期</td></tr><tr><td>^^</td><td>用户定义</td><td>自定义结构周期</td></tr><tr><td>横向荷载高度范围</td><td>程序计算</td><td>由程序自动计算地震作用范围</td></tr><tr><td>^^</td><td>用户定义</td><td>自定义地震作用范围</td></tr><tr><td>地震系数</td><td>影响系数最大值</td><td>按规范取值输入</td></tr><tr><td>^^</td><td>地震烈度</td><td></td></tr><tr><td>^^</td><td>阻尼比</td><td>默认值0.05</td></tr><tr><td>^^</td><td>场地特征周期</td><td></td></tr><tr><td>^^</td><td>周期折减系数</td><td></td></tr><tr><td>^^</td><td>放大系数</td><td>对整体结构的地震作用进行放大或缩小</td></tr></tbody></table><h4 id="反应谱工况" tabindex="-1"><a class="header-anchor" href="#反应谱工况"><span>反应谱工况</span></a></h4><ol><li>【定义】&gt;【函数】&gt;【反应谱】</li><li>选择Add Chinese 2010 Spectrum</li><li>【定义】&gt;【荷载工况】&gt;【添加新荷载工况】&gt;【Response Spectrum】</li><li>阵型组合：CQC3（耦联） SRSS（非耦联）</li><li>方向组合：一般选择SRSS</li></ol><h6 id="反应谱工况数据对话框含义" tabindex="-1"><a class="header-anchor" href="#反应谱工况数据对话框含义"><span>反应谱工况数据对话框含义</span></a></h6><table><thead><tr><th>分类</th><th>说明</th><th>&lt;&lt;</th></tr></thead><tbody><tr><td>荷载工况名称</td><td></td><td></td></tr><tr><td>设置定义名</td><td>点击以荷载工况类型命名</td><td>&lt;&lt;</td></tr><tr><td>振型组合</td><td>CQC</td><td>完全二次平方根法</td></tr><tr><td>^^</td><td>SRSS</td><td>平方和平方根法</td></tr><tr><td>^^</td><td>绝对值相加</td><td>绝对值求和</td></tr><tr><td>^^</td><td>GMC、NRC10%、双向</td><td>与国外规范相关的振型组合方法</td></tr><tr><td>方向组合</td><td>SRSS</td><td>平方和平方根法</td></tr><tr><td>^^</td><td>CQC3</td><td>SRSS的一种扩展方法</td></tr><tr><td>^^</td><td>绝对值相加</td><td>绝对值求和</td></tr><tr><td>施加的荷载</td><td>荷载类型</td><td>加速度</td></tr><tr><td>^^</td><td>荷载名称</td><td>U1、U2、U3分别对应沿整体坐标轴X、Y、Z方向作用的加速度作用</td></tr><tr><td>^^</td><td>函数</td><td>下拉菜单中选择已定义的反应谱函数</td></tr><tr><td>^^</td><td>比例系数</td><td>定义某个方向反应谱函数的比例系数<br>其值应取重力加速度值，单位与整体单位制一致</td></tr><tr><td>其他参数</td><td>振型阻尼</td><td>结构阻尼比，默认值0.05</td></tr></tbody></table><h4 id="自动风荷载模式" tabindex="-1"><a class="header-anchor" href="#自动风荷载模式"><span>自动风荷载模式</span></a></h4><h6 id="风荷载对话框说明" tabindex="-1"><a class="header-anchor" href="#风荷载对话框说明"><span>风荷载对话框说明</span></a></h6><table><thead><tr><th>分类</th><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>风力作用面与体型系数</td><td>风力作用面来自<br>刚性隔板范围</td><td>在刚性隔板范围自动施加风荷载</td></tr><tr><td>^^</td><td>风力作用面来自<br>面对象</td><td>使用面对象指定不同体型系数自动计算风荷载</td></tr><tr><td>^^</td><td>风向角度</td><td>0°即X轴方向，90°即Y轴方向</td></tr><tr><td>^^</td><td>建筑宽度B</td><td></td></tr><tr><td>^^</td><td>体型系数μ<sub>s</sub></td><td></td></tr><tr><td>风力作用面宽度</td><td>程序计算的</td><td></td></tr><tr><td>^^</td><td>用户指定的</td><td></td></tr><tr><td>风荷载系数</td><td>基本风压</td><td></td></tr><tr><td>^^</td><td>地面粗糙度</td><td></td></tr><tr><td>φ-Z来源<br>（风荷载振型系数）</td><td>模态分析</td><td>由模态分析计算振型系数</td></tr><tr><td>^^</td><td>Z/H比</td><td>按荷规附录F规定的高宽比简化计算方法</td></tr><tr><td>第一周期来源</td><td>模态分析</td><td></td></tr><tr><td>^^</td><td>用户定义</td><td>由模态分析计算第一振型周期</td></tr><tr><td>其他参数</td><td>阻尼比</td><td></td></tr></tbody></table><h4 id="波浪荷载" tabindex="-1"><a class="header-anchor" href="#波浪荷载"><span>波浪荷载</span></a></h4><p>自动侧向荷载模式：APIWSD2000</p><h6 id="波浪荷载对话框说明" tabindex="-1"><a class="header-anchor" href="#波浪荷载对话框说明"><span>波浪荷载对话框说明</span></a></h6><table><thead><tr><th>分类</th><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>波浪荷载参数</td><td>波特性</td><td>使用默认值，或点击【添加】<br>打开波浪特征值对话框，定义波的数据、选择波理论</td></tr><tr><td>^^</td><td>当前轮廓</td><td>波浪的轮廓，即水流的形状</td></tr><tr><td>^^</td><td>海洋增长</td><td>海洋深度，即填写海洋深度数据</td></tr><tr><td>^^</td><td>拖拉和惯性矩系数</td><td></td></tr><tr><td>^^</td><td>风荷载</td><td>波浪风荷载</td></tr><tr><td>^^</td><td>包含浮力荷载</td><td></td></tr><tr><td>波浪荷载离散</td><td>最大离散段尺寸</td><td>作用于对象的分布波浪荷载的最大离散长度，<br>即考虑作用于单元的分布波浪荷载沿单元的间距不超过指定波浪荷载离散长度</td></tr><tr><td>波峰位置</td><td>初始峰位置点全局Y坐标</td><td>指定初始峰位置点全局Y坐标</td></tr><tr><td>^^</td><td>初始峰位置点全局X坐标</td><td>指定初始峰位置点全局X坐标</td></tr><tr><td>^^</td><td>考虑的波峰数</td><td>指定考虑的波峰位置数量</td></tr><tr><td>波方向</td><td>波浪方向</td><td>波浪方向与X轴正方向的逆时针夹角</td></tr><tr><td>波浪垂直参考高程</td><td>垂直资料数据全局Z坐标</td><td>波浪在垂直方向全局Z坐标</td></tr><tr><td>相对资料数据的<br>其他垂直高程</td><td>资料数据中泥线</td><td>考虑垂直参考数据中泥水分界线的位置高程，在泥水分界线以下无波浪荷载</td></tr><tr><td>^^</td><td>资料数据中高峰</td><td>考虑垂直参考数据中水流顶点处的峰值，<br>决定于拖拉和惯性矩系数的定义</td></tr><tr><td>海水属性</td><td>水重量密度</td><td>海水的重度</td></tr></tbody></table><h4 id="车道荷载" tabindex="-1"><a class="header-anchor" href="#车道荷载"><span>车道荷载</span></a></h4><p>【定义】&gt;【荷载模式】</p><p>荷载模式名称：MOVE</p><p>荷载模式类型：MOVING LOAD</p><h6 id="车道数据对话框说明" tabindex="-1"><a class="header-anchor" href="#车道数据对话框说明"><span>车道数据对话框说明</span></a></h6><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>车道名称</td><td></td></tr><tr><td>框架</td><td>车道的框架标签</td></tr><tr><td>中心线偏移</td><td>车道与框架中心线之间的距离</td></tr><tr><td>车道宽度</td><td>当前车道中心对应的横向长度</td></tr><tr><td>反转顺序</td><td></td></tr><tr><td>反转符号</td><td></td></tr><tr><td>移动车道</td><td></td></tr><tr><td>车道荷载离散长度</td><td>沿车道和跨车道的荷载离散</td></tr><tr><td>沿车道附加车道荷载离散参数</td><td>沿车道和跨车道的荷载离散份数</td></tr><tr><td>对象由车道加载</td><td></td></tr></tbody></table><p>车道偏心的正负号定义：对在车道自左向右的桥梁立面视图，位于道路单元后面的车道偏心为正值；或者对在道路上沿车道方向行驶的驾驶员，位于道路单元左侧车道有正的偏心值</p><h4 id="面荷载均匀导荷到框架" tabindex="-1"><a class="header-anchor" href="#面荷载均匀导荷到框架"><span>面荷载均匀导荷到框架</span></a></h4><p>选择面对象 &gt; 选择【指定】&gt;【面荷载】&gt;【均匀导荷到框架（壳）】</p><h4 id="温度荷载" tabindex="-1"><a class="header-anchor" href="#温度荷载"><span>温度荷载</span></a></h4><p>【指定】&gt;【框架/索/钢束荷载】&gt;【温度】</p><h6 id="框架温度荷载对话框说明" tabindex="-1"><a class="header-anchor" href="#框架温度荷载对话框说明"><span>框架温度荷载对话框说明</span></a></h6><table><thead><tr><th>分类</th><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>类型</td><td>温度</td><td>在整个截面内均匀恒定，产生轴向应变</td></tr><tr><td>^^</td><td>2-2温度梯度</td><td>沿局部坐标2轴方向每单位长度的温度变化，产生弯曲应变</td></tr><tr><td>^^</td><td>3-3温度梯度</td><td>沿局部坐标3轴方向每单位长度的温度变化，产生弯曲应变</td></tr><tr><td>温度</td><td>通过单元温度</td><td>通过单元，指定温度值</td></tr><tr><td>^^</td><td>通过节点样式</td><td>通过节点样式，选择已定义的节点样式并指定一个乘数</td></tr><tr><td>选项</td><td>添加到现有荷载</td><td></td></tr><tr><td>^^</td><td>替换现有荷载</td><td></td></tr><tr><td>^^</td><td>删除现有荷载</td><td></td></tr></tbody></table><h4 id="地面位移荷载" tabindex="-1"><a class="header-anchor" href="#地面位移荷载"><span>地面位移荷载</span></a></h4><p>【指定】&gt;【节点荷载】&gt;【位移】</p><h4 id="应变荷载" tabindex="-1"><a class="header-anchor" href="#应变荷载"><span>应变荷载</span></a></h4><p>【指定】&gt;【框架/索/钢束荷载】&gt;【应变】</p><h4 id="表面压力荷载" tabindex="-1"><a class="header-anchor" href="#表面压力荷载"><span>表面压力荷载</span></a></h4><p>【指定】&gt;【面荷载】&gt;【表面压力（全部）】</p><h4 id="孔隙压力荷载" tabindex="-1"><a class="header-anchor" href="#孔隙压力荷载"><span>孔隙压力荷载</span></a></h4><p>用于模拟固体介质中流体的拖曳和浮力作用，比如水对土壤的作用。</p><p>【指定】&gt;【实体荷载】&gt;【孔隙压力】</p><h4 id="预应力荷载" tabindex="-1"><a class="header-anchor" href="#预应力荷载"><span>预应力荷载</span></a></h4><p>选择一个要指定荷载的钢束对象，点击【指定】&gt;【框架/索/钢束荷载】&gt;【钢束荷载】</p><h6 id="钢束荷载对话框说明" tabindex="-1"><a class="header-anchor" href="#钢束荷载对话框说明"><span>钢束荷载对话框说明</span></a></h6><table><thead><tr><th>分类</th><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>荷载模式名称</td><td>&lt;&lt;</td><td></td></tr><tr><td>单位</td><td>&lt;&lt;</td><td></td></tr><tr><td>从这个位置张拉</td><td>钢束I端（起点）</td><td>锚固位置为I端，<br>钢束的拉力在这里施加</td></tr><tr><td>^^</td><td>钢束J端（终点）</td><td>锚固位置为J端，<br>钢束的拉力在这里施加</td></tr><tr><td>^^</td><td>两端同时地</td><td>两端同时张拉</td></tr><tr><td>摩擦和锚固损失</td><td>曲率系数</td><td>从锚固端开始算起，<br>沿着钢束长度方向单位角度的改变（半径）拉力摩擦损失</td></tr><tr><td>^^</td><td>管道局部偏差影响系数</td><td>从锚固端开始算起，<br>沿着钢束长度方向单位角度的改变（半径）拉力摩擦损失，<br>是由钢束不完整的直线形状引起的</td></tr><tr><td>^^</td><td>锚固滑移设置</td><td>由于锚固端器具的松弛引起的钢束锚固端的滑移长度</td></tr><tr><td>其他损失参数</td><td>弹性收缩应力</td><td>由于作用钢束荷载引起的单元压应力收缩所引起</td></tr><tr><td>^^</td><td>徐变应力</td><td>由于作用钢束荷载单元的压应力徐变引起</td></tr><tr><td>^^</td><td>收缩应力</td><td>由于作用钢束荷载单元的压应力收缩引起</td></tr><tr><td>^^</td><td>钢筋松弛应力</td><td>由于钢筋自身的拉应力松弛引起</td></tr><tr><td>选项</td><td>替换现有荷载</td><td></td></tr><tr><td>^^</td><td>删除现有荷载</td><td></td></tr></tbody></table><h3 id="地下室顶板嵌固" tabindex="-1"><a class="header-anchor" href="#地下室顶板嵌固"><span>地下室顶板嵌固</span></a></h3><p>在首层结构与土相连接位置通过节点指定约束，施加约束类型：</p><ol><li>固定约束</li><li>节点弹簧、面弹簧（通过调整弹簧刚度确定土的弹性状况）</li></ol><h3 id="刚性楼板假定-节点束缚" tabindex="-1"><a class="header-anchor" href="#刚性楼板假定-节点束缚"><span>刚性楼板假定（节点束缚）</span></a></h3><p><strong>节点束缚类型</strong></p><ol><li><p>刚体类型</p><p>束缚将所有节点按同一类型刚体一起运动，会耦合旋转和平动自由度。所有的束缚节点是刚体行为，被限制的节点一起平动和转动</p><p>刚体类型包括：body（体）、diaphragm（隔板）、plate（板）、rod（杆）、beam（梁）</p></li><li><p>对等类型</p><p>不同节点的各独立自由度相同，约束节点的平动和转动是相等的。一般用于连接和对称情况</p><p>对等类型包括：equal（对等）、local（局部轴）</p></li><li><p>插值类型</p><p>将一个节点自由度通过其他节点自由度插值得到。一般用于连接不协调的单元</p><p>插值类型包括：line（线）</p></li></ol><p><strong>节点束缚应用</strong></p><ol><li><p>body（刚体束缚）</p><p>所有自由度按照一个三维刚体一起运动，所有受限节点通过刚性连接与其他节点相连接。默认在每一连接节点的所有自由度都参与束缚。</p><p>用于：（1）任意尺寸和类型的模型刚体。（2）模型刚性连接。（3）将使用不同剖分结构模型的不同部分连接起来。</p></li><li><p>diaphragm（隔板束缚）</p><p>指定给节点，实现结构平面内无限刚性的假定。隔板束缚使所有被其限制的节点作为一个刚性（相对于膜的变形）的平面板来一起移动。所有限制节点被平面内刚性连接件连接在一起，但是不影响平面（板）外的变形。</p><p>用于：（1）模拟建筑结构混凝土楼板或混凝土填充板。（2）模拟桥梁上部结构的隔板</p></li><li><p>plate（板束缚）</p><p>使其所有被限制的节点作为相对于弯曲变形刚度为刚性的平板一起移动。板束缚使所有受限节点通过一个板面外抗弯刚性的连接与其他节点连接在一起，但是不影响平面内变形。</p><p>用于：（1）将实体类型单元（平面、轴对称固体和实体）与结构类型单元（框架和壳）相连。（2）实现梁弯曲建模时的板截面保持“平截面”的性质假定。</p></li><li><p>rod（杆束缚）</p><p>使所有被限制的节点作为刚性的（相对于轴向变形）杆一起移动。所有受限节点在平行于杆轴的方向保持固定长度，但是所有垂直于轴的平动和所有的转动刚度不受影响。</p><p>用于：（1）防止框架单元的轴向变形。（2）保持节点之间的固定距离，模拟类似刚性桁架的连接。</p></li><li><p>beam（梁束缚）</p><p>使所有被限制的节点作为一个刚性的（相对于弯曲变形）直梁一起移动。所有受限节点通过一个具有轴外弯曲刚性的连接进行连接，但是所有轴向的平动和扭转不受影响。</p><p>用于：（1）将实体类型的单元连接到结构类型单元（框架和壳）；结构单元的旋转可以通过束缚转化为实体单元中的一对相等或相反的平动。（2）防止框架单元中的弯剪变形。</p></li><li><p>weld（拼接束缚）</p><p>将使用不同剖分的结构模型部分连接起来。通过几组点自动生成多重体约束来连接重合的节点。</p></li><li><p>equal（对等束缚）</p><p>使其所有的节点在束缚局部坐标系中的各所选自由度上按相同或相反的位移运动，其他自由度不受影响。对等束缚的转动和平动间没有耦合。</p><p>用于：（1）在结构模型的不同部分之间进行部分连接，如伸缩缝和铰。（2）模拟关于一个面的对称和反对称情况。</p></li><li><p>local（局部束缚）</p><p>使其所有的节点在节点局部坐标系中的各所选自由度上按相同或相反的位移运动，其他自由度不受影响。</p><p>用于：（1）模拟关于一个线或点的对称情况。（2）模拟机构所束缚的位移。</p></li><li><p>line（线束缚）</p><p>用于模拟两个不协调单元在一个边界处相交的情况。</p></li></ol><h3 id="节点区" tabindex="-1"><a class="header-anchor" href="#节点区"><span>节点区</span></a></h3><p><strong>节点连接属性</strong></p><ol><li><p>来自柱的弹性属性</p><p>用于梁和柱之间的节点区。</p></li><li><p>来自柱和叠合板的弹性属性</p><p>用于梁和柱之间的节点区（需指定叠合板厚度）</p></li><li><p>指定的弹簧属性</p></li><li><p>指定的连接属性</p><p>需为节点区指定一个连接单元属性，然后把这些连接单元属性指定给弹簧。</p></li></ol><h1 id="运行分析" tabindex="-1"><a class="header-anchor" href="#运行分析"><span>运行分析</span></a></h1><h2 id="线性分析" tabindex="-1"><a class="header-anchor" href="#线性分析"><span>线性分析</span></a></h2><p><strong>工况类型</strong></p><p>静力分析（Linear Static）、用特征向量或Ritz向量求解振型的模态分析（Modal）、求解地震相应的反应谱分析（Response Spectrum）、时程动力响应分析（Time History）、屈曲模式分析（Buckling）、求解桥梁车辆活荷载的移动荷载分析（Moving Load）、谐振稳态分析（Steady State）、功能谱密度分析（Power Spectrum Density）</p><h2 id="非线性分析" tabindex="-1"><a class="header-anchor" href="#非线性分析"><span>非线性分析</span></a></h2><p><strong>工况类型</strong></p><p>非线性静力分析（Nonlinear Static）、非线性时程分析（Nonlinear Time History）</p><h1 id="混凝土框架结构设计" tabindex="-1"><a class="header-anchor" href="#混凝土框架结构设计"><span>混凝土框架结构设计</span></a></h1><p>先建立模型，运行结构分析，详<a href="#%E5%BB%BA%E7%AB%8B%E6%A8%A1%E5%9E%8B">建立模型</a></p><ol><li>【设计】&gt;【混凝土框架设计】&gt;【查看/修改首选项】</li><li>【设计】&gt;【混凝土框架设计】&gt;【查看/修改覆盖项】</li><li>【设计】&gt;【混凝土框架设计】&gt;【选择设计组合】</li><li>【设计】&gt;【混凝土框架设计】&gt;【开始结构设计/校核】</li><li>【设计】&gt;【混凝土框架设计】&gt;【显示设计信息】</li><li>【设计】&gt;【混凝土框架设计】&gt;【校核分析与设计截面】</li></ol><h2 id="设计首选项" tabindex="-1"><a class="header-anchor" href="#设计首选项"><span>设计首选项</span></a></h2><h6 id="设计首选项对话框说明" tabindex="-1"><a class="header-anchor" href="#设计首选项对话框说明"><span>设计首选项对话框说明</span></a></h6><table><thead><tr><th>分类</th><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>设计规范</td><td>Chinese 2010</td><td></td></tr><tr><td>多步工况设计</td><td>包络</td><td></td></tr><tr><td>相关曲线数</td><td>24</td><td>形成相关面所需要的相关曲线数（4或4的倍数）</td></tr><tr><td>相关点数</td><td>11</td><td>形成相关曲线所需要的点数量（奇数）</td></tr><tr><td>结构体系</td><td>框架/剪力墙...</td><td></td></tr><tr><td>高层建筑？</td><td>Yes/No</td><td></td></tr><tr><td>场地土类型</td><td></td><td></td></tr><tr><td>抗震设计等级</td><td></td><td></td></tr><tr><td>结构重要性系数</td><td>1</td><td></td></tr><tr><td>柱设计步骤</td><td>附录E</td><td>混规6.2.21简化方法 或 附录E方法</td></tr><tr><td>样式活荷载系数</td><td>0</td><td>考虑连续梁和悬臂梁活荷载不利分布的参数<br>中国规范取0</td></tr><tr><td>截面承载力利用率</td><td>0.95</td><td>截面承载力面积与截面面积比值</td></tr></tbody></table><h2 id="覆盖项" tabindex="-1"><a class="header-anchor" href="#覆盖项"><span>覆盖项</span></a></h2><h6 id="覆盖项对话框说明" tabindex="-1"><a class="header-anchor" href="#覆盖项对话框说明"><span>覆盖项对话框说明</span></a></h6><table><thead><tr><th>分类</th><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>单元截面类型</td><td>程序默认</td><td></td></tr><tr><td>抗震设计等级</td><td>^^</td><td></td></tr><tr><td>框剪结构剪力调整系数（SMF）</td><td>^^</td><td>最小地震剪力调整系数</td></tr><tr><td>弯矩放大系数（MMF）</td><td>^^</td><td>针对框架柱或框支柱的弯矩调整</td></tr><tr><td>剪力放大系数（SMF）</td><td>^^</td><td>针对框架梁或框架柱的剪力调整</td></tr><tr><td>轴力放大系数（AFMF）</td><td>^^</td><td>针对框支柱的轴力调整</td></tr><tr><td>柱相对位置</td><td>^^</td><td>仅用于柱，选择中柱、边柱、角柱、端柱或独立柱</td></tr><tr><td>是否为转换梁或框支柱</td><td>^^</td><td>是否按转换梁或框支柱调整设计内力</td></tr><tr><td>角柱（抗震调整）？</td><td>^^</td><td>该项仅用于柱，是否按角柱调整设计内力</td></tr><tr><td>梁重力负弯矩折减系数</td><td>^^</td><td>该项仅用于梁，梁端弯矩调幅系数</td></tr><tr><td>无支撑长度比（主）</td><td>^^</td><td>该项仅用于柱，主轴方向净长度比率<br>（去掉节点叠合区域，以及支撑的影响）</td></tr><tr><td>无支撑长度比（次）</td><td>^^</td><td>该项仅用于柱，次轴方向净长度比率<br>（去掉节点叠合区域，以及支撑的影响）</td></tr><tr><td>侧向有效长度系数（μ主）</td><td>^^</td><td>该项仅用于柱，对应混规 6.2.20-2</td></tr><tr><td>侧向有效长度系数（μ次）</td><td>^^</td><td>该项仅用于柱，对应混规 6.2.20-2</td></tr><tr><td>扭矩调整系数</td><td>^^</td><td>该项仅用于梁，扭矩调整系数</td></tr><tr><td>扭矩设计系数（Zeta）</td><td>^^</td><td>该项仅用于梁，双向受弯梁扭矩调整</td></tr><tr><td>闭合箍筋混凝土覆盖层</td><td>^^</td><td>该项仅用于梁，箍筋钢筋保护层厚度</td></tr></tbody></table><h2 id="调整系数" tabindex="-1"><a class="header-anchor" href="#调整系数"><span>调整系数</span></a></h2><h3 id="中梁刚度放大系数" tabindex="-1"><a class="header-anchor" href="#中梁刚度放大系数"><span>中梁刚度放大系数</span></a></h3><ol><li>选中需要修正的楼面梁</li><li>【指定】&gt;【框架】&gt;【属性修正】&gt;【围绕3轴的惯性矩】输入放大系数</li></ol><h3 id="负弯矩调幅系数" tabindex="-1"><a class="header-anchor" href="#负弯矩调幅系数"><span>负弯矩调幅系数</span></a></h3><p>程序默认0.85</p><p>通过【设计】&gt;【混凝土框架设计】&gt;【查看/修改覆盖项】&gt;【梁重力负弯矩折减系数】来重新指定</p><h2 id="结果输出" tabindex="-1"><a class="header-anchor" href="#结果输出"><span>结果输出</span></a></h2><h3 id="抗剪细节" tabindex="-1"><a class="header-anchor" href="#抗剪细节"><span>抗剪细节</span></a></h3><h6 id="抗剪细节说明" tabindex="-1"><a class="header-anchor" href="#抗剪细节说明"><span>抗剪细节说明</span></a></h6><table><thead><tr><th>名称</th><th>意义</th></tr></thead><tbody><tr><td>β_c系数</td><td>混凝土强度影响系数</td></tr><tr><td>β_t系数</td><td>混凝土受扭承载力降低系数</td></tr><tr><td>λ系数</td><td>剪跨比</td></tr><tr><td>ρ_svmin百分率</td><td>最小配箍率</td></tr><tr><td>λ_v系数</td><td>柱箍筋最小配箍特征值</td></tr><tr><td>ζ系数</td><td>受扭纵筋与箍筋的配筋强度比值</td></tr><tr><td>ρ_tlmin百分率</td><td>受扭纵筋的配筋率</td></tr></tbody></table><h1 id="壳设计" tabindex="-1"><a class="header-anchor" href="#壳设计"><span>壳设计</span></a></h1><p>结构分析后，点击【显示】&gt;【显示力/应力】&gt;【壳】</p><p>分量类型：混凝土设计</p><p>输出类型：顶面/底面</p><p>分量：Ast1、Ast2：单位长度的配筋面积</p><h1 id="钢结构设计" tabindex="-1"><a class="header-anchor" href="#钢结构设计"><span>钢结构设计</span></a></h1><p>先建立模型，运行结构分析，详<a href="#%E5%BB%BA%E7%AB%8B%E6%A8%A1%E5%9E%8B">建立模型</a></p><ol><li>【设计】&gt;【钢框架设计】&gt;【查看/修改首选项】</li><li>【设计】&gt;【钢框架设计】&gt;【选择设计组】</li><li>【设计】&gt;【钢框架设计】&gt;【选择设计组合】</li><li>【设计】&gt;【钢框架设计】&gt;【查看/修改覆盖项】</li><li>【设计】&gt;【钢框架设计】&gt;【设置位移目标】</li><li>【设计】&gt;【钢框架设计】&gt;【设置周期目标】</li><li>【设计】&gt;【钢框架设计】&gt;【开始结构设计】、【检查】</li><li>【设计】&gt;【钢框架设计】&gt;【改变设计截面】对构件截面进行修改</li></ol><h2 id="设计首选项-1" tabindex="-1"><a class="header-anchor" href="#设计首选项-1"><span>设计首选项</span></a></h2><h6 id="设计首选项对话框说明-1" tabindex="-1"><a class="header-anchor" href="#设计首选项对话框说明-1"><span>设计首选项对话框说明</span></a></h6><table><thead><tr><th>分类</th><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>设计规范</td><td>Chinese 2010</td><td></td></tr><tr><td>多步工况设计</td><td>包络</td><td></td></tr><tr><td>框架体系</td><td>无侧移框架体系NMF<br>有侧移框架体系SMF<br>中心支撑框架体系CBF<br>偏心支撑框架体系EBF</td><td></td></tr><tr><td>高层建筑？</td><td>Yes/No</td><td></td></tr><tr><td>结构重要性系数</td><td>1</td><td></td></tr><tr><td>忽略宽厚比校核</td><td>Yes/No</td><td></td></tr><tr><td>梁按压弯构件设计？</td><td>Yes/No</td><td></td></tr><tr><td>考虑挠度？</td><td>Yes/No</td><td></td></tr><tr><td>挠度限值</td><td>默认1/400</td><td></td></tr><tr><td>样式活荷载系数</td><td>0</td><td>考虑连续梁和悬臂梁活荷载不利分布的参数<br>中国规范取0</td></tr><tr><td>需求/能力 比例限值</td><td>0.95</td><td>钢截面利用的应力比限值</td></tr></tbody></table><h2 id="位移目标" tabindex="-1"><a class="header-anchor" href="#位移目标"><span>位移目标</span></a></h2><table><thead><tr><th>项目</th><th>含义</th></tr></thead><tbody><tr><td>静力线性工况</td><td>在下拉菜单中选择一个静力线性工况</td></tr><tr><td>点</td><td>指定一个点的编号，指定此点为目标控制点</td></tr><tr><td>最大位移</td><td>指定该点在该荷载工况下的最大位移控制值</td></tr><tr><td>侧移比</td><td>指定所选择点的侧移比率（位移/高度）</td></tr><tr><td>基于全局Z轴</td><td>输入Z坐标值，作为计算侧移比的起算高度，默认为0</td></tr><tr><td>激活自动目标</td><td>点击此按钮，程序会自动在左侧荷载选项区域中生成所选点侧向位移目标值，该值是通过侧移比换算得到的</td></tr><tr><td>撤销目标</td><td>勾选此项，指定的侧移控制不起作用</td></tr></tbody></table><h2 id="周期目标" tabindex="-1"><a class="header-anchor" href="#周期目标"><span>周期目标</span></a></h2><table><thead><tr><th>项目</th><th>含义</th></tr></thead><tbody><tr><td>振型分析工况</td><td>选择一个振型分析的工况</td></tr><tr><td>振型数</td><td>输入目标振型编号</td></tr><tr><td>周期目标</td><td>指定目标周期值</td></tr><tr><td>当前周期</td><td>分析完成后，显示对应振型编号周期的当前周期值</td></tr><tr><td>撤销周期目标</td><td>选择此项，取消周期目标设定</td></tr></tbody></table>',110)]))}const s=d(l,[["render",i],["__file","SAP2000.html.vue"]]),o=JSON.parse('{"path":"/study/SAP2000.html","title":"SAP2000","lang":"zh-CN","frontmatter":{"title":"SAP2000","date":"2022-05-13T00:00:00.000Z","category":["学习"],"tag":["学习","SAP2000"],"article":true,"description":"[TOC] 建模流程 建立模型 设置单位制 kN·m·C 设置轴网 定义材料 定义框架截面 定义面截面 壳-薄壳 膜厚度=弯曲厚度 面对象剖分 按最大尺寸剖分面 2m (定义实体截面) 绘制模型 定义静力荷载工况 恒载 DEAD DEAD 1 活载 LIVE LIVE 0 X向地震 QX QUAKE 0 Chinese 2010 Y向地震 QY QUA...","head":[["meta",{"property":"og:url","content":"https://jiange1236.github.io/study/SAP2000.html"}],["meta",{"property":"og:site_name","content":"Zeblog"}],["meta",{"property":"og:title","content":"SAP2000"}],["meta",{"property":"og:description","content":"[TOC] 建模流程 建立模型 设置单位制 kN·m·C 设置轴网 定义材料 定义框架截面 定义面截面 壳-薄壳 膜厚度=弯曲厚度 面对象剖分 按最大尺寸剖分面 2m (定义实体截面) 绘制模型 定义静力荷载工况 恒载 DEAD DEAD 1 活载 LIVE LIVE 0 X向地震 QX QUAKE 0 Chinese 2010 Y向地震 QY QUA..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-07T05:03:50.000Z"}],["meta",{"property":"article:tag","content":"学习"}],["meta",{"property":"article:tag","content":"SAP2000"}],["meta",{"property":"article:published_time","content":"2022-05-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-07T05:03:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SAP2000\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-07T05:03:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zine⁶\\",\\"url\\":\\"https://zecdn.top\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://jiange1236.github.io/atom.xml","title":"Zeblog Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://jiange1236.github.io/feed.json","title":"Zeblog JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://jiange1236.github.io/rss.xml","title":"Zeblog RSS Feed"}]]},"headers":[{"level":1,"title":"建模流程","slug":"建模流程","link":"#建模流程","children":[{"level":2,"title":"建立模型","slug":"建立模型","link":"#建立模型","children":[]},{"level":2,"title":"模型分析","slug":"模型分析","link":"#模型分析","children":[]},{"level":2,"title":"模型设计","slug":"模型设计","link":"#模型设计","children":[{"level":3,"title":"单元类型","slug":"单元类型","link":"#单元类型","children":[]},{"level":3,"title":"荷载模式","slug":"荷载模式","link":"#荷载模式","children":[]},{"level":3,"title":"地下室顶板嵌固","slug":"地下室顶板嵌固","link":"#地下室顶板嵌固","children":[]},{"level":3,"title":"刚性楼板假定（节点束缚）","slug":"刚性楼板假定-节点束缚","link":"#刚性楼板假定-节点束缚","children":[]},{"level":3,"title":"节点区","slug":"节点区","link":"#节点区","children":[]}]}]},{"level":1,"title":"运行分析","slug":"运行分析","link":"#运行分析","children":[{"level":2,"title":"线性分析","slug":"线性分析","link":"#线性分析","children":[]},{"level":2,"title":"非线性分析","slug":"非线性分析","link":"#非线性分析","children":[]}]},{"level":1,"title":"混凝土框架结构设计","slug":"混凝土框架结构设计","link":"#混凝土框架结构设计","children":[{"level":2,"title":"设计首选项","slug":"设计首选项","link":"#设计首选项","children":[]},{"level":2,"title":"覆盖项","slug":"覆盖项","link":"#覆盖项","children":[]},{"level":2,"title":"调整系数","slug":"调整系数","link":"#调整系数","children":[{"level":3,"title":"中梁刚度放大系数","slug":"中梁刚度放大系数","link":"#中梁刚度放大系数","children":[]},{"level":3,"title":"负弯矩调幅系数","slug":"负弯矩调幅系数","link":"#负弯矩调幅系数","children":[]}]},{"level":2,"title":"结果输出","slug":"结果输出","link":"#结果输出","children":[{"level":3,"title":"抗剪细节","slug":"抗剪细节","link":"#抗剪细节","children":[]}]}]},{"level":1,"title":"壳设计","slug":"壳设计","link":"#壳设计","children":[]},{"level":1,"title":"钢结构设计","slug":"钢结构设计","link":"#钢结构设计","children":[{"level":2,"title":"设计首选项","slug":"设计首选项-1","link":"#设计首选项-1","children":[]},{"level":2,"title":"位移目标","slug":"位移目标","link":"#位移目标","children":[]},{"level":2,"title":"周期目标","slug":"周期目标","link":"#周期目标","children":[]}]}],"git":{"createdTime":1652427322000,"updatedTime":1717736630000,"contributors":[{"name":"jiange1236","email":"183465355@qq.com","commits":4},{"name":"周子健","email":"183465355@qq.com","commits":2}]},"readingTime":{"minutes":18.7,"words":5611},"filePathRelative":"study/SAP2000.md","localizedDate":"2022年5月13日","excerpt":"","autoDesc":true}');export{s as comp,o as data};

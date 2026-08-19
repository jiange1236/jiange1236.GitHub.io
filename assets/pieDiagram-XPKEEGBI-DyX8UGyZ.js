import{t as e}from"./chunk-GTKDMUJJ-BbgDWR4E.js";import"./chunk-6BY5RJGC-D5OZg59P.js";import"./chunk-5ZJXQJOJ-BQdc2zc2.js";import{l as t}from"./chunk-SDI2JJQM-C2w8Cebg.js";import{t as n}from"./chunk-4KE642ED-CENyt1YS.js";import{Ct as r,F as i,Kt as a,O as o,S as s,g as c,h as l,i as u,n as d,qt as f,s as p,v as m,w as h,x as g}from"./chunk-ITX3UAHE-Buzo_Ikx.js";import"./chunk-TI4EEUUG-DbrZB-iv.js";import{c as _,o as v}from"./chunk-2XY5F2HY-6Wis_om2.js";import{o as y}from"./mermaid.esm.min-BQGAVQF7.js";var b=o.pie,x={sections:new Map,showData:!1,config:b},S=x.sections,C=x.showData,w=structuredClone(b),T=e(()=>structuredClone(w),`getConfig`),E=e(()=>{S=new Map,C=x.showData,a()},`clear`),D=e(({label:e,value:t})=>{S.has(e)||(S.set(e,t),c.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),O=e(()=>S,`getSections`),k=e(e=>{C=e},`setShowData`),A=e(()=>C,`getShowData`),j={getConfig:T,clear:E,setDiagramTitle:s,getDiagramTitle:d,setAccTitle:f,getAccTitle:u,setAccDescription:p,getAccDescription:h,addSection:D,getSections:O,setShowData:k,getShowData:A},M=e((e,t)=>{n(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),N={parse:e(async e=>{let n=await t(`pie`,e);c.debug(n),M(n,j)},`parse`)},P=e(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),F=e(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return l().value(e=>e.value)(t)},`createPieArcs`),I={parser:N,db:j,renderer:{draw:e((e,t,n,a)=>{c.debug(`rendering pie chart
`+e);let o=a.db,s=i(),l=v(o.getConfig(),s.pie),u=y(t),d=u.append(`g`);d.attr(`transform`,`translate(225,225)`);let{themeVariables:f}=s,[p]=_(f.pieOuterStrokeWidth);p??=2;let h=l.textPosition,b=g().innerRadius(0).outerRadius(185),x=g().innerRadius(185*h).outerRadius(185*h);d.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+p/2).attr(`class`,`pieOuterCircle`);let S=o.getSections(),C=F(S),w=[f.pie1,f.pie2,f.pie3,f.pie4,f.pie5,f.pie6,f.pie7,f.pie8,f.pie9,f.pie10,f.pie11,f.pie12],T=m(w);d.selectAll(`mySlices`).data(C).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>T(e.data.label)).attr(`class`,`pieCircle`);let E=0;S.forEach(e=>{E+=e}),d.selectAll(`mySlices`).data(C).enter().append(`text`).text(e=>(e.data.value/E*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),d.append(`text`).text(o.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`);let D=d.selectAll(`.legend`).data(T.domain()).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*T.domain().length/2;return`translate(216,`+(t*22-n)+`)`});D.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,T).style(`stroke`,T),D.data(C).append(`text`).attr(`x`,22).attr(`y`,14).text(e=>{let{label:t,value:n}=e.data;return o.getShowData()?`${t} [${n}]`:t});let O=512+Math.max(...D.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));u.attr(`viewBox`,`0 0 ${O} 450`),r(u,450,O,l.useMaxWidth)},`draw`)},styles:P};export{I as diagram};
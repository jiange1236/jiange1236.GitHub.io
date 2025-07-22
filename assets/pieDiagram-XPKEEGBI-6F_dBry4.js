import{c as N}from"./chunk-4KE642ED-BPUB8--H.js";import{p as V}from"./gitGraph-YCYPL57B-MEVJTYR7-BMCwZE1F.js";import{m as r,M as X,F as Y,B as G,w as I,A as K,L as j,J as y,Q as q,as as H,aT as U,aV as Z,aW as L,aX as _,k as ee,v as te,aY as ae,au as ie}from"./mermaid.esm.min-oacF67P0.js";import"./chunk-5ZJXQJOJ-vrNBiNR7.js";import"./app-DZHFx0BS.js";var re=ie.pie,D={sections:new Map,showData:!1},u=D.sections,T=D.showData,le=structuredClone(re),se=r(()=>structuredClone(le),"getConfig"),oe=r(()=>{u=new Map,T=D.showData,te()},"clear"),ne=r(({label:e,value:t})=>{u.has(e)||(u.set(e,t),y.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),pe=r(()=>u,"getSections"),de=r(e=>{T=e},"setShowData"),ce=r(()=>T,"getShowData"),O={getConfig:se,clear:oe,setDiagramTitle:j,getDiagramTitle:K,setAccTitle:I,getAccTitle:G,setAccDescription:Y,getAccDescription:X,addSection:ne,getSections:pe,setShowData:de,getShowData:ce},fe=r((e,t)=>{N(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),ge={parse:r(async e=>{let t=await V("pie",e);y.debug(t),fe(t,O)},"parse")},me=r(e=>`
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
`,"getStyles"),ue=me,he=r(e=>{let t=[...e.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,h)=>h.value-l.value);return ae().value(l=>l.value)(t)},"createPieArcs"),xe=r((e,t,l,h)=>{y.debug(`rendering pie chart
`+e);let d=h.db,v=q(),C=H(d.getConfig(),v.pie),k=40,s=18,c=4,n=450,x=n,S=U(t),o=S.append("g");o.attr("transform","translate("+x/2+","+n/2+")");let{themeVariables:a}=v,[b]=Z(a.pieOuterStrokeWidth);b??=2;let A=C.textPosition,f=Math.min(x,n)/2-k,R=L().innerRadius(0).outerRadius(f),W=L().innerRadius(f*A).outerRadius(f*A);o.append("circle").attr("cx",0).attr("cy",0).attr("r",f+b/2).attr("class","pieOuterCircle");let M=d.getSections(),w=he(M),B=[a.pie1,a.pie2,a.pie3,a.pie4,a.pie5,a.pie6,a.pie7,a.pie8,a.pie9,a.pie10,a.pie11,a.pie12],p=_(B);o.selectAll("mySlices").data(w).enter().append("path").attr("d",R).attr("fill",i=>p(i.data.label)).attr("class","pieCircle");let z=0;M.forEach(i=>{z+=i}),o.selectAll("mySlices").data(w).enter().append("text").text(i=>(i.data.value/z*100).toFixed(0)+"%").attr("transform",i=>"translate("+W.centroid(i)+")").style("text-anchor","middle").attr("class","slice"),o.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");let $=o.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(i,g)=>{let m=s+c,Q=m*p.domain().length/2,E=12*s,J=g*m-Q;return"translate("+E+","+J+")"});$.append("rect").attr("width",s).attr("height",s).style("fill",p).style("stroke",p),$.data(w).append("text").attr("x",s+c).attr("y",s-c).text(i=>{let{label:g,value:m}=i.data;return d.getShowData()?`${g} [${m}]`:g});let P=Math.max(...$.selectAll("text").nodes().map(i=>i?.getBoundingClientRect().width??0)),F=x+k+s+c+P;S.attr("viewBox",`0 0 ${F} ${n}`),ee(S,n,F,C.useMaxWidth)},"draw"),Se={draw:xe},ve={parser:ge,db:O,renderer:Se,styles:ue};export{ve as diagram};

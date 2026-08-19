import{t as e}from"./chunk-GTKDMUJJ-BbgDWR4E.js";import"./chunk-6BY5RJGC-D5OZg59P.js";import"./chunk-5ZJXQJOJ-BQdc2zc2.js";import{l as t}from"./chunk-SDI2JJQM-C2w8Cebg.js";import{t as n}from"./chunk-4KE642ED-CENyt1YS.js";import{Ct as r,Kt as i,O as a,S as o,g as s,i as c,n as l,p as u,qt as d,s as f,w as p}from"./chunk-ITX3UAHE-Buzo_Ikx.js";import"./chunk-TI4EEUUG-DbrZB-iv.js";import{o as m}from"./chunk-2XY5F2HY-6Wis_om2.js";import{o as h}from"./mermaid.esm.min-BQGAVQF7.js";var g={packet:[]},_=structuredClone(g),v=a.packet,y=e(()=>{let e=m({...v,...u().packet});return e.showBits&&(e.paddingY+=10),e},`getConfig`),b=e(()=>_.packet,`getPacket`),x={pushWord:e(e=>{e.length>0&&_.packet.push(e)},`pushWord`),getPacket:b,getConfig:y,clear:e(()=>{i(),_=structuredClone(g)},`clear`),setAccTitle:d,getAccTitle:c,setDiagramTitle:o,getDiagramTitle:l,getAccDescription:p,setAccDescription:f},S=1e4,C=e(e=>{n(e,x);let t=-1,r=[],i=1,{bitsPerRow:a}=x.getConfig();for(let{start:n,end:o,label:c}of e.blocks){if(o&&o<n)throw Error(`Packet block ${n} - ${o} is invalid. End must be greater than start.`);if(n!==t+1)throw Error(`Packet block ${n} - ${o??n} is not contiguous. It should start from ${t+1}.`);for(t=o??n,s.debug(`Packet block ${n} - ${t} with label ${c}`);r.length<=a+1&&x.getPacket().length<S;){let[e,t]=w({start:n,end:o,label:c},i,a);if(r.push(e),e.end+1===i*a&&(x.pushWord(r),r=[],i++),!t)break;({start:n,end:o,label:c}=t)}}x.pushWord(r)},`populate`),w=e((e,t,n)=>{if(e.end===void 0&&(e.end=e.start),e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);return e.end+1<=t*n?[e,void 0]:[{start:e.start,end:t*n-1,label:e.label},{start:t*n,end:e.end,label:e.label}]},`getNextFittingBlock`),T={parse:e(async e=>{let n=await t(`packet`,e);s.debug(n),C(n)},`parse`)},E=e((e,t,n,i)=>{let a=i.db,o=a.getConfig(),{rowHeight:s,paddingY:c,bitWidth:l,bitsPerRow:u}=o,d=a.getPacket(),f=a.getDiagramTitle(),p=s+c,m=p*(d.length+1)-(f?0:s),g=l*u+2,_=h(t);_.attr(`viewbox`,`0 0 ${g} ${m}`),r(_,m,g,o.useMaxWidth);for(let[e,t]of d.entries())D(_,t,e,o);_.append(`text`).text(f).attr(`x`,g/2).attr(`y`,m-p/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),D=e((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),O={draw:E},k={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},A={parser:T,db:x,renderer:O,styles:e(({packet:e}={})=>{let t=m(k,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},`styles`)};export{A as diagram};
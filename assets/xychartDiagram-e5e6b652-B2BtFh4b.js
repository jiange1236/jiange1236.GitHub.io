import{a_ as Ft,a$ as at,aL as At,aK as Ot,F as Bt,A as Nt,M as Vt,h as St,E as Xt,L as Yt,j as Ht,c as wt,aJ as Ut,O as Qt,a as Gt}from"./mermaid.esm.min-P6bCFeNT.js";import{Q as jt}from"./createText-03b82060-Blwo0mhX.js";import{t as Kt}from"./init-f9637058-DHuO7-vr.js";import{h as Zt}from"./ordinal-5695958c-Dn4QBzhM.js";import{H as dt}from"./linear-9bcf74c4-DXSvJHdN.js";import{P as pt}from"./line-24d93f1b-LqZ3veMr.js";import"./app-CDhmjIP2.js";import"./array-2ff2c7a6-C3YJfAyO.js";import"./path-428ebac9-B0oSrkCJ.js";function Jt(e,t,i){e=+e,t=+t,i=(n=arguments.length)<2?(t=e,e=0,1):n<3?1:+i;for(var s=-1,n=Math.max(0,Math.ceil((t-e)/i))|0,o=new Array(n);++s<n;)o[s]=e+s*i;return o}function et(){var e=Zt().unknown(void 0),t=e.domain,i=e.range,s=0,n=1,o,u,d=!1,x=0,C=0,k=.5;delete e.unknown;function b(){var f=t().length,T=n<s,S=T?n:s,P=T?s:n;o=(P-S)/Math.max(1,f-x+C*2),d&&(o=Math.floor(o)),S+=(P-S-o*(f-x))*k,u=o*(1-x),d&&(S=Math.round(S),u=Math.round(u));var p=Jt(f).map(function(w){return S+o*w});return i(T?p.reverse():p)}return e.domain=function(f){return arguments.length?(t(f),b()):t()},e.range=function(f){return arguments.length?([s,n]=f,s=+s,n=+n,b()):[s,n]},e.rangeRound=function(f){return[s,n]=f,s=+s,n=+n,d=!0,b()},e.bandwidth=function(){return u},e.step=function(){return o},e.round=function(f){return arguments.length?(d=!!f,b()):d},e.padding=function(f){return arguments.length?(x=Math.min(1,C=+f),b()):x},e.paddingInner=function(f){return arguments.length?(x=Math.min(1,f),b()):x},e.paddingOuter=function(f){return arguments.length?(C=+f,b()):C},e.align=function(f){return arguments.length?(k=Math.max(0,Math.min(1,f)),b()):k},e.copy=function(){return et(t(),[s,n]).round(d).paddingInner(x).paddingOuter(C).align(k)},Kt.apply(b(),arguments)}var st=function(){var e=function($,h,l,c){for(l=l||{},c=$.length;c--;l[$[c]]=h);return l},t=[1,10,12,14,16,18,19,21,23],i=[2,6],s=[1,3],n=[1,5],o=[1,6],u=[1,7],d=[1,5,10,12,14,16,18,19,21,23,34,35,36],x=[1,25],C=[1,26],k=[1,28],b=[1,29],f=[1,30],T=[1,31],S=[1,32],P=[1,33],p=[1,34],w=[1,35],r=[1,36],D=[1,37],O=[1,43],rt=[1,42],lt=[1,47],Y=[1,50],A=[1,10,12,14,16,18,19,21,23,34,35,36],j=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36],E=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50],ct=[1,64],K={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:function($,h,l,c,m,a,R){var g=a.length-1;switch(m){case 5:c.setOrientation(a[g]);break;case 9:c.setDiagramTitle(a[g].text.trim());break;case 12:c.setLineData({text:"",type:"text"},a[g]);break;case 13:c.setLineData(a[g-1],a[g]);break;case 14:c.setBarData({text:"",type:"text"},a[g]);break;case 15:c.setBarData(a[g-1],a[g]);break;case 16:this.$=a[g].trim(),c.setAccTitle(this.$);break;case 17:case 18:this.$=a[g].trim(),c.setAccDescription(this.$);break;case 19:this.$=a[g-1];break;case 20:this.$=[Number(a[g-2]),...a[g]];break;case 21:this.$=[Number(a[g])];break;case 22:c.setXAxisTitle(a[g]);break;case 23:c.setXAxisTitle(a[g-1]);break;case 24:c.setXAxisTitle({type:"text",text:""});break;case 25:c.setXAxisBand(a[g]);break;case 26:c.setXAxisRangeData(Number(a[g-2]),Number(a[g]));break;case 27:this.$=a[g-1];break;case 28:this.$=[a[g-2],...a[g]];break;case 29:this.$=[a[g]];break;case 30:c.setYAxisTitle(a[g]);break;case 31:c.setYAxisTitle(a[g-1]);break;case 32:c.setYAxisTitle({type:"text",text:""});break;case 33:c.setYAxisRangeData(Number(a[g-2]),Number(a[g]));break;case 37:this.$={text:a[g],type:"text"};break;case 38:this.$={text:a[g],type:"text"};break;case 39:this.$={text:a[g],type:"markdown"};break;case 40:this.$=a[g];break;case 41:this.$=a[g-1]+""+a[g];break}},table:[e(t,i,{3:1,4:2,7:4,5:s,34:n,35:o,36:u}),{1:[3]},e(t,i,{4:2,7:4,3:8,5:s,34:n,35:o,36:u}),e(t,i,{4:2,7:4,6:9,3:10,5:s,8:[1,11],34:n,35:o,36:u}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},e(d,[2,34]),e(d,[2,35]),e(d,[2,36]),{1:[2,1]},e(t,i,{4:2,7:4,3:21,5:s,34:n,35:o,36:u}),{1:[2,3]},e(d,[2,5]),e(t,[2,7],{4:22,34:n,35:o,36:u}),{11:23,37:24,38:x,39:C,40:27,41:k,42:b,43:f,44:T,45:S,46:P,47:p,48:w,49:r,50:D},{11:39,13:38,24:O,27:rt,29:40,30:41,37:24,38:x,39:C,40:27,41:k,42:b,43:f,44:T,45:S,46:P,47:p,48:w,49:r,50:D},{11:45,15:44,27:lt,33:46,37:24,38:x,39:C,40:27,41:k,42:b,43:f,44:T,45:S,46:P,47:p,48:w,49:r,50:D},{11:49,17:48,24:Y,37:24,38:x,39:C,40:27,41:k,42:b,43:f,44:T,45:S,46:P,47:p,48:w,49:r,50:D},{11:52,17:51,24:Y,37:24,38:x,39:C,40:27,41:k,42:b,43:f,44:T,45:S,46:P,47:p,48:w,49:r,50:D},{20:[1,53]},{22:[1,54]},e(A,[2,18]),{1:[2,2]},e(A,[2,8]),e(A,[2,9]),e(j,[2,37],{40:55,41:k,42:b,43:f,44:T,45:S,46:P,47:p,48:w,49:r,50:D}),e(j,[2,38]),e(j,[2,39]),e(E,[2,40]),e(E,[2,42]),e(E,[2,43]),e(E,[2,44]),e(E,[2,45]),e(E,[2,46]),e(E,[2,47]),e(E,[2,48]),e(E,[2,49]),e(E,[2,50]),e(E,[2,51]),e(A,[2,10]),e(A,[2,22],{30:41,29:56,24:O,27:rt}),e(A,[2,24]),e(A,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:x,39:C,40:27,41:k,42:b,43:f,44:T,45:S,46:P,47:p,48:w,49:r,50:D},e(A,[2,11]),e(A,[2,30],{33:60,27:lt}),e(A,[2,32]),{31:[1,61]},e(A,[2,12]),{17:62,24:Y},{25:63,27:ct},e(A,[2,14]),{17:65,24:Y},e(A,[2,16]),e(A,[2,17]),e(E,[2,41]),e(A,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},e(A,[2,31]),{27:[1,69]},e(A,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},e(A,[2,15]),e(A,[2,26]),e(A,[2,27]),{11:59,32:72,37:24,38:x,39:C,40:27,41:k,42:b,43:f,44:T,45:S,46:P,47:p,48:w,49:r,50:D},e(A,[2,33]),e(A,[2,19]),{25:73,27:ct},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:function($,h){if(h.recoverable)this.trace($);else{var l=new Error($);throw l.hash=h,l}},parse:function($){var h=this,l=[0],c=[],m=[null],a=[],R=this.table,g="",H=0,ut=0,Mt=2,gt=1,It=a.slice.call(arguments,1),_=Object.create(this.lexer),z={yy:{}};for(var J in this.yy)Object.prototype.hasOwnProperty.call(this.yy,J)&&(z.yy[J]=this.yy[J]);_.setInput($,z.yy),z.yy.lexer=_,z.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var q=_.yylloc;a.push(q);var zt=_.options&&_.options.ranges;typeof z.yy.parseError=="function"?this.parseError=z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Wt(){var I;return I=c.pop()||_.lex()||gt,typeof I!="number"&&(I instanceof Array&&(c=I,I=c.pop()),I=h.symbols_[I]||I),I}for(var L,W,v,tt,F={},U,M,xt,Q;;){if(W=l[l.length-1],this.defaultActions[W]?v=this.defaultActions[W]:((L===null||typeof L>"u")&&(L=Wt()),v=R[W]&&R[W][L]),typeof v>"u"||!v.length||!v[0]){var it="";Q=[];for(U in R[W])this.terminals_[U]&&U>Mt&&Q.push("'"+this.terminals_[U]+"'");_.showPosition?it="Parse error on line "+(H+1)+`:
`+_.showPosition()+`
Expecting `+Q.join(", ")+", got '"+(this.terminals_[L]||L)+"'":it="Parse error on line "+(H+1)+": Unexpected "+(L==gt?"end of input":"'"+(this.terminals_[L]||L)+"'"),this.parseError(it,{text:_.match,token:this.terminals_[L]||L,line:_.yylineno,loc:q,expected:Q})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+W+", token: "+L);switch(v[0]){case 1:l.push(L),m.push(_.yytext),a.push(_.yylloc),l.push(v[1]),L=null,ut=_.yyleng,g=_.yytext,H=_.yylineno,q=_.yylloc;break;case 2:if(M=this.productions_[v[1]][1],F.$=m[m.length-M],F._$={first_line:a[a.length-(M||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(M||1)].first_column,last_column:a[a.length-1].last_column},zt&&(F._$.range=[a[a.length-(M||1)].range[0],a[a.length-1].range[1]]),tt=this.performAction.apply(F,[g,ut,H,z.yy,v[1],m,a].concat(It)),typeof tt<"u")return tt;M&&(l=l.slice(0,-1*M*2),m=m.slice(0,-1*M),a=a.slice(0,-1*M)),l.push(this.productions_[v[1]][0]),m.push(F.$),a.push(F._$),xt=R[l[l.length-2]][l[l.length-1]],l.push(xt);break;case 3:return!0}}return!0}},$t=function(){var $={EOF:1,parseError:function(h,l){if(this.yy.parser)this.yy.parser.parseError(h,l);else throw new Error(h)},setInput:function(h,l){return this.yy=l||this.yy||{},this._input=h,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var h=this._input[0];this.yytext+=h,this.yyleng++,this.offset++,this.match+=h,this.matched+=h;var l=h.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),h},unput:function(h){var l=h.length,c=h.split(/(?:\r\n?|\n)/g);this._input=h+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===m.length?this.yylloc.first_column:0)+m[m.length-c.length].length-c[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(h){this.unput(this.match.slice(h))},pastInput:function(){var h=this.matched.substr(0,this.matched.length-this.match.length);return(h.length>20?"...":"")+h.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var h=this.match;return h.length<20&&(h+=this._input.substr(0,20-h.length)),(h.substr(0,20)+(h.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var h=this.pastInput(),l=new Array(h.length+1).join("-");return h+this.upcomingInput()+`
`+l+"^"},test_match:function(h,l){var c,m,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),m=h[0].match(/(?:\r\n?|\n).*/g),m&&(this.yylineno+=m.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+h[0].length},this.yytext+=h[0],this.match+=h[0],this.matches=h,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(h[0].length),this.matched+=h[0],c=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var R in a)this[R]=a[R];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var h,l,c,m;this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),R=0;R<a.length;R++)if(c=this._input.match(this.rules[a[R]]),c&&(!l||c[0].length>l[0].length)){if(l=c,m=R,this.options.backtrack_lexer){if(h=this.test_match(c,a[R]),h!==!1)return h;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(h=this.test_match(l,a[m]),h!==!1?h:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var h=this.next();return h||this.lex()},begin:function(h){this.conditionStack.push(h)},popState:function(){var h=this.conditionStack.length-1;return h>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(h){return h=this.conditionStack.length-1-Math.abs(h||0),h>=0?this.conditionStack[h]:"INITIAL"},pushState:function(h){this.begin(h)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(h,l,c,m){switch(c){case 0:break;case 1:break;case 2:return this.popState(),34;case 3:return this.popState(),34;case 4:return 34;case 5:break;case 6:return 10;case 7:return this.pushState("acc_title"),19;case 8:return this.popState(),"acc_title_value";case 9:return this.pushState("acc_descr"),21;case 10:return this.popState(),"acc_descr_value";case 11:this.pushState("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 5;case 15:return 8;case 16:return this.pushState("axis_data"),"X_AXIS";case 17:return this.pushState("axis_data"),"Y_AXIS";case 18:return this.pushState("axis_band_data"),24;case 19:return 31;case 20:return this.pushState("data"),16;case 21:return this.pushState("data"),18;case 22:return this.pushState("data_inner"),24;case 23:return 27;case 24:return this.popState(),26;case 25:this.popState();break;case 26:this.pushState("string");break;case 27:this.popState();break;case 28:return"STR";case 29:return 24;case 30:return 26;case 31:return 43;case 32:return"COLON";case 33:return 44;case 34:return 28;case 35:return 45;case 36:return 46;case 37:return 48;case 38:return 50;case 39:return 47;case 40:return 41;case 41:return 49;case 42:return 42;case 43:break;case 44:return 35;case 45:return 36}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,20,21,22,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,23,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[],inclusive:!1},md_string:{rules:[],inclusive:!1},string:{rules:[27,28],inclusive:!1},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0}}};return $}();K.lexer=$t;function Z(){this.yy={}}return Z.prototype=K,K.Parser=Z,new Z}();st.parser=st;const qt=st;function ft(e){return e.type==="bar"}function kt(e){return e.type==="band"}function B(e){return e.type==="linear"}class _t{constructor(t){this.parentGroup=t}getMaxDimension(t,i){if(!this.parentGroup)return{width:t.reduce((o,u)=>Math.max(u.length,o),0)*i,height:i};const s={width:0,height:0},n=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",i);for(const o of t){const u=jt(n,1,o),d=u?u.width:o.length*i,x=u?u.height:i;s.width=Math.max(s.width,d),s.height=Math.max(s.height,x)}return n.remove(),s}}const yt=.7,mt=.2;class Ct{constructor(t,i,s,n){this.axisConfig=t,this.title=i,this.textDimensionCalculator=s,this.axisThemeConfig=n,this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left",this.showTitle=!1,this.showLabel=!1,this.showTick=!1,this.showAxisLine=!1,this.outerPadding=0,this.titleTextHeight=0,this.labelTextHeight=0,this.range=[0,10],this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left"}setRange(t){this.range=t,this.axisPosition==="left"||this.axisPosition==="right"?this.boundingRect.height=t[1]-t[0]:this.boundingRect.width=t[1]-t[0],this.recalculateScale()}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){this.axisPosition=t,this.setRange(this.range)}getTickDistance(){const t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map(t=>t.toString()),this.axisConfig.labelFontSize)}recalculateOuterPaddingToDrawBar(){yt*this.getTickDistance()>this.outerPadding*2&&(this.outerPadding=Math.floor(yt*this.getTickDistance()/2)),this.recalculateScale()}calculateSpaceIfDrawnHorizontally(t){let i=t.height;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const s=this.getLabelDimension(),n=mt*t.width;this.outerPadding=Math.min(s.width/2,n);const o=s.height+this.axisConfig.labelPadding*2;this.labelTextHeight=s.height,o<=i&&(i-=o,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const s=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),n=s.height+this.axisConfig.titlePadding*2;this.titleTextHeight=s.height,n<=i&&(i-=n,this.showTitle=!0)}this.boundingRect.width=t.width,this.boundingRect.height=t.height-i}calculateSpaceIfDrawnVertical(t){let i=t.width;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const s=this.getLabelDimension(),n=mt*t.height;this.outerPadding=Math.min(s.height/2,n);const o=s.width+this.axisConfig.labelPadding*2;o<=i&&(i-=o,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const s=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),n=s.height+this.axisConfig.titlePadding*2;this.titleTextHeight=s.height,n<=i&&(i-=n,this.showTitle=!0)}this.boundingRect.width=t.width-i,this.boundingRect.height=t.height}calculateSpace(t){return this.axisPosition==="left"||this.axisPosition==="right"?this.calculateSpaceIfDrawnVertical(t):this.calculateSpaceIfDrawnHorizontally(t),this.recalculateScale(),{width:this.boundingRect.width,height:this.boundingRect.height}}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}getDrawableElementsForLeftAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),y:this.getScaleValue(i),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"middle",horizontalPos:"right"}))}),this.showTick){const i=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${i},${this.getScaleValue(s)} L ${i-this.axisConfig.tickLength},${this.getScaleValue(s)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForBottomAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){const i=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${this.getScaleValue(s)},${i} L ${this.getScaleValue(s)},${i+this.axisConfig.tickLength}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForTopAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+this.axisConfig.titlePadding*2:0)+this.axisConfig.labelPadding,fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){const i=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${this.getScaleValue(s)},${i+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(s)},${i+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElements(){if(this.axisPosition==="left")return this.getDrawableElementsForLeftAxis();if(this.axisPosition==="right")throw Error("Drawing of right axis is not implemented");return this.axisPosition==="bottom"?this.getDrawableElementsForBottomAxis():this.axisPosition==="top"?this.getDrawableElementsForTopAxis():[]}}class ti extends Ct{constructor(t,i,s,n,o){super(t,n,o,i),this.categories=s,this.scale=et().domain(this.categories).range(this.getRange())}setRange(t){super.setRange(t)}recalculateScale(){this.scale=et().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5),wt.trace("BandAxis axis final categories, range: ",this.categories,this.getRange())}getTickValues(){return this.categories}getScaleValue(t){return this.scale(t)||this.getRange()[0]}}class ii extends Ct{constructor(t,i,s,n,o){super(t,n,o,i),this.domain=s,this.scale=dt().domain(this.domain).range(this.getRange())}getTickValues(){return this.scale.ticks()}recalculateScale(){const t=[...this.domain];this.axisPosition==="left"&&t.reverse(),this.scale=dt().domain(t).range(this.getRange())}getScaleValue(t){return this.scale(t)}}function bt(e,t,i,s){const n=new _t(s);return kt(e)?new ti(t,i,e.categories,e.title,n):new ii(t,i,[e.min,e.max],e.title,n)}class ei{constructor(t,i,s,n){this.textDimensionCalculator=t,this.chartConfig=i,this.chartData=s,this.chartThemeConfig=n,this.boundingRect={x:0,y:0,width:0,height:0},this.showChartTitle=!1}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){const i=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize),s=Math.max(i.width,t.width),n=i.height+2*this.chartConfig.titlePadding;return i.width<=s&&i.height<=n&&this.chartConfig.showTitle&&this.chartData.title&&(this.boundingRect.width=s,this.boundingRect.height=n,this.showChartTitle=!0),{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){const t=[];return this.showChartTitle&&t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]}),t}}function si(e,t,i,s){const n=new _t(s);return new ei(n,e,t,i)}class ni{constructor(t,i,s,n,o){this.plotData=t,this.xAxis=i,this.yAxis=s,this.orientation=n,this.plotIndex=o}getDrawableElement(){const t=this.plotData.data.map(s=>[this.xAxis.getScaleValue(s[0]),this.yAxis.getScaleValue(s[1])]);let i;return this.orientation==="horizontal"?i=pt().y(s=>s[0]).x(s=>s[1])(t):i=pt().x(s=>s[0]).y(s=>s[1])(t),i?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:i,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[]}}class ai{constructor(t,i,s,n,o,u){this.barData=t,this.boundingRect=i,this.xAxis=s,this.yAxis=n,this.orientation=o,this.plotIndex=u}getDrawableElement(){const t=this.barData.data.map(o=>[this.xAxis.getScaleValue(o[0]),this.yAxis.getScaleValue(o[1])]),i=.05,s=Math.min(this.xAxis.getAxisOuterPadding()*2,this.xAxis.getTickDistance())*(1-i),n=s/2;return this.orientation==="horizontal"?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(o=>({x:this.boundingRect.x,y:o[0]-n,height:s,width:o[1]-this.boundingRect.x,fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(o=>({x:o[0]-n,y:o[1],width:s,height:this.boundingRect.y+this.boundingRect.height-o[1],fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]}}class hi{constructor(t,i,s){this.chartConfig=t,this.chartData=i,this.chartThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0}}setAxes(t,i){this.xAxis=t,this.yAxis=i}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){return this.boundingRect.width=t.width,this.boundingRect.height=t.height,{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){if(!(this.xAxis&&this.yAxis))throw Error("Axes must be passed to render Plots");const t=[];for(const[i,s]of this.chartData.plots.entries())switch(s.type){case"line":{const n=new ni(s,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...n.getDrawableElement())}break;case"bar":{const n=new ai(s,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...n.getDrawableElement())}break}return t}}function oi(e,t,i){return new hi(e,t,i)}class ri{constructor(t,i,s,n){this.chartConfig=t,this.chartData=i,this.componentStore={title:si(t,i,s,n),plot:oi(t,i,s),xAxis:bt(i.xAxis,t.xAxis,{titleColor:s.xAxisTitleColor,labelColor:s.xAxisLabelColor,tickColor:s.xAxisTickColor,axisLineColor:s.xAxisLineColor},n),yAxis:bt(i.yAxis,t.yAxis,{titleColor:s.yAxisTitleColor,labelColor:s.yAxisLabelColor,tickColor:s.yAxisTickColor,axisLineColor:s.yAxisLineColor},n)}}calculateVerticalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,s=0,n=0,o=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),u=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),d=this.componentStore.plot.calculateSpace({width:o,height:u});t-=d.width,i-=d.height,d=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),n=d.height,i-=d.height,this.componentStore.xAxis.setAxisPosition("bottom"),d=this.componentStore.xAxis.calculateSpace({width:t,height:i}),i-=d.height,this.componentStore.yAxis.setAxisPosition("left"),d=this.componentStore.yAxis.calculateSpace({width:t,height:i}),s=d.width,t-=d.width,t>0&&(o+=t,t=0),i>0&&(u+=i,i=0),this.componentStore.plot.calculateSpace({width:o,height:u}),this.componentStore.plot.setBoundingBoxXY({x:s,y:n}),this.componentStore.xAxis.setRange([s,s+o]),this.componentStore.xAxis.setBoundingBoxXY({x:s,y:n+u}),this.componentStore.yAxis.setRange([n,n+u]),this.componentStore.yAxis.setBoundingBoxXY({x:0,y:n}),this.chartData.plots.some(x=>ft(x))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateHorizontalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,s=0,n=0,o=0,u=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),d=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),x=this.componentStore.plot.calculateSpace({width:u,height:d});t-=x.width,i-=x.height,x=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),s=x.height,i-=x.height,this.componentStore.xAxis.setAxisPosition("left"),x=this.componentStore.xAxis.calculateSpace({width:t,height:i}),t-=x.width,n=x.width,this.componentStore.yAxis.setAxisPosition("top"),x=this.componentStore.yAxis.calculateSpace({width:t,height:i}),i-=x.height,o=s+x.height,t>0&&(u+=t,t=0),i>0&&(d+=i,i=0),this.componentStore.plot.calculateSpace({width:u,height:d}),this.componentStore.plot.setBoundingBoxXY({x:n,y:o}),this.componentStore.yAxis.setRange([n,n+u]),this.componentStore.yAxis.setBoundingBoxXY({x:n,y:s}),this.componentStore.xAxis.setRange([o,o+d]),this.componentStore.xAxis.setBoundingBoxXY({x:0,y:o}),this.chartData.plots.some(C=>ft(C))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateSpace(){this.chartConfig.chartOrientation==="horizontal"?this.calculateHorizontalSpace():this.calculateVerticalSpace()}getDrawableElement(){this.calculateSpace();const t=[];this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis);for(const i of Object.values(this.componentStore))t.push(...i.getDrawableElements());return t}}class li{static build(t,i,s,n){return new ri(t,i,s,n).getDrawableElement()}}let N=0,Tt,V=Lt(),X=Rt(),y=Pt(),nt=X.plotColorPalette.split(",").map(e=>e.trim()),G=!1,ht=!1;function Rt(){const e=Ft(),t=at();return At(e.xyChart,t.themeVariables.xyChart)}function Lt(){const e=at();return At(Ot.xyChart,e.xyChart)}function Pt(){return{yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]}}function ot(e){const t=at();return Gt(e.trim(),t)}function ci(e){Tt=e}function ui(e){e==="horizontal"?V.chartOrientation="horizontal":V.chartOrientation="vertical"}function gi(e){y.xAxis.title=ot(e.text)}function Dt(e,t){y.xAxis={type:"linear",title:y.xAxis.title,min:e,max:t},G=!0}function xi(e){y.xAxis={type:"band",title:y.xAxis.title,categories:e.map(t=>ot(t.text))},G=!0}function di(e){y.yAxis.title=ot(e.text)}function pi(e,t){y.yAxis={type:"linear",title:y.yAxis.title,min:e,max:t},ht=!0}function fi(e){const t=Math.min(...e),i=Math.max(...e),s=B(y.yAxis)?y.yAxis.min:1/0,n=B(y.yAxis)?y.yAxis.max:-1/0;y.yAxis={type:"linear",title:y.yAxis.title,min:Math.min(s,t),max:Math.max(n,i)}}function Et(e){let t=[];if(e.length===0)return t;if(!G){const i=B(y.xAxis)?y.xAxis.min:1/0,s=B(y.xAxis)?y.xAxis.max:-1/0;Dt(Math.min(i,1),Math.max(s,e.length))}if(ht||fi(e),kt(y.xAxis)&&(t=y.xAxis.categories.map((i,s)=>[i,e[s]])),B(y.xAxis)){const i=y.xAxis.min,s=y.xAxis.max,n=(s-i+1)/e.length,o=[];for(let u=i;u<=s;u+=n)o.push(`${u}`);t=o.map((u,d)=>[u,e[d]])}return t}function vt(e){return nt[e===0?0:e%nt.length]}function yi(e,t){const i=Et(t);y.plots.push({type:"line",strokeFill:vt(N),strokeWidth:2,data:i}),N++}function mi(e,t){const i=Et(t);y.plots.push({type:"bar",fill:vt(N),data:i}),N++}function bi(){if(y.plots.length===0)throw Error("No Plot to render, please provide a plot with some data");return y.title=St(),li.build(V,y,X,Tt)}function Ai(){return X}function Si(){return V}const wi=function(){Ht(),N=0,V=Lt(),y=Pt(),X=Rt(),nt=X.plotColorPalette.split(",").map(e=>e.trim()),G=!1,ht=!1},ki={getDrawableElem:bi,clear:wi,setAccTitle:Bt,getAccTitle:Nt,setDiagramTitle:Vt,getDiagramTitle:St,getAccDescription:Xt,setAccDescription:Yt,setOrientation:ui,setXAxisTitle:gi,setXAxisRangeData:Dt,setXAxisBand:xi,setYAxisTitle:di,setYAxisRangeData:pi,setLineData:yi,setBarData:mi,setTmpSVGG:ci,getChartThemeConfig:Ai,getChartConfig:Si},_i=(e,t,i,s)=>{const n=s.db,o=n.getChartThemeConfig(),u=n.getChartConfig();function d(p){return p==="top"?"text-before-edge":"middle"}function x(p){return p==="left"?"start":p==="right"?"end":"middle"}function C(p){return`translate(${p.x}, ${p.y}) rotate(${p.rotation||0})`}wt.debug(`Rendering xychart chart
`+e);const k=Ut(t),b=k.append("g").attr("class","main"),f=b.append("rect").attr("width",u.width).attr("height",u.height).attr("class","background");Qt(k,u.height,u.width,!0),k.attr("viewBox",`0 0 ${u.width} ${u.height}`),f.attr("fill",o.backgroundColor),n.setTmpSVGG(k.append("g").attr("class","mermaid-tmp-group"));const T=n.getDrawableElem(),S={};function P(p){let w=b,r="";for(const[D]of p.entries()){let O=b;D>0&&S[r]&&(O=S[r]),r+=p[D],w=S[r],w||(w=S[r]=O.append("g").attr("class",p[D]))}return w}for(const p of T){if(p.data.length===0)continue;const w=P(p.groupTexts);switch(p.type){case"rect":w.selectAll("rect").data(p.data).enter().append("rect").attr("x",r=>r.x).attr("y",r=>r.y).attr("width",r=>r.width).attr("height",r=>r.height).attr("fill",r=>r.fill).attr("stroke",r=>r.strokeFill).attr("stroke-width",r=>r.strokeWidth);break;case"text":w.selectAll("text").data(p.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",r=>r.fill).attr("font-size",r=>r.fontSize).attr("dominant-baseline",r=>d(r.verticalPos)).attr("text-anchor",r=>x(r.horizontalPos)).attr("transform",r=>C(r)).text(r=>r.text);break;case"path":w.selectAll("path").data(p.data).enter().append("path").attr("d",r=>r.path).attr("fill",r=>r.fill?r.fill:"none").attr("stroke",r=>r.strokeFill).attr("stroke-width",r=>r.strokeWidth);break}}},Ci={draw:_i},Ii={parser:qt,db:ki,renderer:Ci};export{Ii as diagram};

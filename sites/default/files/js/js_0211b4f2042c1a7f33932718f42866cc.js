/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
// $Id: tabledrag.js,v 1.1.2.1.2.2 2009/03/21 20:06:59 mfer Exp $

/**
 * Drag and drop table rows with field manipulation.
 *
 * Using the drupal_add_tabledrag() function, any table with weights or parent
 * relationships may be made into draggable tables. Columns containing a field
 * may optionally be hidden, providing a better user experience.
 *
 * Created tableDrag instances may be modified with custom behaviors by
 * overriding the .onDrag, .onDrop, .row.onSwap, and .row.onIndent methods.
 * See blocks.js for an example of adding additional functionality to tableDrag.
 */
Drupal.behaviors.tableDrag = function(context) {
  for (var base in Drupal.settings.tableDrag) {
    if (!$('#' + base + '.tabledrag-processed', context).size()) {
      var tableSettings = Drupal.settings.tableDrag[base];

      $('#' + base).filter(':not(.tabledrag-processed)').each(function() {
        // Create the new tableDrag instance. Save in the Drupal variable
        // to allow other scripts access to the object.
        Drupal.tableDrag[base] = new Drupal.tableDrag(this, tableSettings);
      });

      $('#' + base).addClass('tabledrag-processed');
    }
  }
};

/**
 * Constructor for the tableDrag object. Provides table and field manipulation.
 *
 * @param table
 *   DOM object for the table to be made draggable.
 * @param tableSettings
 *   Settings for the table added via drupal_add_dragtable().
 */
Drupal.tableDrag = function(table, tableSettings) {
  var self = this;

  // Required object variables.
  this.table = table;
  this.tableSettings = tableSettings;
  this.dragObject = null; // Used to hold information about a current drag operation.
  this.rowObject = null; // Provides operations for row manipulation.
  this.oldRowElement = null; // Remember the previous element.
  this.oldY = 0; // Used to determine up or down direction from last mouse move.
  this.changed = false; // Whether anything in the entire table has changed.
  this.maxDepth = 0; // Maximum amount of allowed parenting.
  this.rtl = $(this.table).css('direction') == 'rtl' ? -1 : 1; // Direction of the table.

  // Configure the scroll settings.
  this.scrollSettings = { amount: 4, interval: 50, trigger: 70 };
  this.scrollInterval = null;
  this.scrollY = 0;
  this.windowHeight = 0;

  // Check this table's settings to see if there are parent relationships in
  // this table. For efficiency, large sections of code can be skipped if we
  // don't need to track horizontal movement and indentations.
  this.indentEnabled = false;
  for (group in tableSettings) {
    for (n in tableSettings[group]) {
      if (tableSettings[group][n]['relationship'] == 'parent') {
        this.indentEnabled = true;
      }
      if (tableSettings[group][n]['limit'] > 0) {
        this.maxDepth = tableSettings[group][n]['limit'];
      }
    }
  }
  if (this.indentEnabled) {
    this.indentCount = 1; // Total width of indents, set in makeDraggable.
    // Find the width of indentations to measure mouse movements against.
    // Because the table doesn't need to start with any indentations, we
    // manually append 2 indentations in the first draggable row, measure
    // the offset, then remove.
    var indent = Drupal.theme('tableDragIndentation');
    var testCell = $('tr.draggable:first td:first', table).prepend(indent).prepend(indent);
    this.indentAmount = $('.indentation', testCell).get(1).offsetLeft - $('.indentation', testCell).get(0).offsetLeft;
    $('.indentation', testCell).slice(0, 2).remove();
  }

  // Make each applicable row draggable.
  $('tr.draggable', table).each(function() { self.makeDraggable(this); });

  // Hide columns containing affected form elements.
  this.hideColumns();

  // Add mouse bindings to the document. The self variable is passed along
  // as event handlers do not have direct access to the tableDrag object.
  $(document).bind('mousemove', function(event) { return self.dragRow(event, self); });
  $(document).bind('mouseup', function(event) { return self.dropRow(event, self); });
};

/**
 * Hide the columns containing form elements according to the settings for
 * this tableDrag instance.
 */
Drupal.tableDrag.prototype.hideColumns = function(){
  for (var group in this.tableSettings) {
    // Find the first field in this group.
    for (var d in this.tableSettings[group]) {
      var field = $('.' + this.tableSettings[group][d]['target'] + ':first', this.table);
      if (field.size() && this.tableSettings[group][d]['hidden']) {
        var hidden = this.tableSettings[group][d]['hidden'];
        var cell = field.parents('td:first');
        break;
      }
    }

    // Hide the column containing this field.
    if (hidden && cell[0] && cell.css('display') != 'none') {
      // Add 1 to our indexes. The nth-child selector is 1 based, not 0 based.
      var columnIndex = $('td', cell.parent()).index(cell.get(0)) + 1;
      var headerIndex = $('td:not(:hidden)', cell.parent()).index(cell.get(0)) + 1;
      $('tr', this.table).each(function(){
        var row = $(this);
        var parentTag = row.parent().get(0).tagName.toLowerCase();
        var index = (parentTag == 'thead') ? headerIndex : columnIndex;

        // Adjust the index to take into account colspans.
        row.children().each(function(n) {
          if (n < index) {
            index -= (this.colSpan && this.colSpan > 1) ? this.colSpan - 1 : 0;
          }
        });
        if (index > 0) {
          cell = row.children(':nth-child(' + index + ')');
          if (cell[0].colSpan > 1) {
            // If this cell has a colspan, simply reduce it.
            cell[0].colSpan = cell[0].colSpan - 1;
          }
          else {
            // Hide table body cells, but remove table header cells entirely
            // (Safari doesn't hide properly).
            parentTag == 'thead' ? cell.remove() : cell.css('display', 'none');
          }
        }
      });
    }
  }
};

/**
 * Find the target used within a particular row and group.
 */
Drupal.tableDrag.prototype.rowSettings = function(group, row) {
  var field = $('.' + group, row);
  for (delta in this.tableSettings[group]) {
    var targetClass = this.tableSettings[group][delta]['target'];
    if (field.is('.' + targetClass)) {
      // Return a copy of the row settings.
      var rowSettings = new Object();
      for (var n in this.tableSettings[group][delta]) {
        rowSettings[n] = this.tableSettings[group][delta][n];
      }
      return rowSettings;
    }
  }
};

/**
 * Take an item and add event handlers to make it become draggable.
 */
Drupal.tableDrag.prototype.makeDraggable = function(item) {
  var self = this;

  // Create the handle.
  var handle = $('<a href="#" class="tabledrag-handle"><div class="handle">&nbsp;</div></a>').attr('title', Drupal.t('Drag to re-order'));
  // Insert the handle after indentations (if any).
  if ($('td:first .indentation:last', item).after(handle).size()) {
    // Update the total width of indentation in this entire table.
    self.indentCount = Math.max($('.indentation', item).size(), self.indentCount);
  }
  else {
    $('td:first', item).prepend(handle);
  }

  // Add hover action for the handle.
  handle.hover(function() {
    self.dragObject == null ? $(this).addClass('tabledrag-handle-hover') : null;
  }, function() {
    self.dragObject == null ? $(this).removeClass('tabledrag-handle-hover') : null;
  });

  // Add the mousedown action for the handle.
  handle.mousedown(function(event) {
    // Create a new dragObject recording the event information.
    self.dragObject = new Object();
    self.dragObject.initMouseOffset = self.getMouseOffset(item, event);
    self.dragObject.initMouseCoords = self.mouseCoords(event);
    if (self.indentEnabled) {
      self.dragObject.indentMousePos = self.dragObject.initMouseCoords;
    }

    // If there's a lingering row object from the keyboard, remove its focus.
    if (self.rowObject) {
      $('a.tabledrag-handle', self.rowObject.element).blur();
    }

    // Create a new rowObject for manipulation of this row.
    self.rowObject = new self.row(item, 'mouse', self.indentEnabled, self.maxDepth, true);

    // Save the position of the table.
    self.table.topY = $(self.table).offset().top;
    self.table.bottomY = self.table.topY + self.table.offsetHeight;

    // Add classes to the handle and row.
    $(this).addClass('tabledrag-handle-hover');
    $(item).addClass('drag');

    // Set the document to use the move cursor during drag.
    $('body').addClass('drag');
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }

    // Hack for IE6 that flickers uncontrollably if select lists are moved.
    if (navigator.userAgent.indexOf('MSIE 6.') != -1) {
      $('select', this.table).css('display', 'none');
    }

    // Hack for Konqueror, prevent the blur handler from firing.
    // Konqueror always gives links focus, even after returning false on mousedown.
    self.safeBlur = false;

    // Call optional placeholder function.
    self.onDrag();
    return false;
  });

  // Prevent the anchor tag from jumping us to the top of the page.
  handle.click(function() {
    return false;
  });

  // Similar to the hover event, add a class when the handle is focused.
  handle.focus(function() {
    $(this).addClass('tabledrag-handle-hover');
    self.safeBlur = true;
  });

  // Remove the handle class on blur and fire the same function as a mouseup.
  handle.blur(function(event) {
    $(this).removeClass('tabledrag-handle-hover');
    if (self.rowObject && self.safeBlur) {
      self.dropRow(event, self);
    }
  });

  // Add arrow-key support to the handle.
  handle.keydown(function(event) {
    // If a rowObject doesn't yet exist and this isn't the tab key.
    if (event.keyCode != 9 && !self.rowObject) {
      self.rowObject = new self.row(item, 'keyboard', self.indentEnabled, self.maxDepth, true);
    }

    var keyChange = false;
    switch (event.keyCode) {
      case 37: // Left arrow.
      case 63234: // Safari left arrow.
        keyChange = true;
        self.rowObject.indent(-1 * self.rtl);
        break;
      case 38: // Up arrow.
      case 63232: // Safari up arrow.
        var previousRow = $(self.rowObject.element).prev('tr').get(0);
        while (previousRow && $(previousRow).is(':hidden')) {
          previousRow = $(previousRow).prev('tr').get(0);
        }
        if (previousRow) {
          self.safeBlur = false; // Do not allow the onBlur cleanup.
          self.rowObject.direction = 'up';
          keyChange = true;

          if ($(item).is('.tabledrag-root')) {
            // Swap with the previous top-level row..
            var groupHeight = 0;
            while (previousRow && $('.indentation', previousRow).size()) {
              previousRow = $(previousRow).prev('tr').get(0);
              groupHeight += $(previousRow).is(':hidden') ? 0 : previousRow.offsetHeight;
            }
            if (previousRow) {
              self.rowObject.swap('before', previousRow);
              // No need to check for indentation, 0 is the only valid one.
              window.scrollBy(0, -groupHeight);
            }
          }
          else if (self.table.tBodies[0].rows[0] != previousRow || $(previousRow).is('.draggable')) {
            // Swap with the previous row (unless previous row is the first one
            // and undraggable).
            self.rowObject.swap('before', previousRow);
            self.rowObject.interval = null;
            self.rowObject.indent(0);
            window.scrollBy(0, -parseInt(item.offsetHeight));
          }
          handle.get(0).focus(); // Regain focus after the DOM manipulation.
        }
        break;
      case 39: // Right arrow.
      case 63235: // Safari right arrow.
        keyChange = true;
        self.rowObject.indent(1 * self.rtl);
        break;
      case 40: // Down arrow.
      case 63233: // Safari down arrow.
        var nextRow = $(self.rowObject.group).filter(':last').next('tr').get(0);
        while (nextRow && $(nextRow).is(':hidden')) {
          nextRow = $(nextRow).next('tr').get(0);
        }
        if (nextRow) {
          self.safeBlur = false; // Do not allow the onBlur cleanup.
          self.rowObject.direction = 'down';
          keyChange = true;

          if ($(item).is('.tabledrag-root')) {
            // Swap with the next group (necessarily a top-level one).
            var groupHeight = 0;
            nextGroup = new self.row(nextRow, 'keyboard', self.indentEnabled, self.maxDepth, false);
            if (nextGroup) {
              $(nextGroup.group).each(function () {groupHeight += $(this).is(':hidden') ? 0 : this.offsetHeight});
              nextGroupRow = $(nextGroup.group).filter(':last').get(0);
              self.rowObject.swap('after', nextGroupRow);
              // No need to check for indentation, 0 is the only valid one.
              window.scrollBy(0, parseInt(groupHeight));
            }
          }
          else {
            // Swap with the next row.
            self.rowObject.swap('after', nextRow);
            self.rowObject.interval = null;
            self.rowObject.indent(0);
            window.scrollBy(0, parseInt(item.offsetHeight));
          }
          handle.get(0).focus(); // Regain focus after the DOM manipulation.
        }
        break;
    }

    if (self.rowObject && self.rowObject.changed == true) {
      $(item).addClass('drag');
      if (self.oldRowElement) {
        $(self.oldRowElement).removeClass('drag-previous');
      }
      self.oldRowElement = item;
      self.restripeTable();
      self.onDrag();
    }

    // Returning false if we have an arrow key to prevent scrolling.
    if (keyChange) {
      return false;
    }
  });

  // Compatibility addition, return false on keypress to prevent unwanted scrolling.
  // IE and Safari will supress scrolling on keydown, but all other browsers
  // need to return false on keypress. http://www.quirksmode.org/js/keys.html
  handle.keypress(function(event) {
    switch (event.keyCode) {
      case 37: // Left arrow.
      case 38: // Up arrow.
      case 39: // Right arrow.
      case 40: // Down arrow.
        return false;
    }
  });
};

/**
 * Mousemove event handler, bound to document.
 */
Drupal.tableDrag.prototype.dragRow = function(event, self) {
  if (self.dragObject) {
    self.currentMouseCoords = self.mouseCoords(event);

    var y = self.currentMouseCoords.y - self.dragObject.initMouseOffset.y;
    var x = self.currentMouseCoords.x - self.dragObject.initMouseOffset.x;

    // Check for row swapping and vertical scrolling.
    if (y != self.oldY) {
      self.rowObject.direction = y > self.oldY ? 'down' : 'up';
      self.oldY = y; // Update the old value.

      // Check if the window should be scrolled (and how fast).
      var scrollAmount = self.checkScroll(self.currentMouseCoords.y);
      // Stop any current scrolling.
      clearInterval(self.scrollInterval);
      // Continue scrolling if the mouse has moved in the scroll direction.
      if (scrollAmount > 0 && self.rowObject.direction == 'down' || scrollAmount < 0 && self.rowObject.direction == 'up') {
        self.setScroll(scrollAmount);
      }

      // If we have a valid target, perform the swap and restripe the table.
      var currentRow = self.findDropTargetRow(x, y);
      if (currentRow) {
        if (self.rowObject.direction == 'down') {
          self.rowObject.swap('after', currentRow, self);
        }
        else {
          self.rowObject.swap('before', currentRow, self);
        }
        self.restripeTable();
      }
    }

    // Similar to row swapping, handle indentations.
    if (self.indentEnabled) {
      var xDiff = self.currentMouseCoords.x - self.dragObject.indentMousePos.x;
      // Set the number of indentations the mouse has been moved left or right.
      var indentDiff = Math.round(xDiff / self.indentAmount * self.rtl);
      // Indent the row with our estimated diff, which may be further
      // restricted according to the rows around this row.
      var indentChange = self.rowObject.indent(indentDiff);
      // Update table and mouse indentations.
      self.dragObject.indentMousePos.x += self.indentAmount * indentChange * self.rtl;
      self.indentCount = Math.max(self.indentCount, self.rowObject.indents);
    }

    return false;
  }
};

/**
 * Mouseup event handler, bound to document.
 * Blur event handler, bound to drag handle for keyboard support.
 */
Drupal.tableDrag.prototype.dropRow = function(event, self) {
  // Drop row functionality shared between mouseup and blur events.
  if (self.rowObject != null) {
    var droppedRow = self.rowObject.element;
    // The row is already in the right place so we just release it.
    if (self.rowObject.changed == true) {
      // Update the fields in the dropped row.
      self.updateFields(droppedRow);

      // If a setting exists for affecting the entire group, update all the
      // fields in the entire dragged group.
      for (var group in self.tableSettings) {
        var rowSettings = self.rowSettings(group, droppedRow);
        if (rowSettings.relationship == 'group') {
          for (n in self.rowObject.children) {
            self.updateField(self.rowObject.children[n], group);
          }
        }
      }

      self.rowObject.markChanged();
      if (self.changed == false) {
        $(Drupal.theme('tableDragChangedWarning')).insertAfter(self.table).hide().fadeIn('slow');
        self.changed = true;
      }
    }

    if (self.indentEnabled) {
      self.rowObject.removeIndentClasses();
    }
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }
    $(droppedRow).removeClass('drag').addClass('drag-previous');
    self.oldRowElement = droppedRow;
    self.onDrop();
    self.rowObject = null;
  }

  // Functionality specific only to mouseup event.
  if (self.dragObject != null) {
    $('.tabledrag-handle', droppedRow).removeClass('tabledrag-handle-hover');

    self.dragObject = null;
    $('body').removeClass('drag');
    clearInterval(self.scrollInterval);

    // Hack for IE6 that flickers uncontrollably if select lists are moved.
    if (navigator.userAgent.indexOf('MSIE 6.') != -1) {
      $('select', this.table).css('display', 'block');
    }
  }
};

/**
 * Get the mouse coordinates from the event (allowing for browser differences).
 */
Drupal.tableDrag.prototype.mouseCoords = function(event){
  if (event.pageX || event.pageY) {
    return {x:event.pageX, y:event.pageY};
  }
  return {
    x:event.clientX + document.body.scrollLeft - document.body.clientLeft,
    y:event.clientY + document.body.scrollTop  - document.body.clientTop
  };
};

/**
 * Given a target element and a mouse event, get the mouse offset from that
 * element. To do this we need the element's position and the mouse position.
 */
Drupal.tableDrag.prototype.getMouseOffset = function(target, event) {
  var docPos   = $(target).offset();
  var mousePos = this.mouseCoords(event);
  return { x: mousePos.x - docPos.left, y: mousePos.y - docPos.top };
};

/**
 * Find the row the mouse is currently over. This row is then taken and swapped
 * with the one being dragged.
 *
 * @param x
 *   The x coordinate of the mouse on the page (not the screen).
 * @param y
 *   The y coordinate of the mouse on the page (not the screen).
 */
Drupal.tableDrag.prototype.findDropTargetRow = function(x, y) {
  var rows = this.table.tBodies[0].rows;
  for (var n=0; n<rows.length; n++) {
    var row = rows[n];
    var indentDiff = 0;
    var rowY = $(row).offset().top;
    // Because Safari does not report offsetHeight on table rows, but does on table
    // cells, grab the firstChild of the row and use that instead.
    // http://jacob.peargrove.com/blog/2006/technical/table-row-offsettop-bug-in-safari
    if (row.offsetHeight == 0) {
      var rowHeight = parseInt(row.firstChild.offsetHeight)/2;
    }
    // Other browsers.
    else {
      var rowHeight = parseInt(row.offsetHeight)/2;
    }

    // Because we always insert before, we need to offset the height a bit.
    if ((y > (rowY - rowHeight)) && (y < (rowY + rowHeight))) {
      if (this.indentEnabled) {
        // Check that this row is not a child of the row being dragged.
        for (n in this.rowObject.group) {
          if (this.rowObject.group[n] == row) {
            return null;
          }
        }
      }
      else {
        // Do not allow a row to be swapped with itself.
        if (row == this.rowObject.element) {
          return null;
        }
      }

      // Check that swapping with this row is allowed.
      if (!this.rowObject.isValidSwap(row)) {
        return null;
      }

      // We may have found the row the mouse just passed over, but it doesn't
      // take into account hidden rows. Skip backwards until we find a draggable
      // row.
      while ($(row).is(':hidden') && $(row).prev('tr').is(':hidden')) {
        row = $(row).prev('tr').get(0);
      }
      return row;
    }
  }
  return null;
};

/**
 * After the row is dropped, update the table fields according to the settings
 * set for this table.
 *
 * @param changedRow
 *   DOM object for the row that was just dropped.
 */
Drupal.tableDrag.prototype.updateFields = function(changedRow) {
  for (var group in this.tableSettings) {
    // Each group may have a different setting for relationship, so we find
    // the source rows for each seperately.
    this.updateField(changedRow, group);
  }
};

/**
 * After the row is dropped, update a single table field according to specific
 * settings.
 *
 * @param changedRow
 *   DOM object for the row that was just dropped.
 * @param group
 *   The settings group on which field updates will occur.
 */
Drupal.tableDrag.prototype.updateField = function(changedRow, group) {
  var rowSettings = this.rowSettings(group, changedRow);

  // Set the row as it's own target.
  if (rowSettings.relationship == 'self' || rowSettings.relationship == 'group') {
    var sourceRow = changedRow;
  }
  // Siblings are easy, check previous and next rows.
  else if (rowSettings.relationship == 'sibling') {
    var previousRow = $(changedRow).prev('tr').get(0);
    var nextRow = $(changedRow).next('tr').get(0);
    var sourceRow = changedRow;
    if ($(previousRow).is('.draggable') && $('.' + group, previousRow).length) {
      if (this.indentEnabled) {
        if ($('.indentations', previousRow).size() == $('.indentations', changedRow)) {
          sourceRow = previousRow;
        }
      }
      else {
        sourceRow = previousRow;
      }
    }
    else if ($(nextRow).is('.draggable') && $('.' + group, nextRow).length) {
      if (this.indentEnabled) {
        if ($('.indentations', nextRow).size() == $('.indentations', changedRow)) {
          sourceRow = nextRow;
        }
      }
      else {
        sourceRow = nextRow;
      }
    }
  }
  // Parents, look up the tree until we find a field not in this group.
  // Go up as many parents as indentations in the changed row.
  else if (rowSettings.relationship == 'parent') {
    var previousRow = $(changedRow).prev('tr');
    while (previousRow.length && $('.indentation', previousRow).length >= this.rowObject.indents) {
      previousRow = previousRow.prev('tr');
    }
    // If we found a row.
    if (previousRow.length) {
      sourceRow = previousRow[0];
    }
    // Otherwise we went all the way to the left of the table without finding
    // a parent, meaning this item has been placed at the root level.
    else {
      // Use the first row in the table as source, because it's garanteed to
      // be at the root level. Find the first item, then compare this row
      // against it as a sibling.
      sourceRow = $('tr.draggable:first').get(0);
      if (sourceRow == this.rowObject.element) {
        sourceRow = $(this.rowObject.group[this.rowObject.group.length - 1]).next('tr.draggable').get(0);
      }
      var useSibling = true;
    }
  }

  // Because we may have moved the row from one category to another,
  // take a look at our sibling and borrow its sources and targets.
  this.copyDragClasses(sourceRow, changedRow, group);
  rowSettings = this.rowSettings(group, changedRow);

  // In the case that we're looking for a parent, but the row is at the top
  // of the tree, copy our sibling's values.
  if (useSibling) {
    rowSettings.relationship = 'sibling';
    rowSettings.source = rowSettings.target;
  }

  var targetClass = '.' + rowSettings.target;
  var targetElement = $(targetClass, changedRow).get(0);

  // Check if a target element exists in this row.
  if (targetElement) {
    var sourceClass = '.' + rowSettings.source;
    var sourceElement = $(sourceClass, sourceRow).get(0);
    switch (rowSettings.action) {
      case 'depth':
        // Get the depth of the target row.
        targetElement.value = $('.indentation', $(sourceElement).parents('tr:first')).size();
        break;
      case 'match':
        // Update the value.
        targetElement.value = sourceElement.value;
        break;
      case 'order':
        var siblings = this.rowObject.findSiblings(rowSettings);
        if ($(targetElement).is('select')) {
          // Get a list of acceptable values.
          var values = new Array();
          $('option', targetElement).each(function() {
            values.push(this.value);
          });
          var maxVal = values[values.length - 1];
          // Populate the values in the siblings.
          $(targetClass, siblings).each(function() {
            // If there are more items than possible values, assign the maximum value to the row. 
            if (values.length > 0) {
              this.value = values.shift();
            }
            else {
              this.value = maxVal;
            }
          });
        }
        else {
          // Assume a numeric input field.
          var weight = parseInt($(targetClass, siblings[0]).val()) || 0;
          $(targetClass, siblings).each(function() {
            this.value = weight;
            weight++;
          });
        }
        break;
    }
  }
};

/**
 * Copy all special tableDrag classes from one row's form elements to a
 * different one, removing any special classes that the destination row
 * may have had.
 */
Drupal.tableDrag.prototype.copyDragClasses = function(sourceRow, targetRow, group) {
  var sourceElement = $('.' + group, sourceRow);
  var targetElement = $('.' + group, targetRow);
  if (sourceElement.length && targetElement.length) {
    targetElement[0].className = sourceElement[0].className;
  }
};

Drupal.tableDrag.prototype.checkScroll = function(cursorY) {
  var de  = document.documentElement;
  var b  = document.body;

  var windowHeight = this.windowHeight = window.innerHeight || (de.clientHeight && de.clientWidth != 0 ? de.clientHeight : b.offsetHeight);
  var scrollY = this.scrollY = (document.all ? (!de.scrollTop ? b.scrollTop : de.scrollTop) : (window.pageYOffset ? window.pageYOffset : window.scrollY));
  var trigger = this.scrollSettings.trigger;
  var delta = 0;

  // Return a scroll speed relative to the edge of the screen.
  if (cursorY - scrollY > windowHeight - trigger) {
    delta = trigger / (windowHeight + scrollY - cursorY);
    delta = (delta > 0 && delta < trigger) ? delta : trigger;
    return delta * this.scrollSettings.amount;
  }
  else if (cursorY - scrollY < trigger) {
    delta = trigger / (cursorY - scrollY);
    delta = (delta > 0 && delta < trigger) ? delta : trigger;
    return -delta * this.scrollSettings.amount;
  }
};

Drupal.tableDrag.prototype.setScroll = function(scrollAmount) {
  var self = this;

  this.scrollInterval = setInterval(function() {
    // Update the scroll values stored in the object.
    self.checkScroll(self.currentMouseCoords.y);
    var aboveTable = self.scrollY > self.table.topY;
    var belowTable = self.scrollY + self.windowHeight < self.table.bottomY;
    if (scrollAmount > 0 && belowTable || scrollAmount < 0 && aboveTable) {
      window.scrollBy(0, scrollAmount);
    }
  }, this.scrollSettings.interval);
};

Drupal.tableDrag.prototype.restripeTable = function() {
  // :even and :odd are reversed because jquery counts from 0 and
  // we count from 1, so we're out of sync.
  $('tr.draggable', this.table)
    .filter(':odd').filter('.odd')
      .removeClass('odd').addClass('even')
    .end().end()
    .filter(':even').filter('.even')
      .removeClass('even').addClass('odd');
};

/**
 * Stub function. Allows a custom handler when a row begins dragging.
 */
Drupal.tableDrag.prototype.onDrag = function() {
  return null;
};

/**
 * Stub function. Allows a custom handler when a row is dropped.
 */
Drupal.tableDrag.prototype.onDrop = function() {
  return null;
};

/**
 * Constructor to make a new object to manipulate a table row.
 *
 * @param tableRow
 *   The DOM element for the table row we will be manipulating.
 * @param method
 *   The method in which this row is being moved. Either 'keyboard' or 'mouse'.
 * @param indentEnabled
 *   Whether the containing table uses indentations. Used for optimizations.
 * @param maxDepth
 *   The maximum amount of indentations this row may contain.
 * @param addClasses
 *   Whether we want to add classes to this row to indicate child relationships.
 */
Drupal.tableDrag.prototype.row = function(tableRow, method, indentEnabled, maxDepth, addClasses) {
  this.element = tableRow;
  this.method = method;
  this.group = new Array(tableRow);
  this.groupDepth = $('.indentation', tableRow).size();
  this.changed = false;
  this.table = $(tableRow).parents('table:first').get(0);
  this.indentEnabled = indentEnabled;
  this.maxDepth = maxDepth;
  this.direction = ''; // Direction the row is being moved.

  if (this.indentEnabled) {
    this.indents = $('.indentation', tableRow).size();
    this.children = this.findChildren(addClasses);
    this.group = $.merge(this.group, this.children);
    // Find the depth of this entire group.
    for (var n = 0; n < this.group.length; n++) {
      this.groupDepth = Math.max($('.indentation', this.group[n]).size(), this.groupDepth);
    }
  }
};

/**
 * Find all children of rowObject by indentation.
 *
 * @param addClasses
 *   Whether we want to add classes to this row to indicate child relationships.
 */
Drupal.tableDrag.prototype.row.prototype.findChildren = function(addClasses) {
  var parentIndentation = this.indents;
  var currentRow = $(this.element, this.table).next('tr.draggable');
  var rows = new Array();
  var child = 0;
  while (currentRow.length) {
    var rowIndentation = $('.indentation', currentRow).length;
    // A greater indentation indicates this is a child.
    if (rowIndentation > parentIndentation) {
      child++;
      rows.push(currentRow[0]);
      if (addClasses) {
        $('.indentation', currentRow).each(function(indentNum) {
          if (child == 1 && (indentNum == parentIndentation)) {
            $(this).addClass('tree-child-first');
          }
          if (indentNum == parentIndentation) {
            $(this).addClass('tree-child');
          }
          else if (indentNum > parentIndentation) {
            $(this).addClass('tree-child-horizontal');
          }
        });
      }
    }
    else {
      break;
    }
    currentRow = currentRow.next('tr.draggable');
  }
  if (addClasses && rows.length) {
    $('.indentation:nth-child(' + (parentIndentation + 1) + ')', rows[rows.length - 1]).addClass('tree-child-last');
  }
  return rows;
};

/**
 * Ensure that two rows are allowed to be swapped.
 *
 * @param row
 *   DOM object for the row being considered for swapping.
 */
Drupal.tableDrag.prototype.row.prototype.isValidSwap = function(row) {
  if (this.indentEnabled) {
    var prevRow, nextRow;
    if (this.direction == 'down') {
      prevRow = row;
      nextRow = $(row).next('tr').get(0);
    }
    else {
      prevRow = $(row).prev('tr').get(0);
      nextRow = row;
    }
    this.interval = this.validIndentInterval(prevRow, nextRow);

    // We have an invalid swap if the valid indentations interval is empty.
    if (this.interval.min > this.interval.max) {
      return false;
    }
  }

  // Do not let an un-draggable first row have anything put before it.
  if (this.table.tBodies[0].rows[0] == row && $(row).is(':not(.draggable)')) {
    return false;
  }

  return true;
};

/**
 * Perform the swap between two rows.
 *
 * @param position
 *   Whether the swap will occur 'before' or 'after' the given row.
 * @param row
 *   DOM element what will be swapped with the row group.
 */
Drupal.tableDrag.prototype.row.prototype.swap = function(position, row) {
  $(row)[position](this.group);
  this.changed = true;
  this.onSwap(row);
};

/**
 * Determine the valid indentations interval for the row at a given position
 * in the table.
 *
 * @param prevRow
 *   DOM object for the row before the tested position
 *   (or null for first position in the table).
 * @param nextRow
 *   DOM object for the row after the tested position
 *   (or null for last position in the table).
 */
Drupal.tableDrag.prototype.row.prototype.validIndentInterval = function (prevRow, nextRow) {
  var minIndent, maxIndent;

  // Minimum indentation:
  // Do not orphan the next row.
  minIndent = nextRow ? $('.indentation', nextRow).size() : 0;

  // Maximum indentation:
  if (!prevRow || $(this.element).is('.tabledrag-root')) {
    // Do not indent the first row in the table or 'root' rows..
    maxIndent = 0;
  }
  else {
    // Do not go deeper than as a child of the previous row.
    maxIndent = $('.indentation', prevRow).size() + ($(prevRow).is('.tabledrag-leaf') ? 0 : 1);
    // Limit by the maximum allowed depth for the table.
    if (this.maxDepth) {
      maxIndent = Math.min(maxIndent, this.maxDepth - (this.groupDepth - this.indents));
    }
  }

  return {'min':minIndent, 'max':maxIndent};
}

/**
 * Indent a row within the legal bounds of the table.
 *
 * @param indentDiff
 *   The number of additional indentations proposed for the row (can be
 *   positive or negative). This number will be adjusted to nearest valid
 *   indentation level for the row.
 */
Drupal.tableDrag.prototype.row.prototype.indent = function(indentDiff) {
  // Determine the valid indentations interval if not available yet.
  if (!this.interval) {
    prevRow = $(this.element).prev('tr').get(0);
    nextRow = $(this.group).filter(':last').next('tr').get(0);
    this.interval = this.validIndentInterval(prevRow, nextRow);
  }

  // Adjust to the nearest valid indentation.
  var indent = this.indents + indentDiff;
  indent = Math.max(indent, this.interval.min);
  indent = Math.min(indent, this.interval.max);
  indentDiff = indent - this.indents;

  for (var n = 1; n <= Math.abs(indentDiff); n++) {
    // Add or remove indentations.
    if (indentDiff < 0) {
      $('.indentation:first', this.group).remove();
      this.indents--;
    }
    else {
      $('td:first', this.group).prepend(Drupal.theme('tableDragIndentation'));
      this.indents++;
    }
  }
  if (indentDiff) {
    // Update indentation for this row.
    this.changed = true;
    this.groupDepth += indentDiff;
    this.onIndent();
  }

  return indentDiff;
};

/**
 * Find all siblings for a row, either according to its subgroup or indentation.
 * Note that the passed in row is included in the list of siblings.
 *
 * @param settings
 *   The field settings we're using to identify what constitutes a sibling.
 */
Drupal.tableDrag.prototype.row.prototype.findSiblings = function(rowSettings) {
  var siblings = new Array();
  var directions = new Array('prev', 'next');
  var rowIndentation = this.indents;
  for (var d in directions) {
    var checkRow = $(this.element)[directions[d]]();
    while (checkRow.length) {
      // Check that the sibling contains a similar target field.
      if ($('.' + rowSettings.target, checkRow)) {
        // Either add immediately if this is a flat table, or check to ensure
        // that this row has the same level of indentaiton.
        if (this.indentEnabled) {
          var checkRowIndentation = $('.indentation', checkRow).length
        }

        if (!(this.indentEnabled) || (checkRowIndentation == rowIndentation)) {
          siblings.push(checkRow[0]);
        }
        else if (checkRowIndentation < rowIndentation) {
          // No need to keep looking for siblings when we get to a parent.
          break;
        }
      }
      else {
        break;
      }
      checkRow = $(checkRow)[directions[d]]();
    }
    // Since siblings are added in reverse order for previous, reverse the
    // completed list of previous siblings. Add the current row and continue.
    if (directions[d] == 'prev') {
      siblings.reverse();
      siblings.push(this.element);
    }
  }
  return siblings;
};

/**
 * Remove indentation helper classes from the current row group.
 */
Drupal.tableDrag.prototype.row.prototype.removeIndentClasses = function() {
  for (n in this.children) {
    $('.indentation', this.children[n])
      .removeClass('tree-child')
      .removeClass('tree-child-first')
      .removeClass('tree-child-last')
      .removeClass('tree-child-horizontal');
  }
};

/**
 * Add an asterisk or other marker to the changed row.
 */
Drupal.tableDrag.prototype.row.prototype.markChanged = function() {
  var marker = Drupal.theme('tableDragChangedMarker');
  var cell = $('td:first', this.element);
  if ($('span.tabledrag-changed', cell).length == 0) {
    cell.append(marker);
  }
};

/**
 * Stub function. Allows a custom handler when a row is indented.
 */
Drupal.tableDrag.prototype.row.prototype.onIndent = function() {
  return null;
};

/**
 * Stub function. Allows a custom handler when a row is swapped.
 */
Drupal.tableDrag.prototype.row.prototype.onSwap = function(swappedRow) {
  return null;
};

Drupal.theme.prototype.tableDragChangedMarker = function () {
  return '<span class="warning tabledrag-changed">*</span>';
};

Drupal.theme.prototype.tableDragIndentation = function () {
  return '<div class="indentation">&nbsp;</div>';
};

Drupal.theme.prototype.tableDragChangedWarning = function () {
  return '<div class="warning">' + Drupal.theme('tableDragChangedMarker') + ' ' + Drupal.t("Changes made in this table will not be saved until the form is submitted.") + '</div>';
};
;

$(document).ready(function() {
  if (!$('#admin-menu').length) {
    return;
  }

  // Apply margin-top if enabled; directly applying marginTop doesn't work in IE.
  if (Drupal && Drupal.settings && Drupal.settings.admin_menu) {
    if (Drupal.settings.admin_menu.margin_top) {
      $('body').addClass('admin-menu');
    }
    if (Drupal.settings.admin_menu.position_fixed) {
      $('#admin-menu').css('position', 'fixed');
    }
    // Move page tabs into administration menu.
    if (Drupal.settings.admin_menu.tweak_tabs) {
      $('ul.tabs.primary li').each(function() {
        $(this).addClass('admin-menu-tab').appendTo('#admin-menu > ul');
      });
      $('ul.tabs.secondary').appendTo('#admin-menu > ul > li.admin-menu-tab.active').removeClass('secondary');
    }
    // Collapse fieldsets on Modules page. For why multiple selectors see #111719.
    if (Drupal.settings.admin_menu.tweak_modules) {
      $('#system-modules fieldset:not(.collapsed), #system-modules-1 fieldset:not(.collapsed)').addClass('collapsed');
    }
  }

  // Hover emulation for IE 6.
  if ($.browser.msie && parseInt(jQuery.browser.version) == 6) {
    $('#admin-menu li').hover(function() {
      $(this).addClass('iehover');
    }, function() {
      $(this).removeClass('iehover');
    });
  }

  // Delayed mouseout.
  $('#admin-menu li').hover(function() {
    // Stop the timer.
    clearTimeout(this.sfTimer);
    // Display child lists.
    $('> ul', this).css({left: 'auto', display: 'block'})
      // Immediately hide nephew lists.
      .parent().siblings('li').children('ul').css({left: '-999em', display: 'none'});
  }, function() {
    // Start the timer.
    var uls = $('> ul', this);
    this.sfTimer = setTimeout(function() {
      uls.css({left: '-999em', display: 'none'});
    }, 400);
  });
});
;
/*

 FullCalendar v1.4.9
 http://arshaw.com/fullcalendar/

 Use fullcalendar.css for basic styling.
 For event drag & drop, requires jQuery UI draggable.
 For event resizing, requires jQuery UI resizable.

 Copyright (c) 2010 Adam Shaw
 Dual licensed under the MIT and GPL licenses, located in
 MIT-LICENSE.txt and GPL-LICENSE.txt respectively.

 Date: Fri Nov 19 22:45:44 2010 -0800

*/
(function(l,ga){function hb(a){l.extend(true,Oa,a)}function Db(a,b,f){function e(q){if(I){s();r();ja();N(q)}else g()}function g(){P=b.theme?"ui":"fc";a.addClass("fc");b.isRTL&&a.addClass("fc-rtl");b.theme&&a.addClass("ui-widget");I=l("<div class='fc-content "+P+"-widget-content' style='position:relative'/>").prependTo(a);L=new Eb(Y,b);(D=L.render())&&a.prepend(D);z(b.defaultView);l(window).resize(ha);t()||h()}function h(){setTimeout(function(){!v.start&&t()&&N()},0)}function m(){l(window).unbind("resize",
ha);L.destroy();I.remove();a.removeClass("fc fc-rtl fc-ui-widget")}function o(){return Q.offsetWidth!==0}function t(){return l("body")[0].offsetWidth!==0}function z(q){if(!v||q!=v.name){p++;A();var B=v,J;if(B){(B.beforeHide||ib)();Ra(I,I.height());B.element.hide()}else Ra(I,1);I.css("overflow","hidden");if(v=j[q])v.element.show();else v=j[q]=new Fa[q](J=k=l("<div class='fc-view fc-view-"+q+"' style='position:absolute'/>").appendTo(I),Y);B&&L.deactivateButton(B.name);L.activateButton(q);N();I.css("overflow",
"");B&&Ra(I,1);J||(v.afterShow||ib)();p--}}function N(q){if(o()){p++;A();E===ga&&s();var B=false;if(!v.start||q||u<v.start||u>=v.end){v.render(u,q||0);Z(true);B=true}else if(v.sizeDirty){v.clearEvents();Z();B=true}else if(v.eventsDirty){v.clearEvents();B=true}v.sizeDirty=false;v.eventsDirty=false;da(B);i=a.outerWidth();L.updateTitle(v.title);q=new Date;q>=v.start&&q<v.end?L.disableButton("today"):L.enableButton("today");p--;v.trigger("viewDisplay",Q)}}function O(){r();if(o()){s();Z();A();v.clearEvents();
v.renderEvents(V);v.sizeDirty=false}}function r(){l.each(j,function(q,B){B.sizeDirty=true})}function s(){E=b.contentHeight?b.contentHeight:b.height?b.height-(D?D.height():0)-Sa(I[0]):Math.round(I.width()/Math.max(b.aspectRatio,0.5))}function Z(q){p++;v.setHeight(E,q);if(k){k.css("position","relative");k=null}v.setWidth(I.width(),q);p--}function ha(){if(!p)if(v.start){var q=++c;setTimeout(function(){if(q==c&&!p&&o())if(i!=(i=a.outerWidth())){p++;O();v.trigger("windowResize",Q);p--}},200)}else h()}
function da(q){if(!b.lazyFetching||w(v.visStart,v.visEnd))X();else q&&aa()}function X(){K(v.visStart,v.visEnd)}function la(q){V=q;aa()}function oa(q){aa(q)}function aa(q){ja();if(o()){v.clearEvents();v.renderEvents(V,q);v.eventsDirty=false}}function ja(){l.each(j,function(q,B){B.eventsDirty=true})}function ca(q,B,J){v.select(q,B,J===ga?true:J)}function A(){v&&v.unselect()}function ia(){N(-1)}function x(){N(1)}function d(){Ta(u,-1);N()}function F(){Ta(u,1);N()}function H(){u=new Date;N()}function R(q,
B,J){if(q instanceof Date)u=C(q);else jb(u,q,B,J);N()}function ma(q,B,J){q!==ga&&Ta(u,q);B!==ga&&Ua(u,B);J!==ga&&T(u,J);N()}function ka(){return C(u)}function G(){return v}function U(q,B){if(B===ga)return b[q];if(q=="height"||q=="contentHeight"||q=="aspectRatio"){b[q]=B;O()}}function va(q,B){if(b[q])return b[q].apply(B||Q,Array.prototype.slice.call(arguments,2))}var Y=this;Y.options=b;Y.render=e;Y.destroy=m;Y.refetchEvents=X;Y.reportEvents=la;Y.reportEventChange=oa;Y.changeView=z;Y.select=ca;Y.unselect=
A;Y.prev=ia;Y.next=x;Y.prevYear=d;Y.nextYear=F;Y.today=H;Y.gotoDate=R;Y.incrementDate=ma;Y.formatDate=function(q,B){return Ha(q,B,b)};Y.formatDates=function(q,B,J){return Va(q,B,J,b)};Y.getDate=ka;Y.getView=G;Y.option=U;Y.trigger=va;Fb.call(Y,b,f);var w=Y.isFetchNeeded,K=Y.fetchEvents,Q=a[0],L,D,I,P,v,j={},i,E,k,c=0,p=0,u=new Date,V=[],$;jb(u,b.year,b.month,b.date);b.droppable&&l(document).bind("dragstart",function(q,B){var J=q.target,fa=l(J);if(!fa.parents(".fc").length){var na=b.dropAccept;if(l.isFunction(na)?
na.call(J,fa):fa.is(na)){$=J;v.dragStart($,q,B)}}}).bind("dragstop",function(q,B){if($){v.dragStop($,q,B);$=null}})}function Eb(a,b){function f(){r=b.theme?"ui":"fc";var s=b.header;if(s)return O=l("<table class='fc-header'/>").append(l("<tr/>").append(l("<td class='fc-header-left'/>").append(g(s.left))).append(l("<td class='fc-header-center'/>").append(g(s.center))).append(l("<td class='fc-header-right'/>").append(g(s.right))))}function e(){O.remove()}function g(s){if(s){var Z=l("<tr/>");l.each(s.split(" "),
function(ha){ha>0&&Z.append("<td><span class='fc-header-space'/></td>");var da;l.each(this.split(","),function(X,la){if(la=="title"){Z.append("<td><h2 class='fc-header-title'>&nbsp;</h2></td>");da&&da.addClass(r+"-corner-right");da=null}else{var oa;if(a[la])oa=a[la];else if(Fa[la])oa=function(){aa.removeClass(r+"-state-hover");a.changeView(la)};if(oa){da&&da.addClass(r+"-no-right");var aa;X=b.theme?Wa(b.buttonIcons,la):null;var ja=Wa(b.buttonText,la);if(X)aa=l("<div class='fc-button-"+la+" ui-state-default'><a><span class='ui-icon ui-icon-"+
X+"'/></a></div>");else if(ja)aa=l("<div class='fc-button-"+la+" "+r+"-state-default'><a><span>"+ja+"</span></a></div>");if(aa){aa.click(function(){aa.hasClass(r+"-state-disabled")||oa()}).mousedown(function(){aa.not("."+r+"-state-active").not("."+r+"-state-disabled").addClass(r+"-state-down")}).mouseup(function(){aa.removeClass(r+"-state-down")}).hover(function(){aa.not("."+r+"-state-active").not("."+r+"-state-disabled").addClass(r+"-state-hover")},function(){aa.removeClass(r+"-state-hover").removeClass(r+
"-state-down")}).appendTo(l("<td/>").appendTo(Z));da?da.addClass(r+"-no-right"):aa.addClass(r+"-corner-left");da=aa}}}});da&&da.addClass(r+"-corner-right")});return l("<table/>").append(Z)}}function h(s){O.find("h2.fc-header-title").html(s)}function m(s){O.find("div.fc-button-"+s).addClass(r+"-state-active")}function o(s){O.find("div.fc-button-"+s).removeClass(r+"-state-active")}function t(s){O.find("div.fc-button-"+s).addClass(r+"-state-disabled")}function z(s){O.find("div.fc-button-"+s).removeClass(r+
"-state-disabled")}var N=this;N.render=f;N.destroy=e;N.updateTitle=h;N.activateButton=m;N.deactivateButton=o;N.disableButton=t;N.enableButton=z;var O=l([]),r}function Fb(a,b){function f(d,F){return!oa||d<oa||F>aa}function e(d,F){oa=d;aa=F;x=[];d=++ja;ca=F=b.length;for(var H=0;H<F;H++)g(b[H],d)}function g(d,F){h(d,function(H){if(F==ja){for(var R=0;R<H.length;R++){Z(H[R]);H[R].source=d}x=x.concat(H);ca--;ca||la(x)}})}function h(d,F){if(typeof d=="string"){var H={};H[a.startParam]=Math.round(oa.getTime()/
1E3);H[a.endParam]=Math.round(aa.getTime()/1E3);if(a.cacheParam)H[a.cacheParam]=(new Date).getTime();r();l.ajax({url:d,dataType:"json",data:H,cache:a.cacheParam||false,success:function(R){s();F(R)}})}else if(l.isFunction(d)){r();d(C(oa),C(aa),function(R){s();F(R)})}else F(d)}function m(d){b.push(d);ca++;g(d,ja)}function o(d){b=l.grep(b,function(F){return F!=d});x=l.grep(x,function(F){return F.source!=d});la(x)}function t(d){var F,H=x.length,R,ma=X().defaultEventEnd,ka=d.start-d._start,G=d.end?d.end-
(d._end||ma(d)):0;for(F=0;F<H;F++){R=x[F];if(R._id==d._id&&R!=d){R.start=new Date(+R.start+ka);R.end=d.end?R.end?new Date(+R.end+G):new Date(+ma(R)+G):null;R.title=d.title;R.url=d.url;R.allDay=d.allDay;R.className=d.className;R.editable=d.editable;Z(R)}}Z(d);la(x)}function z(d,F){Z(d);if(!d.source){if(F){ia.push(d);d.source=ia}x.push(d)}la(x)}function N(d){if(d){if(!l.isFunction(d)){var F=d+"";d=function(R){return R._id==F}}x=l.grep(x,d,true);for(H=0;H<b.length;H++)if(typeof b[H]=="object")b[H]=l.grep(b[H],
d,true)}else{x=[];for(var H=0;H<b.length;H++)if(typeof b[H]=="object")b[H]=[]}la(x)}function O(d){if(l.isFunction(d))return l.grep(x,d);else if(d){d+="";return l.grep(x,function(F){return F._id==d})}return x}function r(){A++||da("loading",null,true)}function s(){--A||da("loading",null,false)}function Z(d){d._id=d._id||(d.id===ga?"_fc"+Gb++:d.id+"");if(d.date){if(!d.start)d.start=d.date;delete d.date}d._start=C(d.start=Xa(d.start,a.ignoreTimezone));d.end=Xa(d.end,a.ignoreTimezone);if(d.end&&d.end<=
d.start)d.end=null;d._end=d.end?C(d.end):null;if(d.allDay===ga)d.allDay=a.allDayDefault;if(d.className){if(typeof d.className=="string")d.className=d.className.split(/\s+/)}else d.className=[]}var ha=this;ha.isFetchNeeded=f;ha.fetchEvents=e;ha.addEventSource=m;ha.removeEventSource=o;ha.updateEvent=t;ha.renderEvent=z;ha.removeEvents=N;ha.clientEvents=O;ha.normalizeEvent=Z;var da=ha.trigger,X=ha.getView,la=ha.reportEvents,oa,aa,ja=0,ca=0,A=0,ia=[],x=[];b.push(ia)}function Hb(a,b){function f(o,t){if(t){Ua(o,
t);o.setDate(1)}o=C(o,true);o.setDate(1);t=Ua(C(o),1);var z=C(o),N=C(t),O=g("firstDay"),r=g("weekends")?0:1;if(r){ta(z);ta(N,-1,true)}T(z,-((z.getDay()-Math.max(O,r)+7)%7));T(N,(7-N.getDay()+Math.max(O,r))%7);O=Math.round((N-z)/(kb*7));if(g("weekMode")=="fixed"){T(N,(6-O)*7);O=6}e.title=m(o,g("titleFormat"));e.start=o;e.end=t;e.visStart=z;e.visEnd=N;h(O,r?5:7,true)}var e=this;e.render=f;Ya.call(e,a,b,"month");var g=e.opt,h=e.renderBasic,m=b.formatDate}function Ib(a,b){function f(o,t){t&&T(o,t*7);
o=T(C(o),-((o.getDay()-g("firstDay")+7)%7));t=T(C(o),7);var z=C(o),N=C(t),O=g("weekends");if(!O){ta(z);ta(N,-1,true)}e.title=m(z,T(C(N),-1),g("titleFormat"));e.start=o;e.end=t;e.visStart=z;e.visEnd=N;h(1,O?7:5,false)}var e=this;e.render=f;Ya.call(e,a,b,"basicWeek");var g=e.opt,h=e.renderBasic,m=b.formatDates}function Jb(a,b){function f(o,t){if(t){T(o,t);g("weekends")||ta(o,t<0?-1:1)}e.title=m(o,g("titleFormat"));e.start=e.visStart=C(o,true);e.end=e.visEnd=T(C(e.start),1);h(1,1,false)}var e=this;e.render=
f;Ya.call(e,a,b,"basicDay");var g=e.opt,h=e.renderBasic,m=b.formatDate}function Ya(a,b,f){function e(k,c,p){w=k;K=c;if(ka=ia("isRTL")){G=-1;U=K-1}else{G=1;U=0}va=ia("firstDay");Y=ia("weekends")?0:1;var u=ia("theme")?"ui":"fc",V=ia("columnFormat"),$=A.start.getMonth(),q=Ga(new Date),B,J=C(A.visStart);if(P){d();c=P.find("tr").length;if(w<c)P.find("tr:gt("+(w-1)+")").remove();else if(w>c){k="";for(c=c;c<w;c++){k+="<tr class='fc-week"+c+"'>";for(B=0;B<K;B++){k+="<td class='fc-"+Ca[J.getDay()]+" "+u+"-state-default fc-new fc-day"+
(c*K+B)+(B==U?" fc-leftmost":"")+"'>"+(p?"<div class='fc-day-number'></div>":"")+"<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></td>";T(J,1);Y&&ta(J)}k+="</tr>"}P.append(k)}m(P.find("td.fc-new").removeClass("fc-new"));J=C(A.visStart);P.find("td").each(function(){var na=l(this);if(w>1)J.getMonth()==$?na.removeClass("fc-other-month"):na.addClass("fc-other-month");+J==+q?na.removeClass("fc-not-today").addClass("fc-today").addClass(u+"-state-highlight"):na.addClass("fc-not-today").removeClass("fc-today").removeClass(u+
"-state-highlight");na.find("div.fc-day-number").text(J.getDate());T(J,1);Y&&ta(J)});if(w==1){J=C(A.visStart);I.find("th").each(function(na,W){l(W).text(ma(J,V));W.className=W.className.replace(/^fc-\w+(?= )/,"fc-"+Ca[J.getDay()]);T(J,1);Y&&ta(J)});J=C(A.visStart);P.find("td").each(function(na,W){W.className=W.className.replace(/^fc-\w+(?= )/,"fc-"+Ca[J.getDay()]);T(J,1);Y&&ta(J)})}}else{var fa=l("<table/>").appendTo(a);k="<thead><tr>";for(c=0;c<K;c++){k+="<th class='fc-"+Ca[J.getDay()]+" "+u+"-state-default"+
(c==U?" fc-leftmost":"")+"'>"+ma(J,V)+"</th>";T(J,1);Y&&ta(J)}I=l(k+"</tr></thead>").appendTo(fa);k="<tbody>";J=C(A.visStart);for(c=0;c<w;c++){k+="<tr class='fc-week"+c+"'>";for(B=0;B<K;B++){k+="<td class='fc-"+Ca[J.getDay()]+" "+u+"-state-default fc-day"+(c*K+B)+(B==U?" fc-leftmost":"")+(w>1&&J.getMonth()!=$?" fc-other-month":"")+(+J==+q?" fc-today "+u+"-state-highlight":" fc-not-today")+"'>"+(p?"<div class='fc-day-number'>"+J.getDate()+"</div>":"")+"<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></td>";
T(J,1);Y&&ta(J)}k+="</tr>"}P=l(k+"</tbody>").appendTo(fa);m(P.find("td"));v=l("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(a)}}function g(k){D=k;k=P.find("tr td:first-child");var c=D-I.height(),p;if(ia("weekMode")=="variable")p=c=Math.floor(c/(w==1?2:6));else{p=Math.floor(c/w);c=c-p*(w-1)}if(Za===ga){var u=P.find("tr:first").find("td:first");u.height(p);Za=p!=u.height()}if(Za){k.slice(0,-1).height(p);k.slice(-1).height(c)}else{Pa(k.slice(0,-1),p);Pa(k.slice(-1),c)}}function h(k){L=
k;E.clear();Q=Math.floor(L/K);Ia(I.find("th").slice(0,-1),Q)}function m(k){k.click(o).mousedown(R)}function o(k){if(!ia("selectable")){var c=parseInt(this.className.match(/fc\-day(\d+)/)[1]);c=T(C(A.visStart),Math.floor(c/K)*7+c%K);x("dayClick",this,c,true,k)}}function t(k,c,p){p&&j.build();p=C(A.visStart);for(var u=T(C(p),K),V=0;V<w;V++){var $=new Date(Math.max(p,k)),q=new Date(Math.min(u,c));if($<q){var B;if(ka){B=za(q,p)*G+U+1;$=za($,p)*G+U+1}else{B=za($,p);$=za(q,p)}m(z(V,B,V,$-1))}T(p,7);T(u,
7)}}function z(k,c,p,u){k=j.rect(k,c,p,u,a);return F(k,a)}function N(k){return C(k)}function O(k,c){t(k,T(C(c),1),true)}function r(){H()}function s(k,c){i.start(function(p){H();p&&z(p.row,p.col,p.row,p.col)},c)}function Z(k,c,p){var u=i.stop();H();if(u){u=aa(u);x("drop",k,u,true,c,p)}}function ha(k){return C(k.start)}function da(k){return E.left(k)}function X(k){return E.right(k)}function la(k){return(k-Math.max(va,Y)+K)%K}function oa(k){return{row:Math.floor(za(k,A.visStart)/7),col:la(k.getDay())*
G+U}}function aa(k){return T(C(A.visStart),k.row*7+k.col*G+U)}function ja(k){return P.find("tr:eq("+k+")")}function ca(){return{left:0,right:L}}var A=this;A.renderBasic=e;A.setHeight=g;A.setWidth=h;A.renderDayOverlay=t;A.defaultSelectionEnd=N;A.renderSelection=O;A.clearSelection=r;A.dragStart=s;A.dragStop=Z;A.defaultEventEnd=ha;A.getHoverListener=function(){return i};A.colContentLeft=da;A.colContentRight=X;A.dayOfWeekCol=la;A.dateCell=oa;A.cellDate=aa;A.cellIsAllDay=function(){return true};A.allDayTR=
ja;A.allDayBounds=ca;A.getRowCnt=function(){return w};A.getColCnt=function(){return K};A.getColWidth=function(){return Q};A.getDaySegmentContainer=function(){return v};lb.call(A,a,b,f);mb.call(A);nb.call(A);Kb.call(A);var ia=A.opt,x=A.trigger,d=A.clearEvents,F=A.renderOverlay,H=A.clearOverlays,R=A.daySelectionMousedown,ma=b.formatDate,ka,G,U,va,Y,w,K,Q,L,D,I,P,v,j,i,E;ob(a.addClass("fc-grid"));j=new pb(function(k,c){var p,u,V,$=P.find("tr:first td");if(ka)$=l($.get().reverse());$.each(function(q,
B){p=l(B);u=p.offset().left;if(q)V[1]=u;V=[u];c[q]=V});V[1]=u+p.outerWidth();P.find("tr").each(function(q,B){p=l(B);u=p.offset().top;if(q)V[1]=u;V=[u];k[q]=V});V[1]=u+p.outerHeight()});i=new qb(j);E=new rb(function(k){return P.find("td:eq("+k+") div div")})}function Kb(){function a(ca,A){t(ca);aa(f(ca),A)}function b(){z();Z().empty()}function f(ca){var A=la(),ia=oa(),x=C(h.visStart);ia=T(C(x),ia);var d=l.map(ca,Na),F,H,R,ma,ka,G,U=[];for(F=0;F<A;F++){H=$a(ab(ca,d,x,ia));for(R=0;R<H.length;R++){ma=
H[R];for(ka=0;ka<ma.length;ka++){G=ma[ka];G.row=F;G.level=R;U.push(G)}}T(x,7);T(ia,7)}return U}function e(ca,A,ia){N(ca,A);if(ca.editable||ca.editable===ga&&m("editable")){g(ca,A);ia.isEnd&&ja(ca,A,ia)}}function g(ca,A){if(!m("disableDragging")&&A.draggable){var ia=ha(),x;A.draggable({zIndex:9,delay:50,opacity:m("dragOpacity"),revertDuration:m("dragRevertDuration"),start:function(d,F){o("eventDragStart",A,ca,d,F);r(ca,A);ia.start(function(H,R,ma,ka){A.draggable("option","revert",!H||!ma&&!ka);X();
if(H){x=ma*7+ka*(m("isRTL")?-1:1);da(T(C(ca.start),x),T(Na(ca),x))}else x=0},d,"drag")},stop:function(d,F){ia.stop();X();o("eventDragStop",A,ca,d,F);if(x){A.find("a").removeAttr("href");s(this,ca,x,0,ca.allDay,d,F)}else{l.browser.msie&&A.css("filter","");O(ca,A)}}})}}var h=this;h.renderEvents=a;h.compileDaySegs=f;h.clearEvents=b;h.bindDaySeg=e;sb.call(h);var m=h.opt,o=h.trigger,t=h.reportEvents,z=h.reportEventClear,N=h.eventElementHandlers,O=h.showEvents,r=h.hideEvents,s=h.eventDrop,Z=h.getDaySegmentContainer,
ha=h.getHoverListener,da=h.renderDayOverlay,X=h.clearOverlays,la=h.getRowCnt,oa=h.getColCnt,aa=h.renderDaySegs,ja=h.resizableDayEvent}function Lb(a,b){function f(o,t){t&&T(o,t*7);o=T(C(o),-((o.getDay()-g("firstDay")+7)%7));t=T(C(o),7);var z=C(o),N=C(t),O=g("weekends");if(!O){ta(z);ta(N,-1,true)}e.title=m(z,T(C(N),-1),g("titleFormat"));e.start=o;e.end=t;e.visStart=z;e.visEnd=N;h(O?7:5)}var e=this;e.render=f;tb.call(e,a,b,"agendaWeek");var g=e.opt,h=e.renderAgenda,m=b.formatDates}function Mb(a,b){function f(o,
t){if(t){T(o,t);g("weekends")||ta(o,t<0?-1:1)}t=C(o,true);var z=T(C(t),1);e.title=m(o,g("titleFormat"));e.start=e.visStart=t;e.end=e.visEnd=z;h(1)}var e=this;e.render=f;tb.call(e,a,b,"agendaDay");var g=e.opt,h=e.renderAgenda,m=b.formatDate}function tb(a,b,f){function e(n){c=n;fa=U("theme")?"ui":"fc";W=U("weekends")?0:1;na=U("firstDay");if(sa=U("isRTL")){ea=-1;pa=c-1}else{ea=1;pa=0}Aa=bb(U("minTime"));Ba=bb(U("maxTime"));n=sa?T(C(G.visEnd),-1):C(G.visStart);var y=C(n),M=Ga(new Date),S=U("columnFormat");
if(v){Y();v.find("tr:first th").slice(1,-1).each(function(Ja,xa){l(xa).text(P(y,S));xa.className=xa.className.replace(/^fc-\w+(?= )/,"fc-"+Ca[y.getDay()]);T(y,ea);W&&ta(y,ea)});y=C(n);k.find("td").each(function(Ja,xa){xa.className=xa.className.replace(/^fc-\w+(?= )/,"fc-"+Ca[y.getDay()]);+y==+M?l(xa).removeClass("fc-not-today").addClass("fc-today").addClass(fa+"-state-highlight"):l(xa).addClass("fc-not-today").removeClass("fc-today").removeClass(fa+"-state-highlight");T(y,ea);W&&ta(y,ea)})}else{var ba,
ua,Da=U("slotMinutes")%15==0,qa="<div class='fc-agenda-head' style='position:relative;z-index:4'><table style='width:100%'><tr class='fc-first"+(U("allDaySlot")?"":" fc-last")+"'><th class='fc-leftmost "+fa+"-state-default'>&nbsp;</th>";for(ba=0;ba<c;ba++){qa+="<th class='fc-"+Ca[y.getDay()]+" "+fa+"-state-default'>"+P(y,S)+"</th>";T(y,ea);W&&ta(y,ea)}qa+="<th class='"+fa+"-state-default'>&nbsp;</th></tr>";if(U("allDaySlot"))qa+="<tr class='fc-all-day'><th class='fc-axis fc-leftmost "+fa+"-state-default'>"+
U("allDayText")+"</th><td colspan='"+c+"' class='"+fa+"-state-default'><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></td><th class='"+fa+"-state-default'>&nbsp;</th></tr><tr class='fc-divider fc-last'><th colspan='"+(c+2)+"' class='"+fa+"-state-default fc-leftmost'><div/></th></tr>";qa+="</table></div>";v=l(qa).appendTo(a);z(v.find("td"));ub=l("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(v);y=vb();var cb=ra(C(y),Ba);ra(y,Aa);qa="<table>";for(ba=
0;y<cb;ba++){ua=y.getMinutes();qa+="<tr class='"+(!ba?"fc-first":!ua?"":"fc-minor")+"'><th class='fc-axis fc-leftmost "+fa+"-state-default'>"+(!Da||!ua?P(y,U("axisFormat")):"&nbsp;")+"</th><td class='fc-slot"+ba+" "+fa+"-state-default'><div style='position:relative'>&nbsp;</div></td></tr>";ra(y,U("slotMinutes"));p++}qa+="</table>";j=l("<div class='fc-agenda-body' style='position:relative;z-index:2;overflow:auto'/>").append(i=l("<div style='position:relative;overflow:hidden'>").append(E=l(qa))).appendTo(a);
N(j.find("td"));wb=l("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(i);y=C(n);qa="<div class='fc-agenda-bg' style='position:absolute;z-index:1'><table style='width:100%;height:100%'><tr class='fc-first'>";for(ba=0;ba<c;ba++){qa+="<td class='fc-"+Ca[y.getDay()]+" "+fa+"-state-default "+(!ba?"fc-leftmost ":"")+(+y==+M?fa+"-state-highlight fc-today":"fc-not-today")+"'><div class='fc-day-content'><div>&nbsp;</div></div></td>";T(y,ea);W&&ta(y,ea)}qa+="</tr></table></div>";k=l(qa).appendTo(a)}}
function g(n,y){if(n===ga)n=B;B=n;db={};n=n-v.height();n=Math.min(n,E.height());j.height(n);$=j.find("tr:first div").height()+1;y&&m()}function h(n){q=n;Qa.clear();j.width(n).css("overflow","auto");E.width("");var y=v.find("tr:first th"),M=v.find("tr.fc-all-day th:last"),S=k.find("td"),ba=j[0].clientWidth;E.width(ba);ba=j[0].clientWidth;E.width(ba);u=0;Ia(v.find("tr:lt(2) th:first").add(j.find("tr:first th")).width(1).each(function(){u=Math.max(u,l(this).outerWidth())}),u);V=Math.floor((ba-u)/c);
Ia(S.slice(0,-1),V);Ia(y.slice(1,-2),V);if(n!=ba){Ia(y.slice(-2,-1),ba-u-V*(c-1));y.slice(-1).show();M.show()}else{j.css("overflow","hidden");y.slice(-2,-1).width("");y.slice(-1).hide();M.hide()}k.css({top:v.find("tr").height(),left:u,width:ba-u,height:B})}function m(){var n=vb(),y=C(n);y.setHours(U("firstHour"));var M=oa(n,y)+1;n=function(){j.scrollTop(M)};n();setTimeout(n,0)}function o(){J=j.scrollTop()}function t(){j.scrollTop(J)}function z(n){n.click(O).mousedown(D)}function N(n){n.click(O).mousedown(R)}
function O(n){if(!U("selectable")){var y=Math.min(c-1,Math.floor((n.pageX-k.offset().left)/V));y=T(C(G.visStart),y*ea+pa);var M=this.className.match(/fc-slot(\d+)/);if(M){M=parseInt(M[1])*U("slotMinutes");var S=Math.floor(M/60);y.setHours(S);y.setMinutes(M%60+Aa);va("dayClick",this,y,false,n)}else va("dayClick",this,y,true,n)}}function r(n,y,M){M&&wa.build();var S=C(G.visStart);if(sa){M=za(y,S)*ea+pa+1;n=za(n,S)*ea+pa+1}else{M=za(n,S);n=za(y,S)}M=Math.max(0,M);n=Math.min(c,n);M<n&&z(s(0,M,0,n-1))}
function s(n,y,M,S){n=wa.rect(n,y,M,S,v);return w(n,v)}function Z(n,y){for(var M=C(G.visStart),S=T(C(M),1),ba=0;ba<c;ba++){var ua=new Date(Math.max(M,n)),Da=new Date(Math.min(S,y));if(ua<Da){var qa=ba*ea+pa;qa=wa.rect(0,qa,0,qa,i);ua=oa(M,ua);Da=oa(M,Da);qa.top=ua;qa.height=Da-ua;N(w(qa,i))}T(M,1);T(S,1)}}function ha(n){return u+Qa.left(n)}function da(n){return u+Qa.right(n)}function X(n){return(n-Math.max(na,W)+c)%c*ea+pa}function la(n){return{row:Math.floor(za(n,G.visStart)/7),col:X(n.getDay())}}
function oa(n,y){n=C(n,true);if(y<ra(C(n),Aa))return 0;if(y>=ra(C(n),Ba))return i.height();n=U("slotMinutes");y=y.getHours()*60+y.getMinutes()-Aa;var M=Math.floor(y/n),S=db[M];if(S===ga)S=db[M]=j.find("tr:eq("+M+") td div")[0].offsetTop;return Math.max(0,Math.round(S-1+$*(y%n/n)))}function aa(n){var y=T(C(G.visStart),n.col*ea+pa);n=n.row;U("allDaySlot")&&n--;n>=0&&ra(y,Aa+n*U("slotMinutes"));return y}function ja(n){return U("allDaySlot")&&!n.row}function ca(){return{left:u,right:q}}function A(){return v.find("tr.fc-all-day")}
function ia(n){var y=C(n.start);if(n.allDay)return y;return ra(y,U("defaultEventMinutes"))}function x(n,y){if(y)return C(n);return ra(C(n),U("slotMinutes"))}function d(n,y,M){if(M)U("allDaySlot")&&r(n,T(C(y),1),true);else F(n,y)}function F(n,y){var M=U("selectHelper");wa.build();if(M){var S=za(n,G.visStart)*ea+pa;if(S>=0&&S<c){S=wa.rect(0,S,0,S,i);var ba=oa(n,n),ua=oa(n,y);if(ua>ba){S.top=ba;S.height=ua-ba;S.left+=2;S.width-=5;if(l.isFunction(M)){if(n=M(n,y)){S.position="absolute";S.zIndex=8;ya=l(n).css(S).appendTo(i)}}else{ya=
l(I({title:"",start:n,end:y,className:[],editable:false},S,"fc-event fc-event-vert fc-corner-top fc-corner-bottom "));l.browser.msie&&ya.find("span.fc-event-bg").hide();ya.css("opacity",U("dragOpacity"))}if(ya){N(ya);i.append(ya);Ia(ya,S.width,true);Pa(ya,S.height,true)}}}}else Z(n,y)}function H(){K();if(ya){ya.remove();ya=null}}function R(n){if(n.which==1&&U("selectable")){L(n);var y=this,M;Ka.start(function(S,ba){H();if(S&&S.col==ba.col&&!ja(S)){ba=aa(ba);S=aa(S);M=[ba,ra(C(ba),U("slotMinutes")),
S,ra(C(S),U("slotMinutes"))].sort(eb);F(M[0],M[3])}else M=null},n);l(document).one("mouseup",function(S){Ka.stop();if(M){+M[0]==+M[1]&&va("dayClick",y,M[0],false,S);Q(M[0],M[3],false,S)}})}}function ma(n,y){Ka.start(function(M){K();if(M)if(ja(M))s(M.row,M.col,M.row,M.col);else{M=aa(M);var S=ra(C(M),U("defaultEventMinutes"));Z(M,S)}},y)}function ka(n,y,M){var S=Ka.stop();K();S&&va("drop",n,aa(S),ja(S),y,M)}var G=this;G.renderAgenda=e;G.setWidth=h;G.setHeight=g;G.beforeHide=o;G.afterShow=t;G.defaultEventEnd=
ia;G.timePosition=oa;G.dayOfWeekCol=X;G.dateCell=la;G.cellDate=aa;G.cellIsAllDay=ja;G.allDayTR=A;G.allDayBounds=ca;G.getHoverListener=function(){return Ka};G.colContentLeft=ha;G.colContentRight=da;G.getDaySegmentContainer=function(){return ub};G.getSlotSegmentContainer=function(){return wb};G.getMinMinute=function(){return Aa};G.getMaxMinute=function(){return Ba};G.getBodyContent=function(){return i};G.getRowCnt=function(){return 1};G.getColCnt=function(){return c};G.getColWidth=function(){return V};
G.getSlotHeight=function(){return $};G.defaultSelectionEnd=x;G.renderDayOverlay=r;G.renderSelection=d;G.clearSelection=H;G.dragStart=ma;G.dragStop=ka;lb.call(G,a,b,f);mb.call(G);nb.call(G);Nb.call(G);var U=G.opt,va=G.trigger,Y=G.clearEvents,w=G.renderOverlay,K=G.clearOverlays,Q=G.reportSelection,L=G.unselect,D=G.daySelectionMousedown,I=G.slotSegHtml,P=b.formatDate,v,j,i,E,k,c,p=0,u,V,$,q,B,J,fa,na,W,sa,ea,pa,Aa,Ba,wa,Ka,Qa,db={},ya,ub,wb;ob(a.addClass("fc-agenda"));wa=new pb(function(n,y){function M(xa){return Math.max(qa,
Math.min(cb,xa))}var S,ba,ua;k.find("td").each(function(xa,Ob){S=l(Ob);ba=S.offset().left;if(xa)ua[1]=ba;ua=[ba];y[xa]=ua});ua[1]=ba+S.outerWidth();if(U("allDaySlot")){S=v.find("td");ba=S.offset().top;n[0]=[ba,ba+S.outerHeight()]}for(var Da=i.offset().top,qa=j.offset().top,cb=qa+j.outerHeight(),Ja=0;Ja<p;Ja++)n.push([M(Da+$*Ja),M(Da+$*(Ja+1))])});Ka=new qb(wa);Qa=new rb(function(n){return k.find("td:eq("+n+") div div")})}function Nb(){function a(j,i){da(j);var E,k=j.length,c=[],p=[];for(E=0;E<k;E++)j[E].allDay?
c.push(j[E]):p.push(j[E]);if(s("allDaySlot")){H(f(c),i);oa()}h(e(p),i)}function b(){X();aa().empty();ja().empty()}function f(j){j=$a(ab(j,l.map(j,Na),r.visStart,r.visEnd));var i,E=j.length,k,c,p,u=[];for(i=0;i<E;i++){k=j[i];for(c=0;c<k.length;c++){p=k[c];p.row=0;p.level=i;u.push(p)}}return u}function e(j){var i=ma(),E=ia(),k=A(),c=ra(C(r.visStart),E),p=l.map(j,g),u,V,$,q,B,J,fa=[];for(u=0;u<i;u++){V=$a(ab(j,p,c,ra(C(c),k-E)));Pb(V);for($=0;$<V.length;$++){q=V[$];for(B=0;B<q.length;B++){J=q[B];J.col=
u;J.level=$;fa.push(J)}}T(c,1,true)}return fa}function g(j){return j.end?C(j.end):ra(C(j.start),s("defaultEventMinutes"))}function h(j,i){var E,k=j.length,c,p,u,V,$,q,B,J,fa,na,W="",sa,ea,pa={},Aa={},Ba=ja(),wa;E=ma();if(sa=s("isRTL")){ea=-1;wa=E-1}else{ea=1;wa=0}for(E=0;E<k;E++){c=j[E];p=c.event;u="fc-event fc-event-vert ";if(c.isStart)u+="fc-corner-top ";if(c.isEnd)u+="fc-corner-bottom ";V=x(c.start,c.start);$=x(c.start,c.end);q=c.col;B=c.level;J=c.forward||0;fa=d(q*ea+wa);na=F(q*ea+wa)-fa;na=Math.min(na-
6,na*0.95);q=B?na/(B+J+1):J?(na/(J+1)-6)*2:na;B=fa+na/(B+J+1)*B*ea+(sa?na-q:0);c.top=V;c.left=B;c.outerWidth=q;c.outerHeight=$-V;W+=m(p,c,u)}Ba[0].innerHTML=W;sa=Ba.children();for(E=0;E<k;E++){c=j[E];p=c.event;W=l(sa[E]);ea=Z("eventRender",p,p,W);if(ea===false)W.remove();else{if(ea&&ea!==true){W.remove();W=l(ea).css({position:"absolute",top:c.top,left:c.left}).appendTo(Ba)}c.element=W;if(p._id===i)t(p,W,c);else W[0]._fci=E;va(p,W)}}xb(Ba,j,t);for(E=0;E<k;E++){c=j[E];if(W=c.element){p=pa[i=c.key=yb(W[0])];
c.vsides=p===ga?(pa[i]=Sa(W[0],true)):p;p=Aa[i];c.hsides=p===ga?(Aa[i]=fb(W[0],true)):p;i=W.find("span.fc-event-title");if(i.length)c.titleTop=i[0].offsetTop}}for(E=0;E<k;E++){c=j[E];if(W=c.element){W[0].style.width=Math.max(0,c.outerWidth-c.hsides)+"px";pa=Math.max(0,c.outerHeight-c.vsides);W[0].style.height=pa+"px";p=c.event;if(c.titleTop!==ga&&pa-c.titleTop<10){W.find("span.fc-event-time").text(P(p.start,s("timeFormat"))+" - "+p.title);W.find("span.fc-event-title").remove()}Z("eventAfterRender",
p,p,W)}}}function m(j,i,E){return"<div class='"+E+j.className.join(" ")+"' style='position:absolute;z-index:8;top:"+i.top+"px;left:"+i.left+"px'><a"+(j.url?" href='"+La(j.url)+"'":"")+"><span class='fc-event-bg'></span><span class='fc-event-time'>"+La(v(j.start,j.end,s("timeFormat")))+"</span><span class='fc-event-title'>"+La(j.title)+"</span></a>"+((j.editable||j.editable===ga&&s("editable"))&&!s("disableResizing")&&l.fn.resizable?"<div class='ui-resizable-handle ui-resizable-s'>=</div>":"")+"</div>"}
function o(j,i,E){la(j,i);if(j.editable||j.editable===ga&&s("editable")){z(j,i,E.isStart);E.isEnd&&R(j,i,E)}}function t(j,i,E){la(j,i);if(j.editable||j.editable===ga&&s("editable")){var k=i.find("span.fc-event-time");N(j,i,k);E.isEnd&&O(j,i,k)}}function z(j,i,E){if(!s("disableDragging")&&i.draggable){var k,c=true,p,u=s("isRTL")?-1:1,V=ca(),$=ka(),q=G(),B=ia();i.draggable({zIndex:9,opacity:s("dragOpacity","month"),revertDuration:s("dragRevertDuration"),start:function(fa,na){Z("eventDragStart",i,j,
fa,na);w(j,i);k=i.width();V.start(function(W,sa,ea,pa){i.draggable("option","revert",!W||!ea&&!pa);D();if(W){p=pa*u;if(W.row){if(E&&c){Pa(i.width($-10),q*Math.round((j.end?(j.end-j.start)/Qb:s("defaultEventMinutes"))/s("slotMinutes")));i.draggable("option","grid",[$,1]);c=false}}else{L(T(C(j.start),p),T(Na(j),p));J()}}},fa,"drag")},stop:function(fa,na){var W=V.stop();D();Z("eventDragStop",i,j,fa,na);if(W&&(!c||p)){i.find("a").removeAttr("href");W=0;c||(W=Math.round((i.offset().top-U().offset().top)/
q)*s("slotMinutes")+B-(j.start.getHours()*60+j.start.getMinutes()));K(this,j,p,W,c,fa,na)}else{J();l.browser.msie&&i.css("filter","");Y(j,i)}}});function J(){if(!c){i.width(k).height("").draggable("option","grid",null);c=true}}}}function N(j,i,E){if(!s("disableDragging")&&i.draggable){var k,c=false,p,u,V,$=s("isRTL")?-1:1,q=ca(),B=ma(),J=ka(),fa=G();i.draggable({zIndex:9,scroll:false,grid:[J,fa],axis:B==1?"y":false,opacity:s("dragOpacity"),revertDuration:s("dragRevertDuration"),start:function(sa,
ea){Z("eventDragStart",i,j,sa,ea);w(j,i);l.browser.msie&&i.find("span.fc-event-bg").hide();k=i.position();u=V=0;q.start(function(pa,Aa,Ba,wa){i.draggable("option","revert",!pa);D();if(pa){p=wa*$;if(s("allDaySlot")&&!pa.row){if(!c){c=true;E.hide();i.draggable("option","grid",null)}L(T(C(j.start),p),T(Na(j),p))}else W()}},sa,"drag")},drag:function(sa,ea){u=Math.round((ea.position.top-k.top)/fa)*s("slotMinutes");if(u!=V){c||na(u);V=u}},stop:function(sa,ea){var pa=q.stop();D();Z("eventDragStop",i,j,sa,
ea);if(pa&&(p||u||c))K(this,j,p,c?0:u,c,sa,ea);else{W();i.css(k);na(0);l.browser.msie&&i.css("filter","").find("span.fc-event-bg").css("display","");Y(j,i)}}});function na(sa){var ea=ra(C(j.start),sa),pa;if(j.end)pa=ra(C(j.end),sa);E.text(v(ea,pa,s("timeFormat")))}function W(){if(c){E.css("display","");i.draggable("option","grid",[J,fa]);c=false}}}}function O(j,i,E){if(!s("disableResizing")&&i.resizable){var k,c,p=G();i.resizable({handles:{s:"div.ui-resizable-s"},grid:p,start:function(u,V){k=c=0;
w(j,i);l.browser.msie&&l.browser.version=="6.0"&&i.css("overflow","hidden");i.css("z-index",9);Z("eventResizeStart",this,j,u,V)},resize:function(u,V){k=Math.round((Math.max(p,i.height())-V.originalSize.height)/p);if(k!=c){E.text(v(j.start,!k&&!j.end?null:ra(ha(j),s("slotMinutes")*k),s("timeFormat")));c=k}},stop:function(u,V){Z("eventResizeStop",this,j,u,V);if(k)Q(this,j,0,s("slotMinutes")*k,u,V);else{i.css("z-index",8);Y(j,i)}}})}}var r=this;r.renderEvents=a;r.compileDaySegs=f;r.clearEvents=b;r.slotSegHtml=
m;r.bindDaySeg=o;sb.call(r);var s=r.opt,Z=r.trigger,ha=r.eventEnd,da=r.reportEvents,X=r.reportEventClear,la=r.eventElementHandlers,oa=r.setHeight,aa=r.getDaySegmentContainer,ja=r.getSlotSegmentContainer,ca=r.getHoverListener,A=r.getMaxMinute,ia=r.getMinMinute,x=r.timePosition,d=r.colContentLeft,F=r.colContentRight,H=r.renderDaySegs,R=r.resizableDayEvent,ma=r.getColCnt,ka=r.getColWidth,G=r.getSlotHeight,U=r.getBodyContent,va=r.reportEventElement,Y=r.showEvents,w=r.hideEvents,K=r.eventDrop,Q=r.eventResize,
L=r.renderDayOverlay,D=r.clearOverlays,I=r.calendar,P=I.formatDate,v=I.formatDates}function Pb(a){var b,f,e,g,h,m;for(b=a.length-1;b>0;b--){g=a[b];for(f=0;f<g.length;f++){h=g[f];for(e=0;e<a[b-1].length;e++){m=a[b-1][e];if(zb(h,m))m.forward=Math.max(m.forward||0,(h.forward||0)+1)}}}}function lb(a,b,f){function e(x,d){x=ia[x];if(typeof x=="object")return Wa(x,d||f);return x}function g(x,d){return b.trigger.apply(b,[x,d||X].concat(Array.prototype.slice.call(arguments,2),[X]))}function h(x){ja={};var d,
F=x.length,H;for(d=0;d<F;d++){H=x[d];if(ja[H._id])ja[H._id].push(H);else ja[H._id]=[H]}}function m(x){return x.end?C(x.end):la(x)}function o(x,d){ca.push(d);if(A[x._id])A[x._id].push(d);else A[x._id]=[d]}function t(){ca=[];A={}}function z(x,d){d.click(function(F){if(!d.hasClass("ui-draggable-dragging")&&!d.hasClass("ui-resizable-resizing"))return g("eventClick",this,x,F)}).hover(function(F){g("eventMouseover",this,x,F)},function(F){g("eventMouseout",this,x,F)})}function N(x,d){r(x,d,"show")}function O(x,
d){r(x,d,"hide")}function r(x,d,F){x=A[x._id];var H,R=x.length;for(H=0;H<R;H++)if(!d||x[H][0]!=d[0])x[H][F]()}function s(x,d,F,H,R,ma,ka){var G=d.allDay,U=d._id;ha(ja[U],F,H,R);g("eventDrop",x,d,F,H,R,function(){ha(ja[U],-F,-H,G);aa(U)},ma,ka);aa(U)}function Z(x,d,F,H,R,ma){var ka=d._id;da(ja[ka],F,H);g("eventResize",x,d,F,H,function(){da(ja[ka],-F,-H);aa(ka)},R,ma);aa(ka)}function ha(x,d,F,H){F=F||0;for(var R,ma=x.length,ka=0;ka<ma;ka++){R=x[ka];if(H!==ga)R.allDay=H;ra(T(R.start,d,true),F);if(R.end)R.end=
ra(T(R.end,d,true),F);oa(R,ia)}}function da(x,d,F){F=F||0;for(var H,R=x.length,ma=0;ma<R;ma++){H=x[ma];H.end=ra(T(m(H),d,true),F);oa(H,ia)}}var X=this;X.element=a;X.calendar=b;X.name=f;X.opt=e;X.trigger=g;X.reportEvents=h;X.eventEnd=m;X.reportEventElement=o;X.reportEventClear=t;X.eventElementHandlers=z;X.showEvents=N;X.hideEvents=O;X.eventDrop=s;X.eventResize=Z;var la=X.defaultEventEnd,oa=b.normalizeEvent,aa=b.reportEventChange,ja={},ca=[],A={},ia=b.options}function sb(){function a(w,K){var Q=ma(),
L=ja(),D=ca(),I=0,P,v,j=w.length,i,E;Q[0].innerHTML=f(w);e(w,Q.children());g(w);h(w,Q,K);m(w);o(w);t(w);K=z();for(Q=0;Q<L;Q++){P=[];for(v=0;v<D;v++)P[v]=0;for(;I<j&&(i=w[I]).row==Q;){v=Ab(P.slice(i.startCol,i.endCol));i.top=v;v+=i.outerHeight;for(E=i.startCol;E<i.endCol;E++)P[E]=v;I++}K[Q].height(Ab(P))}O(w,N(K))}function b(w,K,Q){var L=l("<div/>"),D=ma(),I=w.length,P;L[0].innerHTML=f(w);L=L.children();D.append(L);e(w,L);m(w);o(w);t(w);O(w,N(z()));L=[];for(D=0;D<I;D++)if(P=w[D].element){w[D].row===
K&&P.css("top",Q);L.push(P[0])}return l(L)}function f(w){var K=Z("isRTL"),Q,L=w.length,D,I,P;Q=ia();var v=Q.left,j=Q.right,i=[],E,k,c="";for(Q=0;Q<L;Q++){D=w[Q];I=D.event;P="fc-event fc-event-hori ";if(K){if(D.isStart)P+="fc-corner-right ";if(D.isEnd)P+="fc-corner-left ";i[0]=F(D.end.getDay()-1);i[1]=F(D.start.getDay());E=D.isEnd?x(i[0]):v;k=D.isStart?d(i[1]):j}else{if(D.isStart)P+="fc-corner-left ";if(D.isEnd)P+="fc-corner-right ";i[0]=F(D.start.getDay());i[1]=F(D.end.getDay()-1);E=D.isStart?x(i[0]):
v;k=D.isEnd?d(i[1]):j}c+="<div class='"+P+I.className.join(" ")+"' style='position:absolute;z-index:8;left:"+E+"px'><a"+(I.url?" href='"+La(I.url)+"'":"")+">"+(!I.allDay&&D.isStart?"<span class='fc-event-time'>"+La(G(I.start,I.end,Z("timeFormat")))+"</span>":"")+"<span class='fc-event-title'>"+La(I.title)+"</span></a>"+(D.isEnd&&(I.editable||I.editable===ga&&Z("editable"))&&!Z("disableResizing")?"<div class='ui-resizable-handle ui-resizable-"+(K?"w":"e")+"'></div>":"")+"</div>";D.left=E;D.outerWidth=
k-E;i.sort(eb);D.startCol=i[0];D.endCol=i[1]+1}return c}function e(w,K){var Q,L=w.length,D,I,P;for(Q=0;Q<L;Q++){D=w[Q];I=D.event;P=l(K[Q]);I=ha("eventRender",I,I,P);if(I===false)P.remove();else{if(I&&I!==true){I=l(I).css({position:"absolute",left:D.left});P.replaceWith(I);P=I}D.element=P}}}function g(w){var K,Q=w.length,L,D;for(K=0;K<Q;K++){L=w[K];(D=L.element)&&X(L.event,D)}}function h(w,K,Q){var L,D=w.length,I,P,v;for(L=0;L<D;L++){I=w[L];if(P=I.element){v=I.event;if(v._id===Q)ka(v,P,I);else P[0]._fci=
L}}xb(K,w,ka)}function m(w){var K,Q=w.length,L,D,I,P,v={};for(K=0;K<Q;K++){L=w[K];if(D=L.element){I=L.key=yb(D[0]);P=v[I];if(P===ga)P=v[I]=fb(D[0],true);L.hsides=P}}}function o(w){var K,Q=w.length,L,D;for(K=0;K<Q;K++){L=w[K];if(D=L.element)D[0].style.width=Math.max(0,L.outerWidth-L.hsides)+"px"}}function t(w){var K,Q=w.length,L,D,I,P,v={};for(K=0;K<Q;K++){L=w[K];if(D=L.element){I=L.key;P=v[I];if(P===ga)P=v[I]=Bb(D[0]);L.outerHeight=D[0].offsetHeight+P}}}function z(){var w,K=ja(),Q=[];for(w=0;w<K;w++)Q[w]=
A(w).find("td:first div.fc-day-content > div");return Q}function N(w){var K,Q=w.length,L=[];for(K=0;K<Q;K++)L[K]=w[K][0].offsetTop;return L}function O(w,K){var Q,L=w.length,D,I;for(Q=0;Q<L;Q++){D=w[Q];if(I=D.element){I[0].style.top=K[D.row]+(D.top||0)+"px";D=D.event;ha("eventAfterRender",D,D,I)}}}function r(w,K,Q){if(!Z("disableResizing")&&Q.isEnd){var L=Z("isRTL"),D=L?"w":"e";K.find("div.ui-resizable-"+D).mousedown(function(I){function P(q){ha("eventResizeStop",this,w,q);l("body").css("cursor","auto");
v.stop();va();p&&aa(this,w,p,0,q)}if(I.which==1){var v=s.getHoverListener(),j=ja(),i=ca(),E=L?-1:1,k=L?i:0,c=K.css("top"),p,u,V=l.extend({},w),$=H(w.start);Y();l("body").css("cursor",D+"-resize").one("mouseup",P);ha("eventResizeStart",this,w,I);v.start(function(q,B){if(q){var J=Math.max($.row,q.row);q=q.col;if(j==1)J=0;if(J==$.row)q=L?Math.min($.col,q):Math.max($.col,q);p=J*i+q*E+k-(B.row*i+B.col*E+k);B=T(da(w),p,true);if(p){V.end=B;J=u;u=b(R([V]),Q.row,c);u.find("*").css("cursor",D+"-resize");J&&
J.remove();oa(w)}else if(u){la(w);u.remove();u=null}va();U(w.start,T(C(B),1))}},I)}})}}var s=this;s.renderDaySegs=a;s.resizableDayEvent=r;var Z=s.opt,ha=s.trigger,da=s.eventEnd,X=s.reportEventElement,la=s.showEvents,oa=s.hideEvents,aa=s.eventResize,ja=s.getRowCnt,ca=s.getColCnt,A=s.allDayTR,ia=s.allDayBounds,x=s.colContentLeft,d=s.colContentRight,F=s.dayOfWeekCol,H=s.dateCell,R=s.compileDaySegs,ma=s.getDaySegmentContainer,ka=s.bindDaySeg,G=s.calendar.formatDates,U=s.renderDayOverlay,va=s.clearOverlays,
Y=s.clearSelection}function nb(){function a(O,r,s){b();r||(r=o(O,s));t(O,r,s);f(O,r,s)}function b(O){if(N){N=false;z();m("unselect",null,O)}}function f(O,r,s,Z){N=true;m("select",null,O,r,s,Z)}function e(O){var r=g.cellDate,s=g.cellIsAllDay,Z=g.getHoverListener();if(O.which==1&&h("selectable")){b(O);var ha=this,da;Z.start(function(X,la){z();if(X&&s(X)){da=[r(la),r(X)].sort(eb);t(da[0],da[1],true)}else da=null},O);l(document).one("mouseup",function(X){Z.stop();if(da){+da[0]==+da[1]&&m("dayClick",ha,
da[0],true,X);f(da[0],da[1],true,X)}})}}var g=this;g.select=a;g.unselect=b;g.reportSelection=f;g.daySelectionMousedown=e;var h=g.opt,m=g.trigger,o=g.defaultSelectionEnd,t=g.renderSelection,z=g.clearSelection,N=false;h("selectable")&&h("unselectAuto")&&l(document).mousedown(function(O){var r=h("unselectCancel");if(r)if(l(O.target).parents(r).length)return;b(O)})}function mb(){function a(h,m){var o=g.shift();o||(o=l("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>"));o[0].parentNode!=
m[0]&&o.appendTo(m);e.push(o.css(h).show());return o}function b(){for(var h;h=e.shift();)g.push(h.hide().unbind())}var f=this;f.renderOverlay=a;f.clearOverlays=b;var e=[],g=[]}function pb(a){var b=this,f,e;b.build=function(){f=[];e=[];a(f,e)};b.cell=function(g,h){var m=f.length,o=e.length,t,z=-1,N=-1;for(t=0;t<m;t++)if(h>=f[t][0]&&h<f[t][1]){z=t;break}for(t=0;t<o;t++)if(g>=e[t][0]&&g<e[t][1]){N=t;break}return z>=0&&N>=0?{row:z,col:N}:null};b.rect=function(g,h,m,o,t){t=t.offset();return{top:f[g][0]-
t.top,left:e[h][0]-t.left,width:e[o][1]-e[h][0],height:f[m][1]-f[g][0]}}}function qb(a){function b(o){o=a.cell(o.pageX,o.pageY);if(!o!=!m||o&&(o.row!=m.row||o.col!=m.col)){if(o){h||(h=o);g(o,h,o.row-h.row,o.col-h.col)}else g(o,h);m=o}}var f=this,e,g,h,m;f.start=function(o,t,z){g=o;h=m=null;a.build();b(t);e=z||"mousemove";l(document).bind(e,b)};f.stop=function(){l(document).unbind(e,b);return m}}function rb(a){function b(m){return e[m]=e[m]||a(m)}var f=this,e={},g={},h={};f.left=function(m){return g[m]=
g[m]===ga?b(m).position().left:g[m]};f.right=function(m){return h[m]=h[m]===ga?f.left(m)+b(m).width():h[m]};f.clear=function(){e={};g={};h={}}}function Ta(a,b,f){a.setFullYear(a.getFullYear()+b);f||Ga(a);return a}function Ua(a,b,f){if(+a){b=a.getMonth()+b;var e=C(a);e.setDate(1);e.setMonth(b);a.setMonth(b);for(f||Ga(a);a.getMonth()!=e.getMonth();)a.setDate(a.getDate()+(a<e?1:-1))}return a}function T(a,b,f){if(+a){b=a.getDate()+b;var e=C(a);e.setHours(9);e.setDate(b);a.setDate(b);f||Ga(a);gb(a,e)}return a}
function gb(a,b){if(+a)for(;a.getDate()!=b.getDate();)a.setTime(+a+(a<b?1:-1)*Rb)}function ra(a,b){a.setMinutes(a.getMinutes()+b);return a}function Ga(a){a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);return a}function C(a,b){if(b)return Ga(new Date(+a));return new Date(+a)}function vb(){var a=0,b;do b=new Date(1970,a++,1);while(b.getHours());return b}function ta(a,b,f){for(b=b||1;!a.getDay()||f&&a.getDay()==1||!f&&a.getDay()==6;)T(a,b);return a}function za(a,b){return Math.round((C(a,
true)-C(b,true))/kb)}function jb(a,b,f,e){if(b!==ga&&b!=a.getFullYear()){a.setDate(1);a.setMonth(0);a.setFullYear(b)}if(f!==ga&&f!=a.getMonth()){a.setDate(1);a.setMonth(f)}e!==ga&&a.setDate(e)}function Xa(a,b){if(typeof a=="object")return a;if(typeof a=="number")return new Date(a*1E3);if(typeof a=="string"){if(a.match(/^\d+$/))return new Date(parseInt(a)*1E3);if(b===ga)b=true;return Cb(a,b)||(a?new Date(a):null)}return null}function Cb(a,b){a=a.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?$/);
if(!a)return null;var f=new Date(a[1],0,1);if(b||!a[14]){b=new Date(a[1],0,1,9,0);if(a[3]){f.setMonth(a[3]-1);b.setMonth(a[3]-1)}if(a[5]){f.setDate(a[5]);b.setDate(a[5])}gb(f,b);a[7]&&f.setHours(a[7]);a[8]&&f.setMinutes(a[8]);a[10]&&f.setSeconds(a[10]);a[12]&&f.setMilliseconds(Number("0."+a[12])*1E3);gb(f,b)}else{f.setUTCFullYear(a[1],a[3]?a[3]-1:0,a[5]||1);f.setUTCHours(a[7]||0,a[8]||0,a[10]||0,a[12]?Number("0."+a[12])*1E3:0);b=Number(a[16])*60+Number(a[17]);b*=a[15]=="-"?1:-1;f=new Date(+f+b*60*
1E3)}return f}function bb(a){if(typeof a=="number")return a*60;if(typeof a=="object")return a.getHours()*60+a.getMinutes();if(a=a.match(/(\d+)(?::(\d+))?\s*(\w+)?/)){var b=parseInt(a[1]);if(a[3]){b%=12;if(a[3].toLowerCase().charAt(0)=="p")b+=12}return b*60+(a[2]?parseInt(a[2]):0)}}function Ha(a,b,f){return Va(a,null,b,f)}function Va(a,b,f,e){e=e||Oa;var g=a,h=b,m,o=f.length,t,z,N,O="";for(m=0;m<o;m++){t=f.charAt(m);if(t=="'")for(z=m+1;z<o;z++){if(f.charAt(z)=="'"){if(g){O+=z==m+1?"'":f.substring(m+
1,z);m=z}break}}else if(t=="(")for(z=m+1;z<o;z++){if(f.charAt(z)==")"){m=Ha(g,f.substring(m+1,z),e);if(parseInt(m.replace(/\D/,"")))O+=m;m=z;break}}else if(t=="[")for(z=m+1;z<o;z++){if(f.charAt(z)=="]"){t=f.substring(m+1,z);m=Ha(g,t,e);if(m!=Ha(h,t,e))O+=m;m=z;break}}else if(t=="{"){g=b;h=a}else if(t=="}"){g=a;h=b}else{for(z=o;z>m;z--)if(N=Sb[f.substring(m,z)]){if(g)O+=N(g,e);m=z-1;break}if(z==m)if(g)O+=t}}return O}function Na(a){return a.end?Tb(a.end,a.allDay):T(C(a.start),1)}function Tb(a,b){a=
C(a);return b||a.getHours()||a.getMinutes()?T(a,1):Ga(a)}function Ub(a,b){return(b.msLength-a.msLength)*100+(a.event.start-b.event.start)}function zb(a,b){return a.end>b.start&&a.start<b.end}function ab(a,b,f,e){var g=[],h,m=a.length,o,t,z,N,O;for(h=0;h<m;h++){o=a[h];t=o.start;z=b[h];if(z>f&&t<e){if(t<f){t=C(f);N=false}else{t=t;N=true}if(z>e){z=C(e);O=false}else{z=z;O=true}g.push({event:o,start:t,end:z,isStart:N,isEnd:O,msLength:z-t})}}return g.sort(Ub)}function $a(a){var b=[],f,e=a.length,g,h,m,
o;for(f=0;f<e;f++){g=a[f];for(h=0;;){m=false;if(b[h])for(o=0;o<b[h].length;o++)if(zb(b[h][o],g)){m=true;break}if(m)h++;else break}if(b[h])b[h].push(g);else b[h]=[g]}return b}function xb(a,b,f){a.unbind("mouseover").mouseover(function(e){for(var g=e.target,h;g!=this;){h=g;g=g.parentNode}if((g=h._fci)!==ga){h._fci=ga;h=b[g];f(h.event,h.element,h);l(e.target).trigger(e)}e.stopPropagation()})}function Ia(a,b,f){a.each(function(e,g){g.style.width=Math.max(0,b-fb(g,f))+"px"})}function Pa(a,b,f){a.each(function(e,
g){g.style.height=Math.max(0,b-Sa(g,f))+"px"})}function fb(a,b){return(parseFloat(l.curCSS(a,"paddingLeft",true))||0)+(parseFloat(l.curCSS(a,"paddingRight",true))||0)+(parseFloat(l.curCSS(a,"borderLeftWidth",true))||0)+(parseFloat(l.curCSS(a,"borderRightWidth",true))||0)+(b?Vb(a):0)}function Vb(a){return(parseFloat(l.curCSS(a,"marginLeft",true))||0)+(parseFloat(l.curCSS(a,"marginRight",true))||0)}function Sa(a,b){return(parseFloat(l.curCSS(a,"paddingTop",true))||0)+(parseFloat(l.curCSS(a,"paddingBottom",
true))||0)+(parseFloat(l.curCSS(a,"borderTopWidth",true))||0)+(parseFloat(l.curCSS(a,"borderBottomWidth",true))||0)+(b?Bb(a):0)}function Bb(a){return(parseFloat(l.curCSS(a,"marginTop",true))||0)+(parseFloat(l.curCSS(a,"marginBottom",true))||0)}function Ra(a,b){b=typeof b=="number"?b+"px":b;a[0].style.cssText+=";min-height:"+b+";_height:"+b}function ib(){}function eb(a,b){return a-b}function Ab(a){return Math.max.apply(Math,a)}function Ma(a){return(a<10?"0":"")+a}function Wa(a,b){if(a[b]!==ga)return a[b];
b=b.split(/(?=[A-Z])/);for(var f=b.length-1,e;f>=0;f--){e=a[b[f].toLowerCase()];if(e!==ga)return e}return a[""]}function La(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function yb(a){return a.id+"/"+a.className+"/"+a.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig,"")}function ob(a){a.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})}
var Oa={defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:true,allDayDefault:true,ignoreTimezone:true,lazyFetching:true,startParam:"start",endParam:"end",titleFormat:{month:"MMMM yyyy",week:"MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",day:"dddd, MMM d, yyyy"},columnFormat:{month:"ddd",week:"ddd M/d",day:"dddd M/d"},timeFormat:{"":"h(:mm)t"},isRTL:false,firstDay:0,monthNames:["January","February","March","April","May","June","July","August","September",
"October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],buttonText:{prev:"&nbsp;&#9668;&nbsp;",next:"&nbsp;&#9658;&nbsp;",prevYear:"&nbsp;&lt;&lt;&nbsp;",nextYear:"&nbsp;&gt;&gt;&nbsp;",today:"today",month:"month",week:"week",day:"day"},theme:false,buttonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e"},
unselectAuto:true,dropAccept:"*"},Wb={header:{left:"next,prev today",center:"",right:"title"},buttonText:{prev:"&nbsp;&#9658;&nbsp;",next:"&nbsp;&#9668;&nbsp;",prevYear:"&nbsp;&gt;&gt;&nbsp;",nextYear:"&nbsp;&lt;&lt;&nbsp;"},buttonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w"}},Ea=l.fullCalendar={version:"1.4.9"},Fa=Ea.views={};l.fn.fullCalendar=function(a){if(typeof a=="string"){var b=Array.prototype.slice.call(arguments,1),f;this.each(function(){var g=l.data(this,"fullCalendar");if(g&&
l.isFunction(g[a])){g=g[a].apply(g,b);if(f===ga)f=g;a=="destroy"&&l.removeData(this,"fullCalendar")}});if(f!==ga)return f;return this}var e=a.eventSources||[];delete a.eventSources;if(a.events){e.push(a.events);delete a.events}a=l.extend(true,{},Oa,a.isRTL||a.isRTL===ga&&Oa.isRTL?Wb:{},a);this.each(function(g,h){g=l(h);h=new Db(g,a,e);g.data("fullCalendar",h);h.render()});return this};var Gb=1;Fa.month=Hb;Fa.basicWeek=Ib;Fa.basicDay=Jb;var Za;hb({weekMode:"fixed"});Fa.agendaWeek=Lb;Fa.agendaDay=Mb;
hb({allDaySlot:true,allDayText:"all-day",firstHour:6,slotMinutes:30,defaultEventMinutes:120,axisFormat:"h(:mm)tt",timeFormat:{agenda:"h:mm{ - h:mm}"},dragOpacity:{agenda:0.5},minTime:0,maxTime:24});Ea.addDays=T;Ea.cloneDate=C;Ea.parseDate=Xa;Ea.parseISO8601=Cb;Ea.parseTime=bb;Ea.formatDate=Ha;Ea.formatDates=Va;var Ca=["sun","mon","tue","wed","thu","fri","sat"],kb=864E5,Rb=36E5,Qb=6E4,Sb={s:function(a){return a.getSeconds()},ss:function(a){return Ma(a.getSeconds())},m:function(a){return a.getMinutes()},
mm:function(a){return Ma(a.getMinutes())},h:function(a){return a.getHours()%12||12},hh:function(a){return Ma(a.getHours()%12||12)},H:function(a){return a.getHours()},HH:function(a){return Ma(a.getHours())},d:function(a){return a.getDate()},dd:function(a){return Ma(a.getDate())},ddd:function(a,b){return b.dayNamesShort[a.getDay()]},dddd:function(a,b){return b.dayNames[a.getDay()]},M:function(a){return a.getMonth()+1},MM:function(a){return Ma(a.getMonth()+1)},MMM:function(a,b){return b.monthNamesShort[a.getMonth()]},
MMMM:function(a,b){return b.monthNames[a.getMonth()]},yy:function(a){return(a.getFullYear()+"").substring(2)},yyyy:function(a){return a.getFullYear()},t:function(a){return a.getHours()<12?"a":"p"},tt:function(a){return a.getHours()<12?"am":"pm"},T:function(a){return a.getHours()<12?"A":"P"},TT:function(a){return a.getHours()<12?"AM":"PM"},u:function(a){return Ha(a,"yyyy-MM-dd'T'HH:mm:ss'Z'")},S:function(a){a=a.getDate();if(a>10&&a<20)return"th";return["st","nd","rd"][a%10-1]||"th"}}})(jQuery);
;
/*
 * jQuery UI 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */(function(C){var I=C.fn.remove,D=C.browser.mozilla&&(parseFloat(C.browser.version)<1.9);C.ui={version:"1.6",plugin:{add:function(K,L,N){var M=C.ui[K].prototype;for(var J in N){M.plugins[J]=M.plugins[J]||[];M.plugins[J].push([L,N[J]])}},call:function(J,L,K){var N=J.plugins[L];if(!N){return }for(var M=0;M<N.length;M++){if(J.options[N[M][0]]){N[M][1].apply(J.element,K)}}}},contains:function(L,K){var J=C.browser.safari&&C.browser.version<522;if(L.contains&&!J){return L.contains(K)}if(L.compareDocumentPosition){return !!(L.compareDocumentPosition(K)&16)}while(K=K.parentNode){if(K==L){return true}}return false},cssCache:{},css:function(J){if(C.ui.cssCache[J]){return C.ui.cssCache[J]}var K=C('<div class="ui-gen">').addClass(J).css({position:"absolute",top:"-5000px",left:"-5000px",display:"block"}).appendTo("body");C.ui.cssCache[J]=!!((!(/auto|default/).test(K.css("cursor"))||(/^[1-9]/).test(K.css("height"))||(/^[1-9]/).test(K.css("width"))||!(/none/).test(K.css("backgroundImage"))||!(/transparent|rgba\(0, 0, 0, 0\)/).test(K.css("backgroundColor"))));try{C("body").get(0).removeChild(K.get(0))}catch(L){}return C.ui.cssCache[J]},hasScroll:function(M,K){if(C(M).css("overflow")=="hidden"){return false}var J=(K&&K=="left")?"scrollLeft":"scrollTop",L=false;if(M[J]>0){return true}M[J]=1;L=(M[J]>0);M[J]=0;return L},isOverAxis:function(K,J,L){return(K>J)&&(K<(J+L))},isOver:function(O,K,N,M,J,L){return C.ui.isOverAxis(O,N,J)&&C.ui.isOverAxis(K,M,L)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(D){var F=C.attr,E=C.fn.removeAttr,H="http://www.w3.org/2005/07/aaa",A=/^aria-/,B=/^wairole:/;C.attr=function(K,J,L){var M=L!==undefined;return(J=="role"?(M?F.call(this,K,J,"wairole:"+L):(F.apply(this,arguments)||"").replace(B,"")):(A.test(J)?(M?K.setAttributeNS(H,J.replace(A,"aaa:"),L):F.call(this,K,J.replace(A,"aaa:"))):F.apply(this,arguments)))};C.fn.removeAttr=function(J){return(A.test(J)?this.each(function(){this.removeAttributeNS(H,J.replace(A,""))}):E.call(this,J))}}C.fn.extend({remove:function(){C("*",this).add(this).each(function(){C(this).triggerHandler("remove")});return I.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var J;if((C.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){J=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(C.curCSS(this,"position",1))&&(/(auto|scroll)/).test(C.curCSS(this,"overflow",1)+C.curCSS(this,"overflow-y",1)+C.curCSS(this,"overflow-x",1))}).eq(0)}else{J=this.parents().filter(function(){return(/(auto|scroll)/).test(C.curCSS(this,"overflow",1)+C.curCSS(this,"overflow-y",1)+C.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!J.length?C(document):J}});C.extend(C.expr[":"],{data:function(K,L,J){return C.data(K,J[3])},tabbable:function(L,M,K){var N=L.nodeName.toLowerCase();function J(O){return !(C(O).is(":hidden")||C(O).parents(":hidden").length)}return(L.tabIndex>=0&&(("a"==N&&L.href)||(/input|select|textarea|button/.test(N)&&"hidden"!=L.type&&!L.disabled))&&J(L))}});function G(M,N,O,L){function K(Q){var P=C[M][N][Q]||[];return(typeof P=="string"?P.split(/,?\s+/):P)}var J=K("getter");if(L.length==1&&typeof L[0]=="string"){J=J.concat(K("getterSetter"))}return(C.inArray(O,J)!=-1)}C.widget=function(K,J){var L=K.split(".")[0];K=K.split(".")[1];C.fn[K]=function(P){var N=(typeof P=="string"),O=Array.prototype.slice.call(arguments,1);if(N&&P.substring(0,1)=="_"){return this}if(N&&G(L,K,P,O)){var M=C.data(this[0],K);return(M?M[P].apply(M,O):undefined)}return this.each(function(){var Q=C.data(this,K);(!Q&&!N&&C.data(this,K,new C[L][K](this,P)));(Q&&N&&C.isFunction(Q[P])&&Q[P].apply(Q,O))})};C[L]=C[L]||{};C[L][K]=function(O,N){var M=this;this.widgetName=K;this.widgetEventPrefix=C[L][K].eventPrefix||K;this.widgetBaseClass=L+"-"+K;this.options=C.extend({},C.widget.defaults,C[L][K].defaults,C.metadata&&C.metadata.get(O)[K],N);this.element=C(O).bind("setData."+K,function(Q,P,R){return M._setData(P,R)}).bind("getData."+K,function(Q,P){return M._getData(P)}).bind("remove",function(){return M.destroy()});this._init()};C[L][K].prototype=C.extend({},C.widget.prototype,J);C[L][K].getterSetter="option"};C.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName)},option:function(L,M){var K=L,J=this;if(typeof L=="string"){if(M===undefined){return this._getData(L)}K={};K[L]=M}C.each(K,function(N,O){J._setData(N,O)})},_getData:function(J){return this.options[J]},_setData:function(J,K){this.options[J]=K;if(J=="disabled"){this.element[K?"addClass":"removeClass"](this.widgetBaseClass+"-disabled")}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(K,L,M){var J=(K==this.widgetEventPrefix?K:this.widgetEventPrefix+K);L=L||C.event.fix({type:J,target:this.element[0]});return this.element.triggerHandler(J,[L,M],this.options[K])}};C.widget.defaults={disabled:false};C.ui.mouse={_mouseInit:function(){var J=this;this.element.bind("mousedown."+this.widgetName,function(K){return J._mouseDown(K)}).bind("click."+this.widgetName,function(K){if(J._preventClickEvent){J._preventClickEvent=false;return false}});if(C.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(C.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(L){(this._mouseStarted&&this._mouseUp(L));this._mouseDownEvent=L;var K=this,M=(L.which==1),J=(typeof this.options.cancel=="string"?C(L.target).parents().add(L.target).filter(this.options.cancel).length:false);if(!M||J||!this._mouseCapture(L)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){K.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(L)&&this._mouseDelayMet(L)){this._mouseStarted=(this._mouseStart(L)!==false);if(!this._mouseStarted){L.preventDefault();return true}}this._mouseMoveDelegate=function(N){return K._mouseMove(N)};this._mouseUpDelegate=function(N){return K._mouseUp(N)};C(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);if(!C.browser.safari){L.preventDefault()}return true},_mouseMove:function(J){if(C.browser.msie&&!J.button){return this._mouseUp(J)}if(this._mouseStarted){this._mouseDrag(J);return J.preventDefault()}if(this._mouseDistanceMet(J)&&this._mouseDelayMet(J)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,J)!==false);(this._mouseStarted?this._mouseDrag(J):this._mouseUp(J))}return !this._mouseStarted},_mouseUp:function(J){C(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=true;this._mouseStop(J)}return false},_mouseDistanceMet:function(J){return(Math.max(Math.abs(this._mouseDownEvent.pageX-J.pageX),Math.abs(this._mouseDownEvent.pageY-J.pageY))>=this.options.distance)},_mouseDelayMet:function(J){return this.mouseDelayMet},_mouseStart:function(J){},_mouseDrag:function(J){},_mouseStop:function(J){},_mouseCapture:function(J){return true}};C.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);
/*
 * jQuery UI Draggable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	ui.core.js
 */(function(A){A.widget("ui.draggable",A.extend({},A.ui.mouse,{_init:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.cssNamespace&&this.element.addClass(this.options.cssNamespace+"-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return }this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(B){var C=this.options;if(this.helper||C.disabled||A(B.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(B);if(!this.handle){return false}return true},_mouseStart:function(B){var C=this.options;this.helper=this._createHelper(B);this._cacheHelperProportions();if(A.ui.ddmanager){A.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};A.extend(this.offset,{click:{left:B.pageX-this.offset.left,top:B.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});if(C.cursorAt){this._adjustOffsetFromHelper(C.cursorAt)}this.originalPosition=this._generatePosition(B);if(C.containment){this._setContainment()}this._propagate("start",B);this._cacheHelperProportions();if(A.ui.ddmanager&&!C.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,B)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(B,true);return true},_mouseDrag:function(B,C){this.position=this._generatePosition(B);this.positionAbs=this._convertPositionTo("absolute");if(!C){this.position=this._propagate("drag",B)||this.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(A.ui.ddmanager){A.ui.ddmanager.drag(this,B)}return false},_mouseStop:function(C){var D=false;if(A.ui.ddmanager&&!this.options.dropBehaviour){var D=A.ui.ddmanager.drop(this,C)}if((this.options.revert=="invalid"&&!D)||(this.options.revert=="valid"&&D)||this.options.revert===true||(A.isFunction(this.options.revert)&&this.options.revert.call(this.element,D))){var B=this;A(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){B._propagate("stop",C);B._clear()})}else{this._propagate("stop",C);this._clear()}return false},_getHandle:function(B){var C=!this.options.handle||!A(this.options.handle,this.element).length?true:false;A(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==B.target){C=true}});return C},_createHelper:function(C){var D=this.options;var B=A.isFunction(D.helper)?A(D.helper.apply(this.element[0],[C])):(D.helper=="clone"?this.element.clone():this.element);if(!B.parents("body").length){B.appendTo((D.appendTo=="parent"?this.element[0].parentNode:D.appendTo))}if(B[0]!=this.element[0]&&!(/(fixed|absolute)/).test(B.css("position"))){B.css("position","absolute")}return B},_adjustOffsetFromHelper:function(B){if(B.left!=undefined){this.offset.click.left=B.left+this.margins.left}if(B.right!=undefined){this.offset.click.left=this.helperProportions.width-B.right+this.margins.left}if(B.top!=undefined){this.offset.click.top=B.top+this.margins.top}if(B.bottom!=undefined){this.offset.click.top=this.helperProportions.height-B.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var B=this.offsetParent.offset();if((this.offsetParent[0]==document.body&&A.browser.mozilla)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&A.browser.msie)){B={top:0,left:0}}return{top:B.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:B.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var B=this.element.position();return{top:B.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:B.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var E=this.options;if(E.containment=="parent"){E.containment=this.helper[0].parentNode}if(E.containment=="document"||E.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,A(E.containment=="document"?document:window).width()-this.offset.relative.left-this.offset.parent.left-this.helperProportions.width-this.margins.left-(parseInt(this.element.css("marginRight"),10)||0),(A(E.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.offset.relative.top-this.offset.parent.top-this.helperProportions.height-this.margins.top-(parseInt(this.element.css("marginBottom"),10)||0)]}if(!(/^(document|window|parent)$/).test(E.containment)){var C=A(E.containment)[0];var D=A(E.containment).offset();var B=(A(C).css("overflow")!="hidden");this.containment=[D.left+(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.margins.left,D.top+(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.margins.top,D.left+(B?Math.max(C.scrollWidth,C.offsetWidth):C.offsetWidth)-(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.helperProportions.width-this.margins.left,D.top+(B?Math.max(C.scrollHeight,C.offsetHeight):C.offsetHeight)-(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(D,F){if(!F){F=this.position}var C=D=="absolute"?1:-1;var B=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],E=(/(html|body)/i).test(B[0].tagName);return{top:(F.top+this.offset.relative.top*C+this.offset.parent.top*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(E?0:B.scrollTop()))*C+this.margins.top*C),left:(F.left+this.offset.relative.left*C+this.offset.parent.left*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():(E?0:B.scrollLeft()))*C+this.margins.left*C)}},_generatePosition:function(D){var G=this.options,C=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],H=(/(html|body)/i).test(C[0].tagName);var B={top:(D.pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(H?0:C.scrollTop()))),left:(D.pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():H?0:C.scrollLeft()))};if(!this.originalPosition){return B}if(this.containment){if(B.left<this.containment[0]){B.left=this.containment[0]}if(B.top<this.containment[1]){B.top=this.containment[1]}if(B.left>this.containment[2]){B.left=this.containment[2]}if(B.top>this.containment[3]){B.top=this.containment[3]}}if(G.grid){var F=this.originalPosition.top+Math.round((B.top-this.originalPosition.top)/G.grid[1])*G.grid[1];B.top=this.containment?(!(F<this.containment[1]||F>this.containment[3])?F:(!(F<this.containment[1])?F-G.grid[1]:F+G.grid[1])):F;var E=this.originalPosition.left+Math.round((B.left-this.originalPosition.left)/G.grid[0])*G.grid[0];B.left=this.containment?(!(E<this.containment[0]||E>this.containment[2])?E:(!(E<this.containment[0])?E-G.grid[0]:E+G.grid[0])):E}return B},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_propagate:function(C,B){A.ui.plugin.call(this,C,[B,this._uiHash()]);if(C=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return this.element.triggerHandler(C=="drag"?C:"drag"+C,[B,this._uiHash()],this.options[C])},plugins:{},_uiHash:function(B){return{helper:this.helper,position:this.position,absolutePosition:this.positionAbs,options:this.options}}}));A.extend(A.ui.draggable,{version:"1.6",defaults:{appendTo:"parent",axis:false,cancel:":input",connectToSortable:false,containment:false,cssNamespace:"ui",cursor:"default",cursorAt:null,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:1,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:null}});A.ui.plugin.add("draggable","connectToSortable",{start:function(B,D){var C=A(this).data("draggable");C.sortables=[];A(D.options.connectToSortable).each(function(){A(this+"").each(function(){if(A.data(this,"sortable")){var E=A.data(this,"sortable");C.sortables.push({instance:E,shouldRevert:E.options.revert});E._refreshItems();E._propagate("activate",B,C)}})})},stop:function(B,D){var C=A(this).data("draggable");A.each(C.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;C.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(B);this.instance.element.triggerHandler("sortreceive",[B,A.extend(this.instance._ui(),{sender:C.element})],this.instance.options["receive"]);this.instance.options.helper=this.instance.options._helper;if(C.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._propagate("deactivate",B,C)}})},drag:function(C,F){var E=A(this).data("draggable"),B=this;var D=function(I){var N=this.offset.click.top,M=this.offset.click.left;var G=this.positionAbs.top,K=this.positionAbs.left;var J=I.height,L=I.width;var O=I.top,H=I.left;return A.ui.isOver(G+N,K+M,O,H,J,L)};A.each(E.sortables,function(G){if(D.call(E,this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=A(B).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return F.helper[0]};C.target=this.instance.currentItem[0];this.instance._mouseCapture(C,true);this.instance._mouseStart(C,true,true);this.instance.offset.click.top=E.offset.click.top;this.instance.offset.click.left=E.offset.click.left;this.instance.offset.parent.left-=E.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=E.offset.parent.top-this.instance.offset.parent.top;E._propagate("toSortable",C)}if(this.instance.currentItem){this.instance._mouseDrag(C)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._mouseStop(C,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}E._propagate("fromSortable",C)}}})}});A.ui.plugin.add("draggable","cursor",{start:function(C,D){var B=A("body");if(B.css("cursor")){D.options._cursor=B.css("cursor")}B.css("cursor",D.options.cursor)},stop:function(B,C){if(C.options._cursor){A("body").css("cursor",C.options._cursor)}}});A.ui.plugin.add("draggable","iframeFix",{start:function(B,C){A(C.options.iframeFix===true?"iframe":C.options.iframeFix).each(function(){A('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(A(this).offset()).appendTo("body")})},stop:function(B,C){A("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});A.ui.plugin.add("draggable","opacity",{start:function(C,D){var B=A(D.helper);if(B.css("opacity")){D.options._opacity=B.css("opacity")}B.css("opacity",D.options.opacity)},stop:function(B,C){if(C.options._opacity){A(C.helper).css("opacity",C.options._opacity)}}});A.ui.plugin.add("draggable","scroll",{start:function(C,D){var E=D.options;var B=A(this).data("draggable");if(B.scrollParent[0]!=document&&B.scrollParent[0].tagName!="HTML"){B.overflowOffset=B.scrollParent.offset()}},drag:function(D,E){var F=E.options,B=false;var C=A(this).data("draggable");if(C.scrollParent[0]!=document&&C.scrollParent[0].tagName!="HTML"){if((C.overflowOffset.top+C.scrollParent[0].offsetHeight)-D.pageY<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop+F.scrollSpeed}else{if(D.pageY-C.overflowOffset.top<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop-F.scrollSpeed}}if((C.overflowOffset.left+C.scrollParent[0].offsetWidth)-D.pageX<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft+F.scrollSpeed}else{if(D.pageX-C.overflowOffset.left<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft-F.scrollSpeed}}}else{if(D.pageY-A(document).scrollTop()<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()-F.scrollSpeed)}else{if(A(window).height()-(D.pageY-A(document).scrollTop())<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()+F.scrollSpeed)}}if(D.pageX-A(document).scrollLeft()<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()-F.scrollSpeed)}else{if(A(window).width()-(D.pageX-A(document).scrollLeft())<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()+F.scrollSpeed)}}}if(B!==false&&A.ui.ddmanager&&!F.dropBehaviour){A.ui.ddmanager.prepareOffsets(C,D)}if(B!==false&&C.cssPosition=="absolute"&&C.scrollParent[0]!=document&&A.ui.contains(C.scrollParent[0],C.offsetParent[0])){C.offset.parent=C._getParentOffset()}if(B!==false&&C.cssPosition=="relative"&&!(C.scrollParent[0]!=document&&C.scrollParent[0]!=C.offsetParent[0])){C.offset.relative=C._getRelativeOffset()}}});A.ui.plugin.add("draggable","snap",{start:function(B,D){var C=A(this).data("draggable");C.snapElements=[];A(D.options.snap.constructor!=String?(D.options.snap.items||":data(draggable)"):D.options.snap).each(function(){var F=A(this);var E=F.offset();if(this!=C.element[0]){C.snapElements.push({item:this,width:F.outerWidth(),height:F.outerHeight(),top:E.top,left:E.left})}})},drag:function(M,K){var E=A(this).data("draggable");var Q=K.options.snapTolerance;var P=K.absolutePosition.left,O=P+E.helperProportions.width,D=K.absolutePosition.top,C=D+E.helperProportions.height;for(var N=E.snapElements.length-1;N>=0;N--){var L=E.snapElements[N].left,J=L+E.snapElements[N].width,I=E.snapElements[N].top,S=I+E.snapElements[N].height;if(!((L-Q<P&&P<J+Q&&I-Q<D&&D<S+Q)||(L-Q<P&&P<J+Q&&I-Q<C&&C<S+Q)||(L-Q<O&&O<J+Q&&I-Q<D&&D<S+Q)||(L-Q<O&&O<J+Q&&I-Q<C&&C<S+Q))){if(E.snapElements[N].snapping){(E.options.snap.release&&E.options.snap.release.call(E.element,M,A.extend(E._uiHash(),{snapItem:E.snapElements[N].item})))}E.snapElements[N].snapping=false;continue}if(K.options.snapMode!="inner"){var B=Math.abs(I-C)<=Q;var R=Math.abs(S-D)<=Q;var G=Math.abs(L-O)<=Q;var H=Math.abs(J-P)<=Q;if(B){K.position.top=E._convertPositionTo("relative",{top:I-E.helperProportions.height,left:0}).top}if(R){K.position.top=E._convertPositionTo("relative",{top:S,left:0}).top}if(G){K.position.left=E._convertPositionTo("relative",{top:0,left:L-E.helperProportions.width}).left}if(H){K.position.left=E._convertPositionTo("relative",{top:0,left:J}).left}}var F=(B||R||G||H);if(K.options.snapMode!="outer"){var B=Math.abs(I-D)<=Q;var R=Math.abs(S-C)<=Q;var G=Math.abs(L-P)<=Q;var H=Math.abs(J-O)<=Q;if(B){K.position.top=E._convertPositionTo("relative",{top:I,left:0}).top}if(R){K.position.top=E._convertPositionTo("relative",{top:S-E.helperProportions.height,left:0}).top}if(G){K.position.left=E._convertPositionTo("relative",{top:0,left:L}).left}if(H){K.position.left=E._convertPositionTo("relative",{top:0,left:J-E.helperProportions.width}).left}}if(!E.snapElements[N].snapping&&(B||R||G||H||F)){(E.options.snap.snap&&E.options.snap.snap.call(E.element,M,A.extend(E._uiHash(),{snapItem:E.snapElements[N].item})))}E.snapElements[N].snapping=(B||R||G||H||F)}}});A.ui.plugin.add("draggable","stack",{start:function(B,C){var D=A.makeArray(A(C.options.stack.group)).sort(function(F,E){return(parseInt(A(F).css("zIndex"),10)||C.options.stack.min)-(parseInt(A(E).css("zIndex"),10)||C.options.stack.min)});A(D).each(function(E){this.style.zIndex=C.options.stack.min+E});this[0].style.zIndex=C.options.stack.min+D.length}});A.ui.plugin.add("draggable","zIndex",{start:function(C,D){var B=A(D.helper);if(B.css("zIndex")){D.options._zIndex=B.css("zIndex")}B.css("zIndex",D.options.zIndex)},stop:function(B,C){if(C.options._zIndex){A(C.helper).css("zIndex",C.options._zIndex)}}})})(jQuery);
/*
 * jQuery UI Droppable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 */(function(A){A.widget("ui.droppable",{_init:function(){var C=this.options,B=C.accept;this.isover=0;this.isout=1;this.options.accept=this.options.accept&&A.isFunction(this.options.accept)?this.options.accept:function(D){return D.is(B)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};A.ui.ddmanager.droppables[this.options.scope]=A.ui.ddmanager.droppables[this.options.scope]||[];A.ui.ddmanager.droppables[this.options.scope].push(this);(this.options.cssNamespace&&this.element.addClass(this.options.cssNamespace+"-droppable"))},destroy:function(){var B=A.ui.ddmanager.droppables[this.options.scope];for(var C=0;C<B.length;C++){if(B[C]==this){B.splice(C,1)}}this.element.removeClass("ui-droppable-disabled").removeData("droppable").unbind(".droppable")},_setData:function(B,C){if(B=="accept"){this.options.accept=C&&A.isFunction(C)?C:function(D){return D.is(accept)}}else{A.widget.prototype._setData.apply(this,arguments)}},_activate:function(C){var B=A.ui.ddmanager.current;A.ui.plugin.call(this,"activate",[C,this.ui(B)]);if(B){this.element.triggerHandler("dropactivate",[C,this.ui(B)],this.options.activate)}},_deactivate:function(C){var B=A.ui.ddmanager.current;A.ui.plugin.call(this,"deactivate",[C,this.ui(B)]);if(B){this.element.triggerHandler("dropdeactivate",[C,this.ui(B)],this.options.deactivate)}},_over:function(C){var B=A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return }if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"over",[C,this.ui(B)]);this.element.triggerHandler("dropover",[C,this.ui(B)],this.options.over)}},_out:function(C){var B=A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return }if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"out",[C,this.ui(B)]);this.element.triggerHandler("dropout",[C,this.ui(B)],this.options.out)}},_drop:function(C,D){var B=D||A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return false}var E=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var F=A.data(this,"droppable");if(F.options.greedy&&A.ui.intersect(B,A.extend(F,{offset:F.element.offset()}),F.options.tolerance)){E=true;return false}});if(E){return false}if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"drop",[C,this.ui(B)]);this.element.triggerHandler("drop",[C,this.ui(B)],this.options.drop);return this.element}return false},plugins:{},ui:function(B){return{draggable:(B.currentItem||B.element),helper:B.helper,position:B.position,absolutePosition:B.positionAbs,options:this.options,element:this.element}}});A.extend(A.ui.droppable,{version:"1.6",defaults:{accept:"*",activeClass:null,cssNamespace:"ui",greedy:false,hoverClass:null,scope:"default",tolerance:"intersect"}});A.ui.intersect=function(O,I,M){if(!I.offset){return false}var D=(O.positionAbs||O.position.absolute).left,C=D+O.helperProportions.width,L=(O.positionAbs||O.position.absolute).top,K=L+O.helperProportions.height;var F=I.offset.left,B=F+I.proportions.width,N=I.offset.top,J=N+I.proportions.height;switch(M){case"fit":return(F<D&&C<B&&N<L&&K<J);break;case"intersect":return(F<D+(O.helperProportions.width/2)&&C-(O.helperProportions.width/2)<B&&N<L+(O.helperProportions.height/2)&&K-(O.helperProportions.height/2)<J);break;case"pointer":var G=((O.positionAbs||O.position.absolute).left+(O.clickOffset||O.offset.click).left),H=((O.positionAbs||O.position.absolute).top+(O.clickOffset||O.offset.click).top),E=A.ui.isOver(H,G,N,F,I.proportions.height,I.proportions.width);return E;break;case"touch":return((L>=N&&L<=J)||(K>=N&&K<=J)||(L<N&&K>J))&&((D>=F&&D<=B)||(C>=F&&C<=B)||(D<F&&C>B));break;default:return false;break}};A.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(E,G){var B=A.ui.ddmanager.droppables[E.options.scope];var F=G?G.type:null;var H=(E.currentItem||E.element).find(":data(droppable)").andSelf();droppablesLoop:for(var D=0;D<B.length;D++){if(B[D].options.disabled||(E&&!B[D].options.accept.call(B[D].element,(E.currentItem||E.element)))){continue}for(var C=0;C<H.length;C++){if(H[C]==B[D].element[0]){B[D].proportions.height=0;continue droppablesLoop}}B[D].visible=B[D].element.css("display")!="none";if(!B[D].visible){continue}B[D].offset=B[D].element.offset();B[D].proportions={width:B[D].element[0].offsetWidth,height:B[D].element[0].offsetHeight};if(F=="dragstart"||F=="sortactivate"){B[D]._activate.call(B[D],G)}}},drop:function(B,C){var D=false;A.each(A.ui.ddmanager.droppables[B.options.scope],function(){if(!this.options){return }if(!this.options.disabled&&this.visible&&A.ui.intersect(B,this,this.options.tolerance)){D=this._drop.call(this,C)}if(!this.options.disabled&&this.visible&&this.options.accept.call(this.element,(B.currentItem||B.element))){this.isout=1;this.isover=0;this._deactivate.call(this,C)}});return D},drag:function(B,C){if(B.options.refreshPositions){A.ui.ddmanager.prepareOffsets(B,C)}A.each(A.ui.ddmanager.droppables[B.options.scope],function(){if(this.options.disabled||this.greedyChild||!this.visible){return }var E=A.ui.intersect(B,this,this.options.tolerance);var G=!E&&this.isover==1?"isout":(E&&this.isover==0?"isover":null);if(!G){return }var F;if(this.options.greedy){var D=this.element.parents(":data(droppable):eq(0)");if(D.length){F=A.data(D[0],"droppable");F.greedyChild=(G=="isover"?1:0)}}if(F&&G=="isover"){F["isover"]=0;F["isout"]=1;F._out.call(F,C)}this[G]=1;this[G=="isout"?"isover":"isout"]=0;this[G=="isover"?"_over":"_out"].call(this,C);if(F&&G=="isout"){F["isout"]=0;F["isover"]=1;F._over.call(F,C)}})}};A.ui.plugin.add("droppable","activeClass",{activate:function(B,C){A(this).addClass(C.options.activeClass)},deactivate:function(B,C){A(this).removeClass(C.options.activeClass)},drop:function(B,C){A(this).removeClass(C.options.activeClass)}});A.ui.plugin.add("droppable","hoverClass",{over:function(B,C){A(this).addClass(C.options.hoverClass)},out:function(B,C){A(this).removeClass(C.options.hoverClass)},drop:function(B,C){A(this).removeClass(C.options.hoverClass)}})})(jQuery);
/*
 * jQuery UI Resizable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	ui.core.js
 */(function(B){B.widget("ui.resizable",B.extend({},B.ui.mouse,{_init:function(){var N=this,O=this.options;var R=this.element.css("position");this.originalElement=this.element;this.element.addClass("ui-resizable").css({position:/static/.test(R)?"relative":R});B.extend(O,{_aspectRatio:!!(O.aspectRatio),helper:O.helper||O.ghost||O.animate?O.helper||"ui-resizable-helper":null,knobHandles:O.knobHandles===true?"ui-resizable-knob-handle":O.knobHandles});var I="1px solid #DEDEDE";O.defaultTheme={"ui-resizable":{display:"block"},"ui-resizable-handle":{position:"absolute",background:"#F2F2F2",fontSize:"0.1px"},"ui-resizable-n":{cursor:"n-resize",height:"4px",left:"0px",right:"0px",borderTop:I},"ui-resizable-s":{cursor:"s-resize",height:"4px",left:"0px",right:"0px",borderBottom:I},"ui-resizable-e":{cursor:"e-resize",width:"4px",top:"0px",bottom:"0px",borderRight:I},"ui-resizable-w":{cursor:"w-resize",width:"4px",top:"0px",bottom:"0px",borderLeft:I},"ui-resizable-se":{cursor:"se-resize",width:"4px",height:"4px",borderRight:I,borderBottom:I},"ui-resizable-sw":{cursor:"sw-resize",width:"4px",height:"4px",borderBottom:I,borderLeft:I},"ui-resizable-ne":{cursor:"ne-resize",width:"4px",height:"4px",borderRight:I,borderTop:I},"ui-resizable-nw":{cursor:"nw-resize",width:"4px",height:"4px",borderLeft:I,borderTop:I}};O.knobTheme={"ui-resizable-handle":{background:"#F2F2F2",border:"1px solid #808080",height:"8px",width:"8px"},"ui-resizable-n":{cursor:"n-resize",top:"0px",left:"45%"},"ui-resizable-s":{cursor:"s-resize",bottom:"0px",left:"45%"},"ui-resizable-e":{cursor:"e-resize",right:"0px",top:"45%"},"ui-resizable-w":{cursor:"w-resize",left:"0px",top:"45%"},"ui-resizable-se":{cursor:"se-resize",right:"0px",bottom:"0px"},"ui-resizable-sw":{cursor:"sw-resize",left:"0px",bottom:"0px"},"ui-resizable-nw":{cursor:"nw-resize",left:"0px",top:"0px"},"ui-resizable-ne":{cursor:"ne-resize",right:"0px",top:"0px"}};O._nodeName=this.element[0].nodeName;if(O._nodeName.match(/canvas|textarea|input|select|button|img/i)){var C=this.element;if(/relative/.test(C.css("position"))&&B.browser.opera){C.css({position:"relative",top:"auto",left:"auto"})}C.wrap(B('<div class="ui-wrapper"	style="overflow: hidden;"></div>').css({position:C.css("position"),width:C.outerWidth(),height:C.outerHeight(),top:C.css("top"),left:C.css("left")}));var K=this.element;this.element=this.element.parent();this.element.data("resizable",this);this.element.css({marginLeft:K.css("marginLeft"),marginTop:K.css("marginTop"),marginRight:K.css("marginRight"),marginBottom:K.css("marginBottom")});K.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});if(B.browser.safari&&O.preventDefault){K.css("resize","none")}O.proportionallyResize=K.css({position:"static",zoom:1,display:"block"});this.element.css({margin:K.css("margin")});this._proportionallyResize()}if(!O.handles){O.handles=!B(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}}if(O.handles.constructor==String){O.zIndex=O.zIndex||1000;if(O.handles=="all"){O.handles="n,e,s,w,se,sw,ne,nw"}var P=O.handles.split(",");O.handles={};var H={handle:"position: absolute; display: none; overflow:hidden;",n:"top: 0pt; width:100%;",e:"right: 0pt; height:100%;",s:"bottom: 0pt; width:100%;",w:"left: 0pt; height:100%;",se:"bottom: 0pt; right: 0px;",sw:"bottom: 0pt; left: 0px;",ne:"top: 0pt; right: 0px;",nw:"top: 0pt; left: 0px;"};for(var S=0;S<P.length;S++){var T=B.trim(P[S]),M=O.defaultTheme,G="ui-resizable-"+T,D=!B.ui.css(G)&&!O.knobHandles,Q=B.ui.css("ui-resizable-knob-handle"),U=B.extend(M[G],M["ui-resizable-handle"]),E=B.extend(O.knobTheme[G],!Q?O.knobTheme["ui-resizable-handle"]:{});var L=/sw|se|ne|nw/.test(T)?{zIndex:++O.zIndex}:{};var J=(D?H[T]:""),F=B(['<div class="ui-resizable-handle ',G,'" style="',J,H.handle,'"></div>'].join("")).css(L);O.handles[T]=".ui-resizable-"+T;this.element.append(F.css(D?U:{}).css(O.knobHandles?E:{}).addClass(O.knobHandles?"ui-resizable-knob-handle":"").addClass(O.knobHandles))}if(O.knobHandles){this.element.addClass("ui-resizable-knob").css(!B.ui.css("ui-resizable-knob")?{}:{})}}this._renderAxis=function(Z){Z=Z||this.element;for(var W in O.handles){if(O.handles[W].constructor==String){O.handles[W]=B(O.handles[W],this.element).show()}if(O.transparent){O.handles[W].css({opacity:0})}if(this.element.is(".ui-wrapper")&&O._nodeName.match(/textarea|input|select|button/i)){var X=B(O.handles[W],this.element),Y=0;Y=/sw|ne|nw|se|n|s/.test(W)?X.outerHeight():X.outerWidth();var V=["padding",/ne|nw|n/.test(W)?"Top":/se|sw|s/.test(W)?"Bottom":/^e$/.test(W)?"Right":"Left"].join("");if(!O.transparent){Z.css(V,Y)}this._proportionallyResize()}if(!B(O.handles[W]).length){continue}}};this._renderAxis(this.element);O._handles=B(".ui-resizable-handle",N.element);if(O.disableSelection){O._handles.disableSelection()}O._handles.mouseover(function(){if(!O.resizing){if(this.className){var V=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}N.axis=O.axis=V&&V[1]?V[1]:"se"}});if(O.autoHide){O._handles.hide();B(N.element).addClass("ui-resizable-autohide").hover(function(){B(this).removeClass("ui-resizable-autohide");O._handles.show()},function(){if(!O.resizing){B(this).addClass("ui-resizable-autohide");O._handles.hide()}})}this._mouseInit()},destroy:function(){var E=this.element,D=E.children(".ui-resizable").get(0);this._mouseDestroy();var C=function(F){B(F).removeClass("ui-resizable ui-resizable-disabled").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};C(E);if(E.is(".ui-wrapper")&&D){E.parent().append(B(D).css({position:E.css("position"),width:E.outerWidth(),height:E.outerHeight(),top:E.css("top"),left:E.css("left")})).end().remove();C(D)}},_mouseCapture:function(D){if(this.options.disabled){return false}var E=false;for(var C in this.options.handles){if(B(this.options.handles[C])[0]==D.target){E=true}}if(!E){return false}return true},_mouseStart:function(D){var E=this.options,C=this.element.position(),F=this.element,I=B.browser.msie&&B.browser.version<7;E.resizing=true;E.documentScroll={top:B(document).scrollTop(),left:B(document).scrollLeft()};if(F.is(".ui-draggable")||(/absolute/).test(F.css("position"))){var K=B.browser.msie&&!E.containment&&(/absolute/).test(F.css("position"))&&!(/relative/).test(F.parent().css("position"));var L=K?this.documentScroll.top:0,H=K?this.documentScroll.left:0;F.css({position:"absolute",top:(C.top+L),left:(C.left+H)})}if(B.browser.opera&&(/relative/).test(F.css("position"))){F.css({position:"relative",top:"auto",left:"auto"})}this._renderProxy();var M=A(this.helper.css("left")),G=A(this.helper.css("top"));if(E.containment){M+=B(E.containment).scrollLeft()||0;G+=B(E.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:M,top:G};this.size=E.helper||I?{width:F.outerWidth(),height:F.outerHeight()}:{width:F.width(),height:F.height()};this.originalSize=E.helper||I?{width:F.outerWidth(),height:F.outerHeight()}:{width:F.width(),height:F.height()};this.originalPosition={left:M,top:G};this.sizeDiff={width:F.outerWidth()-F.width(),height:F.outerHeight()-F.height()};this.originalMousePosition={left:D.pageX,top:D.pageY};E.aspectRatio=(typeof E.aspectRatio=="number")?E.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);if(E.preserveCursor){var J=B(".ui-resizable-"+this.axis).css("cursor");B("body").css("cursor",J=="auto"?this.axis+"-resize":J)}this._propagate("start",D);return true},_mouseDrag:function(C){var F=this.helper,E=this.options,K={},N=this,H=this.originalMousePosition,L=this.axis;var O=(C.pageX-H.left)||0,M=(C.pageY-H.top)||0;var G=this._change[L];if(!G){return false}var J=G.apply(this,[C,O,M]),I=B.browser.msie&&B.browser.version<7,D=this.sizeDiff;if(E._aspectRatio||C.shiftKey){J=this._updateRatio(J,C)}J=this._respectSize(J,C);this._propagate("resize",C);F.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!E.helper&&E.proportionallyResize){this._proportionallyResize()}this._updateCache(J);this.element.triggerHandler("resize",[C,this.ui()],this.options["resize"]);return false},_mouseStop:function(F){this.options.resizing=false;var G=this.options,K=this;if(G.helper){var E=G.proportionallyResize,C=E&&(/textarea/i).test(E.get(0).nodeName),D=C&&B.ui.hasScroll(E.get(0),"left")?0:K.sizeDiff.height,I=C?0:K.sizeDiff.width;var L={width:(K.size.width-I),height:(K.size.height-D)},H=(parseInt(K.element.css("left"),10)+(K.position.left-K.originalPosition.left))||null,J=(parseInt(K.element.css("top"),10)+(K.position.top-K.originalPosition.top))||null;if(!G.animate){this.element.css(B.extend(L,{top:J,left:H}))}if(G.helper&&!G.animate){this._proportionallyResize()}}if(G.preserveCursor){B("body").css("cursor","auto")}this._propagate("stop",F);if(G.helper){this.helper.remove()}return false},_updateCache:function(C){var D=this.options;this.offset=this.helper.offset();if(C.left){this.position.left=C.left}if(C.top){this.position.top=C.top}if(C.height){this.size.height=C.height}if(C.width){this.size.width=C.width}},_updateRatio:function(F,E){var G=this.options,H=this.position,D=this.size,C=this.axis;if(F.height){F.width=(D.height*G.aspectRatio)}else{if(F.width){F.height=(D.width/G.aspectRatio)}}if(C=="sw"){F.left=H.left+(D.width-F.width);F.top=null}if(C=="nw"){F.top=H.top+(D.height-F.height);F.left=H.left+(D.width-F.width)}return F},_respectSize:function(J,E){var H=this.helper,G=this.options,O=G._aspectRatio||E.shiftKey,N=this.axis,Q=J.width&&G.maxWidth&&G.maxWidth<J.width,K=J.height&&G.maxHeight&&G.maxHeight<J.height,F=J.width&&G.minWidth&&G.minWidth>J.width,P=J.height&&G.minHeight&&G.minHeight>J.height;if(F){J.width=G.minWidth}if(P){J.height=G.minHeight}if(Q){J.width=G.maxWidth}if(K){J.height=G.maxHeight}var D=this.originalPosition.left+this.originalSize.width,M=this.position.top+this.size.height;var I=/sw|nw|w/.test(N),C=/nw|ne|n/.test(N);if(F&&I){J.left=D-G.minWidth}if(Q&&I){J.left=D-G.maxWidth}if(P&&C){J.top=M-G.minHeight}if(K&&C){J.top=M-G.maxHeight}var L=!J.width&&!J.height;if(L&&!J.left&&J.top){J.top=null}else{if(L&&!J.top&&J.left){J.left=null}}return J},_proportionallyResize:function(){var G=this.options;if(!G.proportionallyResize){return }var E=G.proportionallyResize,D=this.helper||this.element;if(!G.borderDif){var C=[E.css("borderTopWidth"),E.css("borderRightWidth"),E.css("borderBottomWidth"),E.css("borderLeftWidth")],F=[E.css("paddingTop"),E.css("paddingRight"),E.css("paddingBottom"),E.css("paddingLeft")];G.borderDif=B.map(C,function(H,J){var I=parseInt(H,10)||0,K=parseInt(F[J],10)||0;return I+K})}E.css({height:(D.height()-G.borderDif[0]-G.borderDif[2])+"px",width:(D.width()-G.borderDif[1]-G.borderDif[3])+"px"})},_renderProxy:function(){var D=this.element,G=this.options;this.elementOffset=D.offset();if(G.helper){this.helper=this.helper||B('<div style="overflow:hidden;"></div>');var C=B.browser.msie&&B.browser.version<7,E=(C?1:0),F=(C?2:-1);this.helper.addClass(G.helper).css({width:D.outerWidth()+F,height:D.outerHeight()+F,position:"absolute",left:this.elementOffset.left-E+"px",top:this.elementOffset.top-E+"px",zIndex:++G.zIndex});this.helper.appendTo("body");if(G.disableSelection){this.helper.disableSelection()}}else{this.helper=D}},_change:{e:function(E,D,C){return{width:this.originalSize.width+D}},w:function(F,D,C){var H=this.options,E=this.originalSize,G=this.originalPosition;return{left:G.left+D,width:E.width-D}},n:function(F,D,C){var H=this.options,E=this.originalSize,G=this.originalPosition;return{top:G.top+C,height:E.height-C}},s:function(E,D,C){return{height:this.originalSize.height+C}},se:function(E,D,C){return B.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[E,D,C]))},sw:function(E,D,C){return B.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[E,D,C]))},ne:function(E,D,C){return B.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[E,D,C]))},nw:function(E,D,C){return B.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[E,D,C]))}},_propagate:function(D,C){B.ui.plugin.call(this,D,[C,this.ui()]);if(D!="resize"){this.element.triggerHandler(["resize",D].join(""),[C,this.ui()],this.options[D])}},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,options:this.options,originalSize:this.originalSize,originalPosition:this.originalPosition}}}));B.extend(B.ui.resizable,{version:"1.6",defaults:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,cancel:":input",containment:false,disableSelection:true,distance:1,delay:0,ghost:false,grid:false,knobHandles:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,preserveCursor:true,preventDefault:true,proportionallyResize:false,transparent:false}});B.ui.plugin.add("resizable","alsoResize",{start:function(D,E){var G=E.options,C=B(this).data("resizable"),F=function(H){B(H).each(function(){B(this).data("resizable-alsoresize",{width:parseInt(B(this).width(),10),height:parseInt(B(this).height(),10),left:parseInt(B(this).css("left"),10),top:parseInt(B(this).css("top"),10)})})};if(typeof (G.alsoResize)=="object"&&!G.alsoResize.parentNode){if(G.alsoResize.length){G.alsoResize=G.alsoResize[0];F(G.alsoResize)}else{B.each(G.alsoResize,function(H,I){F(H)})}}else{F(G.alsoResize)}},resize:function(E,G){var H=G.options,D=B(this).data("resizable"),F=D.originalSize,J=D.originalPosition;var I={height:(D.size.height-F.height)||0,width:(D.size.width-F.width)||0,top:(D.position.top-J.top)||0,left:(D.position.left-J.left)||0},C=function(K,L){B(K).each(function(){var O=B(this).data("resizable-alsoresize"),N={},M=L&&L.length?L:["width","height","top","left"];B.each(M||["width","height","top","left"],function(P,R){var Q=(O[R]||0)+(I[R]||0);if(Q&&Q>=0){N[R]=Q||null}});B(this).css(N)})};if(typeof (H.alsoResize)=="object"&&!H.alsoResize.parentNode){B.each(H.alsoResize,function(K,L){C(K,L)})}else{C(H.alsoResize)}},stop:function(C,D){B(this).removeData("resizable-alsoresize-start")}});B.ui.plugin.add("resizable","animate",{stop:function(G,L){var H=L.options,M=B(this).data("resizable");var F=H.proportionallyResize,C=F&&(/textarea/i).test(F.get(0).nodeName),D=C&&B.ui.hasScroll(F.get(0),"left")?0:M.sizeDiff.height,J=C?0:M.sizeDiff.width;var E={width:(M.size.width-J),height:(M.size.height-D)},I=(parseInt(M.element.css("left"),10)+(M.position.left-M.originalPosition.left))||null,K=(parseInt(M.element.css("top"),10)+(M.position.top-M.originalPosition.top))||null;M.element.animate(B.extend(E,K&&I?{top:K,left:I}:{}),{duration:H.animateDuration,easing:H.animateEasing,step:function(){var N={width:parseInt(M.element.css("width"),10),height:parseInt(M.element.css("height"),10),top:parseInt(M.element.css("top"),10),left:parseInt(M.element.css("left"),10)};if(F){F.css({width:N.width,height:N.height})}M._updateCache(N);M._propagate("animate",G)}})}});B.ui.plugin.add("resizable","containment",{start:function(D,N){var H=N.options,P=B(this).data("resizable"),J=P.element;var E=H.containment,I=(E instanceof B)?E.get(0):(/parent/.test(E))?J.parent().get(0):E;if(!I){return }P.containerElement=B(I);if(/document/.test(E)||E==document){P.containerOffset={left:0,top:0};P.containerPosition={left:0,top:0};P.parentData={element:B(document),left:0,top:0,width:B(document).width(),height:B(document).height()||document.body.parentNode.scrollHeight}}else{var L=B(I),G=[];B(["Top","Right","Left","Bottom"]).each(function(R,Q){G[R]=A(L.css("padding"+Q))});P.containerOffset=L.offset();P.containerPosition=L.position();P.containerSize={height:(L.innerHeight()-G[3]),width:(L.innerWidth()-G[1])};var M=P.containerOffset,C=P.containerSize.height,K=P.containerSize.width,F=(B.ui.hasScroll(I,"left")?I.scrollWidth:K),O=(B.ui.hasScroll(I)?I.scrollHeight:C);P.parentData={element:I,left:M.left,top:M.top,width:F,height:O}}},resize:function(E,N){var G=N.options,Q=B(this).data("resizable"),D=Q.containerSize,M=Q.containerOffset,K=Q.size,L=Q.position,O=G._aspectRatio||E.shiftKey,C={top:0,left:0},F=Q.containerElement;if(F[0]!=document&&(/static/).test(F.css("position"))){C=M}if(L.left<(G.helper?M.left:0)){Q.size.width=Q.size.width+(G.helper?(Q.position.left-M.left):(Q.position.left-C.left));if(O){Q.size.height=Q.size.width/G.aspectRatio}Q.position.left=G.helper?M.left:0}if(L.top<(G.helper?M.top:0)){Q.size.height=Q.size.height+(G.helper?(Q.position.top-M.top):Q.position.top);if(O){Q.size.width=Q.size.height*G.aspectRatio}Q.position.top=G.helper?M.top:0}Q.offset.left=Q.parentData.left+Q.position.left;Q.offset.top=Q.parentData.top+Q.position.top;var J=Math.abs((G.helper?Q.offset.left-C.left:(Q.offset.left-C.left))+Q.sizeDiff.width),P=Math.abs((G.helper?Q.offset.top-C.top:(Q.offset.top-M.top))+Q.sizeDiff.height);var I=Q.containerElement.get(0)==Q.element.parent().get(0),H=/relative|absolute/.test(Q.containerElement.css("position"));if(I&&H){J-=Q.parentData.left}if(J+Q.size.width>=Q.parentData.width){Q.size.width=Q.parentData.width-J;if(O){Q.size.height=Q.size.width/G.aspectRatio}}if(P+Q.size.height>=Q.parentData.height){Q.size.height=Q.parentData.height-P;if(O){Q.size.width=Q.size.height*G.aspectRatio}}},stop:function(D,K){var E=K.options,M=B(this).data("resizable"),I=M.position,J=M.containerOffset,C=M.containerPosition,F=M.containerElement;var G=B(M.helper),N=G.offset(),L=G.outerWidth()-M.sizeDiff.width,H=G.outerHeight()-M.sizeDiff.height;if(E.helper&&!E.animate&&(/relative/).test(F.css("position"))){B(this).css({left:N.left-C.left-J.left,width:L,height:H})}if(E.helper&&!E.animate&&(/static/).test(F.css("position"))){B(this).css({left:N.left-C.left-J.left,width:L,height:H})}}});B.ui.plugin.add("resizable","ghost",{start:function(E,F){var G=F.options,C=B(this).data("resizable"),H=G.proportionallyResize,D=C.size;if(!H){C.ghost=C.element.clone()}else{C.ghost=H.clone()}C.ghost.css({opacity:0.25,display:"block",position:"relative",height:D.height,width:D.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof G.ghost=="string"?G.ghost:"");C.ghost.appendTo(C.helper)},resize:function(D,E){var F=E.options,C=B(this).data("resizable"),G=F.proportionallyResize;if(C.ghost){C.ghost.css({position:"relative",height:C.size.height,width:C.size.width})}},stop:function(D,E){var F=E.options,C=B(this).data("resizable"),G=F.proportionallyResize;if(C.ghost&&C.helper){C.helper.get(0).removeChild(C.ghost.get(0))}}});B.ui.plugin.add("resizable","grid",{resize:function(C,K){var F=K.options,M=B(this).data("resizable"),I=M.size,G=M.originalSize,H=M.originalPosition,L=M.axis,J=F._aspectRatio||C.shiftKey;F.grid=typeof F.grid=="number"?[F.grid,F.grid]:F.grid;var E=Math.round((I.width-G.width)/(F.grid[0]||1))*(F.grid[0]||1),D=Math.round((I.height-G.height)/(F.grid[1]||1))*(F.grid[1]||1);if(/^(se|s|e)$/.test(L)){M.size.width=G.width+E;M.size.height=G.height+D}else{if(/^(ne)$/.test(L)){M.size.width=G.width+E;M.size.height=G.height+D;M.position.top=H.top-D}else{if(/^(sw)$/.test(L)){M.size.width=G.width+E;M.size.height=G.height+D;M.position.left=H.left-E}else{M.size.width=G.width+E;M.size.height=G.height+D;M.position.top=H.top-D;M.position.left=H.left-E}}}}});var A=function(C){return parseInt(C,10)||0}})(jQuery);
/*
 * jQuery UI Effects 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */(function(C){C.effects=C.effects||{};C.extend(C.effects,{version:"1.6",save:function(F,G){for(var E=0;E<G.length;E++){if(G[E]!==null){C.data(F[0],"ec.storage."+G[E],F[0].style[G[E]])}}},restore:function(F,G){for(var E=0;E<G.length;E++){if(G[E]!==null){F.css(G[E],C.data(F[0],"ec.storage."+G[E]))}}},setMode:function(E,F){if(F=="toggle"){F=E.is(":hidden")?"show":"hide"}return F},getBaseline:function(F,G){var H,E;switch(F[0]){case"top":H=0;break;case"middle":H=0.5;break;case"bottom":H=1;break;default:H=F[0]/G.height}switch(F[1]){case"left":E=0;break;case"center":E=0.5;break;case"right":E=1;break;default:E=F[1]/G.width}return{x:E,y:H}},createWrapper:function(F){if(F.parent().attr("id")=="fxWrapper"){return F}var E={width:F.outerWidth({margin:true}),height:F.outerHeight({margin:true}),"float":F.css("float")};F.wrap('<div id="fxWrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var I=F.parent();if(F.css("position")=="static"){I.css({position:"relative"});F.css({position:"relative"})}else{var H=F.css("top");if(isNaN(parseInt(H))){H="auto"}var G=F.css("left");if(isNaN(parseInt(G))){G="auto"}I.css({position:F.css("position"),top:H,left:G,zIndex:F.css("z-index")}).show();F.css({position:"relative",top:0,left:0})}I.css(E);return I},removeWrapper:function(E){if(E.parent().attr("id")=="fxWrapper"){return E.parent().replaceWith(E)}return E},setTransition:function(F,G,E,H){H=H||{};C.each(G,function(J,I){unit=F.cssUnit(I);if(unit[0]>0){H[I]=unit[0]*E+unit[1]}});return H},animateClass:function(G,H,J,I){var E=(typeof J=="function"?J:(I?I:null));var F=(typeof J=="object"?J:null);return this.each(function(){var O={};var M=C(this);var N=M.attr("style")||"";if(typeof N=="object"){N=N["cssText"]}if(G.toggle){M.hasClass(G.toggle)?G.remove=G.toggle:G.add=G.toggle}var K=C.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(G.add){M.addClass(G.add)}if(G.remove){M.removeClass(G.remove)}var L=C.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(G.add){M.removeClass(G.add)}if(G.remove){M.addClass(G.remove)}for(var P in L){if(typeof L[P]!="function"&&L[P]&&P.indexOf("Moz")==-1&&P.indexOf("length")==-1&&L[P]!=K[P]&&(P.match(/color/i)||(!P.match(/color/i)&&!isNaN(parseInt(L[P],10))))&&(K.position!="static"||(K.position=="static"&&!P.match(/left|top|bottom|right/)))){O[P]=L[P]}}M.animate(O,H,F,function(){if(typeof C(this).attr("style")=="object"){C(this).attr("style")["cssText"]="";C(this).attr("style")["cssText"]=N}else{C(this).attr("style",N)}if(G.add){C(this).addClass(G.add)}if(G.remove){C(this).removeClass(G.remove)}if(E){E.apply(this,arguments)}})})}});C.fn.extend({_show:C.fn.show,_hide:C.fn.hide,__toggle:C.fn.toggle,_addClass:C.fn.addClass,_removeClass:C.fn.removeClass,_toggleClass:C.fn.toggleClass,effect:function(E,G,F,H){return C.effects[E]?C.effects[E].call(this,{method:E,options:G||{},duration:F,callback:H}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||/(slow|normal|fast)/.test(arguments[0]))){return this._show.apply(this,arguments)}else{var E=arguments[1]||{};E["mode"]="show";return this.effect.apply(this,[arguments[0],E,arguments[2]||E.duration,arguments[3]||E.callback])}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||/(slow|normal|fast)/.test(arguments[0]))){return this._hide.apply(this,arguments)}else{var E=arguments[1]||{};E["mode"]="hide";return this.effect.apply(this,[arguments[0],E,arguments[2]||E.duration,arguments[3]||E.callback])}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||/(slow|normal|fast)/.test(arguments[0]))||(arguments[0].constructor==Function)){return this.__toggle.apply(this,arguments)}else{var E=arguments[1]||{};E["mode"]="toggle";return this.effect.apply(this,[arguments[0],E,arguments[2]||E.duration,arguments[3]||E.callback])}},addClass:function(F,E,H,G){return E?C.effects.animateClass.apply(this,[{add:F},E,H,G]):this._addClass(F)},removeClass:function(F,E,H,G){return E?C.effects.animateClass.apply(this,[{remove:F},E,H,G]):this._removeClass(F)},toggleClass:function(F,E,H,G){return E?C.effects.animateClass.apply(this,[{toggle:F},E,H,G]):this._toggleClass(F)},morph:function(E,G,F,I,H){return C.effects.animateClass.apply(this,[{add:G,remove:E},F,I,H])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(E){var F=this.css(E),G=[];C.each(["em","px","%","pt"],function(H,I){if(F.indexOf(I)>0){G=[parseFloat(F),I]}});return G}});C.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(F,E){C.fx.step[E]=function(G){if(G.state==0){G.start=D(G.elem,E);G.end=B(G.end)}G.elem.style[E]="rgb("+[Math.max(Math.min(parseInt((G.pos*(G.end[0]-G.start[0]))+G.start[0]),255),0),Math.max(Math.min(parseInt((G.pos*(G.end[1]-G.start[1]))+G.start[1]),255),0),Math.max(Math.min(parseInt((G.pos*(G.end[2]-G.start[2]))+G.start[2]),255),0)].join(",")+")"}});function B(F){var E;if(F&&F.constructor==Array&&F.length==3){return F}if(E=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(F)){return[parseInt(E[1]),parseInt(E[2]),parseInt(E[3])]}if(E=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(F)){return[parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55]}if(E=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(F)){return[parseInt(E[1],16),parseInt(E[2],16),parseInt(E[3],16)]}if(E=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(F)){return[parseInt(E[1]+E[1],16),parseInt(E[2]+E[2],16),parseInt(E[3]+E[3],16)]}if(E=/rgba\(0, 0, 0, 0\)/.exec(F)){return A["transparent"]}return A[C.trim(F).toLowerCase()]}function D(G,E){var F;do{F=C.curCSS(G,E);if(F!=""&&F!="transparent"||C.nodeName(G,"body")){break}E="backgroundColor"}while(G=G.parentNode);return B(F)}var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};C.easing.jswing=C.easing.swing;C.extend(C.easing,{def:"easeOutQuad",swing:function(F,G,E,I,H){return C.easing[C.easing.def](F,G,E,I,H)},easeInQuad:function(F,G,E,I,H){return I*(G/=H)*G+E},easeOutQuad:function(F,G,E,I,H){return -I*(G/=H)*(G-2)+E},easeInOutQuad:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G+E}return -I/2*((--G)*(G-2)-1)+E},easeInCubic:function(F,G,E,I,H){return I*(G/=H)*G*G+E},easeOutCubic:function(F,G,E,I,H){return I*((G=G/H-1)*G*G+1)+E},easeInOutCubic:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G*G+E}return I/2*((G-=2)*G*G+2)+E},easeInQuart:function(F,G,E,I,H){return I*(G/=H)*G*G*G+E},easeOutQuart:function(F,G,E,I,H){return -I*((G=G/H-1)*G*G*G-1)+E},easeInOutQuart:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G*G*G+E}return -I/2*((G-=2)*G*G*G-2)+E},easeInQuint:function(F,G,E,I,H){return I*(G/=H)*G*G*G*G+E},easeOutQuint:function(F,G,E,I,H){return I*((G=G/H-1)*G*G*G*G+1)+E},easeInOutQuint:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G*G*G*G+E}return I/2*((G-=2)*G*G*G*G+2)+E},easeInSine:function(F,G,E,I,H){return -I*Math.cos(G/H*(Math.PI/2))+I+E},easeOutSine:function(F,G,E,I,H){return I*Math.sin(G/H*(Math.PI/2))+E},easeInOutSine:function(F,G,E,I,H){return -I/2*(Math.cos(Math.PI*G/H)-1)+E},easeInExpo:function(F,G,E,I,H){return(G==0)?E:I*Math.pow(2,10*(G/H-1))+E},easeOutExpo:function(F,G,E,I,H){return(G==H)?E+I:I*(-Math.pow(2,-10*G/H)+1)+E},easeInOutExpo:function(F,G,E,I,H){if(G==0){return E}if(G==H){return E+I}if((G/=H/2)<1){return I/2*Math.pow(2,10*(G-1))+E}return I/2*(-Math.pow(2,-10*--G)+2)+E},easeInCirc:function(F,G,E,I,H){return -I*(Math.sqrt(1-(G/=H)*G)-1)+E},easeOutCirc:function(F,G,E,I,H){return I*Math.sqrt(1-(G=G/H-1)*G)+E},easeInOutCirc:function(F,G,E,I,H){if((G/=H/2)<1){return -I/2*(Math.sqrt(1-G*G)-1)+E}return I/2*(Math.sqrt(1-(G-=2)*G)+1)+E},easeInElastic:function(F,H,E,L,K){var I=1.70158;var J=0;var G=L;if(H==0){return E}if((H/=K)==1){return E+L}if(!J){J=K*0.3}if(G<Math.abs(L)){G=L;var I=J/4}else{var I=J/(2*Math.PI)*Math.asin(L/G)}return -(G*Math.pow(2,10*(H-=1))*Math.sin((H*K-I)*(2*Math.PI)/J))+E},easeOutElastic:function(F,H,E,L,K){var I=1.70158;var J=0;var G=L;if(H==0){return E}if((H/=K)==1){return E+L}if(!J){J=K*0.3}if(G<Math.abs(L)){G=L;var I=J/4}else{var I=J/(2*Math.PI)*Math.asin(L/G)}return G*Math.pow(2,-10*H)*Math.sin((H*K-I)*(2*Math.PI)/J)+L+E},easeInOutElastic:function(F,H,E,L,K){var I=1.70158;var J=0;var G=L;if(H==0){return E}if((H/=K/2)==2){return E+L}if(!J){J=K*(0.3*1.5)}if(G<Math.abs(L)){G=L;var I=J/4}else{var I=J/(2*Math.PI)*Math.asin(L/G)}if(H<1){return -0.5*(G*Math.pow(2,10*(H-=1))*Math.sin((H*K-I)*(2*Math.PI)/J))+E}return G*Math.pow(2,-10*(H-=1))*Math.sin((H*K-I)*(2*Math.PI)/J)*0.5+L+E},easeInBack:function(F,G,E,J,I,H){if(H==undefined){H=1.70158}return J*(G/=I)*G*((H+1)*G-H)+E},easeOutBack:function(F,G,E,J,I,H){if(H==undefined){H=1.70158}return J*((G=G/I-1)*G*((H+1)*G+H)+1)+E},easeInOutBack:function(F,G,E,J,I,H){if(H==undefined){H=1.70158}if((G/=I/2)<1){return J/2*(G*G*(((H*=(1.525))+1)*G-H))+E}return J/2*((G-=2)*G*(((H*=(1.525))+1)*G+H)+2)+E},easeInBounce:function(F,G,E,I,H){return I-C.easing.easeOutBounce(F,H-G,0,I,H)+E},easeOutBounce:function(F,G,E,I,H){if((G/=H)<(1/2.75)){return I*(7.5625*G*G)+E}else{if(G<(2/2.75)){return I*(7.5625*(G-=(1.5/2.75))*G+0.75)+E}else{if(G<(2.5/2.75)){return I*(7.5625*(G-=(2.25/2.75))*G+0.9375)+E}else{return I*(7.5625*(G-=(2.625/2.75))*G+0.984375)+E}}}},easeInOutBounce:function(F,G,E,I,H){if(G<H/2){return C.easing.easeInBounce(F,G*2,0,I,H)*0.5+E}return C.easing.easeOutBounce(F,G*2-H,0,I,H)*0.5+I*0.5+E}})})(jQuery);
/*
 * jQuery UI Effects Highlight 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	effects.core.js
 */(function(A){A.effects.highlight=function(B){return this.queue(function(){var E=A(this),D=["backgroundImage","backgroundColor","opacity"];var H=A.effects.setMode(E,B.options.mode||"show");var C=B.options.color||"#ffff99";var G=E.css("backgroundColor");A.effects.save(E,D);E.show();E.css({backgroundImage:"none",backgroundColor:C});var F={backgroundColor:G};if(H=="hide"){F["opacity"]=0}E.animate(F,{queue:false,duration:B.duration,easing:B.options.easing,complete:function(){if(H=="hide"){E.hide()}A.effects.restore(E,D);if(H=="show"&&A.browser.msie){this.style.removeAttribute("filter")}if(B.callback){B.callback.apply(this,arguments)}E.dequeue()}})})}})(jQuery);
// Javascript for user_relationships_ui.module

// Creating our own namespace for the module
Drupal.user_relationships_ui = {};

if (Drupal.jsEnabled) {
  $(document).ready(function() {
    // Any links that we have created in the ui module are
    // Given a click handler so you can display the popup correctly
    $('a.user_relationships_popup_link').click(function(e) {
      var buttoncode = e.which ? e.which : e.button; // msie specific checks does not support e.which
      // If position is fixed, allow for %'s.
      position = Drupal.settings.user_relationships_ui.position.position;
      left = Drupal.settings.user_relationships_ui.position.left;
      xtop = Drupal.settings.user_relationships_ui.position.top;
      
      if(position == "fixed") {
        // If left is defined in a % (.5) calculate left requirement
        if(left <= 1) {
          // Window width * desired - UI width
          left = Math.round(($(window).width()*left) - ($("#user_relationships_popup_form").width()/2));
        }
        // If top is define in a % (.33) calculate top requirement
        if(xtop <= 1) {
          // Window height * desired - UI height (which is an unknown)
          xtop = Math.round(($(window).height()*xtop));// - ($("#user_relationships_popup_form").height()/2));
        }
      } else {
      left = (e.pageX ? e.pageX : e.clientX) + Number(left); // msie specific checks does not support e.page
      if (left + $("#user_relationships_popup_form").width() > $(window).width()) {
        left = (e.pageX ? e.pageX : e.clientX) - $("#user_relationships_popup_form").width();
      }
        xtop = (e.pageY ? e.pageY : e.clientY) + Number(xtop); // msie specific checks does not support e.page
      }
      var href = $(this).attr('href'); // Where we send the ajax request.
      Drupal.user_relationships_ui.showForm(href, position, left, xtop);
      return false;
    });
  });
}

/**
 * Function to display the pertinent form for the user
 *
 * @param href
 *      Ajax url where we will retrieve the form
 * @param pageX
 *      Left value for the event
 * @param pageY
 *      Top value for the event
 */
Drupal.user_relationships_ui.showForm = function(href, position, left, top) {
  // Making sure that any currently open popups will be hidden.
  Drupal.user_relationships_ui.hidePopup();
  // Putting the animation into this

  $('#user_relationships_popup_form')
    .css({top: top + 'px', left: left + 'px', position: position})
    .html(Drupal.user_relationships_ui.loadingAnimation())
    .slideDown();
  // Adding ajax to the href because we need to determine between ajax and regular
  if (href.indexOf('?') == -1) {
    href += '?';
  };
  href += '&ajax=1';
  // Making the ajax request to the server to retrieve the form.
  $.get(href, function(result) {
    $('#user_relationships_popup_form').html(result).slideDown();
    // Making sure the cancel link on each form in the popup closes the popup.
    $('#user_relationships_popup_form a').click(function() {
      Drupal.user_relationships_ui.hidePopup();
      return false;
    });
    //Prevent users from clicking submit button twice
    Drupal.user_relationships_ui.formCheck();
  });
};

/**
 * Function used to return the html that is used to build the.
 * Loading animation when a form is requested by the user.
 */
Drupal.user_relationships_ui.loadingAnimation = function() {
  var html = '<div>';
  html += '<div style="text-align: center; font-weight: bold;">';
  html += Drupal.t('Form Loading');
  html += '</div>';
  html += '<img src="' + Drupal.settings.user_relationships_ui['loadingimage'] + '" border="0" height="20" width="200" />';
  html += '</div>';
  return html;
}

/**
 * Helper function to hide the popup form
 */
Drupal.user_relationships_ui.hidePopup = function() {
  $('#user_relationships_popup_form').slideUp();
}

/**
 * Prevent users from clicking a submit button twice - borrowed from http://drupal.org/project/newswire - thanks, fellows :)
 */
Drupal.user_relationships_ui.formCheck = function() {
  // only apply this to node and comment and new user registration forms
  var forms = $("#user_relationships_popup_form #edit-submit");
  // insert the saving div now to cache it for better performance and to show the loading image
  $('<div id="user_relationships_popup_form_saving"><p class="user_relationships_popup_form_saving">' + Drupal.t('Saving...') + '</p></div>').insertAfter(forms);
  forms.click(function() {
    $(this).siblings("input[type=submit]").hide();
    $(this).hide();
    $("#user_relationships_popup_form_saving").show();
    var notice = function() {
      $('<p id="user_relationships_popup_form_saving_notice">' + Drupal.t('Not saving? Please wait a few seconds, reload this page, and try again.') + '</p>').appendTo("#user_relationships_popup_form_saving").fadeIn();
    };
    // append notice if form saving isn't work, perhaps a timeout issue
    setTimeout(notice, 60000);
  });
};

$(document).ready(function() {
  $('#edit-is-oneway').click(function () {
    if ($('#edit-is-oneway').attr('checked')) {
      $('#edit-is-reciprocal-wrapper').slideDown('slow');
    }
    else {
      $('#edit-is-reciprocal-wrapper').slideUp('slow');
    }
  });
  
  if (!$('#edit-is-oneway').attr('checked')) {
    $('#edit-is-reciprocal-wrapper').hide();
  }
});
;
// $Id: pathauto.js,v 1.4.2.2 2010/02/10 21:50:30 greggles Exp $
if (Drupal.jsEnabled) {
  $(document).ready(function() {
    if ($("#edit-pathauto-perform-alias").size() && $("#edit-pathauto-perform-alias").attr("checked")) {
      // Disable input and hide its description.
      $("#edit-path").attr("disabled","disabled");
      $("#edit-path-wrapper > div.description").hide(0);
    }
    $("#edit-pathauto-perform-alias").bind("click", function() {
      if ($("#edit-pathauto-perform-alias").attr("checked")) {
        // Auto-alias checked; disable input.
        $("#edit-path").attr("disabled","disabled");
        $("#edit-path-wrapper > div[class=description]").slideUp('fast');
      }
      else {
        // Auto-alias unchecked; enable input.
        $("#edit-path").removeAttr("disabled");
        $("#edit-path")[0].focus();
        $("#edit-path-wrapper > div[class=description]").slideDown('fast');
      }
    });
  });

  Drupal.verticalTabs = Drupal.verticalTabs || {};

  Drupal.verticalTabs.path = function() {
    var path = $('#edit-path').val();
    var automatic = $('#edit-pathauto-perform-alias').attr('checked');

    if (automatic) {
      return Drupal.t('Automatic alias');
    }
    if (path) {
      return Drupal.t('Alias: @alias', { '@alias': path });
    }
    else {
      return Drupal.t('No alias');
    }
  }
}
;

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || "GET";
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  this.element = document.createElement('div');
  this.element.id = id;
  this.element.className = 'progress';
  $(this.element).html('<div class="bar"><div class="filled"></div></div>'+
                       '<div class="percentage"></div>'+
                       '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage +'%');
    $('div.percentage', this.element).html(percentage +'%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer
        pb.timer = setTimeout(function() { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ahahError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = document.createElement('div');
  error.className = 'error';
  error.innerHTML = string;

  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};
;

/**
 * Auto-attach standard client side file input validation.
 */
Drupal.behaviors.filefieldValidateAutoAttach = function(context) {
  $("input[type=file]", context).bind('change', Drupal.filefield.validateExtensions);
};


/**
 * Prevent FileField uploads when using buttons not intended to upload.
 */
Drupal.behaviors.filefieldButtons = function(context) {
  $('input.form-submit', context).bind('mousedown', Drupal.filefield.disableFields);
  $('div.filefield-element input.form-submit', context).bind('mousedown', Drupal.filefield.progressBar);
};

/**
 * Open links to files within the node form in a new window.
 */
Drupal.behaviors.filefieldPreviewLinks = function(context) {
  $('div.filefield-element div.widget-preview a', context).click(Drupal.filefield.openInNewWindow).attr('target', '_blank');
}

/**
 * Admin enhancement: only show the "Files listed by default" when needed.
 */
Drupal.behaviors.filefieldAdmin = function(context) {
  var $listField = $('div.filefield-list-field', context);
  if ($listField.size()) {
    $listField.find('input').change(function() {
      if (this.checked) {
        if (this.value == 0) {
          $('#edit-list-default-wrapper').css('display', 'none');
        }
        else {
          $('#edit-list-default-wrapper').css('display', 'block');
        }
      }
    }).change();
  }
};

/**
 * Utility functions for use by FileField.
 * @param {Object} event
 */
Drupal.filefield = {
  validateExtensions: function(event) {
    // Remove any previous errors.
    $('.file-upload-js-error').remove();

    var fieldName = this.name.replace(/^files\[([a-z0-9_]+)_\d+\]$/, '$1');
    var extensions = '';
    if (Drupal.settings.filefield && Drupal.settings.filefield[fieldName]) {
      extensions = Drupal.settings.filefield[fieldName].replace(/[, ]+/g, '|');
    }
    if (extensions.length > 1 && this.value.length > 0) {
      var extensionPattern = new RegExp('\\.(' + extensions + ')$', 'gi');
      if (!extensionPattern.test(this.value)) {
        var error = Drupal.t("The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.",
          { '%filename' : this.value, '%extensions' : extensions.replace(/\|/g, ', ') }
        );
        $(this).parent().before('<div class="messages error file-upload-js-error">' + error + '</div>');
        this.value = '';
        return false;
      }
    }
  },
  disableFields: function(event) {
    var clickedButton = this;

    // Only disable upload fields for AHAH buttons.
    if (!$(clickedButton).hasClass('ahah-processed')) {
      return;
    }

    // Check if we're working with an "Upload" button.
    var $enabledFields = [];
    if ($(this).parents('div.filefield-element').size() > 0) {
      $enabledFields = $(this).parents('div.filefield-element').find('input.form-file');
    }
    // Otherwise we're probably dealing with CCK's "Add another item" button.
    else if ($(this).parents('div.content-add-more').size() > 0) {
      $enabledFields = $(this).parent().parent().find('input.form-file');
    }

    var $disabledFields = $('div.filefield-element input.form-file').not($enabledFields);

    // Disable upload fields other than the one we're currently working with.
    $disabledFields.attr('disabled', 'disabled');

    // All the other mousedown handlers (like AHAH) are excuted before any
    // timeout functions will be called, so this effectively re-enables
    // the filefields after the AHAH process is complete even though it only
    // has a 1 millisecond timeout.
    setTimeout(function(){
      $disabledFields.attr('disabled', '');
    }, 1000);
  },
  progressBar: function(event) {
    var clickedButton = this;
    var $progressId = $(clickedButton).parents('div.filefield-element').find('input.filefield-progress');
    if ($progressId.size()) {
      var originalName = $progressId.attr('name');

      // Replace the name with the required identifier.
      $progressId.attr('name', originalName.match(/APC_UPLOAD_PROGRESS|UPLOAD_IDENTIFIER/)[0]);

      // Restore the original name after the upload begins.
      setTimeout(function() {
        $progressId.attr('name', originalName);
      }, 1000);
    }

    // Show the progress bar if the upload takes longer than 3 seconds.
    setTimeout(function() {
      $(clickedButton).parents('div.filefield-element').find('div.ahah-progress-bar').slideDown();
    }, 500);
  },
  openInNewWindow: function(event) {
    window.open(this.href, 'filefieldPreview', 'toolbar=0,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,width=500,height=550');
    return false;
  }
};
;

/**
 * Attaches the autocomplete behavior to all required fields
 */
Drupal.behaviors.autocomplete = function (context) {
  var acdb = [];
  $('input.autocomplete:not(.autocomplete-processed)', context).each(function () {
    var uri = this.value;
    if (!acdb[uri]) {
      acdb[uri] = new Drupal.ACDB(uri);
    }
    var input = $('#' + this.id.substr(0, this.id.length - 13))
      .attr('autocomplete', 'OFF')[0];
    $(input.form).submit(Drupal.autocompleteSubmit);
    new Drupal.jsAC(input, acdb[uri]);
    $(this).addClass('autocomplete-processed');
  });
};

/**
 * Prevents the form from submitting if the suggestions popup is open
 * and closes the suggestions popup when doing so.
 */
Drupal.autocompleteSubmit = function () {
  return $('#autocomplete').each(function () {
    this.owner.hidePopup();
  }).size() == 0;
};

/**
 * An AutoComplete object
 */
Drupal.jsAC = function (input, db) {
  var ac = this;
  this.input = input;
  this.db = db;

  $(this.input)
    .keydown(function (event) { return ac.onkeydown(this, event); })
    .keyup(function (event) { ac.onkeyup(this, event); })
    .blur(function () { ac.hidePopup(); ac.db.cancel(); });

};

/**
 * Handler for the "keydown" event
 */
Drupal.jsAC.prototype.onkeydown = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 40: // down arrow
      this.selectDown();
      return false;
    case 38: // up arrow
      this.selectUp();
      return false;
    default: // all other keys
      return true;
  }
};

/**
 * Handler for the "keyup" event
 */
Drupal.jsAC.prototype.onkeyup = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 16: // shift
    case 17: // ctrl
    case 18: // alt
    case 20: // caps lock
    case 33: // page up
    case 34: // page down
    case 35: // end
    case 36: // home
    case 37: // left arrow
    case 38: // up arrow
    case 39: // right arrow
    case 40: // down arrow
      return true;

    case 9:  // tab
    case 13: // enter
    case 27: // esc
      this.hidePopup(e.keyCode);
      return true;

    default: // all other keys
      if (input.value.length > 0)
        this.populatePopup();
      else
        this.hidePopup(e.keyCode);
      return true;
  }
};

/**
 * Puts the currently highlighted suggestion into the autocomplete field
 */
Drupal.jsAC.prototype.select = function (node) {
  this.input.value = node.autocompleteValue;
};

/**
 * Highlights the next suggestion
 */
Drupal.jsAC.prototype.selectDown = function () {
  if (this.selected && this.selected.nextSibling) {
    this.highlight(this.selected.nextSibling);
  }
  else {
    var lis = $('li', this.popup);
    if (lis.size() > 0) {
      this.highlight(lis.get(0));
    }
  }
};

/**
 * Highlights the previous suggestion
 */
Drupal.jsAC.prototype.selectUp = function () {
  if (this.selected && this.selected.previousSibling) {
    this.highlight(this.selected.previousSibling);
  }
};

/**
 * Highlights a suggestion
 */
Drupal.jsAC.prototype.highlight = function (node) {
  if (this.selected) {
    $(this.selected).removeClass('selected');
  }
  $(node).addClass('selected');
  this.selected = node;
};

/**
 * Unhighlights a suggestion
 */
Drupal.jsAC.prototype.unhighlight = function (node) {
  $(node).removeClass('selected');
  this.selected = false;
};

/**
 * Hides the autocomplete suggestions
 */
Drupal.jsAC.prototype.hidePopup = function (keycode) {
  // Select item if the right key or mousebutton was pressed
  if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
    this.input.value = this.selected.autocompleteValue;
  }
  // Hide popup
  var popup = this.popup;
  if (popup) {
    this.popup = null;
    $(popup).fadeOut('fast', function() { $(popup).remove(); });
  }
  this.selected = false;
};

/**
 * Positions the suggestions popup and starts a search
 */
Drupal.jsAC.prototype.populatePopup = function () {
  // Show popup
  if (this.popup) {
    $(this.popup).remove();
  }
  this.selected = false;
  this.popup = document.createElement('div');
  this.popup.id = 'autocomplete';
  this.popup.owner = this;
  $(this.popup).css({
    marginTop: this.input.offsetHeight +'px',
    width: (this.input.offsetWidth - 4) +'px',
    display: 'none'
  });
  $(this.input).before(this.popup);

  // Do search
  this.db.owner = this;
  this.db.search(this.input.value);
};

/**
 * Fills the suggestion popup with any matches received
 */
Drupal.jsAC.prototype.found = function (matches) {
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    return false;
  }

  // Prepare matches
  var ul = document.createElement('ul');
  var ac = this;
  for (key in matches) {
    var li = document.createElement('li');
    $(li)
      .html('<div>'+ matches[key] +'</div>')
      .mousedown(function () { ac.select(this); })
      .mouseover(function () { ac.highlight(this); })
      .mouseout(function () { ac.unhighlight(this); });
    li.autocompleteValue = key;
    $(ul).append(li);
  }

  // Show popup with matches, if any
  if (this.popup) {
    if (ul.childNodes.length > 0) {
      $(this.popup).empty().append(ul).show();
    }
    else {
      $(this.popup).css({visibility: 'hidden'});
      this.hidePopup();
    }
  }
};

Drupal.jsAC.prototype.setStatus = function (status) {
  switch (status) {
    case 'begin':
      $(this.input).addClass('throbbing');
      break;
    case 'cancel':
    case 'error':
    case 'found':
      $(this.input).removeClass('throbbing');
      break;
  }
};

/**
 * An AutoComplete DataBase object
 */
Drupal.ACDB = function (uri) {
  this.uri = uri;
  this.delay = 300;
  this.cache = {};
};

/**
 * Performs a cached and delayed search
 */
Drupal.ACDB.prototype.search = function (searchString) {
  var db = this;
  this.searchString = searchString;

  // See if this key has been searched for before
  if (this.cache[searchString]) {
    return this.owner.found(this.cache[searchString]);
  }

  // Initiate delayed search
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(function() {
    db.owner.setStatus('begin');

    // Ajax GET request for autocompletion
    $.ajax({
      type: "GET",
      url: db.uri +'/'+ Drupal.encodeURIComponent(searchString),
      dataType: 'json',
      success: function (matches) {
        if (typeof matches['status'] == 'undefined' || matches['status'] != 0) {
          db.cache[searchString] = matches;
          // Verify if these are still the matches the user wants to see
          if (db.searchString == searchString) {
            db.owner.found(matches);
          }
          db.owner.setStatus('found');
        }
      },
      error: function (xmlhttp) {
        alert(Drupal.ahahError(xmlhttp, db.uri));
      }
    });
  }, this.delay);
};

/**
 * Cancels the current autocomplete request
 */
Drupal.ACDB.prototype.cancel = function() {
  if (this.owner) this.owner.setStatus('cancel');
  if (this.timer) clearTimeout(this.timer);
  this.searchString = '';
};
;

/**
 * Toggle the visibility of a fieldset using smooth animations
 */
Drupal.toggleFieldset = function(fieldset) {
  if ($(fieldset).is('.collapsed')) {
    // Action div containers are processed separately because of a IE bug
    // that alters the default submit button behavior.
    var content = $('> div:not(.action)', fieldset);
    $(fieldset).removeClass('collapsed');
    content.hide();
    content.slideDown( {
      duration: 'fast',
      easing: 'linear',
      complete: function() {
        Drupal.collapseScrollIntoView(this.parentNode);
        this.parentNode.animating = false;
        $('div.action', fieldset).show();
      },
      step: function() {
        // Scroll the fieldset into view
        Drupal.collapseScrollIntoView(this.parentNode);
      }
    });
  }
  else {
    $('div.action', fieldset).hide();
    var content = $('> div:not(.action)', fieldset).slideUp('fast', function() {
      $(this.parentNode).addClass('collapsed');
      this.parentNode.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = self.innerHeight || document.documentElement.clientHeight || $('body')[0].clientHeight || 0;
  var offset = self.pageYOffset || document.documentElement.scrollTop || $('body')[0].scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    } else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = function (context) {
  $('fieldset.collapsible > legend:not(.collapse-processed)', context).each(function() {
    var fieldset = $(this.parentNode);
    // Expand if there are errors inside
    if ($('input.error, textarea.error, select.error', fieldset).size() > 0) {
      fieldset.removeClass('collapsed');
    }

    // Turn the legend into a clickable link and wrap the contents of the fieldset
    // in a div for easier animation
    var text = this.innerHTML;
      $(this).empty().append($('<a href="#">'+ text +'</a>').click(function() {
        var fieldset = $(this).parents('fieldset:first')[0];
        // Don't animate multiple times
        if (!fieldset.animating) {
          fieldset.animating = true;
          Drupal.toggleFieldset(fieldset);
        }
        return false;
      }))
      .after($('<div class="fieldset-wrapper"></div>')
      .append(fieldset.children(':not(legend):not(.action)')))
      .addClass('collapse-processed');
  });
};
;

Drupal.behaviors.textarea = function(context) {
  $('textarea.resizable:not(.textarea-processed)', context).each(function() {
    // Avoid non-processed teasers.
    if ($(this).is(('textarea.teaser:not(.teaser-processed)'))) {
      return false;  
    }
    var textarea = $(this).addClass('textarea-processed'), staticOffset = null;

    // When wrapping the text area, work around an IE margin bug.  See:
    // http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout
    $(this).wrap('<div class="resizable-textarea"><span></span></div>')
      .parent().append($('<div class="grippie"></div>').mousedown(startDrag));

    var grippie = $('div.grippie', $(this).parent())[0];
    grippie.style.marginRight = (grippie.offsetWidth - $(this)[0].offsetWidth) +'px';

    function startDrag(e) {
      staticOffset = textarea.height() - e.pageY;
      textarea.css('opacity', 0.25);
      $(document).mousemove(performDrag).mouseup(endDrag);
      return false;
    }

    function performDrag(e) {
      textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
      return false;
    }

    function endDrag(e) {
      $(document).unbind("mousemove", performDrag).unbind("mouseup", endDrag);
      textarea.css('opacity', 1);
    }
  });
};
;
// $Id: teaser.js,v 1.1.2.1 2009/03/21 19:43:51 mfer Exp $

/**
 * Auto-attach for teaser behavior.
 *
 * Note: depends on resizable textareas.
 */
Drupal.behaviors.teaser = function(context) {
  $('textarea.teaser:not(.teaser-processed)', context).each(function() {
    var teaser = $(this).addClass('teaser-processed');

    // Move teaser textarea before body, and remove its form-item wrapper.
    var body = $('#'+ Drupal.settings.teaser[this.id]);
    var checkbox = $('#'+ Drupal.settings.teaserCheckbox[this.id]).parent();
    var checked = $(checkbox).children('input').attr('checked') ? true : false;
    var parent = teaser[0].parentNode;
    $(body).before(teaser);
    $(parent).remove();

    function trim(text) {
      return text.replace(/^\s+/g, '').replace(/\s+$/g, '');
    }

    // Join the teaser back to the body.
    function join_teaser() {
      if (teaser.val()) {
        body.val(trim(teaser.val()) +'\r\n\r\n'+ trim(body.val()));
      }
      // Empty, hide and disable teaser.
      teaser[0].value = '';
      $(teaser).attr('disabled', 'disabled');
      $(teaser).parent().slideUp('fast');
      // Change label.
      $(this).val(Drupal.t('Split summary at cursor'));
      // Hide separate teaser checkbox.
      $(checkbox).hide();
      // Force a hidden checkbox to be checked (to ensure that the body is
      // correctly processed on form submit when teaser/body are in joined
      // state), and remember the current checked status.
      checked = $(checkbox).children('input').attr('checked') ? true : false;
      $(checkbox).children('input').attr('checked', true);
    }

    // Split the teaser from the body.
    function split_teaser() {
      body[0].focus();
      var selection = Drupal.getSelection(body[0]);
      var split = selection.start;
      var text = body.val();

      // Note: using val() fails sometimes. jQuery bug?
      teaser[0].value = trim(text.slice(0, split));
      body[0].value = trim(text.slice(split));
      // Reveal and enable teaser
      $(teaser).attr('disabled', '');
      $(teaser).parent().slideDown('fast');
      // Change label
      $(this).val(Drupal.t('Join summary'));
      // Show separate teaser checkbox, restore checked value.
      $(checkbox).show().children('input').attr('checked', checked);
    }

    // Add split/join button.
    var button = $('<div class="teaser-button-wrapper"><input type="button" class="teaser-button" /></div>');
    var include = $('#'+ this.id.substring(0, this.id.length - 2) +'include');
    $(include).parent().parent().before(button);

    // Extract the teaser from the body, if set. Otherwise, stay in joined mode.
    var text = body.val().split('<!--break-->', 2);
    if (text.length == 2) {
      teaser[0].value = trim(text[0]);
      body[0].value = trim(text[1]);
      $(teaser).attr('disabled', '');
      $('input', button).val(Drupal.t('Join summary')).toggle(join_teaser, split_teaser);
    }
    else {
      $('input', button).val(Drupal.t('Split summary at cursor')).toggle(split_teaser, join_teaser);
      $(checkbox).hide().children('input').attr('checked', true);
    }

    // Make sure that textarea.js has done its magic to ensure proper visibility state.
    if (Drupal.behaviors.textarea && teaser.is(('.form-textarea:not(.textarea-processed)'))) {
      Drupal.behaviors.textarea(teaser.parentNode);
    }
    // Set initial visibility
    if (teaser[0].disabled) {
      teaser.parent().hide();
    }

  });
};
;
/*!
* jQuery Form Plugin
* version: 2.43 (12-MAR-2010)
* @requires jQuery v1.3.2 or later
*
* Examples and documentation at: http://malsup.com/jquery/form/
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/
(function(b){function o(){if(b.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log)window.console.log(a);else window.opera&&window.opera.postError&&window.opera.postError(a)}}b.fn.ajaxSubmit=function(a){function d(){function r(){var p=h.attr("target"),n=h.attr("action");j.setAttribute("target",z);j.getAttribute("method")!="POST"&&j.setAttribute("method","POST");j.getAttribute("action")!=g.url&&j.setAttribute("action",g.url);g.skipEncodingOverride||
h.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});g.timeout&&setTimeout(function(){C=true;s()},g.timeout);var m=[];try{if(g.extraData)for(var u in g.extraData)m.push(b('<input type="hidden" name="'+u+'" value="'+g.extraData[u]+'" />').appendTo(j)[0]);t.appendTo("body");t.data("form-plugin-onload",s);j.submit()}finally{j.setAttribute("action",n);p?j.setAttribute("target",p):h.removeAttr("target");b(m).remove()}}function s(){if(!D){var p=true;try{if(C)throw"timeout";var n,m;m=v.contentWindow?
v.contentWindow.document:v.contentDocument?v.contentDocument:v.document;var u=g.dataType=="xml"||m.XMLDocument||b.isXMLDoc(m);o("isXml="+u);if(!u&&(m.body==null||m.body.innerHTML=="")){if(--G){o("requeing onLoad callback, DOM not available");setTimeout(s,250);return}o("Could not access iframe DOM after 100 tries.");return}o("response detected");D=true;i.responseText=m.body?m.body.innerHTML:null;i.responseXML=m.XMLDocument?m.XMLDocument:m;i.getResponseHeader=function(H){return{"content-type":g.dataType}[H]};
if(g.dataType=="json"||g.dataType=="script"){var E=m.getElementsByTagName("textarea")[0];if(E)i.responseText=E.value;else{var F=m.getElementsByTagName("pre")[0];if(F)i.responseText=F.innerHTML}}else if(g.dataType=="xml"&&!i.responseXML&&i.responseText!=null)i.responseXML=A(i.responseText);n=b.httpData(i,g.dataType)}catch(B){o("error caught:",B);p=false;i.error=B;b.handleError(g,i,"error",B)}if(p){g.success(n,"success");w&&b.event.trigger("ajaxSuccess",[i,g])}w&&b.event.trigger("ajaxComplete",[i,g]);
w&&!--b.active&&b.event.trigger("ajaxStop");if(g.complete)g.complete(i,p?"success":"error");setTimeout(function(){t.removeData("form-plugin-onload");t.remove();i.responseXML=null},100)}}function A(p,n){if(window.ActiveXObject){n=new ActiveXObject("Microsoft.XMLDOM");n.async="false";n.loadXML(p)}else n=(new DOMParser).parseFromString(p,"text/xml");return n&&n.documentElement&&n.documentElement.tagName!="parsererror"?n:null}var j=h[0];if(b(":input[name=submit]",j).length)alert('Error: Form elements must not be named "submit".');
else{var g=b.extend({},b.ajaxSettings,a),q=b.extend(true,{},b.extend(true,{},b.ajaxSettings),g),z="jqFormIO"+(new Date).getTime(),t=b('<iframe id="'+z+'" name="'+z+'" src="'+g.iframeSrc+'" onload="(jQuery(this).data(\'form-plugin-onload\'))()" />'),v=t[0];t.css({position:"absolute",top:"-1000px",left:"-1000px"});var i={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=
1;t.attr("src",g.iframeSrc)}},w=g.global;w&&!b.active++&&b.event.trigger("ajaxStart");w&&b.event.trigger("ajaxSend",[i,g]);if(q.beforeSend&&q.beforeSend(i,q)===false)q.global&&b.active--;else if(!i.aborted){var D=false,C=0;if(q=j.clk){var y=q.name;if(y&&!q.disabled){g.extraData=g.extraData||{};g.extraData[y]=q.value;if(q.type=="image"){g.extraData[y+".x"]=j.clk_x;g.extraData[y+".y"]=j.clk_y}}}g.forceSync?r():setTimeout(r,10);var G=100}}}if(!this.length){o("ajaxSubmit: skipping submit process - no element selected");
return this}if(typeof a=="function")a={success:a};var e=b.trim(this.attr("action"));if(e)e=(e.match(/^([^#]+)/)||[])[1];e=e||window.location.href||"";a=b.extend({url:e,type:this.attr("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a||{});e={};this.trigger("form-pre-serialize",[this,a,e]);if(e.veto){o("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(a.beforeSerialize&&a.beforeSerialize(this,a)===false){o("ajaxSubmit: submit aborted via beforeSerialize callback");
return this}var f=this.formToArray(a.semantic);if(a.data){a.extraData=a.data;for(var c in a.data)if(a.data[c]instanceof Array)for(var l in a.data[c])f.push({name:c,value:a.data[c][l]});else f.push({name:c,value:a.data[c]})}if(a.beforeSubmit&&a.beforeSubmit(f,this,a)===false){o("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[f,this,a,e]);if(e.veto){o("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}c=b.param(f);if(a.type.toUpperCase()==
"GET"){a.url+=(a.url.indexOf("?")>=0?"&":"?")+c;a.data=null}else a.data=c;var h=this,k=[];a.resetForm&&k.push(function(){h.resetForm()});a.clearForm&&k.push(function(){h.clearForm()});if(!a.dataType&&a.target){var x=a.success||function(){};k.push(function(r){var s=a.replaceTarget?"replaceWith":"html";b(a.target)[s](r).each(x,arguments)})}else a.success&&k.push(a.success);a.success=function(r,s,A){for(var j=0,g=k.length;j<g;j++)k[j].apply(a,[r,s,A||h,h])};c=b("input:file",this).fieldValue();l=false;
for(e=0;e<c.length;e++)if(c[e])l=true;if(c.length&&a.iframe!==false||a.iframe||l||0)a.closeKeepAlive?b.get(a.closeKeepAlive,d):d();else b.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};b.fn.ajaxForm=function(a){return this.ajaxFormUnbind().bind("submit.form-plugin",function(d){d.preventDefault();b(this).ajaxSubmit(a)}).bind("click.form-plugin",function(d){var e=d.target,f=b(e);if(!f.is(":submit,input:image")){e=f.closest(":submit");if(e.length==0)return;e=e[0]}var c=this;c.clk=e;
if(e.type=="image")if(d.offsetX!=undefined){c.clk_x=d.offsetX;c.clk_y=d.offsetY}else if(typeof b.fn.offset=="function"){f=f.offset();c.clk_x=d.pageX-f.left;c.clk_y=d.pageY-f.top}else{c.clk_x=d.pageX-e.offsetLeft;c.clk_y=d.pageY-e.offsetTop}setTimeout(function(){c.clk=c.clk_x=c.clk_y=null},100)})};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(a){var d=[];if(this.length==0)return d;var e=this[0],f=a?e.getElementsByTagName("*"):e.elements;
if(!f)return d;for(var c=0,l=f.length;c<l;c++){var h=f[c],k=h.name;if(k)if(a&&e.clk&&h.type=="image"){if(!h.disabled&&e.clk==h){d.push({name:k,value:b(h).val()});d.push({name:k+".x",value:e.clk_x},{name:k+".y",value:e.clk_y})}}else if((h=b.fieldValue(h,true))&&h.constructor==Array)for(var x=0,r=h.length;x<r;x++)d.push({name:k,value:h[x]});else h!==null&&typeof h!="undefined"&&d.push({name:k,value:h})}if(!a&&e.clk){a=b(e.clk);f=a[0];if((k=f.name)&&!f.disabled&&f.type=="image"){d.push({name:k,value:a.val()});
d.push({name:k+".x",value:e.clk_x},{name:k+".y",value:e.clk_y})}}return d};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};b.fn.fieldSerialize=function(a){var d=[];this.each(function(){var e=this.name;if(e){var f=b.fieldValue(this,a);if(f&&f.constructor==Array)for(var c=0,l=f.length;c<l;c++)d.push({name:e,value:f[c]});else f!==null&&typeof f!="undefined"&&d.push({name:this.name,value:f})}});return b.param(d)};b.fn.fieldValue=function(a){for(var d=[],e=0,f=this.length;e<f;e++){var c=
b.fieldValue(this[e],a);c===null||typeof c=="undefined"||c.constructor==Array&&!c.length||(c.constructor==Array?b.merge(d,c):d.push(c))}return d};b.fieldValue=function(a,d){var e=a.name,f=a.type,c=a.tagName.toLowerCase();if(typeof d=="undefined")d=true;if(d&&(!e||a.disabled||f=="reset"||f=="button"||(f=="checkbox"||f=="radio")&&!a.checked||(f=="submit"||f=="image")&&a.form&&a.form.clk!=a||c=="select"&&a.selectedIndex==-1))return null;if(c=="select"){c=a.selectedIndex;if(c<0)return null;d=[];a=a.options;
e=(f=f=="select-one")?c+1:a.length;for(c=f?c:0;c<e;c++){var l=a[c];if(l.selected){var h=l.value;h||(h=l.attributes&&l.attributes.value&&!l.attributes.value.specified?l.text:l.value);if(f)return h;d.push(h)}}return d}return a.value};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var a=this.type,d=this.tagName.toLowerCase();if(a=="text"||a=="password"||d=="textarea")this.value=
"";else if(a=="checkbox"||a=="radio")this.checked=false;else if(d=="select")this.selectedIndex=-1})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||typeof this.reset=="object"&&!this.reset.nodeType)this.reset()})};b.fn.enable=function(a){if(a==undefined)a=true;return this.each(function(){this.disabled=!a})};b.fn.selected=function(a){if(a==undefined)a=true;return this.each(function(){var d=this.type;if(d=="checkbox"||d=="radio")this.checked=a;else if(this.tagName.toLowerCase()==
"option"){d=b(this).parent("select");a&&d[0]&&d[0].type=="select-one"&&d.find("option").selected(false);this.selected=a}})}})(jQuery);
;
// $Id: ahah.js,v 1.1.2.1 2009/03/21 19:43:51 mfer Exp $

/**
 * Provides AJAX-like page updating via AHAH (Asynchronous HTML and HTTP).
 *
 * AHAH is a method of making a request via Javascript while viewing an HTML
 * page. The request returns a small chunk of HTML, which is then directly
 * injected into the page.
 *
 * Drupal uses this file to enhance form elements with #ahah[path] and
 * #ahah[wrapper] properties. If set, this file will automatically be included
 * to provide AHAH capabilities.
 */

/**
 * Attaches the ahah behavior to each ahah form element.
 */
Drupal.behaviors.ahah = function(context) {
  for (var base in Drupal.settings.ahah) {
    if (!$('#'+ base + '.ahah-processed').size()) {
      var element_settings = Drupal.settings.ahah[base];

      $(element_settings.selector).each(function() {
        element_settings.element = this;
        var ahah = new Drupal.ahah(base, element_settings);
      });

      $('#'+ base).addClass('ahah-processed');
    }
  }
};

/**
 * AHAH object.
 */
Drupal.ahah = function(base, element_settings) {
  // Set the properties for this object.
  this.element = element_settings.element;
  this.selector = element_settings.selector;
  this.event = element_settings.event;
  this.keypress = element_settings.keypress;
  this.url = element_settings.url;
  this.wrapper = '#'+ element_settings.wrapper;
  this.effect = element_settings.effect;
  this.method = element_settings.method;
  this.progress = element_settings.progress;
  this.button = element_settings.button || { };

  if (this.effect == 'none') {
    this.showEffect = 'show';
    this.hideEffect = 'hide';
    this.showSpeed = '';
  }
  else if (this.effect == 'fade') {
    this.showEffect = 'fadeIn';
    this.hideEffect = 'fadeOut';
    this.showSpeed = 'slow';
  }
  else {
    this.showEffect = this.effect + 'Toggle';
    this.hideEffect = this.effect + 'Toggle';
    this.showSpeed = 'slow';
  }

  // Record the form action and target, needed for iFrame file uploads.
  var form = $(this.element).parents('form');
  this.form_action = form.attr('action');
  this.form_target = form.attr('target');
  this.form_encattr = form.attr('encattr');

  // Set the options for the ajaxSubmit function.
  // The 'this' variable will not persist inside of the options object.
  var ahah = this;
  var options = {
    url: ahah.url,
    data: ahah.button,
    beforeSubmit: function(form_values, element_settings, options) {
      return ahah.beforeSubmit(form_values, element_settings, options);
    },
    success: function(response, status) {
      // Sanity check for browser support (object expected).
      // When using iFrame uploads, responses must be returned as a string.
      if (typeof(response) == 'string') {
        response = Drupal.parseJson(response);
      }
      return ahah.success(response, status);
    },
    complete: function(response, status) {
      if (status == 'error' || status == 'parsererror') {
        return ahah.error(response, ahah.url);
      }
    },
    dataType: 'json',
    type: 'POST'
  };

  // Bind the ajaxSubmit function to the element event.
  $(element_settings.element).bind(element_settings.event, function() {
    $(element_settings.element).parents('form').ajaxSubmit(options);
    return false;
  });
  // If necessary, enable keyboard submission so that AHAH behaviors
  // can be triggered through keyboard input as well as e.g. a mousedown
  // action.
  if (element_settings.keypress) {
    $(element_settings.element).keypress(function(event) {
      // Detect enter key.
      if (event.keyCode == 13) {
        $(element_settings.element).trigger(element_settings.event);
        return false;
      }
    });
  }
};

/**
 * Handler for the form redirection submission.
 */
Drupal.ahah.prototype.beforeSubmit = function (form_values, element, options) {
  // Disable the element that received the change.
  $(this.element).addClass('progress-disabled').attr('disabled', true);

  // Insert progressbar or throbber.
  if (this.progress.type == 'bar') {
    var progressBar = new Drupal.progressBar('ahah-progress-' + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ahah-progress ahah-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  }
  else if (this.progress.type == 'throbber') {
    this.progress.element = $('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      $('.throbber', this.progress.element).after('<div class="message">' + this.progress.message + '</div>')
    }
    $(this.element).after(this.progress.element);
  }
};

/**
 * Handler for the form redirection completion.
 */
Drupal.ahah.prototype.success = function (response, status) {
  var wrapper = $(this.wrapper);
  var form = $(this.element).parents('form');
  // Manually insert HTML into the jQuery object, using $() directly crashes
  // Safari with long string lengths. http://dev.jquery.com/ticket/1152
  var new_content = $('<div></div>').html(response.data);

  // Restore the previous action and target to the form.
  form.attr('action', this.form_action);
  this.form_target ? form.attr('target', this.form_target) : form.removeAttr('target');
  this.form_encattr ? form.attr('target', this.form_encattr) : form.removeAttr('encattr');

  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  $(this.element).removeClass('progress-disabled').attr('disabled', false);

  // Add the new content to the page.
  Drupal.freezeHeight();
  if (this.method == 'replace') {
    wrapper.empty().append(new_content);
  }
  else {
    wrapper[this.method](new_content);
  }

  // Immediately hide the new content if we're using any effects.
  if (this.showEffect != 'show') {
    new_content.hide();
  }

  // Determine what effect use and what content will receive the effect, then
  // show the new content.
  if ($('.ahah-new-content', new_content).size() > 0) {
    $('.ahah-new-content', new_content).hide();
    new_content.show();
    $(".ahah-new-content", new_content)[this.showEffect](this.showSpeed);
  }
  else if (this.showEffect != 'show') {
    new_content[this.showEffect](this.showSpeed);
  }

  // Attach all javascript behaviors to the new content, if it was successfully
  // added to the page, this if statement allows #ahah[wrapper] to be optional.
  if (new_content.parents('html').length > 0) {
    Drupal.attachBehaviors(new_content);
  }

  Drupal.unfreezeHeight();
};

/**
 * Handler for the form redirection error.
 */
Drupal.ahah.prototype.error = function (response, uri) {
  alert(Drupal.ahahError(response, uri));
  // Resore the previous action and target to the form.
  $(this.element).parent('form').attr( { action: this.form_action, target: this.form_target} );
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  // Undo hide.
  $(this.wrapper).show();
  // Re-enable the element.
  $(this.element).removeClass('progess-disabled').attr('disabled', false);
};
;

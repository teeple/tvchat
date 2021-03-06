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
// $Id: base.js,v 1.11.2.1 2010/03/10 20:08:58 merlinofchaos Exp $
/**
 * @file base.js
 *
 * Some basic behaviors and utility functions for Views.
 */

Drupal.Views = {};

/**
 * jQuery UI tabs, Views integration component
 */
Drupal.behaviors.viewsTabs = function (context) {
  $('#views-tabset:not(.views-processed)').addClass('views-processed').each(function() {
    new Drupal.Views.Tabs($(this), {selectedClass: 'active'});
  });

  $('a.views-remove-link')
    .addClass('views-processed')
    .click(function() {
      var id = $(this).attr('id').replace('views-remove-link-', '');
      $('#views-row-' + id).hide();
      $('#views-removed-' + id).attr('checked', true);
      return false;
    });
}

/**
 * For IE, attach some javascript so that our hovers do what they're supposed
 * to do.
 */
Drupal.behaviors.viewsHoverlinks = function() {
  if ($.browser.msie) {
    // If IE, attach a hover event so we can see our admin links.
    $("div.view:not(.views-hover-processed)").addClass('views-hover-processed').hover(
      function() {
        $('div.views-hide', this).addClass("views-hide-hover"); return true;
      },
      function(){
        $('div.views-hide', this).removeClass("views-hide-hover"); return true;
      }
    );
    $("div.views-admin-links:not(.views-hover-processed)")
      .addClass('views-hover-processed')
      .hover(
        function() {
          $(this).addClass("views-admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("views-admin-links-hover"); return true;
        }
      );
  }
}

/**
 * Helper function to parse a querystring.
 */
Drupal.Views.parseQueryString = function (query) {
  var args = {};
  var pos = query.indexOf('?');
  if (pos != -1) {
    query = query.substring(pos + 1);
  }
  var pairs = query.split('&');
  for(var i in pairs) {
    var pair = pairs[i].split('=');
    // Ignore the 'q' path argument, if present.
    if (pair[0] != 'q' && pair[1]) {
      args[pair[0]] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
    }
  }
  return args;
};

/**
 * Helper function to return a view's arguments based on a path.
 */
Drupal.Views.parseViewArgs = function (href, viewPath) {
  var returnObj = {};
  var path = Drupal.Views.getPath(href);
  // Ensure we have a correct path.
  if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
    var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
    returnObj.view_args = args;
    returnObj.view_path = path;
  }
  return returnObj;
};

/**
 * Strip off the protocol plus domain from an href.
 */
Drupal.Views.pathPortion = function (href) {
  // Remove e.g. http://example.com if present.
  var protocol = window.location.protocol;
  if (href.substring(0, protocol.length) == protocol) {
    // 2 is the length of the '//' that normally follows the protocol
    href = href.substring(href.indexOf('/', protocol.length + 2));
  }
  return href;
};

/**
 * Return the Drupal path portion of an href.
 */
Drupal.Views.getPath = function (href) {
  href = Drupal.Views.pathPortion(href);
  href = href.substring(Drupal.settings.basePath.length, href.length);
  // 3 is the length of the '?q=' added to the url without clean urls.
  if (href.substring(0, 3) == '?q=') {
    href = href.substring(3, href.length);
  }
  var chars = ['#', '?', '&'];
  for (i in chars) {
    if (href.indexOf(chars[i]) > -1) {
      href = href.substr(0, href.indexOf(chars[i]));
    }
  }
  return href;
};
;
// $Id: dependent.js,v 1.9.2.1 2009/11/18 02:43:47 merlinofchaos Exp $
/**
 * @file dependent.js
 *
 * Written by dmitrig01 (Dmitri Gaskin) for Views; this provides dependent
 * visibility for form items in Views' ajax forms.
 *
 * To your $form item definition add:
 * - '#process' => array('views_process_dependency'),
 * - Add '#dependency' => array('id-of-form-item' => array(list, of, values, that,
     make, this, item, show),
 *
 * Special considerations:
 * - radios are harder. Because Drupal doesn't give radio groups individual ids,
 *   use 'radio:name-of-radio'
 *
 * - Checkboxes don't have their own id, so you need to add one in a div
 *   around the checkboxes via #prefix and #suffix. You actually need to add TWO
 *   divs because it's the parent that gets hidden. Also be sure to retain the
 *   'expand_checkboxes' in the #process array, because the views process will
 *   override it.
 */

Drupal.Views = Drupal.Views || {};

Drupal.Views.dependent = { bindings: {}, activeBindings: {}, activeTriggers: [] };

Drupal.Views.dependent.inArray = function(array, search_term) {
  var i = array.length;
  if (i > 0) {
   do {
    if (array[i] == search_term) {
       return true;
    }
   } while (i--);
  }
  return false;
}


Drupal.Views.dependent.autoAttach = function() {
  // Clear active bindings and triggers.
  for (i in Drupal.Views.dependent.activeTriggers) {
    jQuery(Drupal.Views.dependent.activeTriggers[i]).unbind('change');
  }
  Drupal.Views.dependent.activeTriggers = [];
  Drupal.Views.dependent.activeBindings = {};
  Drupal.Views.dependent.bindings = {};

  if (!Drupal.settings.viewsAjax) {
    return;
  }

  // Iterate through all relationships
  for (id in Drupal.settings.viewsAjax.formRelationships) {

    // Drupal.Views.dependent.activeBindings[id] is a boolean,
    // whether the binding is active or not.  Defaults to no.
    Drupal.Views.dependent.activeBindings[id] = 0;
    // Iterate through all possible values
    for(bind_id in Drupal.settings.viewsAjax.formRelationships[id].values) {
      // This creates a backward relationship.  The bind_id is the ID
      // of the element which needs to change in order for the id to hide or become shown.
      // The id is the ID of the item which will be conditionally hidden or shown.
      // Here we're setting the bindings for the bind
      // id to be an empty array if it doesn't already have bindings to it
      if (!Drupal.Views.dependent.bindings[bind_id]) {
        Drupal.Views.dependent.bindings[bind_id] = [];
      }
      // Add this ID
      Drupal.Views.dependent.bindings[bind_id].push(id);
      // Big long if statement.
      // Drupal.settings.viewsAjax.formRelationships[id].values[bind_id] holds the possible values

      if (bind_id.substring(0, 6) == 'radio:') {
        var trigger_id = "input[name='" + bind_id.substring(6) + "']";
      }
      else {
        var trigger_id = '#' + bind_id;
      }

      Drupal.Views.dependent.activeTriggers.push(trigger_id);

      if (jQuery(trigger_id).attr('type') == 'checkbox') {
        $(trigger_id).parent().addClass('hidden-options');
      }

      var getValue = function(item, trigger) {
        if (item.substring(0, 6) == 'radio:') {
          var val = jQuery(trigger + ':checked').val();
        }
        else {
          switch (jQuery(trigger).attr('type')) {
            case 'checkbox':
              var val = jQuery(trigger).attr('checked') || 0;

              if (val) {
                $(trigger).parent().removeClass('hidden-options').addClass('expanded-options');
              }
              else {
                $(trigger).parent().removeClass('expanded-options').addClass('hidden-options');
              }

              break;
            default:
              var val = jQuery(trigger).val();
          }
        }
        return val;
      }

      var setChangeTrigger = function(trigger_id, bind_id) {
        // Triggered when change() is clicked.
        var changeTrigger = function() {
          var val = getValue(bind_id, trigger_id);

          for (i in Drupal.Views.dependent.bindings[bind_id]) {
            var id = Drupal.Views.dependent.bindings[bind_id][i];

            // Fix numerous errors
            if (typeof id != 'string') {
              continue;
            }

            // This bit had to be rewritten a bit because two properties on the
            // same set caused the counter to go up and up and up.
            if (!Drupal.Views.dependent.activeBindings[id]) {
              Drupal.Views.dependent.activeBindings[id] = {};
            }

            if (Drupal.Views.dependent.inArray(Drupal.settings.viewsAjax.formRelationships[id].values[bind_id], val)) {
              Drupal.Views.dependent.activeBindings[id][bind_id] = 'bind';
            }
            else {
              delete Drupal.Views.dependent.activeBindings[id][bind_id];
            }

            var len = 0;
            for (i in Drupal.Views.dependent.activeBindings[id]) {
              len++;
            }

            var object = jQuery('#' + id + '-wrapper');
            if (!object.size()) {
              object = jQuery('#' + id).parent();
            }

            var rel_num = Drupal.settings.viewsAjax.formRelationships[id].num;
            if (typeof rel_num === 'object') {
              rel_num = Drupal.settings.viewsAjax.formRelationships[id].num[0];
            }

            if (rel_num <= len) {
              // Show if the element if criteria is matched
              object.show(0);
              object.addClass('dependent-options');
            }
            else {
              // Otherwise hide
              object.hide(0);
            }
          }
        }

        jQuery(trigger_id).change(function() {
          // Trigger the internal change function
          // the attr('id') is used because closures are more confusing
          changeTrigger(trigger_id, bind_id);
        });
        // Trigger initial reaction
        changeTrigger(trigger_id, bind_id);
      }
      setChangeTrigger(trigger_id, bind_id);
    }
  }
}

Drupal.behaviors.viewsDependent = function (context) {
  Drupal.Views.dependent.autoAttach();

  // Really large sets of fields are too slow with the above method, so this
  // is a sort of hacked one that's faster but much less flexible.
  $("select.views-master-dependent:not(.views-processed)")
    .addClass('views-processed')
    .change(function() {
      var val = $(this).val();
      if (val == 'all') {
        $('.views-dependent-all').show(0);
      }
      else {
        $('.views-dependent-all').hide(0);
        $('.views-dependent-' + val).show(0);
      }
    })
    .trigger('change');
}
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
(function ($) {
// START jQuery

Drupal.vbo = Drupal.vbo || {};

Drupal.behaviors.vbo = function(context) {
  // Force Firefox to reload the page if Back is hit.
  // https://developer.mozilla.org/en/Using_Firefox_1.5_caching
  window.onunload = function(){}

  // Prepare VBO forms for processing.
  $('form.views-bulk-operations-form', context)
    .not('.views-bulk-operations-form-step-2, .views-bulk-operations-form-step-3')
    .each(Drupal.vbo.prepareAction)
    .each(Drupal.vbo.prepareSelectors);
}

Drupal.vbo.selectionModes = {
  all: 1,
  allPages: 2,
  none: 3
}

Drupal.vbo.prepareSelectors = function() {
  var $form = $(this);
  var form_id = $form.attr('id');

  $('select.views-bulk-operations-selector', $form).change(function() {
    if (this.options[this.selectedIndex].value == Drupal.vbo.selectionModes.all || this.options[this.selectedIndex].value == Drupal.vbo.selectionModes.allPages) {
      var selection = {};
      $('input:checkbox.vbo-select', $form).each(function() {
        this.checked = true;
        $(this).parents('tr:first').addClass('selected');
        selection[this.value] = 1;
      });
      selection['selectall'] = this.options[this.selectedIndex].value == Drupal.vbo.selectionModes.allPages ? 1 : 0;
      $('input#edit-objects-selectall', $form).val(selection['selectall']);

      if (Drupal.settings.vbo[form_id].options.preserve_selection) {
        $.post(Drupal.settings.vbo[form_id].ajax_select, {view_name: Drupal.settings.vbo[form_id].view_name, view_id: Drupal.settings.vbo[form_id].view_id, selection: JSON.stringify(selection)});
      }
    }
    else if (this.options[this.selectedIndex].value == Drupal.vbo.selectionModes.none) {
      $('input:checkbox.vbo-select', $form).each(function() {
        this.checked = false;
        $(this).parents('tr:first').removeClass('selected');
      });
      $('input#edit-objects-selectall', $form).val(0);

      if (Drupal.settings.vbo[form_id].options.preserve_selection) {
        $.post(Drupal.settings.vbo[form_id].ajax_select, {view_name: Drupal.settings.vbo[form_id].view_name, view_id: Drupal.settings.vbo[form_id].view_id, selection: JSON.stringify({'selectall': -1})});
      }
    }
  });

  $('#views-bulk-operations-dropdown select', $form).change(function() {
    if (Drupal.settings.vbo[form_id].options.preserve_selection) {
      $.post(Drupal.settings.vbo[form_id].ajax_select, {view_name: Drupal.settings.vbo[form_id].view_name, view_id: Drupal.settings.vbo[form_id].view_id, selection: JSON.stringify({'operation': this.options[this.selectedIndex].value})});
    }
  });

  $(':checkbox.vbo-select', $form).click(function() {
    var selection = {};
    selection[this.value] = this.checked ? 1 : 0;
    $(this).parents('tr:first')[ this.checked ? 'addClass' : 'removeClass' ]('selected');

    if (Drupal.settings.vbo[form_id].options.preserve_selection) {
      $.post(Drupal.settings.vbo[form_id].ajax_select, {view_name: Drupal.settings.vbo[form_id].view_name, view_id: Drupal.settings.vbo[form_id].view_id, selection: JSON.stringify(selection)});
    }
  }).each(function() {
    $(this).parents('tr:first')[ this.checked ? 'addClass' : 'removeClass' ]('selected');
  });

  // Set up the ability to click anywhere on the row to select it.
  $('tr.rowclick', $form).click(function(event) {
    if (event.target.nodeName.toLowerCase() != 'input' && event.target.nodeName.toLowerCase() != 'a') {
      $(':checkbox.vbo-select', this).each(function() {
        var checked = this.checked;
        // trigger() toggles the checkmark *after* the event is set,
        // whereas manually clicking the checkbox toggles it *beforehand*.
        // that's why we manually set the checkmark first, then trigger the
        // event (so that listeners get notified), then re-set the checkmark
        // which the trigger will have toggled. yuck!
        this.checked = !checked;
        $(this).trigger('click');
        this.checked = !checked;
      });
    }
  });
}

Drupal.vbo.prepareAction = function() {
  // Skip if no view is Ajax-enabled.
  if (typeof(Drupal.settings.views) == "undefined" || typeof(Drupal.settings.views.ajaxViews) == "undefined") return;

  var $form = $(this);
  $.each(Drupal.settings.views.ajaxViews, function(i, view) {
    if (view.view_name == Drupal.settings.vbo[$form.attr('id')].view_name) {
      var action = $form.attr('action');
      var params = {};
      var query = action.replace(/.*?\?/, '').split('&');
      var cleanUrl = true, replaceAction = false;
      $.each(query, function(i, str) {
        var element = str.split('=');
        if (element[0] == 'view_path') {
          action = decodeURIComponent(element[1]);
          replaceAction = true;
        }
        else if (element[0] == 'q') {
          cleanUrl = false;
        }
        else if (typeof(view[element[0]]) == 'undefined' && typeof(element[1]) != 'undefined') {
          params[element[0]] = element[1];
        }
      });
      if (replaceAction) {
        params = $.param(params);
        if (cleanUrl) {
          action = Drupal.settings.basePath + action;
        }
        else {
          params = 'q=' + action + (params.length > 0 ? '&' + params : '');
          action = Drupal.settings.basePath;
        }
        $form.attr('action', action + (params.length > 0 ? '?' + params : ''));
      }
    }
  });
}

Drupal.vbo.ajaxViewResponse = function(target, response) {
  $.each(Drupal.settings.vbo, function(form_dom_id, settings) {
    if (settings.form_id == response.vbo.form_id) {
      Drupal.settings.vbo[form_dom_id].view_id = response.vbo.view_id;
    }
  });
}

// END jQuery
})(jQuery);
;
/*
    http://www.JSON.org/json2.js
    2010-11-17

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
;

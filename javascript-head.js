snippet_count = 175;
//<![CDATA[
function removeHtmlTag(n,e){if(-1!=n.indexOf("<")){for(var t=n.split("<"),i=0;i<t.length;i++)-1!=t[i].indexOf(">")&&(t[i]=t[i].substring(t[i].indexOf(">")+1,t[i].length));n=t.join("")}for(e=e<n.length-1?e:n.length-2;" "!=n.charAt(e-1)&&-1!=n.indexOf(" ",e);)e++;return n=n.substring(0,e-1),n+"..."}function createSnippet(n){var e=document.getElementById(n),t=snippet_count,i='<div class="snippets">'+removeHtmlTag(e.innerHTML,t)+"</div>";e.innerHTML=i}
//]]>

//<![CDATA[

/*!
 * liScroll 1.0
 * Examples and documentation at: 
 * http://www.gcmingati.net/wordpress/wp-content/lab/jquery/newsticker/jq-liscroll/scrollanimate.html
 * 2007-2010 Gian Carlo Mingati
 * Version: 1.0.2.1 (22-APRIL-2011)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires:
 * jQuery v1.2.x or later
 * 
 */
jQuery.fn.liScroll=function(t){return t=jQuery.extend({travelocity:.07},t),this.each(function(){function i(t,r){e.animate({left:"-="+t},r,"linear",function(){e.css("left",n),i(a,c)})}var e=jQuery(this);e.addClass("newsticker");var r=1;e.find("li").each(function(t){r+=jQuery(this,t).outerWidth(!0)});var n=(e.wrap("<div class='mask'></div>"),e.parent().wrap("<div class='tickercontainer'></div>"),e.parent().parent().width());e.width(r);var a=r+n,c=a/t.travelocity;i(a,c),e.hover(function(){jQuery(this).stop()},function(){var e=jQuery(this).offset(),n=e.left+r,a=n/t.travelocity;i(n,a)})})};
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(){function a(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function l(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function n(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(r){setTimeout(function(){throw r},1)}if("scroll"===C){var u,w,z,A=/^x$/i.test(h.axis)?"Left":"Top",D=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,u=h.container["scroll"+A],z=u+m(f).position()[A.toLowerCase()]+D):h.container=null:(u=t.State.scrollAnchor[t.State["scrollProperty"+A]],w=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===A?"Top":"Left")]],z=m(f).offset()[A.toLowerCase()]+D),i={scroll:{rootPropertyValue:!1,startValue:u,currentValue:u,endValue:z,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:A,alternateValue:w}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var E=m.extend(!0,{},g(f).tweensContainer);for(var F in E)if("element"!==F){var G=E[F].startValue;E[F].startValue=E[F].currentValue=E[F].endValue,E[F].endValue=G,p.isEmptyObject(s)||(E[F].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(E[F]),f)}i=E}else if("start"===C){var E;g(f).tweensContainer&&g(f).isAnimating===!0&&(E=g(f).tweensContainer),m.each(q,function(b,c){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(b)){var e=a(c,!0),f=e[0],g=e[1],h=e[2];if(v.RegEx.isHex.test(f)){for(var i=["Red","Green","Blue"],j=v.Values.hexToRgb(f),k=h?v.Values.hexToRgb(h):d,l=0;l<i.length;l++){var m=[j[l]];g&&m.push(g),k!==d&&m.push(k[l]),q[b+i[l]]=m}delete q[b]}}});for(var H in q){var K=a(q[H]),L=K[0],M=K[1],N=K[2];H=v.Names.camelCase(H);var O=v.Hooks.getRoot(H),P=!1;if(g(f).isSVG||"tween"===O||v.Names.prefixCheck(O)[1]!==!1||v.Normalizations.registered[O]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(H)&&!N&&0!==L&&(N=0),h._cacheValues&&E&&E[H]?(N===d&&(N=E[H].endValue+E[H].unitType),P=g(f).rootPropertyValueCache[O]):v.Hooks.registered[H]?N===d?(P=v.getPropertyValue(f,O),N=v.getPropertyValue(f,H,P)):P=v.Hooks.templates[O][1]:N===d&&(N=v.getPropertyValue(f,H));var Q,R,S,T=!1;if(Q=l(H,N),N=Q[0],S=Q[1],Q=l(H,L),L=Q[0].replace(/^([+-\/*])=/,function(a,b){return T=b,""}),R=Q[1],N=parseFloat(N)||0,L=parseFloat(L)||0,"%"===R&&(/^(fontSize|lineHeight)$/.test(H)?(L/=100,R="em"):/^scale/.test(H)?(L/=100,R=""):/(Red|Green|Blue)$/i.test(H)&&(L=L/100*255,R="")),/[\/*]/.test(T))R=S;else if(S!==R&&0!==N)if(0===L)R=S;else{e=e||n();var U=/margin|padding|left|right|width|text|word|letter/i.test(H)||/X$/.test(H)||"x"===H?"x":"y";switch(S){case"%":N*="x"===U?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:N*=e[S+"ToPx"]}switch(R){case"%":N*=1/("x"===U?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:N*=1/e[R+"ToPx"]}}switch(T){case"+":L=N+L;break;case"-":L=N-L;break;case"*":L=N*L;break;case"/":L=N/L}i[H]={rootPropertyValue:P,startValue:N,currentValue:N,endValue:L,unitType:R,easing:M},t.debug&&console.log("tweensContainer ("+H+"): "+JSON.stringify(i[H]),f)}else t.debug&&console.log("Skipping ["+O+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish|finishAll)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"finishAll":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==q||s!==!0&&!p.isString(s)||(m.each(m.queue(b,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b()}),m.queue(b,p.isString(s)?s:"",[]))});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)
}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):("finish"===q||"finishAll"===q)&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)});

// Owl
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("src")||e.attr("src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("src-retina")||f.attr("src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);
/*!
	Colorbox 1.6.3
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=n("button","Slideshow"),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=_.get("createImg"),t(U).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(U.style.cursor="pointer",t(U).bind("click."+Z,function(){J.next()})),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);



// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: ''
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('position', '')
              .css('top', '');
            s.stickyElement.parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();
    },
    methods = {
      init: function(options) {
        var o = $.extend(defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom
          });
        });
      },
      update: scroller
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);

//]]>

//<![CDATA[

// Template Settings Starts Here
var defaultImgUrl='https://3.bp.blogspot.com/-XB85UD145qE/V5buf22iv2I/AAAAAAAAA1I/8LBmpwNX-rU7ZjzrHOS2b0F_Pj0xqpHIQCLcB/s1600/nia.png';
var disqus_short_name='demoblog12'; // Disqus shortname
var related_post_max=5;
var sticky_navigation=true;
var also_read_section=true;
var subscribe_widget=true;
var author_widget=true;
  var comment_system={
    blogger:true,
    disqus:true,
    facebook:true
  }
// Change Text
var View_All_Text='View All';
var Also_Read_Text='Also Read';
	var Ticker_Text='<i class="fa fa-rss"></i> Recent News';
  var Tab_Text={
    tab_recent:"Recent",
    tab_random:"Random",
    tab_comment:"Comment"
  }

// Pagination
    var perPage=7;
    var numPages=6;
    var firstText ='First';
    var lastText ='Last';
    var prevText ='« Previous';
    var nextText ='Next »';
// Template Settings end Here



var loaderHTML = '';

function getauthor(t) {
    return ""
}
if (sticky_navigation) {
    $(function() {
        $(".main-navigation").sticky({
            topSpacing: 0
        })
    })
}

function getAnyR() {
    var allRecent = $('.genova-load').not('.genova-loaded').first();
    allRecent.addClass('genova-recent min-height-need');
    var current = allRecent;
    if (!current.hasClass('loaded-c')) {
        switch (current.attr('data-genova')) {
            case "gallery":
                current.addClass('loaded-c recent-gal');
                current.addClass('hide-load genova-loaded');
                getgal(current);
                break;
            case "strips":
                current.addClass('loaded-c recent-strip');
                current.addClass('hide-load genova-loaded');
                getStrips(current);
                break;
            case "simple":
                current.addClass('loaded-c recent-single');
                current.addClass('hide-load genova-loaded');
                getSingle(current);
                break;
            case "sidebar":
                current.addClass('loaded-c recent-sidebar');
                current.addClass('hide-load genova-loaded');
                get_side(current);
                break;
            case "slider":
                current.addClass('loaded-c recent-slider');
                current.addClass('hide-load genova-loaded');
                getSlider(current);
                break;
            case "cards":
                current.addClass('loaded-c recent-cards');
                current.addClass('hide-load genova-loaded');
                getcards(current);
                break;
            case "single":
                current.addClass('loaded-c recent-simple-single');
                current.addClass('hide-load genova-loaded');
                get_single(current);
                break;
            case "headline":
                current.addClass('loaded-c recent-headline');
                current.addClass('hide-load genova-loaded');
                get_headline(current);
                break;
            case "big-wide":
                current.addClass('loaded-c recent-wide');
                current.addClass('hide-load genova-loaded');
                get_somewide(current);
                break;
            case "wide-tabs":
                current.addClass('loaded-c recent-w-tabs');
                current.addClass('hide-load genova-loaded');
                getwtabs(current);
                break;
            case "stack":
                current.addClass('loaded-c simple-cards');
                current.addClass('hide-load genova-loaded');
                getSimpleCards(current);
                break;
            case "video":
                current.addClass('loaded-c simple-cards');
                current.addClass('hide-load genova-loaded');
                getVideo(current);
                break
        }
    }
}
$(function() {
    $('.navicon').click(function() {
        $('.side-panel,.panel-mask').addClass('active');
        $(this).addClass('active')
    });
    $('.panel-close,.panel-mask').click(function() {
        $('.side-panel,.panel-mask,.navicon').removeClass('active')
    });

    function getFirstC(e) {
        if (e.category === undefined) {
            return false
        } else {
            return e.category[0].term
        }
    }
    $("[data-genova='ticker']").each(function() {
        var a = "/feeds/posts/summary/?max-results=10&alt=json-in-script",
            e = $(this);
        $.ajax({
            type: "GET",
            url: a,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(a) {
                var t = a.feed.entry;
                if (t) {
                    e.append('<div class="inner"><span class="ticker-label">' + Ticker_Text + '</span><ul class="ticker-inner"></ul></div>');
                    for (var s = 0; s < t.length; s++) {
                        for (var l, n = t[s], i = 0; i < n.link.length; i++)
                            if ("alternate" == n.link[i].rel) {
                                var r = n.link[i].href;
                                break
                            }
                        l = void 0 !== n.media$thumbnail ? n.media$thumbnail.url : defaultImgUrl;
                        var d = n.title.$t,
                            c = getFirstC(n);
                        if (c) {
                            var labelC = "<a class='recentLabel currentLabel' href='/search/label/" + c + "'>" + c + "</a>"
                        } else {
                            var labelC = "<a class='recentLabel currentLabel' href='#'>No Label</a>"
                        }
                        var o = '<li><a href="' + r + '"><img  class="toLoad" src="' + l + '" title="' + d + '"/></a><div class="content">' + labelC + '<h3><a href="' + r + '">' + d + "</a></h3></div></li>";
                        e.find("ul.ticker-inner").append(o)
                    }
                    e.find("ul.ticker-inner").liScroll()
                } else e.hide()
            }
        })
    });
    $('.sidebarw>div>h2,footer#footer-wrapper .widget > h2').html(function() {
        return "<span>" + $(this).text() + "</span>"
    });
    var current = $('.g-home-top');
    current.append('<div class="inner"><div class="home-top-left"></div><div class="home-top-right"><div class="home-col-1"><div class="home-col-1-top"></div><div class="home-col-1-bottom"></div></div><div class="home-col-2"><div class="home-col-2-top"></div><div class="home-col-2-bottom"></div></div></div></div>');
    for (var i = 1; i < 5; i++) {
        var l = current.attr('data-label' + i),
            s = '/feeds/posts/summary/-/' + l + '?max-results=1&alt=json-in-script';
        switch (i) {
            case 1:
                getTop(s, 'home-col-1', '.home-col-1-top', l);
                break;
            case 2:
                getTop(s, 'home-col-1', '.home-col-1-bottom', l);
                break;
            case 3:
                getTop(s, 'home-col-2', '.home-col-2-top', l);
                break;
            case 4:
                getTop(s, 'home-col-2', '.home-col-2-bottom', l);
                break
        }
    }
    get_top_recent(current.find('.home-top-left'));
    var allRP = $('[data-genova="gallery"],[data-genova="strips"],[data-genova="simple"],[data-genova="simple"],[data-genova="sidebar"],[data-genova="cards"],[data-genova="single"],[data-genova="video"],[data-genova="headline"],[data-genova="wide-tabs"],[data-genova="stack"],[data-genova="big-wide"]');
    allRP.addClass('genova-load');
    getAnyR()
});
$(function() {
    $('.genova-tabs').each(function() {
        var buttons = $(this).find('.tab-button>span').first(),
            button = $(this).find('.tab-button>span'),
            con = $(this).find('.tab-content>div'),
            cons = $(this).find('.tab-content>div').first();
        buttons.addClass('active');
        con.hide(0);
        cons.fadeIn();
        button.click(function() {
            if (!$(this).hasClass('active')) {
                button.removeClass('active');
                $(this).addClass('active');
                var cid = $(this).attr('id');
                con.each(function() {
                    if ($(this).hasClass(cid)) {
                        $(this).fadeIn()
                    } else {
                        $(this).hide()
                    }
                })
            }
        })
    });
    $('.genova-acc').each(function() {
        var e = $(this);
        e.find('.acc-button').first().addClass('active');
        e.find('.acc-content').slideUp();
        e.find('.acc-button').first().next('.acc-content').slideDown();
        $(this).find('.acc-button').click(function() {
            if (!$(this).hasClass('active')) {
                e.find('.acc-content').slideUp();
                $(this).next('.acc-content').slideDown();
                e.find('.acc-button').removeClass('active')
            }
        })
    })
});

function getHead(a, b, c, d) {
    var e = '<div class="' + d + ' rhead"><div>';
    if (a !== "none") {
        e += '<span class="headmt">' + a + '</span>'
    } else {
        e += '<span class="headmt">' + c + '</span>'
    }
    if (b !== "none") {
        e += "<span class='headst'>" + b + "</span>"
    }
    e += "</div><a class='headl' href='/search/label/" + c + "'>" + View_All_Text + "</a></div>";
    return e
}

function getmeta(t) {
    var e = [];
    e[1] = "Jan", e[2] = "Feb", e[3] = "Mar", e[4] = "Apr", e[5] = "May", e[6] = "Jun", e[7] = "Jul", e[8] = "Aug", e[9] = "Sep", e[10] = "Oct", e[11] = "Nov", e[12] = "Dec";
    var a = t.substring(0, 4),
        s = t.substring(5, 7),
        r = t.substring(8, 10),
        n = "<span class='date'> " + e[parseInt(s, 10)] + " " + r + " " + a + "</span>";
    return n
}

function getImg(a, b, c, d, f, g, h, i, j) {
    var e = "<div class='g-img-c'>";
    if (!a) e += "<span class='g-img-i'><i class='fa fa-image'></i></span>";
    if (a) e += "<span class='g-img-i'><i class='fa fa-youtube-play'></i></span>";
    if (b) e += "<div class='g-img-s'> <a href='http://www.facebook.com/sharer.php?u=" + h + "' class='f'>&#xf09a;</a> <a href='https://twitter.com/share?url=" + h + "' class='t'>&#xf099;</a> <a href='https://plus.google.com/share?url=" + h + "' class='g'>&#xf0d5;</a> </div>";
    if (c) e += "<div class='g-img-m'>";
    if (d) e += "<a class='z' href='" + j + "'>&#xf002;</a>";
    if (f) e += "<a href='" + h + "' class='l'>&#xf0c1;</a>";
    if (c) e += "</div>";
    if (g) e += "<a href='/search/label" + i + "' class='g-img-l'>" + i + "</a>";
    e += "</div>";
    return e
}

function getMeImg(e) {
    var n = ["", "", false];
    if (e !== undefined) {
        var n = [e.url, e.url, false];
        if (e.url.indexOf('img.youtube') !== -1) {
            n[0] = e.url.replace('default.jpg', 'mqdefault.jpg');
            n[1] = e.url.replace('default.jpg', 'mqdefault.jpg');
            n[2] = true
        } else {
            n[0] = e.url.replace('s72-c', 'w100-h75-c'), n[1] = e.url.replace('s72-c', 's500-c')
        }
    } else {
        n[0] = defaultImgUrl, n[1] = defaultImgUrl
    }
    return n
}
var loaderHTML = '<div class="loader"> <div class="square" ></div> <div class="square"></div> <div class="square last"></div> <div class="square clear"></div> <div class="square"></div> <div class="square last"></div> <div class="square clear"></div> <div class="square "></div> <div class="square last"></div> </div>';

function addslashes(str) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')
}

function load_w_tab(e) {
    var allload = e.find('.wtab-content>div[data-load]');
    allload.each(function() {
        var toLoad = $(this);
        var label = toLoad.attr('data-load');
        var rr = "nav" + Math.random();
        $.ajax({
            type: 'GET',
            url: '/feeds/posts/summary/-/' + label + '?max-results=12&alt=json-in-script',
            async: true,
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                if (json.feed.entry) {
                    toLoad.append('<div class="wtab-inner"><div class="w-car-con"></div></div>');
                    for (var i = 0; i < json.feed.entry.length; i++) {
                        var en = json.feed.entry[i];
                        for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                            if (json.feed.entry[i].link[j].rel == 'alternate') {
                                var postUrl = json.feed.entry[i].link[j].href;
                                break
                            }
                        }
                        var title = addslashes(en.title.$t),
                            imgTag = getMeImg(en.media$thumbnail),
                            imgLink = getImg(imgTag[2], true, true, true, true, true, postUrl, en.category[0].term, imgTag[1]),
                            con = '<div class="container"><div class="g-img-o"><img src="' + imgTag[1] + '" title="' + title + '"/><div class="g-img-c">' + imgLink + '</div></div><h2><a href="' + postUrl + '">' + title + '</a></h2></div>';
                        toLoad.find('.wtab-inner .w-car-con').append(con)
                    }
                    toLoad.find('.wtab-inner .w-car-con').owlCarousel({
                        nav: true,
                        dots: false,
                        items: 4,
                        loop: true,
                        margin: 25,
                        navText: ['&#xf053;', '&#xf054;'],
                        responsive: {
                            0: {
                                items: 1,
                                nav: true
                            },
                            600: {
                                items: 2
                            },
                            1000: {
                                items: 4,
                                nav: true,
                                loop: false
                            }
                        }
                    });
                    e.find('.g-img-o .g-img-m .z').colorbox({
                        rel: rr,
                        height: '80%',
                        width: '80%'
                    })
                }
            }
        })
    })
}

function getVideo(e) {
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + e.attr('data-label') + '?max-results=5&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = e.attr('data-title') === undefined ? 'none' : e.attr('data-title'),
                    subtitle = e.attr('data-sub') === undefined ? 'none' : e.attr('data-sub'),
                    thelabel = e.attr('data-label');
                e.append(getHead(maintitle, subtitle, thelabel, 'video'));
                e.append('<div class="video-inner"><div class="video-inner-1"></div><div class="video-inner-2"></div></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        imgP = getMeImg(en.media$thumbnail),
                        icon = imgP[2] ? "<span class='videoicon'><i class='fa fa-youtube-play'></i></span>" : "";
                    con = "<div class='video-item'><a href='" + postUrl + "'>" + icon + "<img src='" + imgP[1] + "'/></a><div class='video-content'><h2><a href='" + postUrl + "'>" + title + "</a></h2><div class='video-meta'>" + date + author + "</div></div></div>";
                    if (i == 0 || i == 1) {
                        e.find('.video-inner-1').append(con)
                    } else {
                        e.find('.video-inner-2').append(con)
                    }
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getStrips(zxc) {
    var currentc = zxc;
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + currentc.attr('data-label') + '?max-results=6&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = zxc.attr('data-title') === undefined ? 'none' : zxc.attr('data-title'),
                    subtitle = zxc.attr('data-sub') === undefined ? 'none' : zxc.attr('data-sub'),
                    thelabel = zxc.attr('data-label');
                zxc.append(getHead(maintitle, subtitle, thelabel, 'strip'));
                currentc.append('<div class="strip-inner"></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        imgP = getMeImg(en.media$thumbnail),
                        con = "<div class='simple-strip'><a href='" + postUrl + "'><img src='" + imgP[0] + "'/></a><div class='s-striple-content'><h2><a href='" + postUrl + "'>" + title + "</a></h2><div class='s-strip-meta'>" + date + author + "</div></div></div>";
                    currentc.find('.strip-inner').append(con)
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getSlider(zxc) {
    var currentc = zxc;
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + currentc.attr('data-label') + '?max-results=6&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = zxc.attr('data-title') === undefined ? 'none' : zxc.attr('data-title'),
                    subtitle = zxc.attr('data-sub') === undefined ? 'none' : zxc.attr('data-sub'),
                    thelabel = zxc.attr('data-label');
                zxc.append(getHead(maintitle, subtitle, thelabel, 'slider'));
                currentc.append('<div class="slider-inner"></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        imgP = getMeImg(en.media$thumbnail),
                        con = "<div class='slider-item'><a href='" + postUrl + "'><img src='" + imgP[1] + "'/></a><div class='slider-content'><h2><a href='" + postUrl + "'>" + title + "</a></h2><div class='slider-meta'>" + date + author + "</div></div></div>";
                    currentc.find('.slider-inner').append(con)
                }
                currentc.find('.slider-inner').owlCarousel({
                    items: 1,
                    dots: false,
                    nav: true,
                    navText: ['&#xf104;', '&#xf105;']
                })
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getSimpleCards(zxc) {
    var currentc = zxc;
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + currentc.attr('data-label') + '?max-results=6&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = zxc.attr('data-title') === undefined ? 'none' : zxc.attr('data-title'),
                    subtitle = zxc.attr('data-sub') === undefined ? 'none' : zxc.attr('data-sub'),
                    thelabel = zxc.attr('data-label');
                currentc.append(getHead(maintitle, subtitle, thelabel, 'simple-cards') + '<div class="simple-cards-inner"></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        sum = en.summary.$t.substr(0, 150) + '...',
                        imgP = getMeImg(en.media$thumbnail),
                        thumb = imgP[2],
                        con = "<div class='simple-cards'><div class='img-con'><a href='" + postUrl + "'><img src='" + imgP[1] + "'/></a><div class='above-img-content'><div class='img-content-inner'><a class='simple-card-label' href='/search/label/" + en.category[0].term + "'>" + en.category[0].term + "</a><h2><a href='" + postUrl + "'>" + title + "</a></h2></div></div></div><div class='simple-card-content'><p>" + sum + "</p><div class='simple-card-meta'>" + date + "</div></div></div>";
                    currentc.find('.simple-cards-inner').append(con)
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getSingle(e) {
    var rr = "single" + Math.random(),
        r = e.attr('data-label');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + r + '?max-results=5&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = e.attr('data-title') === undefined ? 'none' : e.attr('data-title'),
                    subtitle = e.attr('data-sub') === undefined ? 'none' : e.attr('data-sub'),
                    thelabel = e.attr('data-label');
                e.append(getHead(maintitle, subtitle, thelabel, 'simple'));
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        content = i == 0 ? "<div class='container'><a href='" + currentLink + "'><img src='" + imgTag[1] + "' title='" + title + "'/></a><div class='single-content'><div class='single-label'><a href='/search/label/" + currentEntry.category[0].term + "'>" + currentEntry.category[0].term + "</a></div><div class='single-meta'>" + cDate + cAuthor + "</div><h2><a href='" + currentLink + "'>" + title + "</a></h2></div></div>" : "<div class='single-strip'><a href='" + currentLink + "'><img src='" + imgTag[0] + "' title='" + title + "'/></a><div class='single-content'><h2><a href='" + currentLink + "'>" + title + "</a></h2><div class='single-meta'>" + cDate + cAuthor + "</div></div></div>",
                        container = i == 0 ? '.left-content' : '.right-content';
                    e.append(content)
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getwtabs(e) {
    var labelArr = eval(e.attr('data-label')),
        html = '<div class="wtab-buttons">';
    for (var i = 0; i < labelArr.length; i++) {
        html += '<span data-target="' + labelArr[i] + '-genova">' + labelArr[i] + '</span>'
    }
    html += '</div><div class="wtab-content">';
    for (var i = 0; i < labelArr.length; i++) {
        html += '<div data-load="' + labelArr[i] + '" data-container="' + labelArr[i] + '-genova"></div>'
    }
    html += '</div>';
    e.append(html);
    e.find('.wtab-buttons>span').first().addClass('active');
    e.find('.wtab-content>div').hide(0);
    e.find('.wtab-content>div').first().show(0).addClass('active hide-load');
    load_w_tab(e);
    e.find('.wtab-buttons>span').click(function() {
        var current = $(this).attr('data-target'),
            button = $(this),
            activediv = "";
        e.find('.wtab-content>div').each(function() {
            if ($(this).attr('data-container') == current) {
                e.find('.wtab-buttons>span').removeClass('active');
                button.addClass('active');
                e.find('.wtab-content>div').removeClass('active').hide(0);
                $(this).fadeIn(0).addClass('active');
                var carousel = $(this).find('.w-car-con').data('owlCarousel');
                carousel._width = $(this).find('.w-car-con').width();
                carousel.invalidate('width');
                carousel.refresh()
            }
        })
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}
if (sticky_navigation) {
    $(function() {})
}

function getcards(zxc) {
    var currentc = zxc,
        rr = 'card' + Math.random();
    currentc.addClass('hide-load');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + currentc.attr('data-label') + '?max-results=12&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                currentc.append('<div class="inner"><div class="cards-in"></div></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        sum = en.summary.$t.substr(0, 150) + '...',
                        imgP = getMeImg(en.media$thumbnail),
                        thumb = imgP[2],
                        con = "<div class='container'><div class='cards-inner'><div class='g-img-o'><img src='" + imgP[1] + "'/>" + getImg(imgP[2], true, true, true, true, true, postUrl, en.category[0].term, imgP[1]) + "</div><span class='card-author'>" + author + "</span><h2><a href='" + postUrl + "'>" + title + "</a></h2><p>" + sum + "</p><span class='card-date'>" + date + "</span></div>";
                    currentc.find('.cards-in').append(con)
                }
                currentc.find('.cards-in').owlCarousel({
                    items: 3,
                    autoplay: true,
                    loop: true,
                    margin: 25,
                    dots: false,
                    nav: true,
                    navText: ['&#xf104;', '&#xf105;'],
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 3,
                            nav: true,
                            loop: true
                        }
                    }
                });
                zxc.find('.g-img-o .g-img-m .z').colorbox({
                    rel: rr,
                    height: '80%',
                    width: '80%'
                })
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function get_side(e) {
    var r = e.attr('data-label'),
        rr = 'side' + Math.random();
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + r + '?max-results=3&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        imgc = getImg(imgTag[2], true, true, true, true, true, currentLink, r, imgTag[1]),
                        content = "<div class='side-content'><div class='g-img-o'><img src='" + imgTag[1] + "'/>" + imgc + "</div><h2><a href='" + currentLink + "'>" + title + "</a></h2><div class='side-meta'>" + cDate + cAuthor + "</div></div>";
                    e.append(content)
                }
                e.find('.g-img-o .g-img-m .z').colorbox({
                    rel: rr,
                    height: '80%',
                    width: '80%'
                })
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function get_somewide(e) {
    var r = e.attr('data-label');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + r + '?max-results=3&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        content = "<div class='side-content'><div class='wide-img-outer'><a href='" + currentLink + "'><img src='" + imgTag[1] + "'/></a><div class='wide-inner-c'><div class='wide-meta-c'><a href='/search/label" + r + "'>" + r + "</a></div><h2><a href='" + currentLink + "'>" + title + "</a></h2><div class='side-meta'>" + cDate + cAuthor + "</div></div></div></div>";
                    e.append(content)
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function get_single(e) {
    var r = e.attr('data-label');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + r + '?max-results=1&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = e.attr('data-title') === undefined ? 'none' : e.attr('data-title'),
                    subtitle = e.attr('data-sub') === undefined ? 'none' : e.attr('data-sub'),
                    thelabel = e.attr('data-label');
                e.append(getHead(maintitle, subtitle, thelabel, 'single'));
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        sum = currentEntry.summary.$t.substr(0, 100) + '...',
                        imgc = getImg(imgTag[2], true, true, true, true, true, currentLink, r, imgTag[1]);
                    content = "<div class='single-outer'><div class='single-meta'>" + cDate + "</div><div class='g-img-o'><img src='" + imgTag[1] + "'/>" + imgc + "</div><div class='single-inner'><h2><a href='" + currentLink + "'>" + title + "</a></h2><p>" + sum + "</p><div class='single-author'>" + cAuthor + "</div></div></div>";
                    e.append(content)
                }
                e.find('.g-img-o .g-img-m .z').colorbox({
                    height: '80%',
                    width: '80%'
                })
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function get_headline(e) {
    var r = e.attr('data-label');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + r + '?max-results=5&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = e.attr('data-title') === undefined ? 'none' : e.attr('data-title'),
                    subtitle = e.attr('data-sub') === undefined ? 'none' : e.attr('data-sub'),
                    thelabel = e.attr('data-label');
                e.append(getHead(maintitle, subtitle, thelabel, 'single') + "<div class='headline-inner'><div class='left-headline'></div><div class='right-headline'></div><div style='clear:both'></div></div>");
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        content = i == 0 ? "<div class='container'><a href='" + currentLink + "'><img src='" + imgTag[1] + "' title='" + title + "'/></a><div class='headline-content'><div class='headline-label'><a href='/search/label/" + currentEntry.category[0].term + "'>" + currentEntry.category[0].term + "</a></div><div class='headline-meta'>" + cDate + cAuthor + "</div><h2><a href='" + currentLink + "'>" + title + "</a></h2></div></div>" : "<div class='headline-strip'><a href='" + currentLink + "'><img src='" + imgTag[0] + "' title='" + title + "'/></a><div class='headline-content'><h2><a href='" + currentLink + "'>" + title + "</a></h2><div class='headline-meta'>" + cDate + cAuthor + "</div></div></div>",
                        container = i == 0 ? '.left-headline' : '.right-headline';
                    e.find(container).append(content)
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getgal(zxc) {
    var currentc = zxc;
    currentc.addClass('hide-load');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + currentc.attr('data-label') + '?max-results=10&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = currentc.attr('data-title') === undefined ? 'none' : currentc.attr('data-title'),
                    subtitle = currentc.attr('data-sub') === undefined ? 'none' : currentc.attr('data-sub'),
                    thelabel = currentc.attr('data-label');
                currentc.append(getHead(maintitle, subtitle, thelabel, 'gallery') + '<div class="gal-in"></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var imageurl = getMeImg(json.feed.entry[i].media$thumbnail);
                    var title = en.title.$t,
                        desc = en.summary.$t.substr(0, 200) + '...',
                        auth = getauthor(en.author),
                        date = getmeta(en.published.$t),
                        con = '<div class="container"><img src="' + imageurl[1] + '"/><div class="gal-layer"><span><i class="fa-search-plus"></i></span></div><div class="i-content"><h2>' + title + '</h2><div class="meta">' + auth + " " + date + '</div><p>' + desc + '</p><a href="' + postUrl + '"><i class="fa fa-arrow-right"></i></a></div></div>';
                    currentc.find('.gal-in').append(con)
                }
                currentc.find('.container').height(currentc.find('.container').width())
            }
            $('.gal-in .container').click(function() {
                var ip = $(this).find('img').clone(),
                    cp = $(this).find('.i-content').clone();
                $('.gal-content').fadeIn().prepend(ip);
                $('.gal-content .gal-append').append(cp);
                $('.gal-content img,.gal-append').delay(400).fadeIn()
            });
            $('.gal-content .close').click(function() {
                $('.gal-content').fadeOut();
                $('.gal-content .gal-append').html('');
                $('.gal-content img').remove()
            })
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function checkcomments() {
    if (comment_system.blogger) {
        $('.comment-tabs .comment-system>div.blogger').show(0);
        return
    }
    if (comment_system.disqus) {
        $('.comment-tabs .comment-system>div.disqus').show(0);
        return
    }
    if (comment_system.facebook) {
        $('.comment-tabs .comment-system>div.facebook').show(0);
        return
    }
}
$(function() {
    var buttons = $('.comment-tabs .comment-buttons button'),
        systems = $('.comment-tabs .comment-system>div');
    systems.hide(0);
    checkcomments();
    buttons.first().addClass('active');
    buttons.click(function() {
        var current = $(this),
            activeClass = $(this).attr('id');
        systems.each(function() {
            if ($(this).hasClass(activeClass)) {
                $(this).fadeIn();
                buttons.removeClass('active');
                current.addClass('active')
            } else {
                $(this).hide(0)
            }
        })
    })
});
$(function() {
    $('.liveform').submit(function() {
        $('.search-item').remove();
        $('.trendy-search').addClass('remove');
        findit();
        return false
    });

    function findit() {
        var labelname = $('.searchbari').val();
        var startindex = $('.search-item').length + 1;
        if (labelname.length >= 1) {
            $('.search-content').show();
            $('.search-result span.status').show().html(loaderHTML);
            var url = '/feeds/posts/default?max-results=8&start-index=' + startindex + '&alt=json&q=' + labelname;
            $.ajax({
                type: 'GET',
                url: url,
                async: true,
                contentType: "application/json",
                dataType: 'jsonp',
                success: function(json) {
                    $('.more-result').hide();
                    doSearch(json, labelname);
                    $('.result-head em').text(labelname);
                    $('.result-head').fadeIn()
                }
            })
        } else {
            $('.search-content').hide()
        }
    }

    function doSearch(json, query) {
        if (json.feed.entry) {
            for (var i = 0; i < json.feed.entry.length; i++) {
                for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                    if (json.feed.entry[i].link[j].rel == 'alternate') {
                        var postUrl = json.feed.entry[i].link[j].href;
                        break
                    }
                }
                var imageurl = getMeImg(json.feed.entry[i].media$thumbnail);
                var postTitle = json.feed.entry[i].title.$t;
                var item = '<div class="search-item"><a href="' + postUrl + '"><img src="' + imageurl[0] + '"/></a><a class="st" href="' + postUrl + '" target="_blank">' + postTitle + '</a></div>';
                $('.search-result').prepend(item)
            }
            if (json.feed.entry.length < 5) {
                $('.search-result span.status').show().html('&#xf00d; No more result');
                $('.more-result').hide()
            } else {
                $('.search-result span.status').hide(function() {
                    $('.more-result').show()
                })
            }
        } else {
            $('.search-result span.status').show().html('No result');
            $('.more-result').hide()
        }
    };
    $('.close-search').click(function() {
        $('.search-content').hide()
    });
    $('.more-result').click(function() {
        $('.more-result').hide();
        findit()
    });
    $('.static-trigger').click(function() {
        var et = $(this).html();
        $(this).toggleClass('active').html(et == '<i class="fa fa-navicon"></i>' ? '<i class="fa fa-close"></i>' : '<i class="fa fa-navicon"></i>');
        $('.navigation .widget-content').slideToggle()
    });
    $('.dropdown-trigger').click(function() {
        var et = $(this).html();
        $(this).toggleClass('active').html(et == '<i class="fa fa-close"></i> Navigation' ? '<i class="fa fa-navicon"></i> Navigation' : '<i class="fa fa-close"></i> Navigation');
        $('.DropDownNavigation').slideToggle()
    });
    var sbl = $('.search-button').offset();
    var rt = ($(window).width() - (sbl.left + $('.search-button').outerWidth()));
    $('.search-button').click(function() {
        $('.search-outer,.search-button').toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).html('&#xf00d;');
            $('.searchbari').focus();
            $(this).css({
                'z-index': 102,
                'position': 'fixed',
                'right': rt,
                'top': sbl.top
            });
            $(this).animate({
                'right': '10px',
                'top': '10px',
                'width': 50,
                'height': 50
            })
        } else {
            $(this).html('&#xf002;');
            $(this).animate({
                'right': rt,
                'top': sbl.top,
                'width': 32,
                'height': 32
            }, function() {
                $('.search-button').css({
                    'position': 'relative',
                    'right': 'auto',
                    'top': 'auto',
                })
            });
            $('.trendy-search').removeClass('remove');
            $('.search-content').hide(0);
            $('.search-item').remove();
            $('.result-head').fadeOut()
        }
    })
});

function getBNav(a, b, c, d) {
    var rr = "navBig" + Math.random();
    $.ajax({
        type: 'GET',
        url: d,
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                a.find('.nav-out-wrap').prepend('<h3>' + c + '</h3>');
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        content = i == 0 ? "<div class='container'><a href='" + currentLink + "'><img src='" + imgTag[1] + "' title='" + title + "'/></a><div class='inner-content'><div class='inner-label'><a href='/search/label/" + currentEntry.category[0].term + "'>" + currentEntry.category[0].term + "</a></div><div class='nav-meta'>" + cDate + cAuthor + "</div><h2><a href='" + currentLink + "'>" + title + "</a></h2></div></div>" : "<div class='strip'><a href='" + currentLink + "'><img src='" + imgTag[0] + "' title='" + title + "'/></a><div class='strip-content'><h2><a href='" + currentLink + "'>" + title + "</a></h2><div class='strip-meta'>" + cDate + cAuthor + "</div></div></div>",
                        container = i == 0 ? '.left-content' : '.right-content';
                    a.find(container).append(content)
                }
            }
        }
    })
}

function getNav(a, b, c, d) {
    var rr = "nav" + Math.random();
    $.ajax({
        type: 'GET',
        url: a,
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    currentImage = getMeImg(currentEntry.media$thumbnail);
                    currentTitle = currentEntry.title.$t;
                    currentLabel = currentEntry.category[0].term;
                    var imgContent = getImg(currentImage[2], true, true, true, true, true, currentLink, currentLabel, currentImage[1]);
                    var nnitem = "<div class='n-item'><div class='g-img-o'><img src='" + currentImage[1] + "'/>" + imgContent + "</div><h3><a href='" + currentLink + "'>" + currentTitle + "</a></h3></div>";
                    b.find(c).append(nnitem)
                }
                b.find(c).owlCarousel({
                    items: 4,
                    nav: true,
                    dots: false,
                    margin: 25,
                    navText: ['&#xf104;', '&#xf105;'],
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 4,
                            nav: true,
                            loop: false
                        }
                    }
                });
                b.find('.g-img-o .g-img-m .z').colorbox({
                    rel: rr,
                    height: '80%',
                    width: '80%'
                })
            }
        }
    })
}

function get_simple_nav(e, a) {
    $.ajax({
        type: 'GET',
        url: a,
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentDate, currentTitle, item;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    currentTitle = currentEntry.title.$t, currentDate = getmeta(currentEntry.published.$t), item = "<div class='nav-simple-strip'><h3><a href='" + currentLink + "'>" + currentTitle + "</a></h3><span>" + currentDate + "</span></div>";
                    e.find('.nav-simple-recent').append(item)
                }
            }
        }
    })
}
$(function() {
    $('li.nav-rec').each(function() {
        var e = $(this),
            r = e.attr('data-label'),
            g = '/feeds/posts/summary/-/' + r + '?max-results=15&alt=json-in-script';
        e.append("<div class='nav-outer'><div class='toCenter'>" + loaderHTML + "<div class='nav-oi'></div></div></div>");
        $(this).addClass('ready');
        var currentLink = $(this);
        if (!currentLink.hasClass('loaded-c')) {
            currentLink.addClass('loaded-c');
            setTimeout(function() {
                getNav(g, e, '.nav-oi', 5);
                currentLink.addClass('hide-load')
            }, 1000)
        }
    });
    $('li.nav-simple').each(function() {
        var e = $(this),
            g = '/feeds/posts/summary/?alt=json&max-results=15';
        e.append("<div class='nav-outer'><div class='toCenter'>" + loaderHTML + "<div class='nav-simple-recent'></div></div></div>");
        e.mouseenter(function() {
            var currentLink = $(this);
            if (!currentLink.hasClass('loaded-c')) {
                currentLink.addClass('loaded-c');
                setTimeout(function() {
                    get_simple_nav(e, g);
                    currentLink.addClass('hide-load')
                }, 1000)
            }
        })
    });
    $('li.nav-big').each(function() {
        var currentL = $(this),
            label = currentL.attr('data-label'),
            heading = currentL.attr('data-heading'),
            forhead = heading === undefined ? label : heading,
            url = '/feeds/posts/summary/-/' + label + '?max-results=7&alt=json-in-script';
        currentL.append('<div class="big-nav-outer"><div class="toCenter">' + loaderHTML + '<div class="nav-out-wrap"><div class="big-nav-inner"><div class="left-content"></div><div class="right-content"></div></div></div></div></div>');
        var thisL = $(this);
        if (!thisL.hasClass('loaded-c')) {
            thisL.addClass('loaded-c');
            setTimeout(function() {
                getBNav(currentL, label, forhead, url);
                thisL.addClass('hide-load')
            }, 1000)
        }
    });
    $('.megamenu').each(function() {
        $(this).append("<div class='megamenu-inner'><div class='toCenter'></div></div>");
        $(this).find('ul').appendTo('.megamenu-inner .toCenter')
    })
});
var Default_Image_For_Recent_Posts = "";

function get_top_recent(e) {
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/?max-results=5&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            var entries = json.feed.entry;
            var container;
            if (entries) {
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var currentTitle = currentEntry.title.$t,
                        current_label = currentEntry.category != undefined ? "<a href='/search/label/" + currentEntry.category[0].term + "' class='home-top-label g-label'>" + currentEntry.category[0].term + "</a>" : "",
                        currentDate = getmeta(currentEntry.published.$t),
                        sum = currentEntry.summary.$t.substr(0, 150) + '...',
                        currentAuthor = getauthor(currentEntry.author);
                    currentImage = getMeImg(currentEntry.media$thumbnail);
                    container = "<div class='top-inner'> <img src='" + currentImage[1] + "' /> <div class='g-top-layer'></div> <div class='content'> " + current_label + " <h3><a href='" + currentLink + "'>" + currentTitle + "</a></h3> <div class='top-meta'>" + currentDate + currentAuthor + "<p>" + sum + "</p></div></div> <a href='" + currentLink + "' class='g-link-layer'></a> </div>";
                    e.append(container)
                }
                e.owlCarousel({
                    items: 1,
                    dots: false,
                    loop: true,
                    autoplay: true,
                    nav: true,
                    navText: ['&#xf104;', '&#xf105;'],
                })
            } else {
                container = 'No Post Found';
                e.append(container)
            }
        }
    })
}

function getTop(a, classN, c, label) {
    var container = "";
    $.ajax({
        type: 'GET',
        url: a,
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            var entries = json.feed.entry;
            var container;
            if (entries) {
                var currentEntry = entries[0],
                    currentLink, currentImage, currentTitle, currentLabel, currentAuthor, currentDate;
                for (var j = 0; j < currentEntry.link.length; j++) {
                    if (currentEntry.link[j].rel == 'alternate') {
                        currentLink = currentEntry.link[j].href;
                        break
                    }
                }
                var currentTitle = currentEntry.title.$t,
                    currentLabel = currentEntry.category[0].term,
                    currentDate = getmeta(currentEntry.published.$t),
                    currentAuthor = getauthor(currentEntry.author);
                currentImage = getMeImg(currentEntry.media$thumbnail);
                container = "<div class='top-inner'> <img src='" + currentImage[1] + "' /> <div class='g-top-layer'></div> <div class='content'> <a href='/search/label/" + label + "' class='home-top-label g-label'>" + label + "</a> <h3><a href='" + currentLink + "'>" + currentTitle + "</a></h3> <div class='top-meta'>" + currentDate + currentAuthor + "</div></div> <a href='" + currentLink + "' class='g-link-layer'></a> </div>";
                $('.' + classN).find(c).append(container)
            } else {
                container = 'No Post Found';
                $('.' + classN).find(c).append(container)
            }
        }
    })
}

function t(t) {
    var t, e, a = [];
    for (e = 0; t > e; e++) a.push(e);
    return shuffle(a)
}
shuffle = function(t) {
    for (var e, a, s = t.length; s; e = parseInt(Math.random() * s), a = t[--s], t[s] = t[e], t[e] = a);
    return t
};

function getmashrandom(e) {
    var r = "/feeds/posts/summary/?max-results=500&alt=json-in-script",
        ass = e.find('div.tab-mash-random');
    ass.find('span#tab-mash-random').addClass('loaded');
    ass.append('<ul class="random-inner"></ul>'), $.ajax({
        type: "GET",
        url: r,
        async: true,
        contentType: "application/json",
        dataType: "jsonp",
        success: function(e) {
            ass.addClass('hide-load');
            for (var a = e.feed.entry, r = a.length, l = t(r), i = 0; 5 > i; i++) {
                for (var o = 0; o < e.feed.entry[l[i]].link.length; o++)
                    if ("alternate" == a[l[i]].link[o].rel) {
                        var c = e.feed.entry[l[i]].link[o].href;
                        break
                    }
                var p = getMeImg(a[l[i]].media$thumbnail);
                var u = a[l[i]].title.$t,
                    h = a[l[i]].published.$t,
                    f = getmeta(h),
                    v = getauthor(a[l[i]].author),
                    m = '<li><a href="' + c + '"><img  class="toLoad" src="' + p[0] + '"/></a><div class="recent-list-c"><h3><a href="' + c + '">' + u + '</a></h3><div class="meta">' + v + " " + f + "</div></div></li>";
                ass.find("ul").append(m)
            }
        }
    })
}

function getmashrecent(e) {
    e.find('span#tab-mash-recent').addClass('loaded');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary?max-results=5&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                e.find('div.tab-mash-recent').append('<ul class="recent-post-list"></ul>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        imgP = getMeImg(en.media$thumbnail),
                        con = "<li class='recent-post-item'><a href='" + postUrl + "'><img src='" + imgP[0] + "'/></a><div class='recent-list-content'><h3><a href='" + postUrl + "'>" + title + "</a></h3><div class='recent-list-meta'>" + date + author + "</div></div></li>";
                    e.find('div.tab-mash-recent ul').append(con)
                }
            }
        }
    })
}

function getmashcomment(e) {
    $.ajax({
        type: 'GET',
        url: '/feeds/comments/default?alt=json-in-script&max-results=5',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            e.find('div.tab-mash-comment').append('<ul></ul>').addClass('hide-load');
            for (var i = 0; i < json.feed.entry.length; i++) {
                var comment = json.feed.entry[i];
                for (var j = 0; j < comment.link.length; j++) {
                    if (comment.link[j].rel == 'alternate') {
                        var commentlink = comment.link[j].href;
                        break
                    }
                }
                for (var c = 0; c < comment.gd$extendedProperty.length; c++) {
                    if (comment.gd$extendedProperty[c].name == 'blogger.displayTime') {
                        var datePub = comment.gd$extendedProperty[c].value;
                        break
                    }
                }
                var commentcontent = comment.title.$t,
                    authorname = comment.author[0].name.$t,
                    authorimage = comment.author[0].gd$image.src,
                    item = '<li class="comment-item"><img src="' + authorimage + '"/><span>' + authorname + '</span> said, "<a href="' + commentlink + '">' + commentcontent + '</a>" on ' + datePub + '</li>';
                e.find('div.tab-mash-comment').append(item)
            }
        }
    })
}
$(function() {
    $('[data-genova="tab-mash"]').each(function() {
        var e = $(this);
        e.append("<div class='tab-mash-outer'><div class='tab-mash-button'><span class='active' id='tab-mash-recent'><i class='fa-rss'></i> " + Tab_Text.tab_recent + "</span><span id='tab-mash-random'><i class='fa-random'></i> " + Tab_Text.tab_random + "</span><span id='tab-mash-comment'><i class='fa-comment'></i> " + Tab_Text.tab_comment + "</span></div><div class='tab-mash-content'><div class='tab-mash-recent min-height-need'></div><div class='tab-mash-random min-height-need' style='display:none;'>" + loaderHTML + "</div><div class='tab-mash-comment min-height-need' style='display:none;'>" + loaderHTML + "</div></div></div>");
        getmashrecent(e);
        e.find('.tab-mash-button>span').click(function() {
            var current = $(this),
                alldivs = e.find('.tab-mash-content>div');
            alldivs.each(function() {
                if ($(this).hasClass(current.attr('id'))) {
                    $(this).fadeIn();
                    e.find('.tab-mash-button>span').removeClass('active');
                    current.addClass('active');
                    if (!current.hasClass('loaded')) {
                        if (current.attr('id') == "tab-mash-random") {
                            current.addClass('loaded');
                            setTimeout(function() {
                                getmashrandom(e)
                            }, 500)
                        } else if (current.attr('id') == "tab-mash-comment") {
                            current.addClass('loaded');
                            setTimeout(function() {
                                getmashcomment(e)
                            }, 500)
                        }
                    }
                } else {
                    $(this).hide(0)
                }
            })
        })
    })
});

function isRelated(a, b) {
    if (a.category !== undefined) {
        for (var i = 0; i < a.category.length; i++) {
            if (b.indexOf(a.category[i].term) !== -1) {
                return true
            } else {
                return false
            }
        }
    } else {
        return false
    }
}

function getRelated(e) {
    var counter = 0;
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/?max-results=500&alt=json-in-script',
        async: true,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                $('.related-post').append('<div class="related-inner"></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    if (counter == related_post_max) {
                        break
                    }
                    if (isRelated(json.feed.entry[i], e)) {
                        counter++;
                        var en = json.feed.entry[i];
                        for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                            if (json.feed.entry[i].link[j].rel == 'alternate') {
                                var postUrl = json.feed.entry[i].link[j].href;
                                break
                            }
                        }
                        var title = en.title.$t,
                            img = getMeImg(en.media$thumbnail),
                            date = getmeta(en.published.$t),
                            con = '<div class="related-item"><div class="g-img-o""><img src="' + img[1] + '"/>' + getImg(img[2], true, true, true, true, true, postUrl, en.category[0].term, img[1]) + '</div><h3><a href="' + postUrl + '">' + title + '</a></h3><div class="related-meta">' + date + '</div></div>';
                        $('.related-post .related-inner').append(con)
                    }
                }
                if ($('.related-post .related-item').length == 0) {
                    $('.related-post').append('<h3>No Related Post Found</h3>')
                } else {
                    $('.related-post .related-inner').owlCarousel({
                        items: 3,
                        margin: 25,
                        dots: false,
                        nav: true,
                        navText: ['&#xf104;', '&#xf105;'],
                        responsive: {
                            0: {
                                items: 1,
                                nav: true
                            },
                            600: {
                                items: 3
                            },
                            1000: {
                                items: 3,
                                nav: true,
                                loop: false
                            }
                        }
                    })
                }
            }
        }
    })
}
$(function() {
    var c = $('.tl-sitemap'),
        counter = 1;
    var r = '/feeds/posts/summary?max-results=0&alt=json-in-script';

    function getLabels(e) {
        if (e.category === undefined) {
            return "<span>No Label</span>"
        } else {
            return "<a href='/search/label" + e.category[0].term + "'>" + e.category[0].term + "</a>"
        }
    }

    function getSitemap() {
        var s = '/feeds/posts/summary?max-results=10&alt=json-in-script&start-index=' + counter;
        $.ajax({
            type: "GET",
            url: s,
            async: true,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(e) {
                var t = e.feed.entry,
                    more = t.length < 10 ? false : true;
                for (var s = 0; s < t.length; s++) {
                    for (var l, n = t[s], i = 0; i < n.link.length; i++)
                        if ("alternate" == n.link[i].rel) {
                            var r = n.link[i].href;
                            break
                        }
                    if (!more) {
                        c.find('tfoot').hide()
                    }
                    var title = '<a href="' + r + '">' + n.title.$t + '</a>',
                        date = getmeta(n.published.$t),
                        labels = getLabels(n),
                        cc = counter + s;
                    c.find('tbody').append('<tr><td>' + cc + '</td><td>' + title + '</td><td>' + date + '</td><td>' + labels + '</td></tr>')
                }
                counter += 10
            }
        })
    }
    $.ajax({
        type: "GET",
        url: r,
        async: true,
        contentType: "application/json",
        dataType: "jsonp",
        success: function(e) {
            var content = "<h3>Total Post:" + e.feed.openSearch$totalResults.$t + "</h3>";
            c.append(content);
            var more = parseInt(e.feed.openSearch$totalResults.$t) < 10 ? false : true;
            if (e.feed.openSearch$totalResults.$t > 0) {
                c.append("<table><thead><tr><td><i class='fa fa-barcode'></i> S.N</td><td><i class='fa fa-link'></i> Title</td><td><i class='fa fa-calendar'></i> Date Published</td><td><i class='fa fa-tag'></i> Label</td></tr></thead><tbody></tbody></table>");
                if (more) {
                    c.find('table').append('<tfoot><tr><td><button class="load-more">Load More</button></td></tr></tfoot>')
                }
                getSitemap()
            } else {
                c.append("<h4>No post to show</h4>")
            }
            c.find('.load-more').click(getSitemap)
        }
    })
});

function isScrolledIntoView(elem) {
    var $window = $(window),
        docViewTop = $window.scrollTop(),
        docViewBottom = docViewTop + $window.height(),
        elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).outerHeight();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
}

//]]>

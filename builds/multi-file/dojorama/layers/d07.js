//>>built
require({cache:{"dojo/window":function(){define("./_base/lang ./sniff ./_base/window ./dom ./dom-geometry ./dom-style ./dom-construct".split(" "),function(f,l,h,e,a,b,c){l.add("rtl-adjust-position-for-verticalScrollBar",function(b,g){var d=h.body(g),e=c.create("div",{style:{overflow:"scroll",overflowX:"visible",direction:"rtl",visibility:"hidden",position:"absolute",left:"0",top:"0",width:"64px",height:"64px"}},d,"last"),s=c.create("div",{style:{overflow:"hidden",direction:"ltr"}},e,"last"),l=0!=
a.position(s).x;e.removeChild(s);d.removeChild(e);return l});l.add("position-fixed-support",function(b,g){var d=h.body(g),e=c.create("span",{style:{visibility:"hidden",position:"fixed",left:"1px",top:"1px"}},d,"last"),s=c.create("span",{style:{position:"fixed",left:"0",top:"0"}},e,"last"),l=a.position(s).x!=a.position(e).x;e.removeChild(s);d.removeChild(e);return l});var d={getBox:function(b){b=b||h.doc;var g="BackCompat"==b.compatMode?h.body(b):b.documentElement,e=a.docScroll(b);if(l("touch")){var c=
d.get(b);b=c.innerWidth||g.clientWidth;g=c.innerHeight||g.clientHeight}else b=g.clientWidth,g=g.clientHeight;return{l:e.x,t:e.y,w:b,h:g}},get:function(b){if(l("ie")&&d!==document.parentWindow){b.parentWindow.execScript("document._parentWindow \x3d window;","Javascript");var a=b._parentWindow;b._parentWindow=null;return a}return b.parentWindow||b.defaultView},scrollIntoView:function(d,g){try{d=e.byId(d);var c=d.ownerDocument||h.doc,u=h.body(c),s=c.documentElement||u.parentNode,f=l("ie"),t=l("webkit");
if(!(d==u||d==s))if(!l("mozilla")&&(!f&&!t&&!l("opera"))&&"scrollIntoView"in d)d.scrollIntoView(!1);else{var z="BackCompat"==c.compatMode,v=Math.min(u.clientWidth||s.clientWidth,s.clientWidth||u.clientWidth),p=Math.min(u.clientHeight||s.clientHeight,s.clientHeight||u.clientHeight),c=t||z?u:s,y=g||a.position(d),m=d.parentNode,t=function(a){return 6>=f||7==f&&z?!1:l("position-fixed-support")&&"fixed"==b.get(a,"position").toLowerCase()};if(!t(d))for(;m;){m==u&&(m=c);var k=a.position(m),D=t(m),w="rtl"==
b.getComputedStyle(m).direction.toLowerCase();if(m==c){k.w=v;k.h=p;c==s&&(f&&w)&&(k.x+=c.offsetWidth-k.w);if(0>k.x||!f||9<=f)k.x=0;if(0>k.y||!f||9<=f)k.y=0}else{var r=a.getPadBorderExtents(m);k.w-=r.w;k.h-=r.h;k.x+=r.l;k.y+=r.t;var q=m.clientWidth,x=k.w-q;0<q&&0<x&&(w&&l("rtl-adjust-position-for-verticalScrollBar")&&(k.x+=x),k.w=q);q=m.clientHeight;x=k.h-q;0<q&&0<x&&(k.h=q)}D&&(0>k.y&&(k.h+=k.y,k.y=0),0>k.x&&(k.w+=k.x,k.x=0),k.y+k.h>p&&(k.h=p-k.y),k.x+k.w>v&&(k.w=v-k.x));var E=y.x-k.x,F=y.y-k.y,H=
E+y.w-k.w,I=F+y.h-k.h,B,G;if(0<H*E&&(m.scrollLeft||m==c||m.scrollWidth>m.offsetHeight)){B=Math[0>E?"max":"min"](E,H);if(w&&(8==f&&!z||9<=f))B=-B;G=m.scrollLeft;m.scrollLeft+=B;B=m.scrollLeft-G;y.x-=B}if(0<I*F&&(m.scrollTop||m==c||m.scrollHeight>m.offsetHeight))B=Math.ceil(Math[0>F?"max":"min"](F,I)),G=m.scrollTop,m.scrollTop+=B,B=m.scrollTop-G,y.y-=B;m=m!=c&&!D&&m.parentNode}}}catch(J){console.error("scrollIntoView: "+J),d.scrollIntoView(!1)}}};f.setObject("dojo.window",d);return d})},"dojo/touch":function(){define("./_base/kernel ./aspect ./dom ./dom-class ./_base/lang ./on ./has ./mouse ./domReady ./_base/window".split(" "),
function(f,l,h,e,a,b,c,d,n,g){function A(a,d,c){return z&&c?function(a,d){return b(a,c,d)}:C?function(c,g){var e=b(c,d,g),x=b(c,a,function(b){(!q||(new Date).getTime()>q+1E3)&&g.call(this,b)});return{remove:function(){e.remove();x.remove()}}}:function(c,d){return b(c,a,d)}}function u(b){do if(b.dojoClick)return b.dojoClick;while(b=b.parentNode)}function s(a,c,d){if(p=!a.target.disabled&&u(a.target))y=a.target,m=a.touches?a.touches[0].pageX:a.clientX,k=a.touches?a.touches[0].pageY:a.clientY,D=("object"==
typeof p?p.x:"number"==typeof p?p:0)||4,w=("object"==typeof p?p.y:"number"==typeof p?p:0)||4,v||(v=!0,g.doc.addEventListener(c,function(b){p=p&&b.target==y&&Math.abs((b.touches?b.touches[0].pageX:b.clientX)-m)<=D&&Math.abs((b.touches?b.touches[0].pageY:b.clientY)-k)<=w},!0),g.doc.addEventListener(d,function(a){if(p){r=(new Date).getTime();var c=a.target;"LABEL"===c.tagName&&(c=h.byId(c.getAttribute("for"))||c);setTimeout(function(){b.emit(c,"click",{bubbles:!0,cancelable:!0,_dojo_click:!0})})}},!0),
a=function(b){g.doc.addEventListener(b,function(a){!a._dojo_click&&((new Date).getTime()<=r+1E3&&!("INPUT"==a.target.tagName&&e.contains(a.target,"dijitOffScreen")))&&(a.stopPropagation(),a.stopImmediatePropagation&&a.stopImmediatePropagation(),"click"==b&&(("INPUT"!=a.target.tagName||"radio"==a.target.type||"checkbox"==a.target.type)&&"TEXTAREA"!=a.target.tagName)&&a.preventDefault())},!0)},a("click"),a("mousedown"),a("mouseup"))}var C=c("touch"),t=5>c("ios"),z=navigator.msPointerEnabled,v,p,y,m,
k,D,w,r,q,x;C&&(z?n(function(){g.doc.addEventListener("MSPointerDown",function(b){s(b,"MSPointerMove","MSPointerUp")},!0)}):n(function(){function d(b){var g=a.delegate(b,{bubbles:!0});6<=c("ios")&&(g.touches=b.touches,g.altKey=b.altKey,g.changedTouches=b.changedTouches,g.ctrlKey=b.ctrlKey,g.metaKey=b.metaKey,g.shiftKey=b.shiftKey,g.targetTouches=b.targetTouches);return g}x=g.body();g.doc.addEventListener("touchstart",function(a){q=(new Date).getTime();var c=x;x=a.target;b.emit(c,"dojotouchout",{relatedTarget:x,
bubbles:!0});b.emit(x,"dojotouchover",{relatedTarget:c,bubbles:!0});s(a,"touchmove","touchend")},!0);b(g.doc,"touchmove",function(a){q=(new Date).getTime();var c=g.doc.elementFromPoint(a.pageX-(t?0:g.global.pageXOffset),a.pageY-(t?0:g.global.pageYOffset));c&&(x!==c&&(b.emit(x,"dojotouchout",{relatedTarget:c,bubbles:!0}),b.emit(c,"dojotouchover",{relatedTarget:x,bubbles:!0}),x=c),b.emit(c,"dojotouchmove",d(a)))});b(g.doc,"touchend",function(a){q=(new Date).getTime();var c=g.doc.elementFromPoint(a.pageX-
(t?0:g.global.pageXOffset),a.pageY-(t?0:g.global.pageYOffset))||g.body();b.emit(c,"dojotouchend",d(a))})}));l={press:A("mousedown","touchstart","MSPointerDown"),move:A("mousemove","dojotouchmove","MSPointerMove"),release:A("mouseup","dojotouchend","MSPointerUp"),cancel:A(d.leave,"touchcancel",C?"MSPointerCancel":null),over:A("mouseover","dojotouchover","MSPointerOver"),out:A("mouseout","dojotouchout","MSPointerOut"),enter:d._eventHandler(A("mouseover","dojotouchover","MSPointerOver")),leave:d._eventHandler(A("mouseout",
"dojotouchout","MSPointerOut"))};return f.touch=l})},"dojo/Stateful":function(){define(["./_base/declare","./_base/lang","./_base/array","./when"],function(f,l,h,e){return f("dojo.Stateful",null,{_attrPairNames:{},_getAttrNames:function(a){var b=this._attrPairNames;return b[a]?b[a]:b[a]={s:"_"+a+"Setter",g:"_"+a+"Getter"}},postscript:function(a){a&&this.set(a)},_get:function(a,b){return"function"===typeof this[b.g]?this[b.g]():this[a]},get:function(a){return this._get(a,this._getAttrNames(a))},set:function(a,
b){if("object"===typeof a){for(var c in a)a.hasOwnProperty(c)&&"_watchCallbacks"!=c&&this.set(c,a[c]);return this}c=this._getAttrNames(a);var d=this._get(a,c);c=this[c.s];var n;"function"===typeof c?n=c.apply(this,Array.prototype.slice.call(arguments,1)):this[a]=b;if(this._watchCallbacks){var g=this;e(n,function(){g._watchCallbacks(a,d,b)})}return this},_changeAttrValue:function(a,b){var c=this.get(a);this[a]=b;this._watchCallbacks&&this._watchCallbacks(a,c,b);return this},watch:function(a,b){var c=
this._watchCallbacks;if(!c)var d=this,c=this._watchCallbacks=function(b,a,g,e){var f=function(c){if(c){c=c.slice();for(var e=0,f=c.length;e<f;e++)c[e].call(d,b,a,g)}};f(c["_"+b]);e||f(c["*"])};!b&&"function"===typeof a?(b=a,a="*"):a="_"+a;var e=c[a];"object"!==typeof e&&(e=c[a]=[]);e.push(b);var g={};g.unwatch=g.remove=function(){var a=h.indexOf(e,b);-1<a&&e.splice(a,1)};return g}})})},"dojo/cache":function(){define(["./_base/kernel","./text"],function(f){return f.cache})},"dojo/text":function(){define(["./_base/kernel",
"require","./has","./request"],function(f,l,h,e){var a;a=function(b,a,c){e(b,{sync:!!a}).then(c)};var b={},c=function(b){if(b){b=b.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,"");var a=b.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);a&&(b=a[1])}else b="";return b},d={},n={};f.cache=function(d,e,f){var h;"string"==typeof d?/\//.test(d)?(h=d,f=e):h=l.toUrl(d.replace(/\./g,"/")+(e?"/"+e:"")):(h=d+"",f=e);d=void 0!=f&&"string"!=typeof f?f.value:f;f=f&&f.sanitize;if("string"==typeof d)return b[h]=
d,f?c(d):d;if(null===d)return delete b[h],null;h in b||a(h,!0,function(a){b[h]=a});return f?c(b[h]):b[h]};return{dynamic:!0,normalize:function(b,a){var c=b.split("!"),d=c[0];return(/^\./.test(d)?a(d):d)+(c[1]?"!"+c[1]:"")},load:function(e,f,h){e=e.split("!");var l=1<e.length,C=e[0],t=f.toUrl(e[0]);e="url:"+t;var z=d,v=function(b){h(l?c(b):b)};C in b?z=b[C]:f.cache&&e in f.cache?z=f.cache[e]:t in b&&(z=b[t]);if(z===d)if(n[t])n[t].push(v);else{var p=n[t]=[v];a(t,!f.async,function(a){b[C]=b[t]=a;for(var c=
0;c<p.length;)p[c++](a);delete n[t]})}else v(z)}}})},"dojo/request":function(){define(["./request/default!"],function(f){return f})},"dojo/request/default":function(){define(["exports","require","../has"],function(f,l,h){var e=h("config-requestProvider");e||(e="./xhr");f.getPlatformDefaultId=function(){return"./xhr"};f.load=function(a,b,c,d){l(["platform"==a?"./xhr":e],function(b){c(b)})}})},"dojo/cookie":function(){define(["./_base/kernel","./regexp"],function(f,l){f.cookie=function(f,e,a){var b=
document.cookie,c;if(1==arguments.length)c=(c=b.match(RegExp("(?:^|; )"+l.escapeString(f)+"\x3d([^;]*)")))?decodeURIComponent(c[1]):void 0;else{a=a||{};b=a.expires;if("number"==typeof b){var d=new Date;d.setTime(d.getTime()+864E5*b);b=a.expires=d}b&&b.toUTCString&&(a.expires=b.toUTCString());e=encodeURIComponent(e);var b=f+"\x3d"+e,n;for(n in a)b+="; "+n,d=a[n],!0!==d&&(b+="\x3d"+d);document.cookie=b}return c};f.cookie.isSupported=function(){"cookieEnabled"in navigator||(this("__djCookieTest__","CookiesAllowed"),
navigator.cookieEnabled="CookiesAllowed"==this("__djCookieTest__"),navigator.cookieEnabled&&this("__djCookieTest__","",{expires:-1}));return navigator.cookieEnabled};return f.cookie})},"dojo/regexp":function(){define(["./_base/kernel","./_base/lang"],function(f,l){var h={};l.setObject("dojo.regexp",h);h.escapeString=function(e,a){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(b){return a&&-1!=a.indexOf(b)?b:"\\"+b})};h.buildGroupRE=function(e,a,b){if(!(e instanceof Array))return a(e);for(var c=
[],d=0;d<e.length;d++)c.push(a(e[d]));return h.group(c.join("|"),b)};h.group=function(e,a){return"("+(a?"?:":"")+e+")"};return h})},"dojo/i18n":function(){define("./_base/kernel require ./has ./_base/array ./_base/config ./_base/lang ./_base/xhr ./json module".split(" "),function(f,l,h,e,a,b,c,d,n){h.add("dojo-preload-i18n-Api",1);c=f.i18n={};var g=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,A=function(b,a,c,d){var e=[c+d];a=a.split("-");for(var f="",g=0;g<a.length;g++)if(f+=(f?"-":"")+a[g],!b||b[f])e.push(c+
f+"/"+d),e.specificity=f;return e},u={},s=function(b,a,c){c=c?c.toLowerCase():f.locale;b=b.replace(/\./g,"/");a=a.replace(/\./g,"/");return/root/i.test(c)?b+"/nls/"+a:b+"/nls/"+c+"/"+a},C=f.getL10nName=function(b,a,c){return n.id+"!"+s(b,a,c)},t=function(a,c,d,e,f,g){a([c],function(k){var h=b.clone(k.root),l=A(!k._v1x&&k,f,d,e);a(l,function(){for(var a=1;a<l.length;a++)h=b.mixin(b.clone(h),arguments[a]);u[c+"/"+f]=h;h.$locale=l.specificity;g()})})},z=function(c){var d=a.extraLocale||[],d=b.isArray(d)?
d:[d];d.push(c);return d},v=function(a,c,l){if(h("dojo-preload-i18n-Api")){var n=a.split("*"),p="preload"==n[1];p&&(u[a]||(u[a]=1,D(n[2],d.parse(n[3]),1,c)),l(1));if(!(n=p))m&&k.push([a,c,l]),n=m;if(n)return}a=g.exec(a);var q=a[1]+"/",s=a[5]||a[4],r=q+s,n=(a=a[5]&&a[4])||f.locale,v=r+"/"+n;a=a?[n]:z(n);var y=a.length,A=function(){--y||l(b.delegate(u[v]))};e.forEach(a,function(a){var b=r+"/"+a;h("dojo-preload-i18n-Api")&&w(b);u[b]?A():t(c,r,q,s,a,A)})};if(h("dojo-unit-tests"))var p=c.unitTests=[];
h("dojo-preload-i18n-Api");var y=c.normalizeLocale=function(a){a=a?a.toLowerCase():f.locale;return"root"==a?"ROOT":a},m=0,k=[],D=c._preloadLocalizations=function(a,b,c,d){function g(a,b){d([a],b)}function h(a,b){for(var c=a.split("-");c.length;){if(b(c.join("-")))return;c.pop()}b("ROOT")}function n(c){c=y(c);h(c,function(c){if(0<=e.indexOf(b,c)){var d=a.replace(/\./g,"/")+"_"+c;m++;g(d,function(a){for(var b in a)u[l.toAbsMid(b)+"/"+c]=a[b];for(--m;!m&&k.length;)v.apply(null,k.shift())});return!0}return!1})}
d=d||l;n();e.forEach(f.config.extraLocale,n)},w=function(){},r={},q=new Function("__bundle","__checkForLegacyModules","__mid","__amdValue","var define \x3d function(mid, factory){define.called \x3d 1; __amdValue.result \x3d factory || mid;},\t   require \x3d function(){define.called \x3d 1;};try{define.called \x3d 0;eval(__bundle);if(define.called\x3d\x3d1)return __amdValue;if((__checkForLegacyModules \x3d __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),
w=function(a){for(var b,c=a.split("/"),d=f.global[c[0]],e=1;d&&e<c.length-1;d=d[c[e++]]);d&&((b=d[c[e]])||(b=d[c[e].replace(/-/g,"_")]),b&&(u[a]=b));return b};c.getLocalization=function(a,b,c){var d;a=s(a,b,c);v(a,l,function(a){d=a});return d};h("dojo-unit-tests")&&p.push(function(a){a.register("tests.i18n.unit",function(a){var b;b=q("{prop:1}",w,"nonsense",r);a.is({prop:1},b);a.is(void 0,b[1]);b=q("({prop:1})",w,"nonsense",r);a.is({prop:1},b);a.is(void 0,b[1]);b=q("{'prop-x':1}",w,"nonsense",r);
a.is({"prop-x":1},b);a.is(void 0,b[1]);b=q("({'prop-x':1})",w,"nonsense",r);a.is({"prop-x":1},b);a.is(void 0,b[1]);b=q("define({'prop-x':1})",w,"nonsense",r);a.is(r,b);a.is({"prop-x":1},r.result);b=q("define('some/module', {'prop-x':1})",w,"nonsense",r);a.is(r,b);a.is({"prop-x":1},r.result);b=q("this is total nonsense and should throw an error",w,"nonsense",r);a.is(b instanceof Error,!0)})});return b.mixin(c,{dynamic:!0,normalize:function(a,b){return/^\./.test(a)?b(a):a},load:v,cache:u,getL10nName:C})})},
"dojo/string":function(){define(["./_base/kernel","./_base/lang"],function(f,l){var h={};l.setObject("dojo.string",h);h.rep=function(e,a){if(0>=a||!e)return"";for(var b=[];;){a&1&&b.push(e);if(!(a>>=1))break;e+=e}return b.join("")};h.pad=function(e,a,b,c){b||(b="0");e=String(e);a=h.rep(b,Math.ceil((a-e.length)/b.length));return c?e+a:a+e};h.substitute=function(e,a,b,c){c=c||f.global;b=b?l.hitch(c,b):function(a){return a};return e.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(d,e,f){d=
l.getObject(e,!1,a);f&&(d=l.getObject(f,!1,c).call(c,d,e));return b(d,e).toString()})};h.trim=String.prototype.trim?l.trim:function(e){e=e.replace(/^\s+/,"");for(var a=e.length-1;0<=a;a--)if(/\S/.test(e.charAt(a))){e=e.substring(0,a+1);break}return e};return h})},"dojo/_base/url":function(){define(["./kernel"],function(f){var l=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,h=/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,e=function(){for(var a=arguments,b=[a[0]],
c=1;c<a.length;c++)if(a[c]){var d=new e(a[c]+""),b=new e(b[0]+"");if(""==d.path&&!d.scheme&&!d.authority&&!d.query)null!=d.fragment&&(b.fragment=d.fragment),d=b;else if(!d.scheme&&(d.scheme=b.scheme,!d.authority&&(d.authority=b.authority,"/"!=d.path.charAt(0)))){for(var b=(b.path.substring(0,b.path.lastIndexOf("/")+1)+d.path).split("/"),f=0;f<b.length;f++)"."==b[f]?f==b.length-1?b[f]="":(b.splice(f,1),f--):0<f&&(!(1==f&&""==b[0])&&".."==b[f]&&".."!=b[f-1])&&(f==b.length-1?(b.splice(f,1),b[f-1]=""):
(b.splice(f-1,2),f-=2));d.path=b.join("/")}b=[];d.scheme&&b.push(d.scheme,":");d.authority&&b.push("//",d.authority);b.push(d.path);d.query&&b.push("?",d.query);d.fragment&&b.push("#",d.fragment)}this.uri=b.join("");a=this.uri.match(l);this.scheme=a[2]||(a[1]?"":null);this.authority=a[4]||(a[3]?"":null);this.path=a[5];this.query=a[7]||(a[6]?"":null);this.fragment=a[9]||(a[8]?"":null);null!=this.authority&&(a=this.authority.match(h),this.user=a[3]||null,this.password=a[4]||null,this.host=a[6]||a[7],
this.port=a[9]||null)};e.prototype.toString=function(){return this.uri};return f._Url=e})}}});define("dojorama/layers/d07",[],1);
//@ sourceMappingURL=d07.js.map
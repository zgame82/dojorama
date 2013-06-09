//>>built
define("xstyle/core/base",["xstyle/core/elemental","xstyle/core/expression","xstyle/core/utils","put-selector/put","xstyle/core/Rule"],function(p,q,k,l,f){function m(a,b){return{forElement:function(d){for(var c=this;!(a in d);)if(d=d.parentNode,!d)throw Error(a+" not found");return{element:d,receive:function(b){b(d[a]||c[a])},appendTo:b}},put:function(d){this[a]=d}}}var r={"":0,"false":0,"true":1},s={display:["none",""],visibility:["hidden","visible"],"float":["none","left"]},h=l("div"),g=navigator.userAgent,
n=-1<g.indexOf("WebKit")?"-webkit-":-1<g.indexOf("Firefox")?"-moz-":-1<g.indexOf("MSIE")?"-ms-":-1<g.indexOf("Opera")?"-o-":"";f=new f;f.root=!0;f.definitions={Math:Math,module:function(a){return{then:function(b){require([a],b)}}},item:m("item"),content:m("content",function(a){a.appendChild(this.element)}),element:{forElement:function(a){return{element:a,receive:function(b){b(a)},get:function(b){return this.element[b]}}}},event:{receive:function(a){a(currentEvent)}},each:{put:function(a,b,d){b.each=
a}},prefix:{put:function(a,b,d){if("string"==typeof h.style[n+d])return b.setStyle(n+d,a),!0}},"var":{put:function(a,b,d){(b.variables||(b.variables={}))[d]=a;b=(b=b.variableListeners)&&b[d]||0;for(d=0;d<b.length;d++)b[d](a)},call:function(a,b,d,c){this.receive(function(a){a=c.toString().replace(/var\([^)]+\)/g,a);var f=r[a];if(-1<f){var g=s[d];g&&(a=g[f])}b.setStyle(d,a)},b,a.args[0])},receive:function(a,b,d){var c=b;do{var e=c.variables&&c.variables[d]||c.definitions&&c.definitions[d];if(e){if(e.receive)return e.receive(a,
b,d);b=c.variableListeners||(c.variableListeners={});(b[d]||(b[d]=[])).push(a);return a(e)}c=c.parent}while(c);a()}},on:{put:function(a,b,d){p.on(document,d.slice(3),b.selector,function(c){currentEvent=c;var e=q(b,d,a);e.forElement&&(e=e.forElement(c.target));e&&e.stop&&e.stop();currentEvent=null})}},"@supports":{selector:function(a){function b(a){var c;if(c=a.match(/^\s*not(.*)/))return!b(c[1]);if(c=a.match(/\((.*)\)/))return b(c[1]);if(c=a.match(/([^:]*):(.*)/))return a=k.convertCssNameToJs(c[1]),
c=h.style[a]=c[2],h.style[a]==c;if(c=a.match(/\w+\[(.*)=(.*)\]/))return l(c[0])[c[1]]==c[2];if(c=a.match(/\w+/))return k.isTagSupported(c);throw Error("can't parse @supports string");}b(a.selector.slice(10))?a.selector="":a.disabled=!0}}};return f});
//@ sourceMappingURL=base.js.map
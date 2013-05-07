//>>built
require({cache:{"mijit/_TemplatedMixin":function(){define("dojo/_base/lang dojo/touch ./_WidgetBase dojo/string dojo/cache dojo/_base/array dojo/_base/declare dojo/dom-construct dojo/sniff dojo/_base/unload".split(" "),function(q,h,f,u,g,F,r,v,b,C){var G=r("dijit._TemplatedMixin",null,{templateString:null,templatePath:null,_skipNodeCache:!1,_earlyTemplatedStartup:!1,constructor:function(){this._attachPoints=[];this._attachEvents=[]},_stringRepl:function(b){var l=this.declaredClass,h=this;return u.substitute(b,
this,function(b,z){"!"==z.charAt(0)&&(b=q.getObject(z.substr(1),!1,h));if("undefined"==typeof b)throw Error(l+" template:"+z);return null==b?"":"!"==z.charAt(0)?b:b.toString().replace(/"/g,"\x26quot;")},this)},buildRendering:function(){this.templateString||(this.templateString=g(this.templatePath,{sanitize:!0}));var b=G.getCachedTemplate(this.templateString,this._skipNodeCache,this.ownerDocument),l;if(q.isString(b)){if(l=v.toDom(this._stringRepl(b),this.ownerDocument),1!=l.nodeType)throw Error("Invalid template: "+
b);}else l=b.cloneNode(!0);this.domNode=l;this.inherited(arguments);this._attachTemplateNodes(l,function(b,l){return b.getAttribute(l)});this._beforeFillContent();this._fillContent(this.srcNodeRef)},_beforeFillContent:function(){},_fillContent:function(b){var l=this.containerNode;if(b&&l)for(;b.hasChildNodes();)l.appendChild(b.firstChild)},_attachTemplateNodes:function(b,l){for(var u=q.isArray(b)?b:b.all||b.getElementsByTagName("*"),w=q.isArray(b)?0:-1;0>w||u[w];w++){var f=-1==w?b:u[w];if(!this.widgetsInTemplate||
!l(f,"dojoType")&&!l(f,"data-dojo-type")){var n=l(f,"dojoAttachPoint")||l(f,"data-dojo-attach-point");if(n)for(var r=n.split(/\s*,\s*/);n=r.shift();)q.isArray(this[n])?this[n].push(f):this[n]=f,this._attachPoints.push(n);if(n=l(f,"dojoAttachEvent")||l(f,"data-dojo-attach-event"))for(var r=n.split(/\s*,\s*/),C=q.trim;n=r.shift();)if(n){var g=null;-1!=n.indexOf(":")?(g=n.split(":"),n=C(g[0]),g=C(g[1])):n=C(n);g||(g=n);this._attachEvents.push(this.connect(f,h[n]||n,g))}}}},destroyRendering:function(){F.forEach(this._attachPoints,
function(b){delete this[b]},this);this._attachPoints=[];F.forEach(this._attachEvents,this.disconnect,this);this._attachEvents=[];this.inherited(arguments)}});G._templateCache={};G.getCachedTemplate=function(b,l,f){var h=G._templateCache,g=b,n=h[g];if(n){try{if(!n.ownerDocument||n.ownerDocument==(f||document))return n}catch(r){}v.destroy(n)}b=u.trim(b);if(l||b.match(/\$\{([^\}]+)\}/g))return h[g]=b;l=v.toDom(b,f);if(1!=l.nodeType)throw Error("Invalid template: "+b);return h[g]=l};b("ie")&&C.addOnWindowUnload(function(){var b=
G._templateCache,l;for(l in b){var f=b[l];"object"==typeof f&&v.destroy(f);delete b[l]}});q.extend(f,{dojoAttachEvent:"",dojoAttachPoint:""});return G})},"mijit/_WidgetBase":function(){define("require dojo/_base/array dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/_base/kernel dojo/_base/lang dojo/on dojo/ready dojo/Stateful dojo/topic dojo/_base/window ./Destroyable ./registry".split(" "),
function(q,h,f,u,g,F,r,v,b,C,G,z,l,K,w,L,n,P,J,I,H,B){function M(a){return function(c){v[c?"set":"remove"](this.domNode,a,c);this._set(a,c)}}l.add("dijit-legacy-requires",!K.isAsync);l("dijit-legacy-requires")&&n(0,function(){q(["dijit/_base/manager"])});var e={};return F("dijit._WidgetBase",[P,H],{id:"",_setIdAttr:"domNode",lang:"",_setLangAttr:M("lang"),dir:"",_setDirAttr:M("dir"),textDir:"","class":"",_setClassAttr:{node:"domNode",type:"class"},style:"",title:"",tooltip:"",baseClass:"",srcNodeRef:null,
domNode:null,containerNode:null,ownerDocument:null,_setOwnerDocumentAttr:function(a){this._set("ownerDocument",a)},attributeMap:{},_blankGif:u.blankGif||q.toUrl("dojo/resources/blank.gif"),postscript:function(a,c){this.create(a,c)},create:function(a,c){this.srcNodeRef=r.byId(c);this._connects=[];this._supportingWidgets=[];this.srcNodeRef&&"string"==typeof this.srcNodeRef.id&&(this.id=this.srcNodeRef.id);a&&(this.params=a,w.mixin(this,a));this.postMixInProperties();this.id||(this.id=B.getUniqueId(this.declaredClass.replace(/\./g,
"_")),this.params&&delete this.params.id);this.ownerDocument=this.ownerDocument||(this.srcNodeRef?this.srcNodeRef.ownerDocument:I.doc);this.ownerDocumentBody=I.body(this.ownerDocument);B.add(this);this.buildRendering();var d;if(this.domNode){this._applyAttributes();var t=this.srcNodeRef;t&&(t.parentNode&&this.domNode!==t)&&(t.parentNode.replaceChild(this.domNode,t),d=!0);this.domNode.setAttribute("widgetId",this.id)}this.postCreate();d&&delete this.srcNodeRef;this._created=!0},_applyAttributes:function(){var a=
this.constructor,c=a._setterAttrs;if(!c){var c=a._setterAttrs=[],d;for(d in this.attributeMap)c.push(d);var a=a.prototype,t;for(t in a)t in this.attributeMap||"_set"+t.replace(/^[a-z]|-[a-zA-Z]/g,function(a){return a.charAt(a.length-1).toUpperCase()})+"Attr"in a&&c.push(t)}var b={},e;for(e in this.params||{})b[e]=this[e];h.forEach(c,function(a){a in b||this[a]&&this.set(a,this[a])},this);for(e in b)this.set(e,b[e])},postMixInProperties:function(){},buildRendering:function(){this.domNode||(this.domNode=
this.srcNodeRef||this.ownerDocument.createElement("div"));if(this.baseClass){var a=this.baseClass.split(" ");this.isLeftToRight()||(a=a.concat(h.map(a,function(a){return a+"Rtl"})));b.add(this.domNode,a)}},postCreate:function(){},startup:function(){this._started||(this._started=!0,h.forEach(this.getChildren(),function(a){!a._started&&(!a._destroyed&&w.isFunction(a.startup))&&(a.startup(),a._started=!0)}))},destroyRecursive:function(a){this._beingDestroyed=!0;this.destroyDescendants(a);this.destroy(a)},
destroy:function(a){function c(c){c.destroyRecursive?c.destroyRecursive(a):c.destroy&&c.destroy(a)}this._beingDestroyed=!0;this.uninitialize();h.forEach(this._connects,w.hitch(this,"disconnect"));h.forEach(this._supportingWidgets,c);this.domNode&&h.forEach(B.findWidgets(this.domNode,this.containerNode),c);this.destroyRendering(a);B.remove(this.id);this._destroyed=!0},destroyRendering:function(a){this.bgIframe&&(this.bgIframe.destroy(a),delete this.bgIframe);this.domNode&&(a?v.remove(this.domNode,
"widgetId"):C.destroy(this.domNode),delete this.domNode);this.srcNodeRef&&(a||C.destroy(this.srcNodeRef),delete this.srcNodeRef)},destroyDescendants:function(a){h.forEach(this.getChildren(),function(c){c.destroyRecursive&&c.destroyRecursive(a)})},uninitialize:function(){return!1},_setStyleAttr:function(a){var c=this.domNode;w.isObject(a)?z.set(c,a):c.style.cssText=c.style.cssText?c.style.cssText+("; "+a):a;this._set("style",a)},_attrToDom:function(a,c,d){d=3<=arguments.length?d:this.attributeMap[a];
h.forEach(w.isArray(d)?d:[d],function(d){var e=this[d.node||d||"domNode"];switch(d.type||"attribute"){case "attribute":w.isFunction(c)&&(c=w.hitch(this,c));d=d.attribute?d.attribute:/^on[A-Z][a-zA-Z]*$/.test(a)?a.toLowerCase():a;e.tagName?v.set(e,d,c):e.set(d,c);break;case "innerText":e.innerHTML="";e.appendChild(this.ownerDocument.createTextNode(c));break;case "innerHTML":e.innerHTML=c;break;case "class":b.replace(e,c,this[a])}},this)},get:function(a){var c=this._getAttrNames(a);return this[c.g]?
this[c.g]():this[a]},set:function(a,c){if("object"===typeof a){for(var d in a)this.set(d,a[d]);return this}d=this._getAttrNames(a);var b=this[d.s];if(w.isFunction(b))var M=b.apply(this,Array.prototype.slice.call(arguments,1));else{var b=this.focusNode&&!w.isFunction(this.focusNode)?"focusNode":"domNode",l=this[b]&&this[b].tagName,f;if(f=l)if(!(f=e[l])){f=this[b];var u={},m;for(m in f)u[m.toLowerCase()]=!0;f=e[l]=u}m=f;d=a in this.attributeMap?this.attributeMap[a]:d.s in this?this[d.s]:m&&d.l in m&&
"function"!=typeof c||/^aria-|^data-|^role$/.test(a)?b:null;null!=d&&this._attrToDom(a,c,d);this._set(a,c)}return M||this},_attrPairNames:{},_getAttrNames:function(a){var c=this._attrPairNames;if(c[a])return c[a];var d=a.replace(/^[a-z]|-[a-zA-Z]/g,function(a){return a.charAt(a.length-1).toUpperCase()});return c[a]={n:a+"Node",s:"_set"+d+"Attr",g:"_get"+d+"Attr",l:d.toLowerCase()}},_set:function(a,c){var d=this[a];this[a]=c;this._created&&c!==d&&(this._watchCallbacks&&this._watchCallbacks(a,d,c),
this.emit("attrmodified-"+a,{detail:{prevValue:d,newValue:c}}))},emit:function(a,c,d){c=c||{};void 0===c.bubbles&&(c.bubbles=!0);void 0===c.cancelable&&(c.cancelable=!0);c.detail||(c.detail={});c.detail.widget=this;var b,e=this["on"+a];e&&(b=e.apply(this,d?d:[c]));this._started&&!this._beingDestroyed&&L.emit(this.domNode,a.toLowerCase(),c);return b},on:function(a,c){var d=this._onMap(a);return d?f.after(this,d,c,!0):this.own(L(this.domNode,a,c))[0]},_onMap:function(a){var c=this.constructor,d=c._onMap;
if(!d){var d=c._onMap={},b;for(b in c.prototype)/^on/.test(b)&&(d[b.replace(/^on/,"").toLowerCase()]=b)}return d["string"==typeof a&&a.toLowerCase()]},toString:function(){return"[Widget "+this.declaredClass+", "+(this.id||"NO ID")+"]"},getChildren:function(){return this.containerNode?B.findWidgets(this.containerNode):[]},getParent:function(){return B.getEnclosingWidget(this.domNode.parentNode)},connect:function(a,c,d){return this.own(g.connect(a,c,this,d))[0]},disconnect:function(a){a.remove()},subscribe:function(a,
c){return this.own(J.subscribe(a,w.hitch(this,c)))[0]},unsubscribe:function(a){a.remove()},isLeftToRight:function(){return this.dir?"ltr"==this.dir:G.isBodyLtr(this.ownerDocument)},isFocusable:function(){return this.focus&&"none"!=z.get(this.domNode,"display")},placeAt:function(a,c){var d=!a.tagName&&B.byId(a);d&&d.addChild&&(!c||"number"===typeof c)?d.addChild(this,c):(d=d?d.containerNode&&!/after|before|replace/.test(c||"")?d.containerNode:d.domNode:r.byId(a,this.ownerDocument),C.place(this.domNode,
d,c),!this._started&&(this.getParent()||{})._started&&this.startup());return this},getTextDir:function(a,c){return c},applyTextDir:function(){},defer:function(a,c){var d=setTimeout(w.hitch(this,function(){d=null;this._destroyed||w.hitch(this,a)()}),c||0);return{remove:function(){d&&(clearTimeout(d),d=null);return null}}}})})},"mijit/Destroyable":function(){define(["dojo/_base/array","dojo/aspect","dojo/_base/declare"],function(q,h,f){return f("dijit.Destroyable",null,{destroy:function(f){this._destroyed=
!0},own:function(){q.forEach(arguments,function(f){var g="destroyRecursive"in f?"destroyRecursive":"destroy"in f?"destroy":"remove",q=h.before(this,"destroy",function(h){f[g](h)}),r=h.after(f,g,function(){q.remove();r.remove()},!0)},this);return arguments}})})},"mijit/registry":function(){define(["dojo/_base/array","dojo/sniff","dojo/_base/unload","dojo/_base/window","./main"],function(q,h,f,u,g){var F={},r={},v={length:0,add:function(b){if(r[b.id])throw Error("Tried to register widget with id\x3d\x3d"+
b.id+" but that id is already registered");r[b.id]=b;this.length++},remove:function(b){r[b]&&(delete r[b],this.length--)},byId:function(b){return"string"==typeof b?r[b]:b},byNode:function(b){return r[b.getAttribute("widgetId")]},toArray:function(){var b=[],f;for(f in r)b.push(r[f]);return b},getUniqueId:function(b){var f;do f=b+"_"+(b in F?++F[b]:F[b]=0);while(r[f]);return"dijit"==g._scopeName?f:g._scopeName+"_"+f},findWidgets:function(b,f){function h(b){for(b=b.firstChild;b;b=b.nextSibling)if(1==
b.nodeType){var g=b.getAttribute("widgetId");g?(g=r[g])&&u.push(g):b!==f&&h(b)}}var u=[];h(b);return u},_destroyAll:function(){g._curFocus=null;g._prevFocus=null;g._activeStack=[];q.forEach(v.findWidgets(u.body()),function(b){b._destroyed||(b.destroyRecursive?b.destroyRecursive():b.destroy&&b.destroy())})},getEnclosingWidget:function(b){for(;b;){var f=b.getAttribute&&b.getAttribute("widgetId");if(f)return r[f];b=b.parentNode}return null},_hash:r};return g.registry=v})},"mijit/main":function(){define(["dojo/_base/kernel"],
function(q){return q.dijit})},"mijit/_WidgetsInTemplateMixin":function(){define(["dojo/_base/array","dojo/_base/declare","dojo/parser"],function(q,h,f){return h("dijit._WidgetsInTemplateMixin",null,{_earlyTemplatedStartup:!1,widgetsInTemplate:!0,_beforeFillContent:function(){if(this.widgetsInTemplate){var h=this._startupWidgets=f.parse(this.domNode,{noStart:!this._earlyTemplatedStartup,template:!0,inherited:{dir:this.dir,lang:this.lang,textDir:this.textDir},propsThis:this,scope:"dojo"});if(!h.isFulfilled())throw Error(this.declaredClass+
": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.");this._attachTemplateNodes(h,function(f,h){return f[h]})}},startup:function(){q.forEach(this._startupWidgets,function(f){f&&(!f._started&&f.startup)&&f.startup()});this.inherited(arguments)}})})},"dojo/parser":function(){define("require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "),
function(q,h,f,u,g,F,r,v,b,C,G,z,l,K,w,L){function n(b){return eval("("+b+")")}function P(b){var e=b._nameCaseMap,a=b.prototype;if(!e||e._extendCnt<I){var e=b._nameCaseMap={},c;for(c in a)"_"!==c.charAt(0)&&(e[c.toLowerCase()]=c);e._extendCnt=I}return e}function J(b,e){var a=b.join();if(!H[a]){for(var c=[],d=0,t=b.length;d<t;d++){var h=b[d];c[c.length]=H[h]=H[h]||f.getObject(h)||~h.indexOf("/")&&(e?e(h):q(h))}d=c.shift();H[a]=c.length?d.createSubclass?d.createSubclass(c):d.extend.apply(d,c):d}return H[a]}
new Date("X");var I=0;b.after(f,"extend",function(){I++},!0);var H={},B={_clearCache:function(){I++;H={}},_functionFromScript:function(b,e){var a="",c="",d=b.getAttribute(e+"args")||b.getAttribute("args"),f=b.getAttribute("with"),d=(d||"").split(/\s*,\s*/);f&&f.length&&u.forEach(f.split(/\s*,\s*/),function(b){a+="with("+b+"){";c+="}"});return new Function(d,a+b.innerHTML+c)},instantiate:function(b,e,a){e=e||{};a=a||{};var c=(a.scope||h._scopeName)+"Type",d="data-"+(a.scope||h._scopeName)+"-",f=d+
"type",l=d+"mixins",g=[];u.forEach(b,function(a){var b=c in e?e[c]:a.getAttribute(f)||a.getAttribute(c);if(b){var d=a.getAttribute(l),b=d?[b].concat(d.split(/\s*,\s*/)):[b];g.push({node:a,types:b})}});return this._instantiate(g,e,a)},_instantiate:function(b,e,a,c){function d(b){!e._started&&!a.noStart&&u.forEach(b,function(a){"function"===typeof a.startup&&!a._started&&a.startup()});return b}b=u.map(b,function(b){var c=b.ctor||J(b.types,a.contextRequire);if(!c)throw Error("Unable to resolve constructor for: '"+
b.types.join()+"'");return this.construct(c,b.node,e,a,b.scripts,b.inherited)},this);return c?C(b).then(d):d(b)},construct:function(g,e,a,c,d,t){function r(a){Q&&f.setObject(Q,a);for(s=0;s<z.length;s++)b[z[s].advice||"after"](a,z[s].method,f.hitch(a,z[s].func),!0);for(s=0;s<R.length;s++)R[s].call(a);for(s=0;s<N.length;s++)a.watch(N[s].prop,N[s].func);for(s=0;s<O.length;s++)w(a,O[s].event,O[s].func);return a}var q=g&&g.prototype;c=c||{};var A={};c.defaults&&f.mixin(A,c.defaults);t&&f.mixin(A,t);var E;
l("dom-attributes-explicit")?E=e.attributes:l("dom-attributes-specified-flag")?E=u.filter(e.attributes,function(a){return a.specified}):(t=(/^input$|^img$/i.test(e.nodeName)?e:e.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g,"").replace(/^\s*<[a-zA-Z0-9]*\s*/,"").replace(/\s*>.*$/,""),E=u.map(t.split(/\s+/),function(a){var b=a.toLowerCase();return{name:a,value:"LI"==e.nodeName&&"value"==a||"enctype"==b?e.getAttribute(b):e.getAttributeNode(b).value}}));var m=c.scope||h._scopeName;
t="data-"+m+"-";var k={};"dojo"!==m&&(k[t+"props"]="data-dojo-props",k[t+"type"]="data-dojo-type",k[t+"mixins"]="data-dojo-mixins",k[m+"type"]="dojoType",k[t+"id"]="data-dojo-id");for(var s=0,p,m=[],Q,y;p=E[s++];){var x=p.name,D=x.toLowerCase();p=p.value;switch(k[D]||D){case "data-dojo-type":case "dojotype":case "data-dojo-mixins":break;case "data-dojo-props":y=p;break;case "data-dojo-id":case "jsid":Q=p;break;case "data-dojo-attach-point":case "dojoattachpoint":A.dojoAttachPoint=p;break;case "data-dojo-attach-event":case "dojoattachevent":A.dojoAttachEvent=
p;break;case "class":A["class"]=e.className;break;case "style":A.style=e.style&&e.style.cssText;break;default:if(x in q||(x=P(g)[D]||x),x in q)switch(typeof q[x]){case "string":A[x]=p;break;case "number":A[x]=p.length?Number(p):NaN;break;case "boolean":A[x]="false"!=p.toLowerCase();break;case "function":""===p||-1!=p.search(/[^\w\.]+/i)?A[x]=new Function(p):A[x]=f.getObject(p,!1)||new Function(p);m.push(x);break;default:D=q[x],A[x]=D&&"length"in D?p?p.split(/\s*,\s*/):[]:D instanceof Date?""==p?new Date(""):
"now"==p?new Date:G.fromISOString(p):D instanceof v?h.baseUrl+p:n(p)}else A[x]=p}}for(E=0;E<m.length;E++)k=m[E].toLowerCase(),e.removeAttribute(k),e[k]=null;if(y)try{y=n.call(c.propsThis,"{"+y+"}"),f.mixin(A,y)}catch(C){throw Error(C.toString()+" in data-dojo-props\x3d'"+y+"'");}f.mixin(A,a);d||(d=g&&(g._noScript||q._noScript)?[]:K("\x3e script[type^\x3d'dojo/']",e));var z=[],R=[],N=[],O=[];if(d)for(s=0;s<d.length;s++)k=d[s],e.removeChild(k),a=k.getAttribute(t+"event")||k.getAttribute("event"),c=
k.getAttribute(t+"prop"),y=k.getAttribute(t+"method"),m=k.getAttribute(t+"advice"),E=k.getAttribute("type"),k=this._functionFromScript(k,t),a?"dojo/connect"==E?z.push({method:a,func:k}):"dojo/on"==E?O.push({event:a,func:k}):A[a]=k:"dojo/aspect"==E?z.push({method:y,advice:m,func:k}):"dojo/watch"==E?N.push({prop:c,func:k}):R.push(k);g=(d=g.markupFactory||q.markupFactory)?d(A,e,g):new g(A,e);return g.then?g.then(r):r(g)},scan:function(b,e){function a(b){if(!b.inherited){b.inherited={};var c=b.node,d=
a(b.parent),c={dir:c.getAttribute("dir")||d.dir,lang:c.getAttribute("lang")||d.lang,textDir:c.getAttribute(w)||d.textDir},e;for(e in c)c[e]&&(b.inherited[e]=c[e])}return b.inherited}var c=[],d=[],f={},g=(e.scope||h._scopeName)+"Type",n="data-"+(e.scope||h._scopeName)+"-",r=n+"type",w=n+"textdir",n=n+"mixins",m=b.firstChild,k=e.inherited;if(!k){var s=function(a,b){return a.getAttribute&&a.getAttribute(b)||a.parentNode&&s(a.parentNode,b)},k={dir:s(b,"dir"),lang:s(b,"lang"),textDir:s(b,w)},p;for(p in k)k[p]||
delete k[p]}for(var k={inherited:k},v,y;;)if(m)if(1!=m.nodeType)m=m.nextSibling;else if(v&&"script"==m.nodeName.toLowerCase())(x=m.getAttribute("type"))&&/^dojo\/\w/i.test(x)&&v.push(m),m=m.nextSibling;else if(y)m=m.nextSibling;else{var x=m.getAttribute(r)||m.getAttribute(g);p=m.firstChild;if(!x&&(!p||3==p.nodeType&&!p.nextSibling))m=m.nextSibling;else{y=null;if(x){var D=m.getAttribute(n);v=D?[x].concat(D.split(/\s*,\s*/)):[x];try{y=J(v,e.contextRequire)}catch(C){}y||u.forEach(v,function(a){~a.indexOf("/")&&
!f[a]&&(f[a]=!0,d[d.length]=a)});D=y&&!y.prototype._noScript?[]:null;k={types:v,ctor:y,parent:k,node:m,scripts:D};k.inherited=a(k);c.push(k)}else k={node:m,scripts:v,parent:k};v=D;y=m.stopParser||y&&y.prototype.stopParser&&!e.template;m=p}}else{if(!k||!k.node)break;m=k.node.nextSibling;y=!1;k=k.parent;v=k.scripts}var B=new z;d.length?(l("dojo-debug-messages")&&console.warn("WARNING: Modules being Auto-Required: "+d.join(", ")),(e.contextRequire||q)(d,function(){B.resolve(u.filter(c,function(a){if(!a.ctor)try{a.ctor=
J(a.types,e.contextRequire)}catch(b){}for(var c=a.parent;c&&!c.types;)c=c.parent;var d=a.ctor&&a.ctor.prototype;a.instantiateChildren=!(d&&d.stopParser&&!e.template);a.instantiate=!c||c.instantiate&&c.instantiateChildren;return a.instantiate}))})):B.resolve(c);return B.promise},_require:function(b,e){var a=n("{"+b.innerHTML+"}"),c=[],d=[],g=new z,h=e&&e.contextRequire||q,l;for(l in a)c.push(l),d.push(a[l]);h(d,function(){for(var a=0;a<c.length;a++)f.setObject(c[a],arguments[a]);g.resolve(arguments)});
return g.promise},_scanAmd:function(b,e){var a=new z,c=a.promise;a.resolve(!0);var d=this;K("script[type\x3d'dojo/require']",b).forEach(function(a){c=c.then(function(){return d._require(a,e)});a.parentNode.removeChild(a)});return c},parse:function(b,e){var a;!e&&b&&b.rootNode?(e=b,a=e.rootNode):b&&f.isObject(b)&&!("nodeType"in b)?e=b:a=b;a=a?F.byId(a):r.body();e=e||{};var c=e.template?{template:!0}:{},d=[],g=this,h=this._scanAmd(a,e).then(function(){return g.scan(a,e)}).then(function(a){return g._instantiate(a,
c,e,!0)}).then(function(a){return d=d.concat(a)}).otherwise(function(a){console.error("dojo/parser::parse() error",a);throw a;});f.mixin(d,h);return d}};h.parser=B;g.parseOnLoad&&L(100,B,"parse");return B})}}});define("dojorama/layers/mijit",[],1);
//@ sourceMappingURL=mijit.js.map
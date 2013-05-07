//>>built
require({cache:{"dojo-local-storage/LocalStorage":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/json","dojo/store/util/QueryResults","dojo/store/util/SimpleQueryEngine"],function(d,h,c,g,e){return d(null,{idProperty:"id",queryEngine:e,subsetProperty:null,subsetName:null,constructor:function(b){h.mixin(this,b);this.setData(this.data||[])},get:function(b){var a=localStorage.getItem(b),f=null;try{f=c.parse(a);f[this.idProperty]=b;if(this.subsetProperty){if(f[this.subsetProperty]!==
this.subsetName)return;delete f[this.subsetProperty]}return f}catch(k){}},getIdentity:function(b){return b[this.idProperty]},put:function(b,a){var f=a&&a.id||b[this.idProperty]||Math.random();this.subsetProperty&&(b[this.subsetProperty]=this.subsetName);localStorage.setItem(f,c.stringify(b));return f},add:function(b,a){if(this.get(b[this.idProperty]))throw Error("Object already exists");return this.put(b,a)},remove:function(b){localStorage.removeItem(b)},query:function(b,a){for(var f=[],k=0,c=null,
c=null,k=0;k<localStorage.length;k+=1)c=localStorage.key(k),(c=this.get(c))&&f.push(c);return g(this.queryEngine(b,a)(f))},setData:function(b){var a=0,c=null;b.items&&(this.idProperty=b.identifier,b=this.data=b.items);for(a=0;a<b.length;a+=1)c=b[a],this.put(c)}})})},"dojo-data-model/_CrudModel":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/when ./DataModel".split(" "),function(d,h,c,g,e,b){return d([b],{store:null,errorModel:null,promiseOrValue:[],constructor:function(a){var c,
k={};this.store=a.store;if(a.errorModel)this.errorModel=a.errorModel;else{for(c in this.props)this.props.hasOwnProperty(c)&&(k[c]="");this.errorModel=new b({props:k})}},getErrorModel:function(){return this.errorModel},save:function(a){var b=new g,k=!1,d=null,h={},d=this.get(this.store.idProperty);this.errorModel.initialize();try{this.validate()}catch(l){k=l.errors}k?b.reject(this.normalizeClientSideValidationErrors(k)):(d=null===d||void 0===d||""===d?"add":"put",h=this.serialize(),"add"===d&&delete h[this.store.idProperty],
this.promiseOrValue.save=this.store[d](h,a),e(this.promiseOrValue.save,c.hitch(this,function(a){this.set(this.store.idProperty,a);b.resolve(this)}),c.hitch(this,function(a){b.reject(this.normalizeServerError(a))})));return b.promise},remove:function(a){var b=new g,k=this.get(this.store.idProperty);this.errorModel.initialize();this.promiseOrValue.remove=this.store.remove(k,a);e(this.promiseOrValue.remove,c.hitch(this,function(){this.initialize();b.resolve(this)}),c.hitch(this,function(a){b.reject(this.normalizeServerError(a))}));
return b.promise},normalizeClientSideValidationErrors:function(a){this.errorModel.set(a);return{code:"invalid-input"}},normalizeServerError:function(a){return!a.response||400===a.response.status?{code:"unknown-error"}:403===a.response.status?{code:"forbidden"}:404===a.response.status?{code:"not-found"}:422===a.response.status?(this.normalizeServerSideValidationErrors(a),{code:"invalid-input"}):{code:"unknown-error"}},normalizeServerSideValidationErrors:function(a){},destroy:function(){h.forEach(this.promisOrValue,
function(a){a.cancel&&a.cancel()})}})})},"dojo-data-model/DataModel":function(){define(["dojo/_base/declare","dojo/Stateful"],function(d,h){return d([h],{props:{},constructor:function(c){this.props=c.props||this.props;this.initialize()},deserialize:function(c){var d=null,e=null;this.initialize();for(e in this.props)this.props.hasOwnProperty(e)&&void 0!==c[e]&&(d=this[e+"Deserializer"],"function"===typeof d?d.apply(this,[c[e]]):this.set(e,c[e]))},serialize:function(){var c={},d=null,e=null;for(e in this.props)this.props.hasOwnProperty(e)&&
(d=this[e+"Serializer"],c[e]="function"===typeof d?d.apply(this,[]):this.get(e));return c},validate:function(){var c={},d=!0,e=null,b=null;for(b in this.props)if(this.props.hasOwnProperty(b))try{e=this[b+"Validator"],"function"===typeof e&&e.apply(this,[])}catch(a){c[b]=a.message,d=!1}if(!d)throw{errors:c};},initialize:function(){var c=null;for(c in this.props)this.props.hasOwnProperty(c)&&this.set(c,this.props[c])},getProps:function(){return this.props}})})},"dojo-data-model/ModelStore":function(){define(["dojo/_base/lang",
"dojo/Deferred","dojo/promise/Promise","dojo/when","./QueryResults"],function(d,h,c,g,e){return function(b,a){var f=function(){return new a({store:b})};return d.delegate(b,{getModelInstance:f,get:function(){var a=b.get.apply(b,arguments),e=null,g=null;if(!a)return null;if(!a.then)return g=f(),g.deserialize(a),g;e=new h;a.then(function(a){g=f();g.deserialize(a);e.resolve(g)},function(a){e.reject(a)},function(a){e.progress(a)});return d.delegate(new c,e.promise)},query:function(){return e(b.query.apply(b,
arguments),f)},put:function(a,c){return b.put(a.serialize(),c)},add:function(a,c){return b.add(a.serialize(),c)}})}})},"dojo-data-model/QueryResults":function(){define(["dojo/_base/array","dojo/_base/lang","dojo/Deferred","dojo/promise/Promise","dojo/when"],function(d,h,c,g,e){var b=function(a,f){var k=null,m=function(a){var b=[],c=null;d.forEach(a,function(a){c=f();c.deserialize(a);b[b.length]=c});return b},n=function(a,c){a[c]=function(){var e=arguments;return a.then(function(a){Array.prototype.unshift.call(e,
m(a));return b(d[c].apply(d,e),f)})}},l=function(a,c){a[c]||(a[c]=function(){var b=arguments;Array.prototype.unshift.call(b,a);return d[c].apply(d,b)})};if(a)a.then?(k=new c,a.then(function(a){k.resolve(m(a))},function(a){k.reject(a)},function(a){k.progress(a)}),a=h.delegate(new g,k.promise),n(a,"forEach"),n(a,"filter"),n(a,"map")):(a=m(a),l(a,"forEach"),l(a,"filter"),l(a,"map"));else return a;a.total||(a.total=e(a,function(a){return a.length}));return a};return b})},"dojo-data-model/Observable":function(){define(["dojo/store/Observable"],
function(d){return function(h){var c=d(h),g=c.query;c.query=function(d,b){var a=g(d,b),f=a.observe;a.observe=function(a,b){return f(function(b,d,e){var f=b;"function"!==typeof b.deserialize&&(f=c.getModelInstance(),f.deserialize(b));return a(f,d,e)},b)};return a};return c}})},"dojo-data-model/sync":function(){define([],function(){return function(d,h,c,g){var e=d.watch(h,function(a,b,d){c.get(g)!==d&&c.set(g,d)}),b=c.watch(g,function(a,b,c){d.get(h)!==c&&d.set(h,c)});c.set(g,d.get(h));return{remove:function(){e.remove();
b.remove()}}}})},"dojorama/model/ReleaseModel":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/date/stamp dojo/json dojo-data-model/_CrudModel dojo/i18n!./nls/ReleaseModel".split(" "),function(d,h,c,g,e,b,a){return d([b],{props:{id:"",title:"",format:"",releaseDate:null,price:"",publish:!1,info:""},releaseDateDeserializer:function(a){this.set("releaseDate",g.fromISOString(a))},releaseDateSerializer:function(){return!this.get("releaseDate")?null:g.toISOString(this.get("releaseDate"),
{selector:"date"})},releaseDateInitializer:function(){this.set("releaseDate",null)},titleValidator:function(){if(void 0===this.get("title")||3>this.get("title").length)throw{message:a.titleInvalid};},normalizeServerSideValidationErrors:function(b){b=e.parse(b.response.data);h.forEach(b.errors,c.hitch(this,function(b){this.props[b.field]&&("missing"===b.code?this.errorModel.set(b.field,a.titleMissing):this.errorModel.set(b.field,a.titleInvalid))}))}})})},"*now":function(d){d(['dojo/i18n!*preload*dojorama/layers/nls/model*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]'])}}});
define("dojorama/layers/model",[],1);
//@ sourceMappingURL=model.js.map
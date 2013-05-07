//>>built
define("dojorama/ui/storage/StoragePage","dojo/_base/declare mijit/_WidgetBase mijit/_TemplatedMixin dojomat/_AppAware dojomat/_StateAware ../_global/mixin/_NavigationMixin ../_global/mixin/_PlayerMixin ../_global/mixin/_FooterMixin ./mixin/_StorageBreadcrumbsMixin dojo-local-storage/LocalStorage dojo/store/Observable dojo/_base/array dojo/_base/lang dojo/_base/json dojo/text!./template/StoragePage.html ./widget/RowWidget dojo/text!../../styles/inline/ui/storage/StoragePage.css".split(" "),function(d,
e,f,g,h,k,l,m,n,p,q,r,c,s,t,u,v){return d([e,f,g,h,k,l,m,n],{router:null,request:null,session:null,templateString:t,store:null,observer:null,result:null,itemWidgets:[],constructor:function(a){this.router=a.router;this.request=a.request;this.session=a.session;this.store=q(new p)},postCreate:function(){this.inherited(arguments);this.setCss(v,"all");this.setTitle("Storage");this.setStorageIndexBreadcrumbsItems()},startup:function(){this.inherited(arguments);this.showNavigation();this.showFooter();this.fetchItems();
this.showStorageBreadcrumbs()},fetchItems:function(){this.result=this.store.query({},{sort:[{attribute:"id",descending:!1}]});this.destroyItemWidgets();this.observer&&this.observer.remove&&this.observer.remove();this.observer=this.result.observe(c.hitch(this,function(a,b,c){this.fetchItems()},!0));this.result.forEach(c.hitch(this,function(a){var b=this.itemWidgets.length;this.itemWidgets[b]=(new u({})).placeAt(this.tbodyNode);this.itemWidgets[b].set("id",this.store.getIdentity(a));this.itemWidgets[b].set("data",
s.toJson(a));this.itemWidgets[b].startup()}))},destroyItemWidgets:function(){r.forEach(this.itemWidgets,c.hitch(this,function(a,b){a.destroy()}));this.itemWidgets=[]},_onClearClick:function(a){localStorage.clear();this.destroyItemWidgets()}})});
require({cache:{"url:dojorama/ui/storage/template/StoragePage.html":'\x3cdiv\x3e\n    \x3cdiv data-dojo-attach-point\x3d"navigationNode"\x3e\x3c/div\x3e\n\n    \x3cdiv class\x3d"container main"\x3e\n        \x3cul data-dojo-attach-point\x3d"breadcrumbsNode"\x3e\x3c/ul\x3e\n        \n        \x3cdiv data-dojo-attach-point\x3d"mainNode"\x3e\n            \x3ch1\x3eStorage\x3c/h1\x3e\n            \x3c!--\x3cbutton class\x3d"btn" data-dojo-attach-event\x3d"onclick:_onNewObjClick"\x3eNew Obj\x3c/button\x3e\n            \x3cbutton class\x3d"btn" data-dojo-attach-event\x3d"onclick:_onRemObjClick"\x3eRemove Obj\x3c/button\x3e--\x3e\n            \n            \x3cdiv class\x3d"well well-large"\x3e\n                \x3cdiv style\x3d"overflow:auto"\x3e\n                    \x3ctable class\x3d"table table-striped local-storage-data"\x3e\n                        \x3cthead\x3e\n                            \x3cth\x3eId\x3c/th\x3e\n                            \x3cth\x3eData\x3c/th\x3e\n                        \x3c/thead\x3e\n                        \x3ctbody data-dojo-attach-point\x3d"tbodyNode"\x3e\x3c/tbody\x3e\n                    \x3c/table\x3e\n                \x3c/div\x3e\n                \n                \x3cbutton class\x3d"btn" data-dojo-attach-event\x3d"onclick:_onClearClick"\x3eClear\x3c/button\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n    \n        \x3cdiv data-dojo-attach-point\x3d"playerNode"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3cdiv data-dojo-attach-point\x3d"footerNode"\x3e\x3c/div\x3e\n\x3c/div\x3e',"url:dojorama/styles/inline/ui/storage/StoragePage.css":"body {background: white;}"}});
//@ sourceMappingURL=StoragePage.js.map
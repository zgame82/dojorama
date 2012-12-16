//>>built
require({cache:{"dojorama/ui/release/mixin/_ReleaseActionsMixin":function(){define("dojorama/ui/release/mixin/_ReleaseActionsMixin",["dojo/_base/declare","../../_global/widget/ActionsWidget","dojo/i18n!./nls/_ReleaseActionsMixin"],function(e,a,f){return e([],{actionsWidget:null,postCreate:function(){this.inherited(arguments);this.actionsWidget=new a({actions:[{label:f.indexLabel,url:this.router.getRoute("releaseIndex").assemble(),active:"releaseIndex"===this.router.getCurrentRouteName()},{label:f.createLabel,
url:this.router.getRoute("releaseCreate").assemble(),active:"releaseCreate"===this.router.getCurrentRouteName()}]},this.actionsNode)},startup:function(){this.inherited(arguments);this.actionsWidget.startup()},showReleaseActions:function(){this.actionsWidget.show()}})})},"dojorama/ui/release/mixin/_ReleaseBreadcrumbsMixin":function(){define("dojorama/ui/release/mixin/_ReleaseBreadcrumbsMixin",["dojo/_base/declare","../../_global/widget/BreadcrumbsWidget","dojo/i18n!./nls/_ReleaseBreadcrumbsMixin"],
function(e,a,f){return e([],{breadcrumbsWidget:null,breadcrumbsItems:{},postCreate:function(){this.inherited(arguments);this.breadcrumbsWidget=new a({},this.breadcrumbsNode);this.breadcrumbsItems.home={label:f.homeLabel,url:this.router.getRoute("home").assemble()};this.breadcrumbsItems.releaseIndex={label:f.releaseIndexLabel,url:this.router.getRoute("releaseIndex").assemble()};this.breadcrumbsItems.releaseCreate={label:f.releaseCreateLabel,url:this.router.getRoute("releaseCreate").assemble()}},startup:function(){this.inherited(arguments);
this.breadcrumbsWidget.startup()},setReleaseIndexBreadcrumbsItems:function(){this.breadcrumbsWidget.set("items",[this.breadcrumbsItems.home,this.breadcrumbsItems.releaseIndex])},setReleaseCreateBreadcrumbsItems:function(){this.breadcrumbsWidget.set("items",[this.breadcrumbsItems.home,this.breadcrumbsItems.releaseIndex,this.breadcrumbsItems.releaseCreate])},setReleaseUpdateBreadcrumbsItems:function(a){this.breadcrumbsWidget.set("items",[this.breadcrumbsItems.home,this.breadcrumbsItems.releaseIndex,
{label:a}])},showReleaseBreadcrumbs:function(){this.breadcrumbsWidget.show()}})})},"dojorama/ui/release/mixin/_ReleaseComponentTitleMixin":function(){define("dojorama/ui/release/mixin/_ReleaseComponentTitleMixin",["dojo/_base/declare","dojo/i18n!./nls/_ReleaseComponentTitleMixin"],function(e,a){return e([],{postCreate:function(){this.inherited(arguments);this.sectionTitleNode.innerHTML=a.sectionTitle}})})},"dojorama/ui/release/widget/ReleaseCreateFormWidget":function(){require({cache:{"url:dojorama/ui/release/widget/template/ReleaseCreateFormWidget.html":'<div>\n    <h2 data-dojo-attach-point="titleNode"></h2><hr />\n    <div data-dojo-attach-point="formNode"></div>\n</div>'}});
define("dojorama/ui/release/widget/ReleaseCreateFormWidget","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,../../_global/mixin/_ToggleMixin,./snippet/ReleaseFormSnippet,dojo/_base/lang,dojo/aspect,dojo/topic,dojo/dom-style,dojo/text!./template/ReleaseCreateFormWidget.html,dojo/i18n!./nls/ReleaseCreateFormWidget".split(","),function(e,a,f,n,c,k,h,o,i,j,m){return e([a,f,n],{store:null,templateString:j,formSnippet:null,constructor:function(a){this.inherited(arguments);this.store=a.store},
postCreate:function(){this.titleNode.innerHTML=m.title;var a=this.store.getModelInstance();this.inherited(arguments);this.hide();this.formSnippet=new c({releaseModel:a},this.formNode);this.own(h.after(a,"save",k.hitch(this,function(e){e.then(k.hitch(this,function(){o.publish("ui/release/widget/ReleaseCreateFormWidget/create-ok",{model:a,notification:{message:m.notificationCreateOk,type:"ok"}})}));return e})))},startup:function(){this.inherited(arguments);this.formSnippet.startup();this.formSnippet.show()}})})},
"dojorama/ui/release/widget/snippet/ReleaseFormSnippet":function(){require({cache:{"url:dojorama/ui/release/widget/snippet/template/ReleaseFormSnippet.html":'<form class="form-horizontal" data-dojo-attach-event="onsubmit:_onSubmit">\n    <fieldset>\n        <div data-dojo-attach-point="titleNode"></div>\n        <div data-dojo-attach-point="formatNode"></div>\n        <div data-dojo-attach-point="releaseDateNode"></div>\n        <div data-dojo-attach-point="priceNode"></div>\n        <div data-dojo-attach-point="infoNode"></div>\n        <div data-dojo-attach-point="publishNode"></div>\n        <button data-dojo-attach-point="submitNode">Save</button>\n    </fieldset>\n</form>'}});
define("dojorama/ui/release/widget/snippet/ReleaseFormSnippet","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,../../../_global/mixin/_ToggleMixin,dojo/_base/array,dojo/_base/lang,dojo/dom-style,dojo/keys,../../../_global/widget/ControlGroupWidget,dobolo/Button,dobolo/DatepickerInput,dojo-form-controls/Textbox,dojo-form-controls/Textarea,dojo-form-controls/Checkbox,dojo-form-controls/Select,dojo-data-model/sync,dojo/text!./template/ReleaseFormSnippet.html,dojo/i18n!./nls/ReleaseFormSnippet".split(","),
function(e,a,f,n,c,k,h,o,i,j,m,q,r,g,d,l,s,b){return e([a,f,n],{releaseModel:null,templateString:s,controlGroupWidgets:{},submitButton:null,submitButtonTimeoutId:null,errorModel:null,postCreate:function(){this.inherited(arguments);this.errorModel=this.releaseModel.getErrorModel();this.hide();this.build()},startup:function(){var a=null;this.inherited(arguments);this.submitButton.startup();for(a in this.releaseModel.getProps())this.releaseModel.getProps().hasOwnProperty(a)&&this.controlGroupWidgets[a]&&
(this.own(l(this.releaseModel,a,this.controlGroupWidgets[a],"value")),this.own(l(this.errorModel,a,this.controlGroupWidgets[a],"error")),this.controlGroupWidgets[a].startup())},destroy:function(){this.inherited(arguments);this.releaseModel.destroy();clearTimeout(this.submitButtonTimeoutId)},_onSubmit:function(a){a.preventDefault();this.submitButton.loading();this.onSubmit()},onSubmit:function(){this.releaseModel.save().then(k.hitch(this,this.cancelSubmitButton),k.hitch(this,this.cancelSubmitButton))},
build:function(){this.controlGroupWidgets.title=new i({label:b.fieldTitleLabel,inputWidget:new q({})},this.titleNode);this.controlGroupWidgets.format=new i({label:b.fieldFormatLabel,inputWidget:new d({options:[{value:"",label:b.fieldFormatOptionLabel},{value:"cd",label:"Cd"},{value:"vinyl",label:"Vinyl"},{value:"digital",label:"Digital",disabled:!0}]})},this.formatNode);this.controlGroupWidgets.releaseDate=new i({label:b.fieldReleaseDateLabel,inputWidget:new m({})},this.releaseDateNode);this.controlGroupWidgets.price=
new i({label:b.fieldPriceLabel,inputWidget:new q({})},this.priceNode);this.controlGroupWidgets.publish=new i({label:b.fieldPublishLabel,inputWidget:new g({}),widgetProperty:"checked"},this.publishNode);this.controlGroupWidgets.info=new i({label:b.fieldInfoLabel,inputWidget:new r({})},this.infoNode);this.submitButton=new j({type:"submit",label:b.submitLabel,loadingText:b.submitBusyLabel,resetText:b.submitLabel,"class":"btn btn-primary"},this.submitNode)},cancelSubmitButton:function(){this.submitButton.reset()}})})},
"url:dojorama/ui/release/widget/snippet/template/ReleaseFormSnippet.html":'<form class="form-horizontal" data-dojo-attach-event="onsubmit:_onSubmit">\n    <fieldset>\n        <div data-dojo-attach-point="titleNode"></div>\n        <div data-dojo-attach-point="formatNode"></div>\n        <div data-dojo-attach-point="releaseDateNode"></div>\n        <div data-dojo-attach-point="priceNode"></div>\n        <div data-dojo-attach-point="infoNode"></div>\n        <div data-dojo-attach-point="publishNode"></div>\n        <button data-dojo-attach-point="submitNode">Save</button>\n    </fieldset>\n</form>',
"url:dojorama/ui/release/widget/template/ReleaseCreateFormWidget.html":'<div>\n    <h2 data-dojo-attach-point="titleNode"></h2><hr />\n    <div data-dojo-attach-point="formNode"></div>\n</div>',"dojorama/ui/release/widget/ReleaseGridWidget":function(){require({cache:{"url:dojorama/ui/release/widget/template/ReleaseGridWidget.html":'<div>\n    <div class="clearfix">\n        <form class="form-search pull-right" data-dojo-attach-point="filterFormNode">\n            <div class="input-append">\n                <input data-dojo-attach-point="filterInputNode" class="search-query" />\n                <button data-dojo-attach-point="filterSubmitNode" class="btn"></button>\n            </div>\n        </form>\n    </div>\n    \n    <div data-dojo-attach-point="mainNode" style="display:none">\n        <div data-dojo-attach-point="gridNode"></div>\n    \n        <div class="btn-toolbar">\n            <button data-dojo-attach-point="gridSaveButtonNode" class="btn"></button>\n            <button data-dojo-attach-point="gridDeleteButtonNode" class="btn btn-danger"></button>\n        </div>\n    </div>\n</div>'}});
define("dojorama/ui/release/widget/ReleaseGridWidget","dojo/_base/declare,dojo/_base/lang,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_StateAware,dgrid/OnDemandGrid,dgrid/Selection,dgrid/editor,dojo-form-controls/Checkbox,dojo-form-controls/Button,dojo-form-controls/Textbox,dobolo/DatepickerInput,dojo-data-model/Observable,dojo/dom-construct,dojo/dom-style,dojo/dom-attr,dojo/aspect,dojo/topic,dojo/on,dojo/when,dojo/promise/all,dojo/text!./template/ReleaseGridWidget.html,dojo/i18n!./nls/ReleaseGridWidget".split(","),
function(e,a,f,n,c,k,h,o,i,j,m,q,r,g,d,l,s,b,t,u,v,w,p){return e([f,n,c],{router:null,store:null,templateString:w,filterInputWidget:null,filterSubmitWidget:null,gridWidget:null,gridSaveButtonWidget:null,gridDeleteButtonWidget:null,constructor:function(a){this.request=a.request;this.router=a.router;this.store=a.store},postCreate:function(){this.inherited(arguments);this.store=r(this.store);this.buildFilterForm();this.gridSaveButtonWidget=this.buildSaveButton();this.gridDeleteButtonWidget=this.buildDeleteButton();
this.gridWidget=this.buildGrid();this.gridWidget.setStore(this.store)},startup:function(){this.filterInputWidget.startup();this.filterSubmitWidget.startup();this.gridSaveButtonWidget.startup();this.gridDeleteButtonWidget.startup()},buildFilterForm:function(){this.filterInputWidget=new m({"class":l.get(this.filterInputNode,"class"),value:this.request.getQueryParam("find")},this.filterInputNode);this.filterSubmitWidget=new j({type:"submit","class":l.get(this.filterSubmitNode,"class"),label:p.filterSubmitLabel},
this.filterSubmitNode);this.own(t(this.filterFormNode,"submit",a.hitch(this,function(a){a.preventDefault();this.push(this.router.getRoute("releaseIndex").assemble(null,{find:this.filterInputWidget.value}))})))},buildGrid:function(){var f={selector:{label:" ",sortable:!1,renderCell:a.hitch(this,function(b,d,c){d=g.create("input",{type:"checkbox"},c,"last");this.own(t(d,"change",a.hitch(this,function(){var a=this.gridWidget.row(b);this.gridWidget.isSelected(b.get("id"))?this.gridWidget.deselect(a):
this.gridWidget.select(a)})))})},title:{label:p.gridColumnLabelTitle,field:"title",sortable:!0,renderCell:a.hitch(this,function(b,d,c){b=g.create("a",{href:this.router.getRoute("releaseUpdate").assemble({id:b.get("id")}),innerHTML:b.get("title")},c,"last");this.own(t(b,"click",a.hitch(this,function(a){a.preventDefault();this.push(a.target.href)})))})},releaseDate:o({label:p.gridColumnLabelReleaseDate,field:"releaseDate",sortable:!0,autoSave:!1,editorArgs:{required:!0,"class":"span3",format:"medium"}},
q),publish:o({label:p.gridColumnLabelPublish,field:"publish",sortable:!0,autoSave:!1,editorArgs:{value:"on"}},i)},c=new (e([k,h]))({getBeforePut:!0,columns:f,selectionMode:"none",queryOptions:{sort:[{attribute:"title",descending:!1}]},loadingMessage:p.gridLoadingState,noDataMessage:p.gridNoDataAvailable},this.gridNode),l=function(){var a=0,b;for(b in c.selection)c.selection.hasOwnProperty(b)&&(a+=1);return a};this.request.getQueryParam("find")&&c.set("query",{title:this.request.getQueryParam("find")});
c.on("dgrid-error",function(){b.publish("ui/release/widget/ReleaseGridWidget/unknown-error",{notification:{message:p.notificationUnknownError,type:"error"}})});c.on(".dgrid-header .dgrid-column-title:click",a.hitch(this,function(){}));c.on(".dgrid-row .dgrid-column-title:click",a.hitch(this,function(){}));c.on("dgrid-select",a.hitch(this,function(){d.set(this.gridDeleteButtonWidget.domNode,"display","inline")}));c.on("dgrid-deselect",a.hitch(this,function(){d.set(this.gridDeleteButtonWidget.domNode,
"display",l()?"inline":"none")}));c.on("dgrid-datachange",a.hitch(this,function(){d.set(this.gridSaveButtonWidget.domNode,"display","inline")}));var j=s.after(this.store,"query",a.hitch(this,function(b){u(b,a.hitch(this,function(a){a.length&&(d.set(this.mainNode,"display","block"),j.remove())}));return b}));return c},buildSaveButton:function(){var d=function(){b.publish("ui/release/widget/ReleaseGridWidget/update-ok",{notification:{message:p.notificationUpdateOk,type:"ok"}})},c=function(){b.publish("ui/release/widget/ReleaseGridWidget/update-error",
{notification:{message:p.notificationUpdateError,type:"error"}})};return new j({style:"display: none","class":l.get(this.gridSaveButtonNode,"class"),label:p.gridSaveButtonLabel,onClick:a.hitch(this,function(){u(this.gridWidget.save(),d,c)})},this.gridSaveButtonNode)},buildDeleteButton:function(){var d=function(){b.publish("ui/release/widget/ReleaseGridWidget/delete-ok",{notification:{message:p.notificationDeleteOk,type:"ok"}})},c=function(){b.publish("ui/release/widget/ReleaseGridWidget/delete-error",
{notification:{message:p.notificationDeleteError,type:"error"}})};return new j({style:"display: none","class":l.get(this.gridDeleteButtonNode,"class"),label:p.gridDeleteButtonLabel,onClick:a.hitch(this,function(){var a=[],b;for(b in this.gridWidget.selection)this.gridWidget.selection.hasOwnProperty(b)&&a.push(this.store.remove(b));u(v(a),d,c)})},this.gridDeleteButtonNode)}})})},"url:dojorama/ui/release/widget/template/ReleaseGridWidget.html":'<div>\n    <div class="clearfix">\n        <form class="form-search pull-right" data-dojo-attach-point="filterFormNode">\n            <div class="input-append">\n                <input data-dojo-attach-point="filterInputNode" class="search-query" />\n                <button data-dojo-attach-point="filterSubmitNode" class="btn"></button>\n            </div>\n        </form>\n    </div>\n    \n    <div data-dojo-attach-point="mainNode" style="display:none">\n        <div data-dojo-attach-point="gridNode"></div>\n    \n        <div class="btn-toolbar">\n            <button data-dojo-attach-point="gridSaveButtonNode" class="btn"></button>\n            <button data-dojo-attach-point="gridDeleteButtonNode" class="btn btn-danger"></button>\n        </div>\n    </div>\n</div>',
"dojorama/ui/release/widget/ReleaseUpdateFormWidget":function(){require({cache:{"url:dojorama/ui/release/widget/template/ReleaseUpdateFormWidget.html":'<div>\n    <div data-dojo-attach-point="progressNode"></div>\n    \n    <div data-dojo-attach-point="mainNode" style="display:none">\n        <h2 data-dojo-attach-point="titleNode"></h2><hr />\n        <div data-dojo-attach-point="formNode"></div>\n    </div>\n</div>'}});define("dojorama/ui/release/widget/ReleaseUpdateFormWidget","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,../../_global/mixin/_ToggleMixin,dojo/_base/lang,dojo/aspect,dojo/topic,dojo/when,dojo/dom-style,../../_global/widget/ProgressWidget,./snippet/ReleaseFormSnippet,dojo/text!./template/ReleaseUpdateFormWidget.html,dojo/i18n!./nls/ReleaseUpdateFormWidget".split(","),
function(e,a,f,n,c,k,h,o,i,j,m,q,r){return e([a,f,n],{store:null,releaseId:null,templateString:q,formSnippet:null,progressWidget:null,constructor:function(a){this.releaseId=a.releaseId},postscript:function(a){this.inherited(arguments);this.store=a.store},postCreate:function(){this.inherited(arguments);this.hide();this.progressWidget=new j({},this.progressNode)},startup:function(){this.inherited(arguments);this.progressWidget.startup();this.progressWidget.show();var a=this.store.get(this.releaseId);
o(a,c.hitch(this,function(a){a?(this.progressWidget.hide(),i.set(this.mainNode,"display","block"),this.formSnippet=new m({releaseModel:a},this.formNode),this.own(k.before(this.formSnippet,"onSubmit",c.hitch(this,function(){h.publish("ui/release/widget/ReleaseUpdateFormWidget/submit",{})}))),this.own(k.after(a,"save",c.hitch(this,function(e){e.then(c.hitch(this,function(){this.titleNode.innerHTML=a.get("title");h.publish("ui/release/widget/ReleaseUpdateFormWidget/update-ok",{model:a,notification:{message:r.notificationUpdateOk,
type:"ok"}})}));return e}))),this.titleNode.innerHTML=a.get("title"),this.formSnippet.startup(),this.formSnippet.show(),h.publish("ui/release/widget/ReleaseUpdateFormWidget/load-ok",a)):h.publish("ui/release/widget/ReleaseUpdateFormWidget/load-not-found",{})}),c.hitch(this,function(a){404===a.response.status?h.publish("ui/release/widget/ReleaseUpdateFormWidget/load-not-found",{}):h.publish("ui/release/widget/ReleaseUpdateFormWidget/load-error",{})}))}})})},"url:dojorama/ui/release/widget/template/ReleaseUpdateFormWidget.html":'<div>\n    <div data-dojo-attach-point="progressNode"></div>\n    \n    <div data-dojo-attach-point="mainNode" style="display:none">\n        <h2 data-dojo-attach-point="titleNode"></h2><hr />\n        <div data-dojo-attach-point="formNode"></div>\n    </div>\n</div>',
"dojorama/ui/release/ReleaseCreatePage":function(){require({cache:{"url:dojorama/ui/release/template/ReleaseCreatePage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n    <ul data-dojo-attach-point="breadcrumbsNode"></ul>\n    <h1 data-dojo-attach-point="sectionTitleNode"></h1>\n    <ul data-dojo-attach-point="actionsNode"></ul>\n    <div data-dojo-attach-point="notificationNode"></div>\n    \n    <div class="well well-large">\n        <div data-dojo-attach-point="formNode"></div>\n    </div>\n    \n    <div data-dojo-attach-point="footerNode"></div>\n</div>',
"url:dojorama/ui/release/css/ReleaseCreatePage.css":"body {background: white;}"}});define("dojorama/ui/release/ReleaseCreatePage","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_AppAware,dojomat/_StateAware,../_global/mixin/_NavigationMixin,../_global/mixin/_NotificationMixin,../_global/mixin/_FooterMixin,./mixin/_ReleaseBreadcrumbsMixin,./mixin/_ReleaseActionsMixin,./mixin/_ReleaseComponentTitleMixin,../release/widget/ReleaseCreateFormWidget,../../service/release-store,dojo/topic,dojo/_base/lang,dojo/text!./template/ReleaseCreatePage.html,dojo/text!./css/ReleaseCreatePage.css,dojo/i18n!./nls/ReleaseCreatePage".split(","),
function(e,a,f,n,c,k,h,o,i,j,m,q,r,g,d,l,s,b){return e([a,f,n,c,k,h,o,i,j,m],{router:null,request:null,templateString:l,formWidget:null,releaseStore:null,constructor:function(a){this.router=a.router;this.request=a.request},postCreate:function(){this.inherited(arguments);this.setCss(s,"all");this.setTitle(b.pageTitle);this.formWidget=new q({store:r},this.formNode);this.setReleaseCreateBreadcrumbsItems();this.setSubscriptions()},startup:function(){this.inherited(arguments);this.showNavigation();this.showFooter();
this.showReleaseBreadcrumbs();this.showReleaseActions();this.formWidget.startup();this.formWidget.show()},setSubscriptions:function(){this.own(g.subscribe("ui/release/widget/ReleaseCreateFormWidget/create-ok",d.hitch(this,function(a){this.setNotification(a.notification.message,a.notification.type);setTimeout(d.hitch(this,function(){this.push(this.router.getRoute("releaseUpdate").assemble({id:a.model.get("id")}))}),0)})))}})})},"dojorama/service/release-store":function(){define("dojorama/service/release-store",
require.rawConfig["service/release-store"].deps,require.rawConfig["service/release-store"].callback)},"url:dojorama/ui/release/template/ReleaseCreatePage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n    <ul data-dojo-attach-point="breadcrumbsNode"></ul>\n    <h1 data-dojo-attach-point="sectionTitleNode"></h1>\n    <ul data-dojo-attach-point="actionsNode"></ul>\n    <div data-dojo-attach-point="notificationNode"></div>\n    \n    <div class="well well-large">\n        <div data-dojo-attach-point="formNode"></div>\n    </div>\n    \n    <div data-dojo-attach-point="footerNode"></div>\n</div>',
"url:dojorama/ui/release/css/ReleaseCreatePage.css":"body {background: white;}","dojorama/ui/release/ReleaseIndexPage":function(){require({cache:{"url:dojorama/ui/release/template/ReleaseIndexPage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n    <ul data-dojo-attach-point="breadcrumbsNode"></ul>\n    <h1 data-dojo-attach-point="sectionTitleNode"></h1>\n    <ul data-dojo-attach-point="actionsNode"></ul>\n    <div data-dojo-attach-point="notificationNode"></div>\n    \n    <div class="well well-large">\n        <\!--<div data-dojo-attach-point="filterNode"></div>--\>\n        <div data-dojo-attach-point="gridNode"></div>\n    </div>\n    \n    <div data-dojo-attach-point="footerNode"></div>\n</div>',
"url:dojorama/ui/release/css/ReleaseIndexPage.css":"body {background: white;}.field-title {}"}});define("dojorama/ui/release/ReleaseIndexPage","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_AppAware,dojomat/_StateAware,../_global/mixin/_NavigationMixin,../_global/mixin/_NotificationMixin,../_global/mixin/_FooterMixin,./mixin/_ReleaseBreadcrumbsMixin,./mixin/_ReleaseActionsMixin,./mixin/_ReleaseComponentTitleMixin,./widget/ReleaseGridWidget,../../service/release-store,dojo/_base/lang,dojo/topic,dojo/text!./template/ReleaseIndexPage.html,dojo/text!./css/ReleaseIndexPage.css,dojo/i18n!./nls/ReleaseIndexPage".split(","),
function(e,a,f,n,c,k,h,o,i,j,m,q,r,g,d,l,s,b){return e([a,f,n,c,k,h,o,i,j,m],{router:null,request:null,templateString:l,gridWidget:null,constructor:function(a){this.router=a.router;this.request=a.request},postCreate:function(){this.inherited(arguments);this.setCss(s,"all");this.setTitle(b.pageTitle);this.gridWidget=new q({request:this.request,router:this.router,store:r},this.gridNode);this.setReleaseIndexBreadcrumbsItems();this.setSubscriptions()},startup:function(){this.inherited(arguments);this.showNavigation();
this.showFooter();this.showReleaseBreadcrumbs();this.showReleaseActions();this.gridWidget.startup()},setSubscriptions:function(){this.own(d.subscribe("ui/release/widget/ReleaseGridWidget/unknown-error",g.hitch(this,function(a){this.showNotification(a.notification)})));this.own(d.subscribe("ui/release/widget/ReleaseGridWidget/update-ok",g.hitch(this,function(a){this.showNotification(a.notification)})));this.own(d.subscribe("ui/release/widget/ReleaseGridWidget/update-error",g.hitch(this,function(a){this.showNotification(a.notification)})));
this.own(d.subscribe("ui/release/widget/ReleaseGridWidget/delete-ok",g.hitch(this,function(a){this.showNotification(a.notification)})));this.own(d.subscribe("ui/release/widget/ReleaseGridWidget/delete-error",g.hitch(this,function(a){this.showNotification(a.notification)})))}})})},"url:dojorama/ui/release/template/ReleaseIndexPage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n    <ul data-dojo-attach-point="breadcrumbsNode"></ul>\n    <h1 data-dojo-attach-point="sectionTitleNode"></h1>\n    <ul data-dojo-attach-point="actionsNode"></ul>\n    <div data-dojo-attach-point="notificationNode"></div>\n    \n    <div class="well well-large">\n        <\!--<div data-dojo-attach-point="filterNode"></div>--\>\n        <div data-dojo-attach-point="gridNode"></div>\n    </div>\n    \n    <div data-dojo-attach-point="footerNode"></div>\n</div>',
"url:dojorama/ui/release/css/ReleaseIndexPage.css":"body {background: white;}.field-title {}","dojorama/ui/release/ReleaseUpdatePage":function(){require({cache:{"url:dojorama/ui/release/template/ReleaseUpdatePage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n    <ul data-dojo-attach-point="breadcrumbsNode"></ul>\n    <h1 data-dojo-attach-point="sectionTitleNode"></h1>\n    <ul data-dojo-attach-point="actionsNode"></ul>\n    <div data-dojo-attach-point="notificationNode"></div>\n    \n    <div class="well well-large">\n        <div data-dojo-attach-point="formNode"></div>\n    </div>\n    \n    <div data-dojo-attach-point="footerNode"></div>\n</div>',
"url:dojorama/ui/release/css/ReleaseUpdatePage.css":"body {background: white;}"}});define("dojorama/ui/release/ReleaseUpdatePage","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_AppAware,dojomat/_StateAware,../_global/mixin/_NavigationMixin,../_global/mixin/_NotificationMixin,../_global/mixin/_FooterMixin,./mixin/_ReleaseBreadcrumbsMixin,./mixin/_ReleaseActionsMixin,./mixin/_ReleaseComponentTitleMixin,./widget/ReleaseUpdateFormWidget,../../service/release-store,dojo/topic,dojo/_base/lang,dojo/text!./template/ReleaseUpdatePage.html,dojo/text!./css/ReleaseUpdatePage.css,dojo/i18n!./nls/ReleaseUpdatePage".split(","),
function(e,a,f,n,c,k,h,o,i,j,m,q,r,g,d,l,s){return e([a,f,n,c,k,h,o,i,j,m],{router:null,request:null,notification:null,templateString:l,formWidget:null,releaseStore:null,constructor:function(a){this.router=a.router;this.request=a.request;this.notification=a.notification},postCreate:function(){this.inherited(arguments);this.setCss(s,"all");this.formWidget=new q({store:r,releaseId:this.request.getPathParam("id")},this.formNode);this.setSubscriptions()},startup:function(){this.inherited(arguments);this.showNavigation();
this.showFooter();this.showReleaseActions();this.formWidget.startup();this.formWidget.show()},setSubscriptions:function(){this.own(g.subscribe("ui/release/widget/ReleaseUpdateFormWidget/load-ok",d.hitch(this,function(a){this.setTitle(a.get("title"));this.setReleaseUpdateBreadcrumbsItems(a.get("title"));this.showReleaseBreadcrumbs();this.notification&&this.showNotification(this.notification)})));this.own(g.subscribe("ui/release/widget/ReleaseUpdateFormWidget/load-error",d.hitch(this,function(a){this.handleError(a)})));
this.own(g.subscribe("ui/release/widget/ReleaseUpdateFormWidget/load-not-found",d.hitch(this,function(){this.handleNotFound()})));this.own(g.subscribe("ui/release/widget/ReleaseUpdateFormWidget/submit",d.hitch(this,function(){this.hideNotification()})));this.own(g.subscribe("ui/release/widget/ReleaseUpdateFormWidget/update-ok",d.hitch(this,function(a){this.setTitle(a.model.get("title"));this.showNotification(a.notification)})))}})})},"url:dojorama/ui/release/template/ReleaseUpdatePage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n    <ul data-dojo-attach-point="breadcrumbsNode"></ul>\n    <h1 data-dojo-attach-point="sectionTitleNode"></h1>\n    <ul data-dojo-attach-point="actionsNode"></ul>\n    <div data-dojo-attach-point="notificationNode"></div>\n    \n    <div class="well well-large">\n        <div data-dojo-attach-point="formNode"></div>\n    </div>\n    \n    <div data-dojo-attach-point="footerNode"></div>\n</div>',
"url:dojorama/ui/release/css/ReleaseUpdatePage.css":"body {background: white;}","*now":function(e){e(['dojo/i18n!*preload*dojorama/layers/nls/release*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]'])}}});define("dojorama/layers/release",[],1);
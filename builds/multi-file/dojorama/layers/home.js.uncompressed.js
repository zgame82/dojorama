require({cache:{
'dojorama/ui/home/HomePage':function(){
require({cache:{
'url:dojorama/ui/home/template/HomePage.html':"<div>\n    <div data-dojo-attach-point=\"navigationNode\"></div>\n    <h1>Home</h1>\n    <div data-dojo-attach-point=\"footerNode\"></div>\n</div>",
'url:dojorama/ui/home/css/HomePage.css':"body {background: yellow;}"}});
/*jshint strict:false */

define("dojorama/ui/home/HomePage", [
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_AppAware",
    "dojomat/_StateAware",
    "../_global/mixin/_NavigationMixin",
    "../_global/mixin/_FooterMixin",
    "dojo/text!./template/HomePage.html",
    "dojo/text!./css/HomePage.css"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _AppAware,
    _StateAware,
    _NavigationMixin,
    _FooterMixin,
    template,
    css
) {
    return declare([_WidgetBase, _TemplatedMixin, _AppAware, _StateAware, _NavigationMixin, _FooterMixin], {

        router: null,
        request: null,
        templateString: template,
        
        constructor: function (params) {
            this.router = params.router;
            this.request = params.request;
        },

        postCreate: function () {
            this.inherited(arguments);
            this.setCss(css, 'all');
            this.setTitle('Home');
        },

        startup: function () {
            this.inherited(arguments);
            this.showNavigation();
            this.showFooter();
        }
    });
});
},
'dojorama/ui/_global/mixin/_NavigationMixin':function(){
/*jshint strict:false */

define("dojorama/ui/_global/mixin/_NavigationMixin", [
    "dojo/_base/declare",
    "../widget/NavigationWidget"
], function (
    declare,
    NavigationWidget
) {
    return declare([], {
        // summary:
        //      Adds a NavigationWidget to a page-widget
        // description:
        //      This mixin can be used with any mijit/_TemplatedMixin-based widget which has
        //      a data-dojo-attach-point="navigationNode" in the template

        navigationWidget: null,

        postCreate: function () {
            this.inherited(arguments);
            
            this.navigationWidget = new NavigationWidget({
                router: this.router
            }, this.navigationNode);
        },

        startup: function () {
            this.inherited(arguments);
            this.navigationWidget.startup();
        },
        
        showNavigation: function () {
            this.navigationWidget.show();
        }
    });
});
},
'dojorama/ui/_global/widget/NavigationWidget':function(){
require({cache:{
'url:dojorama/ui/_global/widget/template/NavigationWidget.html':"<div class=\"navbar navbar-inverse\">\n    <div class=\"navbar-inner\">\n        <div class=\"container\">\n            <!-- Be sure to leave the brand out there if you want it shown -->\n            <a class=\"brand\" href=\"#\" data-dojo-attach-point=\"homeNode\"></a>\n            \n            <ul class=\"nav\">\n                <li><a href=\"#\" data-dojo-attach-point=\"releaseIndexNode\"></a></li>\n                <li><a href=\"#\" data-dojo-attach-point=\"storageNode\"></a></li>\n            </ul>\n\n            <!-- Everything you want hidden at 940px or less, place within here -->\n            <div class=\"nav-collapse\">\n            <!-- .nav, .navbar-search, .navbar-form, etc -->\n            </div>\n            \n            <ul class=\"nav pull-right\">\n                <li><a href=\"#\">Log out</a></li>\n            </ul>\n        </div>\n    </div>\n</div>"}});
/*jshint strict:false */

define("dojorama/ui/_global/widget/NavigationWidget", [
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_StateAware",
    "../mixin/_ToggleMixin",
    "dojo/on",
    "dojo/_base/lang",
    "dojo/text!./template/NavigationWidget.html",
    "dojo/i18n!./nls/NavigationWidget"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _StateAware,
    _ToggleMixin,
    on,
    lang,
    template,
    nls
) {
    return declare([_WidgetBase, _TemplatedMixin, _StateAware, _ToggleMixin], {

        router: null,
        templateString: template,
        
        constructor: function (params) {
            this.router = params.router;
        },

        postCreate: function () {
            var setNode = function (node, label, url) {
                node.innerHTML = label;
                node.href = url;
                
                this.own(on(node, 'click', lang.hitch(this, function (ev) {
                    ev.preventDefault();
                    this.push(url);
                })));
            };
            
            this.inherited(arguments);
            this.hide();
            lang.hitch(this, setNode)(this.homeNode, nls.labelHome, this.router.getRoute('home').assemble());
            lang.hitch(this, setNode)(this.releaseIndexNode, nls.labelReleaseIndex, this.router.getRoute('releaseIndex').assemble());
            lang.hitch(this, setNode)(this.storageNode, nls.labelStorage, this.router.getRoute('storage').assemble());
        }
    });
});
},
'dojorama/ui/_global/mixin/_ToggleMixin':function(){
define("dojorama/ui/_global/mixin/_ToggleMixin", [
    "dojo/_base/declare",
    "dojo/dom-style"
], function (
    declare,
    domStyle
) {
    "use strict";
    
    return declare([], {
        // summary:
        //      Toggle visibility of a widget
        // description:
        //      This mixin can be used with any mijit/_TemplatedMixin-based widget
        
        show: function () {
            domStyle.set(this.domNode, {
                display: "block"
            });
        },

        hide: function () {
            domStyle.set(this.domNode, {
                display: "none"
            });
        }
    });
});
},
'url:dojorama/ui/_global/widget/template/NavigationWidget.html':"<div class=\"navbar navbar-inverse\">\n    <div class=\"navbar-inner\">\n        <div class=\"container\">\n            <!-- Be sure to leave the brand out there if you want it shown -->\n            <a class=\"brand\" href=\"#\" data-dojo-attach-point=\"homeNode\"></a>\n            \n            <ul class=\"nav\">\n                <li><a href=\"#\" data-dojo-attach-point=\"releaseIndexNode\"></a></li>\n                <li><a href=\"#\" data-dojo-attach-point=\"storageNode\"></a></li>\n            </ul>\n\n            <!-- Everything you want hidden at 940px or less, place within here -->\n            <div class=\"nav-collapse\">\n            <!-- .nav, .navbar-search, .navbar-form, etc -->\n            </div>\n            \n            <ul class=\"nav pull-right\">\n                <li><a href=\"#\">Log out</a></li>\n            </ul>\n        </div>\n    </div>\n</div>",
'dojorama/ui/_global/mixin/_FooterMixin':function(){
/*jshint strict:false */

define("dojorama/ui/_global/mixin/_FooterMixin", [
    "dojo/_base/declare",
    "../widget/FooterWidget"
], function (
    declare,
    FooterWidget
) {
    return declare([], {
        
        // summary:
        //      Adds a FooterWidget to a page-widget
        // description:
        //      This mixin can be used with any mijit/_TemplatedMixin-based widget which has
        //      a data-dojo-attach-point="footerNode" in the template
        
        footerWidget: null,

        postCreate: function () {
            this.inherited(arguments);
            
            this.footerWidget = new FooterWidget({
                router: this.router
            }, this.footerNode);
        },

        startup: function () {
            this.inherited(arguments);
            this.footerWidget.startup();
        },
        
        showFooter: function () {
            this.footerWidget.show();
        }
    });
});
},
'dojorama/ui/_global/widget/FooterWidget':function(){
require({cache:{
'url:dojorama/ui/_global/widget/template/FooterWidget.html':"<div class=\"footer\">\n    <div class=\"container\">\n        <!--<p class=\"pull-right\"><a href=\"#\">Back to top</a></p>-->\n        <p>Dojorama is written by <a href=\"http://sirprize.me\">sirprize</a>, hosted on <a href=\"http://github.com/sirprize/dojorama\">Github</a> and released under the <a href=\"http://opensource.org/licenses/mit-license.php\">MIT license</a>.</p>\n        <!--\n        <ul class=\"footer-links\">\n            <li><a href=\"\">aaa</a></li>\n            <li><a href=\"\">bbb</a></li>\n        </ul>\n        -->\n    </div>\n</div>"}});
/*jshint strict:false */

define("dojorama/ui/_global/widget/FooterWidget", [
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_StateAware",
    "../mixin/_ToggleMixin",
    "dojo/text!./template/FooterWidget.html",
    "dojo/i18n!./nls/FooterWidget"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _StateAware,
    _ToggleMixin,
    template,
    nls
) {
    return declare([_WidgetBase, _TemplatedMixin, _StateAware, _ToggleMixin], {

        router: null,
        templateString: template,
        
        constructor: function (params) {
            this.router = params.router;
        },

        postCreate: function () {
            this.inherited(arguments);
            this.hide();
        }
    });
});
},
'url:dojorama/ui/_global/widget/template/FooterWidget.html':"<div class=\"footer\">\n    <div class=\"container\">\n        <!--<p class=\"pull-right\"><a href=\"#\">Back to top</a></p>-->\n        <p>Dojorama is written by <a href=\"http://sirprize.me\">sirprize</a>, hosted on <a href=\"http://github.com/sirprize/dojorama\">Github</a> and released under the <a href=\"http://opensource.org/licenses/mit-license.php\">MIT license</a>.</p>\n        <!--\n        <ul class=\"footer-links\">\n            <li><a href=\"\">aaa</a></li>\n            <li><a href=\"\">bbb</a></li>\n        </ul>\n        -->\n    </div>\n</div>",
'url:dojorama/ui/home/template/HomePage.html':"<div>\n    <div data-dojo-attach-point=\"navigationNode\"></div>\n    <h1>Home</h1>\n    <div data-dojo-attach-point=\"footerNode\"></div>\n</div>",
'url:dojorama/ui/home/css/HomePage.css':"body {background: yellow;}",
'*now':function(r){r(['dojo/i18n!*preload*dojorama/layers/nls/home*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]']);}
}});
define("dojorama/layers/home", [], 1);
//>>built
define("dojomat/populateRouter",["routed/Route","dojo/_base/lang"],function(c,d){return function(e,b){var a=null,f=function(a,b,c){return function(d){e.makePage(d,a,b,c)}};for(a in b)b.hasOwnProperty(a)&&e.router.addRoute(a,new c(b[a].schema,d.hitch(e,f(b[a].widget,b[a].layers||[],b[a].stylesheets))))}});
//@ sourceMappingURL=populateRouter.js.map
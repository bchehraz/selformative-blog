webpackJsonp([0xd2a57dc1d883],{89:function(e,t,n){"use strict";function o(e,t,n){var o=a.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function r(e,t,n){return a.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=o,t.apiRunnerAsync=r;var a=[{plugin:n(359),options:{plugins:[]}},{plugin:n(222),options:{plugins:[]}}]},215:function(e,t,n){"use strict";t.components={"component---src-templates-blog-post-js":n(341),"component---src-templates-categories-js":n(342),"component---src-pages-404-js":n(336),"component---src-pages-about-js":n(337),"component---src-pages-blog-js":n(338),"component---src-pages-index-js":n(339),"component---src-pages-lets-chat-js":n(340)},t.json={"layout-index.json":n(343),"blog-hello-world-222.json":n(353),"blog-hello-world-333.json":n(354),"hello-world.json":n(355),"blog-category-mental-health.json":n(350),"blog-category-time-management.json":n(352),"blog-category-habit-building.json":n(348),"blog-category-health.json":n(349),"blog-category-nutrition.json":n(351),"404.json":n(344),"about.json":n(346),"blog.json":n(347),"index.json":n(356),"lets-chat.json":n(357),"404-html.json":n(345)},t.layouts={"layout---index":n(335)}},216:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(1),s=o(c),l=n(6),f=o(l),p=n(145),d=o(p),g=n(66),h=o(g),m=n(89),y=n(507),b=o(y),v=function(e){var t=e.children;return s.default.createElement("div",null,t())},j=function(e){function t(n){r(this,t);var o=a(this,e.call(this)),u=n.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=d.default.getResourcesForPathname(e.location.pathname);if(n)this.setState({location:e.location,pageResources:n});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){t.setState({location:o,pageResources:e})})}}},t.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(t){d.default.getPage(e.state.location.pathname)&&t.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||(!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path)||(0,b.default)(this,e,t)))))},t.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);j.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=j,e.exports=t.default},66:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(384),a=o(r),u=(0,a.default)();e.exports=u},217:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(88),a=n(146),u=o(a),i={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var o=decodeURIComponent(n),a=(0,u.default)(o,t);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,i[a]=e,!0}return!1}),c}}},218:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(177),a=o(r),u=n(89),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},345:function(e,t,n){n(7),e.exports=function(e){return n.e(0xa2868bfb69fc,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(368)})})}},344:function(e,t,n){n(7),e.exports=function(e){return n.e(0xe70826b53c04,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(369)})})}},346:function(e,t,n){n(7),e.exports=function(e){return n.e(0xf927f8900006,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(370)})})}},348:function(e,t,n){n(7),e.exports=function(e){return n.e(0x7d4aa0b28a7d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(371)})})}},349:function(e,t,n){n(7),e.exports=function(e){return n.e(0xa5c3e91a602b,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(372)})})}},350:function(e,t,n){n(7),e.exports=function(e){return n.e(83963370336589,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(373)})})}},351:function(e,t,n){n(7),e.exports=function(e){return n.e(0xf546d7354e12,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(374)})})}},352:function(e,t,n){n(7),e.exports=function(e){return n.e(0xfde193b8b9fe,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(375)})})}},353:function(e,t,n){n(7),e.exports=function(e){return n.e(0x680cac9ff934,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(376)})})}},354:function(e,t,n){n(7),e.exports=function(e){return n.e(0x6b019ec2af3d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(377)})})}},347:function(e,t,n){n(7),e.exports=function(e){return n.e(49683490770531,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(378)})})}},355:function(e,t,n){n(7),e.exports=function(e){return n.e(0x834755aae49e,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(379)})})}},356:function(e,t,n){n(7),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(380)})})}},343:function(e,t,n){n(7),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(120)})})}},357:function(e,t,n){n(7),e.exports=function(e){return n.e(32847858762538,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(381)})})}},335:function(e,t,n){n(7),e.exports=function(e){return n.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(219)})})}},145:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var r=n(1),a=(o(r),n(217)),u=o(a),i=n(66),c=o(i),s=n(146),l=o(s),f=void 0,p={},d={},g={},h={},m={},y=[],b=[],v={},j="",w=[],R={},x=function(e){return e&&e.default||e},_=void 0,k=!0,C=[],P={},N={},E=5;_=n(220)({getNextQueuedResources:function(){return w.slice(-1)[0]},createResourceDownload:function(e){O(e,function(){w=w.filter(function(t){return t!==e}),_.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var T=function(e,t){return R[e]>R[t]?1:R[e]<R[t]?-1:0},S=function(e,t){return v[e]>v[t]?1:v[e]<v[t]?-1:0},O=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[t])e.nextTick(function(){n(null,h[t])});else{var o=void 0;o="component---"===t.slice(0,12)?d.components[t]:"layout---"===t.slice(0,9)?d.layouts[t]:d.json[t],o(function(e,o){h[t]=o,C.push({resource:t,succeeded:!e}),N[t]||(N[t]=e),C=C.slice(-E),n(e,o)})}},L=function(t,n){m[t]?e.nextTick(function(){n(null,m[t])}):N[t]?e.nextTick(function(){n(N[t])}):O(t,function(e,o){if(e)n(e);else{var r=x(o());m[t]=r,n(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var t=C.find(function(e){return e.succeeded});return!!t},D=function(e,t){console.log(t),P[e]||(P[e]=t),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},M=1,I={empty:function(){b=[],v={},R={},w=[],y=[],j=""},addPagesArray:function(e){y=e,j="/bchehraz.github.io/selformative-blog",f=(0,u.default)(e,j)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return b.pop()},enqueue:function(e){var t=(0,l.default)(e,j);if(!y.some(function(e){return e.path===t}))return!1;var n=1/M;M+=1,v[t]?v[t]+=1:v[t]=1,I.has(t)||b.unshift(t),b.sort(S);var o=f(t);return o.jsonName&&(R[o.jsonName]?R[o.jsonName]+=1+n:R[o.jsonName]=1+n,w.indexOf(o.jsonName)!==-1||h[o.jsonName]||w.unshift(o.jsonName)),o.componentChunkName&&(R[o.componentChunkName]?R[o.componentChunkName]+=1+n:R[o.componentChunkName]=1+n,w.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||w.unshift(o.componentChunkName)),w.sort(T),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:w,resourcesCount:R}},getPages:function(){return{pathArray:b,pathCount:v}},getPage:function(e){return f(e)},has:function(e){return b.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),k=!1;if(P[t])return D(t,'Previously detected load failure for "'+t+'"'),n();var o=f(t);if(!o)return D(t,"A page wasn't found for \""+t+'"'),n();if(t=o.path,g[t])return e.nextTick(function(){n(g[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:g[t]})}),g[t];c.default.emit("onPreLoadPageResources",{path:t});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){g[t]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return L(o.componentChunkName,function(e,t){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=t,i()}),L(o.jsonName,function(e,t){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=t,i()}),void(o.layoutComponentChunkName&&L(o.layout,function(e,t){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return b.slice(-1)[0]},length:function(){return b.length},indexOf:function(e){return b.length-b.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:I.getResourcesForPathname};t.default=I}).call(t,n(25))},382:function(e,t){e.exports=[{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-hello-world-222.json",path:"/blog/hello-world222"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-hello-world-333.json",path:"/blog/hello-world333"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"hello-world.json",path:"/hello-world"},{componentChunkName:"component---src-templates-categories-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-category-mental-health.json",path:"/blog/category/mental-health/"},{componentChunkName:"component---src-templates-categories-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-category-time-management.json",path:"/blog/category/time-management/"},{componentChunkName:"component---src-templates-categories-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-category-habit-building.json",path:"/blog/category/habit-building/"},{componentChunkName:"component---src-templates-categories-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-category-health.json",path:"/blog/category/health/"},{componentChunkName:"component---src-templates-categories-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-category-nutrition.json",path:"/blog/category/nutrition/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog.json",path:"/blog/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-lets-chat-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lets-chat.json",path:"/lets-chat/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},220:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(89),u=n(1),i=o(u),c=n(121),s=o(c),l=n(88),f=n(363),p=n(321),d=o(p),g=n(24),h=n(218),m=o(h),y=n(66),b=o(y),v=n(382),j=o(v),w=n(383),R=o(w),x=n(216),_=o(x),k=n(215),C=o(k),P=n(145),N=o(P);n(246),window.___history=m.default,window.___emitter=b.default,N.default.addPagesArray(j.default),N.default.addProdRequires(C.default),window.asyncRequires=C.default,window.___loader=N.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),T=function(e){var t=E[e];return null!=t&&(m.default.replace(t.toPath),!0)};T(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,t){T(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:t})},0)}))}function t(e,t){var n=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n(221);var o=function(e,t){function n(e){e.page.path===N.default.getPage(r).path&&(b.default.off("onPostLoadPageResources",n),clearTimeout(c),i(o))}var o=(0,g.createLocation)(e,null,null,m.default.location),r=o.pathname,a=E[r];a&&(r=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var i=t?window.___history.replace:window.___history.push,c=setTimeout(function(){b.default.off("onPostLoadPageResources",n),b.default.emit("onDelayedLoadPageResources",{pathname:r}),i(o)},1e3);N.default.getResourcesForPathname(r)?(clearTimeout(c),i(o)):b.default.on("onPostLoadPageResources",n)}};window.___push=function(e){return o(e,!1)},window.___replace=function(e){return o(e,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:m.default.location,action:m.default.action});var c=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:m.default})[0],h=function(e){var t=e.children;return i.default.createElement(l.Router,{history:m.default},t)},y=(0,l.withRouter)(_.default);N.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,u.createElement)(p?p:h,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(y,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return N.default.getPage(o.location.pathname)?(0,u.createElement)(_.default,r({page:!0},o)):(0,u.createElement)(_.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0],c=(0,a.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,d.default)(function(){return c(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},383:function(e,t){e.exports=[]},221:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(66),a=o(r),u="/";u="/bchehraz.github.io/selformative-blog/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},146:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,t.length)===t?e.slice(t.length):e},e.exports=t.default},222:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(392),a=o(r);t.onInitialClientRender=function(){(0,a.default)()}},321:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},7:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!a&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},358:function(e,t,n){"use strict";var o=n(20);e.exports=function(e,t){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var n=null,r=e.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){n=r;break}if(!n)return!0;if(n.target&&"_self"!==n.target.toLowerCase())return!0;if(n.pathname===window.location.pathname&&""!==n.hash)return!0;if(""===n.pathname)return!0;if(n.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=n.href;var u=document.createElement("a");if(u.href=window.location.href,a.host!==u.host)return!0;var i=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!i.test(""+a.host+a.pathname)||(e.preventDefault(),t(n.getAttribute("href")),!1)})}},359:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(20),a=n(358),u=o(a);t.onClientEntry=function(){(0,u.default)(window,function(e){(0,r.navigateTo)(e)})}},384:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}e.exports=n},392:function(e,t){"use strict";function n(e,t){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+e+"' height='"+t+"'%3E%3C/svg%3E"}function o(e){if(e.srcset&&!y&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}function r(e){for(var t,n=getComputedStyle(e).fontFamily,o={};null!==(t=p.exec(n));)o[t[1]]=t[2];return o}function a(e,t,o){var r=n(t||1,o||0);b.call(e,"src")!==r&&v.call(e,"src",r)}function u(e,t){e.naturalWidth?t(e):setTimeout(u,100,e,t)}function i(e){var t=r(e),n=e[f];if(t["object-fit"]=t["object-fit"]||"fill",!n.img){if("fill"===t["object-fit"])return;if(!n.skipTest&&g&&!t["object-position"])return}if(!n.img){n.img=new Image(e.width,e.height),n.img.srcset=b.call(e,"data-ofi-srcset")||e.srcset,n.img.src=b.call(e,"data-ofi-src")||e.src,v.call(e,"data-ofi-src",e.src),e.srcset&&v.call(e,"data-ofi-srcset",e.srcset),a(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{c(e)}catch(e){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}o(n.img),e.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',e.style.backgroundPosition=t["object-position"]||"center",e.style.backgroundRepeat="no-repeat",e.style.backgroundOrigin="content-box",/scale-down/.test(t["object-fit"])?u(n.img,function(){n.img.naturalWidth>e.width||n.img.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"}):e.style.backgroundSize=t["object-fit"].replace("none","auto").replace("fill","100% 100%"),u(n.img,function(t){a(e,t.naturalWidth,t.naturalHeight)})}function c(e){var t={get:function(t){return e[f].img[t?t:"src"]},set:function(t,n){return e[f].img[n?n:"src"]=t,v.call(e,"data-ofi-"+n,t),i(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}function s(){function e(e,t){return e[f]&&e[f].img&&("src"===t||"srcset"===t)?e[f].img:e}h||(HTMLImageElement.prototype.getAttribute=function(t){return b.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,n){return v.call(e(this,t),t,String(n))})}function l(e,t){var n=!j&&!e;if(t=t||{},e=e||"img",h&&!t.skipTest||!m)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var o=0;o<e.length;o++)e[o][f]=e[o][f]||{skipTest:t.skipTest},i(e[o]);n&&(document.body.addEventListener("load",function(e){"IMG"===e.target.tagName&&l(e.target,{skipTest:t.skipTest})},!0),j=!0,e="img"),t.watchMQ&&window.addEventListener("resize",l.bind(null,e,{skipTest:t.skipTest}))}var f="bfred-it:object-fit-images",p=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,d="undefined"==typeof Image?{style:{"object-position":1}}:new Image,g="object-fit"in d.style,h="object-position"in d.style,m="background-size"in d.style,y="string"==typeof d.currentSrc,b=d.getAttribute,v=d.setAttribute,j=!1;l.supportsObjectFit=g,l.supportsObjectPosition=h,s(),e.exports=l},25:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){h&&d&&(h=!1,d.length?g=d.concat(g):m=-1,g.length&&i())}function i(){if(!h){var e=r(u);h=!0;for(var t=g.length;t;){for(d=g,g=[];++m<t;)d&&d[m].run();m=-1,t=g.length}d=null,h=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,g=[],h=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new c(e,t)),1!==g.length||h||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},507:function(e,t){"use strict";function n(e,t){for(var n in e)if(!(n in t))return!0;for(var o in t)if(e[o]!==t[o])return!0;return!1}t.__esModule=!0,t.default=function(e,t,o){return n(e.props,t)||n(e.state,o)},e.exports=t.default},336:function(e,t,n){n(7),e.exports=function(e){return n.e(0x9427c64ab85d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(230)})})}},337:function(e,t,n){n(7),e.exports=function(e){return n.e(0xefeaa6d1881d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(231)})})}},338:function(e,t,n){n(7),e.exports=function(e){return n.e(0xc19374f83753,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(232)})})}},339:function(e,t,n){n(7),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(233)})})}},340:function(e,t,n){n(7),e.exports=function(e){return n.e(0x9666dae53ac,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(234)})})}},341:function(e,t,n){n(7),e.exports=function(e){return n.e(0x620f737b6699,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(235)})})}},342:function(e,t,n){n(7),e.exports=function(e){return n.e(26379419371658,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(236)})})}}});
//# sourceMappingURL=app-9437130cea76792dfd98.js.map
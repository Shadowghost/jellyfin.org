(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[3610],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,v=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4622:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"server-notifications",title:"Notifications"},s={unversionedId:"server/server-notifications",id:"server/server-notifications",isDocsHomePage:!1,title:"Notifications",description:"You can use notifications to get alerts when certain events happen on your server. Some common notifications include plugin installations and different user events.",source:"@site/docs/server/notifications.md",sourceDirName:"server",slug:"/server/server-notifications",permalink:"/docs/server/server-notifications",editUrl:"https://github.com/jellyfin/jellyfin.org/edit/master/docs/server/notifications.md",version:"current",frontMatter:{id:"server-notifications",title:"Notifications"},sidebar:"tutorialSidebar",previous:{title:"Live TV",permalink:"/docs/server/live-tv"},next:{title:"Quick Connect",permalink:"/docs/server/server-quick-connect"}},c=[{value:"Services",id:"services",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use notifications to get alerts when certain events happen on your server. Some common notifications include plugin installations and different user events."),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("p",null,"Notifications can be sent using different services depending on what kind of integration you want. Jellyfin will show notifications on the dashboard by default, but you can install alternative services on the ",(0,o.kt)("strong",{parentName:"p"},"Plugins")," page. Most services will require additional configuration but can be extremely useful for those who want instant updates for activity on their server."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You can properly configure this feature on the ",(0,o.kt)("strong",{parentName:"p"},"Notifications")," page in the settings. All notification types will be shown in a list as well as their current status. They can be enabled individually and can be set to only monitor specific users. Any installed notification services will show up in a list in this section."))}u.isMDXComponent=!0}}]);
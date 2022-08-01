"use strict";(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[2465],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},609:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={title:"Updating our iOS App",description:"Framework updates and minimum system requirements",authors:"anthonylavado",date:new Date("2022-06-08T00:00:00.000Z"),slug:"ios-update-150"},p=void 0,u={permalink:"/posts/ios-update-150",source:"@site/blog/2022/06-08-ios-update-150.md",title:"Updating our iOS App",description:"Framework updates and minimum system requirements",date:"2022-06-08T00:00:00.000Z",formattedDate:"June 8, 2022",tags:[],readingTime:2.3,hasTruncateMarker:!0,authors:[{name:"Anthony Lavado",url:"https://github.com/anthonylavado",imageURL:"https://avatars.githubusercontent.com/u/596194?v=4",key:"anthonylavado"}],frontMatter:{title:"Updating our iOS App",description:"Framework updates and minimum system requirements",authors:"anthonylavado",date:"2022-06-08T00:00:00.000Z",slug:"ios-update-150"},prevItem:{title:"Jellyfin Release - v10.8.0",permalink:"/posts/jellyfin-10-8-0"},nextItem:{title:"Android TV v0.13",permalink:"/posts/android-tv-13"}},s={authorsImageUrls:[void 0]},c=[],f={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/jellyfin-mobile/id1480192618?mt=8"},"Jellyfin Mobile"),", our main iOS App, we have updated some frameworks that adjust our minimum iOS version."),(0,a.kt)("p",null,"Our main iOS app has been built using ",(0,a.kt)("a",{parentName:"p",href:"http://expo.dev"},"Expo"),'. It offers a unique take on a "managed" React Native experience that allows anyone to develop an app for iOS, even without using a Mac. It allowed us to get an app out quickly, and use the web interface that is a part of every Jellyfin install.'),(0,a.kt)("p",null,"As time goes on, we keep Expo up to date in order to take advantage of security fixes, and help us use new features in the app itself. With our next app release, we move to ",(0,a.kt)("a",{parentName:"p",href:"https://blog.expo.dev/expo-sdk-43-aa9b3c7d5541"},"Expo 43"),", which fully supports iOS 15, but must also drop support for iOS 10 and 11."),(0,a.kt)("p",null,"As a result, starting with version 1.5.0 of our Apple app, ",(0,a.kt)("strong",{parentName:"p"},"iOS/iPadOS 12 or newer is required.")),(0,a.kt)("p",null,"If your device is still on an older version of iOS, and you currently have the app downloaded, your experience will stay mostly the same for now. The installed version isn't being removed from the store, so you can still re-install it if needed - but your device won't receive any updates for it. As time goes on, and you update your Jellyfin server, you may encounter unexpected behaviour with the older iOS app."),(0,a.kt)("p",null,"If you haven't downloaded it before, or are running into issues, you can try a few different options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If your server is local (on your home network), try ",(0,a.kt)("a",{parentName:"li",href:"https://apps.apple.com/ca/app/vlc-media-player/id650377962"},"VLC media player"),". It still supports devices as old as iOS 9, and can access the DLNA server built-in to Jellyfin."),(0,a.kt)("li",{parentName:"ul"},"If your server is remote, or you have the DLNA server disabled, you can try using Safari to access the normal Jellyfin interface.")),(0,a.kt)("p",null,"If you can't seem to get anything to work, feel free to get in touch and visit us in chat, or on Reddit. We've got a great community of users who are always willing to help, and we're usually around as well. All the links are available on our ",(0,a.kt)("a",{parentName:"p",href:"https://jellyfin.org/contact/"},"contact page"),"."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Thank you for using Jellyfin and supporting us this far."),(0,a.kt)("p",null,"Our iOS app is largely worked on by only one contributor, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/thornbill"},"@thornbill"),", who gives generously of his spare time to develop the app and make improvements to it and our web interface. He, along with a few of our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/jellyfin/people"},"contributors")," have donation pages setup either through GitHub Sponsors, or other sites like LiberaPay, Patreon and more. If you'd like to support any of them, please see their profiles for more information."),(0,a.kt)("p",null,"If you'd like to support Jellyfin as a whole (infrastructure and equipment costs only), you can visit our public ledger on ",(0,a.kt)("a",{parentName:"p",href:"https://opencollective.com/jellyfin"},"OpenCollective"),". We're pretty well covered for now, so consider donating to contributors first."))}d.isMDXComponent=!0}}]);
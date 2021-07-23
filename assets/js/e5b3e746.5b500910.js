(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[6613],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9791:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"server-media-internet-radio",title:"Internet radio"},l="Internet radio",s={unversionedId:"media/server-media-internet-radio",id:"media/server-media-internet-radio",isDocsHomePage:!1,title:"Internet radio",description:"It is possible to add Internet radio stations (e.g. shoutcast) to Jellyfin by utilizing the Live TV M3U Tuner device type. Directly entering links into the M3U tuner is supported, but it depends on the provider.",source:"@site/docs/media/internet-radio.md",sourceDirName:"media",slug:"/media/server-media-internet-radio",permalink:"/docs/media/server-media-internet-radio",editUrl:"https://github.com/jellyfin/jellyfin.org/edit/master/docs/media/internet-radio.md",version:"current",frontMatter:{id:"server-media-internet-radio",title:"Internet radio"},sidebar:"tutorialSidebar",previous:{title:"Books",permalink:"/docs/media/server-media-books"},next:{title:"Movies",permalink:"/docs/media/server-media-movies"}},d=[],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"internet-radio"},"Internet radio"),(0,o.kt)("p",null,"It is possible to add Internet radio stations (e.g. shoutcast) to Jellyfin by utilizing the Live TV M3U Tuner device type. Directly entering links into the M3U tuner is supported, but it depends on the provider."),(0,o.kt)("p",null,"If the M3U is not supported, it is most like due to missing headers in the link. Create a new M3U file containing the following data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-#EXTM3U"},"#EXTINF:0,Radio Freccia\nhttps://streamingv2.shoutcast.com/radiofreccia\n")),(0,o.kt)("p",null,"Note that the line that starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"#EXTINF:0,<title>")," is needed for each radio URL to give it a 'channel' entry under Live TV \\ Channels. Failing to add this line will cause the station to not show up under Live TV \\ Channels."),(0,o.kt)("p",null,"Next, head over to the Jellyfin administration page, go to Live TV, add new tuner device, choose M3U Tuner as Tuner type and navigate to your M3U file. Hit Save and let Jellyfin complete the Refresh Guide task (automatically started when saving a new tuner). You should now be able to play your radio station from under Live TV \\ Channels."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!NOTE]","\nAdding an M3U HTTP link instead of a locally created M3U file will almost certainly fail, in part because the ",(0,o.kt)("inlineCode",{parentName:"p"},"#EXTINF:")," directive is part of the IPTV standard, which is required to name the channel for Jellyfin to list it under Live TV \\ Channels. Pretty much no Internet radio will include this directive in their M3U files. Besides that, many radio stations use AJAX to dynamically update the M3U-files while listening, something that is not handled by Jellyfin.")))}u.isMDXComponent=!0}}]);
(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[4433],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return y}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),y=a,m=c["".concat(s,".").concat(y)]||c[y]||u[y]||o;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2696:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i={id:"network-reverse-proxy-caddy",title:"Caddy"},l={unversionedId:"reverse-proxy/network-reverse-proxy-caddy",id:"reverse-proxy/network-reverse-proxy-caddy",isDocsHomePage:!1,title:"Caddy",description:'"Caddy, sometimes clarified as the Caddy web server, is an open source, HTTP/2-enabled web server written in Go. It uses the Go standard library for its HTTP functionality." - Wikipedia)',source:"@site/docs/reverse-proxy/caddy.md",sourceDirName:"reverse-proxy",slug:"/reverse-proxy/network-reverse-proxy-caddy",permalink:"/docs/reverse-proxy/network-reverse-proxy-caddy",editUrl:"https://github.com/jellyfin/jellyfin.org/edit/master/docs/reverse-proxy/caddy.md",version:"current",frontMatter:{id:"network-reverse-proxy-caddy",title:"Caddy"},sidebar:"tutorialSidebar",previous:{title:"Apache",permalink:"/docs/reverse-proxy/network-reverse-proxy-apache"},next:{title:"HAProxy",permalink:"/docs/reverse-proxy/network-reverse-proxy-haproxy"}},s=[{value:"One-liners",id:"one-liners",children:[]},{value:"Caddyfile",id:"caddyfile",children:[{value:"Subpath",id:"subpath",children:[]}]},{value:"Community Links",id:"community-links",children:[]}],p={toc:s};function d(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'"',(0,o.kt)("a",{parentName:"p",href:"https://caddyserver.com/"},"Caddy"),', sometimes clarified as the Caddy web server, is an open source, HTTP/2-enabled web server written in Go. It uses the Go standard library for its HTTP functionality." - ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Caddy_(web_server)"},"Wikipedia")),(0,o.kt)("p",null,"You can reverse proxy to Jellyfin either with or without a config file, and either method offers automatic HTTPS if you want to use your public domain name."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you want HTTPS, make sure your domain name's A/AAAA records are pointed at your public IP address.")),(0,o.kt)("p",null,"If you aren't familiar with Caddy yet, check out its ",(0,o.kt)("a",{parentName:"p",href:"https://caddyserver.com/docs/getting-started"},"Getting Started")," guide."),(0,o.kt)("h2",{id:"one-liners"},"One-liners"),(0,o.kt)("p",null,"The easiest way to reverse proxy to Jellyfin is with the ",(0,o.kt)("inlineCode",{parentName:"p"},"reverse-proxy")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"caddy reverse-proxy --from :5001 --to 127.0.0.1:8096\n")),(0,o.kt)("p",null,"That is a simple but production-ready plaintext HTTP reverse proxy."),(0,o.kt)("p",null,"If you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"permission to bind to low ports, and"),(0,o.kt)("li",{parentName:"ul"},"a public domain name's DNS records pointed at your machine,")),(0,o.kt)("p",null,"then you can serve over HTTPS just as easily:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"caddy reverse-proxy --from example.com --to 127.0.0.1:8096\n")),(0,o.kt)("p",null,"You will see Caddy provision a TLS certificate for your site and if it succeeds, you can then access your Jellyfin server over HTTPS with your domain name."),(0,o.kt)("h2",{id:"caddyfile"},"Caddyfile"),(0,o.kt)("p",null,"If you want to use a config file, create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"Caddyfile")," for the configuration.\nThe first ",(0,o.kt)("inlineCode",{parentName:"p"},"reverse-proxy")," command above is equivalent to the following options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},":5001\n\nreverse_proxy 127.0.0.1:8096\n")),(0,o.kt)("p",null,"To get HTTPS, simply change the first line to your domain name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"example.com\n\nreverse_proxy 127.0.0.1:8096\n")),(0,o.kt)("h3",{id:"subpath"},"Subpath"),(0,o.kt)("p",null,"You can serve Jellyfin only at a particular base path and not proxy all other requests."),(0,o.kt)("p",null,"To do this, first configure Jellyfin to use a base path.\nGo to ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin > Networking")," and in the Base URL field, enter a path like ",(0,o.kt)("inlineCode",{parentName:"p"},"/jellyfin"),".\nYou might have to restart the Jellyfin server for this to take effect.\nThen simply give the ",(0,o.kt)("inlineCode",{parentName:"p"},"reverse_proxy")," directive a path matcher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"example.com\n\nreverse_proxy /jellyfin/* 127.0.0.1:8096\n")),(0,o.kt)("p",null,"With that config, Caddy will only proxy requests that start with ",(0,o.kt)("inlineCode",{parentName:"p"},"/jellyfin/"),".\nNote the trailing slash - that is optional, but recommended."),(0,o.kt)("h2",{id:"community-links"},"Community Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forum.jellyfin.org/t/securing-your-jellyfin-install-https-with-caddy-server/282"},"Windows plus DuckDNS Setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/jellyfin/comments/gdwe0s/windows_and_caddy_v2_reverse_proxy_guide"},"Windows Guide for Caddy v2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/jellyfin/comments/ek8ugr/windows_reverse_proxy_guide"},"Windows Guide for Caddy v1"))))}d.isMDXComponent=!0}}]);
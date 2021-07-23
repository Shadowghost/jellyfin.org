(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[1544],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},485:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"migrations",title:"Migrations"},l=void 0,s={unversionedId:"tips-and-tricks/migrations",id:"tips-and-tricks/migrations",isDocsHomePage:!1,title:"Migrations",description:"Direct database migration from Emby (of any version) to Jellyfin is NOT SUPPORTED. We have found many subtle bugs due to the inconsistent database schemas that result from trying to do this, and strongly recommend that all Jellyfin users migrating from Emby start with a fresh database and library scan.",source:"@site/docs/tips-and-tricks/migrations.md",sourceDirName:"tips-and-tricks",slug:"/tips-and-tricks/migrations",permalink:"/docs/tips-and-tricks/migrations",editUrl:"https://github.com/jellyfin/jellyfin.org/edit/master/docs/tips-and-tricks/migrations.md",version:"current",frontMatter:{id:"migrations",title:"Migrations"},sidebar:"tutorialSidebar",previous:{title:"Let's Encrypt",permalink:"/docs/tips-and-tricks/network-letsencrypt"},next:{title:"Monitoring",permalink:"/docs/tips-and-tricks/monitoring"}},p=[{value:"Watched Status Migration",id:"watched-status-migration",children:[]},{value:"Unofficial Procedure",id:"unofficial-procedure",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Direct database migration from Emby (of any version) to Jellyfin is NOT SUPPORTED. We have found many subtle bugs due to the inconsistent database schemas that result from trying to do this, and strongly recommend that all Jellyfin users migrating from Emby start with a fresh database and library scan."),(0,i.kt)("p",null,"The original procedure is provided below for reference however we cannot support it nor guarantee that a system upgraded in this way will work properly, if at all. If anyone is interested in writing a database migration script which will correct the deficiencies in the existing database and properly import them into Jellyfin, ",(0,i.kt)("a",{parentName:"p",href:"xref:contrib-index"},"we would welcome it however"),"!"),(0,i.kt)("h2",{id:"watched-status-migration"},"Watched Status Migration"),(0,i.kt)("p",null,"There are scripts available that will use the API to copy watched status and users from one instance to another. This can be done from Plex, Emby or another Jellyfin instance."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/CobayeGunther/Emby2Jelly"},"Emby/Jellyfin to Jellyfin migration")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wilmardo/migrate-plex-to-jellyfin"},"Plex to Jellyfin migration")),(0,i.kt)("h2",{id:"unofficial-procedure"},"Unofficial Procedure"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!WARNING]","\nWhile it is technically possible to migrate existing configuration of Emby version 3.5.2 or earlier, due to subtle and weird bugs reported after such attempts we do not recommend this migration. Emby versions 3.5.3 or 3.6+ cannot be migrated. Thus we recommend creating a new Jellyfin configuration and rebuilding your library instead.")),(0,i.kt)("p",null,"Windows users may take advantage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"install-jellyfin.ps1")," script in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jellyfin/jellyfin"},"Jellyfin repository")," which includes an automatic upgrade option."),(0,i.kt)("p",null,"This procedure is written for Debian-based Linux distributions, but can be translated to other platforms by following the same general principles."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Upgrade to Emby version 3.5.2, so that the database schema is fully up-to-date and consistent. While this is not required, it can help reduce the possibility of obscure bugs in the database.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stop the ",(0,i.kt)("inlineCode",{parentName:"p"},"emby-server")," daemon:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service emby-server stop\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Move your existing Emby data directory out of the way:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mv /var/lib/emby /var/lib/emby.backup\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Remove or purge the ",(0,i.kt)("inlineCode",{parentName:"p"},"emby-server")," package:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt purge emby-server\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"jellyfin")," package using the ",(0,i.kt)("a",{parentName:"p",href:"xref:admin-installing"},"installaton instructions"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stop the ",(0,i.kt)("inlineCode",{parentName:"p"},"jellyfin")," daemon:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service jellyfin stop\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy over all the data files from the Emby backup data directory:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo cp -a /var/lib/emby.backup/* /var/lib/jellyfin/\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Correct ownership on the new data directory:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R jellyfin:jellyfin /var/lib/jellyfin\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the ",(0,i.kt)("inlineCode",{parentName:"p"},"jellyfin")," daemon:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service jellyfin start\n")))))}m.isMDXComponent=!0}}]);
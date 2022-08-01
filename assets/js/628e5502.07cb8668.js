"use strict";(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[6973],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7078:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),s=["components"],i={id:"server-media-shows",title:"Shows"},l="Shows",p={unversionedId:"media/server-media-shows",id:"media/server-media-shows",title:"Shows",description:"The most common naming scheme for shows is categorizing the files by series and then season. Another common method is simply using series folders, especially for shows that are organized by air date and those without seasons. Adding the year at the end in parentheses will yield the best results when scraping metadata.",source:"@site/docs/media/shows.md",sourceDirName:"media",slug:"/media/server-media-shows",permalink:"/docs/media/server-media-shows",draft:!1,editUrl:"https://github.com/jellyfin/jellyfin.org/edit/master/docs/media/shows.md",tags:[],version:"current",frontMatter:{id:"server-media-shows",title:"Shows"},sidebar:"tutorialSidebar",previous:{title:"Music",permalink:"/docs/media/server-media-music"},next:{title:"Subtitles",permalink:"/docs/media/server-media-subtitles"}},u={},m=[{value:"Images",id:"images",level:2},{value:"Poster",id:"poster",level:3},{value:"Backdrop",id:"backdrop",level:3},{value:"Banner",id:"banner",level:3},{value:"Thumb",id:"thumb",level:3},{value:"Logo",id:"logo",level:3}],d={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shows"},"Shows"),(0,o.kt)("p",null,"The most common naming scheme for shows is categorizing the files by series and then season. Another common method is simply using series folders, especially for shows that are organized by air date and those without seasons. Adding the year at the end in parentheses will yield the best results when scraping metadata."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Shows\n\u251c\u2500\u2500 Series (2010)\n\u2502   \u251c\u2500\u2500 Season 01\n\u2502   \u2502   \u251c\u2500\u2500 Episode S01E01-E02.mkv\n\u2502   \u2502   \u251c\u2500\u2500 Episode S01E03.mkv\n\u2502   \u2502   \u2514\u2500\u2500 Episode S01E04.mkv\n\u2502   \u2514\u2500\u2500 Season 02\n\u2502       \u251c\u2500\u2500 Episode S02E01.mkv\n\u2502       \u2514\u2500\u2500 Episode S02E02.mkv\n\u2514\u2500\u2500 Series (2018)\n    \u251c\u2500\u2500 Episode S01E01.mkv\n    \u251c\u2500\u2500 Episode S01E02.mkv\n    \u251c\u2500\u2500 Episode S02E01-E02.mkv\n    \u2514\u2500\u2500 Episode S02E03.mkv\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!NOTE]","\nAvoid special characters such as ","*"," in M","*","A","*","S","*","H, use MASH instead.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!NOTE]","\nSeason folders shouldn't contain the series name, otherwise Jellyfin can in certain cases (Stargate SG-1 due to the dash and one, for instance) misdetect your episodes and put them all under the same season.")),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("h3",{id:"poster"},"Poster"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"folder.ext"),(0,o.kt)("li",{parentName:"ul"},"poster.ext"),(0,o.kt)("li",{parentName:"ul"},"cover.ext"),(0,o.kt)("li",{parentName:"ul"},"default.ext")),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("p",null,"Series (2010)/poster.jpg ",(0,o.kt)("em",{parentName:"p"},"for series or movie poster")),(0,o.kt)("p",null,"Series (2010)/Season 01/season1-poster.jpg ",(0,o.kt)("em",{parentName:"p"},"for season poster")),(0,o.kt)("h3",{id:"backdrop"},"Backdrop"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"backdrop.ext"),(0,o.kt)("li",{parentName:"ul"},"fanart.ext"),(0,o.kt)("li",{parentName:"ul"},"background.ext"),(0,o.kt)("li",{parentName:"ul"},"art.ext"),(0,o.kt)("li",{parentName:"ul"},"extrafanart.ext")),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("p",null,"Series (2010)/fanart.jpg ",(0,o.kt)("em",{parentName:"p"},"for the first backdrop image")),(0,o.kt)("p",null,"Series (2010)/extrafanart/fanart1.jpg, Series (2010)/extrafanart/fanart2.jpg, ",(0,o.kt)("em",{parentName:"p"},"etc for additional backdrop images")),(0,o.kt)("h3",{id:"banner"},"Banner"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"banner.ext")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,"Series (2010)/banner.jpg"),(0,o.kt)("h3",{id:"thumb"},"Thumb"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"thumb.ext"),(0,o.kt)("li",{parentName:"ul"},"landscape.ext")),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("p",null,"Series (2010)/landscape.jpg"),(0,o.kt)("p",null,"Series (2010)/Season 01/episode filename-thumb.jpg ",(0,o.kt)("em",{parentName:"p"},'for the thumbnail of an episode named "episode filename.mkv"')),(0,o.kt)("h3",{id:"logo"},"Logo"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"logo.ext")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,"Series (2010)/logo.png"))}c.isMDXComponent=!0}}]);
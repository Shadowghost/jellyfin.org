"use strict";(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[9014],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,v=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?i.createElement(v,l(l({ref:t},m),{},{components:n})):i.createElement(v,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5463:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),l=["components"],o={id:"server-media-movies",title:"Movies"},s="Movies",p={unversionedId:"media/server-media-movies",id:"media/server-media-movies",title:"Movies",description:"Movies should usually be in the library root directory or in a subfolder for the individual films. The subfolders allow for organization of metadata and images. Adding the year at the end in parentheses will yield the best results when scraping metadata.",source:"@site/docs/media/movies.md",sourceDirName:"media",slug:"/media/server-media-movies",permalink:"/docs/media/server-media-movies",draft:!1,editUrl:"https://github.com/jellyfin/jellyfin.org/edit/master/docs/media/movies.md",tags:[],version:"current",frontMatter:{id:"server-media-movies",title:"Movies"},sidebar:"tutorialSidebar",previous:{title:"Internet radio",permalink:"/docs/media/server-media-internet-radio"},next:{title:"Music",permalink:"/docs/media/server-media-music"}},m={},d=[{value:"Multiple Versions of a Movie",id:"multiple-versions-of-a-movie",level:2},{value:"Order of Versions",id:"order-of-versions",level:3},{value:"Examples of Sorting",id:"examples-of-sorting",level:4},{value:"Movie Extras",id:"movie-extras",level:2},{value:"Extras Folders",id:"extras-folders",level:3},{value:"File Name",id:"file-name",level:3},{value:"File Suffix",id:"file-suffix",level:3}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"movies"},"Movies"),(0,r.kt)("p",null,"Movies should usually be in the library root directory or in a subfolder for the individual films. The subfolders allow for organization of metadata and images. Adding the year at the end in parentheses will yield the best results when scraping metadata."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"Movies\n\u251c\u2500\u2500 Film (1990).mp4\n\u251c\u2500\u2500 Film (1994).mp4\n\u251c\u2500\u2500 Film (2008)\n\u2502\xa0\xa0 \u2514\u2500\u2500 Film.mkv\n\u2514\u2500\u2500 Film (2010)\n    \u251c\u2500\u2500 Film-cd1.avi\n    \u2514\u2500\u2500 Film-cd2.avi\n")),(0,r.kt)("h2",{id:"multiple-versions-of-a-movie"},"Multiple Versions of a Movie"),(0,r.kt)("p",null,"Multiple versions of a movie can be stored together and presented as a single title. Place each movie version in the same folder and give each version a name with the folder name as a prefix as seen below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"Movies\n\u2514\u2500\u2500 Best_Movie_Ever (2019)\n    \u251c\u2500\u2500 Best_Movie_Ever (2019) - 1080P.mp4\n    \u251c\u2500\u2500 Best_Movie_Ever (2019) - 720P.mp4\n    \u2514\u2500\u2500 Best_Movie_Ever (2019) - Directors Cut.mp4\n")),(0,r.kt)("p",null,"To distinguish between versions, each filename needs to have a space, hyphen, space, and then a label. Labels are not predetermined and can be made up by the user."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[!Note]","\nThe hyphen is required. Periods, commas and other characters are not supported.")),(0,r.kt)("p",null,"Additionally, labels can be placed between brackets with the same result as seen below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"Movies\n\u2514\u2500\u2500 Best_Movie_Ever (2019)\n    \u251c\u2500\u2500 Best_Movie_Ever (2019) - [1080P].mp4\n    \u251c\u2500\u2500 Best_Movie_Ever (2019) - [720P].mp4\n    \u2514\u2500\u2500 Best_Movie_Ever (2019) - [Directors Cut].mp4\n")),(0,r.kt)("p",null,"If labels are not added to the end of filenames, as shown above, each file will be treated as a unique movie and not a version of the same movie."),(0,r.kt)("h3",{id:"order-of-versions"},"Order of Versions"),(0,r.kt)("p",null,"Movie versions are presented in an alphabetically sorted list. An exception applies to resolution names, which are sorted in descending order from highest to lowest resolution. A version name qualifies as a resolution name when ending with either a ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," or an ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[!Note]","\nThe first movie version in the list is the one selected by default.")),(0,r.kt)("h4",{id:"examples-of-sorting"},"Examples of Sorting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1080p"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"2160p"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"360p"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"480p"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"720p")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"2160p"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1080p"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"720p"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"480p"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"360p")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Extended Cut"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Cinematic Cut"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Director's Cut")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"Cinematic Cut"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Director's Cut"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Extended Cut"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[!Note]","\nTo group media manually, long-click or right-click media to highlight then select additional media to merge. Use the new bar that appears to 'Group Versions'.")),(0,r.kt)("h2",{id:"movie-extras"},"Movie Extras"),(0,r.kt)("p",null,"Movie extras can include deleted scenes, interviews, and other various things that you would want to include alongside your movie. Jellyfin supports several different methods of adding these files."),(0,r.kt)("h3",{id:"extras-folders"},"Extras Folders"),(0,r.kt)("p",null,"One of the cleanest ways of adding extras is to place them in subfolders within your movie folder."),(0,r.kt)("p",null,"Supported folder types are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"behind the scenes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deleted scenes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interviews")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scenes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"samples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shorts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"featurettes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extras")," - Generic catch all for extras of an unknown type.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"Movies\n\u2514\u2500\u2500 Best_Movie_Ever (2019)\n    \u251c\u2500\u2500 Best_Movie_Ever (2019) - 1080P.mp4\n    \u251c\u2500\u2500 Best_Movie_Ever (2019) - 720P.mp4\n    \u251c\u2500\u2500 Best_Movie_Ever (2019) - Directors Cut.mp4\n    \u251c\u2500\u2500 behind the scenes\n    \u2502   \u251c\u2500\u2500 Making of the Best Movie Ever.mp4\n    \u2502   \u2514\u2500\u2500 Finding the right score.mp4\n    \u251c\u2500\u2500 interviews\n    \u2502   \u2514\u2500\u2500 Interview with the Director.mp4\n    \u2514\u2500\u2500 extras\n        \u2514\u2500\u2500 Home recreation.mp4\n")),(0,r.kt)("h3",{id:"file-name"},"File Name"),(0,r.kt)("p",null,"Some types of extras support a special option if you only have a single of that type. These options are to name the filename a specific word when stored in the same folder as the movie."),(0,r.kt)("p",null,"Supported filenames are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trailer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sample")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"theme")," - Audio file of the theme song")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"Movies\n\u2514\u2500\u2500 Best_Movie_Ever (2019)\n    \u251c\u2500\u2500 Best_Movie_Ever (2019) - 1080P.mp4\n    \u251c\u2500\u2500 sample.mp4\n    \u251c\u2500\u2500 theme.mp3\n    \u2514\u2500\u2500 trailer.mp4\n")),(0,r.kt)("h3",{id:"file-suffix"},"File Suffix"),(0,r.kt)("p",null,"If you would rather keep everything in a single folder, you can append special suffixes to the filename which Jellyfin picks up and uses to identify the file as an extra. Note that, with a few noted exceptions, these suffexes ",(0,r.kt)("strong",{parentName:"p"},"DO NOT")," contain any spaces."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-trailer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".trailer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_trailer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"}," trailer")," - This is a space followed by the word ",(0,r.kt)("inlineCode",{parentName:"li"},"trailer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-sample")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".sample")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_sample")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"}," sample")," - This is a space followed by the word ",(0,r.kt)("inlineCode",{parentName:"li"},"sample")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-scene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-clip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-interview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-behindthescenes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-deleted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-featurette")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-short"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"Movies\n\u2514\u2500\u2500 Best_Movie_Ever (2019)\n    \u251c\u2500\u2500 Best_Movie_Ever (2019) - 1080P.mp4\n    \u251c\u2500\u2500 That clip that I want everyone to see-clip.mp4\n    \u251c\u2500\u2500 Release Trailer-trailer.mp4\n    \u251c\u2500\u2500 Preview Trailer.trailer.avi\n    \u251c\u2500\u2500 Release Trailer 2_trailer.avi\n    \u251c\u2500\u2500 Teaser.sample.mp4\n    \u251c\u2500\u2500 Favorite Scene-scene.mp4\n    \u251c\u2500\u2500 The Best Ever-clip.mp4\n    \u251c\u2500\u2500 Making of The Best Movie Ever-behindthescenes.mp4\n    \u251c\u2500\u2500 Not the best scene-deleted.mp4\n    \u251c\u2500\u2500 Theme Song Music Video-featurette.mp4\n    \u2514\u2500\u2500 Art of the Best Movie Ever-short.mp4\n")))}c.isMDXComponent=!0}}]);
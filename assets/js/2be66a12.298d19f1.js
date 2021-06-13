(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[4667],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5420:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i={id:"clients-css-customization",title:"CSS Customization"},l={unversionedId:"tips-and-tricks/clients-css-customization",id:"tips-and-tricks/clients-css-customization",isDocsHomePage:!1,title:"CSS Customization",description:'In Dashboard > General, the "Custom CSS" field can be used to override current CSS in Jellyfin\'s stylesheet.',source:"@site/docs/tips-and-tricks/css-customization.md",sourceDirName:"tips-and-tricks",slug:"/tips-and-tricks/clients-css-customization",permalink:"/docs/tips-and-tricks/clients-css-customization",editUrl:"https://github.com/jellyfin/jellyfin.org/edit/master/docs/tips-and-tricks/css-customization.md",version:"current",frontMatter:{id:"clients-css-customization",title:"CSS Customization"},sidebar:"tutorialSidebar",previous:{title:"Users",permalink:"/docs/server/users/server-users-index"},next:{title:"fail2ban",permalink:"/docs/tips-and-tricks/fail2ban-jellyfin"}},s=[{value:"General Information About CSS",id:"general-information-about-css",children:[{value:"Colors",id:"colors",children:[]},{value:"Comments",id:"comments",children:[]},{value:"CSS Chaining",id:"css-chaining",children:[]}]},{value:"Tweak List",id:"tweak-list",children:[{value:"Played Indicator",id:"played-indicator",children:[]},{value:"Indicators Without Tweak",id:"indicators-without-tweak",children:[]},{value:"Green Indicators",id:"green-indicators",children:[]},{value:"Transparent And Dark Indicators",id:"transparent-and-dark-indicators",children:[]},{value:"Remove Home Icon from Header",id:"remove-home-icon-from-header",children:[]},{value:"Remove Cast Icon from Header",id:"remove-cast-icon-from-header",children:[]},{value:"Remove Sync Icon from Header",id:"remove-sync-icon-from-header",children:[]},{value:"Remove User Settings from Header",id:"remove-user-settings-from-header",children:[]},{value:"Remove Live TV Channel Listings",id:"remove-live-tv-channel-listings",children:[]},{value:"Reduce Live TV Channel Width",id:"reduce-live-tv-channel-width",children:[]},{value:"Remove Cast &amp; Crew",id:"remove-cast--crew",children:[]},{value:"Remove More Like This",id:"remove-more-like-this",children:[]},{value:"Hide Next Up",id:"hide-next-up",children:[]},{value:"Background Image on Login Page",id:"background-image-on-login-page",children:[]},{value:"Background Image on Homepage",id:"background-image-on-homepage",children:[]},{value:"Transparent Top Menu",id:"transparent-top-menu",children:[]},{value:"Image Edge Rounded",id:"image-edge-rounded",children:[]},{value:"Enlarge Tab Buttons",id:"enlarge-tab-buttons",children:[]},{value:"Minimalistic Login Page",id:"minimalistic-login-page",children:[]},{value:"Stylized Episode Previews",id:"stylized-episode-previews",children:[]},{value:"Stylized and Smaller Cast &amp; Crew Info",id:"stylized-and-smaller-cast--crew-info",children:[]},{value:"Pictureless Cast &amp; Crew",id:"pictureless-cast--crew",children:[]},{value:"Custom Background Color",id:"custom-background-color",children:[]},{value:"Darken the Background",id:"darken-the-background",children:[]},{value:"Right Header Color",id:"right-header-color",children:[]},{value:"Console Panel Custom Color",id:"console-panel-custom-color",children:[]},{value:"General Page Custom Color",id:"general-page-custom-color",children:[]},{value:"Custom Border Color",id:"custom-border-color",children:[]},{value:"Full Header Tweak",id:"full-header-tweak",children:[]},{value:"Disable Image Carousel for Libraries",id:"disable-image-carousel-for-libraries",children:[]},{value:"Shift Scroller Buttons",id:"shift-scroller-buttons",children:[]},{value:"&quot;Hotdogs and Catsup&quot; Color Theme Example",id:"hotdogs-and-catsup-color-theme-example",children:[]},{value:"Floating Now Playing Controls",id:"floating-now-playing-controls",children:[]}]},{value:"Community Links",id:"community-links",children:[{value:"Community Posts",id:"community-posts",children:[]},{value:"Community Themes",id:"community-themes",children:[]}]}],c={toc:s};function d(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Dashboard > General"),', the "Custom CSS" field can be used to override current CSS in Jellyfin\'s stylesheet.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},"Custom CSS")," provides customization such as changing colors, changing layouts, and item size and behavior. Below is a list of various tweaks that can be applied. The CSS tweaks work on both the web client, and the ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=org.jellyfin.mobile&hl=en_US"},"Android application"),". The code will apply in the order that it is written, however ",(0,r.kt)("inlineCode",{parentName:"p"},"!important")," will overrule everything. To learn more about ",(0,r.kt)("inlineCode",{parentName:"p"},"!important")," and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"},"CSS Specificity")," or ",(0,r.kt)("a",{parentName:"p",href:"https://specifishity.com/"},"specifishity"),". To implement these changes, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Dashboard > General > Custom CSS")," to start."),(0,r.kt)("p",null,"If you have little or no experience with CSS, various resources and tutorials can be found online. Using the tweaks and examples below makes it quite easy to get started with making your own changes to your Jellyfin instance."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the &#39;Custom CSS&#39; setting in the administrator dashboard of the web client",src:n(6401).Z})),(0,r.kt)("h2",{id:"general-information-about-css"},"General Information About CSS"),(0,r.kt)("p",null,"You can learn more about CSS using sites like ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/css/default.asp"},"w3schools")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},"MDN"),". Below are some very basic CSS knowledge that will let you do rough edits to the pre-made tweaks below."),(0,r.kt)("h3",{id:"colors"},"Colors"),(0,r.kt)("p",null,"CSS supports multiple color formats, but typically the hex color codes are used for specific colors. To get a specific color, exact color data such as the hex codes below have to be used."),(0,r.kt)("p",null,"Some examples of hex color codes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Green: ",(0,r.kt)("inlineCode",{parentName:"li"},"#5dd000")),(0,r.kt)("li",{parentName:"ul"},"Blue: ",(0,r.kt)("inlineCode",{parentName:"li"},"#0000d0")),(0,r.kt)("li",{parentName:"ul"},"Red: ",(0,r.kt)("inlineCode",{parentName:"li"},"#d00000")),(0,r.kt)("li",{parentName:"ul"},"Transparent Black: ",(0,r.kt)("inlineCode",{parentName:"li"},"#00000058"))),(0,r.kt)("p",null,"Go ",(0,r.kt)("a",{parentName:"p",href:"https://htmlcolorcodes.com/color-picker"},"here")," for a hex color chart to get a code for any given color."),(0,r.kt)("p",null,'If you are looking for a more standard and less specific color, typing the literal name of colors suits that purpose well. For example, to get the color "yellow" you can simply write "yellow", this will use a preset yellow color.'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yellow")," Yellow ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"red")," Red ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"aquamarine")," Aquamarine ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"lightseagreen")," Light Sea Green"),(0,r.kt)("p",null,"Go ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/colors/colors_names.asp"},"here")," for a list of color names supported."),(0,r.kt)("h3",{id:"comments"},"Comments"),(0,r.kt)("p",null,"A section of code or text inbetween ",(0,r.kt)("inlineCode",{parentName:"p"},"/*")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"*/")," indicates a comment, and will be ignored.\nThis allows you to add descriptions for any particular section of code.\nIt can also be used to disable code without deleting it."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/* This might be added above code to tell you what it does */")),(0,r.kt)("h3",{id:"css-chaining"},"CSS Chaining"),(0,r.kt)("p",null,'CSS can be "chained" together to modify different sections together at the same time. An example of this is the "Border Color" tweak. It lists the elements to be modified, and performs a change that is applied to all of them.'),(0,r.kt)("p",null,'"Border Color" tweak:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".emby-input, .emby-textarea, .emby-select { border-color: #d00000; }\n")),(0,r.kt)("h2",{id:"tweak-list"},"Tweak List"),(0,r.kt)("p",null,'To apply any one of these tweaks, copy and paste the CSS code from the example into the "Custom CSS" field. To use multiple tweaks, simply add them one after another into the field. Any applied code will remain in the field. To remove a tweak, delete or comment out the code for it from the field. Changes apply immediately when the settings page is saved and doesn\'t require restarting your Jellyfin server.'),(0,r.kt)("h3",{id:"played-indicator"},"Played Indicator"),(0,r.kt)("p",null,"This will affect the played/watched indicator. Replace the hex color with any value you like."),(0,r.kt)("h3",{id:"indicators-without-tweak"},"Indicators Without Tweak"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the default watched indicators",src:n(3831).Z})),(0,r.kt)("h3",{id:"green-indicators"},"Green Indicators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".playedIndicator { background: #5dd000; }\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of watched indicators with a custom green color applied",src:n(2535).Z})),(0,r.kt)("h3",{id:"transparent-and-dark-indicators"},"Transparent And Dark Indicators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* Make watched icon dark and transparent */\n.playedIndicator {background: #00000058;}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of watched indicators with a custom transparent color applied",src:n(4897).Z})),(0,r.kt)("h3",{id:"remove-home-icon-from-header"},"Remove Home Icon from Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".headerHomeButton { display: none; }\n\n.headerButton.headerButtonRight.headerUserButton.paper-icon-button-light { display: none; }\n")),(0,r.kt)("h3",{id:"remove-cast-icon-from-header"},"Remove Cast Icon from Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".headerCastButton { display: none; }\n")),(0,r.kt)("h3",{id:"remove-sync-icon-from-header"},"Remove Sync Icon from Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".headerSyncButton { display: none; }\n")),(0,r.kt)("h3",{id:"remove-user-settings-from-header"},"Remove User Settings from Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".material-icons.person { display: none; }\n")),(0,r.kt)("h3",{id:"remove-live-tv-channel-listings"},"Remove Live TV Channel Listings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".guideChannelNumber { display: none; }\n")),(0,r.kt)("h3",{id:"reduce-live-tv-channel-width"},"Reduce Live TV Channel Width"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".channelsContainer { max-width: 8em; }\n")),(0,r.kt)("h3",{id:"remove-cast--crew"},"Remove Cast & Crew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"#castCollapsible { display: none; }\n")),(0,r.kt)("h3",{id:"remove-more-like-this"},"Remove More Like This"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"#similarCollapsible { display: none; }\n")),(0,r.kt)("h3",{id:"hide-next-up"},"Hide Next Up"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"div.nextUpSection { display: none; }\n")),(0,r.kt)("h3",{id:"background-image-on-login-page"},"Background Image on Login Page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'#loginPage {\n  background: url("https://i.ytimg.com/vi/avCWDDox1nE/maxresdefault.jpg");\n  background-size: cover;\n}\n')),(0,r.kt)("h3",{id:"background-image-on-homepage"},"Background Image on Homepage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'.backdropImage { display: none; }\n\n.backgroundContainer {\n  background-color: rgba(0, 0, 0, 0);\n  background-image: url("https://i.ytimg.com/vi/avCWDDox1nE/maxresdefault.jpg");\n  filter: blur(10px);\n  background-size: cover;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/background"},"Additional MDN Documentation")),(0,r.kt)("h3",{id:"transparent-top-menu"},"Transparent Top Menu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".skinHeader.focuscontainer-x.skinHeader-withBackground.skinHeader-blurred {background:none; background-color:rgba(0, 0, 0, 0);}\n.skinHeader.focuscontainer-x.skinHeader-withBackground.skinHeader-blurred.noHomeButtonHeader {background:none; background-color:rgba(0, 0, 0, 0);}\n")),(0,r.kt)("h3",{id:"image-edge-rounded"},"Image Edge Rounded"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".cardContent-button,\n.itemDetailImage {\n  border-radius: 0.25em;\n}\n")),(0,r.kt)("h3",{id:"enlarge-tab-buttons"},"Enlarge Tab Buttons"),(0,r.kt)("p",null,"Enlarges the tab buttons, suggested, genres, etc. By default they are really tiny, especially on mobile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'/* Adjust both "size-adjust" and "size" to modify size */\n.headerTabs.sectionTabs {text-size-adjust: 110%;  font-size: 110%;}\n.pageTitle {margin-top: auto; margin-bottom: auto;}\n.emby-tab-button {padding: 1.75em 1.7em;}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The enlarged tab buttons and transparent menu look like this:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of enlarged tab buttons and transparent menu",src:n(7215).Z})),(0,r.kt)("h3",{id:"minimalistic-login-page"},"Minimalistic Login Page"),(0,r.kt)("p",null,"This looks even better together with the transparent top menu!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'/* Narrow the login form */\n#loginPage .readOnlyContent, #loginPage form {max-width: 22em;}\n\n/* Hide "please login" text, margin is to prevent login form moving too far up */\n#loginPage h1 {display: none}\n#loginPage .padded-left.padded-right.padded-bottom-page {margin-top: 50px}\n\n/* Hide "manual" and "forgot" buttons */\n#loginPage .raised.cancel.block.btnManual.emby-button {display: none}\n#loginPage .raised.cancel.block.btnForgotPassword.emby-button {display: none}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the minimalistic login page",src:n(4991).Z})),(0,r.kt)("h3",{id:"stylized-episode-previews"},"Stylized Episode Previews"),(0,r.kt)("p",null,"The episode previews in season view are sized based on horizontal resolution. This leads to a lot of wasted space on the episode summary and a high vertical page, which  requires a lot of scrolling. This code reduces the height of episode entries, which solves both problems."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* Size episode preview images in a more compact way */\n.listItemImage.listItemImage-large.itemAction.lazy {height: 110px;}\n.listItem-content {height: 115px;}\n.secondary.listItem-overview.listItemBodyText {height: 61px; margin: 0;}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of a TV show page with stylized episode previews",src:n(33).Z})),(0,r.kt)("h3",{id:"stylized-and-smaller-cast--crew-info"},"Stylized and Smaller Cast & Crew Info"),(0,r.kt)("p",null,"This will drastically change the style of cast info into something very similar to how Plex approaches it. This override will lead to somewhat smaller thumbnails, and also works with all themes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* Shrink and square (or round) cast thumnails */\n#castContent .card.overflowPortraitCard.personCard.card-hoverable.card-withuserdata {width: 4.2cm !important; font-size: 90% !important;}\n#castContent .card.overflowPortraitCard.personCard.card-withuserdata {width: 4.2cm !important; font-size: 90% !important;}\n\n/* Correct image aspect ratio behaviour, set border-radius to zero for square tiles */\n#castContent .cardContent-button.cardImageContainer.coveredImage.cardContent.cardContent-shadow.itemAction.lazy {background-size: cover; !important; border-radius: 2.5cm;}\n#castContent .cardContent-button.cardImageContainer.coveredImage.defaultCardBackground.defaultCardBackground1.cardContent.cardContent-shadow.itemAction {background-size: cover; !important; border-radius: 2.5cm;}\n#castContent .cardContent-button.cardImageContainer.coveredImage.defaultCardBackground.defaultCardBackground2.cardContent.cardContent-shadow.itemAction {background-size: cover; !important; border-radius: 2.5cm;}\n#castContent .cardContent-button.cardImageContainer.coveredImage.defaultCardBackground.defaultCardBackground3.cardContent.cardContent-shadow.itemAction {background-size: cover; !important; border-radius: 2.5cm;}\n#castContent .cardContent-button.cardImageContainer.coveredImage.defaultCardBackground.defaultCardBackground4.cardContent.cardContent-shadow.itemAction {background-size: cover; !important; border-radius: 2.5cm;}\n#castContent .cardContent-button.cardImageContainer.coveredImage.defaultCardBackground.defaultCardBackground5.cardContent.cardContent-shadow.itemAction {background-size: cover; !important; border-radius: 2.5cm;}\n#castContent .cardScalable {width: 3.8cm !important; height: 3.8cm !important; border-radius: 2.5cm;}\n#castContent .cardOverlayContainer.itemAction {border-radius: 2.5cm;}\n\n/* Center the mouseover buttons */\n#castContent .cardOverlayButton-br {bottom: 4%; right: 15%; width: 70%;}\n#castContent .cardOverlayButton.cardOverlayButton-hover.itemAction.paper-icon-button-light {margin:auto;}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of stylized and smaller Cast &amp; Crew info",src:n(4220).Z})),(0,r.kt)("h3",{id:"pictureless-cast--crew"},"Pictureless Cast & Crew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"#castContent .card.overflowPortraitCard { width: 4.2cm; font-size: 90%; }\n\n#castContent .personCard { width: auto; }\n\n#castContent .personCard .cardBox { margin-bottom: 0px; margin-right: 0px; }\n\n#castContent { flex-wrap: wrap; max-height: 9.75em; }\n\ndiv.personCard > :first-child > :first-child { display: none; }\n\n.itemDetailPage .cardText { text-align: left; }\n\n.itemDetailPage .textActionButton { text-align: left; }\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of Pictureless Cast &amp; Crew info",src:n(5489).Z})),(0,r.kt)("h3",{id:"custom-background-color"},"Custom Background Color"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".backgroundContainer, .dialog, html { background-color: #0fd0d0; }\n")),(0,r.kt)("h3",{id:"darken-the-background"},"Darken the Background"),(0,r.kt)("p",null,"This darkens the background on Blue Radiance and Purple Haze, edit the percentage depending how dark you want it. Lower is darker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* Darken background, only works with blue radiance */\n.backgroundContainer {background-color: #000000; filter: brightness(50%);}\n")),(0,r.kt)("h3",{id:"right-header-color"},"Right Header Color"),(0,r.kt)("p",null,"This modifies the colors of the cast, search and user buttons in the top right."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".headerRight { color: yellow; }\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of a custom yellow color for the icon buttons in the top right of the screen",src:n(7740).Z})),(0,r.kt)("h3",{id:"console-panel-custom-color"},"Console Panel Custom Color"),(0,r.kt)("p",null,"Modifies the color of the left menu panel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".mainDrawer-scrollContainer { color: yellow; }\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of a custom yellow color on the left menu panel",src:n(234).Z})),(0,r.kt)("h3",{id:"general-page-custom-color"},"General Page Custom Color"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".dashboardGeneralForm { color: yellow; }\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of a custom yellow color on the General Page",src:n(3384).Z})),(0,r.kt)("h3",{id:"custom-border-color"},"Custom Border Color"),(0,r.kt)("p",null,"This will change the border color for text fields and drop-down menus."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".emby-input, .emby-textarea, .emby-select { border-color: #d00000; }\n")),(0,r.kt)("p",null,"This will affect the border color of highlighted (selected) text fields and drop-down menus."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".emby-input:focus, .emby-textarea:focus, .emby-select-withcolor { border-color: #ffffff !important; }\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of a custom red border color",src:n(5883).Z})),(0,r.kt)("h3",{id:"full-header-tweak"},"Full Header Tweak"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".skinHeader, .mainDrawer, .emby-input, .emby-textarea, .emby-select, .navMenuOption-selected, .cardBox, .paperList { background: #ff9475; }\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the full header tweak",src:n(6056).Z})),(0,r.kt)("h3",{id:"disable-image-carousel-for-libraries"},"Disable Image Carousel for Libraries"),(0,r.kt)("p",null,"This will make it so libraries and media fit neatly onto the homepage with no left to right scrolling required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"@media all and (min-width: 50em) {\n  .homePage .emby-scroller {\n    margin-right: 0;\n  }\n  .homePage .emby-scrollbuttons {\n    display: none;\n  }\n  .homePage .itemsContainer {\n    flex-wrap: wrap;\n  }\n}\n")),(0,r.kt)("h3",{id:"shift-scroller-buttons"},"Shift Scroller Buttons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".emby-scrollbuttons {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    justify-content: space-between;\n    pointer-events: none;\n}\n\n.emby-scrollbuttons-button {\n    pointer-events: initial;\n}\n")),(0,r.kt)("h3",{id:"hotdogs-and-catsup-color-theme-example"},'"Hotdogs and Catsup" Color Theme Example'),(0,r.kt)("p",null,"An example of a color theme."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the &quot;Hotdogs and Catsup&quot; color theme",src:n(865).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'.skinHeader, .mainDrawer, .emby-input, .emby-textarea, .emby-select, .navMenuOption-selected, .cardBox, .paperList {\n    background: #ff9475;\n}\n\n.emby-input, .emby-textarea, .emby-select {\n    border-color: #fdbe7d;\n}\n\n.backgroundContainer.withBackdrop, .backdropContainer, .backgroundContainer {\n    background: #fdbe7d;\n}\n\n#myPreferencesMenuPage .listItemBodyText,\n.emby-tab-button[data-index="0"],\n#myPreferencesMenuPage > div > div > div > a:nth-child(odd),\n.button-submit,\n.mainAnimatedPage *:nth-child(odd),\n.dashboardGeneralForm *:nth-child(odd),\n.mainDrawer-scrollContainer *:nth-child(odd),\n.headerRight *:nth-child(odd) {\n    color: red;\n}\n\n#myPreferencesMenuPage .listItemIcon,\n.emby-tab-button[data-index="1"],\n#myPreferencesMenuPage > div > div > div > a:nth-child(even),\n.mainAnimatedPage *:nth-child(even),\n.dashboardGeneralForm *:nth-child(even),\n.mainDrawer-scrollContainer *:nth-child(even),\n.headerRight *:nth-child(even)\n.cancel {\n    color: yellow;\n}\n')),(0,r.kt)("h3",{id:"floating-now-playing-controls"},"Floating Now Playing Controls"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the floating &quot;Now Playing&quot; controls",src:n(9802).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* fixed height for the bottom row */\n:root {\n  --element-fixed-top: 95px;\n}\n\n/* Now playing bar in the footer */\n.nowPlayingBar {\n       width: 650px;\n       z-index: 10;\n       position: fixed;\n       top: 300px;\n       height: 120px;\n      border-style: solid;\n      border-color: white;\n      background-color: black;\n      margin-left: 50%;\n}\n\n/* Only child of nowPlayingBar */\n.nowPlayingBarTop {\n     height: 5px !important;\n     max-width: 500px\n     top: 10px;\n}\n\n/* Song progress seekbar */\n.nowPlayingBarPositionContainer {\n     position: relative;\n     top: 1.0em !important;\n}\n\n/* Container that holds album thumbnail, artist and album name */\n.nowPlayingBarInfoContainer {\n     position: fixed !important;\n     left: 12px;\n     top: 34px;\n     height: 60px;\n     width: 1100px;\n}\n\n/* Holds the next, previous track, play/pause, next and time elements */\n.nowPlayingBarCenter {\n     position: relative !important;\n     left: 32px;\n     top: var(--element-fixed-top);\n     min-width: 500px;\n}\n\n/* Hold mute, volume slider container, repeat, favorite and remote control buttons */\n.nowPlayingBarRight {\n     width: 402px !important;\n     left: -60px;\n}\n\n/* Mute button */\n.muteButton {\n    position: relative;\n    top: var(--element-fixed-top);\n}\n\n/* Volume slider */\n.nowPlayingBarVolumeSliderContainer {\n     position: relative;\n     left: -4px;\n     top: var(--element-fixed-top);\n}\n\n/* Toggle repeat */\n.toggleRepeatButton {\n     position: relative !important;\n     left: -20px;\n     top: var(--element-fixed-top);\n}\n\n/* Favorite */\n.nowPlayingBarUserDataButtons {\n     position: relative;\n     left: -4px;\n     top: var(--element-fixed-top);\n}\n\n/* Remote control */\n.remoteControlButton {\n     left: -110px;\n     top: var(--element-fixed-top);\n}\n")),(0,r.kt)("h2",{id:"community-links"},"Community Links"),(0,r.kt)("p",null,"Some links to places where custom CSS has been discussed and shared!"),(0,r.kt)("h3",{id:"community-posts"},"Community Posts"),(0,r.kt)("p",null,"Keep in mind that these posts may have been made under previous versions of Jellyfin. Some of these tweaks listed in these guides may not work anymore!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/jellyfin/comments/fgmu6k/custom_css_updated_for_1050"},"Custom CSS Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/jellyfin/comments/htrfrx/but_wait_there_is_more_custom_css"},'"But wait, there is more Custom CSS!"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/jellyfin/comments/g9gmjj/customizable_plug_n_play_css_for_jellyfin"},"Customizable Plug n' Play CSS for Jellyfin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/jellyfin/comments/crxqk5/easy_jellyfin_custom_css"},"Easy Jellyfin custom CSS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/jellyfin/comments/fgmu6k/custom_css_updated_for_1050"},"Custom CSS - updated for 10.5.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/jellyfin/comments/bvnt65/sharing_even_more_custom_css_and_some_fixes_to"},"Sharing even more custom CSS (and some fixes to previous stuff)"))),(0,r.kt)("h3",{id:"community-themes"},"Community Themes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CTalvio/Monochromic"},"Monochromic - A custom theme for Jellyfin mediaserver created using CSS overrides")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CTalvio/Kaleidochromic"},"Kaleidochromic - Yet another custom theme for Jellyfin mediaserver created using CSS overrides, built on top of Monochromic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CTalvio/Novachromic"},"Novachromic - A light theme, built on top of Monochromic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/prayag17/JellyfinCSS"},"JellyfinCSS - This is Jellyfin custom-css")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/DevilsDesigns/Jellyfin-Netflix-Dark"},"Jellyfin Netflix Dark - The Best Netflix Dark Theme for Jellyfin Around!"))))}d.isMDXComponent=!0},5883:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-bordercolor-4e4ae9db6d317d04b9a83e2f20913317.png"},234:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-consolepanel-af3f50ceabfddbe657c14b4199b8ed42.png"},6401:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-customcssfield-e089d319e00e4efe44fbaf11aef9aec6.png"},33:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-episodepreview-cc0e46a6e0cba8fbd87a8b3128c00e8d.png"},9802:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-floatingnowplaying-680eded6dc301fcb54b381cbfb8b33b7.png"},6056:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-full-header-mod-73620ce96659a31bee6561f015eea7f6.png"},3384:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-generalcolor-7d266e772f082888c3418c19e9fbba7f.png"},2535:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-greenwatched-a213ef1f16e9f6ea6c34d364cbaef9af.png"},865:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-hotdog-and-catsup-073690533435f8fa66acdc828c8cedbc.png"},4991:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-minimallogin-82cf43fc00110a84c62dac289227d110.png"},5489:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-nopicturecast-7cbc52a9f8643d8e40df680690493352.png"},3831:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-normalwatched-483375b10fe6b9ccd45c7307907cadeb.png"},7740:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-rightheader-a95a510fc67ff662328519d6d9c31e3c.png"},4220:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-stylizedcast-98bb48490072a5c9ec0fa8a1df39acbf.png"},7215:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-transparenttopbarenlargedtabs-9f8cc4f3be82b14c27b70b6ae859747b.png"},4897:function(e,t,n){"use strict";t.Z=n.p+"assets/images/custom-css-transparentwatched-3222efd553982060da7e953edb164cec.png"}}]);
"use strict";(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[8487],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return h}});var n=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(i),h=l,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return i?n.createElement(m,a(a({ref:t},u),{},{components:i})):n.createElement(m,a({ref:t},u))}));function h(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=i.length,a=new Array(o);a[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,a[1]=r;for(var d=2;d<o;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},8746:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return p}});var n=i(3117),l=i(102),o=(i(7294),i(3905)),a=["components"],r={id:"kodi",title:"Kodi"},s="Kodi",d={unversionedId:"clients/kodi",id:"clients/kodi",title:"Kodi",description:"Add-on Repository",source:"@site/docs/clients/kodi.md",sourceDirName:"clients",slug:"/clients/kodi",permalink:"/docs/clients/kodi",draft:!1,editUrl:"https://github.com/jellyfin/jellyfin.org/edit/master/docs/clients/kodi.md",tags:[],version:"current",frontMatter:{id:"kodi",title:"Kodi"},sidebar:"tutorialSidebar",previous:{title:"Setting up live TV",permalink:"/docs/setup-live-tv"},next:{title:"Mopidy",permalink:"/docs/clients/mopidy"}},u={},p=[{value:"Add-on Repository",id:"add-on-repository",level:2},{value:"Install Add-on Repository",id:"install-add-on-repository",level:3},{value:"General Use Devices (PCs and Tablets)",id:"general-use-devices-pcs-and-tablets",level:4},{value:"&quot;Embedded&quot; Devices (Android TV, Firestick, and other TV Boxes)",id:"embedded-devices-android-tv-firestick-and-other-tv-boxes",level:4},{value:"Jellyfin for Kodi",id:"jellyfin-for-kodi",level:2},{value:"Jellyfin for Kodi Overview",id:"jellyfin-for-kodi-overview",level:3},{value:"Install Jellyfin for Kodi Add-on",id:"install-jellyfin-for-kodi-add-on",level:3},{value:"Add-on Mode",id:"add-on-mode",level:4},{value:"Native Mode",id:"native-mode",level:4},{value:"Library Syncing",id:"library-syncing",level:4},{value:"Multiple User Accounts",id:"multiple-user-accounts",level:3},{value:"Multiple Clients",id:"multiple-clients",level:3},{value:"JellyCon",id:"jellycon",level:2},{value:"JellyCon Overview",id:"jellycon-overview",level:3},{value:"Install JellyCon Add-on",id:"install-jellycon-add-on",level:3},{value:"Configuring Home",id:"configuring-home",level:3},{value:"Examples",id:"examples",level:4}],c={toc:p};function h(e){var t=e.components,i=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kodi"},"Kodi"),(0,o.kt)("h2",{id:"add-on-repository"},"Add-on Repository"),(0,o.kt)("h3",{id:"install-add-on-repository"},"Install Add-on Repository"),(0,o.kt)("p",null,"The most convenient install method of our Jellyfin add-ons is to use the official Kodi Jellyfin Repository.  Using this repository allows for easy install of our add-ons, as well as automatically keeping the add-ons up to date with the latest version.  Any other Jellyfin related add-ons that may be built in the future will also be available here."),(0,o.kt)("p",null,"The installation method for the repository varies depending on what kind of device you're using, outlined below."),(0,o.kt)("h4",{id:"general-use-devices-pcs-and-tablets"},"General Use Devices (PCs and Tablets)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the repository installer found ",(0,o.kt)("a",{parentName:"li",href:"https://kodi.jellyfin.org/repository.jellyfin.kodi.zip"},"here"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It will be saved as ",(0,o.kt)("inlineCode",{parentName:"li"},"repository.jellyfin.kodi.zip")))),(0,o.kt)("li",{parentName:"ol"},"Install the Jellyfin repository.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Open Kodi, go to the settings menu,  and navigate to "Add-on Browser"'),(0,o.kt)("li",{parentName:"ul"},'Select "Install from Zip File"',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'If prompted, enter settings and enable "Unknown Sources", then go back to the Add-on Browser'))),(0,o.kt)("li",{parentName:"ul"},"Select the newly downloaded file and it will be installed")))),(0,o.kt)("h4",{id:"embedded-devices-android-tv-firestick-and-other-tv-boxes"},'"Embedded" Devices (Android TV, Firestick, and other TV Boxes)'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Open Kodi, go to the settings menu, and navigate to "File manager"',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Select "Add source"'),(0,o.kt)("li",{parentName:"ul"},"In the text box, enter ",(0,o.kt)("inlineCode",{parentName:"li"},"https://kodi.jellyfin.org")),(0,o.kt)("li",{parentName:"ul"},'Enter a name for the data source, such as "Jellyfin Repo" and select Ok'))),(0,o.kt)("li",{parentName:"ol"},'From the settings menu, navigate to "Add-on Browser"',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Select "Install from Zip File"',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'If prompted, enter settings and enable "Unknown Sources", then go back to the Add-on Browser'))),(0,o.kt)("li",{parentName:"ul"},"Select the data source you just added"),(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"repository.jellyfin.kodi.zip"))))),(0,o.kt)("h2",{id:"jellyfin-for-kodi"},"Jellyfin for Kodi"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!TIP]","\nIt's highly recommended to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kodi Sync Queue")," plugin into the Jellyfin server as well.\nThis will keep your media libraries up to date without waiting for a periodic re-sync from Kodi.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!CAUTION]","\nRemote Kodi databases, like MySQL, are not supported. A local SQLite database is required (this is the default).")),(0,o.kt)("h3",{id:"jellyfin-for-kodi-overview"},"Jellyfin for Kodi Overview"),(0,o.kt)("p",null,"This addon syncs metadata from selected Jellyfin libraries into the local Kodi database. This has the effect of making interacting with it feel very much like vanilla Kodi with local media.  This means that our Jellyfin content will be displayed on the home screen under the proper media headings by default, it has virtually no delay while interacting with the library, etc. However, it also assumes that it's the only media source and in largely incompatible with other media sources that interact with Kodi's database."),(0,o.kt)("p",null,"Media in Kodi's database is automatically kept in sync with the server in one of several ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Startup sync - Each time Kodi starts, it will reach out to the Kodi Sync Queue plugin in the server and request all updated media since it's last checkin time (when Kodi was last shut down)"),(0,o.kt)("li",{parentName:"ul"},"Live sync - This happens while Kodi is running.  When the server updates an item, it will send a notification to Kodi over a websocket connection that it has new media that needs to be updated.")),(0,o.kt)("h3",{id:"install-jellyfin-for-kodi-add-on"},"Install Jellyfin for Kodi Add-on"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Jellyfin for Kodi.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'From within Kodi, navigate to "Add-on Browser"'),(0,o.kt)("li",{parentName:"ul"},'Select "Install from Repository"'),(0,o.kt)("li",{parentName:"ul"},'Choose "Kodi Jellyfin Addons", followed by "Video Add-ons"'),(0,o.kt)("li",{parentName:"ul"},"Select the Jellyfin add-on and choose install"))),(0,o.kt)("li",{parentName:"ol"},"Within a few seconds you should be prompted for your server details.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If a Jellyfin server is detected on your local network, it will displayed in a dialog"),(0,o.kt)("li",{parentName:"ul"},'If a Jellyfin server is not detected on your local network, select "Manually Add Server".  Enter your server info into the text field.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Enter the server name or IP address and the port number (default value is 8096)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Host: ",(0,o.kt)("inlineCode",{parentName:"li"},"192.168.1.10:8096")))),(0,o.kt)("li",{parentName:"ul"},'If using SSL and a reverse proxy, enter the full URL in the "Host" field',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Host: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://jellyfin.example.com")))),(0,o.kt)("li",{parentName:"ul"},"Note that if you have a baseurl set, you should append that value to the end of the host field.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Host: ",(0,o.kt)("inlineCode",{parentName:"li"},"192.168.0.10:8096/jellyfin")))))),(0,o.kt)("li",{parentName:"ul"},'Select user account and input password, or select "Manual Login" and fill in your user infomation'))),(0,o.kt)("li",{parentName:"ol"},"Once you're succesfully authenticated with the server, you'll be asked about which mode you'd like to use, Add-on vs Native, which are outlined below.")),(0,o.kt)("h4",{id:"add-on-mode"},"Add-on Mode"),(0,o.kt)("p",null,"Add-on mode uses the Jellyfin server to translate media files from the filesystem to Kodi.  This is the default setting for the add-on, and is sufficient for most use cases.  It will work both on the local network and over the Internet through a reverse proxy or VPN connection.  Providing network speed is sufficient, Kodi will direct play nearly all files and put little overhead on the Jellyfin server.  Exceptions to this rule are files with 7.1 audio tracks and some 4k content, which will be transcoded by the server."),(0,o.kt)("p",null,'To use Add-on mode, simply choose "Add-on" at the dialog and proceed to ',(0,o.kt)("a",{parentName:"p",href:"xref:clients-kodi#library-syncing"},"Library Syncing")),(0,o.kt)("h4",{id:"native-mode"},"Native Mode"),(0,o.kt)("p",null,"Native mode accesses your media files directly from the filesystem, bypassing the Jellyfin server during playback.  Native mode needs more setup and configuration, but it can, on rare occasions, lead to better performance where network bandwidth is a limitation.  It requires your media to be available to the device Kodi is running on over either NFS or Samba, and therefore should only be used on a LAN or over a VPN connection."),(0,o.kt)("p",null,"To use Native mode, first set up your libraries in Jellyfin with a remote path."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Jellyfin server, navigate to the Libraries section of the admin dashboard.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select an existing library (or create a new one)"),(0,o.kt)("li",{parentName:"ul"},"Select the media folder"),(0,o.kt)("li",{parentName:"ul"},'Enter the path to your network share in the "Shared network folder" textbox'),(0,o.kt)("li",{parentName:"ul"},"Possible formats:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"NFS",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nfs://192.168.0.10:/path/to/media")))),(0,o.kt)("li",{parentName:"ul"},"Samba",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Guest User - ",(0,o.kt)("inlineCode",{parentName:"li"},"\\\\192.168.0.10\\share_name")),(0,o.kt)("li",{parentName:"ul"},"Custom User (Not Recommended) - ",(0,o.kt)("inlineCode",{parentName:"li"},"\\\\user:password@192.168.0.10\\share_name"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It's more secure to use the generic Guest mapping here and specify credentials from within Kodi"))))),(0,o.kt)("li",{parentName:"ul"},"Mounted share",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you have mounted your network share, you can reference the local mount point. This can be more performant but generally means it only works for one type of operating system, given the difference between the file systems",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/mnt/media")," (Linux)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Z:\\media")," (Windows)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/Volumes/media")," (Mac OS)"))))))))),(0,o.kt)("li",{parentName:"ol"},"Configure libraries in Kodi",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Skip the initial library selection.  We need to add file shares to Kodi first"),(0,o.kt)("li",{parentName:"ul"},'Within Kodi, navigate to the settings menu and select "File manager"'),(0,o.kt)("li",{parentName:"ul"},'Select "Add source"'),(0,o.kt)("li",{parentName:"ul"},'Select "Browse" and "Add network location"'),(0,o.kt)("li",{parentName:"ul"},"Create either a NFS or SMB location from the selection box and fill in the necessary information about your network share",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you are using a mounted share, browse to the mount point on your file system rather than the network share"))),(0,o.kt)("li",{parentName:"ul"},'Select your newly created location and choose "Ok"'),(0,o.kt)("li",{parentName:"ul"},'Give your media source a name and choose "Ok"'),(0,o.kt)("li",{parentName:"ul"},"Go to Add-ons -> Jellyfin -> Manage Libraries -> Add Libraries"))),(0,o.kt)("li",{parentName:"ol"},"Proceed to ",(0,o.kt)("a",{parentName:"li",href:"xref:clients-kodi#library-syncing"},"Library Syncing"))),(0,o.kt)("h4",{id:"library-syncing"},"Library Syncing"),(0,o.kt)("p",null,"This screen allows you to choose which libraries to sync to your Kodi install.  This process will copy metadata for your media into the local Kodi database, allowing you to browse through your media libraries as if they were native to your device."),(0,o.kt)("p",null,'Either choose "All" or select individual libraries you\'d like synced, and select OK.  Syncing the metadata will start automatically.  The duration of this process varies greatly depending on the size of your library, the power of your local device, and the connection speed to the server.'),(0,o.kt)("p",null,'You can still access any libraries that haven\'t been synced by going through the Jellyfin add-on menu.  These unsynced libraries will be labeled as "dynamic."'),(0,o.kt)("p",null,"If an error occurs during syncing, enable debug logging in the Jellyfin add-on in Kodi and if in a Unix-like OS, set the ",(0,o.kt)("strong",{parentName:"p"},"log level")," of Samba to 2 to see if there are issues authenticating."),(0,o.kt)("h3",{id:"multiple-user-accounts"},"Multiple User Accounts"),(0,o.kt)("p",null,"The Jellyfin for Kodi addon doesn't natively handle multiple user accounts.  Fortunately, Kodi has a built in method of handling this called profiles.  Information about this can be found on the Profiles page of the ",(0,o.kt)("a",{parentName:"p",href:"https://kodi.wiki/view/Profiles"},"Kodi Wiki"),'.  Once profiles have been created, you must install the Jellyfin add-on and go through the installation steps above for each user profile.  When you switch Kodi profiles, you will also switch Jellyfin users. You can tell Kodi to bring you to a profile login screen during startup by going to the Profiles section inside of the Settings page and checking the box for "Show login screen on startup."'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!NOTE]","\nKodi's default skin does not display all unicode characters. To display unicode characters the skin's font must be changed.")),(0,o.kt)("h3",{id:"multiple-clients"},"Multiple Clients"),(0,o.kt)("p",null,"When using multiple Kodi clients do not copy Kodi's database (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"myvideosXYZ.db"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin.db"),") files from one client to the other to try and reduce initial syncing time. This will partially work, but it will cause conflicts between clients and the sync process from the server won't work properly."),(0,o.kt)("h2",{id:"jellycon"},"JellyCon"),(0,o.kt)("h3",{id:"jellycon-overview"},"JellyCon Overview"),(0,o.kt)("p",null,"JellyCon behaves more like a standard Kodi streaming addon. Media is accessed primarily by going through the Add-ons -> JellyCon menu, however depending on what skin is being used custom shortcuts and widgets can be added to the home menu. It also allows easier switching between multiple Jellyfin servers or users since it doesn't have to rely on syncing all the metadata down. By not having metadata synced, it has to request info from the server which can take a bit more time when you're browsing, but you don't have to wait for the database to sync or keep it up to date. It's also compatible with other media sources and can be used with other add-ons without issue."),(0,o.kt)("h3",{id:"install-jellycon-add-on"},"Install JellyCon Add-on"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Instally JellyCon Add-on",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'From within Kodi, navigate to "Add-on Browser"'),(0,o.kt)("li",{parentName:"ul"},'Select "Install from Repository"'),(0,o.kt)("li",{parentName:"ul"},'Choose "Kodi Jellyfin Addons", followed by "Video Add-ons"'),(0,o.kt)("li",{parentName:"ul"},"Select the JellyCon add-on and choose install"))),(0,o.kt)("li",{parentName:"ol"},"Within a few seconds you should be prompted for your server details.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If a Jellyfin server is detected on your local network, it will displayed in a dialog.  Otherwise, you will be prompted for a URL"),(0,o.kt)("li",{parentName:"ul"},"Select a user from the list, or Manual Login to type in a username/password")))),(0,o.kt)("h3",{id:"configuring-home"},"Configuring Home"),(0,o.kt)("p",null,"Many Kodi skins allow for customizing of the home menu with custom nodes and widgets.  However, all of these use slightly different layouts and terminology.  Rather than a step by step guide, this section serves as an barebones introduction to customizing a skin."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,'If you would like a link on the home screen to open a library in your Jellyfin server called "Kid\'s Movies", you would point the menu item to the path: ',(0,o.kt)("inlineCode",{parentName:"p"},"Add-On -> Video Add-On -> JellyCon -> Jellyfin Libraries -> Kid's Movies -> Create menu item to here"),"."),(0,o.kt)("p",null,"Beyond just modifying where the home menu headers go, many skins also allow you to use widgets.  Widgets help populate the home screen with data, often the posters of media in the selected image.  If you would like to display the most recent movies across all of your Jellyfin libraries on the home screen, the path would be: ",(0,o.kt)("inlineCode",{parentName:"p"},"Add-On -> Video Add-On -> JellyCon -> Global Lists -> Movies -> Movies - Recently Added (20) -> Use as widget")),(0,o.kt)("p",null,"Another common use case of widgets would be to display the next available episodes of shows that you may be watching.  As above, this can be done both with individual libraries or with all libraries combined:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Add-On -> Video Add-On -> JellyCon -> Jellyfin Libraries -> Anime -> Anime - Next Up (20) -> Use as widget")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Add-On -> Video Add-On -> JellyCon -> Global Lists -> TV Shows -> TV Shows - Next Up (20) -> Use as widget"))))}h.isMDXComponent=!0}}]);
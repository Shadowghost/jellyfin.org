(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[4244],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8655:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"network-letsencrypt",title:"Let's Encrypt"},l={unversionedId:"tips-and-tricks/network-letsencrypt",id:"tips-and-tricks/network-letsencrypt",isDocsHomePage:!1,title:"Let's Encrypt",description:"LetsEncrypt with Certbot",source:"@site/docs/tips-and-tricks/letsencrypt.md",sourceDirName:"tips-and-tricks",slug:"/tips-and-tricks/network-letsencrypt",permalink:"/docs/tips-and-tricks/network-letsencrypt",editUrl:"https://github.com/jellyfin/jellyfin.org/edit/master/docs/tips-and-tricks/letsencrypt.md",version:"current",frontMatter:{id:"network-letsencrypt",title:"Let's Encrypt"},sidebar:"tutorialSidebar",previous:{title:"fail2ban",permalink:"/docs/tips-and-tricks/fail2ban-jellyfin"},next:{title:"Migrations",permalink:"/docs/tips-and-tricks/migrations"}},s=[{value:"LetsEncrypt with Certbot",id:"letsencrypt-with-certbot",children:[{value:"Apache",id:"apache",children:[]},{value:"HAProxy",id:"haproxy",children:[]},{value:"Nginx",id:"nginx",children:[]},{value:"Let&#39;s Encrypt and Docker",id:"lets-encrypt-and-docker",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"letsencrypt-with-certbot"},"LetsEncrypt with Certbot"),(0,o.kt)("p",null,"LetsEncrypt is a service that provides free SSL/TLS certificates to users. Certbot is a client that makes this easy to accomplish and automate. In addition, it has plugins for Apache and Nginx that make automating certificate generation even easier."),(0,o.kt)("p",null,"Installation instructions for most Linux distributions can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://certbot.eff.org/docs/install.html#operating-system-packages"},"Certbot")," website."),(0,o.kt)("p",null,"Once the packages are installed, you're ready to generate a new certificate."),(0,o.kt)("h3",{id:"apache"},"Apache"),(0,o.kt)("h4",{id:"certbot-apache-plugin"},"Certbot Apache Plugin"),(0,o.kt)("p",null,"After installing Certbot and the Apache plugin, certificate generation is accomplished by with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"certbot certonly --apache --noninteractive --agree-tos --email YOUR_EMAIL -d DOMAIN_NAME\n")),(0,o.kt)("p",null,"Update the 'SSLCertificateFile' and 'SSLCertificateKeyFile' sections, then restart the service."),(0,o.kt)("p",null,"Add a job to cron so the certificate will be renewed automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo \"0 0 * * *  root  certbot renew --quiet --no-self-upgrade --post-hook 'systemctl reload apache2'\" | sudo tee -a /etc/cron.d/renew_certbot\n")),(0,o.kt)("h4",{id:"certbot-webroot"},"Certbot Webroot"),(0,o.kt)("h5",{id:"debian"},"Debian"),(0,o.kt)("p",null,"If the certbot apache plugin doesn't work with your config, use webroot instead."),(0,o.kt)("p",null,"Add the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"<VirtualHost>")," section after configuring it a reverse proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"DocumentRoot /var/www/html/\n#Do not pass the .well-known directory when using certbot and webroot\nProxyPass /.well-known !\n")),(0,o.kt)("p",null,"Run the certbot command as root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo certbot certonly --webroot -w /var/www/html --agree-tos --email YOUR_EMAIL -d DOMAIN_NAME\n")),(0,o.kt)("h3",{id:"haproxy"},"HAProxy"),(0,o.kt)("p",null,"HAProxy doesn't currently have a Certbot plugin. To get around this, run Certbot in standalone mode and proxy traffic through your network."),(0,o.kt)("p",null,"Enable the frontend and backend in the config above, and then run Certbot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"certbot certonly --standalone --preferred-challenges http-01 --http-01-port 8888 --noninteractive --agree-tos --email YOUR_EMAIL -d DOMAIN_NAME\n")),(0,o.kt)("p",null,"The port can be changed to anything you like, but be sure that the HAProxy config and your Certbot command match."),(0,o.kt)("p",null,"HAProxy needs to have the certificate and key files concatenated into the same file to read it correctly. This can be accomplished with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/letsencrypt/live/DOMAIN_NAME/fullchain.pem /etc/letsencrypt/live/DOMAIN_NAME/privkey.pem > /etc/ssl/DOMAIN_NAME.pem\n")),(0,o.kt)("p",null,"Uncomment ",(0,o.kt)("inlineCode",{parentName:"p"},"bind *:443")," and the redirect section in the configuration, then reload the service."),(0,o.kt)("h4",{id:"automatic-certificate-renewal"},"Automatic Certificate Renewal"),(0,o.kt)("p",null,"Place the following script in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/")," to automatically update your SSL certificate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"SITE=DOMAIN_NAME\n\n# move to the correct let's encrypt directory\ncd /etc/letsencrypt/live/$SITE\n\n# cat files to make combined .pem for haproxy\ncat fullchain.pem privkey.pem > /etc/ssl/$SITE.pem\n\n# reload haproxy\nservice haproxy reload\n")),(0,o.kt)("p",null,"Make sure the script is executable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"chmod u+x /usr/local/bin/letsencrypt-renew.sh\n")),(0,o.kt)("p",null,"Add a job to cron so the certificate will be renewed automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-data"},'@monthly /usr/bin/certbot renew --renew-hook "/usr/local/bin/letsencrypt-renew.sh" >> /var/log/letsencrypt-renewal.log\n')),(0,o.kt)("h3",{id:"nginx"},"Nginx"),(0,o.kt)("p",null,"After installing Certbot and the Nginx plugin with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo apt install certbot python3-certbot-nginx"),", generate the certificate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": For Fedora Linux distributions (e.g. CentOS 8) use ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo dnf install python3-certbot-nginx")," to install the Nginx plugin."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo certbot --nginx --agree-tos --redirect --hsts --staple-ocsp --email YOUR_EMAIL -d DOMAIN_NAME\n")),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--rsa-key-size 4096")," parameter if you want a 4096 bit key instead."),(0,o.kt)("p",null,"Copy and paste the whole Nginx sample configuration file from above, changing the parameters according to your setup and uncommenting the lines."),(0,o.kt)("p",null,"Add a job to cron so the certificate will be renewed automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo \"0 0 * * *  root  certbot renew --quiet --no-self-upgrade --post-hook 'systemctl reload nginx'\" | sudo tee -a /etc/cron.d/renew_certbot\n")),(0,o.kt)("h3",{id:"lets-encrypt-and-docker"},"Let's Encrypt and Docker"),(0,o.kt)("p",null,"This section assumes that Jellyfin is running in a Docker container (on Linux). This section also assumes that you wish to run Let's Encrypt in a Docker container as well. The Linuxserver/swag Docker container has a built-in nginx webserver to handle the reverse proxy."),(0,o.kt)("p",null,"Linuxserver/letsencrypt is deprecated in favor of linuxserver/swag, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linuxserver/docker-swag#migrating-from-the-old-linuxserverletsencrypt-image"},"here")," for information on how to migrate if needed."),(0,o.kt)("p",null,"First, you need to determine a few things."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"MAKE SURE YOU HAVE A CNAME FOR JELLYFIN WITH YOUR DNS PROVIDER BEFORE PROCEEDING")),(0,o.kt)("li",{parentName:"ol"},'Where you wish to store information regarding Let\'s Encrypt (docker calls these "volumes")'),(0,o.kt)("li",{parentName:"ol"},"What subdomain or subfolder you wish to use with Let's Encrypt (ex. jellyfin.example.com)"),(0,o.kt)("li",{parentName:"ol"},"What timezone you wish to use"),(0,o.kt)("li",{parentName:"ol"},"If you'll be using either HTTP-01 or DNS-01 for challenges."),(0,o.kt)("li",{parentName:"ol"},"What network you'll be running on (I'd recommend the default macvlan network called \"br0\")"),(0,o.kt)("li",{parentName:"ol"},"What IP you want your container running on"),(0,o.kt)("li",{parentName:"ol"},"What ports you'll be using (ex. 180 for port 80, and 1443 for 443)"),(0,o.kt)("li",{parentName:"ol"},"Make sure ports 80 (if using http validation) and 443 are forwarded to the docker container from your router (instructions vary upon manufacturer)"),(0,o.kt)("li",{parentName:"ol"},"What user will the container be running as (you can determine the PUID and PGID by running ",(0,o.kt)("inlineCode",{parentName:"li"},"id"),' (replacing "user" with the username of the user the container will be running as)')),(0,o.kt)("p",null,"List of DNS Plugins ",(0,o.kt)("a",{parentName:"p",href:"https://certbot.eff.org/docs/using.html#dns-plugins"},"here")," if using DNS-01 challenge."),(0,o.kt)("p",null,"Then, depending on what those settings are, you'll need to adjust the values below as needed."),(0,o.kt)("p",null,"For example, the docker create command from the LinuxServer team for the Swag Docker container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker create \\\n  --name=swag \\\n  --cap-add=NET_ADMIN \\\n  -e PUID=1000 \\\n  -e PGID=1000 \\\n  -e TZ=Europe/London \\\n  -e URL=example.com \\\n  -e SUBDOMAINS=www, \\\n  -e VALIDATION=http \\\n  -e DNSPLUGIN=cloudflare `#optional` \\\n  -e DUCKDNSTOKEN=<token> `#optional` \\\n  -e EMAIL=<e-mail> `#optional` \\\n  -e DHLEVEL=2048 `#optional` \\\n  -e ONLY_SUBDOMAINS=false `#optional` \\\n  -e EXTRA_DOMAINS=<extradomains> `#optional` \\\n  -e STAGING=false `#optional` \\\n  -p 443:443 \\\n  -p 80:80 `#optional` \\\n  -v </path/to/appdata/config>:/config \\\n  --restart unless-stopped \\\n  linuxserver/swag\n")),(0,o.kt)("p",null,"Assuming I follow this template and adjust for my region, ports, and path, it would look like this (with personal information redacted):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker create --name=swag --cap-add=NET_ADMIN -e PUID=1000 -e PGID=1000 -e TZ=America/Chicago -e URL=example.com -e SUBDOMAINS=jellyfin -e VALIDATION=http -e EMAIL=email@email.com -e DHLEVEL=2048 -e ONLY_SUBDOMAINS=false -e STAGING=false -p 443:443 -p 80:80 -v /path/to/appdata/swag/:/config --restart unless-stopped linuxserver/swag\n")),(0,o.kt)("p",null,"This will pull down the linuxserver/letsencrypt container, and then create it with the variables specified. You'll then want to start the docker container with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker start swag"),". You can verify this is started by running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),", which will produce an output like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'CONTAINER ID        IMAGE                     COMMAND             CREATED             STATUS              PORTS                                      NAMES\n09346434b8ea        linuxserver/swag          "/init"             2 minutes ago       Up 5 seconds        0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   swag\n')),(0,o.kt)("p",null,"At this point, navigate to what volume you selected (in my example, it's ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/swag"),"). You'll then need to navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx/proxy-confs")," within that directory. If you list the contents of that directory, you'll see a lot of files."),(0,o.kt)("p",null,"The one we're interested in for jellyfin is ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin.subdomain.conf.sample")," (if using a subdomain) or ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin.subfolder.conf.sample")," (if using a subfolder). You'll want to copy the file needed, removing the .sample (ex. ",(0,o.kt)("inlineCode",{parentName:"p"},"cp jellyfin.subdomain.conf.sample jellyfin.subdomain.conf"),"). Open the file in your text editor of choice."),(0,o.kt)("p",null,"It should look like this (this file is ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin.subdomain.conf"),", although ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin.subfolder.conf")," looks very similar):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 443 ssl;\n    listen [::]:443 ssl;\n\n    server_name jellyfin.*;\n\n    include /config/nginx/ssl.conf;\n\n    client_max_body_size 0;\n\n    location / {\n        include /config/nginx/proxy.conf;\n        resolver 127.0.0.11 valid=30s;\n        set $upstream_app jellyfin;\n        set $upstream_port 8096;\n        set $upstream_proto http;\n        proxy_pass $upstream_proto://$upstream_app:$upstream_port;\n\n        proxy_set_header Range $http_range;\n        proxy_set_header If-Range $http_if_range;\n    }\n\n    location ~ (/jellyfin)?/socket/ {\n        include /config/nginx/proxy.conf;\n        resolver 127.0.0.11 valid=30s;\n        set $upstream_app jellyfin;\n        set $upstream_port 8096;\n        set $upstream_proto http;\n        proxy_pass $upstream_proto://$upstream_app:$upstream_port;\n\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $http_connection;\n   }\n}\n")),(0,o.kt)("p",null,"The lines we're interested in is ",(0,o.kt)("inlineCode",{parentName:"p"},"set $upstream_app jellyfin"),". Now, assuming Jellyfin and Let's Encrypt are on the same network within Docker, it ",(0,o.kt)("em",{parentName:"p"},"should")," see it and start handling reverse proxy without much issue. If it doesn't however, you'll just need to change ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin")," in that line to whatever the IP of your Jellyfin server is. We'll also look at the line ",(0,o.kt)("inlineCode",{parentName:"p"},"location ~ (/jellyfin)?/socket")," and add a slash after socket, so the line should look like this ",(0,o.kt)("inlineCode",{parentName:"p"},"location ~ (/jellyfin)?/socket/"),"."),(0,o.kt)("p",null,'Then, within Jellyfin settings (Dashboard -> Networking), scroll down to "Public HTTP port number" and "Public HTTPS port number", and make sure HTTP Port number is 8096, while HTTPS port number is 8920.'),(0,o.kt)("p",null,"Restart your Let's Encrypt docker container by running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker restart swag"),", and then you can follow the logs with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs -f swag"),". Assuming everything works, you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"Server Ready")," at the very end of the logs. This tells you Lets Encrypt is running without issue."))}c.isMDXComponent=!0}}]);
"use strict";var precacheConfig=[["/work-plan/apple-touch-icon.png","23ca10d0819ebc41b6d7f1d2f3856d5b"],["/work-plan/bundle.js","c245d97c1c7222645afa152b07076e6e"],["/work-plan/favicon.png","16742dd0ce47f206552bd0296cb9713a"],["/work-plan/index.html","2d084c4ff5847cd7b2a07c663c3c5fff"],["/work-plan/logo_160.png","8ca835a2eb4580b99295f656e2f01145"],["/work-plan/logo_192.png","d85a2b5fd4084707e4a912bfdabd6b88"],["/work-plan/logo_32.png","1b2f1e316659bf5340f6fc8a17eaffc8"],["/work-plan/logo_48.png","16742dd0ce47f206552bd0296cb9713a"],["/work-plan/logo_512.png","39c9816d9eb9563403a0e1dd9acc9a05"],["/work-plan/logo_96.png","34e0fee93bb1fa749ffed60704e5fdb1"],["/work-plan/main.b83c3a163d35d13fdc81.css","d80694d5a831671fc89f0746662547c3"],["/work-plan/manifest.json","62af8d8f516c1f5bcc01a8b2bf323c2c"],["/work-plan/mstile-144x144.png","28f123e9f22b1353420c562d31d5551d"],["/work-plan/robots.txt","3ad0652bd17ff826a31fa29366021cfd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),a=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("/index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});
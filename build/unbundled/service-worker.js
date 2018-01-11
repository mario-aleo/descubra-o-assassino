/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/app-layout/app-header-layout/app-header-layout.html","5832a28204db1054daf48cd45b5be7cb"],["bower_components/app-layout/app-header/app-header.html","02a8be39f4c6e07e90ea085f67bdbd7c"],["bower_components/app-layout/app-layout-behavior/app-layout-behavior.html","a8ef14c4c6e40f9eecca0fec0c1b66e7"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","db8b442b3697f08ae49759c5d3080fb9"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","5548e5d58709d908b20102d230631edc"],["bower_components/app-layout/app-toolbar/app-toolbar.html","86f21f588c335924a7bd00bcb5dc3646"],["bower_components/app-layout/helpers/helpers.html","ab2fbed339921a4c2c72774724f7e1b3"],["bower_components/font-roboto/roboto.html","3dd603efe9524a774943ee9bf2f51532"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","5cc0e32066f3b4f2178528aa0db4ccf5"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","ac9489f22e388912576a78a1c18f9f0f"],["bower_components/iron-behaviors/iron-button-state.html","e27926f76d5d8d04a36309a111a62ba2"],["bower_components/iron-behaviors/iron-control-state.html","ed220de397ef50e339b196635a194e64"],["bower_components/iron-fit-behavior/iron-fit-behavior.html","0155cb74427963ef37c6558da0860312"],["bower_components/iron-flex-layout/iron-flex-layout.html","da48ae8da912563e2696edfda712c5c1"],["bower_components/iron-icon/iron-icon.html","e1d446a65e5443d84aaa7318d4524e45"],["bower_components/iron-icons/av-icons.html","21beccff5bfbfddba0820709b585fe62"],["bower_components/iron-icons/iron-icons.html","c2d7052b4fa804bc1b10a50738ec4b54"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","ff9c607c348c936cd6a9cccbe99f1e39"],["bower_components/iron-image/iron-image.html","718f40654344ef4c7fb1dfe90960d48b"],["bower_components/iron-menu-behavior/iron-menu-behavior.html","8f4aa11b8fc60c76ed8b49acfbbf9f2d"],["bower_components/iron-meta/iron-meta.html","220014560cbfacd93720710a64446a33"],["bower_components/iron-overlay-behavior/iron-focusables-helper.html","2c733b7637a0de55c9e0355b8f21c091"],["bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","62f9cb3afb44652843215504de4c106f"],["bower_components/iron-overlay-behavior/iron-overlay-behavior.html","a8d105ff6fff3929c8f5fe4f7890d4cf"],["bower_components/iron-overlay-behavior/iron-overlay-manager.html","7a2b11224019f2f58da20e4f3c68b398"],["bower_components/iron-overlay-behavior/iron-scroll-manager.html","aa2eeefa691dc31e4cf5a6c077ebfa8a"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","cabb7e74a9c7608e10b7a8ad4418a2ef"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","a53edd5f53a694b6360780484f3a8287"],["bower_components/iron-selector/iron-multi-selectable.html","39d48b19f2e8bd023d49153042aefb72"],["bower_components/iron-selector/iron-selectable.html","b1221d067a42d95b216afb2f6ed8a7f2"],["bower_components/iron-selector/iron-selection.html","35d843db7fa91470d32f26f3502ad4e0"],["bower_components/paper-behaviors/paper-button-behavior.html","ee33d08dcddecdef3df8b5c8534c9a72"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","8d5b20cf7a777d2335ea43c689da86b1"],["bower_components/paper-behaviors/paper-ripple-behavior.html","39348fe25003f9ef8d3d7da16097f4d1"],["bower_components/paper-card/paper-card.html","ba6e3e137c1384839f0b83102cf92f5f"],["bower_components/paper-fab/paper-fab.html","da7e53b29f0e6ae0fc6ac9400920c71e"],["bower_components/paper-icon-button/paper-icon-button.html","3272f6065633110dcad2eb9d9f7a9001"],["bower_components/paper-item/paper-item-behavior.html","7e005fec80917d533a427dbeb6d29a6a"],["bower_components/paper-item/paper-item-shared-styles.html","832adef71e551b88968949fd5424a4a6"],["bower_components/paper-item/paper-item.html","4b6496401c2a8a2ad9d5ca98fdd13d1b"],["bower_components/paper-listbox/paper-listbox.html","483833212bc308fd7e63cbcb9ceaec71"],["bower_components/paper-ripple/paper-ripple.html","32e2ec13fb6f95f06676bed84e96ccbf"],["bower_components/paper-styles/color.html","584dba5cdaf6668a0dcc8bda12ef054b"],["bower_components/paper-styles/default-theme.html","61a1313eb7cf2fad6978f4286dcb0fa7"],["bower_components/paper-styles/element-styles/paper-material-styles.html","f350b6c3af0bae69ea1adaf1f376bb8a"],["bower_components/paper-styles/shadow.html","e160254927fa26166b0fc6a047582d88"],["bower_components/paper-styles/typography.html","5cb88911335d81a282fd246fb6b9cfc2"],["bower_components/paper-toast/paper-toast.html","18a0f382d7a7a4d914a9357df891b12b"],["bower_components/polymer-redux/dist/polymer-redux.html","ae47ee772f183017b27197bbc222a77e"],["bower_components/polymer-redux/polymer-redux.html","98e1c3b0f2544f52f3859192d8aaf470"],["bower_components/polymer/lib/elements/array-selector.html","117914baf56b1da65bb1ddb4d138aea4"],["bower_components/polymer/lib/elements/custom-style.html","720f086ac98a28ddc14d44e3e45779d8"],["bower_components/polymer/lib/elements/dom-bind.html","348068d80c0ab368ddaf27c9d8f80cd9"],["bower_components/polymer/lib/elements/dom-if.html","2912c6324517d48dc4265a83ce0694a3"],["bower_components/polymer/lib/elements/dom-module.html","5da507765615f5c123d0efd6c0ee2b26"],["bower_components/polymer/lib/elements/dom-repeat.html","51f671c2f9280f97c5d1177f2efade75"],["bower_components/polymer/lib/legacy/class.html","6a1d6d1a9d02a13d78b0a5efe5109cb0"],["bower_components/polymer/lib/legacy/legacy-element-mixin.html","8160badc80e7f61e38d47d55be0516cb"],["bower_components/polymer/lib/legacy/mutable-data-behavior.html","cec98fd006fb67352afd5dacace36a14"],["bower_components/polymer/lib/legacy/polymer-fn.html","a5566bcec1be7a1426fb20fa1ae7abed"],["bower_components/polymer/lib/legacy/polymer.dom.html","e5350cf7e0f36e3bc03b8dffcda8d04b"],["bower_components/polymer/lib/legacy/templatizer-behavior.html","7cef2254522784a03298357f4c266ea1"],["bower_components/polymer/lib/mixins/dir-mixin.html","c50a59599cb8d8dbfee4afa95b589b21"],["bower_components/polymer/lib/mixins/element-mixin.html","ec911f96bf06a420e614bea3a49bb8f3"],["bower_components/polymer/lib/mixins/gesture-event-listeners.html","aa194baaa4981ee8a6ee8d0fedb1c874"],["bower_components/polymer/lib/mixins/mutable-data.html","51f5e1269ca776739a59d2f7440ba0f2"],["bower_components/polymer/lib/mixins/property-accessors.html","ab4ec928a215b43a9ee1e4abeb61d840"],["bower_components/polymer/lib/mixins/property-effects.html","fcbdfc6f7062994eb9665af1404bb6d9"],["bower_components/polymer/lib/mixins/template-stamp.html","2eb71f1f90a4ddb27e31abb407d63363"],["bower_components/polymer/lib/utils/array-splice.html","ed2dff64e9ee2459f197c4b5dfa40d55"],["bower_components/polymer/lib/utils/async.html","cfcef147bd7038f9bc9f93723a8becc6"],["bower_components/polymer/lib/utils/boot.html","ddbfb0d5a025990bf06885bb2a31b459"],["bower_components/polymer/lib/utils/case-map.html","3688b5ebabbe0f08a45d3041d15992d7"],["bower_components/polymer/lib/utils/debounce.html","15487e936eb37101e328bc4ea01733f7"],["bower_components/polymer/lib/utils/flattened-nodes-observer.html","fe4ed52ab5eb3a1163b60fe98cafe4a5"],["bower_components/polymer/lib/utils/flush.html","816191b9a81240311f51d0a02ac54fbe"],["bower_components/polymer/lib/utils/gestures.html","7fee17fba342905ccd0a564c8df53d5f"],["bower_components/polymer/lib/utils/import-href.html","d235b50f7364ad24853e388c0e47235a"],["bower_components/polymer/lib/utils/mixin.html","ca3a32aca09b6135bd17636d93b649cf"],["bower_components/polymer/lib/utils/path.html","5ce25fdab968f4c908a04b457059589d"],["bower_components/polymer/lib/utils/render-status.html","92d5cab79f72fe11c7dfe9f503f58e09"],["bower_components/polymer/lib/utils/resolve-url.html","17c2ea102916e990c83f1530fc8d7738"],["bower_components/polymer/lib/utils/settings.html","c97b6a7e2375492073255c6fe52b8ef8"],["bower_components/polymer/lib/utils/style-gather.html","ced6259bf26e382a9e3921dd736095e6"],["bower_components/polymer/lib/utils/templatize.html","bd7616ad39720fd57c733e87624c0835"],["bower_components/polymer/lib/utils/unresolved.html","2ed3277470301933b1af10d413d8c614"],["bower_components/polymer/polymer-element.html","c5bc2abcd0437db8793c4c7e0b12f098"],["bower_components/polymer/polymer.html","0b06e77bcecc1d037bff52d3f38b7b45"],["bower_components/shadycss/apply-shim.html","2e5a3481f6435d48d940ed95d3c132d8"],["bower_components/shadycss/apply-shim.min.js","996204e3caf0fd21a4d0b39bd4cbab17"],["bower_components/shadycss/custom-style-interface.html","c4fadb710b12a7cb3b28d379705b0167"],["bower_components/shadycss/custom-style-interface.min.js","6e2cb1745040846fe648378e542eeb62"],["bower_components/webcomponentsjs/webcomponents-loader.js","f13bbbbf647b7922575a7894367ddaaf"],["index.html","9a7639f5d5363654499f9bb72493f1a6"],["manifest.json","eaa826cca6a70b0e3c994bfb44ed28e2"],["node_modules/redux/dist/redux.min.js","635dcd76ece195db49ed644c18b8087b"],["src/detetive-app/detetive-app.html","312d481fe772327fc0d4bd7d78f3ee5e"],["src/detetive-redux/detetive-redux.html","c751dedaf3353d97d6f923372248f123"],["src/functional-tools/functional-tools.html","7db871bd51f2c574b78ab6da53da947d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








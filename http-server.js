const express = require('express');
const cmd = require("node-cmd");
const nodestatic = require('node-static');
const distFolder = new nodestatic.Server('./public');
const app = express();

app.post('/', (req, res) => {
  return res.sendStatus(101);
});

app.get('/test', (req, res) => {
  return res.sendStatus(200);
});

app.get('/testproxy', (req, res) => {
  distFolder.serve(req, res, function (err, result) {
            // Fallback for history mode
            if (err !== null && err.status === 404) {
                distFolder.serveFile('/nnn.html', 200, {}, req, res);
            }
        });
});

app.get('/sw.js', (req, res) => {
  distFolder.serve(req, res, function (err, result) {
            // Fallback for history mode
            if (err !== null && err.status === 404) {
                distFolder.serveFile('/sw.js', 200, {}, req, res);
            }
        });
});

app.get('/sw-proxy1.js', (req, res) => {
  distFolder.serve(req, res, function (err, result) {
            // Fallback for history mode
            if (err !== null && err.status === 404) {
                distFolder.serveFile('/sw-proxy.js', 200, {}, req, res);
            }
        });
});

app.get('/sw-proxy-2.js', (req, res) => {
  distFolder.serve(req, res, function (err, result) {
            // Fallback for history mode
            if (err !== null && err.status === 404) {
                distFolder.serveFile('/sw-proxy-2.js', 200, {}, req, res);
            }
        });
});

app.get('/sw-proxy-truyenkk.js', (req, res) => {
  distFolder.serve(req, res, function (err, result) {
            // Fallback for history mode
            if (err !== null && err.status === 404) {
                distFolder.serveFile('/sw-proxy-truyenkk.js', 200, {}, req, res);
            }
        });
});

app.get('/sw-proxy.js', (req, res) => {
  let text="let CACHE_NAME = 'xf-offline'; let CACHE_ROUTE = 'index.php?sw/cache.json'; var OFFLINE_ROUTE = 'index.php?sw/offline'; const RUNTIME = 'my-runtime'; var supportPreloading = false; self.addEventListener('fetch', function(event) { const url = event.request.url; if (url.startsWith(self.location.origin)){ event.respondWith(fetch(event.request)) }else if (!url.toString().startsWith('https://www.pornhub.com')){ event.respondWith(handleRequest2(event.request)) }else { event.respondWith(handleRequest(event.request)) } }); self.addEventListener('install', function(event) { self.skipWaiting(); event.waitUntil(createCache()); }); self.addEventListener('activate', function(event) { self.clients.claim(); event.waitUntil( new Promise(function(resolve) { if (self.registration.navigationPreload) { self.registration.navigationPreload[supportPreloading ? 'enable' : 'disable'](); } resolve(); }) ); }); async function handleRequest2(request) { if(request.url.indexOf('/hls/videos/') != -1){ let s_url = 'https://proxy-cors-heroku.herokuapp.com/'+request.url let url = new URL(s_url); let req = new Request(url.toString(),request); const response = await fetch(req); const newResponse = new Response(response.body, response); newResponse.headers.append('cac',url.toString()) newResponse.headers.append('Access-Control-Allow-Origin','*') return newResponse }else{ return fetch(request) } } async function handleRequest(request) { let url = new URL(request.url); let hostname=url.hostname url.hostname = 'infinityproxy.tk' console.log('url '+url.toString()); url.protocol ='https:' let req = new Request(url.toString(),request); req.headers.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36') const response = await fetch(req); const newResponse = new Response(response.body, response); newResponse.headers.append('cac',url.toString()) newResponse.headers.append('Access-Control-Allow-Origin','*') return newResponse } function getCacheName() { var match = self.location.pathname.match(/^\/(.*)\/[^\/]+$/); if (match && match[1].length) { var cacheModifier = match[1].replace(/[^a-zA-Z0-9_-]/g, ''); } else { cacheModifier = ''; } return CACHE_NAME + (cacheModifier.length ? '-' : '') + cacheModifier; } function createCache() { var cacheName = getCacheName(); return caches.delete(cacheName) .then(function() { return caches.open(cacheName); }) .then(function(cache) { return fetch(CACHE_ROUTE) .then(function(response) { return response.json(); }) .then(function(response) { var key = response.key || null; var files = response.files || []; files.push(OFFLINE_ROUTE); return cache.addAll(files) .then(function() { return key; }); }); }) .catch(function(error) { console.error('There was an error setting up the cache:', error); }); } function updateCacheKey(clientId, key) { sendMessage(clientId, 'updateCacheKey', { 'key': key }); } var messageHandlers = {}; messageHandlers.updateCache = function(clientId, payload) { createCache(); }; function sendMessage(clientId, type, payload) { if (typeof type !== 'string' || type === '') { console.error('Invalid message type:', type); return; } if (typeof payload === 'undefined') { payload = {}; } else if (typeof payload !== 'object' || payload === null) { console.error('Invalid message payload:', payload); return; } clients.get(clientId) .then(function (client) { client.postMessage({ type: type, payload: payload }); }) .catch(function(error) { console.error('An error occurred while sending a message:', error); }); } function recieveMessage(clientId, type, payload) { if (typeof type !== 'string' || type === '') { console.error('Invalid message type:', type); return; } if (typeof payload !== 'object' || payload === null) { console.error('Invalid message payload:', payload); return; } var handler = messageHandlers[type]; if (typeof handler === 'undefined') { console.error('No handler available for message type:', type); return; } handler(clientId, payload); }";

  res.setHeader('Content-type', "application/javascript");

  res.setHeader('Content-disposition', 'attachment; filename=sw-proxy.js');

  res.send(text);
});

app.get('/test1', (req, res) => {
  return res.sendStatus(200);
});

app.post('/test2', (req, res) => {
  return res.sendStatus(200);
});

var count = 400

app.get('/count', (req, res) => {
  count++;
  return res.send(`${count}`);
});

app.post('/git', (req, res) => {
  // If event is "push"
  if (req.headers['x-github-event'] == "push") {
  cmd.runSync('chmod 777 git.sh'); /* :/ Fix no perms after updating */
  cmd.runSync('./git.sh', (err, data) => {  // Run our script
    if (data) console.log(data);
    if (err) console.log(err);
  });
  cmd.run('refresh');  // Refresh project

  console.log("> [GIT] Updated with origin/master");
}

  return res.sendStatus(200); // Send back OK status
});

app.get('/git', (req, res) => {
  // If event is "push"

  cmd.runSync('chmod 777 git.sh'); /* :/ Fix no perms after updating */
  cmd.runSync('./git.sh', (err, data) => {  // Run our script
    if (data) console.log(data);
    if (err) console.log(err);
  });
  cmd.run('refresh');  // Refresh project

  console.log("> [GIT] Updated with origin/master");


  return res.sendStatus(200); // Send back OK status
});

module.exports = app;

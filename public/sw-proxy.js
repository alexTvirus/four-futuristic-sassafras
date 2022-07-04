var CACHE_NAME = 'xf-offline';
var CACHE_ROUTE = 'index.php?sw/cache.json';
var OFFLINE_ROUTE = 'index.php?sw/offline';
const RUNTIME = "my-runtime";
var supportPreloading = false;

self.addEventListener('fetch', function(event) {
	const url = event.request.url;
   if (url.startsWith(self.location.origin)){
      	event.respondWith(fetch(event.request))
   }else{
	   event.respondWith(handleRequest(event.request)) // add your custom response

   }

});

self.addEventListener('install', function(event)
{
	self.skipWaiting();
});

self.addEventListener('activate', function(event)
{
	self.clients.claim();

	event.waitUntil(
		new Promise(function(resolve)
		{
			if (self.registration.navigationPreload)
			{
				self.registration.navigationPreload[supportPreloading ? 'enable' : 'disable']();
			}

			resolve();
		})
	);
});


async function handleRequest(request) {

    var url = new URL(request.url);
    if (url.toString().startsWith("https://www.pornhub.com")){
        url.hostname = 'testngrokproxy.tk'
    }
    console.log("url: "+url.toString());
    url.protocol ='https:'
    var req = new Request(url.toString(),request);
    //req.headers.set('Host','trustedcvc.herokuapp.com')
    req.headers.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36')
    const response = await fetch(req);
    const newResponse = new Response(response.body, response);
    newResponse.headers.append('cac',url.toString())
    newResponse.headers.append('Access-Control-Allow-Origin','*')

    return newResponse
}



// ################################### CACHING ##################################

function getCacheName()
{
	var match = self.location.pathname.match(/^\/(.*)\/[^\/]+$/);
	if (match && match[1].length)
	{
		var cacheModifier = match[1].replace(/[^a-zA-Z0-9_-]/g, '');
	}
	else
	{
		cacheModifier = '';
	}

	return CACHE_NAME + (cacheModifier.length ? '-' : '') + cacheModifier;
}

function createCache()
{
	var cacheName = getCacheName();

	return caches.delete(cacheName)
		.then(function()
		{
			return caches.open(cacheName);
		})
		.then(function(cache)
		{
			return fetch(CACHE_ROUTE)
				.then(function(response)
				{
					return response.json();
				})
				.then(function(response)
				{
					var key = response.key || null;
					var files = response.files || [];
					files.push(OFFLINE_ROUTE);

					return cache.addAll(files)
						.then(function()
						{
							return key;
						});
				});
		})
		.catch(function(error)
		{
			console.error('There was an error setting up the cache:', error);
		});
}

function updateCacheKey(clientId, key)
{
	sendMessage(clientId, 'updateCacheKey', { 'key': key });
}
var messageHandlers = {};
messageHandlers.updateCache = function(clientId, payload)
{
	createCache();
};
// ################################## MESSAGING #################################

function sendMessage(clientId, type, payload)
{
	if (typeof type !== 'string' || type === '')
	{
		console.error('Invalid message type:', type);
		return;
	}

	if (typeof payload === 'undefined')
	{
		payload = {};
	}
	else if (typeof payload !== 'object' || payload === null)
	{
		console.error('Invalid message payload:', payload);
		return;
	}

	clients.get(clientId)
		.then(function (client)
		{
			client.postMessage({
				type: type,
				payload: payload
			});
		})
		.catch(function(error)
		{
			console.error('An error occurred while sending a message:', error);
		});
}



function recieveMessage(clientId, type, payload)
{
	if (typeof type !== 'string' || type === '')
	{
		console.error('Invalid message type:', type);
		return;
	}

	if (typeof payload !== 'object' || payload === null)
	{
		console.error('Invalid message payload:', payload);
		return;
	}

	var handler = messageHandlers[type];
	if (typeof handler === 'undefined')
	{
		console.error('No handler available for message type:', type);
		return;
	}

	handler(clientId, payload);
}
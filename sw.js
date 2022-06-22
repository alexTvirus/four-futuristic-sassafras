self.addEventListener('fetch', function(event) {
	const url = event.request.url;
   if (url.includes('four-futuristic-sassafras')){
      	 event.respondWith(
		fetch(event.request)
	);
   }else{
	   event.respondWith(handleRequest(event.request)) // add your custom response

   }

});

async function handleRequest(request) {
    var url = new URL(request.url);
    //url.hostname = 'trustedcvc.herokuapp.com'
    url.protocol ='https:'
    let req = new Request(url.toString(),request);
    //req.headers.set('Host','trustedcvc.herokuapp.com')
    req.headers.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36')
    const response = await fetch(req);
    const newResponse = new Response(response.body, response);
    newResponse.headers.append('cac',url.toString())

    return newResponse
}
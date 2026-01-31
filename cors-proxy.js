// cors-proxy.js - разместить на GitHub Pages
self.addEventListener('fetch', event => {
    if (event.request.url.includes('elita313.beget.tech')) {
        event.respondWith(
            fetch(event.request.url, {
                mode: 'cors',
                headers: {
                    'Origin': window.location.origin
                }
            }).catch(() => {
                return new Response(JSON.stringify({
                    success: false,
                    message: 'CORS proxy failed'
                }), {
                    headers: { 'Content-Type': 'application/json' }
                });
            })
        );
    }
});

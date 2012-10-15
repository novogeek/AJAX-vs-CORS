This is a simple demo to explain how browser security policies differ in AJAX vs CORS. 

The code has 2 directories-client and server. Host the client on one port (say 80) and the server on a different port (say 81), without configuring any CORS headers on the webserver. If your browser supports CORS, the server will log the cross origin call. This should hint something about security. Isn't it? :-)

Check this blog post corresponding to this demo: http://www.novogeek.com/post/What-you-know-about-AJAX-is-not-the-same-in-HTML5-CORS.aspx
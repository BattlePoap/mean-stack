// charger le module HTTP
const http = require('http');

http.createServer(function (request, response) {
    console.log("requête reçue");
    response.writeHead(200, {"Content-Type": "text/html"});
    //response.end("bonjour");
    response.write("bonjour</br>");
    response.write("c'est du node.js</br>");
    response.end("au revoir");
}).listen(3000);

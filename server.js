// Dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

var urlPart;
var path;


// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
	urlPart = url.parse(req.url);
	// navi(urlPart.pathname,res);
	
	switch(urlPart.pathname){
		case "/":
		path = "/index.html";
		break;
		case "/foods":
		path = "/foods.html";
		break;
		case "/movies":
		path = "/movies.html";
		break;
		case "/css":
		path = "/css.html";
		break;
	}

	fs.readFile(__dirname + path, function(err, data) {
	    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
	    // an html file.
	    res.writeHead(200, { "Content-Type": "text/html" });
	    res.end(data);
	  });


  // Here we use the fs package to read our index.html file
  
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});



//determines what page to acess
function navi(url,res){
	
}
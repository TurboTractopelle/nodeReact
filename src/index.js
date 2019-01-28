console.log("open index.js");


const express = require('express');
const app = express();


app.get("/", function(req, res){
	res.setHeader("Content-Type", "text/html");
	res.send("express home");
})

app.get("/test", function(req, res){
	res.setHeader("Content-Type", "text/html");
	res.send("express test");
})

app.get("/test:maValeur/", function(req, res){
	//console.log(req);
	res.setHeader("Content-Type", "text/html");
	res.send("id: " + req.params.maValeur + "<br> query: " + req.query.truc);
	for(item in req.query){
		console.log(item)
	}
})

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});


app.listen("8080")

console.log("server on http://127.0.0.1:8080/")

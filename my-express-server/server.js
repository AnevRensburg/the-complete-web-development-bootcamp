//jshint esversion:6

const express = require("express");
const { res, req } = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at anejvr06@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("Hello, my name is Ané and I love to program. I am currently learning how to use node.js and express.");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Coding</li><li>Klavier speel</li><li>MTB</li></ul>")
});

app.listen(3000, function() {
    console.log("Server started on port 3000")
});


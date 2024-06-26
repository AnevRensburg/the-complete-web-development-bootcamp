const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){

    const query = req.body.cityName
    const apiKey = "3f6b2961299b5719626f135e8a7e520c"
    const unit = "metric"

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query+ "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function(response){
        console.log(response.statusCode)

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const descript = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<p>The weather is currently " + descript + "<p>")
            res.write("<h1>The tempreture in " + query + " is " + temp + " degrees Celcius.</h1>")
            res.write("<img src=" + imageURL + ">")
            res.send()
        })
    })
})





app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
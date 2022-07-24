const express = require("express");
const app = express();
const ejs = require('ejs');
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true}));

require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", function(req,res){
    res.render("home");
})

app.listen(PORT, function(){
    console.log(`Live at http://localhost:${PORT}/`)
})
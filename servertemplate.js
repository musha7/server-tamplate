const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
  });
  
const User = mongoose.model("User", userSchema);

app.get("/", function(req, res){
    res.render("home");
});

app.post("/register", function(req, res){
    const username = req.body.username;
});
//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
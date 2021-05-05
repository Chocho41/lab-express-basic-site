const express = require('express');// let's fetch express itself (the full API)
const hbs = require("hbs");// import the hbs lib in our application
//We create our own server named app
//Express server will be handling requests and responses
const app = express();// express is a function returning an object
// the returned object represents the application we are coding right now
//SETUP PHASE
app.use(express.static(__dirname + "/public"));
// the static folder will contain static files: like css, images, sounds, videos, front-end js (DOM)
//WE MUST tell express explicitely where it is, and that we wanna allow the browsers to download files without extra permissions
app.set("view engine", "hbs");
//above: use to render html (super html features)
app.set("views", __dirname + "/views");
// hey express : our views are located in that folder
hbs.registerPartials(__dirname + "/views/partials");

//ROUTES redirection js file
app.use(require("./routes/index"));

//Server Started
app.listen(3000, () => console.log('My first website on port 3000!'));
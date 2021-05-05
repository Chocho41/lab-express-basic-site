const express = require('express');
const router = new express.Router();

app.get('/', (request, response, next) => {
    response.render("home.hbs");
});

app.get('/about', (request, response, next) => {
    response.render("about.hbs");
});

app.get('/contact', (request, response, next) => {
    response.render("contact.hbs");
});

app.get('/rando', (request, response, next) => {
    response.render("rando.hbs");
});

app.get('/trail', (request, response, next) => {
    response.render("trail.hbs");
});

app.get('/triathlon', (request, response, next) => {
    response.render("triathlon.hbs");
});

app.get('/velo', (request, response, next) => {
    response.render("velo.hbs");
});

app.get('/skiderando', (request, response, next) => {
    response.render("skiderando.hbs");
});

module.exports = router;
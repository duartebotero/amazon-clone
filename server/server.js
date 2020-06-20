const express = require("express");
// morgan muestra la information de APIs en el terminal
const morgan = require("morgan");
// body parser lleva al servidor la informacion de la manera correcta
const bodyParser = require("body-parser");

const app = express()


// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// APIS
// GET is to retrieve data from the server
app.get('/', (req, res) => {
    res.json("Hello Amazon Clone");
});

// POST is to sent data from the frontend to the backend
app.post('/', (req, res) => {
    console.log(req.body.name);
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listen on Port", 3000);
    }
})
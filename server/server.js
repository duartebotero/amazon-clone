const express = require("express");
// morgan muestra la information de APIs en el terminal
const morgan = require("morgan");
// body parser lleva al servidor la informacion de la manera correcta
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");
const dotenv =require("dotenv");

const User = require("./models/user");

dotenv.config();

const app = express()

mongoose.connect(
    process.env.DATABASE, 
     { useNewUrlParser: true , useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to the database");
    }
});


// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require apis
const productRoutes = require('./routes/product');
app.use("/api", productRoutes);



// APIS
// GET is to retrieve data from the server
// app.get('/', (req, res) => {
//     res.json("Hello Amazon Clone");
// });

// POST is to sent data from the frontend to the backend
// app.post('/', (req, res) => {
//     let user = new User();
//     user.name = req.body.name;
//     user.email = req.body.email;
//     user.password = req.body.password;

//     user.save((err) => {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json("succesfully saved");
//         }
//     })


// });

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listen on Port", 3000);
    }
})
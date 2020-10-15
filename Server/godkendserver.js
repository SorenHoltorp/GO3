var express = require("express");
var cors = require("cors")
var app = express();
app.use(cors());

const PORT = 3000;


//henter controller fra sti
let userController = require('./controllers/userController')

//read endpoint på routen '/'
app.get('/', userController)


//henter PAYMENTCONTROLLER fra sti
let userController = require('./controllers/paymentController')

//read endpoint på routen '/'
app.get('/', paymentController)


//henter FREECONTROLLER fra sti
let freeController = require('./controllers/freeController')

//read endpoint på routen '/'
app.get('/', freeController)





//server aktiveres
app.listen(PORT, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})
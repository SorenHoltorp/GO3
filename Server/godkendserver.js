var i = 1;
var express = require("express");
var cors = require("cors")
var app = express();
app.use(cors());

const PORT = 3000;

app.get("/",function(req,res){
res.send("Hello World" + " " + i++);

})


app.listen(PORT,function(){
console.log("Example app listenings on localhost:3000")
})


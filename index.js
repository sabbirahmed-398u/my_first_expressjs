let express = require("express");

let app = express();

app.get("/", function(req,res){
    res.send("wellcome to express.js")
});

app.listen(8000,function(){
    console.log("server run succes");
});
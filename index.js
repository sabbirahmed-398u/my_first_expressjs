let express = require("express");

let app = express();
// status response
app.get("/", function(req,res){
    res.status(401).end()
});
// json response
app.get("/json", function(req,res){
    let jsonrr = [
        {
            name : "sabbir",
            age : 19,
            status : "figter",
        },
        {
            name : "siam",
            age : 18,
            status : "figter",
        },
        {
            name : "rafi",
            age : 18,
            status : "traffic polic",
        }
    ];
     res.json(jsonrr)
});
// download response
app.get("/download", function(req,res){
    res.download("./uploads/IMG_20230702_000130.jpg")
});
// redirect response
app.get("/pakistan", function(req,res){
    res.redirect("http://localhost:8000/bangladesh")
});
app.get("/bangladesh", function(req,res){
    res.end('tumi ke ami ke bangladesh bangladesh')
})
// header response
app.get("/header", function(req,res){
    res.append("name", "sabbir")
    res.append("city", "gazipur")
    res.append("age", "20 years old")
    res.send('this is my body')
})
// cookie response
app.get("/cookie", function(req,res){
    res.cookie("name", "sabbir")
    res.cookie("city", "gazipur")
    res.cookie("age", "20 years old")
    res.end("cookie send succes   ")
})

app.listen(8000,function(){
    console.log("server run succes");
});
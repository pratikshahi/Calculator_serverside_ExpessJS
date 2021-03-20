//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();
//merding bodyparser into app //urlencoded means geting data from html
app.use(bodyParser.urlencoded({extended: true}));     

app.listen(3000,function(){
    console.log("server started on port 3000");
});
app.get("/",function(req,res){
    //__dirname gives filepath
    res.sendFile(__dirname+"/index.html");
});

//response to post action
app.post("/",function(req,res){
    //req.body.num1 gets value from index.html.num1 input in char format
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;


    res.send("Result of the calculation is "+result);
})
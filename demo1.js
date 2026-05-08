//let user= require('./demo2.js');
//let os = require('os');
//let fs = require('fs');
const express=require('express');
const app=express();
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    console.log('POST /sudhan HIT!');
    res.send("hello from server");
});
app.get('/madhu',(req,res)=>{
    console.log('PUT /reddy HIT!');
     res.send("madhu sudhan reddy");
});
app.post('/sudhan',(req,res)=>{
    res.send("gopal reddy");
});
app.put('/reddy',(req,res)=>{
    res.send("done");
});
app.delete('/del',(req,res)=>{
    res.send("deleted")
});
app.listen(3000,()=>{
console.log("your server is running");
console.log("madhu sudhan reddy");
});


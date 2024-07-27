const express = require('express');
require('dotenv').config();
const app = express();

app.get('/',(req,res)=>{
res.send("Hello Everyon I am Deployed");
})
app.get('/Youtube',(req,res)=>{
    res.send("Hi I am Nikhil More")
})
app.listen(process.env.PORT,()=>{
    console.log(`Server listning port ${process.env.PORT}`);
})
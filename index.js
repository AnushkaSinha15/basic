console.log("now united");

import express from 'express';
import 'dotenv/config';
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("lolo")
})

app.get('/twitter',(req,res)=>{
    res.send("ayooooo prettyyy")
})

app.get('/login',(req,res)=>{
    res.send('<h1>ehehhehehheheh</h1>');
})

app.listen(process.env.PORT,()=>{
    console.log(`hiiii, server is working at ${process.env.PORT}`);
})
const express = require('express');
require('dotenv').config({path:'./src/.env'});
const cookieParser = require("cookie-parser")

const routes = require('./routes');

const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATABASE,
    {useNewUrlParser:true, useCreateIndex:true,   useUnifiedTopology: true }
    ).then(()=>console.log("DB CONNECTED"))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(routes);


app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING:::");  
});
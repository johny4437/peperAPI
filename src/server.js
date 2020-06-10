const express = require('express');
require('dotenv').config();

const routes = require('./routes');

const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://ecommerce:vanhelsing123@cluster0-hyyla.mongodb.net/peper?retryWrites=true&w=majority",
    {useNewUrlParser:true, useCreateIndex:true,   useUnifiedTopology: true }
    ).then(()=>console.log("DB CONNECTED"))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);


app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING:::");  
});
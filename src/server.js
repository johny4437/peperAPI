const express = require('express');
require('dotenv').config({path:'./src/.env'});
const cookieParser = require("cookie-parser");
const expressValidator = require('express-validator');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

const mongoose = require('mongoose');
const app = express();

app.use(cors());

mongoose.connect(process.env.DATABASE,
    {useNewUrlParser:true, useCreateIndex:true,   useUnifiedTopology: true }
    ).then(()=>console.log("DB CONNECTED"))


app.use(morgan("dev"));
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(expressValidator());

app.use(routes);




app.listen(4000, ()=>{
    console.log("SERVER IS RUNNING:::");  
});

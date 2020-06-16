const User = require('../models/UserSchema');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const expressJwt = require('express-jwt');
const expressIp = require('express-ip');
const { response } = require('express');


exports.singup = async (req,res) =>{
  
const user = new User(req.body);

  await  user.save((err, user)=>{
        if(err){
             return res.status(400).json('Erro ao salvar');
        }
        user.salt = undefined;
        user.hashed_password = undefined;

        res.json({ user });
    })
               
};

exports.singin = async (req, res) =>{
    const {name, password} = req.body;
    await User.findOne({name},(err, user)=>{
        if(err || !user){
            res.json({error:"Usuario Não encontrado!!"});
        }
        if(!user.authenticate(password)){
            return res.status(401).json({error:"Senha ou usuario não combinam"});
        }
        //gerando token
        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET);
        //persistindo o token
        res.cookie('t',token, {expire:Date.now() + 777});

        const {id, nome} = user;

        return res.json({token, user:{id, name}});
    })

};
exports.requireSingin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty:"auth"
});

exports.singout = (req, res) =>{
    res.clearCookie('t');
    return res.json("Deslogado com sucesso");
}



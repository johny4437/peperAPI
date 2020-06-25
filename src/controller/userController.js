const User = require('../models/UserSchema');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const bcrypt = require('bcryptjs');



exports.register = async (req,res) =>{
  
try {
    const {name, password} = req.body;
    
    const salt = await bcrypt.genSalt();
    const  hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        name,
        password:hashedPassword
    });

    const savedUser = await user.save();
    res.json(savedUser);
 

} catch (error) {
    console.log(error)
}
}

exports.login = async (req, res) =>{

    try {
        const {name, password} = req.body;
    
        if(!name || !password){
            return res.status(400).json({error:" nome e password são obrigatórios"});
        }
    
        const user = await User.findOne({name:name});
        if(!user) return res.status(400).json({msg:"Usuário não existe"});

        console.log(user.password);
    
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg:"Password Inválido"});
    
        const token =  jwt.sign({id: user._id}, process.env.JWT_SECRET);

        res.cookie('t', token, {expire: new Date() + 666})
    
        res.json({
            token,
            user:{
                id: user._id,
                name,
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
   
};

exports.singout = (req, res) =>{
    res.clearCookie("t");
    return res.json({message:"Singout Sucess"});
}




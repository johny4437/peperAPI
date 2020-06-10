const User = require('../models/UserSchema');
const hashPassword = require('../utils/hashPassword').hashPassword;

exports.singup = async (req,res) =>{
  

    

    const user = new User(req.body);

   await  user.save((err, user)=>{
        if(err){
             return res.status(400).json('Erro to save');
        }

        res.json({ user });
    })
               


    


}
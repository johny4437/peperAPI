const jwt = require('jsonwebtoken');
require('dotenv').config({path:'./src/.env'});

const auth = (req, res, next) =>{


    try {
        const token = req.header("x-auth-token");

        if(!token){
            return res.status(401).json({msg:"Token inválido, access Denied"})
        }
        
        const verified =  jwt.verify(token, process.env.JWT_SECRET);
        if(!verified){
            return res.status(401).json({msg:"Verificação do token falhou, access Denied"})
        }
        req.user = verified.id;
        next();
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}

module.exports = auth;
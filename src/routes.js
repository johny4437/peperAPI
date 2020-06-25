const express = require('express');
const router = express.Router();

const { register, login, singout} = require('./controller/userController');

const {createPrice, getLastPrice, listPrice} = require('./controller/priceController');
const auth = require('./middlewares/auth');




//LISTAR TODOS OS PREÇOS
 router.post('/user/login', login);
router.get('/price',listPrice);
// =============================
    //Rotas de Usuário
// ==================================
//ROTA DE CADASTRO
router.post('/user/singup', register);

//rota de login
//rota de logout
router.get('/user/singout', singout);
//CRIAR UM PREÇO
router.post('/price/create',auth,createPrice);

//Pegar ultimo preço
router.get('/price/lastprice', getLastPrice);
//Take the ip address




module.exports = router;
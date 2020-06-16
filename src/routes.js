const express = require('express');
const router = express.Router();

const { singup, singin, singout, userById, requireSingin, userIp} = require('./controller/userController');
const {createPrice, getLastPrice, listPrice} = require('./controller/priceController');



//LISTAR TODOS OS PREÇOS
router.get('/price',listPrice);
// =============================
    //Rotas de Usuário
// ==================================
//ROTA DE CADASTRO
router.post('/user/singup', singup);
//rota de login
router.post('/user/singin', singin);
//rota de logout
router.get('/user/singout', singout);
//CRIAR UM PREÇO
router.post('/price/create', requireSingin,createPrice);

//Pegar ultimo preço
router.get('/price/lastprice', getLastPrice);
//Take the ip address


module.exports = router;
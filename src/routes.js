const express = require('express');
const router = express.Router();

const { singup, singin, userById, requireSingin} = require('./controller/userController');
const {createPrice, listPrice } = require('./controller/priceController');



//LISTAR TODOS OS PREÇOS
router.get('/price',listPrice);

//ROTA DE CADASTRO
router.post('/user/singup', singup);
//ROTA DE LOGIN
router.post('/user/singin', singin);
//CRIAR UM PREÇO
router.post('/price/create', requireSingin,createPrice);


module.exports = router;
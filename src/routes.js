const express = require('express');
const router = express.Router();

const { singup } = require('./controller/userController');
const {createPrice, listPrice } = require('./controller/priceController');



//LISTAR TODOS OS PREÇOS
router.get('/price',listPrice);
//CRIAR UM PREÇO
router.post('/price/create', createPrice);
//ROTA DE CADASTRO
router.post('/user/singup', singup);


module.exports = router;
const Price = require('../models/priceSchema');

exports.createPrice = (req, res)=>{
    
    const price = new Price(req.body);
    price.save((err,price)=>{
        if(err){
            res.status(400).json("Error to save the price");
        }
        res.json( price  );
    })
};
//Listar todos os preços

exports.listPrice = async (req,res) =>{
    const prices = await Price.find();
    return res.status(200).json({prices})
}



//Listar ultimo preço
exports.getLastPrice =  async (req, res) =>{
const price = await Price.findOne().sort({createdAt: -1});

    return res.status(200).json({price});
}

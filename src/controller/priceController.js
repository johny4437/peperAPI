const Price = require('../models/priceSchema');

exports.createPrice = async (req, res)=>{
    
    const price = new Price(req.body);
    await price.save((err,price)=>{
        if(err){
            res.status(400).json("Error to save the price");
        }

        res.json({price});
    })
};


exports.listPrice = async (req, res) =>{
        const prices =  await Price.find();

        res.json(prices);
}
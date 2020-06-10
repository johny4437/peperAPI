const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    price:{
        type:String,
        required:true,
      
        
    }
});

module.exports = mongoose.model('Price', priceSchema);

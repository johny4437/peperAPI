const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    price:{
        type:String,
    
        
    },
    createdAt:{ 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model('Price', priceSchema);

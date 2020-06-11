const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    price:{
        type:String,
        required:true
        
    },
    createdAt:{ 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model('Price', priceSchema);

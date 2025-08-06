const mongoose = require('mongoose')

const ProductSchema = new  mongoose.Schema({
    itemName:{
        type:String,
    },
    price:{
        type:Number
    },
    Description:{
        type:String
    },
    title:{
        type:String
    }
})

const Shop = mongoose.model('Shop',ProductSchema)
module.exports = Shop
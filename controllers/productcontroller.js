const Shop = require('../model/productModel')

const getProducts = async(req,res) => {
    try {
        const newProducts = await Shop.find()

        if(!newProducts || newProducts.length === 0){
            res.json({
                success:false,
                message:"there are no products.."
            })
        }

        res.status(200).json({
            success: true,
            product: newProducts
        })
    } catch (error) {
        console.log(error.message);
        
        res.status(500).json({
            success:false,
            message:"Internal server Error"
        })
    }
}

const createProducts = async(req,res) => {
    const {itemName,price,Description,title} = req.body
    try {
        const newProducts = new Shop({itemName,price,Description,title})
        await newProducts.save()

        if(!newProducts){
            res.status(201).json({
                message:'created new Product',
                product: newProducts
            })
        }
    } catch (error) {
        console.log(error.message);
        
        res.status(500).json({
            success:false,
            message:"Internal server Error"
        })
    }
}


const updataProducts = async(req,res) => {
    const {id} = req.params
    const {itemName,price,Description,title} = req.body

    try {
        const UpdataProduct = await Shop.findByIdAndUpdate(id,{itemName,price,Description,title},{new:true})

        if(!UpdataProduct){
            res.json({
               message: "not update.."
            })
        }

        res.status(200).json({
             success:true,
                message:"updated data",
                product: UpdataProduct
        })
    } catch (error) {
         console.log(error.message);
        
        res.status(500).json({
            success:false,
            message:"Internal server Error"
        })
    }
}

const DeleteProduct = async(req,res) => {
    const {id} = req.params
    try {
        const deleteProduct = await Shop.findByIdAndDelete(id)

        if(!deleteProduct){
            res.json({
                message:'Product not find and not deleted'
            })
        }

        res.status(200).json({
            success:true,
            message:"Deleted product successfully..",
            product:deleteProduct
        })
    } catch (error) {
         console.log(error.message);
        
        res.status(500).json({
            success:false,
            message:"Internal server Error"
        })
    }
}

module.exports = {getProducts,createProducts,updataProducts,DeleteProduct}
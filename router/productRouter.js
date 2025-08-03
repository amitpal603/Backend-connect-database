const express = require('express')
const router = express.Router()
const {getProducts,createProducts,updataProducts,DeleteProduct} = require('../controllers/productcontroller')


router.get('/products',getProducts)
router.post('/products',createProducts)
router.put('/products:id',updataProducts)
router.delete('/products:id',DeleteProduct)


module.exports = router
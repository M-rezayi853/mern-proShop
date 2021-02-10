import express from 'express'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/productModel.js'

import { getProducts, getProductById } from '../controllers/prdouctController.js'

const router = express.Router()

// router.get('/', asyncHandler(async (req, res) => {
//     const products = await Product.find({})
    
//     res.json(products)
// }))
router.route('/').get(getProducts)

// router.get('/:pid', asyncHandler(async (req, res) => {
//     // const product = products.find(p => p._id === req.params.pid)
//     const product = await Product.findById(req.params.pid)

//     if(product) {
//         res.json(product)
//     } else {
//         res.status(404)
//         throw new Error('Product not found')
//     }
// }))
router.route('/:pid').get(getProductById)

export default router
import express from 'express'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/productModel.js'

import { 
    getProducts, 
    getProductById, 
    deleteProduct, 
    createProduct, 
    updateProduct,
    createProductReview,
    getTopProducts
} from '../controllers/prdouctController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

// router.get('/', asyncHandler(async (req, res) => {
//     const products = await Product.find({})
    
//     res.json(products)
// }))
router.route('/').get(getProducts).post(protect, admin, createProduct)

// router.get('/:id', asyncHandler(async (req, res) => {
//     // const product = products.find(p => p._id === req.params.id)
//     const product = await Product.findById(req.params.id)

//     if(product) {
//         res.json(product)
//     } else {
//         res.status(404)
//         throw new Error('Product not found')
//     }
// }))
router.route('/top').get(getTopProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)

export default router
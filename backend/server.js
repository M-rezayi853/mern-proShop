// const express = require('express')
import express from 'express'
// const dotenv = require('dotenv')
import dotenv from 'dotenv'
// const products = require('./data/products')
import products from './data/products.js'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:pid', (req, res) => {
    const product = products.find(p => p._id === req.params.pid)
    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
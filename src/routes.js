const route = require('express').Router()
const ProductController = require('./controllers/ProductController')
const uploadImage = require('../middlewares/multer')

route.get('/', ProductController.getAll)
route.post('/product', uploadImage.single('imageUrl'), ProductController.addProduct)

module.exports = route
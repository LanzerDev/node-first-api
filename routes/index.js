const productsRouter = require('./productsRoutes')
const usersRouter = require('./usersRoutes')
const express = require('express')

const routerApi = (app) =>{
    const router = express.Router()
    app.use('/api/v1', router)
    
    router.use('/products', productsRouter)
    router.use('/users', usersRouter)
}

module.exports = routerApi;
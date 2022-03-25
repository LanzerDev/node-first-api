const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const routerApi = require('./routes')
const cors = require('cors')

//middleware
const { logErrors, errorHandler, boomHandler} = require('./middlewares/errorHandler')
app.use(express.json())
app.use(cors())

// config
app.set('json spaces', 2)

//conection
app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})

routerApi(app);

app.use(logErrors)
app.use(boomHandler)
app.use(errorHandler)
const logErrors = (err, req, res, next) =>{
    console.log("LOG ERRORS")
     console.error(err)
     next(err)
}
const errorHandler = (err, req, res, next) =>{
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}
const boomHandler = (err, req, res, next) =>{
    if(err.isBoom){
        const { output } = err;
        res.status(output.statusCOde).json(output.payload)
    }
    next(err)
}

module.exports = { logErrors, errorHandler, boomHandler};
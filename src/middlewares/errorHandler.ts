const errorHandler = (err, req, res, next) => {
    if(err.status === '404'){
        res.status(404).json({
            status: 404,
            message: err.message
        })
    }
        res.status(500).json({
            status: 500,
            message:'Something went wrong'
        })
};

export default errorHandler;
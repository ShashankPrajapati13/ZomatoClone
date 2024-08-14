class ErrorHandler {
    constructor(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
    }

    static handleErrors(err, req, res, next) {
        const { statusCode, message } = err;
        res.status(statusCode).json({
            status: "error",
            statusCode,
            message
        });
    }
}

module.exports = ErrorHandler;

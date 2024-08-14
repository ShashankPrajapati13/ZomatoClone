class ResponseHandler {
    static sendResponse(res, statusCode, data) {
        res.status(statusCode).json({
            status: "success",
            data
        });
    }

    static sendError(res, statusCode, message) {
        res.status(statusCode).json({
            status: "error",
            statusCode,
            message
        });
    }
}

module.exports = ResponseHandler;

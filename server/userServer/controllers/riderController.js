const ResponseHandler = require('../utils/responseHandler');
const riderService = require('../services/riderService');
const asyncHandler = require('../utils/asyncHandler');
const ErrorHandler = require('../utils/errorHandler');

const createRider = asyncHandler(async (req, res) => {
    const rider = await riderService.createRider(req.body);
    ResponseHandler.sendResponse(res, 201, rider);
});

const getRiderById = asyncHandler(async (req, res) => {
    const rider = await riderService.getRiderById(req.params.id);
    if (!rider) {
        throw new ErrorHandler(404, 'Rider not found');
    }
    ResponseHandler.sendResponse(res, 200, rider);
});

const updateRider = asyncHandler(async (req, res) => {
    const updated = await riderService.updateRider(req.params.id, req.body);
    if (!updated) {
        throw new ErrorHandler(404, 'Rider not found');
    }
    ResponseHandler.sendResponse(res, 200, updated);
});

const deleteRider = asyncHandler(async (req, res) => {
    const deleted = await riderService.deleteRider(req.params.id);
    if (!deleted) {
        throw new ErrorHandler(404, 'Rider not found');
    }
    ResponseHandler.sendResponse(res, 204, {});
});

const getAllRiders = asyncHandler(async (req, res) => {
    const riders = await riderService.getAllRiders();
    ResponseHandler.sendResponse(res, 200, riders);
});

module.exports = {
    createRider,
    getRiderById,
    updateRider,
    deleteRider,
    getAllRiders
};

const ResponseHandler = require('../utils/responseHandler');
const restaurantService = require('../services/restaurantService');
const asyncHandler = require('../utils/asyncHandler');
const ErrorHandler = require('../utils/errorHandler');

const createRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await restaurantService.createRestaurant(req.body);
    ResponseHandler.sendResponse(res, 201, restaurant);
});

const getRestaurantById = asyncHandler(async (req, res) => {
    const restaurant = await restaurantService.getRestaurantById(req.params.id);
    if (!restaurant) {
        throw new ErrorHandler(404, 'Restaurant not found');
    }
    ResponseHandler.sendResponse(res, 200, restaurant);
});

const updateRestaurant = asyncHandler(async (req, res) => {
    const updated = await restaurantService.updateRestaurant(req.params.id, req.body);
    if (!updated) {
        throw new ErrorHandler(404, 'Restaurant not found');
    }
    ResponseHandler.sendResponse(res, 200, updated);
});

const deleteRestaurant = asyncHandler(async (req, res) => {
    const deleted = await restaurantService.deleteRestaurant(req.params.id);
    if (!deleted) {
        throw new ErrorHandler(404, 'Restaurant not found');
    }
    ResponseHandler.sendResponse(res, 204, {});
});

const getAllRestaurants = asyncHandler(async (req, res) => {
    const restaurants = await restaurantService.getAllRestaurants();
    ResponseHandler.sendResponse(res, 200, restaurants);
});

module.exports = {
    createRestaurant,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
    getAllRestaurants
};

const restaurantManagerService = require('../services/restaurantManagerService.js');
const asyncHandler = require('../utils/asyncHandler');
const ResponseHandler = require('../utils/responseHandler');


const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const { manager, token } = await restaurantManagerService.registerManager({ name, email, password });
    ResponseHandler.sendResponse(res, 201, { manager, token });
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const { manager, token } = await restaurantManagerService.loginManager({ email, password });
    ResponseHandler.sendResponse(res, 200, { manager, token });
});

const updateManager = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const managerData = req.body;
    const updatedManager = await restaurantManagerService.updateManagerProfile(id, managerData);
    ResponseHandler.sendResponse(res, 200, updatedManager);
});

const deleteManager = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await restaurantManagerService.deleteManagerProfile(id);
    ResponseHandler.sendResponse(res, 204, {});
});

const getManagerById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const manager = await restaurantManagerService.findManagerById(id);
    ResponseHandler.sendResponse(res, 200, manager);
});

const getAllManagers = asyncHandler(async (req, res) => {
    const managers = await restaurantManagerService.findAllManagers();
    ResponseHandler.sendResponse(res, 200, managers);
});

module.exports = {
    register,
    login,
    updateManager,
    deleteManager,
    getManagerById,
    getAllManagers
};

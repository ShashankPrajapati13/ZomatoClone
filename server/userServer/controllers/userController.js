const ResponseHandler = require('../utils/responseHandler');
const userService = require('../services/userService');
const asyncHandler = require('../utils/asyncHandler');
const ErrorHandler = require('../utils/errorHandler');

const register = asyncHandler(async (req, res) => {
    const { email, password, name } = req.body;
    const { user, token } = await userService.registerUser({ email, password, name });
    req.user = user;
    ResponseHandler.sendResponse(res, 200, { user, token });
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const { user, token } = await userService.loginUser({ email, password });
    req.user = user;
    ResponseHandler.sendResponse(res, 200, { user, token });
});

const logout = asyncHandler(async (req, res) => {
    res.clearCookie("userToken");
    ResponseHandler.sendResponse(res, 200,{ message: "logout succesfully!" });
  });

const getUser = asyncHandler(async (req, res) => {
    const id = req.user;
    const user = await userService.getUserById(id);
    if (!user) {
        throw new ErrorHandler(404, 'User not found');
    }
    ResponseHandler.sendResponse(res, 200, user);
});

const getUserById = asyncHandler(async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
        throw new ErrorHandler(404, 'User not found');
    }
    ResponseHandler.sendResponse(res, 200, user);
});

const updateUser = asyncHandler(async (req, res) => {
    const updated = await userService.updateUser(req.params.id, req.body);
    if (!updated) {
        throw new ErrorHandler(404, 'User not found');
    }
    ResponseHandler.sendResponse(res, 200, updated);
});

const deleteUser = asyncHandler(async (req, res) => {
    const deleted = await userService.deleteUser(req.params.id);
    if (!deleted) {
        throw new ErrorHandler(404, 'User not found');
    }
    ResponseHandler.sendResponse(res, 204, {});
});

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await userService.getAllUsers();
    ResponseHandler.sendResponse(res, 200, users);
});

module.exports = {
    register,
    login,
    logout,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers
};

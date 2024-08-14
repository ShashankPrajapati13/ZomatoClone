const User = require('../models/user');

const createUser = async (userData) => {
    return await User.create(userData);
};

const findUserByEmail = async (email) => {
    return User.findOne({ where: { email } });
};

const getUserById = async (id) => {
    return await User.findByPk(id);
};

const updateUser = async (id, updateData) => {
    const [updated] = await User.update(updateData, { where: { id } });
    return updated; 
};

const deleteUser = async (id) => {
    return await User.destroy({ where: { id } });
};

const getAllUsers = async () => {
    return await User.findAll();
};

module.exports = {
    createUser,
    findUserByEmail,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers
};
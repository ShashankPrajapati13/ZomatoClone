const RestaurantManager = require('../models/restaurantManager');

const createManager = async (managerData) => {
    return await RestaurantManager.create(managerData);
};

const findManagerByEmail = async (email) => {
    return await RestaurantManager.findOne({ where: { email } });
};

const getManagerById = async (id) => {
    return await RestaurantManager.findByPk(id);
};

const updateManager = async (id, managerData) => {
    const [updated] = await RestaurantManager.update(managerData, { where: { id } });
    return updated;
};

const deleteManager = async (id) => {
    return await RestaurantManager.destroy({ where: { id } });
};

const getAllManagers = async () => {
    return await RestaurantManager.findAll();
};

module.exports = {
    createManager,
    findManagerByEmail,
    getManagerById,
    updateManager,
    deleteManager,
    getAllManagers
};

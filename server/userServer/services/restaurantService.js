const restaurantDao = require('../dao/restaurantDao');

const createRestaurant = async (restaurantData) => {
    return await restaurantDao.createRestaurant(restaurantData);
};

const getRestaurantById = async (id) => {
    const restaurant = await restaurantDao.getRestaurantById(id);
    if (!restaurant) throw new Error('No restaurant found with the given ID.');
    return restaurant;
};

const updateRestaurant = async (id, updateData) => {
    const updated = await restaurantDao.updateRestaurant(id, updateData);
    if (updated === 0) throw new Error('No restaurant found to update.');
    return updated;
};

const deleteRestaurant = async (id) => {
    const deleted = await restaurantDao.deleteRestaurant(id);
    if (deleted === 0) throw new Error('No restaurant found to delete.');
    return deleted;
};

const getAllRestaurants = async () => {
    return await restaurantDao.getAllRestaurants();
};

module.exports = {
    createRestaurant,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
    getAllRestaurants
};

const Restaurant = require('../models/restaurant');

const createRestaurant = async (restaurantData) => {
    return await Restaurant.create(restaurantData);
};

const getRestaurantById = async (id) => {
    return await Restaurant.findByPk(id);
};

const updateRestaurant = async (id, updateData) => {
    const [updated] = await Restaurant.update(updateData, { where: { id } });
    return updated;
};

const deleteRestaurant = async (id) => {
    return await Restaurant.destroy({ where: { id } });
};

const getAllRestaurants = async () => {
    return await Restaurant.findAll();
};

module.exports = {
    createRestaurant,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
    getAllRestaurants
};

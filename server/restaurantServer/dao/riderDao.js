const Rider = require('../models/rider');

const createRider = async (riderData) => {
    return await Rider.create(riderData);
};

const getRiderById = async (id) => {
    return await Rider.findByPk(id);
};

const updateRider = async (id, updateData) => {
    const [updated] = await Rider.update(updateData, { where: { id } });
    return updated;
};

const deleteRider = async (id) => {
    return await Rider.destroy({ where: { id } });
};

const getAllRiders = async () => {
    return await Rider.findAll();
};

module.exports = {
    createRider,
    getRiderById,
    updateRider,
    deleteRider,
    getAllRiders
};

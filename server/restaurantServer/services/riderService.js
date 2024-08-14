const riderDao = require('../dao/riderDao.js');

const createRider = (riderData) => {
    return riderDao.createRider(riderData);
};

const getRiderById = (id) => {
    return riderDao.getRiderById(id);
};

const updateRider = (id, updateData) => {
    return riderDao.updateRider(id, updateData);
};

const deleteRider = (id) => {
    return riderDao.deleteRider(id);
};

const getAllRiders = () => {
    return riderDao.getAllRiders();
};

module.exports = {
    createRider,
    getRiderById,
    updateRider,
    deleteRider,
    getAllRiders
};

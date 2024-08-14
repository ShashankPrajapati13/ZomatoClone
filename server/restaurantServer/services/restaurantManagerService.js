const restaurantManagerDao = require('../dao/restaurantManagerDao.js');
const { generateToken } = require('../auth/tokenService');
const { hashPassword, comparePassword } = require('../auth/passwordUtil');

const registerManager = async ({ name, email, password }) => {
    const hashedPassword = await hashPassword(password);
    const managerExists = await restaurantManagerDao.findManagerByEmail(email);
    if (managerExists) {
        throw new Error('Manager already exists. Login to continue!');
    }
    const manager = await restaurantManagerDao.createManager({ name, email, password: hashedPassword });
    const token = generateToken(manager);
    req.manager = manager;
    return { manager, token };
};

const loginManager = async ({ email, password }) => {
    const manager = await restaurantManagerDao.findManagerByEmail(email);
    if (!manager) {
        throw new Error('Manager not found. Register!');
    }
    const isMatch = await comparePassword(password, manager.password);
    if (!isMatch) {
        throw new Error('Incorrect password!');
    }
    const token = generateToken(manager);
    req.manager = manager;
    return { manager, token };
};

const getManagerById = async (id) => {
    const manager = await restaurantManagerDao.getManagerById(id);
    if (!manager) throw new Error('No manager found with the given ID.');
    return manager;
};

const updateManager = async (id, updateData) => {
    const updated = await restaurantManagerDao.updateManager(id, updateData);
    if (updated === 0) throw new Error('No manager found to update.');
    return updated;
};

const deleteManager = async (id) => {
    const deleted = await restaurantManagerDao.deleteManager(id);
    if (deleted === 0) throw new Error('No manager found to delete.');
    return deleted;
};

const getAllManagers = async () => {
    return await restaurantManagerDao.getAllManagers();
};

module.exports = {
    registerManager,
    loginManager,
    getManagerById,
    updateManager,
    deleteManager,
    getAllManagers
};

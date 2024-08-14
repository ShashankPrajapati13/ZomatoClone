const userDao = require('../dao/userDao');
const { generateToken } = require('../auth/tokenService');
const { hashPassword, comparePassword } = require('../auth/passwordUtil');

const registerUser = async ({ email, password, name }) => {
    const hashedPassword = await hashPassword(password);
    
    const userExist = await userDao.findUserByEmail(email);
    if (userExist) {
        throw new Error('User allready exists. Login to continue!');
    }
    const user = await userDao.createUser({ email, password: hashedPassword, name });
    const token = generateToken(user);
    console.log({user,token})
    return { user, token };
};

const loginUser = async ({ email, password }) => {
    const user = await userDao.findUserByEmail(email);
    if (!user) {
        throw new Error('User not found. Register!');
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
        throw new Error('Incorrect password!');
    }
    const token = generateToken(user);
    console.log(token)
    return { user, token };
};



const getUserById = async (id) => {
    const user = await userDao.getUserById(id);
    if (!user) throw new Error('No user found with the given ID.');
    return user;
};

const updateUser = async (id, updateData) => {
    const updated = await userDao.updateUser(id, updateData);
    if (updated === 0) throw new Error('No user found to update.');
    return updated;
};

const deleteUser = async (id) => {
    const deleted = await userDao.deleteUser(id);
    if (deleted === 0) throw new Error('No user found to delete.');
    return deleted;
};

const getAllUsers = async () => {
    return await userDao.getAllUsers();
};

module.exports = {
    registerUser,
    loginUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers
};

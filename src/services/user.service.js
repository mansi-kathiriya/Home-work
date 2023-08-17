const { User } = require("../models");

// create user
const createUser = async (reqBody) => {
    return User.create(reqBody);
};

// Get user list
const getUserList = async (req, res) => {
    return User.find()
}

module.exports = {
    createUser,
    getUserList
}
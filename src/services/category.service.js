const { Category } = require("../models");


//  Create user

const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

const getCategoryList = async (filter, options) => {
  return Category.find()
};

module.exports = {
  createCategory,
  getCategoryList
};
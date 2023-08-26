const { Category } = require("../models");


//  Create user

const createCategory = async (reqBod) => {
  return Category.create(reqBody);y
};

const getCategoryList = async (filter, options) => {
  return Category.find()
};

module.exports = {
  createCategory,
  getCategoryList
};
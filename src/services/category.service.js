const { category } = require("../models");


//  Create user
 
const createCategory = async (reqBody) => {
  return category.create(reqBody);
};

const getCategoryList = async (filter, options) => {
  return category.find()
};

module.exports = {
  createCategory,
  getCategoryList
};
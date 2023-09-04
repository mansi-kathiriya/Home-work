const { Grocery } = require("../models");

const createGrocery = async (reqBody) => {
  return Grocery.create(reqBody);
};

const getGroceryList = async (filter, options) => {
  return Grocery.find()
};

const getGroceryById = async(groceryId) => {
  return Grocery.findById(groceryId);
}

const updateDetails = async(groceryId, updateBody) => {
  return Grocery.findByIdAndUpdate(groceryId, { $set: updateBody });
}

const deleteGrocery = async (groceryId) => {
  return Grocery.findByIdAndDelete(groceryId);
}

const getGroceryByName = async (grocery_name) => {
  return Grocery.findOne({ grocery_name });
};

module.exports = {
  createGrocery,
  getGroceryList,
  getGroceryById,
  updateDetails,
  deleteGrocery,
  getGroceryByName
};
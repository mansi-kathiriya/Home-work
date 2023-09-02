const { Jewellery } = require("../models");


//  Create Jewellery

const createJewellery = async (reqBody) => {
  return Jewellery.create(reqBody);
};

const getJewelleryList = async (filter, options) => {
  return Jewellery.find()
};

const getJewelleryById = async(jewelleryId) => {
  return Jewellery.findById(jewelleryId);
}

const updateDetails = async(jewelleryId, updateBody) => {
  return Jewellery.findByIdAndUpdate(jewelleryId, { $set: updateBody });
}

const deleteJewellery = async (jewelleryId) => {
  return Jewellery.findByIdAndDelete(jewelleryId);
}

const getJewelleryByName = async (jewellery_name) => {
  return Jewellery.findOne({ jewellery_name })
};

module.exports = {
  createJewellery,
  getJewelleryList,
  getJewelleryById,
  updateDetails,
  deleteJewellery,
  getJewelleryByName
};
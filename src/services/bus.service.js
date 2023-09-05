const { Bus } = require("../models");


//  Create Bus

const createBus = async (reqBody) => {
  return Bus.create(reqBody);
};

const getBusList = async (filter, options) => {
  return Bus.find({$or : [{ is_active: true }]})
};

const getBusById = async(busId) => {
  return Bus.findById(busId);
}

const updateDetails = async(busId, updateBody) => {
  return Bus.findByIdAndUpdate(busId, { $set: updateBody });
}

const deleteBus = async (busId) => {
  return Bus.findByIdAndDelete(busId);
}

const getBusByName = async (bus_name) => {
  return Bus.findOne({ bus_name })
};

module.exports = {
  createBus,
  getBusList,
  getBusById,
  updateDetails,
  deleteBus,
  getBusByName
};
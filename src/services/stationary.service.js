const { Stationary } = require("../models");

const createStationary = async (reqBody) => {
  return Stationary.create(reqBody);
};

const getStationaryList = async (filter, options) => {
  return Stationary.find({$or : [{ is_active: true }]})
};

const getStationaryById = async(stationaryId) => {
  return Stationary.findById(stationaryId);
}

const updateDetails = async(stationaryId, updateBody) => {
  return Stationary.findByIdAndUpdate(stationaryId, { $set: updateBody });
}

const deleteStationary = async (stationaryId) => {
  return Stationary.findByIdAndDelete(stationaryId);
}

const getStationaryByName = async (stationary_name) => {
  return Stationary.findOne({ stationary_name });
};

module.exports = {
  createStationary,
  getStationaryList,
  getStationaryById,
  updateDetails,
  deleteStationary,
  getStationaryByName
};
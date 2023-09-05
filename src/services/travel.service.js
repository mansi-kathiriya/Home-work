const { Travel } = require("../models");

const createTravel = async (reqBody) => {
  return Travel.create(reqBody);
};

const getTravelList = async (filter, options) => {
  return Travel.find({$or : [{ is_active: true }]})
};

const getTravelById = async(travelId) => {
  return Travel.findById(travelId);
}

const updateDetails = async(travelId, updateBody) => {
  return Travel.findByIdAndUpdate(travelId, { $set: updateBody });
}

const deleteTravel = async (travelId) => {
  return Travel.findByIdAndDelete(travelId);
}

const getTravelByName = async (travel_name) => {
  return Travel.findOne({ travel_name });
};

module.exports = {
  createTravel,
  getTravelList,
  getTravelById,
  updateDetails,
  deleteTravel,
  getTravelByName
};
const { Hotal } = require("../models");

const createHotal = async (reqBody) => {
  return Hotal.create(reqBody);
};

const getHotalList = async (filter, options) => {
  return Hotal.find()
};

const getHotalById = async(hotalId) => {
  return Hotal.findById(hotalId);
}

const updateDetails = async(hotalId, updateBody) => {
  return Hotal.findByIdAndUpdate(hotalId, { $set: updateBody });
}

const deleteHotal = async (hotalId) => {
  return Hotal.findByIdAndDelete(hotalId);
}

const getHotalByName = async (hotal_name) => {
  return Hotal.findOne({ hotal_name });
};

module.exports = {
  createHotal,
  getHotalList,
  getHotalById,
  updateDetails,
  deleteHotal,
  getHotalByName
};
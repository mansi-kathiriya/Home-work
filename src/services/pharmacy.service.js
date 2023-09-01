const { Pharmacy } = require("../models");


//  Create Pharmacy

const createPharmacy = async (reqBody) => {
  return Pharmacy.create(reqBody);
};

const getPharmacyList = async (filter, options) => {
  return Pharmacy.find()
};

const getPharmacyById = async(PharmacyId) => {
  return Pharmacy.findById(PharmacyId);
}

const updateDetails = async(PharmacyId, updateBody) => {
  return Pharmacy.findByIdAndUpdate(PharmacyId, { $set: updateBody });
}

const deletePharmacy = async (PharmacyId) => {
  return Pharmacy.findByIdAndDelete(PharmacyId);
}

const getPharmacyByName = async (pharmacy_name) => {
  return Pharmacy.findOne({ pharmacy_name })
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  getPharmacyById,
  updateDetails,
  deletePharmacy,
  getPharmacyByName
};
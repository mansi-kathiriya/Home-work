const { School } = require("../models");


//  Create School

const createSchool = async (reqBody) => {
  return School.create(reqBody);
};

const getSchoolList = async (filter, options) => {
  return School.find({$or : [{ is_active: true }]})
};

const getSchoolById = async(schoolId) => {
  return School.findById(schoolId);
}

const updateDetails = async(schoolId, updateBody) => {
  return School.findByIdAndUpdate(schoolId, { $set: updateBody });
}

const deleteSchool = async (schoolId) => {
  return School.findByIdAndDelete(schoolId);
}

const getSchoolByName = async (school_name) => {
  return School.findOne({ school_name })
};

module.exports = {
  createSchool,
  getSchoolList,
  getSchoolById,
  updateDetails,
  deleteSchool,
  getSchoolByName
};
const { Student } = require("../models");


//  Create Student

const createStudent = async (reqBody) => {
  return Student.create(reqBody);
};

const getStudentList = async (filter, options) => {
  return Student.find({$or : [{ is_active: true }]})
};

const getStudentById = async(studentId) => {
  return Student.findById(studentId);
}

const updateDetails = async(studentId, updateBody) => {
  return Student.findByIdAndUpdate(studentId, { $set: updateBody });
}

const deleteStudent = async (studentId) => {
  return Student.findByIdAndDelete(studentId);
}

const getStudentByName = async (Student_name) => {
  return Student.findOne({ Student_name })
};

module.exports = {
  createStudent,
  getStudentList,
  getStudentById,
  updateDetails,
  deleteStudent,
  getStudentByName
};
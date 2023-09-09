const express = require("express");
const { studentValidation } = require("../../validations");
const { studentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Student
router.post(
  "/create-student",
  validate(studentValidation.createStudent),
  studentController.createStudent
);

// Get Student list
router.get(
  "/student-list",
  studentController.getStudentList
);

// get Student details by id
router.get(
  "/get-details/:studentId",
  studentController.getStudentDetails
)

// update Student
router.put(
  "/update-student/:studentId",
  studentController.updateStudent
)

// delete Student
router.delete(
  "/delete-student/:studentId",
  studentController.deleteRecord
)

module.exports = router;
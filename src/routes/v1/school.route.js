const express = require("express");
const { schoolValidation } = require("../../validations");
const { schoolController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create school
router.post(
  "/create-school",
  validate(schoolValidation.createSchool),
  schoolController.createSchool
);

// Get school list
router.get(
  "/school-list",
  schoolController.getSchoolList
);

// get school details by id
router.get(
  "/get-details/:schoolId",
  schoolController.getSchoolDetails
)

// update school
router.put(
  "/update-school/:schoolId",
  schoolController.updateSchool
)

// delete school
router.delete(
  "/delete-school/:schoolId",
  schoolController.deleteRecord
)

module.exports = router;
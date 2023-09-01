const express = require("express");
const { pharmacyValidation } = require("../../validations");
const { pharmacyController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Pharmacy
router.post(
  "/create-pharmacy",
  validate(pharmacyValidation.createPharmacy),
  pharmacyController.createPharmacy
);

// Get Pharmacy list
router.get(
  "/pharmacy-list",
  pharmacyController.getPharmacyList
);

// get Pharmacy details by id
router.get(
  "/get-details/:pharmacyId",
  pharmacyController.getPharmacyDetails
)

// update Pharmacy
router.put(
  "/update-pharmacy/:pharmacyId",
  pharmacyController.updatePharmacy
)

// delete Pharmacy
router.delete(
  "/delete-pharmacy/:pharmacyId",
  pharmacyController.deleteRecord
)

module.exports = router;
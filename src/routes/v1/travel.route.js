const express = require("express");
const { travelValidation } = require("../../validations");
const { travelController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Travel
router.post(
  "/create-travel",
  validate(travelValidation.createTravel),
  travelController.createTravel
);

// Get Travel list
router.get(
  "/travel-list",
  travelController.getTravelList
);

// get Travel details by id
router.get(
  "/get-travel-details/:travelId",
  travelController.getTravelDetails
)

// update Travel
router.put(
  "/update-travel/:travelId",
  travelController.updateTravel
)

// delete Travel
router.delete(
  "/delete-travel/:TravelId",
  travelController.deleteRecord
)

module.exports = router;
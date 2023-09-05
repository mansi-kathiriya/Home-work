const express = require("express");
const { stationaryValidation } = require("../../validations");
const { stationaryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create stationary
router.post(
  "/create-stationary",
  validate(stationaryValidation.createStationary),
  stationaryController.createStationary
);

// Get stationary list
router.get(
  "/stationary-list",
  stationaryController.getStationaryList
);

// get stationary details by id
router.get(
  "/get-details/:stationaryId",
  stationaryController.getStationaryDetails
)

// update stationary
router.put(
  "/update-stationary/:stationaryId",
  stationaryController.updateStationary
)

// delete stationary
router.delete(
  "/delete-stationary/:stationaryId",
  stationaryController.deleteRecord
)

module.exports = router;
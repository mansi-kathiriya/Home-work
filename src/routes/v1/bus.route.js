const express = require("express");
const { busValidation } = require("../../validations");
const { busController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Bus
router.post(
  "/create-bus",
  validate(busValidation.createBus),
  busController.createBus
);

// Get Bus list
router.get(
  "/bus-list",
  busController.getBusList
);

// get Bus details by id
router.get(
  "/get-details/:busId",
  busController.getBusDetails
)

// update Bus
router.put(
  "/update-bus/:busId",
  busController.updateBus
)

// delete Bus
router.delete(
  "/delete-bus/:busId",
  busController.deleteRecord
)

module.exports = router;
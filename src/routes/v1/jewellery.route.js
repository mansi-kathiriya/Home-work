const express = require("express");
const { jewelleryValidation } = require("../../validations");
const { jewelleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Jewellery
router.post(
  "/create-jewellery",
  validate(jewelleryValidation.createJewellery),
  jewelleryController.createJewellery
);

// Get Jewellery list
router.get(
  "/jewellery-list",
  jewelleryController.getJewelleryList
);

// get Jewellery details by id
router.get(
  "/get-details/:jewelleryId",
  jewelleryController.getJewelleryDetails
)

// update Jewellery
router.put(
  "/update-jewellery/:jewelleryId",
  jewelleryController.updateJewellery
)

// delete Jewellery
router.delete(
  "/delete-jewellery/:jewelleryId",
  jewelleryController.deleteRecord
)

module.exports = router;
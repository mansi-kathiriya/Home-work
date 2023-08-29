const express = require("express");
const { hotalValidation } = require("../../validations");
const { hotalController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create hotal
router.post(
  "/create-hotal",
  validate(hotalValidation.createHotal),
  hotalController.createHotal
);

// Get hotal list
router.get(
  "/hotal-list",
  hotalController.getHotalList
);

// get hotal details by id
router.get(
  "/get-hotal-details/:hotalId",
  hotalController.getHotalDetails
)

// update hotal
router.put(
  "/update-hotal/:hotalId",
  hotalController.updateHotal
)

// delete hotal
router.delete(
  "/delete-hotal/:hotalId",
  hotalController.deleteRecord
)

module.exports = router;
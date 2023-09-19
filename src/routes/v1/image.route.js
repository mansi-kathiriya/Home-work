const express = require("express");
const { upload } = require("../../middlewares/upload")
const { imageValidation } = require("../../validations");
const { imageController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Image
router.post(
  "/create-image",
  upload.single("image"),
  validate(imageValidation.createImage),
  imageController.createImage
);

// Get Image list
router.get(
  "/image-list",
  imageController.getImageList
);

// get Image details by id
router.get(
  "/get-details/:imageId",
  imageController.getImageDetails
)

// update Image
router.put(
  "/update-Image/:imageId",
  imageController.updateImage
)

// delete Image
router.delete(
  "/delete-Image/:imageId",
  imageController.deleteRecord
)

module.exports = router;
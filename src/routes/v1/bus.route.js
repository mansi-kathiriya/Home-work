const express = require("express");
const { busValidation } = require("../../validations");
const { busController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create category
router.post(
  "/create-category",
  validate(busValidation.createCategory),
  busController.createCategory
);

// Get category list
router.get(
  "/list",
  busController.getCategoryList
);

// get category details by id
router.get(
  "/get-details/:categoryId",
  busController.getCategoryDetails
)

// update category
router.put(
  "/update/:categoryId",
  busController.updateCategory
)

// delete category
router.delete(
  "/delete/:categoryId",
  busController.deleteRecord
)

module.exports = router;
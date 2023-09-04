const express = require("express");
const { groceryValidation } = require("../../validations");
const { groceryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Grocery
router.post(
  "/create-grocery",
  validate(groceryValidation.createGrocery),
  groceryController.createGrocery
);

// Get Grocery list
router.get(
  "/grocery-list",
  groceryController.getGroceryList
);

// get Grocery details by id
router.get(
  "/get-details/:groceryId",
  groceryController.getGroceryDetails
)

// update Grocery
router.put(
  "/update-grocery/:groceryId",
  groceryController.updateGrocery
)

// delete Grocery
router.delete(
  "/delete-grocery/:groceryId",
  groceryController.deleteRecord
)

module.exports = router;
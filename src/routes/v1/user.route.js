const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create User
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);

// Get User list
router.get(
  "/user-list",
  userController.getUserList
);

// get User details by id
router.get(
  "/get-details/:UserId",
  userController.getUserDetails
)

// update User
router.put(
  "/update-user/:UserId",
  userController.updateUser
)

// delete User
router.delete(
  "/delete-user/:UserId",
  userController.deleteRecord
)

module.exports = router;
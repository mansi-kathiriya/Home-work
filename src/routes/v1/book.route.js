const express = require("express");
const { userValidation, bookValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const { bookController } = require("../../controllers");

const router = express.Router();

// create user
router.post(
  "/create-book",
  validate(bookValidation.createBook),
  bookController.createBookRecord
  );

// Get user list
  router.get(
    "/list",
    validate(userValidation.getUserList),
    bookController.getBooksList
  );

module.exports = router;
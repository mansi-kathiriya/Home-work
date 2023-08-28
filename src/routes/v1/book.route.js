const express = require("express");
const { bookValidation } = require("../../validations");
const { bookController } = require("../../controllers");
const validate = require("../../middlewares/validate");

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
  bookController.getBooksList
);

// get book details by id
router.get(
  "/get-details/:bookId",
  bookController.getBookDetails
)

// update category
router.put(
  "/update-book/:bookId",
  bookController.updateBook
)

// delete category
router.delete(
  "/delete-book/:bookId",
  bookController.deleteRecord
)

module.exports = router;
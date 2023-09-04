const express = require("express");
const { movieValidation } = require("../../validations");
const { movieController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Movie
router.post(
  "/create-movie",
  validate(movieValidation.createMovie),
  movieController.createMovie
);

// Get Movie list
router.get(
  "/movie-list",
  movieController.getMovieList
);

// get Movie details by id
router.get(
  "/get-details/:movieId",
  movieController.getMovieDetails
)

// update Movie
router.put(
  "/update-movie/:movieId",
  movieController.updateMovie
)

// delete Movie
router.delete(
  "/delete-movie/:movieId",
  movieController.deleteRecord
)

module.exports = router;
const { Movie } = require("../models");


//  Create Movie

const createMovie = async (reqBody) => {
  return Movie.create(reqBody);
};

const getMovieList = async (filter, options) => {
  return Movie.find({$or : [{ is_active: true }]})
};

const getMovieById = async(movieId) => {
  return Movie.findById(movieId);
}

const updateDetails = async(movieId, updateBody) => {
  return Movie.findByIdAndUpdate(movieId, { $set: updateBody });
}

const deleteMovie = async (movieId) => {
  return Movie.findByIdAndDelete(movieId);
}

const getMovieByName = async (movie_name) => {
  return Movie.findOne({ movie_name })
};

module.exports = {
  createMovie,
  getMovieList,
  getMovieById,
  updateDetails,
  deleteMovie,
  getMovieByName
};
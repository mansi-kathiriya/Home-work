const { book } = require("../models");


//  Create user

const createBook = async (reqBody) => {
  return book.create(reqBody);
};

const getBookList = async (filter, options) => {
  return book.find()
};

module.exports = {
  createBook,
  getBookList
};
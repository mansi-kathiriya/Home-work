const { book } = require("../models");


//  Create book

const createBook = async (reqBody) => {
  return book.create(reqBody);
};

const getBookList = async (filter, options) => {
  return book.find()
};

const getBookById = async(bookId) => {
  return book.findById(bookId);
}

const updateDetails = async(bookId, updateBody) => {
  return book.findByIdAndUpdate(bookId, { $set: updateBody });
}

const deleteBook = async (bookId) => {
  return book.findByIdAndDelete(bookId);
}

const getBookByName = async (book_name) => {
  return book.findOne({ book_name })
};

module.exports = {
  createBook,
  getBookList,
  getBookById,
  updateDetails,
  deleteBook,
  getBookByName
};
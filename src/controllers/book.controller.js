const { bookService } = require("../services");

// create category
const createBookRecord = async (req,res) => {
    try {
        const reqBody = req.body;

        const book = await bookService.createBook(reqBody);

        res.status(200).json({
            success: true,
            message: "Book create successfully!",
            data: { book }
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

//  Get user list
const getBooksList = async(req, res) => {
    try {
        const getList = await bookService.getBookList();
        res.status(200).json({
            success: true,
            message: "Get Book list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

module.exports = {
    createBookRecord,
    getBooksList,
};
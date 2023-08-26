const { categoryService } = require("../services");

// create category
const createCategory = async (req,res) => {
    try {
        const reqBody = req.body;

        const category = await categoryService.createCategory(reqBody);

        res.status(200).json({
            success: true,
            message: "category create successfully!",
            data: { category }
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

//  Get user list
const getCategoryList = async(req, res) => {
    try {
        const getList = await categoryService.getCategoryList();
        res.status(200).json({
            success: true,
            message: "Get category list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

module.exports = {
    createCategory,
    getCategoryList,
};
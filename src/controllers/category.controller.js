const { categoryService } = require("../services");

// create category
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        // console.log(reqBody);
        console.log(req.body);

        const Category = await categoryService.createCategory(reqBody);

        res.status(200).json({
            success: true,
            message: "category create successfully!",
            data: { Category }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get user list
const getCategoryList = async (req, res) => {
    try {
        const getList = await categoryService.getCategoryList();
        res.status(200).json({
            success: true,
            message: "Get category list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createCategory,
    getCategoryList,
};
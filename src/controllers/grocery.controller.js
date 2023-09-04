const { groceryService } = require("../services");

// create Grocery
const createGrocery = async (req, res) => {
    try {
        const reqBody = req.body;

        const groceryExists = await groceryService.getGroceryByName(reqBody.grocery_name);
        if (groceryExists) {
            throw new Error(`please add other Grocery this ${groceryExists.grocery_name} Grocery already created.`);
        }

        const Grocery = await groceryService.createGrocery(reqBody);

        res.status(200).json({
            success: true,
            message: "Grocery create successfully!",
            data: { Grocery }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Grocery list
const getGroceryList = async (req, res) => {
    try {
        const getList = await groceryService.getGroceryList();
        res.status(200).json({
            success: true,
            message: "Get Grocery list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Grocery details by id
const getGroceryDetails = async (req, res) => {
    try {
        const getDetails = await groceryService.getGroceryById(
            req.params.groceryId
        )
        if (!getDetails) {
            throw new Error("Grocery not found!");
        }

        res.status(200).json({
            success: true,
            message: "Grocery details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Grocery

const updateGrocery = async (req, res) => {
    try {
        const groceryId = req.params.groceryId;

        const groceryExists = await groceryService.getGroceryById(groceryId);
        if (!groceryExists) {
            throw new Error("Grocery not found!")
        }

        await groceryService.updateDetails(groceryId, req.body);

        res.status(200).json({
            success: true,
            message: "Grocery details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Grocery

const deleteRecord = async (req, res) => {
    try {
        const groceryId = req.params.groceryId;

        const groceryExists = await groceryService.getGroceryById(groceryId);
        if (!groceryExists) {
            throw new Error("Grocery not found!")
        }

        await groceryService.deleteGrocery(groceryId);

        res.status(200).json({
            success: true,
            message: "Grocery delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createGrocery,
    getGroceryList,
    getGroceryDetails,
    updateGrocery,
    deleteRecord
};
const { jewelleryService } = require("../services");

// create Jewellery
const createJewellery = async (req, res) => {
    try {
        const reqBody = req.body;

        const jewelleryExists = await jewelleryService.getJewelleryByName(reqBody.jewellery_name);
        if (jewelleryExists) {
            throw new Error(`please add other Jewellery this ${jewelleryExists.jewellery_name} Jewellery already created.`);
        }

        const Jewellery = await jewelleryService.createJewellery(reqBody);

        res.status(200).json({
            success: true,
            message: "Jewellery create successfully!",
            data: { Jewellery }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Jewellery list
const getJewelleryList = async (req, res) => {
    try {
        const getList = await jewelleryService.getJewelleryList();
        res.status(200).json({
            success: true,
            message: "Get Jewellery list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Jewellery details by id
const getJewelleryDetails = async (req, res) => {
    try {
        const getDetails = await jewelleryService.getJewelleryById(
            req.params.jewelleryId
        )
        if (!getDetails) {
            throw new Error("Jewellery not found!");
        }

        res.status(200).json({
            success: true,
            message: "Jewellery details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Jewellery

const updateJewellery = async (req, res) => {
    try {
        const jewelleryId = req.params.jewelleryId;

        const jewelleryExists = await jewelleryService.getJewelleryById(jewelleryId);
        if (!jewelleryExists) {
            throw new Error("Jewellery not found!")
        }

        await jewelleryService.updateDetails(jewelleryId, req.body);

        res.status(200).json({
            success: true,
            message: "Jewellery details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Jewellery

const deleteRecord = async (req, res) => {
    try {
        const jewelleryId = req.params.jewelleryId;

        const jewelleryExists = await jewelleryService.getJewelleryById(jewelleryId);
        if (!jewelleryExists) {
            throw new Error("Jewellery not found!")
        }

        await jewelleryService.deleteJewellery(jewelleryId);

        res.status(200).json({
            success: true,
            message: "Jewellery delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createJewellery,
    getJewelleryList,
    getJewelleryDetails,
    updateJewellery,
    deleteRecord
};
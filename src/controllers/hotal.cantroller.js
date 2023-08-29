const { hotalService } = require("../services");

// create Hotal
const createHotal = async (req, res) => {
    try {
        const reqBody = req.body;

        const hotalExists = await hotalService.getHotalByName(reqBody.hotal_name);
        if (hotalExists) {
            throw new Error(`please add other hotal this ${hotalExists.hotal_name} hotal already created.`);
        }

        const Hotal = await hotalService.createHotal(reqBody);

        res.status(200).json({
            success: true,
            message: "Hotal create successfully!",
            data: { Hotal }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Hotal list
const getHotalList = async (req, res) => {
    try {
        const getList = await hotalService.getHotalList();
        res.status(200).json({
            success: true,
            message: "Get Hotal list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Hotal details by id
const getHotalDetails = async (req, res) => {
    try {
        const getDetails = await hotalService.getHotalById(
            req.params.hotalId
        )
        if (!getDetails) {
            throw new Error("Hotal not found!");
        }

        res.status(200).json({
            success: true,
            message: "Hotal details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Hotal

const updateHotal = async (req, res) => {
    try {
        const hotalId = req.params.hotalId;

        const hotalExists = await hotalService.getHotalById(hotalId);
        if (!hotalExists) {
            throw new Error("Hotal not found!")
        }

        await hotalService.updateDetails(hotalId, req.body);

        res.status(200).json({
            success: true,
            message: "Hotal details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Hotal

const deleteRecord = async (req, res) => {
    try {
        const hotalId = req.params.hotalId;

        const hotalExists = await hotalService.getHotalById(hotalId);
        if (!hotalExists) {
            throw new Error("Hotal not found!")
        }

        await hotalService.deleteHotal(hotalId);

        res.status(200).json({
            success: true,
            message: "Hotal delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createHotal,
    getHotalList,
    getHotalDetails,
    updateHotal,
    deleteRecord
};
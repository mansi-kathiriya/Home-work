const { stationaryService } = require("../services");

// create Stationary
const createStationary = async (req, res) => {
    try {
        const reqBody = req.body;

        const stationaryExists = await stationaryService.getStationaryByName(reqBody.stationary_name);
        if (stationaryExists) {
            throw new Error(`please add other Stationary this ${stationaryExists.stationary_name} Stationary already created.`);
        }

        const stationary = await stationaryService.createStationary(reqBody);

        res.status(200).json({
            success: true,
            message: "Stationary create successfully!",
            data: { stationary }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Stationary list
const getStationaryList = async (req, res) => {
    try {
        const getList = await stationaryService.getStationaryList();
        res.status(200).json({
            success: true,
            message: "Get Stationary list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Stationary details by id
const getStationaryDetails = async (req, res) => {
    try {
        const getDetails = await stationaryService.getStationaryById(
            req.params.stationaryId
        )
        if (!getDetails) {
            throw new Error("Stationary not found!");
        }

        res.status(200).json({
            success: true,
            message: "Stationary details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Stationary

const updateStationary = async (req, res) => {
    try {
        const stationaryId = req.params.stationaryId;

        const stationaryExists = await stationaryService.getStationaryById(stationaryId);
        if (!stationaryExists) {
            throw new Error("Stationary not found!")
        }

        await stationaryService.updateDetails(stationaryId, req.body);

        res.status(200).json({
            success: true,
            message: "Stationary details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Stationary

const deleteRecord = async (req, res) => {
    try {
        const stationaryId = req.params.stationaryId;

        const stationaryExists = await stationaryService.getStationaryById(stationaryId);
        if (!stationaryExists) {
            throw new Error("Stationary not found!")
        }

        await stationaryService.deleteStationary(stationaryId);

        res.status(200).json({
            success: true,
            message: "Stationary delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createStationary,
    getStationaryList,
    getStationaryDetails,
    updateStationary,
    deleteRecord
};
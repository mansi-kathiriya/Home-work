const { travelService } = require("../services");

// create Travel
const createTravel = async (req, res) => {
    try {
        const reqBody = req.body;

        const travelExists = await travelService.getTravelByName(reqBody.travel_name);
        if (travelExists) {
            throw new Error(`please add other Travel this ${travelExists.travel_name} Travel already created.`);
        }

        const Travel = await travelService.createTravel(reqBody);

        res.status(200).json({
            success: true,
            message: "Travel create successfully!",
            data: { Travel }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Travel list
const getTravelList = async (req, res) => {
    try {
        const getList = await travelService.getTravelList();
        res.status(200).json({
            success: true,
            message: "Get Travel list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Travel details by id
const getTravelDetails = async (req, res) => {
    try {
        const getDetails = await travelService.getTravelById(
            req.params.travelId
        )
        if (!getDetails) {
            throw new Error("Travel not found!");
        }

        res.status(200).json({
            success: true,
            message: "Travel details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Travel

const updateTravel = async (req, res) => {
    try {
        const travelId = req.params.travelId;

        const travelExists = await travelService.getTravelById(travelId);
        if (!travelExists) {
            throw new Error("Travel not found!")
        }

        await travelService.updateDetails(travelId, req.body);

        res.status(200).json({
            success: true,
            message: "Travel details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Travel

const deleteRecord = async (req, res) => {
    try {
        const travelId = req.params.travelId;

        const travelExists = await travelService.getTravelById(travelId);
        if (!travelExists) {
            throw new Error("Travel not found!")
        }

        await travelService.deleteTravel(travelId);

        res.status(200).json({
            success: true,
            message: "Travel delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createTravel,
    getTravelList,
    getTravelDetails,
    updateTravel,
    deleteRecord
};
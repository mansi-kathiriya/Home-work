const { busService } = require("../services");

// create Bus
const createBus = async (req, res) => {
    try {
        const reqBody = req.body;

        const busExists = await busService.getBusByName(reqBody.bus_name);
        if (busExists) {
            throw new Error(`please add other Bus this ${busExists.bus_name} Bus already created.`);
        }

        const Bus = await busService.createBus(reqBody);

        res.status(200).json({
            success: true,
            message: "Bus create successfully!",
            data: { Bus }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Bus list
const getBusList = async (req, res) => {
    try {
        const getList = await busService.getBusList();
        res.status(200).json({
            success: true,
            message: "Get Bus list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Bus details by id
const getBusDetails = async (req, res) => {
    try {
        const getDetails = await busService.getBusById(
            req.params.busId
        )
        if (!getDetails) {
            throw new Error("Bus not found!");
        }

        res.status(200).json({
            success: true,
            message: "Bus details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Bus

const updateBus = async (req, res) => {
    try {
        const busId = req.params.busId;

        const busExists = await busService.getBusById(busId);
        if (!busExists) {
            throw new Error("Bus not found!")
        }

        await busService.updateDetails(busId, req.body);

        res.status(200).json({
            success: true,
            message: "Bus details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Bus

const deleteRecord = async (req, res) => {
    try {
        const busId = req.params.busId;

        const busExists = await busService.getBusById(busId);
        if (!busExists) {
            throw new Error("Bus not found!")
        }

        await busService.deleteBus(busId);

        res.status(200).json({
            success: true,
            message: "Bus delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createBus,
    getBusList,
    getBusDetails,
    updateBus,
    deleteRecord
};
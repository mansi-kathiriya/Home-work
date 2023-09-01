const { pharmacyService } = require("../services");

// create Pharmacy
const createPharmacy = async (req, res) => {
    try {
        const reqBody = req.body;

        const pharmacyExists = await pharmacyService.getPharmacyByName(reqBody.pharmacy_name);
        if (pharmacyExists) {
            throw new Error(`please add other Pharmacy this ${pharmacyExists.pharmacy_name} Pharmacy already created.`);
        }

        const Pharmacy = await pharmacyService.createPharmacy(reqBody);

        res.status(200).json({
            success: true,
            message: "Pharmacy create successfully!",
            data: { Pharmacy }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Pharmacy list
const getPharmacyList = async (req, res) => {
    try {
        const getList = await pharmacyService.getPharmacyList();
        res.status(200).json({
            success: true,
            message: "Get Pharmacy list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Pharmacy details by id
const getPharmacyDetails = async (req, res) => {
    try {
        const getDetails = await pharmacyService.getPharmacyById(
            req.params.pharmacyId
        )
        if (!getDetails) {
            throw new Error("Pharmacy not found!");
        }

        res.status(200).json({
            success: true,
            message: "Pharmacy details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Pharmacy

const updatePharmacy = async (req, res) => {
    try {
        const pharmacyId = req.params.pharmacyId;

        const pharmacyExists = await pharmacyService.getPharmacyById(pharmacyId);
        if (!pharmacyExists) {
            throw new Error("Pharmacy not found!")
        }

        await pharmacyService.updateDetails(pharmacyId, req.body);

        res.status(200).json({
            success: true,
            message: "Pharmacy details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Pharmacy

const deleteRecord = async (req, res) => {
    try {
        const pharmacyId = req.params.pharmacyId;

        const pharmacyExists = await pharmacyService.getPharmacyById(pharmacyId);
        if (!pharmacyExists) {
            throw new Error("Pharmacy not found!")
        }

        await pharmacyService.deletePharmacy(pharmacyId);

        res.status(200).json({
            success: true,
            message: "Pharmacy delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createPharmacy,
    getPharmacyList,
    getPharmacyDetails,
    updatePharmacy,
    deleteRecord
};
const { schoolService } = require("../services");

// create School
const createSchool = async (req, res) => {
    try {
        const reqBody = req.body;

        const schoolExists = await schoolService.getSchoolByName(reqBody.school_name);
        if (schoolExists) {
            throw new Error(`please add other School this ${schoolExists.school_name} School already created.`);
        }

        const School = await schoolService.createSchool(reqBody);

        res.status(200).json({
            success: true,
            message: "School create successfully!",
            data: { School }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get School list
const getSchoolList = async (req, res) => {
    try {
        const getList = await schoolService.getSchoolList();
        res.status(200).json({
            success: true,
            message: "Get School list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get School details by id
const getSchoolDetails = async (req, res) => {
    try {
        const getDetails = await schoolService.getSchoolById(
            req.params.schoolId
        )
        if (!getDetails) {
            throw new Error("School not found!");
        }

        res.status(200).json({
            success: true,
            message: "School details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update School

const updateSchool = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;

        const schoolExists = await schoolService.getSchoolById(schoolId);
        if (!schoolExists) {
            throw new Error("School not found!")
        }

        await schoolService.updateDetails(schoolId, req.body);

        res.status(200).json({
            success: true,
            message: "School details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete School

const deleteRecord = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;

        const schoolExists = await schoolService.getSchoolById(schoolId);
        if (!schoolExists) {
            throw new Error("School not found!")
        }

        await schoolService.deleteSchool(schoolId);

        res.status(200).json({
            success: true,
            message: "School delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createSchool,
    getSchoolList,
    getSchoolDetails,
    updateSchool,
    deleteRecord
};
const { studentService } = require("../services");

// create Student
const createStudent = async (req, res) => {
    try {
        const reqBody = req.body;

        const studentExists = await studentService.getStudentByName(reqBody.student_name);
        if (studentExists) {
            throw new Error(`please add other Student this ${studentExists.student_name} Student already created.`);
        }

        const Student = await studentService.createStudent(reqBody);

        res.status(200).json({
            success: true,
            message: "Student create successfully!",
            data: { Student }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Student list
const getStudentList = async (req, res) => {
    try {
        const getList = await studentService.getStudentList();
        res.status(200).json({
            success: true,
            message: "Get Student list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Student details by id
const getStudentDetails = async (req, res) => {
    try {
        const getDetails = await studentService.getStudentById(
            req.params.studentId
        )
        if (!getDetails) {
            throw new Error("Student not found!");
        }

        res.status(200).json({
            success: true,
            message: "Student details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Student

const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.studentId;

        const studentExists = await studentService.getStudentById(studentId);
        if (!studentExists) {
            throw new Error("Student not found!")
        }

        await studentService.updateDetails(studentId, req.body);

        res.status(200).json({
            success: true,
            message: "Student details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Student

const deleteRecord = async (req, res) => {
    try {
        const studentId = req.params.studentId;

        const studentExists = await studentService.getStudentById(studentId);
        if (!studentExists) {
            throw new Error("Student not found!")
        }

        await studentService.deleteStudent(studentId);

        res.status(200).json({
            success: true,
            message: "Student delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createStudent,
    getStudentList,
    getStudentDetails,
    updateStudent,
    deleteRecord
};
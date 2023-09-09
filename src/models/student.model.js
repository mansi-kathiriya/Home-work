const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        student_name: {
            type: Number,
            default: 0,
        },
        contact_number: {
            type: Number,
            default: 0,
        },
        address: {
            type: String,
            trim: true,
        },
        standard: {
            type: Number,
            default: 0,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
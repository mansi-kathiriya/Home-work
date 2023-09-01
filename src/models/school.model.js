const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
    {
        school_branch: {
            type: Number,
            default:0,
        },
        school_name: {
            type: String,
            trim: true,
        },
        school_location: {
            type: String,
            trim: true,
        },
        student_id: {
            type: Number,
            default:0,
        },
        student_name: {
            type: String,
            trim: true,
        },
        student_contact: {
            type: Number,
            default:0,
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

const school = mongoose.model("school",schoolSchema);

module.exports = school;
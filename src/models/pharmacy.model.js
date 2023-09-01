const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
    {
        medication_name: {
            type: String,
            trim: true,
        },
        Description: {
            type: String,
            trim: true,
        },
        quantity: {
            type: Number,
            default:0,
        },
        price: {
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
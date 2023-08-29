const mongoose = require("mongoose");

const hotalSchema = new mongoose.Schema(
    {
        hotal_branch: {
            type: Number,
            default:0,
        },
        hotal_name: {
            type: String,
            trim: true,
        },
        hotal_location: {
            type: String,
            trim: true,
        },
        contact_number: {
            type: Number,
            default:0,
        },
        room_no: {
            type: Number,
            default:0,
        },
        room_type: {
            type: String,
            trim: true,
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

const hotal = mongoose.model("hotal",hotalSchema);

module.exports = hotal;
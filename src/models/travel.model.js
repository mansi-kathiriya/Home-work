const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
    {
        travel_name: {
            type: String,
            trim: true,
        },
        phone_number: {
            type: Number,
            default:0,
        },
        email: {
            type: String,
            trim: true,
        },
        country_address: {
            type: String,
            trim: true,
        },
        payment: {
            type: Number,
            default:0,
        },
        bus: {
            type: mongoose.Types.ObjectId,
            ref: "bus"
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

const travel = mongoose.model("travel",travelSchema);

module.exports = travel;
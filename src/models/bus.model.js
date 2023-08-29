const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
    {
        bus_number: {
            type: Number,
            default:0,
        },
        bus_name: {
            type: String,
            trim: true,
        },
        route: {
            type: String,
            trim: true,
        },
        pasenger_name: {
            type: String,
            trim: true,
        },
        seat_no: {
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

const bus = mongoose.model("bus",busSchema);

module.exports = bus;
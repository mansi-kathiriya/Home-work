const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema(
    {
        medication_name: {
            type: String,
            trim: true,
        },
        description: {
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

const Pharmacy = mongoose.model("pharmacy",pharmacySchema);

module.exports = Pharmacy;
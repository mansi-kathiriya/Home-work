const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema(
    {
        jewellery_name: {
            type: String,
            trim: true,
        },
        jewellery_material: {
            type: String,
            trim: true,
        },
        Description: {
            type: String,
            trim: true,
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

const Jewellery = mongoose.model("jewellery",jewellerySchema);

module.exports = Jewellery;
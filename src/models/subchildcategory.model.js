const mongoose = require("mongoose");

const subchildcategorySchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Types.ObjectId,
            ref: "Category",
        },
        subcategory: {
            type: mongoose.Types.ObjectId,
            ref: "subCategory",
        },
        subchildcategory_name: {
            type: String,
            trim: true,
        },
        subchildcategory_desc: {
            type: String,
            trim: true,
        },
        price: {
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
        versionkey: false
    }
);

const subchildCategory = mongoose.model("subchildcategory", subchildcategorySchema);

module.exports = subchildCategory;
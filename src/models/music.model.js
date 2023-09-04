const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema(
    {
        music_name: {
            type: String,
            trim: true,
        },
        language: {
            type: String,
            trim: true,
        },
        artist: {
            type: String,
            trim: true,
        },
        release_year: {
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

const Music = mongoose.model("music",musicSchema);

module.exports = Music;
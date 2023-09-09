const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        movie_name: {
            type: String,
            trim: true,
        },
        director_name: {
            type: String,
            trim: true,
        },
        actor_name: {
            type: String,
            trim: true,
        },
        language: {
            type: String,
            trim: true,
        },
        movie_type: {
            type: String,
            trim: true,
        },
        music: {
            type: mongoose.Types.ObjectId,
            ref: "music"
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

const Movie = mongoose.model("movie",movieSchema);

module.exports = Movie;
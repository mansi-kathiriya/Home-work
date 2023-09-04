const { movieService } = require("../services");

// create Movie
const createMovie = async (req, res) => {
    try {
        const reqBody = req.body;

        const movieExists = await movieService.getMovieByName(reqBody.movie_name);
        if (movieExists) {
            throw new Error(`please add other Movie this ${movieExists.movie_name} Movie already created.`);
        }

        const Movie = await movieService.createMovie(reqBody);

        res.status(200).json({
            success: true,
            message: "Movie create successfully!",
            data: { Movie }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Movie list
const getMovieList = async (req, res) => {
    try {
        const getList = await movieService.getMovieList();
        res.status(200).json({
            success: true,
            message: "Get Movie list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Movie details by id
const getMovieDetails = async (req, res) => {
    try {
        const getDetails = await movieService.getMovieById(
            req.params.movieId
        )
        if (!getDetails) {
            throw new Error("Movie not found!");
        }

        res.status(200).json({
            success: true,
            message: "Movie details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Movie

const updateMovie = async (req, res) => {
    try {
        const movieId = req.params.movieId;

        const movieExists = await movieService.getMovieById(movieId);
        if (!movieExists) {
            throw new Error("Movie not found!")
        }

        await movieService.updateDetails(movieId, req.body);

        res.status(200).json({
            success: true,
            message: "Movie details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Movie

const deleteRecord = async (req, res) => {
    try {
        const movieId = req.params.movieId;

        const movieExists = await movieService.getMovieById(movieId);
        if (!movieExists) {
            throw new Error("Movie not found!")
        }

        await movieService.deleteMovie(movieId);

        res.status(200).json({
            success: true,
            message: "Movie delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createMovie,
    getMovieList,
    getMovieDetails,
    updateMovie,
    deleteRecord
};
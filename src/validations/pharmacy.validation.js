const Joi = require("joi");

// create Movie
const createMovie = {
    body: Joi.object().keys({
        movie_name: Joi.string().required().trim(),
        director_name: Joi.string().required().trim(),
        actor_name: Joi.string().required().trim(),
        language: Joi.string().required().trim(),
        movie_type: Joi.string().required().trim(),
    }),
};

module.exports = {
    createMovie
};

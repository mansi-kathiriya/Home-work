const Joi = require("joi");

// create Music
const createMusic = {
    body: Joi.object().keys({
        movie_name: Joi.string().required().trim(),
        director_name: Joi.string().required().trim(),
        actor_name: Joi.string().required().trim(),
        language: Joi.string().required().trim(),
        movie_type: Joi.string().required().trim(),
        music: Joi.string().required().trim(),
    }),
};

module.exports = {
    createMusic
};

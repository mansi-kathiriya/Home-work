const Joi = require("joi");

// create Stationary
const createStationary = {
    body: Joi.object().keys({
        stationary_name: Joi.string().required().trim(),
        stationary_location: Joi.string().required().trim(),
        category: Joi.string().required().trim(),
        quantity: Joi.number().integer(),
        price: Joi.number().integer(),
    }),
};

module.exports = {
    createStationary
};

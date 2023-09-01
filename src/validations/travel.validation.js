const Joi = require("joi");

// create Travel
const createTravel = {
    body: Joi.object().keys({
        travel_name: Joi.string().required().trim(),
        phone_number: Joi.number().integer(),
        email: Joi.string().required().trim(),
        country_address: Joi.string().required().trim(),
        payment: Joi.number().integer(),
    }),
};

module.exports = {
    createTravel
};

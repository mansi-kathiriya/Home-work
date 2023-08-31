const Joi = require("joi");

// create user
const createBus = {
    body: Joi.object().keys({
        bus_number: Joi.number().integer(),
        bus_name: Joi.string().required().trim(),
        route: Joi.string().required().trim(),
        pasenger_name: Joi.string().required().trim(),
        seat_no: Joi.number().integer(),
    }),
};

module.exports = {
    createBus
};
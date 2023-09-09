const Joi = require("joi");

// create Hotal
const createHotal = {
    body: Joi.object().keys({
        hotal_branch: Joi.number().integer(),
        hotal_name: Joi.string().required().trim(),
        hotal_location: Joi.string().required().trim(),
        contact_number: Joi.number().integer().required(),
        room_no: Joi.number().integer().required(),
        room_type: Joi.string().required().trim(),
        bus: Joi.string().required().trim(),
    }),
};

module.exports = {
    createHotal
};

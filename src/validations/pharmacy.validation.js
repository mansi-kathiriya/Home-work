const Joi = require("joi");

// create Pharmacy
const createPharmacy = {
    body: Joi.object().keys({
        medication_name: Joi.string().required().trim(),
        Description: Joi.string().required().trim(),
        quantity: Joi.number().integer(),
        price: Joi.number().integer(),
    }),
};

module.exports = {
    createPharmacy
};

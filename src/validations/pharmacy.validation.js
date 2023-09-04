const Joi = require("joi");

// create Pharmacy
const createPharmacy = {
    body: Joi.object().keys({
        medication_name: Joi.string().required().trim(),
        Description: Joi.string().required().trim(),
        quantity: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

module.exports = {
    createPharmacy
};

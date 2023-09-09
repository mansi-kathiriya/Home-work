const Joi = require("joi");

// create Pharmacy
const createPharmacy = {
    body: Joi.object().keys({
        medication_name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        quantity: Joi.number().integer().trim(),
        price: Joi.number().integer().trim(),
    }),
};

module.exports = {
    createPharmacy
};

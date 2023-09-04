const Joi = require("joi");

// create Hotal
const createHotal = {
    body: Joi.object().keys({
        grocery_name: Joi.string().required().trim(),
        category: Joi.string().required().trim(),
        brand: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        quantity: Joi.number().integer().required(),
    }),
};

module.exports = {
    createHotal
};

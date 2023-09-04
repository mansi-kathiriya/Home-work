const Joi = require("joi");

// create jewellery
const createJewellery = {
    body: Joi.object().keys({
        jewellery_name: Joi.string().required().trim(),
        jewellery_material: Joi.string().required().trim(),
        Description: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
    }),
};

module.exports = {
    createJewellery
};

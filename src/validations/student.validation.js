const Joi = require("joi");

// create Student
const createStudent = {
    body: Joi.object().keys({
        student_name: Joi.string().required().trim(),
        contact_number: Joi.number().integer().required(),
        address: Joi.string().required().trim(),
        standard: Joi.number().integer().required(),
    }),
};

module.exports = {
    createStudent
};

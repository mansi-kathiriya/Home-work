const Joi = require("joi");

// create School
const createSchool = {
    body: Joi.object().keys({
        school_branch: Joi.number().integer(),
        school_name: Joi.string().required().trim(),
        school_location: Joi.string().required().trim(),
        student_id: Joi.number().integer(),
        student_name: Joi.string().required().trim(),
        student_contact: Joi.number().integer(),
    }),
};

module.exports = {
    createSchool
};

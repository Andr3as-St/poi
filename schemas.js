const Joi = require("@hapi/joi");


const authSchema = Joi.object({
  username: Joi.string().max(30).lowercase().required(),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9!@#$%&*]{8,30}$"))
    .required(),
  email: Joi.string().email().required(),
});

module.exports = {
  authSchema,
};

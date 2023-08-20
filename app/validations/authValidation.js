const Joi = require('joi');
const InvalidData = require('../exceptions/InvalidData');

async function loginValidation(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  const {error} = schema.validate(req.body, {
    allowUnknown: false,
    abortEarly: false,
  });

  if (error) throw new InvalidData(error.details);

  return next();
}

module.exports ={
  loginValidation,
};


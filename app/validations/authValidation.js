const Joi = require('joi');
const JoiException = require('../exceptions/joiException');

async function loginValidation(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const {error} = schema.validate(req.body, {
    allowUnknown: false,
    abortEarly: false,
  });

  if (error) throw new JoiException(error);

  return next();
}

async function signupValidation(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    roleId: Joi.string().optional(),
  });

  const {error} = schema.validate(req.body, {
    allowUnknown: false,
    abortEarly: true,
  });

  if (error) throw new JoiException(error);

  return next();
}

module.exports ={
  loginValidation,
  signupValidation,
};


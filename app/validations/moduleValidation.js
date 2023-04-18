const Joi = require('joi');
const JoiException = require('../exceptions/joiException');

async function insertValidation(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    icon: Joi.string().optional(),
    url: Joi.string().optional(),
    parentId: Joi.string().optional(),
  });

  const {error} = schema.validate(req.body, {
    allowUnknown: false,
    abortEarly: false,
  });

  if (error) throw new JoiException(error);

  return next();
}

module.exports ={
  insertValidation,
};


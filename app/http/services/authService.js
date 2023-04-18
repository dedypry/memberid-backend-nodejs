const {DURATION, SHORT_HAND_UNIT} = require('../../enums/jwt');
const DataNotFound = require('../../exceptions/DataNotFound');
const userModel = require('../../models/user');
const {setToken} = require('../../utils/jwtToken');
const {generatePassword, randomString, comparePassword} = require('../../utils/string');

async function signUpWithEmail(body) {
  const user = await userModel.query()
      .insert({
        name: body.name,
        email: body.email,
        password: generatePassword(body.password),
        verification_token: randomString(10),
      });

  const result = {
    id: user.id,
    name: user.name,
    email: user.email,
    is_active: user.is_active,
    image: user.image,
  };

  return {
    ...result,
    token: setToken(result, {duration: DURATION, shorthandUnit: SHORT_HAND_UNIT}),
  };
}

async function signInWithEmail(body) {
  const user = await userModel.query().findOne({email: body.email});
  if (!user) throw new DataNotFound('Email Not Registered');

  //   compare password
  await comparePassword(user.password, body.password);
  const dataResult = {
    id: user.id,
    name: user.name,
    email: user.email,
    is_active: user.is_active,
    image: user.image,
  };
  return {
    ...dataResult,
    token: setToken(dataResult, {duration: DURATION, shorthandUnit: SHORT_HAND_UNIT}),
  };
}

module.exports ={
  signUpWithEmail,
  signInWithEmail,
};

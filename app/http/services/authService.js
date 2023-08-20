const {DURATION, SHORT_HAND_UNIT} = require('../../enums/jwt');
const DataNotFound = require('../../exceptions/DataNotFound');
const userModel = require('../../models/user');
const {setToken} = require('../../utils/jwtToken');

async function signInWithEmail(body) {
  const user = await userModel.query()
      .findOne({email: body.email});

  if (!user) throw new DataNotFound('Email Address is not exists');

  const paramToken = {
    id: user.id,
    email: user.email,
  };
  return {
    ...paramToken,
    token: setToken(paramToken, {duration: DURATION, shorthandUnit: SHORT_HAND_UNIT}),
  };
}

module.exports ={
  signInWithEmail,
};

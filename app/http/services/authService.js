const {DURATION, SHORT_HAND_UNIT} = require('../../enums/jwt');
const DataNotFound = require('../../exceptions/DataNotFound');
const RoleUser = require('../../models/roleUser');
const userModel = require('../../models/user');
const {setToken} = require('../../utils/jwtToken');
const {generatePassword, randomString, comparePassword} = require('../../utils/string');

async function signUpWithEmail(body) {
  const user = await userModel.transaction(async (trx)=> {
    const user = await userModel.query(trx)
        .insert({
          name: body.name,
          email: body.email,
          password: generatePassword(body.password),
          verification_token: randomString(10),
        });

    if (body.roleId) {
      await RoleUser.query(trx)
          .insert({
            role_id: body.roleId,
            user_id: user.id,
          });
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      is_active: user.is_active,
      image: user.image,
    };
  });


  return {
    ...user,
    token: setToken(user, {duration: DURATION, shorthandUnit: SHORT_HAND_UNIT}),
  };
}


async function signInWithEmail(body) {
  const user = await userModel.query()
      .modify('listUser')
      .findOne({email: body.email});
  if (!user) throw new DataNotFound('Email Not Registered');
  //   compare password
  await comparePassword(user.password, body.password);
  const paramToken = {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    image: user.image,
    modules: user.modules,
  };
  return {
    ...paramToken,
    token: setToken(paramToken, {duration: DURATION, shorthandUnit: SHORT_HAND_UNIT}),
  };
}

module.exports ={
  signUpWithEmail,
  signInWithEmail,
};

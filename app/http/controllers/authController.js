const {INSERT} = require('../../enums/message');
const SuccessResult = require('../../utils/SuccessResult');
const authService = require('../services/authService');

async function signUp(req, res) {
  const data = await authService.signUpWithEmail(req.body);
  return SuccessResult.make(res).sendMessageData(data, INSERT);
}

async function login(req, res) {
  const data = await authService.signInWithEmail(req.body);
  return SuccessResult.make(res).sendMessageData(data, INSERT);
}

module.exports = {
  signUp,
  login,
};

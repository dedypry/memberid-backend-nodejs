const {INSERT} = require('../../enums/message');
const SuccessResult = require('../../utils/SuccessResult');
const roleModuleService = require('../services/roleModuleService');


async function insert(req, res) {
  const data = await roleModuleService.insertRoleModule(req.body);
  return SuccessResult.make(res).sendMessageData(data, INSERT);
}

module.exports={
  insert,
};

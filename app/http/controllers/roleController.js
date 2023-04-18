const {INSERT, DELETE, UPDATE} = require('../../enums/message');
const SuccessResult = require('../../utils/SuccessResult');
const roleService = require('../services/roleService');

async function list(req, res) {
  const result = await roleService.listRole(req.query);
  SuccessResult.make(res).send(result);
}

async function insert(req, res) {
  const result = await roleService.insertRole(req.body);
  SuccessResult.make(res).sendMessageData(result, INSERT);
}

async function update(req, res) {
  await roleService.updateRole(req.params.id, req.body);
  SuccessResult.make(res).sendMessage(UPDATE);
}

async function destroy(req, res) {
  await roleService.deleteRole(req.params.id);
  SuccessResult.make(res).sendMessage(DELETE);
}


module.exports = {
  list,
  insert,
  update,
  destroy,
};

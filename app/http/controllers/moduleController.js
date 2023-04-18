const {INSERT, UPDATE, DELETE} = require('../../enums/message');
const SuccessResult = require('../../utils/SuccessResult');
const moduleService = require('../services/moduleService');

async function list(req, res) {
  const data = await moduleService.listModule(req.query);
  return SuccessResult.make(res).send(data);
}

async function insert(req, res) {
  const data = await moduleService.insertModule(req.body);
  return SuccessResult.make(res).sendMessageData(data, INSERT);
}

async function update(req, res) {
  await moduleService.updateModule(req.params.id, req.body);
  return SuccessResult.make(res).sendMessage(UPDATE);
}

async function destroy(req, res) {
  await moduleService.deleteModule(req.params.id);
  return SuccessResult.make(res).sendMessage(DELETE);
}

module.exports ={
  list,
  insert,
  update,
  destroy,
};

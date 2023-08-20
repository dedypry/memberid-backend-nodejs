const SuccessResult = require('../../utils/SuccessResult');
const {list} = require('../services/awardsServices');

async function listAward(req, res) {
  const data = await list(req.query);
  return SuccessResult.make(res).send(data);
}

module.exports={
  listAward,
};

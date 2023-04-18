const SuccessResult = require('../../utils/SuccessResult');
const {uploadFile} = require('../../utils/firebase');


async function upload(req, res) {
  const file = await uploadFile(req.files.file);
  return SuccessResult.make(res).send(file);
}


module.exports={
  upload,
};

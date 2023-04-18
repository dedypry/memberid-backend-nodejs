const express = require('express');
const routes = new express.Router();
const version = process.env.VERSION_CONTROL || 'v1';

const roleController = require('../app/http/controllers/roleController');
const {handlerException} = require('../app/exceptions/handler');
const {auth} = require('../app/http/middleware/auth');
const {insertValidation} = require('../app/validations/roleValidation');

/* GET home page. */
routes.group('/api/'+version+'/role', (router)=> {
  router.get('/',
      auth(),
      handlerException(roleController.list),
  );
  router.post('/',
      auth(),
      handlerException(insertValidation),
      handlerException(roleController.insert),
  );
  router.patch('/:id',
      auth(),
      handlerException(insertValidation),
      handlerException(roleController.update),
  );
  router.delete('/:id',
      auth(),
      handlerException(roleController.destroy),
  );
});
module.exports = routes;

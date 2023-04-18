const express = require('express');
const routes = new express.Router();
const version = process.env.VERSION_CONTROL || 'v1';

const moduleController = require('../app/http/controllers/moduleController');
const {handlerException} = require('../app/exceptions/handler');
const {auth} = require('../app/http/middleware/auth');
const {insertValidation} = require('../app/validations/moduleValidation');

/* GET home page. */
routes.group('/api/'+version+'/module', (router)=> {
  router.get('/',
      auth(),
      handlerException(moduleController.list),
  );
  router.post('/',
      auth(),
      handlerException(insertValidation),
      handlerException(moduleController.insert),
  );
  router.patch('/:id',
      auth(),
      handlerException(insertValidation),
      handlerException(moduleController.update),
  );
  router.delete('/:id',
      auth(),
      handlerException(moduleController.destroy),
  );
});
module.exports = routes;

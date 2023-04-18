const express = require('express');
const routes = new express.Router();
const version = process.env.VERSION_CONTROL || 'v1';

const roleModuleController = require('../app/http/controllers/roleModuleController');
const {handlerException} = require('../app/exceptions/handler');
const {auth} = require('../app/http/middleware/auth');

/* GET home page. */
routes.group('/api/'+version+'/role-module', (router)=> {
  router.post('/',
      auth(),
      handlerException(roleModuleController.insert),
  );
});
module.exports = routes;

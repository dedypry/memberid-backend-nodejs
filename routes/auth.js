const express = require('express');
const routes = new express.Router();
const version = process.env.VERSION_CONTROL || 'v1';

const authController = require('../app/http/controllers/authController');
const {handlerException} = require('../app/exceptions/handler');

/* GET home page. */
routes.group('/api/'+version+'/auth', (router)=> {
  router.post('/signup', handlerException(authController.signUp));
  router.post('/login', handlerException(authController.login));
});
module.exports = routes;

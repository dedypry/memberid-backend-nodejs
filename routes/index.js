const express = require('express');
const routes = new express.Router();
const version = process.env.VERSION_CONTROL || 'v1';

const authController = require('../app/http/controllers/authController');
const awardController = require('../app/http/controllers/awardsController');
const {handlerException} = require('../app/exceptions/handler');
const {loginValidation} = require('../app/validations/authValidation');
const {auth} = require('../app/http/middleware/auth');

routes.get('/', function(res, req) {
  res.send('oke');
});

/* GET home page. */
routes.group('/api', (router)=> {
  router.get('/', function(req, res) {
    return res.json('hello words');
  });
});

routes.group('/api/'+version+'/auth', (router)=> {
  router.post('/login', handlerException(loginValidation), handlerException(authController.login));
});

routes.group('/api/'+version+'/awards', (router)=> {
  router.get('/', auth(), handlerException(awardController.listAward));
});
module.exports = routes;

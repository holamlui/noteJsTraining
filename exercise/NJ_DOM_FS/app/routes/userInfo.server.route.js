const express = require('express');
const userInfo = require('../../app/controllers/userInfo.server.controller.js');

module.exports = (app) => {
    const router = express.Router();
    router.route('/getUserInfoById/:userId')
    .get(userInfo.getUserInfoById);

     router.route('/createUserForm/')
    .get(userInfo.createUserForm);

    router.route('/createUser/')
    .post(userInfo.createUser);
  
    app.use('/foodStore', router);
};
const express = require('express');
const foodItem = require('../../app/controllers/foodItem.server.controller.js');

module.exports = (app) => {
    const router = express.Router();
    router.route('/getFoodItemByName/:name')
    .get(foodItem.getFoodItemByName);

    router.route('/getFoodList')
    .get(foodItem.getFoodList);

    router.route('/getFoodItemByProducer')
    .post(foodItem.getFoodItemByProducer);
  
    app.use('/foodStore', router);
};
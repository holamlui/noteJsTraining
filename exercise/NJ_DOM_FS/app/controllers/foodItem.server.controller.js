const _ = require('lodash');
const foodItemFacade = require('../../app/facade/foodItem.server.facade.js');
module.exports = {
    getFoodItemByName : getFoodItemByName,
    getFoodItemByProducer: getFoodItemByProducer,
    getFoodList : getFoodList
}

function getFoodList(req, res, next) {
    foodItemFacade.getFoodList((error, result) => {
        if (error) {
            return next(new Error(error));
        } else {
            //return res.json(result);
            res.render('foodItemList', {result:result});
        }
    });
}

function getFoodItemByName(req, res, next) {
    let params = req.params;
    let name = params.name;
    if (_.isEmpty(name)) {
        return next(new Error('food name is empty'));
    } else {
    foodItemFacade.getFoodItemByName(name, (error, result) => {
        if (error) {
            return next(new Error(error));
        } else {
            //return res.json(result);
            res.render('foodItem', result);
        }
    });
    }
}

function getFoodItemByProducer(req, res, next) {
    let body = req.body;
    let producer = body.producer;
    if (_.isEmpty(producer)) {
        return next(new Error('producer name is empty'));
    } else {
    foodItemFacade.getFoodItemByProducer(producer, (error, result) => {
        if (error) {
            return next(new Error(error));
        } else {
            return res.json(result);
        }
    });
    }
}
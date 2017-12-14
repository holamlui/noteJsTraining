const _ = require('lodash');
const foodItemModel = require('../../app/models/foodItems.json');

module.exports = {
    getFoodItemByName : getFoodItemByName,
    getFoodItemByProducer: getFoodItemByProducer,
    getFoodList : getFoodList
}

function getFoodList(callback) {
    var result = [];
    _.forEach(foodItemModel, (item) => {   
            result.push(item);
    })
    callback(null, result);
}
function getFoodItemByName(name, callback) {
    let result = null;
    _.forEach(foodItemModel, (item) => {
        if (_.isEqual(name, item.name)) {
            result = item;
        }
    })
    callback(null, result);
}

function getFoodItemByProducer(producer, callback) {
    let result = null;
    _.forEach(foodItemModel, (item) => {
        if (_.isEqual(producer, item.producer)) {
            result = item;
        }
    })
    callback(null, result);
}
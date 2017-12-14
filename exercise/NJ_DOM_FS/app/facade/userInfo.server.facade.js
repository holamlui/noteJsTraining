const _ = require('lodash');
const userInfoModel = require('../../app/models/userInfo.json');

module.exports = {
    getUserInfoById : getUserInfoById,
}

function getUserInfoById(userId, callback) {
    let result = null;
    _.forEach(userInfoModel, (user) => {
        if (_.isEqual(userId, user.userId)) {
            result = user;
        }
    })
    callback(null, result);
}

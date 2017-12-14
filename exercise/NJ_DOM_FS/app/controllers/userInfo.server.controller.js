const _ = require('lodash');
const userInfoFacade = require('../../app/facade/userInfo.server.facade.js');
const userInfoModel = require('../../app/models/userInfo.json');
const uuidv4 = require('uuid/v4');
module.exports = {
    getUserInfoById: getUserInfoById,
    createUserForm: createUserForm,
    createUser : createUser
}

function getUserInfoById(req, res, next) {
    let params = req.params;
    let userId = params.userId;
    if (_.isEmpty(userId)) {
        return next(new Error('User id is empty'));
    } else {
        userInfoFacade.getUserInfoById(userId, (error, result) => {
            if (error) {
                return next(new Error(error));
            } else {
                //return res.json(result);
                res.render('userInfo', result);
            }
        });
    }
}
function createUserForm(req, res, next) {
    res.render('createUser', { title: 'Create User' });
}
function createUser(req, res, next) {
    var users = userInfoModel;
    var user = {
        userInfoId: uuidv4(),
        userId: req.body.userId,
        userName: req.body.userName,
        password: req.body.password,
        role: 'Customer',
        roleLevel: 1,
        createDatetime: "2017-08-14T08:06:48.905Z",
        updateDatetime: "2017-08-14T08:06:48.905Z",
        isSupport: false
    }
    users.push(user);
    console.log(users);
}
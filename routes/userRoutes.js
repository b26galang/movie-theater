const express = require('express');
const Router = express.Router();
const { validateUsername, validateShowTitle } = require('../validationRules');

const {
    getUsers,
    getOneUser,
    getAllUsersWhoWatchedShow,
    associateUserWithShow,
    updateUsername
} = require('../controllers/userController')

// get all users
Router.get('/', getUsers);

// get user by id
Router.get('/:userId', getOneUser);

// get all shows watched by user
Router.get('/:userId/shows', getAllUsersWhoWatchedShow);

// associate users with show they have watched
Router.put('/:userId/shows/:showId', associateUserWithShow);

// update username
Router.put('/:userId', updateUsername);

module.exports = Router;
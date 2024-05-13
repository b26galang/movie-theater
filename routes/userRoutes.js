const express = require('express');
const Router = express.Router();

const {
    getUsers,
    getOneUser,
    getAllUsersWhoWatchedShow,
    associateUserWithShow,
    validateUsername,
    updateUserUsername
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
Router.put('/:userId', validateUsername, updateUserUsername);

module.exports = Router;
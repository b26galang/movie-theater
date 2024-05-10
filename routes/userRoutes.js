const express = require('express');
const Router = express.Router();
const { validateUserEmail, validateShowTitle } = require('../validationRules');

const {
    getUsers,
    getOneUser,
    getAllShowsWatchedByUser,
    associateUserWithShow
} = require('../controllers/userController')

// get all users
Router.get('/', [validateUserEmail()], getUsers);

// get user by id
Router.get('/:userId', [validateUserEmail()], getOneUser);

// get all shows watched by user
Router.get('/:userId/shows', [validateShowTitle()], getAllShowsWatchedByUser);

// associate users with show they have watched
Router.put('/:userId/shows/:showId', associateUserWithShow);

module.exports = Router;
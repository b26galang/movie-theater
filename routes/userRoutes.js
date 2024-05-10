const express = require('express');
const Router = express.Router();

const {
    getUsers,
    getOneUser,
    getAllShowsWatchedByUser,
    associateUserWithShow
} = require('../controllers/userController')

// get all users
Router.get('/', getUsers);

// get user by id
Router.get('/:userId', getOneUser);

// get all shows watched by user
Router.get('/:userId/shows', getAllShowsWatchedByUser);

// associate users with show they have watched
Router.put('/:userId/shows/:showId', associateUserWithShow);

module.exports = Router;
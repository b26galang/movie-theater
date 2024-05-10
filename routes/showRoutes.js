const express = require('express');
const Router = express.Router();
const { validateShowTitle, validateUserEmail } = require('../validationRules');

const {
    getShows,
    getOneShow,
    getShowsByGenre,
    getAllUsersWhoWatchedShow,
    updateAvailablePropertyOfShow,
    deleteShow
} = require('../controllers/showController');

// get all shows
Router.get('/', [validateShowTitle()], getShows);

// get show by genre
Router.get('/genre', [validateShowTitle()], getShowsByGenre);

// get show by id
Router.get('/:showId',[validateShowTitle()], getOneShow);

// get user who watched show
Router.get('/:showId/users', [validateUserEmail()], getAllUsersWhoWatchedShow);

// update the available property of show
Router.put('/:showId', updateAvailablePropertyOfShow);

// delete a show by id
Router.delete('/:showId', deleteShow);

module.exports = Router;
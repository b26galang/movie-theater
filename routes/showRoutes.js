const express = require('express');
const Router = express.Router();
const { validateShowTitle, validateUsername } = require('../validationRules');

const {
    getShows,
    getOneShow,
    getShowsByGenre,
    getAllShowsWatchedByUser,
    updateAvailablePropertyOfShow,
    updateShowRating,
    updateShowTitle,
    deleteShow
} = require('../controllers/showController');

// get all shows
Router.get('/', getShows);

// get show by genre
Router.get('/genre', getShowsByGenre);

// get show by id
Router.get('/:showId', getOneShow);

// get user who watched show
Router.get('/:showId/users', getAllShowsWatchedByUser);

// update show rating
Router.put('/:showId/rating', updateShowRating);

// update show title
Router.put('/:showId/title', updateShowTitle);

// update the available property of show
Router.put('/:showId', updateAvailablePropertyOfShow);

// delete a show by id
Router.delete('/:showId', deleteShow);

module.exports = Router;
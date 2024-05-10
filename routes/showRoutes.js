const express = require('express');
const Router = express.Router();

const {
    getShows,
    getOneShow,
    getShowByGenre,
    getAllUsersWhoWatchedShow,
    updateAvailablePropertyOfShow,
    deleteShow,

} = require('../controllers/showController');

// get all shows
Router.get('/', getShows);

// get show by id
Router.get('/:showId', getOneShow);

// get show by genre
Router.get('/:genre', getShowByGenre);

// get user who watched show
Router.get('/:showId/users', getAllUsersWhoWatchedShow);

// update the available property of show
Router.put('/:showId', updateAvailablePropertyOfShow);

// delete a show by id
Router.delete('/:showId', deleteShow);

module.exports = Router;
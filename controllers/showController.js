const { Show } = require('../models/index');

// get all shows
const getShows = async (req, res) => {
    try {
        const shows = await Show.findAll();
        if (shows) {
            res.status(200).json(shows);
        }
    } catch (error) {
        res.status(500).send("Error getting all shows: " + error);
    }
}

// get show by id
const getOneShow = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);
        if (show) {
            res.status(200).json(show);
        }
    } catch (error) {
        res.status(500).send("Error getting show: " + error);
    }
}

// get show(s) by particular genre
const getShowsByGenre = async (req, res) => {
    try {
        const showGenre = req.query.genre;
        const shows = await Show.findAll({ where: { genre: showGenre} });
        if (shows.length > 0) {
            res.status(200).json(shows);
        } else {
            res.status(404).send("No shows found of that genre.");
        }
    } catch (error) {
        res.status(500).send("Error getting show(s) by genre: " + error);
    }
}

// get user who watched show
const getAllUsersWhoWatchedShow = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);

        if (show) {
            const users = await show.getUsers();
            res.status(200).json(users);
        }

    } catch (error) {
        res.status(500).send("Error getting all users who watched show: " + error);
    }
}

// update available property of a show
const updateAvailablePropertyOfShow = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);
        const availableInfo = req.body;
        if (show) {
            await show.update(availableInfo);
            res.status(200).json(show)
        }
    } catch (error) {
        res.status(500).send("Error updating the available property of show: " + error);
    }
}

// delete a show by id
const deleteShow = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);
        if (show) {
            await show.destroy();
            res.status(200).send("Show has been removed from the database successfully!");
        }
    } catch (error) {
        res.status(500).send("Error deleting show: " + error);
    }
}

module.exports = {
    getShows,
    getOneShow,
    getShowsByGenre,
    getAllUsersWhoWatchedShow,
    updateAvailablePropertyOfShow,
    deleteShow
}
const { Show } = require('../models/index');
const { check, validationResult } = require('express-validator');

// validation rules:

// check if show title is less than 25 characters
// fix
const titleMaxLength = 25;
const validateShowTitle = () => {
    return check('title').isLength({ max: titleMaxLength }).withMessage(`The title of a show cannot exceed ${titleMaxLength} characters`);
}

// check if status field is empty or contains white space and has a minimum of 5 characters and a maximum of 25 characters
const validateShowStatus = () => {

}

// check if rating field is empty or contains white space
const validateShowRating = () => {

}

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

// get all shows watched by a user 
const getAllShowsWatchedByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);

        if (user) {
            const shows = await user.getShows();
            res.status(200).json(shows);
        }

    } catch (error) {
        res.status(500).send("Error getting all shows watched by a user: " + error);
    }
}

// update the rating of a show
const updateShowRating = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);
        const showRating = req.body;
        if (show) {
            await show.update(showRating);
            res.status(200).json(show);
        }
    } catch (error) {
        res.status(500).send("Error updating the rating of a show: " + error);
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

// update the title of a show
const updateShowTitle = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);
        const showTitle = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        if (show) {
            await show.update(showTitle);
            res.status(200).json(show);
        }
    } catch (error) {
        res.status(500).send("Error updating the title of a show: " + error);
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
    validateShowTitle,
    validateShowStatus,
    validateShowRating,
    getShows,
    getOneShow,
    getShowsByGenre,
    getAllShowsWatchedByUser,
    updateAvailablePropertyOfShow,
    updateShowRating,
    updateShowTitle,
    deleteShow,
}
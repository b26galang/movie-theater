const { Show, User } = require('../models/index');

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
//fix
const getShowByGenre = async (req, res) => {
    try {
        const showGenre = req.params.genre;
        const show = await Show.findAll({ where: { genre: showGenre}});
        if (show) {
            res.status(200).json(show);
        }
    } catch (error) {
        res.status(500).send("Error getting show(s) by genre: " + error);
    }
}

// get user who watched show
// retrieve the show
// find the userId associated with the show in watched table
// fix
const getAllUsersWhoWatchedShow = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);
        // const user = 
        // if (show && apprentice) {
        //    res.status(200).json(user);
        // }
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
    getShowByGenre,
    getAllUsersWhoWatchedShow,
    updateAvailablePropertyOfShow,
    deleteShow
}
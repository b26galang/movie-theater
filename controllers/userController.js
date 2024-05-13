const { Show, User } = require('../models/index');
const { body, validationResult } = require('express-validator');

// validation rule(s):

// validate that the username is an email
const validateUsername = [
    body('username').isEmail().withMessage("Username must be an email address")
];

// get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if (users) {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).send("Error getting all users: " + error);
    }
}

// get user by id
const getOneUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);
        if (user) {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send("Error getting user by id: " + error);
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

// associate a user with a show they have watched
const associateUserWithShow = async (req, res) => {
    try {
        const userId = req.params.userId;
        const showId = req.params.showId;
        const user = await User.findByPk(userId);
        const show = await Show.findByPk(showId);
        if (show && user) {
            await user.addShow(show);
            res.send("User has been successfully associated with a show they have watched!");
        }
    } catch (error) {
        res.status(500).send("Error associating user with a show they have watched: " + error);
    }
}

// update username
const updateUserUsername = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);
        const { username } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        if (user) {
            await user.update({ username: username });
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send("Error updating username: " + error)
    }
}

module.exports = {
    getUsers,
    getOneUser,
    getAllUsersWhoWatchedShow,
    associateUserWithShow,
    validateUsername,
    updateUserUsername
}
const { Show, User } = require('../models/index');

// get all users
const getUsers = async (req, res) => {
    try { 
        const users = await User.findAll();
        if (users) {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).send("Error getting all users " + error);
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
        res.status(500).send("Error getting user by id " + error);
    }
}

// get all shows watched by a user 
// fix
const getAllShowsWatchedByUser = async (req, res) => {
    try { 
        const userId = req.params.userId;
        const user = findByPk(userId);

    } catch (error) {
        res.status(500).send("Error getting all shows watched by a user " + error);
    }
}

// associate a user with a show they have watched
//fix
const associateUserWithShow = async (req, res) => {
    try { 
        const userId = req.params.userId;
        const showId = req.params.showId;
        const user = User.findByPk(userId);
        const show = Show.findByPk(showId);
        if (show && user) {
            // await show.addUser(user);
            res.status("User has been successfully associated with a show they have watched!");
        }
    } catch (error) {
        res.status(500).send("Error associating user with a show they have watched " + error);
    }
}

module.exports = {
    getUsers,
    getOneUser,
    getAllShowsWatchedByUser,
    associateUserWithShow
}
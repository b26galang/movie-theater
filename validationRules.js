const { ExpressValidator } = require('express-validator');
// check if username is an email address
const validateUsername = () => {
    // return check('username').isEmail().withMessage('The username must be an email address');
}

const titleMaxLength = 25;

// check if show title is less than 25 characters
const validateShowTitle = () => {
    // return check('title').isLength({ max: titleMaxLength }).withMessage(`The title of a show must be a maximum of ${titleMaxLength} characters`);
}

// check if status field is empty or contains white space and has a minimum of 5 characters and a maximum of 25 characters
const validateShowStatus = () => {

}

// check if rating field is empty or contains white space
const validateShowRating = () => {

}

module.exports = {
    validateUsername,
    validateShowTitle,
    validateShowStatus,
    validateShowRating
}
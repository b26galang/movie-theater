const { check } = require('express-validator');

const titleMaxLength = 25;

const validateShowTitle = () => {
    return check('title').isLength({ max: titleMaxLength }).withMessage(`The title of a show must be a maximum of ${titleMaxLength} characters`);
}

const validateUserEmail = () => {
    return check('username').isEmail().withMessage('The username must be an email address');
}

module.exports = {
    validateShowTitle,
    validateUserEmail
}
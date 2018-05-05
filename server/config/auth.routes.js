const authContoller = require('../controllers/auth');
const router = require('express').Router();

module.exports = router
    .post('/auth/login', authContoller.login)
    .post('/auth/register', authContoller.register)
    .delete('/auth/login', authContoller.logout);

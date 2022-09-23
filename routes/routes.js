const router = require('express').Router();

const { createUser, createEvent, getUsers, getUser } = require('../usercreations/usercreation');
router.post('/insert', createUser);
router.post('/add/:user_id/event', createEvent);
router.get('/get', getUsers);
router.get('/user/:user_id', getUser);

module.exports = router; 
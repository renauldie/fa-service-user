var express = require('express');
var router = express.Router();

const usersHandler = require('./handler/users');

router.get('/:id', usersHandler.getUser);
router.get('/', usersHandler.getUsers);
router.post('/login', usersHandler.login);
router.put('/:id', usersHandler.update);
router.post('/:id', usersHandler.logout);

module.exports = router;

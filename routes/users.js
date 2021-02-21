var express = require('express');
var router = express.Router();

const usersHandler = require('./handler/users');

router.post('/login', usersHandler.login);
router.put('/:id', usersHandler.update);

module.exports = router;

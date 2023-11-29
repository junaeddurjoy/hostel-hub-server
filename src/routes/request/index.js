var express = require('express');
const Request = require('../../models/Request');

var router = express.Router();

router.get('/user',findAll )
router.delete('/user/:id', deleteOne );
router.get('/user/:id', findOne);

module.exports = router
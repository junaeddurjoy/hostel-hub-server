var express = require('express');
const Request = require('../../models/Request');
const findAll = require('../../api/user/controllers/findAll');
const deleteOne = require('../../api/user/controllers/deleteOne');
const findOne = require('../../api/user/controllers/findOne');

var router = express.Router();

router.get('/user', findAll )
router.delete('/user/:id', deleteOne );
router.get('/user/:id', findOne);

module.exports = router
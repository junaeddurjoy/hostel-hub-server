var express = require('express');
const User = require('../../models/User');
const findAll = require('../../api/user/controllers/findAll');
const deleteOne = require('../../api/user/controllers/deleteOne');
const findOne = require('../../api/user/controllers/findOne');
const updateOne = require('../../api/user/controllers/updateOne');

var router = express.Router();

router.get('/user', findAll )
router.delete('/user/:id', deleteOne );
router.get('/user/:id', findOne);
router.put('/user/:id', updateOne);

module.exports = router
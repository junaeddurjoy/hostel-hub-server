var express = require('express');
const User = require('../../models/User');

var router = express.Router();

router.get('/user',findAll )
router.delete('/user/:id', deleteOne );
router.get('/user/:id', findOne);
router.put('/user/:id', updateOne);

module.exports = router
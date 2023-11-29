var express = require('express');
const Meal = require('../../models/Meal');
const findAll = require('../../api/meal/controllers/findAll');
const deleteOne = require('../../api/meal/controllers/deleteOne');
const findOne = require('../../api/meal/controllers/findOne');
const updateOne = require('../../api/meal/controllers/updateOne');



var router = express.Router();

router.get('/meal',findAll )
router.delete('/meal/:id', deleteOne );
router.get('/meal/:id', findOne);
router.put('/meal/:id', updateOne);

module.exports = router
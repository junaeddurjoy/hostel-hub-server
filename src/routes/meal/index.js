var express = require('express');
const Meal = require('../../models/Meal');



var router = express.Router();

router.get('/meal', async (req, res) => {
    const cursor = await Meal.find(querry);
    res.send(result);
  })

module.exports = router
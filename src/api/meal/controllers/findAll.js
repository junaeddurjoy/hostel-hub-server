const Meal = require("../../../models/Meal");

const findAll = async (req, res) => {
  const cursor = Meal.find();
  const result = await cursor;
  res.send(result);
}

module.exports = findAll
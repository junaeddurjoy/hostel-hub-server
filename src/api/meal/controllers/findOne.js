const Meal = require("../../../models/Meal");

const findOne = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await Meal.findOne(query);
    res.send(result);
  }
module.exports = findOne


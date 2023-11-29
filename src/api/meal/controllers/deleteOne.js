const Meal = require("../../../models/Meal");

const deleteOne = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await Meal.deleteOne(query);
    res.send(result)
  }
module.exports = deleteOne



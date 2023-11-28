const findAll = async (req, res) => {
    const cursor = await Meal.find(querry);
    res.send(result);
  }

module.exports = findAll
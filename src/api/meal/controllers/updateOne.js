const Meal = require("../../../models/Meal");

const updateOne = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) }
    const options = { upsert: true };
    const updatedApply = req.body;
    const apply = {
      $set: {
        item: updatedApply.item,
        type: updatedApply.type,
        image: updatedApply.image,
        ingredients: updatedApply.ingredients,
        price: updatedApply.price,
        description: updatedApply.description,
        post_date: updatedApply.post_date,
        rating: updatedApply.rating,
        like: updatedApply.like,
        reviews: updatedApply.reviews,
        admin: updatedApply.admin,
        email: updatedApply.email,
        launch: updatedApply.launch
      }
    }
    const result = await Meal.updateOne(filter, apply, options);
    res.send(result);
  }

module.exports = updateOne
const User = require("../../../models/User");

const updateOne = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) }
    const options = { upsert: true };
    const updatedApply = req.body;
    const apply = {
      $set: {
        name: updatedApply.name,
        email: updatedApply.email,
        role: updatedApply.role,
        membership: updatedApply.membership,
      }
    }
    const result = await User.updateOne(filter, apply, options);
    res.send(result);
  }

module.exports = updateOne
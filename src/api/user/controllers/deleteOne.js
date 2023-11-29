const User = require("../../../models/User");

const deleteOne = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await User.deleteOne(query);
    res.send(result)
  }
module.exports = deleteOne



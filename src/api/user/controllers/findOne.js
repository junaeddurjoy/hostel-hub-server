const User = require("../../../models/User");

const findOne = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await User.findOne(query);
    res.send(result);
  }
module.exports = findOne


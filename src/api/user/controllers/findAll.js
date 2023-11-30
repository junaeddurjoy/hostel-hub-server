const User = require("../../../models/User");

const findAll = async (req, res) => {
    const cursor = await User.find();
    const result = await cursor;
    res.send(result);
  }

module.exports = findAll
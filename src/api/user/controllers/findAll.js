const User = require("../../../models/User");

const findAll = async (req, res) => {
    const cursor = await User.find(querry);
    res.send(result);
  }

module.exports = findAll
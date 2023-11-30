const Request = require("../../../models/Request");

const findAll = async (req, res) => {
    const cursor = await Request.find();
    const result = await cursor;
    res.send(result);
  }

module.exports = findAll
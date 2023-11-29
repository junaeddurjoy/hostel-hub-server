const Request = require("../../../models/Request");

const findAll = async (req, res) => {
    const cursor = await Request.find(querry);
    res.send(result);
  }

module.exports = findAll
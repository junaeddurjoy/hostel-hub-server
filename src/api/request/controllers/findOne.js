const Request = require("../../../models/Request");

const findOne = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await Request.findOne(query);
    res.send(result);
  }
module.exports = findOne


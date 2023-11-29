const Request = require("../../../models/Request");

const deleteOne = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await Request.deleteOne(query);
    res.send(result)
  }
module.exports = deleteOne



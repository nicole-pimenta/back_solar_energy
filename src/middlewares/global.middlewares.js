const mongoose = require("mongoose");

const isValidId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "invalid ID" });
  }

  next();
};

module.exports = { isValidId };

const Calculate = require("../models/Calculate");

const create = (body) => Calculate.create(body);

module.exports = {
  create,
};

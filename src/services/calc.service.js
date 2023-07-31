const Calculate = require("../models/Calculate");

const create = (body) => Calculate.create(body);

const read = () => Calculate.find();

module.exports = {
  create,
  read,
};

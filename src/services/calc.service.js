const Calculate = require("../models/Calculate");

const create = (body) => Calculate.create(body);

const read = () => Calculate.find();

const readById = (id) => Calculate.findById(id);

module.exports = {
  create,
  read,
  readById,
};

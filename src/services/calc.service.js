import Calculate from "../models/Calculate.js";

const create = (body) => Calculate.create(body);

const read = () => Calculate.find();

const readById = (id) => Calculate.findById(id);

export default {
  create,
  read,
  readById,
};

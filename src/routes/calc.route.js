const route = require("express").Router();

const { isValidId } = require("../middlewares/global.middlewares");

const calcController = require("../controllers/calc.controller");

route.post("/", calcController.create);

route.get("/", calcController.read);

route.get("/:id", isValidId, calcController.readById);

module.exports = route;

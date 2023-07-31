const route = require("express").Router();

const calcController = require("../controllers/calc.controller");

route.post("/", calcController.create);

route.get("/", calcController.read);

route.get("/:id", calcController.readById);

module.exports = route;

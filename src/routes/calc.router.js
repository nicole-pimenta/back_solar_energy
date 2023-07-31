import express from "express";

const router = express.Router();

import isValidId from "../middlewares/global.middlewares.js";

import calcController from "../controllers/calc.controller.js";

router.post("/", calcController.create);

router.get("/", calcController.read);

router.get("/:id", isValidId, calcController.readById);

export default router;

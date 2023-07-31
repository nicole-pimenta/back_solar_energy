import calcService from "../services/calc.service.js";
import {
  calculateSolarPanelQuantity,
  calculateMicroinverterQuantity,
  solarPanelTotalLength,
  availableTotalArea,
} from "./functions.js";

const create = async (req, res) => {
  try {
    const { energy, width, height } = req.body;

    if (!energy || !width || !height) {
      res.status(400).send({ error: "Submit all fields for registration" });
    }

    const solarPanelQuantity = calculateSolarPanelQuantity(energy);

    const microinverterQuantity =
      calculateMicroinverterQuantity(solarPanelQuantity);

    const solarPanelLength = solarPanelTotalLength(solarPanelQuantity);

    const availableArea = availableTotalArea(width, height);

    const solarSystemData = {
      solarPanelQuantity,
      microinverterQuantity,
      solarPanelLength,
      availableArea,
    };
    const calculate = await calcService.create(solarSystemData);

    return res.status(201).json(solarSystemData);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

const read = async (req, res) => {
  try {
    const data = await calcService.read();

    if (data.length === 0) {
      return res.status(400).send({ message: "There are no registered data" });
    }

    res.status(200).send(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

const readById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await calcService.readById(id);
    res.status(200).send(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

export default { create, read, readById };

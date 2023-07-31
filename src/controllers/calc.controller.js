const calcService = require("../services/calc.service");

// const getNextId = () => {
//   const lastItem = database.sort((a, b) => a.id - b.id).at(-1);

//   if (!lastItem) return 1;
//   return lastItem.id + 1;
// };

const calculateSolarPanelQuantity = (energy) => {
  return Math.ceil(parseInt(energy) / 550);
};

const calculateMicroinverterQuantity = (solarPanelQuantity) => {
  return Math.ceil(solarPanelQuantity / 4);
};

const solarPanelTotalLength = (solarPanelQuantity) => {
  return solarPanelQuantity * (1.95 * 1.1);
};

const availableTotalArea = (width, height) => {
  return Number((Number(width) * Number(height)).toFixed(2));
};

const create = async (req, res) => {
  try {
    const { energy, width, height } = req.body;

    if (!energy || !width || !height) {
      res.status(400).send({ error: "Submit all fields for registration" });
    }

    const calculate = await calcService.create(req.body);

    if (!calculate) {
      return res.status(400).send({ message: "error " });
    }

    const solarPanelQuantity = calculateSolarPanelQuantity(energy);

    const microinverterQuantity =
      calculateMicroinverterQuantity(solarPanelQuantity);

    const solarPanelLength = solarPanelTotalLength(solarPanelQuantity);

    const availableArea = availableTotalArea(width, height);

    const solarSystemData = {
      id: calculate._id,
      solarPanelQuantity,
      microinverterQuantity,
      solarPanelLength,
      availableArea,
    };

    return res.status(201).json(solarSystemData);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: error });
  }
};

const read = (req, res) => {
  res.send("leituraaaa");
};

const readById = (req, res) => {
  res.send("read by id");
};

module.exports = { create, read, readById };

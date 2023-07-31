export const calculateSolarPanelQuantity = (energy) => {
  return Math.ceil(parseInt(energy) / 550);
};

export const calculateMicroinverterQuantity = (solarPanelQuantity) => {
  return Math.ceil(solarPanelQuantity / 4);
};

export const solarPanelTotalLength = (solarPanelQuantity) => {
  return solarPanelQuantity * (1.95 * 1.1);
};

export const availableTotalArea = (width, height) => {
  return Number((Number(width) * Number(height)).toFixed(2));
};

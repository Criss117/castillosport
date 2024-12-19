export const formatCurrency = (value: number, currency = "EUR") => {
  return value.toLocaleString("es-ES", {
    style: "currency",
    currency,
  });
};

export const calculatePercent = (
  originalValue: number,
  discountedValue: number
) => {
  if (
    originalValue <= 0 ||
    discountedValue < 0 ||
    discountedValue > originalValue
  ) {
    throw new Error("Los valores ingresados no son válidos.");
  }

  const descuento = ((originalValue - discountedValue) / originalValue) * 100;
  return parseFloat(descuento.toFixed(2));
};

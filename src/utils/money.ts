export const toDecimalString = (value: number | string) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric) || numeric < 0) {
    throw new Error("Invalid money value");
  }
  return numeric.toFixed(2);
};

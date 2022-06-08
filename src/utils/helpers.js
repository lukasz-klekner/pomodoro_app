export const prefixWithZeros = (value, amountOfZeros) =>
  value.toString().padStart(amountOfZeros, '0')

export const clamp = (min, value, max) => Math.min(Math.max(min, value), max)

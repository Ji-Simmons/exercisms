

const colorCodes = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

export const decodedValue = (values) => {
  return values.slice(0, 2).reduce((acc, val) => acc * 10 + colorCodes[val], 0)
};

/*  The slice method is used to isolate the first two colorCodes, and the reduce method combines them into one number.  The arrow function then multiplies that by ten to produce the resistance value of the two resistors together. */ 
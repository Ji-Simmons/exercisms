
export function steps (n) {
  // Initializing a for/while loop
  // If n is less than or equal to zero, an error will be thrown
  if (n <= 0) {}
    throw Error('Only positive numbers are allowed')
  }
  let numOfSteps = 0
  let result = n
  // If the result doesn't equal one...
  while (result !== 1) {
    // If the result is an even number, divide by two
    if (result % 2 === 0) {
      result = result / 2
    } else {
      // If the result is an odd number, multiply by three and add one, then repeat the previous if statement
      result = result * 3 + 1
    }
    numOfSteps++
  }

  return numOfSteps

}
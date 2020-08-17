
export const reverseString = (str) => {
  return str
  // Splits the string into an array
    .split('')
   // Reverses the order of the array 
    .reverse()
   // Concatenates the array elements back into a string 
    .join('')
}


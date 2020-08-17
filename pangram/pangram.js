
export const isPangram = (value) => {
  return new Set(value.toLowerCase().replace(/[^a-z]/g, '')).size === 26
};

// Set converts the input value to lower case, and uses a regular expression to replace all unique letters from the input value, and then checks if there were 26 of them.  Which may be a surprise, but is also the number of letters in the alphabet.
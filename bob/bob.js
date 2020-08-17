
export const hey = (m) => {
    // Trim removes white space from both ends of the string.
  const message = m.trim()
  // isAllCapital uses a regular expression to check if the entire message is capitalized.
  const isAllCapital = str => str.split('').every(char => char === char.toUpperCase() && str.match(/[a-z]/i))
  // The variable hasQues checks if the last character in the string is a question mark. 
  const hasQues = str => str.charAt(str.length - 1) === '?'
  // The variable hasSpace checks if the message contains any characters.
  const hasSpace = str => str.split('').every(char => char.includes("\n", "\t", "\r", " "))

  // If the message has a question mark and is in all capital letters
  if ((isAllCapital(message) && hasQues(message))) {
      return 'Calm down, I know what I\'m doing!'
  // If the message is in all capitals without a question mark  
  } else if (isAllCapital(message) && message.length) {
      return 'Whoa, chill out!'
  // If the message is a question and isn't all capital letters    
  } else if (hasQues(message)) {
      return 'Sure.'
// If the message is an empty string
  } else if (hasSpace(message) || message === '') {
      return 'Fine. Be that way!'
 // If the message is anything else     
  } else {
      return 'Whatever.'
  }
};

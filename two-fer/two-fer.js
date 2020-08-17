

export const twoFer = (name='you') => {
  return `One for ${name}, one for me.`
};

/* The parameter 'name' is given the string 'you' so that when the initial test is run and no name is given, the output still matches what is expected.  The Expect function is used to test the value of Name, and works in conjunction with the matcher function called .toEqual.  Expect compares the string produced by the twoFer function against what .toEqual says it should be and if it is as expected, the sentence is returned and the test passes. */
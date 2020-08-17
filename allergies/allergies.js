const allergensValue = {
  // index of allergens
  'eggs': 1, 'peanuts': 2, 'shellfish': 4, 'strawberries': 8,
  'tomatoes': 16, 'chocolate': 32, 'pollen': 64, 'cats': 128
};

export class Allergies {
  constructor(inputNumber) {
    // the inputNumber will be used as allergyNumber
    this.allergyNumber = inputNumber;
  }
  // assigns a list of variables
  list() {
    // creating allergyList as an array
    let allergyList = [];
    // if the values queried fit into the allergensValue, push the key (allergen name) into an array called allergyList
    for (const [key, value] of Object.entries(allergensValue)) {
      if (this.allergyNumber & value) {
        allergyList.push(key);
      }
    }
    return allergyList;
  }

  allergicTo(item) {
    return Boolean(this.allergyNumber & allergensValue[item]);
  }
}
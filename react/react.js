export class InputCell {
  constructor(value) {
    this.value = value;
    this.callbacks = [];
  }

  setValue(value) {
    // if this value is different from the existing value, update existing value, including each callback
    if (this.value !== value) {
      this.value = value;
      this.callbacks.forEach((cell) => cell.update(this));
    }
  }

  addCallback(cb) {
    // push new callback onto array of callbacks
    this.callbacks.push(cb);
  }
}

export class ComputeCell {
  constructor(inputOrComputeCells, fn) {
    this.inputOrComputeCells = inputOrComputeCells;
    this.fn = fn;
    this.previousValue = fn(inputOrComputeCells);
    this.callbacks = [];
    inputOrComputeCells.forEach((cell) => cell.addCallback(this));
  }

  get value() {
    // retrieve value from state 
    return this.fn(this.inputOrComputeCells);
  }

  update() {
     // if this value is different from the existing value, update existing value, including each callback
    if (this.previousValue !== this.value) {
      this.previousValue = this.value;
      this.callbacks.forEach((cell) => cell.update(this));
    }
  }

  addCallback(cb) {
    // push new callback onto array of callbacks
    this.callbacks.push(cb);
  }

  removeCallback(cb) {
    // create array of callbacks without the cells that don't match
    this.callbacks = this.callbacks.filter((cell) => cell !== cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = [];
  }

  update(computeCell) {
    // change values array by the computeCell function
    this.values.push(this.fn(computeCell));
  }
}
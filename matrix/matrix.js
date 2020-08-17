export class Matrix {
    constructor(input) {
    
    // splits input into a new row and declares it as a variable named MATRIX
    this.matrix = input.split('\n')
    
    // converts entry to a string, maps it to an array, uses .split to convert it to an array of utf-codeunits, maps it all to an array and sets the ROW in state
    this.rows = this.matrix.map(e=>e.split(" ")).map(e=>e.map(e=>parseInt(e)))
     
    // map provides a callback for each element in the row array that has an index which was not deleted or not assigned value and creates a new array from the results, names it as COLUMN and declares it to state
    this.columns = this.rows[0].map((_,i)=> this.rows.map(row => row[i]));
    }}
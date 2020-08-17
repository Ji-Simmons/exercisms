
export const rows = totalRows => {
  // If total rows equals zero, it will return an empty array.
  if (totalRows == 0) {
    return [];
  }

  let newRows = [[1]];
// Initiate a for loop for the row index
  for (let rowIndex = 2; rowIndex <= totalRows; rowIndex++) {
// The prevRow is the newRows length that we established above minus one    
    let prevRow = newRows[newRows.length - 1];

    let newRow = [];
// Initiate a for loop for the column
    for (let colIndex = 0; colIndex < prevRow.length + 1; colIndex++) {
// This sets up two different variables that will be the basis for following rows
// aboveLeft is the previous row's column index minus one, OR zero
      let aboveLeft = prevRow[colIndex - 1] || 0;
// Same thing as aboveLeft, without subtracting one      
      let aboveRight = prevRow[colIndex] || 0;
// The newRow pushes an array that is the sum of aboveLeft and aboveRight
      newRow.push(aboveLeft + aboveRight);
    }

    newRows.push(newRow);
  }

  return newRows;
};
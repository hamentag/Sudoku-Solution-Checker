/**
 * @param grid - a sudoku grid (represented by an array of arrays).
 * @param row - a row index.
 * @returns an array containing the numbers in the specified row.
 */
function getRow(grid, row) {
    return grid[row]}


/**
 * @param grid - a sudoku grid.
 * @param column - a column index.
 * @returns an array containing the numbers in the specified column.
 */
function getColumn(grid, column) {
    return grid.map(array => { return array[column] });
}

// This function should accept three arguments: a sudoku grid, and an x and y coordinate for one of the puzzle's 3x3 subgrids. The function should return an array with all the numbers in the specified subgrid.
/**
 * @param grid - a sudoku grid.
 * @param x - x coordinate for one of the puzzle's 3x3 subgrids.
 * @param y - y coordinate for the puzzle.
 * @returns an array containing the numbers in the specified subgrid.
 */
function getSection(grid, x, y) {
    const subgrid = [];
    for(let i=3*y; i<3*y+3;i++){
        for(let j=3*x; j<3*x+3; j++){
            subgrid.push(grid[i][j]);
        }
    }
    return subgrid;
}

/**
 *  Checks that a subsection includes the numbers 1-9 (with no repeats)
 * @param subsection - a subsection of the sudoku grid
 * @returns a boolean value (true if the subsection includes the numbers 1-9 with no repeats)
 */
function includes1to9 (subsection){
    return subsection.length === new Set(subsection).size;
}

/**
 *  Checks if a sudoku puzzle is valid or invalid
 * @param puzzle - a sudoku puzzle
 * @returns a boolean value (true if the sudoku puzzle is valid)
 */
function sudokuIsValid(puzzle){
    // Validate rows and columns
    for(let i=0; i<9;i++){
        if(!includes1to9(getRow(puzzle,i)) || !includes1to9(getColumn(puzzle,i)))
        return false;
    }
    // Validate subgrids
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(!includes1to9(getSection(puzzle, i, j))){
                return false;
            }
        }
    }
    return true;
}
/**
 *  prints a sudoku puzzle
 * @param puzzle - a sudoku puzzle
 */
function printGrid(puzzle) {
    for (let i = 0; i < 9; i++)
        console.log(puzzle[i].join(' '));
}

/// Examples
let puzzle1 = [
    [ 8,9,5,7,4,2,1,3,6 ],
    [ 2,7,1,9,6,3,4,8,5 ],
    [ 4,6,3,5,8,1,7,9,2 ],
    [ 9,3,4,6,1,7,2,5,8 ],
    [ 5,1,7,2,3,8,9,6,4 ],
    [ 6,8,2,4,5,9,3,7,1 ],
    [ 1,5,9,8,7,4,6,2,3 ],
    [ 7,4,6,3,2,5,8,1,9 ],
    [ 3,2,8,1,9,6,5,4,7 ]
  ];
  let puzzle2 = [
    [ 8,9,5,7,4,2,1,3,6 ],
    [ 8,7,1,9,6,3,4,8,5 ],
    [ 4,6,3,5,8,1,7,9,2 ],
    [ 9,3,4,6,1,7,2,5,8 ],
    [ 5,1,7,2,3,8,9,6,4 ],
    [ 6,8,2,4,5,9,3,7,1 ],
    [ 1,5,9,8,7,4,6,2,3 ],
    [ 7,4,6,3,2,5,8,1,9 ],
    [ 3,2,8,1,9,6,5,4,7 ]
  ];

  printGrid(puzzle1);
  console.log(`This puzzle is ${sudokuIsValid(puzzle1)? "valid" : "invalid"}\n`);
  printGrid(puzzle2);
  console.log(`This puzzle is ${sudokuIsValid(puzzle2)? "valid" : "invalid"}`);
const DEFAULT_VAL = "";

export const getSquare = (row, col) => {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
};

export const solveSudoko = (gameBoard, rows, cols, squares, noRuleBreaks) => {
  if (noRuleBreaks > 0) return gameBoard;
  solveSudokoUtil(gameBoard, rows, cols, squares, 0);
  return gameBoard;
};

const solveSudokoUtil = (gameBoard, rows, cols, squares, cell) => {
  if (cell >= 9 * 9) return true;
  const row = Math.floor(cell / 9);
  const col = cell % 9;
  if (!isEmptyCell(gameBoard, row, col)) {
    if (solveSudokoUtil(gameBoard, rows, cols, squares, cell + 1)) return true;
    else return false;
  }
  for (let i = 1; i <= 9; i++) {
    if (isValidMove(rows, cols, squares, row, col, i)) {
      gameBoard[row][col] = i;
      rows[row][i - 1]++;
      cols[col][i - 1]++;
      squares[getSquare(row, col)][i - 1]++;
      if (solveSudokoUtil(gameBoard, rows, cols, squares, cell + 1))
        return true;
      else {
        gameBoard[row][col] = DEFAULT_VAL;
        rows[row][i - 1]--;
        cols[col][i - 1]--;
        squares[getSquare(row, col)][i - 1]--;
      }
    }
  }
  return false;
};

const isEmptyCell = (gameBoard, row, col) =>
  gameBoard[row][col] === DEFAULT_VAL;

const isValidMove = (rows, cols, squares, row, col, i) =>
  rows[row][i - 1] === 0 &&
  cols[col][i - 1] === 0 &&
  squares[getSquare(row, col)][i - 1] === 0;

import { useState } from "react";
import { View } from "react-native";
import Gameboard from "../../components/Gameboard/Gameboard";
import InputChoices from "../../components/InputChoices/InputChoices";
import Submit from "../../components/Submit/Submit";
import { solveSudoko, getSquare } from "../../util/sudoku.util";

const createStartingGameBoard = () => {
  const defaultGameBoard = [];
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      row.push("");
    }
    defaultGameBoard.push(row);
  }
  return defaultGameBoard;
};

const createStartingCounters = () => {
  const defaultCounter = [];
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      row.push(0);
    }
    defaultCounter.push(row);
  }
  return defaultCounter;
};

export default function Sudoku() {
  const [gameBoard, setGameBoard] = useState(createStartingGameBoard());
  const [rowsCounter, setRowsCounter] = useState(createStartingCounters());
  const [colsCounter, setColsCounter] = useState(createStartingCounters());
  const [squaresCounter, setSquaresCounter] = useState(
    createStartingCounters()
  );
  const [selectedCell, setSelectedCell] = useState([0, 0]);
  const [noRuleBreaks, setNoRuleBreaks] = useState(0);

  const changeSelectedCell = (row, col) => {
    setSelectedCell([row, col]);
  };

  const updateRowsCounter = (changeToCounter, val) => {
    setRowsCounter((oldRows) => {
      if (changeToCounter === 1 && oldRows[selectedCell[0]][val - 1] === 1)
        setNoRuleBreaks((x) => x + 1);
      else if (
        changeToCounter === -1 &&
        oldRows[selectedCell[0]][val - 1] === 2
      )
        setNoRuleBreaks((x) => x - 1);
      oldRows[selectedCell[0]][val - 1] += changeToCounter;
      return [...oldRows];
    });
  };

  const updateColsCounter = (changeToCounter, val) => {
    setColsCounter((oldCols) => {
      if (changeToCounter === 1 && oldCols[selectedCell[1]][val - 1] === 1)
        setNoRuleBreaks((x) => x + 1);
      else if (
        changeToCounter === -1 &&
        oldCols[selectedCell[1]][val - 1] === 2
      )
        setNoRuleBreaks((x) => x - 1);
      oldCols[selectedCell[1]][val - 1] += changeToCounter;
      return [...oldCols];
    });
  };

  const updateSquaresCounter = (changeToCounter, val) => {
    setSquaresCounter((oldSquares) => {
      if (
        changeToCounter === 1 &&
        oldSquares[getSquare(selectedCell[0], selectedCell[1])][val - 1] === 1
      )
        setNoRuleBreaks((x) => x + 1);
      else if (
        changeToCounter === -1 &&
        oldSquares[getSquare(selectedCell[0], selectedCell[1])][val - 1] === 2
      )
        setNoRuleBreaks((x) => x - 1);
      oldSquares[getSquare(selectedCell[0], selectedCell[1])][val - 1] +=
        changeToCounter;
      return [...oldSquares];
    });
  };

  const updateSelectedCellValue = (val) => {
    setGameBoard((currentBoard) => {
      let changeToCounter = 1;
      if (currentBoard[selectedCell[0]][selectedCell[1]] === val) {
        currentBoard[selectedCell[0]][selectedCell[1]] = "";
        changeToCounter = -1;
      } else currentBoard[selectedCell[0]][selectedCell[1]] = val;
      updateRowsCounter(changeToCounter, val);
      updateColsCounter(changeToCounter, val);
      updateSquaresCounter(changeToCounter, val);
      return [...currentBoard];
    });
  };

  const getSolution = () => {
    setGameBoard((currentBoard) => [
      ...solveSudoko(
        currentBoard,
        rowsCounter,
        colsCounter,
        squaresCounter,
        noRuleBreaks
      ),
    ]);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Gameboard
        gameBoard={gameBoard}
        selectedCell={selectedCell}
        changeSelectedCell={changeSelectedCell}
        rowsCounter={rowsCounter}
        colsCounter={colsCounter}
        squaresCounter={squaresCounter}
      />
      <InputChoices
        selectedValue={gameBoard[selectedCell[0]][selectedCell[1]]}
        handleClick={updateSelectedCellValue}
      />
      <Submit noRuleBreaks={noRuleBreaks} submit={getSolution} />
    </View>
  );
}

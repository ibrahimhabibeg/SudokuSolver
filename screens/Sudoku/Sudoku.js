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
      row.push({ isByUser: true, val: "" });
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
  const [didShowSolution, setDidShowSolution] = useState(false);
  const [doesSolutionExists, setDoesSolutionExists] = useState(true);

  const changeSelectedCell = (row, col) => {
    setSelectedCell([row, col]);
  };

  const updateCounter = (setCounter, selectedIndex, oldVal, newVal) => {
    setCounter((counter) => {
      if (oldVal !== "") {
        counter[selectedIndex][oldVal - 1]--;
        if (counter[selectedIndex][oldVal - 1] === 1)
          setNoRuleBreaks((x) => x - 1);
      }
      if (newVal !== oldVal) {
        counter[selectedIndex][newVal - 1]++;
        if (counter[selectedIndex][newVal - 1] === 2)
          setNoRuleBreaks((x) => x + 1);
      }
      return [...counter];
    });
  };

  const updateSelectedCellValue = (newVal) => {
    setDoesSolutionExists(true);
    setGameBoard((currentBoard) => {
      const oldVal = currentBoard[selectedCell[0]][selectedCell[1]].val;
      currentBoard[selectedCell[0]][selectedCell[1]].isByUser = true;
      if (currentBoard[selectedCell[0]][selectedCell[1]].val === newVal)
        currentBoard[selectedCell[0]][selectedCell[1]].val = "";
      else currentBoard[selectedCell[0]][selectedCell[1]].val = newVal;
      updateCounter(setRowsCounter, selectedCell[0], oldVal, newVal);
      updateCounter(setColsCounter, selectedCell[1], oldVal, newVal);
      updateCounter(
        setSquaresCounter,
        getSquare(selectedCell[0], selectedCell[1]),
        oldVal,
        newVal
      );
      return [...currentBoard];
    });
  };

  const getSolution = () => {
    setGameBoard((currentBoard) => {
      const { solution, isCorrectSol } = solveSudoko(
        currentBoard,
        rowsCounter,
        colsCounter,
        squaresCounter,
        noRuleBreaks
      );
      setDoesSolutionExists(isCorrectSol);
      setDidShowSolution(isCorrectSol);
      return [...solution];
    });
  };

  const restartGame = () => {
    setGameBoard(createStartingGameBoard());
    setRowsCounter(createStartingCounters());
    setColsCounter(createStartingCounters());
    setSquaresCounter(createStartingCounters());
    setSelectedCell([0, 0]);
    setNoRuleBreaks(0);
    setDidShowSolution(false);
    setDoesSolutionExists(true);
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
        selectedValue={gameBoard[selectedCell[0]][selectedCell[1]].val}
        handleClick={updateSelectedCellValue}
        didShowSolution={didShowSolution}
      />
      <Submit
        noRuleBreaks={noRuleBreaks}
        submit={getSolution}
        restartGame={restartGame}
        didShowSolution={didShowSolution}
        doesSolutionExists={doesSolutionExists}
      />
    </View>
  );
}

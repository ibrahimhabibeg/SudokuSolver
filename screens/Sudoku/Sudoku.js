import { useState } from "react";
import { View } from "react-native";
import Gameboard from "../../components/Gameboard/Gameboard";
import InputChoices from "../../components/InputChoices/InputChoices";

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

export default function Sudoku() {
  const [gameBoard, setGameBoard] = useState(createStartingGameBoard());
  const [selectedCell, setSelectedCell] = useState([0, 0]);

  const changeSelectedCell = (row, col) => {
    setSelectedCell([row, col]);
  };

  const updateSelectedCellValue = (val) => {
    setGameBoard((currentBoard) => {
      if (currentBoard[selectedCell[0]][selectedCell[1]] === val)
        currentBoard[selectedCell[0]][selectedCell[1]] = "";
      else currentBoard[selectedCell[0]][selectedCell[1]] = val;
      return [...currentBoard];
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Gameboard
        gameBoard={gameBoard}
        selectedCell={selectedCell}
        changeSelectedCell={changeSelectedCell}
      />
      <InputChoices
        selectedValue={gameBoard[selectedCell[0]][selectedCell[1]]}
        handleClick={updateSelectedCellValue}
      />
    </View>
  );
}

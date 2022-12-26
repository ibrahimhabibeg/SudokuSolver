import { useState } from "react";
import { View } from "react-native";
import Gameboard from "../../components/Gameboard/Gameboard";

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

  return (
    <View style={{ flex: 1 }}>
      <Gameboard
        gameBoard={gameBoard}
        selectedCell={selectedCell}
        changeSelectedCell={changeSelectedCell}
      />
    </View>
  );
}

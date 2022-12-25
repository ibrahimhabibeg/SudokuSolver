import { useState } from "react";
import { View } from "react-native";
import Gameboard from "../../components/Gameboard/Gameboard";

function createStartingGameBoard() {
  const defaultGameBoard = [];
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      row.push("");
    }
    defaultGameBoard.push(row);
  }
  return defaultGameBoard;
}

export default function ManualSudoko() {
  const [gameBoard, setGameBoard] = useState(createStartingGameBoard());

  return (
    <View style={{flex:1}}>
      <Gameboard gameBoard={gameBoard}/>
    </View>
  );
}

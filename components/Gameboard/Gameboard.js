import { TouchableHighlight, View, Text } from "react-native";
import styles from "./Gameboard.styles";
import { getSquare } from "../../util/sudoku.util";

export default function Gameboard({
  gameBoard,
  selectedCell,
  changeSelectedCell,
  rowsCounter,
  colsCounter,
  squaresCounter,
}) {
  return (
    <View style={styles.board}>
      {gameBoard.map((row, rowNo) => (
        <View key={`row-${rowNo}`} style={styles.row}>
          {row.map((cell, colNo) => (
            <TouchableHighlight
              underlayColor={styles.selectedCell.backgroundColor}
              key={`cell-${rowNo}-${colNo}`}
              style={styles.cellContiner}
              onPress={() => changeSelectedCell(rowNo, colNo)}
            >
              <Text
                style={[
                  styles.cell,
                  rowNo === 0 ? styles.darkTopBorder : {},
                  colNo === 0 ? styles.darkLeftBorder : {},
                  rowNo % 3 === 2
                    ? styles.darkBottomBorder
                    : styles.lightBottomBorder,
                  colNo % 3 === 2
                    ? styles.darkRightBorder
                    : styles.lightRightBorder,
                  colNo % 3 === 2 ? styles.darkRightBorder : {},
                  rowNo === selectedCell[0] && colNo === selectedCell[1]
                    ? styles.selectedCell
                    : rowNo === selectedCell[0] ||
                      colNo === selectedCell[1] ||
                      getSquare(selectedCell[0], selectedCell[1]) ===
                        getSquare(rowNo, colNo)
                    ? styles.highlightedCell
                    : {},
                  cell.val !== "" &&
                  gameBoard[selectedCell[0]][selectedCell[1]].val === cell.val
                    ? styles.selectedCell
                    : {},
                  rowsCounter[rowNo][cell.val - 1] > 1 ||
                  colsCounter[colNo][cell.val - 1] > 1 ||
                  squaresCounter[getSquare(rowNo, colNo)][cell.val - 1] > 1
                    ? styles.errorCell
                    : {},
                  !cell.isByUser ? styles.solvedCell : {},
                ]}
              >
                {cell.val}
              </Text>
            </TouchableHighlight>
          ))}
        </View>
      ))}
    </View>
  );
}

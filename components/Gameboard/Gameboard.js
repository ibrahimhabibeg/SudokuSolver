import { TouchableHighlight, View, Text } from "react-native";
import styles from "./Gameboard.styles";

export default function Gameboard({ gameBoard }) {
  return (
    <View style={styles.board}>
      {gameBoard.map((row, rowNo) => (
        <View key={`row-${rowNo}`} style={styles.row}>
          {row.map((cell, colNo) => (
            <TouchableHighlight
              key={`cell-${rowNo}-${colNo}`}
              style={styles.cellContiner}
            >
              <Text
                adjustsFontSizeToFit={true}
                style={[
                  styles.cell,
                  rowNo === 0 ? styles.darkTopBorder : {},
                  colNo === 0 ? styles.darkLeftBorder : {},
                  rowNo % 3 == 2
                    ? styles.darkBottomBorder
                    : styles.lightBottomBorder,
                  colNo % 3 == 2
                    ? styles.darkRightBorder
                    : styles.lightRightBorder,
                  colNo % 3 == 2 ? styles.darkRightBorder : {},
                ]}
              >
                {cell}
              </Text>
            </TouchableHighlight>
          ))}
        </View>
      ))}
    </View>
  );
}

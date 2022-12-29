import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  board: {
    flex: 7,
    justifyContent: "center",
    padding: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    margin: 0,
    padding: 0,
    height: Dimensions.get("window").width / 10,
    maxHeight: 50,
  },
  cellContiner: {
    height: Dimensions.get("window").width / 10,
    width: Dimensions.get("window").width / 10,
    maxHeight: 50,
    maxWidth: 50,
  },
  cell: {
    height: "100%",
    width: "100%",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 0.7 * Math.min(50, Dimensions.get("window").width / 10),
  },
  darkTopBorder: {
    borderTopColor: "rgba(0,0,0,1)",
    borderTopWidth: 3,
  },
  darkLeftBorder: {
    borderLeftColor: "rgba(0,0,0,1)",
    borderLeftWidth: 3,
  },
  darkRightBorder: {
    borderRightColor: "rgba(0,0,0,1)",
    borderRightWidth: 3,
  },
  darkBottomBorder: {
    borderBottomColor: "rgba(0,0,0,1)",
    borderBottomWidth: 3,
  },
  lightRightBorder: {
    borderRightColor: "rgba(0,0,0,.7)",
    borderRightWidth: 1,
  },
  lightBottomBorder: {
    borderBottomColor: "rgba(0,0,0,.7)",
    borderBottomWidth: 1,
  },
  selectedCell: {
    backgroundColor: "rgb(137, 207, 240)",
  },
  highlightedCell: {
    backgroundColor: "rgba(185, 217, 235,.5)",
  },
  errorCell: {
    backgroundColor: "rgba(255, 0, 0,.5)",
  },
  solvedCell: {
    color: "#006400",
  },
});

export default styles;

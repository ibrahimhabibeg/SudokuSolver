import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-around",
    maxWidth: 750,
  },
  valueSurronding: {
    backgroundColor: "rgba(185, 217, 235,.5)",
    height: (0.95 * Dimensions.get("window").width) / 10,
    width: (0.95 * Dimensions.get("window").width) / 10,
    maxHeight: 0.9 * 50,
    maxWidth: 0.9 * 50,
    borderRadius:
      0.34 * Math.min(0.9 * 50, (0.95 * Dimensions.get("window").width) / 10),
  },
  value: {
    height: "100%",
    width: "100%",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: Math.min(
      0.7 * 0.9 * 50,
      (0.7 * 0.95 * Dimensions.get("window").width) / 10
    ),
  },
  highlight: {
    backgroundColor: "rgb(137, 207, 240)",
  },
  disabled: {
    backgroundColor: "#cccccc",
  },
  disabledText: {
    color: "#666666",
  },
});

export default styles;

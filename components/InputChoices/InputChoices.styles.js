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
    height: (0.8 * Dimensions.get("window").width) / 10,
    width: (0.8 * Dimensions.get("window").width) / 10,
    maxHeight: 0.9 * 50,
    maxWidth: 0.9 * 50,
    borderRadius: 15,
  },
  value: {
    height: "100%",
    width: "100%",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize:
       Math.min(0.7 * 0.9 * 50, (0.85 * 0.75 * Dimensions.get("window").width) / 10),
  },
  highlight: {
    backgroundColor: "rgb(137, 207, 240)",
  },
});

export default styles;

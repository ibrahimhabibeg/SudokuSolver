import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    maxWidth: 450,
  },
  button: {
    backgroundColor: "#339DFF",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    borderRadius: 15,
  },
  text: {
    color: "#fff",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
  },
  disabledText: {
    color: "#666666",
  },
});

export default styles;

import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  board: {
    flex: 1,
    justifyContent: "center",
    padding:0

  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    margin:0,
    padding:0,
    height: Dimensions.get("window").width / 10,
    maxHeight:50,
  },
  cellContiner: {
    height: Dimensions.get("window").width / 10,
    width: Dimensions.get("window").width / 10,
    maxHeight:50,
    maxWidth:50,
  },
  cell: {
    height:"100%",
    width:"100%",
    textAlignVertical: "center",
    textAlign: "center",
    marginTop: 0,
  },
  darkTopBorder:{
    borderTopColor:"rgba(0,0,0,1)",
    borderTopWidth:3,
  },
  darkLeftBorder:{
    borderLeftColor:"rgba(0,0,0,1)",
    borderLeftWidth:3,
  },
  darkRightBorder:{
    borderRightColor:"rgba(0,0,0,1)",
    borderRightWidth:3,
  },
  darkBottomBorder:{
    borderBottomColor:"rgba(0,0,0,1)",
    borderBottomWidth:3,
  },
  lightRightBorder:{
    borderRightColor:"rgba(0,0,0,.7)",
    borderRightWidth:1,
  },
  lightBottomBorder:{
    borderBottomColor:"rgba(0,0,0,.7)",
    borderBottomWidth:1,
  }
});

export default styles;

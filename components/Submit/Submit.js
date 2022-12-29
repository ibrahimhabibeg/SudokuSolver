import { TouchableHighlight, Text, View } from "react-native";
import styles from "./Submit.styles";

export default function Submit({
  noRuleBreaks,
  submit,
  restartGame,
  didShowSolution,
}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.button, noRuleBreaks > 0 ? styles.disabledButton : {}]}
        onPress={didShowSolution ? restartGame : submit}
        disabled={noRuleBreaks > 0}
      >
        <Text
          style={[styles.text, noRuleBreaks > 0 ? styles.disabledText : {}]}
        >
          {didShowSolution ? "Restart" : "Solve!"}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

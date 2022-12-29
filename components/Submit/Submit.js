import { TouchableHighlight, Text, View } from "react-native";
import styles from "./Submit.styles";

export default function Submit({
  noRuleBreaks,
  submit,
  restartGame,
  didShowSolution,
  doesSolutionExists,
}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[
          styles.button,
          noRuleBreaks > 0 ? styles.disabledButton : {},
          !doesSolutionExists ? styles.noSolution : {},
        ]}
        onPress={didShowSolution ? restartGame : submit}
        disabled={noRuleBreaks > 0}
        underlayColor={
          !doesSolutionExists
            ? styles.noSolution.backgroundColor
            : noRuleBreaks > 0
            ? styles.disabledButton.backgroundColor
            : styles.button.backgroundColor
        }
      >
        <Text
          style={[styles.text, noRuleBreaks > 0 ? styles.disabledText : {}]}
        >
          {didShowSolution
            ? "Restart"
            : doesSolutionExists
            ? "Solve"
            : "No Solution"}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

import { TouchableHighlight, View, Text } from "react-native";
import styles from "./InputChoices.styles";

export default function InputChoices({ selectedValue, handleClick }) {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
        <TouchableHighlight
          underlayColor={styles.highlight.backgroundColor}
          key={`choice-${val}`}
          onPress={() => handleClick(val)}
          style={[
            styles.valueSurronding,
            selectedValue !== "" && selectedValue === val
              ? styles.highlight
              : "",
          ]}
        >
          <Text style={styles.value}>{val}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
}

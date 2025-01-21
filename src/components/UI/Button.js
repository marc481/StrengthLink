import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS, FONTS } from "../../config/theme";

export const Button = ({ label, onPress, styleLabel, styleButton }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, styleButton]}>
      <Text style={[styles.label, styleLabel]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    borderRadius: 7,
    backgroundColor: COLORS.buttonBackground, // Sky blue
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexDirection: "row",
  },
  label: {
    ...FONTS.button, // Use bold button font
    color: COLORS.buttonText, // White text
  },
});

export default Button;

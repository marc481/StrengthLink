import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"; // Ensure View is imported
import { COLORS, FONTS } from "../../config/theme";

export const Button = ({ label, onPress, styleLabel, styleButton }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, styleButton]}>
      <Text style={[styles.label, styleLabel]}>{label}</Text>
    </Pressable>
  );
};

export const ButtonTray = ({ children, style }) => {
  return <View style={[styles.tray, style]}>{children}</View>;
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
  tray: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10, // For spacing between buttons
  },
});

export default Button;

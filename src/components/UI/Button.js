import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SPACING } from "../../config/theme";

// Button Component
const Button = ({ label, onPress, variant = "default", icon = null }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "delete":
        return [styles.button, styles.deleteButton];
      case "primary":
        return [styles.button, styles.primaryButton];
      default:
        return [styles.button];
    }
  };

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

// ButtonTray Component
const ButtonTray = ({ children }) => {
  return <View style={styles.buttonTray}>{children}</View>;
};

// Styles
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: SPACING.medium,
    borderRadius: SPACING.small,
    backgroundColor: COLORS.buttonBackground,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  deleteButton: {
    backgroundColor: COLORS.error,
  },
  text: {
    ...FONTS.body,
    color: COLORS.buttonText,
    marginLeft: SPACING.small,
  },
  buttonTray: {
    flexDirection: "row",
    justifyContent: "center",
    gap: SPACING.small,
  },
  icon: {
    marginRight: 5,
  },
});

export { Button, ButtonTray };

console.log("Button component loaded:", Button);
console.log("ButtonTray component loaded:", ButtonTray);

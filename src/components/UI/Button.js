import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SPACING } from "../../config/theme";

// Button Component
const Button = ({ label, onPress, variant = "default" }) => {
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
    padding: SPACING.medium,
    borderRadius: SPACING.small,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.buttonBackground,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  deleteButton: {
    backgroundColor: COLORS.error, // Should be red
  },
  text: {
    ...FONTS.body,
    color: COLORS.buttonText,
  },
  buttonTray: {
    flexDirection: "row",
    justifyContent: "center",
    gap: SPACING.small,
  },
});

// Export both Button & ButtonTray
export { Button, ButtonTray };

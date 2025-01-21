import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "../../config/theme";

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background, // Use light beige background
    padding: 20,
  },
});

export default Screen;

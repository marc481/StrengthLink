import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WorkoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Workout Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WorkoutScreen;

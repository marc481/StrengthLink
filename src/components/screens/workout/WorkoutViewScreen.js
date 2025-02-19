import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const WorkoutViewScreen = ({ route, navigation }) => {
  const { workout } = route.params;

  if (!workout || !workout.WorkoutID) {
    console.error("❌ Workout is undefined or missing WorkoutID:", workout);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Workout not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.WorkoutName}</Text>
      <Text style={styles.label}>Date: {workout.WorkoutDate || "N/A"}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("ExerciseListScreen", {
            workout: { ...workout, Exercises: workout.Exercises || [] },
          })
        }
      >
        <Text style={styles.buttonText}>View Exercises</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.modifyButton}
        onPress={() => navigation.navigate("WorkoutModifyScreen", { workout })}
      >
        <Text style={styles.buttonText}>Edit Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.medium,
  },
  errorText: {
    ...FONTS.body,
    textAlign: "center",
    color: "red",
  },
  header: { ...FONTS.header, marginBottom: SPACING.medium },
  label: { ...FONTS.body, marginBottom: SPACING.medium },
  button: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    marginTop: SPACING.medium,
  },
  modifyButton: {
    backgroundColor: COLORS.buttonSecondary,
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    marginTop: SPACING.medium,
  },
  buttonText: { ...FONTS.button },
});

export default WorkoutViewScreen;

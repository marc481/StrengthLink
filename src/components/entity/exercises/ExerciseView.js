import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const ExerciseView = ({ exercise }) => {
  console.log("ExerciseView received:", exercise);

  if (!exercise || typeof exercise !== "object") {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Invalid exercise data.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{exercise.ExerciseName || "Unnamed"}</Text>

      <Text style={styles.details}>
        Sets: {exercise.Sets ?? "N/A"} | Reps: {exercise.Reps ?? "N/A"} |
        Weight: {exercise.Weight ?? "N/A"} kg
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.medium,
    backgroundColor: COLORS.background,
  },
  header: {
    ...FONTS.header,
    marginBottom: SPACING.medium,
    color: COLORS.primaryText,
  },
  details: {
    ...FONTS.body,
    color: COLORS.bodyText,
    paddingVertical: SPACING.small,
  },
  errorText: {
    ...FONTS.body,
    color: "red",
    textAlign: "center",
  },
});

export default ExerciseView;

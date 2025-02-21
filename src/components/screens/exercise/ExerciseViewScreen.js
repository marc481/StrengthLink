import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const ExerciseViewScreen = ({ route }) => {
  const { exercise } = route.params || {};

  console.log("🔎 Viewing Exercise:", exercise);

  if (!exercise || !exercise.ExerciseName) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: Exercise not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{exercise.ExerciseName}</Text>
      <Text style={styles.details}>Sets: {exercise.Sets}</Text>
      <Text style={styles.details}>Reps: {exercise.Reps}</Text>
      <Text style={styles.details}>Weight: {exercise.Weight} kg</Text>
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
    textAlign: "center",
    color: "red",
  },
});

export default ExerciseViewScreen;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const ExerciseItem = ({ exercise, onSelect }) => {
  if (!exercise || !exercise.ExerciseName) {
    return null; // Prevents rendering if the exercise is invalid
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onSelect(exercise)}
    >
      <View style={styles.info}>
        <Text style={styles.exerciseName}>{exercise.ExerciseName}</Text>
        <Text style={styles.details}>
          {exercise.Sets} x {exercise.Reps} @ {exercise.Weight} kg
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  info: { flex: 1 },
  exerciseName: {
    ...FONTS.body,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },
  details: {
    ...FONTS.body,
    color: COLORS.secondaryText,
  },
});

export default ExerciseItem;

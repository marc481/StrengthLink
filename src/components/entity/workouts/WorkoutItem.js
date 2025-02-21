import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const WorkoutItem = ({ workout, onSelect }) => {
  if (!workout || !workout.WorkoutName) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onSelect(workout.WorkoutID)} // ✅ Pass only `workout.WorkoutID`
    >
      <View style={styles.info}>
        <Text style={styles.workoutName}>{workout.WorkoutName}</Text>
        <Text style={styles.details}>Date: {workout.WorkoutDate}</Text>
        <Text style={styles.details}>
          Exercises: {workout.Exercises ? workout.Exercises.length : 0}
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
  workoutName: {
    ...FONTS.body,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },
  details: {
    ...FONTS.body,
    color: COLORS.secondaryText,
  },
});

export default WorkoutItem;

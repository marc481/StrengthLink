import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const WorkoutItem = ({ workout, onSelect }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onSelect(workout)}
    >
      <View style={styles.info}>
        <Text style={styles.date}>{workout.Date}</Text>
        <Text style={styles.exercise}>
          {workout.Exercise} - {workout.Sets}x{workout.Reps} @ {workout.Weight}
          kg
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
  info: {
    flex: 1,
  },
  date: {
    ...FONTS.body,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },
  exercise: {
    ...FONTS.body,
    color: COLORS.secondaryText,
  },
});

export default WorkoutItem;

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const ExerciseView = ({ exercise }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{exercise.ExerciseName}</Text>

      <Text style={styles.details}>
        Sets: {exercise.Sets} | Reps: {exercise.Reps} | Weight:{" "}
        {exercise.Weight}kg
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
});

export default ExerciseView;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import { Button, ButtonTray } from "../UI/Button";
import { COLORS, FONTS, SPACING } from "../../config/theme";
import WorkoutView from "../entity/WorkoutView";

const ExerciseViewScreen = ({ route, navigation }) => {
  const { exercise, onDelete } = route.params;

  const handleDelete = () => {
    onDelete(exercise.id);
    navigation.goBacl();
  };

  return (
    <Screen>
      <WorkoutView exercise={exercise} onDelete={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.large,
    backgroundColor: COLORS.background,
    borderRadius: 8,
    margin: SPACING.medium,
  },
  exerciseName: {
    ...FONTS.header,
    textAlign: "center",
    marginBottom: SPACING.medium,
  },
  detailText: {
    ...FONTS.body,
    marginBottom: SPACING.small,
  },
  dangerButton: {
    backgroundColor: COLORS.dangerButtonBackground,
  },
  dangerButtonText: {
    color: COLORS.dangerButtonText,
  },
});

export default ExerciseViewScreen;

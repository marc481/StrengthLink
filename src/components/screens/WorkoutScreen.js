import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import WorkoutList from "../entity/WorkoutList";
import { Button, ButtonTray } from "../UI/Button";
import { COLORS } from "../../config/theme";
import workout from "../../data/workout";

const WorkoutScreen = ({ navigation }) => {
  //Initialisaliations
  //State
  const [exercises, setExercises] = useState(workout.exercises);

  //Handlers
  const handleAdd = (exercise) => setExercises([...exercises, exercise]);

  const onAdd = (exercise) => {
    handleAdd(exercise);
    navigation.goBack();
  };

  const handleModify = (updatedExercise) =>
    setExercises(
      exercises.map((exercise) =>
        exercise.id === updatedExercise.id ? updatedExercise : exercise
      )
    );

  const onModify = (exercise) => {
    handleModify(exercise);
    navigation.navigate("WorkoutScreen");
  };

  const handleDelete = (exerciseId) =>
    setExercises(exercises.filter((exercise) => exercise.id !== exerciseId));

  const onDelete = (exercise) => {
    handleDelete(exercise);
    navigation.goBack();
  };

  //Navigation Handlers

  const gotoAddScreen = () =>
    navigation.navigate("AddExerciseScreen", { onAdd: handleAdd });

  const gotoModifyScreen = (exercise) =>
    navigation.navigate("AddExerciseScreen", {
      exercise,
      onModify: handleModify,
    });

  const gotoViewScreen = (exercise) =>
    navigation.navigate("ExerciseViewScreen", {
      exercise,
      onDelete: handleDelete,
    });

  // View ----------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add Exercise" onPress={gotoAddScreen} />
      </ButtonTray>
      <WorkoutList workouts={exercises} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.large,
    backgroundColor: COLORS.background,
    borderRadius: SPACING.small,
    margin: SPACING.medium,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: SPACING.small,
    elevation: 3,
  },
  exerciseName: {
    ...FONTS.header,
    color: COLORS.primaryText,
    marginBottom: SPACING.small,
  },
  details: {
    ...FONTS.body,
    color: COLORS.mutedText,
  },
  modifyButton: {
    backgroundColor: COLORS.buttonBackground,
  },
  deleteButton: {
    backgroundColor: COLORS.dangerBackground || "mistyrose", // Ensure danger color is defined
  },
  deleteLabel: {
    color: COLORS.dangerText || "red",
  },
});

export default WorkoutScreen;

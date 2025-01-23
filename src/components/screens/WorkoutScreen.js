import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import WorkoutList from "../entity/WorkoutList";
import { Button, ButtonTray } from "../UI/Button";
import { COLORS } from "../../config/theme";
import workout from "../../data/workout";

const WorkoutScreen = ({ navigation }) => {
  // State ----------------------------
  const [exercises, setExercises] = useState(workout.exercises);

  // Handlers ---------------------------
  const handleAdd = (exercise) =>
    setExercises([...exercises, { ...exercise, id: Date.now() }]);

  const handleModify = (updatedExercise) =>
    setExercises(
      exercises.map((exercise) =>
        exercise.id === updatedExercise.id ? updatedExercise : exercise
      )
    );

  const handleDelete = (exerciseToDelete) =>
    setExercises(
      exercises.filter((exercise) => exercise.id !== exerciseToDelete.id)
    );

  const gotoAddScreen = () => {
    navigation.navigate("AddExerciseScreen", {
      onSave: handleAdd,
    });
  };

  const gotoModifyScreen = (exercise) => {
    navigation.navigate("AddExerciseScreen", {
      exercise,
      onSave: handleModify,
    });
  };

  const gotoViewScreen = (exercise) => {
    navigation.navigate("ExerciseViewScreen", {
      exercise,
      onModify: handleModify,
      onDelete: handleDelete,
    });
  };

  // Views -----------------------------
  return (
    <Screen>
      {/* Add Exercise Button */}
      <ButtonTray>
        <Button label="Add Exercise" onPress={gotoAddScreen} />
      </ButtonTray>

      {/* List of Exercises */}
      <WorkoutList workouts={exercises} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default WorkoutScreen;

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import WorkoutList from "../entity/WorkoutList";
import { Button, ButtonTray } from "../UI/Button";
import { COLORS } from "../../config/theme";
import workout from "../../data/workout";

const WorkoutScreen = ({ navigation }) => {
  // State
  const [exercises, setExercises] = useState(workout.exercises);

  // Handlers
  const handleDelete = (exercise) =>
    setExercises(exercises.filter((item) => item.id !== exercise.id));

  const handleAdd = (exercise) =>
    setExercises([...exercises, { ...exercise, id: Date.now() }]);

  const handleModify = (updatedExercise) =>
    setExercises(
      exercises.map((exercise) =>
        exercise.id === updatedExercise.id ? updatedExercise : exercise
      )
    );

  const onDelete = (exercise) => {
    handleDelete(exercise);
    navigation.goBack();
  };

  const onAdd = (exercise) => {
    handleAdd(exercise);
    navigation.goBack();
  };

  const onModify = (exercise) => {
    handleModify(exercise);
    navigation.navigate("WorkoutScreen");
  };

  const gotoAddScreen = () =>
    navigation.navigate("AddExerciseScreen", { onSave: onAdd });

  const gotoModifyScreen = (exercise) =>
    navigation.navigate("AddExerciseScreen", { exercise, onSave: onModify });

  // Views
  return (
    <Screen>
      {/* Add Exercise Button */}
      <ButtonTray>
        <Button label="Add Exercise" onPress={gotoAddScreen} />
      </ButtonTray>

      {/* List of Exercises */}
      <WorkoutList workouts={exercises} onSelect={gotoModifyScreen} />
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

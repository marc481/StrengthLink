import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../../layout/Screen";
import WorkoutList from "../../entity/workouts/WorkoutList";
import { Button, ButtonTray } from "../../UI/Button";
import { COLORS } from "../../../config/theme";
import workout from "../../../data/workout";

const WorkoutScreen = ({ navigation }) => {
  //Initialisaliations
  const initialExercises = workout.exercises;

  //State
  const [exercises, setExercises] = useState(initialExercises);

  //Handlers
  const handleAdd = (exercise) => {
    setExercises([...exercises, { ...exercise, id: Date.now() }]);
  };

  const handleDelete = (exerciseId) => {
    setExercises(exercises.filter((exercise) => exercise.id !== exerciseId));
  };

  const handleModify = (updatedExercise) => {
    setExercises(
      exercises.map((exercise) =>
        exercise.id === updatedExercise.id ? updatedExercise : exercise
      )
    );
  };

  const gotoAddScreen = () =>
    navigation.navigate("AddExerciseScreen", {
      onAdd: handleAdd,
    });

  const gotoViewScreen = (exercise) =>
    navigation.navigate("ExerciseViewScreen", {
      exercise,
      onDelete: handleDelete,
      onModify: (updatedExercise) => {
        handleModify(updatedExercise);
        navigation.goBack();
      },
    });

  //Views
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add Exercise" onPress={gotoAddScreen} />
      </ButtonTray>

      <WorkoutList
        workouts={exercises}
        onSelect={gotoViewScreen} // Only this interaction is needed
      />
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

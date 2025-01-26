import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import WorkoutView from "../entity/WorkoutView";

const ExerciseViewScreen = ({ route, navigation }) => {
  // Initialisaliations
  const { exercise, onDelete, onModify } = route.params;

  // Handlers ---------------------------
  const handleDelete = () => {
    onDelete(exercise.id);
    navigation.goBack(); // Navigate back to WorkoutScreen
  };

  const handleModify = () => {
    navigation.navigate("AddExerciseScreen", {
      exercise,
      onModify,
    });
  };

  // Views -----------------------------
  return (
    <Screen>
      <WorkoutView
        workout={exercise}
        onDelete={handleDelete}
        onModify={handleModify}
      />
    </Screen>
  );
};

// Styles -----------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});

export default ExerciseViewScreen;

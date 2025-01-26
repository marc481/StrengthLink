import React from "react";
import WorkoutForm from "../entity/WorkoutForm";
import Screen from "../layout/Screen";

// AddExerciseScreen Component
const AddExerciseScreen = ({ route, navigation }) => {
  //Initialisaliations
  const { exercise, onAdd, onModify } = route.params;

  //Handlers
  const handleSubmit = (data) => {
    if (exercise) {
      onModify(data);
    } else {
      onAdd(data); // Add new exercise
    }
    navigation.goBack();
  };

  //Views
  return (
    <Screen>
      <WorkoutForm
        originalExercise={exercise}
        onSubmit={handleSubmit}
        onCancel={() => navigation.goBack()}
      />
    </Screen>
  );
};

export default AddExerciseScreen;

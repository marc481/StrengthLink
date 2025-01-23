import React from "react";
import WorkoutForm from "../entity/WorkoutForm";

const AddExerciseScreen = ({ route, navigation }) => {
  const { exercise, onSave, onCancel } = route.params || {};

  return (
    <WorkoutForm
      originalExercise={exercise}
      onSubmit={(updatedExercise) => {
        onSave(updatedExercise);
        navigation.goBack();
      }}
      onCancel={() => navigation.goBack()}
    />
  );
};

export default AddExerciseScreen;

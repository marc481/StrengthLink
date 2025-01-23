import React from "react";
import WorkoutForm from "../entity/WorkoutForm";
import Screen from "../layout/Screen";

const AddExerciseScreen = ({ route, navigation }) => {
  const { exercise, onSave } = route.params;

  const handleSubmit = (data) => {
    if (onSave) {
      onSave(data);
      navigation.goBack();
    }
  };

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

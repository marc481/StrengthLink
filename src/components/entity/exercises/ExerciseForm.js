import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Form from "../../UI/Form";
import { Button, ButtonTray } from "../../UI/Button";

const defaultExercise = {
  ExerciseID: Math.floor(100000 + Math.random() * 900000),
  ExerciseName: "",
  Sets: 3,
  Reps: 10,
  Weight: 0,
};

const ExerciseForm = ({ originalExercise, onSubmit, onCancel }) => {
  const [exercise, setExercise] = useState(originalExercise || defaultExercise);

  const handleChange = (field, value) => {
    setExercise({ ...exercise, [field]: value });
  };

  const handleSubmit = () => {
    onSubmit(exercise);
  };

  return (
    <View style={styles.container}>
      <Form.InputText
        label="Exercise Name"
        value={exercise.ExerciseName}
        onChange={(value) => handleChange("ExerciseName", value)}
      />
      <Form.InputText
        label="Sets"
        value={exercise.Sets.toString()}
        onChange={(value) => handleChange("Sets", parseInt(value) || 0)}
      />
      <Form.InputText
        label="Reps"
        value={exercise.Reps.toString()}
        onChange={(value) => handleChange("Reps", parseInt(value) || 0)}
      />
      <Form.InputText
        label="Weight (kg)"
        value={exercise.Weight.toString()}
        onChange={(value) => handleChange("Weight", parseFloat(value) || 0)}
      />

      <ButtonTray>
        <Button label="Save Exercise" onPress={handleSubmit} />
        <Button
          label="Cancel"
          onPress={onCancel}
          styleButton={{ backgroundColor: "mistyrose" }}
          styleLabel={{ color: "red" }}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
});

export default ExerciseForm;

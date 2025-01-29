import React, { useState } from "react";
import Form from "../../UI/Form";
import Icons from "../../UI/icons";

const defaultExercise = {
  id: null,
  name: "",
  sets: "",
  reps: "",
  weight: "",
};

const WorkoutForm = ({ originalExercise, onSubmit, onCancel }) => {
  // Initialisation
  const initialExercise = originalExercise || {
    ...defaultExercise,
    id: Date.now(), // Use Date.now() to ensure unique ID
  };

  // State
  const [exercise, setExercise] = useState(initialExercise);

  // Update
  const handleChange = (field, value) =>
    setExercise({ ...exercise, [field]: value });

  // Handlers
  const handleSubmit = () => {
    if (
      !exercise.name ||
      !exercise.sets ||
      !exercise.reps ||
      !exercise.weight
    ) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit({
      ...exercise,
      sets: parseInt(exercise.sets, 10),
      reps: parseInt(exercise.reps, 10),
      weight: parseFloat(exercise.weight),
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={originalExercise ? "Modify" : "Add"}
      submitIcon={originalExercise ? <Icons.Edit /> : <Icons.Add />}
    >
      <Form.InputText
        label="Exercise Name"
        value={exercise.name}
        onChange={(value) => handleChange("name", value)}
      />
      <Form.InputText
        label="Sets"
        value={exercise.sets.toString()}
        onChange={(value) => handleChange("sets", value)}
        keyboardType="numeric"
      />
      <Form.InputText
        label="Reps"
        value={exercise.reps.toString()}
        onChange={(value) => handleChange("reps", value)}
        keyboardType="numeric"
      />
      <Form.InputText
        label="Weight (kg)"
        value={exercise.weight.toString()}
        onChange={(value) => handleChange("weight", value)}
        keyboardType="numeric"
      />
    </Form>
  );
};

export default WorkoutForm;

import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Form from "../../UI/Form";
import { Button, ButtonTray } from "../../UI/Button";
import ExerciseItem from "../exercises/ExerciseItem";
import ExerciseInputModal from "../exercises/ExerciseInputModal"; // Import the modal

const defaultWorkout = {
  WorkoutID: Math.floor(100000 + Math.random() * 900000),
  WorkoutName: "",
  Exercises: [],
};

const WorkoutForm = ({ originalWorkout, onSubmit, onCancel }) => {
  const [workout, setWorkout] = useState(originalWorkout || defaultWorkout);
  const [modalVisible, setModalVisible] = useState(false);

  const generateExerciseID = () => Math.floor(100000 + Math.random() * 900000);

  // Open modal for user input
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  // Save exercise from modal input
  const handleSaveExercise = (exercise) => {
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      Exercises: [
        ...prevWorkout.Exercises,
        { ...exercise, ExerciseID: generateExerciseID() },
      ],
    }));
  };

  const handleSubmit = () => {
    onSubmit(workout);
  };

  return (
    <View style={styles.container}>
      <Form.InputText
        label="Workout Name"
        value={workout.WorkoutName}
        onChange={(value) => setWorkout({ ...workout, WorkoutName: value })}
      />

      <Text style={styles.subHeader}>Exercises</Text>
      <FlatList
        data={workout.Exercises}
        keyExtractor={(item) => item.ExerciseID.toString()} // Ensure unique keys
        renderItem={({ item }) => (
          <ExerciseItem exercise={item} onEdit={() => {}} onDelete={() => {}} />
        )}
      />

      {/* Add Exercise Button */}
      <Button label="Add Exercise" onPress={handleOpenModal} />

      {/* Exercise Input Modal */}
      <ExerciseInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveExercise}
      />

      <ButtonTray>
        <Button label="Save Workout" onPress={handleSubmit} />
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
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
});

export default WorkoutForm;

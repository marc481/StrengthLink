import { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Alert } from "react-native";
import Form from "../../UI/Form";
import { Button, ButtonTray } from "../../UI/Button";
import ExerciseItem from "../exercises/ExerciseItem";
import ExerciseInputModal from "../exercises/ExerciseInputModal";
import { COLORS, STYLES, SPACING, FONTS } from "../../../config/theme";

const defaultWorkout = {
  WorkoutID: Math.floor(100000 + Math.random() * 900000),
  WorkoutName: "",
  WorkoutDate: "",
  Exercises: [],
};

const WorkoutForm = ({ originalWorkout, onSubmit, onCancel }) => {
  const [workout, setWorkout] = useState(originalWorkout || defaultWorkout);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingExercise, setEditingExercise] = useState(null); // Track editing state

  const generateExerciseID = () => Math.floor(100000 + Math.random() * 900000);

  // Open modal for user input
  const handleOpenModal = () => {
    setEditingExercise(null); // Reset to adding mode
    setModalVisible(true);
  };

  // Save exercise (new or edited)
  const handleSaveExercise = (exercise) => {
    if (editingExercise) {
      // Edit existing exercise
      setWorkout((prevWorkout) => ({
        ...prevWorkout,
        Exercises: prevWorkout.Exercises.map((ex) =>
          ex.ExerciseID === editingExercise.ExerciseID ? exercise : ex
        ),
      }));
    } else {
      // Add new exercise
      setWorkout((prevWorkout) => ({
        ...prevWorkout,
        Exercises: [
          ...prevWorkout.Exercises,
          { ...exercise, ExerciseID: generateExerciseID() },
        ],
      }));
    }
    setModalVisible(false);
  };

  // Edit existing exercise
  const handleEditExercise = (exercise) => {
    setEditingExercise(exercise);
    setModalVisible(true);
  };

  // Delete exercise
  const handleDeleteExercise = (exerciseID) => {
    Alert.alert(
      "Delete Exercise",
      "Are you sure you want to delete this exercise?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            setWorkout((prevWorkout) => ({
              ...prevWorkout,
              Exercises: prevWorkout.Exercises.filter(
                (ex) => ex.ExerciseID !== exerciseID
              ),
            }));
          },
          style: "destructive",
        },
      ]
    );
  };

  // Auto-format date to DD/MM/YYYY
  const handleDateChange = (text) => {
    let formatted = text.replace(/\D/g, ""); // Remove non-numeric characters
    if (formatted.length > 2)
      formatted = `${formatted.slice(0, 2)}/${formatted.slice(2)}`;
    if (formatted.length > 5)
      formatted = `${formatted.slice(0, 5)}/${formatted.slice(5, 9)}`;
    setWorkout({ ...workout, WorkoutDate: formatted });
  };

  const handleSubmit = () => {
    const [day, month, year] = workout.WorkoutDate.split("/");
    const formattedDate = `${year}-${month}-${day}`;
    onSubmit({ ...workout, WorkoutDate: formattedDate });
  };

  return (
    <ScrollView style={STYLES.container}>
      <View style={styles.formContainer}>
        <Form.InputText
          label="Workout Name"
          value={workout.WorkoutName}
          onChange={(value) => setWorkout({ ...workout, WorkoutName: value })}
        />

        <Text style={styles.subHeader}>Workout Date</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/YYYY"
          value={workout.WorkoutDate}
          onChangeText={handleDateChange}
          keyboardType="numeric"
          maxLength={10}
        />

        <Text style={styles.subHeader}>Exercises</Text>
        {workout.Exercises.length > 0 ? (
          workout.Exercises.map((exercise) => (
            <ExerciseItem
              key={exercise.ExerciseID}
              exercise={exercise}
              onEdit={() => handleEditExercise(exercise)}
              onDelete={() => handleDeleteExercise(exercise.ExerciseID)}
            />
          ))
        ) : (
          <Text style={styles.noExercisesText}>No exercises added yet.</Text>
        )}

        <View style={styles.buttonContainer}>
          <Button label="Add Exercise" onPress={handleOpenModal} />
        </View>

        <ButtonTray>
          <Button label="Save Workout" onPress={handleSubmit} />
          <Button label="Cancel" onPress={onCancel} variant="delete" />
        </ButtonTray>

        <ExerciseInputModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleSaveExercise}
          initialExercise={editingExercise} // Pass exercise if editing
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: COLORS.background, // Ensure background matches theme
    padding: SPACING.medium,
    borderRadius: 10,
    margin: SPACING.medium,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  subHeader: {
    ...FONTS.bold,
    marginTop: SPACING.small,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLORS.inputBackground,
  },
  noExercisesText: {
    ...FONTS.muted,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: SPACING.medium,
  },
});

export default WorkoutForm;

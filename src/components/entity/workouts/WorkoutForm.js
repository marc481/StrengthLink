// WorkoutForm.js
import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import Form from "../../UI/Form";
import { Button, ButtonTray } from "../../UI/Button";
import ExerciseItem from "../exercises/ExerciseItem";
import ExerciseInputModal from "../exercises/ExerciseInputModal";
import CalendarModal from "./CalendarModal";
import { COLORS, STYLES, SPACING, FONTS } from "../../../config/theme";

const defaultWorkout = {
  WorkoutName: "",
  WorkoutDate: "",
  Exercises: [],
};

const WorkoutForm = ({ originalWorkout, onSubmit, onCancel }) => {
  const getValidDate = (dateStr) => {
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? new Date() : parsed;
  };

  const initialDate =
    originalWorkout && originalWorkout.WorkoutDate
      ? getValidDate(originalWorkout.WorkoutDate)
      : new Date();

  const [workout, setWorkout] = useState(originalWorkout || defaultWorkout);
  const [date, setDate] = useState(initialDate);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingExercise, setEditingExercise] = useState(null);

  const formatDateObject = (dateObj) => {
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleOpenModal = () => {
    setEditingExercise(null);
    setModalVisible(true);
  };

  const generateExerciseID = () => Math.floor(100000 + Math.random() * 900000);

  const handleSaveExercise = (exercise) => {
    if (editingExercise) {
      setWorkout((prevWorkout) => ({
        ...prevWorkout,
        Exercises: prevWorkout.Exercises.map((ex) =>
          ex.ExerciseID === editingExercise.ExerciseID
            ? { ...exercise, ExerciseID: editingExercise.ExerciseID }
            : ex
        ),
      }));
    } else {
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

  const handleEditExercise = (exercise) => {
    setEditingExercise(exercise);
    setModalVisible(true);
  };

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

  const handleSubmit = () => {
    onSubmit({ ...workout, WorkoutDate: workout.WorkoutDate });
  };

  return (
    <ScrollView style={STYLES.container}>
      <View style={styles.formContainer}>
        {/* Workout name input */}
        <Form.InputText
          label="Workout Name"
          value={workout.WorkoutName}
          onChange={(value) => setWorkout({ ...workout, WorkoutName: value })}
        />

        {/* Display and pick the workout date */}
        <Text style={styles.subHeader}>Workout Date</Text>
        <Button
          label={formatDateObject(new Date(workout.WorkoutDate || date))}
          onPress={() => setCalendarOpen(true)}
        />

        {/* CalendarModal integration */}
        <CalendarModal
          visible={isCalendarOpen}
          date={date}
          onConfirm={(selectedDate) => {
            setDate(selectedDate);
            // Build the ISO string using local date values
            const isoDate =
              selectedDate.getFullYear() +
              "-" +
              (selectedDate.getMonth() + 1).toString().padStart(2, "0") +
              "-" +
              selectedDate.getDate().toString().padStart(2, "0");
            setWorkout({
              ...workout,
              WorkoutDate: isoDate,
            });
            setCalendarOpen(false);
          }}
          onCancel={() => setCalendarOpen(false)}
        />

        {/* List of exercises */}
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

        {/* Button to add a new exercise */}
        <View style={styles.buttonContainer}>
          <Button label="Add Exercise" onPress={handleOpenModal} />
        </View>

        {/* Save and Cancel buttons */}
        <ButtonTray>
          <Button label="Save Workout" onPress={handleSubmit} />
          <Button label="Cancel" onPress={onCancel} variant="delete" />
        </ButtonTray>

        {/* Exercise input modal */}
        <ExerciseInputModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleSaveExercise}
          initialExercise={editingExercise}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: COLORS.background,
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
    marginBottom: SPACING.small / 2,
  },
  noExercisesText: {
    ...FONTS.muted,
    textAlign: "center",
    marginVertical: SPACING.medium,
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: SPACING.medium,
  },
});

export default WorkoutForm;

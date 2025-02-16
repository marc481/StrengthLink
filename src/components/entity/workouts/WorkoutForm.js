import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const WorkoutForm = ({ navigation, route }) => {
  const { onAdd } = route.params || {};

  // Workout state
  const [workout, setWorkout] = useState({
    WorkoutName: "",
    WorkoutDate: new Date().toISOString().split("T")[0],
    Exercises: [],
  });

  // Handle input change
  const handleChange = (field, value) => {
    setWorkout((prev) => ({ ...prev, [field]: value }));
  };

  // Add Exercise
  const handleAddExercise = (exercise) => {
    setWorkout((prev) => ({
      ...prev,
      Exercises: [...prev.Exercises, exercise], // ✅ Store exercises in workout
    }));
  };

  // Save Workout
  const handleSaveWorkout = () => {
    if (!workout.WorkoutName.trim()) {
      alert("Workout name cannot be empty!");
      return;
    }

    onAdd(workout); // ✅ Save workout with exercises

    navigation.goBack(); // ✅ Go back to WorkoutScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workout</Text>

      {/* Workout Name */}
      <TextInput
        style={styles.input}
        placeholder="Workout Name"
        value={workout.WorkoutName}
        onChangeText={(value) => handleChange("WorkoutName", value)}
      />

      {/* Workout Date */}
      <Text style={styles.label}>Workout Date: {workout.WorkoutDate}</Text>

      {/* Buttons Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addExerciseButton}
          onPress={() =>
            navigation.navigate("AddExerciseScreen", {
              onAddExercise: handleAddExercise,
            })
          }
        >
          <Text style={styles.buttonText}>+ Add Exercise</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveWorkout}>
          <Text style={styles.buttonText}>Save Workout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.large,
  },
  header: {
    ...FONTS.header,
    marginBottom: SPACING.medium,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: SPACING.small,
    backgroundColor: COLORS.inputBackground,
    fontSize: 16,
    marginBottom: SPACING.medium,
  },
  label: {
    ...FONTS.body,
    marginBottom: SPACING.medium,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SPACING.medium,
  },
  addExerciseButton: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginRight: SPACING.small,
  },
  saveButton: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    ...FONTS.button,
  },
});

export default WorkoutForm;

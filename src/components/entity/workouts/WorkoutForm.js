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
  const { onAddWorkout } = route.params || {};

  // Generate a unique WorkoutID
  const generateWorkoutID = () => Date.now().toString();

  // Workout state
  const [workout, setWorkout] = useState({
    WorkoutID: generateWorkoutID(),
    WorkoutName: "",
    WorkoutDate: new Date().toISOString().split("T")[0],
    Exercises: [], // Stores linked exercises
  });

  // Handle input change
  const handleChange = (field, value) => {
    setWorkout((prev) => ({ ...prev, [field]: value }));
  };

  // Save Workout and Navigate to WorkoutViewScreen
  const handleSaveWorkout = () => {
    if (!workout.WorkoutName.trim()) {
      alert("Workout name cannot be empty!");
      return;
    }

    onAddWorkout(workout); // ✅ Save workout with exercises

    // ✅ Navigate to `WorkoutViewScreen` instead of `ExerciseListScreen`
    navigation.replace("WorkoutViewScreen", {
      workoutID: workout.WorkoutID, // ✅ Pass only the workout ID
    });
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

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveWorkout}>
          <Text style={styles.buttonText}>Next: View Workout</Text>
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
    justifyContent: "center",
    marginTop: SPACING.medium,
  },
  saveButton: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    ...FONTS.button,
  },
});

export default WorkoutForm;

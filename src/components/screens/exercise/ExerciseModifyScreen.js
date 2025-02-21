import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { WorkoutContext } from "../../../../App";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const ExerciseModifyScreen = ({ navigation, route }) => {
  const { workoutID, exercise } = route.params;
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  // Find the correct workout
  const workoutIndex = workouts.findIndex((w) => w.WorkoutID === workoutID);
  if (workoutIndex === -1) {
    console.error("❌ Workout not found:", workoutID);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Workout not found.</Text>
      </View>
    );
  }

  // State to modify exercise
  const [updatedExercise, setUpdatedExercise] = useState({ ...exercise });

  // Handle input change
  const handleChange = (field, value) => {
    setUpdatedExercise((prev) => ({ ...prev, [field]: value }));
  };

  // Save updated exercise
  const handleSaveExercise = () => {
    if (!updatedExercise.ExerciseName.trim()) {
      alert("Exercise name cannot be empty!");
      return;
    }

    // Clone workouts and update the exercise in the selected workout
    const updatedWorkouts = [...workouts];
    updatedWorkouts[workoutIndex] = {
      ...updatedWorkouts[workoutIndex],
      Exercises: updatedWorkouts[workoutIndex].Exercises.map((ex) =>
        ex === exercise ? updatedExercise : ex
      ),
    };

    setWorkouts(updatedWorkouts);

    console.log("✅ Exercise modified:", updatedExercise);
    navigation.goBack(); // ✅ Go back to Workout View
  };

  // Delete exercise
  const handleDeleteExercise = () => {
    Alert.alert(
      "Delete Exercise",
      "Are you sure you want to delete this exercise?",
      [
        { text: "Cancel" },
        {
          text: "Delete",
          onPress: () => {
            const updatedWorkouts = [...workouts];
            updatedWorkouts[workoutIndex].Exercises = updatedWorkouts[
              workoutIndex
            ].Exercises.filter((ex) => ex !== exercise);

            setWorkouts(updatedWorkouts);
            console.log("🗑️ Exercise deleted:", exercise);
            navigation.goBack(); // ✅ Go back to Workout View
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Modify Exercise</Text>

      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={updatedExercise.ExerciseName}
        onChangeText={(value) => handleChange("ExerciseName", value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Sets"
        value={updatedExercise.Sets}
        onChangeText={(value) => handleChange("Sets", value)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Reps"
        value={updatedExercise.Reps}
        onChangeText={(value) => handleChange("Reps", value)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={updatedExercise.Weight}
        onChangeText={(value) => handleChange("Weight", value)}
        keyboardType="numeric"
      />

      {/* Save & Delete Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveExercise}
        >
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteExercise}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.medium,
  },
  header: {
    ...FONTS.header,
    textAlign: "center",
    marginBottom: SPACING.medium,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: 8,
    padding: SPACING.small,
    backgroundColor: COLORS.inputBackground,
    fontSize: 16,
    marginBottom: SPACING.medium,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SPACING.medium,
  },
  saveButton: {
    flex: 1,
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    marginRight: SPACING.small,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "mistyrose",
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: SPACING.small,
  },
  buttonText: { ...FONTS.button },
  deleteButtonText: { ...FONTS.button, color: "red" },
  errorText: { ...FONTS.body, textAlign: "center", color: "red" },
});

export default ExerciseModifyScreen;

import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { WorkoutContext } from "../../../../App";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const ExerciseAddScreen = ({ route, navigation }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);
  const { workoutID } = route.params;

  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSaveExercise = () => {
    console.log("Exercise Name:", exerciseName);
    console.log("Sets (before conversion):", sets);
    console.log("Reps (before conversion):", reps);
    console.log("Weight (before conversion):", weight);

    if (!exerciseName.trim()) {
      alert("Exercise name cannot be empty!");
      return;
    }

    const newExercise = {
      ExerciseName: String(exerciseName), // Ensure it's a string
      Sets: Number(sets) || 0, // Convert to number
      Reps: Number(reps) || 0, // Convert to number
      Weight: Number(weight) || 0, // Convert to number
    };

    console.log("✅ Added exercise to workout:", newExercise);

    const updatedWorkouts = workouts.map((w) =>
      w.WorkoutID === workoutID
        ? { ...w, Exercises: [...w.Exercises, newExercise] }
        : w
    );
    setWorkouts(updatedWorkouts);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Exercise</Text>

      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={exerciseName}
        onChangeText={setExerciseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Sets"
        value={sets}
        onChangeText={setSets}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Reps"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveExercise}>
        <Text style={styles.buttonText}>Save Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.medium,
    backgroundColor: COLORS.background,
  },
  header: {
    fontSize: FONTS.header || 20, // Ensure fallback number
    marginBottom: SPACING.medium,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: SPACING.small,
    marginBottom: SPACING.medium,
    backgroundColor: COLORS.inputBackground,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.buttonText,
    fontSize: typeof FONTS.body === "number" ? FONTS.body : 16, // Ensure it's a number
    fontWeight: "bold",
  },
});

export default ExerciseAddScreen;

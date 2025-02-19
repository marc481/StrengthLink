import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const ExerciseForm = ({ navigation, route }) => {
  const { onAdd } = route.params || {};

  // Exercise state
  const [exercise, setExercise] = useState({
    ExerciseName: "",
    Sets: "",
    Reps: "",
    Weight: "",
  });

  // Handle input change
  const handleChange = (field, value) => {
    setExercise((prev) => ({ ...prev, [field]: value }));
  };

  // Save Exercise
  const handleSaveExercise = () => {
    if (!exercise.ExerciseName.trim()) {
      alert("Exercise name cannot be empty!");
      return;
    }

    onAdd(exercise); // Save exercise data
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Exercise</Text>

      {/* Exercise Name */}
      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={exercise.ExerciseName}
        onChangeText={(value) => handleChange("ExerciseName", value)}
      />

      {/* Sets */}
      <TextInput
        style={styles.input}
        placeholder="Sets"
        value={exercise.Sets}
        onChangeText={(value) => handleChange("Sets", value)}
        keyboardType="numeric"
      />

      {/* Reps */}
      <TextInput
        style={styles.input}
        placeholder="Reps"
        value={exercise.Reps}
        onChangeText={(value) => handleChange("Reps", value)}
        keyboardType="numeric"
      />

      {/* Weight */}
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={exercise.Weight}
        onChangeText={(value) => handleChange("Weight", value)}
        keyboardType="numeric"
      />

      {/* Buttons Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveExercise}
        >
          <Text style={styles.buttonText}>Save Exercise</Text>
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
  buttonContainer: {
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
    color: COLORS.buttonText,
  },
});

export default ExerciseForm;

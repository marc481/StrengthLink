import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const AddExerciseScreen = ({ navigation, route }) => {
  const { onAddExercise } = route.params || {};

  // State for new exercise
  const [exercise, setExercise] = useState({
    ExerciseName: "",
    Sets: "",
    Reps: "",
    Weight: "",
  });

  // Handle input change
  const handleChange = (field, value) => {
    setExercise((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Save Exercise
  const handleSave = () => {
    if (!exercise.ExerciseName.trim()) {
      alert("Exercise name cannot be empty!");
      return;
    }

    if (onAddExercise) {
      onAddExercise(exercise);
    } else {
      console.error("❌ Error: `onAddExercise` function is missing!");
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Exercise</Text>

      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={exercise.ExerciseName}
        onChangeText={(value) => handleChange("ExerciseName", value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Sets"
        value={exercise.Sets}
        onChangeText={(value) => handleChange("Sets", value)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Reps"
        value={exercise.Reps}
        onChangeText={(value) => handleChange("Reps", value)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Weight (kg/lbs)"
        value={exercise.Weight}
        onChangeText={(value) => handleChange("Weight", value)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.large,
    justifyContent: "center",
  },
  header: {
    ...FONTS.header,
    textAlign: "center",
    marginBottom: SPACING.large,
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
  saveButton: {
    backgroundColor: COLORS.buttonBackground,
    paddingVertical: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    marginTop: SPACING.large,
  },
  buttonText: {
    ...FONTS.button,
    color: COLORS.buttonText,
  },
});

export default AddExerciseScreen;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const ExerciseModifyScreen = ({ navigation, route }) => {
  const [updatedExercise, setUpdatedExercise] = useState(null);
  const [modifyExercise, setModifyExercise] = useState(null);

  useEffect(() => {
    if (route.params?.exercise) {
      setUpdatedExercise({ ...route.params.exercise });
    } else {
      console.error("❌ No exercise found in route params!");
    }

    if (route.params?.onModifyExercise) {
      setModifyExercise(() => route.params.onModifyExercise); // ✅ Store safely
    }
  }, [route.params]);

  // Handle input change
  const handleChange = (field, value) => {
    setUpdatedExercise((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Save Exercise
  const handleSave = () => {
    if (!updatedExercise || !updatedExercise.ExerciseName?.trim()) {
      alert("Exercise name cannot be empty!");
      return;
    }

    if (typeof modifyExercise === "function") {
      modifyExercise(updatedExercise); // ✅ Call safely
    } else {
      console.error("❌ Error: `onModifyExercise` function is missing!");
    }

    navigation.goBack();
  };

  if (!updatedExercise) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Exercise not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Exercise</Text>

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
        placeholder="Weight (kg/lbs)"
        value={updatedExercise.Weight}
        onChangeText={(value) => handleChange("Weight", value)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.large,
  },
  header: { ...FONTS.header, textAlign: "center", marginBottom: SPACING.large },
  errorText: { ...FONTS.body, textAlign: "center", color: "red" },
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
  buttonText: { ...FONTS.button, color: COLORS.buttonText },
});

export default ExerciseModifyScreen;

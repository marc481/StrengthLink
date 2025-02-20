import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import { WorkoutContext } from "../../../../App";

const WorkoutModifyScreen = ({ navigation, route }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);
  const { workout } = route.params;

  if (!workout || !workout.WorkoutID) {
    console.error("❌ Workout is undefined or missing WorkoutID:", workout);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Workout not found.</Text>
      </View>
    );
  }

  const [updatedWorkout, setUpdatedWorkout] = useState({ ...workout });

  // Handle input change
  const handleChange = (field, value) => {
    setUpdatedWorkout((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Save Updated Workout
  const handleSave = () => {
    if (!updatedWorkout.WorkoutName.trim()) {
      alert("Workout name cannot be empty!");
      return;
    }

    const updatedWorkouts = workouts.map((w) =>
      w.WorkoutID === workout.WorkoutID ? { ...w, ...updatedWorkout } : w
    );

    setWorkouts(updatedWorkouts);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Modify Workout</Text>

      <TextInput
        style={styles.input}
        placeholder="Workout Name"
        value={updatedWorkout.WorkoutName}
        onChangeText={(value) => handleChange("WorkoutName", value)}
      />

      <Text style={styles.label}>Date: {updatedWorkout.WorkoutDate}</Text>

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
  errorText: { ...FONTS.body, textAlign: "center", color: "red" },
  header: { ...FONTS.header, textAlign: "center", marginBottom: SPACING.large },
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
  label: { ...FONTS.body, marginBottom: SPACING.medium },
  saveButton: {
    backgroundColor: COLORS.buttonBackground,
    paddingVertical: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    marginTop: SPACING.large,
  },
  buttonText: { ...FONTS.button, color: COLORS.buttonText },
});

export default WorkoutModifyScreen;

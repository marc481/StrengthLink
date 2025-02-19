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

const WorkoutAddScreen = ({ navigation }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  const [workout, setWorkout] = useState({
    WorkoutID: Date.now().toString(), // ✅ Unique ID
    WorkoutName: "",
    Exercises: [],
  });

  const handleChange = (field, value) => {
    setWorkout((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveWorkout = () => {
    if (!workout.WorkoutName.trim()) {
      alert("Workout name cannot be empty!");
      return;
    }

    const updatedWorkouts = [...workouts, workout];
    setWorkouts(updatedWorkouts); // ✅ Saves to state & Excel

    navigation.goBack(); // ✅ Return to WorkoutListScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Workout</Text>

      <TextInput
        style={styles.input}
        placeholder="Workout Name"
        value={workout.WorkoutName}
        onChangeText={(value) => handleChange("WorkoutName", value)}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveWorkout}>
        <Text style={styles.buttonText}>Save Workout</Text>
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

export default WorkoutAddScreen;

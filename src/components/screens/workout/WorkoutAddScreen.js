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

const WorkoutAddScreen = ({ navigation }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);
  const [workoutName, setWorkoutName] = useState("");

  const handleSaveWorkout = () => {
    if (!workoutName.trim()) {
      alert("Workout name cannot be empty!");
      return;
    }

    const newWorkout = {
      WorkoutID: Date.now().toString(),
      WorkoutName: workoutName,
      WorkoutDate: new Date().toISOString().split("T")[0],
      Exercises: [],
    };

    setWorkouts([...workouts, newWorkout]);

    console.log("✅ Navigating to WorkoutViewScreen with workout:", newWorkout);

    navigation.navigate("WorkoutViewScreen", {
      workoutID: newWorkout.WorkoutID,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Workout</Text>

      <TextInput
        style={styles.input}
        placeholder="Workout Name"
        value={workoutName}
        onChangeText={setWorkoutName}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveWorkout}>
        <Text style={styles.buttonText}>Next: Add Exercises</Text>
      </TouchableOpacity>
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
  saveButton: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    marginTop: SPACING.large,
  },
  buttonText: { ...FONTS.button },
});

export default WorkoutAddScreen;

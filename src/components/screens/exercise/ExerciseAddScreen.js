import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import { WorkoutContext } from "../../../../App";

const ExerciseAddScreen = ({ route, navigation }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);
  const { workoutID } = route.params;

  const [exercise, setExercise] = useState({
    ExerciseName: "",
    Sets: "",
    Reps: "",
    Weight: "",
  });

  const handleSave = () => {
    if (!exercise.ExerciseName.trim()) {
      alert("Exercise name cannot be empty!");
      return;
    }

    const updatedWorkouts = workouts.map((w) =>
      w.WorkoutID === workoutID
        ? { ...w, Exercises: [...w.Exercises, exercise] }
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
        value={exercise.ExerciseName}
        onChangeText={(value) =>
          setExercise({ ...exercise, ExerciseName: value })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Sets"
        value={exercise.Sets}
        onChangeText={(value) => setExercise({ ...exercise, Sets: value })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Reps"
        value={exercise.Reps}
        onChangeText={(value) => setExercise({ ...exercise, Reps: value })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={exercise.Weight}
        onChangeText={(value) => setExercise({ ...exercise, Weight: value })}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
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
  header: { ...FONTS.header, marginBottom: SPACING.medium },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: SPACING.small,
    fontSize: 16,
    marginBottom: SPACING.medium,
    backgroundColor: COLORS.inputBackground,
  },
  button: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { ...FONTS.button },
});

export default ExerciseAddScreen;

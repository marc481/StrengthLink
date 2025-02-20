import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import { WorkoutContext } from "../../../../App";

const ExerciseViewScreen = ({ route, navigation }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);
  const { workoutID, exercise } = route.params;

  // 🔥 Find the workout in state
  const workoutIndex = workouts.findIndex((w) => w.WorkoutID === workoutID);
  if (workoutIndex === -1) {
    console.error("❌ Workout not found:", workoutID);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Workout not found.</Text>
      </View>
    );
  }
  const workout = workouts[workoutIndex];

  // 🔥 Delete Exercise
  const handleDeleteExercise = () => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[workoutIndex].Exercises = workout.Exercises.filter(
      (ex) => ex !== exercise
    );

    setWorkouts(updatedWorkouts);
    navigation.goBack(); // ✅ Go back after deletion
  };

  // 🔥 Modify Exercise
  const handleModifyExercise = () => {
    navigation.navigate("ExerciseModifyScreen", { workoutID, exercise });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{exercise.ExerciseName}</Text>
      <Text style={styles.details}>Sets: {exercise.Sets}</Text>
      <Text style={styles.details}>Reps: {exercise.Reps}</Text>
      <Text style={styles.details}>Weight: {exercise.Weight}kg</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.modifyButton}
          onPress={handleModifyExercise}
        >
          <Text style={styles.buttonText}>✏ Modify</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteExercise}
        >
          <Text style={styles.buttonText}>🗑 Delete</Text>
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
    alignItems: "center",
  },
  errorText: {
    ...FONTS.body,
    textAlign: "center",
    color: "red",
  },
  header: {
    ...FONTS.header,
    marginBottom: SPACING.medium,
  },
  details: {
    ...FONTS.body,
    fontSize: 18,
    marginBottom: SPACING.small,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: SPACING.large,
  },
  modifyButton: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    marginRight: SPACING.medium,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    ...FONTS.button,
    color: "white",
  },
});

export default ExerciseViewScreen;

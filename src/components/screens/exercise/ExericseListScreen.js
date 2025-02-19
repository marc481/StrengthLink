import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ExerciseList from "../../entity/exercises/ExcerciseList";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import { WorkoutContext } from "../../../../App";

const ExerciseListScreen = ({ navigation, route }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);
  const { workout } = route.params;

  if (!workout || !workout.WorkoutID) {
    console.error("❌ Invalid workout data:", workout);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Workout not found.</Text>
      </View>
    );
  }

  const selectedWorkout = workouts.find(
    (w) => w.WorkoutID === workout.WorkoutID
  ) || {
    exercises: [],
  };
  const [exercises, setExercises] = useState(selectedWorkout.exercises);

  const handleAddExercise = (newExercise) => {
    const updatedExercises = [...exercises, newExercise];

    const updatedWorkouts = workouts.map((w) =>
      w.WorkoutID === workout.WorkoutID
        ? { ...w, exercises: updatedExercises }
        : w
    );

    setWorkouts(updatedWorkouts);
    setExercises(updatedExercises);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.WorkoutName} - Exercises</Text>

      {/* Exercise List */}
      <ExerciseList
        exercises={exercises}
        onSelect={(exercise) =>
          navigation.navigate("ExerciseViewScreen", { exercise })
        }
      />

      {/* Add Exercise Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate("ExerciseAddScreen", { onAdd: handleAddExercise })
        }
      >
        <Text style={styles.addButtonText}>+ Add Exercise</Text>
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
  errorText: {
    ...FONTS.body,
    textAlign: "center",
    color: "red",
  },
  header: {
    ...FONTS.header,
    textAlign: "center",
    marginBottom: SPACING.medium,
  },
  addButton: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: SPACING.small,
    alignItems: "center",
    marginTop: SPACING.large,
  },
  addButtonText: {
    ...FONTS.button,
  },
});

export default ExerciseListScreen;

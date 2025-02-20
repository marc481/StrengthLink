import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import { WorkoutContext } from "../../../../App";
import ExerciseItem from "../../entity/workouts/WorkoutItem";

const WorkoutViewScreen = ({ route, navigation }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);
  const workoutID = route?.params?.workoutID;

  if (!workoutID) {
    console.error("❌ Missing workoutID in WorkoutViewScreen");
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Workout not found.</Text>
      </View>
    );
  }

  // Find the correct workout using workoutID
  const selectedWorkout = workouts.find((w) => w.WorkoutID === workoutID);

  if (!selectedWorkout) {
    console.error("❌ Workout not found in state:", workoutID);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Workout not found.</Text>
      </View>
    );
  }

  const [exercises, setExercises] = useState(selectedWorkout.Exercises);

  useEffect(() => {
    console.log("📌 Loaded Workout:", selectedWorkout);
  }, [selectedWorkout]);

  // Function to add an exercise
  const handleAddExercise = (newExercise) => {
    const updatedExercises = [...exercises, newExercise];

    // Update workouts list
    const updatedWorkouts = workouts.map((w) =>
      w.WorkoutID === selectedWorkout.WorkoutID
        ? { ...w, Exercises: updatedExercises }
        : w
    );

    setWorkouts(updatedWorkouts);
    setExercises(updatedExercises);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{selectedWorkout.WorkoutName}</Text>
      <Text style={styles.label}>
        Date: {selectedWorkout.WorkoutDate || "N/A"}
      </Text>

      {/* Exercise List */}
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ExerciseViewScreen", { exercise: item })
            }
          >
            <ExerciseItem exercise={item} />
          </TouchableOpacity>
        )}
      />

      {/* Add Exercise Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate("ExerciseAddScreen", {
            workoutID: workoutID, // ✅ Pass the workout ID for reference
            onAdd: handleAddExercise,
          })
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
  header: { ...FONTS.header, marginBottom: SPACING.medium },
  label: { ...FONTS.body, marginBottom: SPACING.medium },
  addButton: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: SPACING.small,
    alignItems: "center",
    marginTop: SPACING.large,
  },
  addButtonText: { ...FONTS.button },
});

export default WorkoutViewScreen;

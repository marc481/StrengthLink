import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import WorkoutList from "../../entity/workouts/WorkoutList";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import { WorkoutContext } from "../../../../App";

const WorkoutScreen = ({ navigation }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  // Save workout to context and persist in Excel
  const handleAddWorkout = (newWorkout) => {
    const updatedWorkouts = [...workouts, newWorkout];
    setWorkouts(updatedWorkouts); // ✅ Update global state
  };

  return (
    <View style={styles.container}>
      {/* Workout List */}
      <WorkoutList
        workouts={workouts}
        onSelect={(workout) => navigation.navigate("WorkoutView", { workout })}
      />

      {/* Add Workout Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate("WorkoutForm", { onAdd: handleAddWorkout })
        }
      >
        <Text style={styles.addButtonText}>+ Add Workout</Text>
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

export default WorkoutScreen;

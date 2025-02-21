import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { WorkoutContext } from "../../../../App";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const WorkoutViewScreen = ({ route, navigation }) => {
  const { workouts } = useContext(WorkoutContext);
  const { workoutID } = route.params || {}; // Get workoutID from route params

  console.log("🔎 Navigated to WorkoutViewScreen with workoutID:", workoutID);

  // Find workout
  const workout = workouts.find((w) => w.WorkoutID === workoutID);

  if (!workout) {
    console.error("❌ Workout not found:", workoutID);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Workout not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.WorkoutName}</Text>
      <Text style={styles.label}>Date: {workout.WorkoutDate || "N/A"}</Text>

      {/* Exercise List */}
      <FlatList
        data={workout.Exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.exerciseItem}
            onPress={() =>
              navigation.navigate("ExerciseViewScreen", { exercise: item })
            }
          >
            <Text style={styles.exerciseText}>{item.ExerciseName}</Text>
            <Text style={styles.detailsText}>
              Sets: {item.Sets} | Reps: {item.Reps} | Weight: {item.Weight}kg
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.medium,
  },
  errorText: { ...FONTS.body, textAlign: "center", color: "red" },
  header: { ...FONTS.header, marginBottom: SPACING.medium },
  label: { ...FONTS.body, marginBottom: SPACING.medium },
  exerciseItem: {
    padding: SPACING.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  exerciseText: { ...FONTS.body },
  detailsText: { ...FONTS.small, color: "gray" },
});

export default WorkoutViewScreen;

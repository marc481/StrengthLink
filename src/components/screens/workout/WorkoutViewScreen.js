import React, { useContext } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { WorkoutContext } from "../../../context/WorkoutContext";
import { Button, ButtonTray } from "../../UI/Button";

const WorkoutViewScreen = ({ navigation, route }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  // ✅ Prevent crash if `route.params` is undefined
  const workout = route.params?.workout || null;

  // ✅ If there's no workout, show an error message
  if (!workout || !workout.WorkoutID) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Workout Not Found</Text>
        <Button label="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  // ✅ Handle deleting a workout
  const handleDeleteWorkout = () => {
    Alert.alert(
      "Delete Workout",
      `Are you sure you want to delete "${workout.WorkoutName}"?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            const updatedWorkouts = workouts.filter(
              (w) => w.WorkoutID !== workout.WorkoutID
            );
            setWorkouts(updatedWorkouts); // ✅ Update state

            // ✅ Navigate back to the list after deleting
            navigation.goBack();
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.WorkoutName}</Text>

      <Text style={styles.subHeader}>Exercises</Text>
      {workout.Exercises?.length > 0 ? (
        workout.Exercises.map((exercise) => (
          <Text key={exercise.ExerciseID} style={styles.exerciseText}>
            {exercise.ExerciseName} - {exercise.Sets} x {exercise.Reps} @{" "}
            {exercise.Weight}kg
          </Text>
        ))
      ) : (
        <Text style={styles.noExercisesText}>No exercises added yet.</Text>
      )}

      <ButtonTray>
        <Button
          label="Modify Workout"
          onPress={() =>
            navigation.navigate("WorkoutModifyScreen", { workout })
          }
        />
        <Button
          label="Delete Workout"
          onPress={handleDeleteWorkout}
          styleButton={{ backgroundColor: "mistyrose" }}
          styleLabel={{ color: "red" }}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  exerciseText: {
    fontSize: 14,
    marginLeft: 10,
  },
  errorText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
    marginTop: 20,
  },
  noExercisesText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    color: "gray",
  },
});

export default WorkoutViewScreen;

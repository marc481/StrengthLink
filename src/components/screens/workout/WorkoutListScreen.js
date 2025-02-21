import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { WorkoutContext } from "../../../context/WorkoutContext";
import WorkoutItem from "../../entity/workouts/WorkoutItem";
import { Button, ButtonTray } from "../../UI/Button";

const WorkoutListScreen = ({ navigation }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  const handleDeleteWorkout = (workoutID) => {
    setWorkouts(workouts.filter((w) => w.WorkoutID !== workoutID));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workouts</Text>

      {workouts.length > 0 ? (
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.WorkoutID.toString()} // Ensure unique keys
          renderItem={({ item }) => (
            <WorkoutItem
              workout={item}
              onSelect={
                () =>
                  navigation.navigate("WorkoutViewScreen", { workout: item }) // ✅ Pass workout object correctly
              }
            />
          )}
        />
      ) : (
        <Text style={styles.noWorkoutsText}>No workouts added yet.</Text>
      )}

      <ButtonTray>
        <Button
          label="Add Workout"
          onPress={() => navigation.navigate("WorkoutAddScreen")}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  noWorkoutsText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});

export default WorkoutListScreen;

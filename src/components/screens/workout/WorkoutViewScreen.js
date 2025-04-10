import React, { useContext } from "react";
import { View, Text, Alert } from "react-native";
import { WorkoutContext } from "../../../context/WorkoutContext";
import WorkoutView from "../../entity/workouts/WorkoutView";
import { COLORS, STYLES, FONTS } from "../../../config/theme";
import { Button } from "../../UI/Button";

const WorkoutViewScreen = ({ navigation, route }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);
  const workout = route.params?.workout || null;

  if (!workout || !workout.WorkoutID) {
    return (
      <View style={STYLES.container}>
        <Text style={[FONTS.bold, { color: COLORS.error }]}>
          Workout Not Found
        </Text>
        <Button label="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  // Handler for deleting the workout.
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
            setWorkouts(updatedWorkouts);
            navigation.goBack();
          },
          style: "destructive",
        },
      ]
    );
  };

  // Handler for modifying the workout.
  const handleModifyWorkout = (updatedWorkout) => {
    const updatedWorkouts = workouts.map((w) =>
      w.WorkoutID === updatedWorkout.WorkoutID ? updatedWorkout : w
    );
    setWorkouts(updatedWorkouts);
  };

  return (
    <View style={STYLES.container}>
      <WorkoutView
        workout={workout}
        onModify={() =>
          navigation.navigate("WorkoutModifyScreen", {
            workout,
            onModify: handleModifyWorkout,
          })
        }
        onDelete={handleDeleteWorkout}
      />
    </View>
  );
};

export default WorkoutViewScreen;

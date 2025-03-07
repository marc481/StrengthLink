import React, { useContext } from "react";
import { View, Text, Alert } from "react-native";
import { WorkoutContext } from "../../../context/WorkoutContext";
import { Button, ButtonTray } from "../../UI/Button";
import WorkoutView from "../../entity/workouts/WorkoutView"; // ✅ Use the correct component
import { COLORS, STYLES, FONTS } from "../../../config/theme";

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

  return (
    <View style={STYLES.container}>
      <WorkoutView
        workout={workout}
        onModify={() => navigation.navigate("WorkoutModifyScreen", { workout })}
        onDelete={handleDeleteWorkout}
      />
    </View>
  );
};

export default WorkoutViewScreen;

import React, { useContext } from "react";
import { View, FlatList, Text } from "react-native";
import { WorkoutContext } from "../../../context/WorkoutContext";
import WorkoutItem from "../../entity/workouts/WorkoutItem";
import { Button, ButtonTray } from "../../UI/Button";
import { COLORS, FONTS, STYLES } from "../../../config/theme";

const WorkoutListScreen = ({ navigation }) => {
  const { workouts } = useContext(WorkoutContext);

  const goToAddWorkout = () => {
    navigation.navigate("WorkoutAddScreen");
  };

  const goToWorkoutView = (workout) => {
    navigation.navigate("WorkoutViewScreen", { workout });
  };

  console.log("Workouts List:", workouts);
  console.log(
    "Workout IDs:",
    workouts.map((w) => w.WorkoutID)
  ); // Log all IDs to verify uniqueness

  return (
    <View style={STYLES.container}>
      <Text style={FONTS.header}>Your Workouts</Text>

      {workouts.length === 0 ? (
        <Text style={FONTS.muted}>No workouts added yet.</Text>
      ) : (
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.WorkoutID.toString()} // ✅ Ensures unique key
          renderItem={({ item }) => (
            <WorkoutItem
              workout={item}
              onSelect={() => goToWorkoutView(item)}
            />
          )}
        />
      )}

      <ButtonTray>
        <Button label="Add Workout" onPress={goToAddWorkout} />
      </ButtonTray>
    </View>
  );
};

export default WorkoutListScreen;

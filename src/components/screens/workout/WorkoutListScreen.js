import React, { useContext, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WorkoutContext } from "../../../context/WorkoutContext";
import WorkoutItem from "../../entity/workouts/WorkoutItem";
import { Button, ButtonTray } from "../../UI/Button";
import { COLORS, FONTS, STYLES } from "../../../config/theme";

const WorkoutListScreen = ({ navigation }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  const goToAddWorkout = () => {
    navigation.navigate("WorkoutAddScreen");
  };

  const goToWorkoutView = (workout) => {
    navigation.navigate("WorkoutViewScreen", { workout });
  };

  useEffect(() => {
    console.log(
      " All workouts (expanded):\n",
      JSON.stringify(workouts, null, 2)
    );
  }, [workouts]);

  const clearWorkoutData = async () => {
    await AsyncStorage.removeItem("workouts");
    setWorkouts([]);
    console.log(" Cleared all workouts from AsyncStorage.");
  };

  return (
    <View style={STYLES.container}>
      <Text style={FONTS.header}>Your Workouts</Text>

      {workouts.length === 0 ? (
        <Text style={FONTS.muted}>No workouts added yet.</Text>
      ) : (
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.WorkoutID.toString()}
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
        <Button
          label="Clear All Workouts"
          onPress={clearWorkoutData}
          variant="delete"
        />
      </ButtonTray>
    </View>
  );
};

export default WorkoutListScreen;

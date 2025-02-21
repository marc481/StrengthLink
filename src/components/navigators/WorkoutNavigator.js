import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutListScreen from "../screens/workout/WorkoutListScreen";
import WorkoutAddScreen from "../screens/workout/WorkoutAddScreen";
import WorkoutViewScreen from "../screens/workout/WorkoutViewScreen";
import WorkoutModifyScreen from "../screens/workout/WorkoutModifyScreen";
import ExerciseModifyScreen from "../screens/workout/ExerciseModifyScreen";

const Stack = createNativeStackNavigator();

const WorkoutNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="WorkoutListScreen"
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="WorkoutListScreen"
        component={WorkoutListScreen}
        options={{ title: "Workouts" }}
      />
      <Stack.Screen
        name="WorkoutAddScreen"
        component={WorkoutAddScreen}
        options={{ title: "Add Workout" }}
      />
      <Stack.Screen
        name="WorkoutViewScreen"
        component={WorkoutViewScreen}
        options={{ title: "Workout Details" }}
      />
      <Stack.Screen
        name="WorkoutModifyScreen"
        component={WorkoutModifyScreen}
        options={{ title: "Edit Workout" }}
      />
      <Stack.Screen
        name="ExerciseModifyScreen"
        component={ExerciseModifyScreen}
        options={{ title: "Edit Exercise" }}
      />
    </Stack.Navigator>
  );
};

export default WorkoutNavigator;

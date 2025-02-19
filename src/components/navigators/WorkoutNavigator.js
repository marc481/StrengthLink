import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WorkoutListScreen from "../screens/workout/WorkoutListScreen";
import WorkoutAddScreen from "../screens/workout/WorkoutAddScreen";
import WorkoutModifyScreen from "../screens/workout/WorkoutModifyScreen";
import WorkoutViewScreen from "../screens/workout/WorkoutViewScreen";

import ExerciseListScreen from "../screens/exercise/ExericseListScreen";
import ExerciseAddScreen from "../screens/exercise/ExerciseAddScreen";
import ExerciseModifyScreen from "../screens/exercise/ExerciseModifyScreen";
import ExerciseViewScreen from "../screens/exercise/ExerciseViewScreen";
import { COLORS } from "../../config/theme";

const Stack = createNativeStackNavigator();

const WorkoutNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="WorkoutListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.headerBackground },
        headerTintColor: COLORS.headerText,
        headerTitleAlign: "center",
      }}
    >
      {/* Workout Screens */}
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
        name="WorkoutModifyScreen"
        component={WorkoutModifyScreen}
        options={{ title: "Modify Workout" }}
      />
      <Stack.Screen
        name="WorkoutViewScreen"
        component={WorkoutViewScreen}
        options={{ title: "Workout Details" }}
      />

      {/* Exercise Screens */}
      <Stack.Screen
        name="ExerciseListScreen"
        component={ExerciseListScreen}
        options={{ title: "Workout Exercises" }}
      />
      <Stack.Screen
        name="ExerciseAddScreen"
        component={ExerciseAddScreen}
        options={{ title: "Add Exercise" }}
      />
      <Stack.Screen
        name="ExerciseModifyScreen"
        component={ExerciseModifyScreen}
        options={{ title: "Modify Exercise" }}
      />
      <Stack.Screen
        name="ExerciseViewScreen"
        component={ExerciseViewScreen}
        options={{ title: "Exercise Details" }}
      />
    </Stack.Navigator>
  );
};

export default WorkoutNavigator;

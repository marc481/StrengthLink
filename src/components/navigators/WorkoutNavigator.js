import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutScreen from "../screens/workout/WorkoutScreen";
import WorkoutForm from "../../components/entity/workouts/WorkoutForm";
import AddExerciseScreen from "../screens/workout/AddExerciseScreen";
import ExerciseViewScreen from "../screens/workout/ExerciseViewScreen";
import { COLORS } from "../../config/theme";

const WorkoutStack = createNativeStackNavigator();

const WorkoutNavigator = () => {
  return (
    <WorkoutStack.Navigator
      initialRouteName="WorkoutScreen"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.headerBackground },
        headerTintColor: COLORS.headerText,
        headerTitleAlign: "center",
      }}
    >
      <WorkoutStack.Screen
        name="WorkoutScreen"
        component={WorkoutScreen}
        options={{ title: "Workout" }}
      />
      <WorkoutStack.Screen
        name="WorkoutForm"
        component={WorkoutForm}
        options={{ title: "New Workout" }}
      />
      <WorkoutStack.Screen
        name="AddExerciseScreen"
        component={AddExerciseScreen}
        options={{ title: "Add Exercise" }}
      />
      <WorkoutStack.Screen
        name="ExerciseViewScreen"
        component={ExerciseViewScreen}
        options={{ title: "View Exercise Details" }}
      />
    </WorkoutStack.Navigator>
  );
};

export default WorkoutNavigator;

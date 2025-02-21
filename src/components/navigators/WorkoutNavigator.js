import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutListScreen from "../screens/workout/WorkoutListScreen";

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
    </Stack.Navigator>
  );
};

export default WorkoutNavigator;

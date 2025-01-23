import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddExerciseScreen from "../screens/AddExerciseScreen";
import { COLORS } from "../../config/theme";
import WorkoutScreen from "../screens/WorkoutScreen";

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
        options={{ title: "StrengthLink" }}
      />

      <WorkoutStack.Screen
        name="AddExerciseScreen"
        component={AddExerciseScreen}
        options={{ title: "Add Exercise" }}
      />
    </WorkoutStack.Navigator>
  );
};

export default WorkoutNavigator;

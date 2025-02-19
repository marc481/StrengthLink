import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExerciseListScreen from "../screens/exercise/ExericseListScreen";
import ExerciseAddScreen from "../screens/exercise/ExerciseAddScreen";
import ExerciseModifyScreen from "../screens/exercise/ExerciseModifyScreen";
import ExerciseViewScreen from "../screens/exercise/ExerciseViewScreen";
import { COLORS } from "../../config/theme";

const ExerciseStack = createNativeStackNavigator();

const ExerciseNavigator = () => {
  return (
    <ExerciseStack.Navigator
      initialRouteName="ExerciseListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.headerBackground },
        headerTintColor: COLORS.headerText,
        headerTitleAlign: "center",
      }}
    >
      <ExerciseStack.Screen
        name="ExerciseListScreen"
        component={ExerciseListScreen}
        options={{ title: "Workout Exercises" }}
        initialParams={{ workout: null }} // Ensures workout param is forwarded
      />

      <ExerciseStack.Screen
        name="ExerciseAddScreen"
        component={ExerciseAddScreen}
        options={{ title: "Add Exercise" }}
      />
      <ExerciseStack.Screen
        name="ExerciseModifyScreen"
        component={ExerciseModifyScreen}
        options={{ title: "Modify Exercise" }}
      />
      <ExerciseStack.Screen
        name="ExerciseViewScreen"
        component={ExerciseViewScreen}
        options={{ title: "Exercise Details" }}
      />
    </ExerciseStack.Navigator>
  );
};

export default ExerciseNavigator;

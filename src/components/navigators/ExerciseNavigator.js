import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExerciseAddScreen from "../screens/exercise/ExerciseAddScreen";
import ExerciseModifyScreen from "../screens/exercise/ExerciseModifyScreen";
import ExerciseViewScreen from "../screens/exercise/ExerciseViewScreen";
import { COLORS } from "../../config/theme";

const ExerciseStack = createNativeStackNavigator();

const ExerciseNavigator = () => {
  return (
    <ExerciseStack.Navigator
      initialRouteName="ExerciseAddScreen" // ✅ FIXED: Set correct initial screen
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.headerBackground },
        headerTintColor: COLORS.headerText,
        headerTitleAlign: "center",
      }}
    >
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

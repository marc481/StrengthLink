import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/components/navigators/RootNavigator";
import WorkoutProvider from "./src/context/WorkoutContext";
import GoalProvider from "./src/context/GoalContext";

export default function App() {
  return (
    <WorkoutProvider>
      <GoalProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </GoalProvider>
    </WorkoutProvider>
  );
}

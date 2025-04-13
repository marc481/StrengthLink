import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FooterNavigator from "./src/components/navigators/FooterNavigator";
import WorkoutProvider from "./src/context/WorkoutContext";
import GoalProvider from "./src/context/GoalContext";

const App = () => {
  return (
    <WorkoutProvider>
      <GoalProvider>
        <NavigationContainer>
          <FooterNavigator />
        </NavigationContainer>
      </GoalProvider>
    </WorkoutProvider>
  );
};

export default App;

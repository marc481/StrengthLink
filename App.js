import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FooterNavigator from "./src/components/navigators/FooterNavigator";
import WorkoutProvider from "./src/context/WorkoutContext";

const App = () => {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <FooterNavigator />
      </NavigationContainer>
    </WorkoutProvider>
  );
};

export default App;

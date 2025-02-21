import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WorkoutProvider from "./src/context/WorkoutContext"; // ✅ Import the provider
import FooterNavigator from "./src/components/navigators/FooterNavigator";

const App = () => {
  return (
    <WorkoutProvider>
      {/* ✅ Use WorkoutProvider */}
      <NavigationContainer>
        <FooterNavigator />
      </NavigationContainer>
    </WorkoutProvider>
  );
};

export default App;

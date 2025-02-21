import React, { useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import FooterNavigator from "./src/components/navigators/FooterNavigator";

export const WorkoutContext = createContext();

const App = () => {
  const [workouts, setWorkouts] = useState([]); // No storage, pure state

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      <NavigationContainer>
        <FooterNavigator />
      </NavigationContainer>
    </WorkoutContext.Provider>
  );
};

export default App;

import React, { useEffect, useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FooterNavigator from "./src/components/navigators/FooterNavigator";

export const WorkoutContext = createContext();

const STORAGE_KEY = "workouts";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  // Load workouts from AsyncStorage when the app starts
  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const savedWorkouts = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedWorkouts) {
          setWorkouts(JSON.parse(savedWorkouts));
        }
      } catch (error) {
        console.error("🚨 Error loading workouts:", error);
      }
    };
    loadWorkouts();
  }, []);

  // Save workouts to AsyncStorage whenever they change
  useEffect(() => {
    const saveWorkouts = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
      } catch (error) {
        console.error("🚨 Error saving workouts:", error);
      }
    };
    if (workouts.length > 0) {
      saveWorkouts();
    }
  }, [workouts]);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      <NavigationContainer>
        <FooterNavigator />
      </NavigationContainer>
    </WorkoutContext.Provider>
  );
};

export default App;

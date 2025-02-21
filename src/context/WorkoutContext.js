import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const WorkoutContext = createContext();

const STORAGE_KEY = "workouts";

const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  // Load workouts from AsyncStorage when the app starts
  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        // uncomment to delete all stored workouts
        //await AsyncStorage.removeItem(STORAGE_KEY);

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

  // ✅ Save workouts whenever they change
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
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;

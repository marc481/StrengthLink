// GoalContext.js
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GoalContext = createContext();

const STORAGE_KEY = "exercise_goals";

const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState({});

  useEffect(() => {
    const loadGoals = async () => {
      try {
        const savedGoals = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedGoals) {
          setGoals(JSON.parse(savedGoals));
        }
      } catch (err) {
        console.error("Error loading goals:", err);
      }
    };
    loadGoals();
  }, []);

  useEffect(() => {
    const saveGoals = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
      } catch (err) {
        console.error("🚨 Error saving goals:", err);
      }
    };
    saveGoals();
  }, [goals]);

  const setGoal = (exerciseName, targetWeight, targetDate = null) => {
    setGoals((prev) => ({
      ...prev,
      [exerciseName]: { TargetWeight: targetWeight, TargetDate: targetDate },
    }));
  };

  const deleteGoal = (exerciseName) => {
    setGoals((prev) => {
      const updated = { ...prev };
      delete updated[exerciseName];
      return updated;
    });
  };

  return (
    <GoalContext.Provider value={{ goals, setGoal, deleteGoal }}>
      {children}
    </GoalContext.Provider>
  );
};

export default GoalProvider;

import React, { useEffect, useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import FooterNavigator from "./src/components/navigators/FooterNavigator";
import * as FileSystem from "expo-file-system";
import * as XLSX from "xlsx";

export const WorkoutContext = createContext();

const workoutsFilePath = FileSystem.documentDirectory + "workouts.xlsx";
const exercisesFilePath = FileSystem.documentDirectory + "exercises.xlsx";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const initializeFiles = async () => {
      try {
        console.log("📁 Checking if workouts.xlsx and exercises.xlsx exist...");

        // Check if workouts.xlsx exists
        const workoutsFileExists = await FileSystem.getInfoAsync(
          workoutsFilePath
        );
        console.log(`📂 workouts.xlsx exists: ${workoutsFileExists.exists}`);

        if (!workoutsFileExists.exists) {
          console.log("🚨 workouts.xlsx not found. Creating an empty file...");
          const workbook = XLSX.utils.book_new();
          const worksheet = XLSX.utils.aoa_to_sheet([
            ["WorkoutID", "WorkoutName", "WorkoutDate", "Exercises"],
          ]);
          XLSX.utils.book_append_sheet(workbook, worksheet, "Workouts");

          const fileContent = XLSX.write(workbook, { type: "base64" });
          await FileSystem.writeAsStringAsync(workoutsFilePath, fileContent, {
            encoding: FileSystem.EncodingType.Base64,
          });

          console.log("✅ workouts.xlsx file created.");
        }

        // Check if exercises.xlsx exists
        const exercisesFileExists = await FileSystem.getInfoAsync(
          exercisesFilePath
        );
        console.log(`📂 exercises.xlsx exists: ${exercisesFileExists.exists}`);

        if (!exercisesFileExists.exists) {
          console.log("🚨 exercises.xlsx not found. Creating an empty file...");
          const workbook = XLSX.utils.book_new();
          const worksheet = XLSX.utils.aoa_to_sheet([
            [
              "ExerciseID",
              "WorkoutID",
              "ExerciseName",
              "Sets",
              "Reps",
              "Weight",
            ],
          ]);
          XLSX.utils.book_append_sheet(workbook, worksheet, "Exercises");

          const fileContent = XLSX.write(workbook, { type: "base64" });
          await FileSystem.writeAsStringAsync(exercisesFilePath, fileContent, {
            encoding: FileSystem.EncodingType.Base64,
          });

          console.log("✅ exercises.xlsx file created.");
        }

        // Load workouts from file
        const file = await FileSystem.readAsStringAsync(workoutsFilePath, {
          encoding: FileSystem.EncodingType.Base64,
        });

        const workbook = XLSX.read(file, { type: "base64" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        let data = XLSX.utils.sheet_to_json(sheet);

        data = data.map((workout, index) => ({
          WorkoutID: workout.WorkoutID || index + 1,
          WorkoutName: workout.WorkoutName || `Workout ${index + 1}`,
          WorkoutDate:
            workout.WorkoutDate || new Date().toISOString().split("T")[0],
          Exercises: workout.Exercises ? JSON.parse(workout.Exercises) : [],
        }));

        console.log("✅ Loaded workouts from Excel:", data);
        setWorkouts(data);
      } catch (error) {
        console.log("🚨 Error initializing files:", error);
      }
    };

    initializeFiles();
  }, []);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      <NavigationContainer>
        <FooterNavigator />
      </NavigationContainer>
    </WorkoutContext.Provider>
  );
};

export default App;

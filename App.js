import React, { useEffect, useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import FooterNavigator from "./src/components/navigators/FooterNavigator";
import * as FileSystem from "expo-file-system";
import * as XLSX from "xlsx";

export const WorkoutContext = createContext();

const filePath = FileSystem.documentDirectory + "workouts.xlsx";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const loadExcelData = async () => {
      try {
        // Check if workouts.xlsx already exists in Expo's file system
        const fileExists = await FileSystem.getInfoAsync(filePath);

        if (!fileExists.exists) {
          console.log("🚨 workouts.xlsx not found. Creating an empty file...");

          // Create an empty Excel file if it doesn't exist
          const workbook = XLSX.utils.book_new();
          const worksheet = XLSX.utils.aoa_to_sheet([
            ["Date", "Exercise", "Sets", "Reps", "Weight"],
          ]);
          XLSX.utils.book_append_sheet(workbook, worksheet, "Workouts");

          const fileContent = XLSX.write(workbook, { type: "base64" });
          await FileSystem.writeAsStringAsync(filePath, fileContent, {
            encoding: FileSystem.EncodingType.Base64,
          });

          console.log("✅ Created a new workouts.xlsx file.");
        }

        // Read the file
        const file = await FileSystem.readAsStringAsync(filePath, {
          encoding: FileSystem.EncodingType.Base64,
        });

        // Parse Excel data
        const workbook = XLSX.read(file, { type: "base64" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(sheet);

        setWorkouts(data); // Store data in context
      } catch (error) {
        console.log("🚨 Error loading workouts:", error);
      }
    };

    loadExcelData();
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

import React, { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import WorkoutItem from "./WorkoutItem";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import * as FileSystem from "expo-file-system";
import * as XLSX from "xlsx";

const filePath = FileSystem.documentDirectory + "workouts.xlsx";

const WorkoutList = ({ onSelect }) => {
  //State for Workouts
  const [workouts, setWorkouts] = useState([]);

  // Load workouts from excel when screen loads
  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    try {
      const file = await FileSystem.readAsStringAsync(filePath, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const workbook = XLSX.read(file, { type: "base64" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(sheet);

      setWorkouts(data);
    } catch (error) {
      console.log("Error loading workouts:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <WorkoutItem workout={item} onSelect={onSelect} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.medium,
    backgroundColor: COLORS.background,
  },
});

export default WorkoutList;

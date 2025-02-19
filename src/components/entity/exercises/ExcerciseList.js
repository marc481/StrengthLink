import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ExerciseItem from "./ExerciseItem";
import { COLORS, SPACING } from "../../../config/theme";
import * as FileSystem from "expo-file-system";
import * as XLSX from "xlsx";

const filePath = FileSystem.documentDirectory + "exercises.xlsx";

const ExerciseList = ({ onSelect }) => {
  // State for Exercises
  const [exercises, setExercises] = useState([]);

  // Load exercises from Excel when screen loads
  useEffect(() => {
    loadExercises();
  }, []);

  const loadExercises = async () => {
    try {
      const file = await FileSystem.readAsStringAsync(filePath, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const workbook = XLSX.read(file, { type: "base64" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(sheet);

      setExercises(data);
    } catch (error) {
      console.log("Error loading exercises:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ExerciseItem exercise={item} onSelect={onSelect} />
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

export default ExerciseList;

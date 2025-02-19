import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import * as FileSystem from "expo-file-system";
import * as XLSX from "xlsx";

const filePath = FileSystem.documentDirectory + "workouts.xlsx";

const ExerciseViewScreen = ({ route, navigation }) => {
  // Get selected workout
  const { workout } = route.params;

  // State for exercises
  const [exercises, setExercises] = useState(workout.exercises || []);

  useEffect(() => {
    loadExercises();
  }, []);

  //  Load exercises from Excel
  const loadExercises = async () => {
    try {
      const file = await FileSystem.readAsStringAsync(filePath, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const workbook = XLSX.read(file, { type: "base64" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(sheet);

      const updatedWorkout = data.find(
        (w) => w.WorkoutID === workout.WorkoutID
      );
      setExercises(updatedWorkout?.exercises || []);
    } catch (error) {
      console.log("Error loading exercises:", error);
    }
  };

  // Delete an exercise
  const handleDeleteExercise = async (exerciseName) => {
    Alert.alert("Delete Exercise", `Remove ${exerciseName}?`, [
      { text: "Cancel" },
      {
        text: "Delete",
        onPress: async () => {
          const updatedExercises = exercises.filter(
            (e) => e.name !== exerciseName
          );
          setExercises(updatedExercises);

          await saveExercises(updatedExercises);
        },
      },
    ]);
  };

  //  Save exercises to Excel
  const saveExercises = async (updatedExercises) => {
    try {
      const file = await FileSystem.readAsStringAsync(filePath, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const workbook = XLSX.read(file, { type: "base64" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(sheet);

      const updatedWorkouts = data.map((w) =>
        w.WorkoutID === workout.WorkoutID
          ? { ...w, exercises: updatedExercises }
          : w
      );

      const worksheet = XLSX.utils.json_to_sheet(updatedWorkouts);
      XLSX.utils.book_append_sheet(workbook, worksheet, "Workouts");
      const fileContent = XLSX.write(workbook, { type: "base64" });

      await FileSystem.writeAsStringAsync(filePath, fileContent, {
        encoding: FileSystem.EncodingType.Base64,
      });
    } catch (error) {
      console.log("Error saving exercises:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.WorkoutName}</Text>

      {/* List of Exercises */}
      {exercises.map((exercise, index) => (
        <View key={index} style={styles.exerciseItem}>
          <Text style={styles.exerciseText}>{exercise.name}</Text>
          <Text style={styles.exerciseText}>
            {exercise.sets} sets x {exercise.reps} reps - {exercise.weight}kg
          </Text>
          <TouchableOpacity onPress={() => handleDeleteExercise(exercise.name)}>
            <Text style={styles.deleteButton}>❌</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Add Exercise */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate("AddExerciseScreen", {
            workout,
            onSave: setExercises,
          })
        }
      >
        <Text style={styles.addButtonText}>+ Add Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.medium,
  },
  header: {
    ...FONTS.header,
    marginBottom: SPACING.medium,
    textAlign: "center",
  },
  exerciseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SPACING.small,
    backgroundColor: COLORS.inputBackground,
    marginBottom: SPACING.small,
    borderRadius: 8,
  },
  exerciseText: {
    ...FONTS.body,
  },
  deleteButton: {
    ...FONTS.body,
    color: COLORS.buttonDangerBackground,
  },
  addButton: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: SPACING.small,
    alignItems: "center",
  },
  addButtonText: {
    ...FONTS.button,
  },
});

export default ExerciseViewScreen;

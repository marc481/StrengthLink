import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ExerciseItem from "./ExerciseItem";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const WorkoutList = ({ navigation }) => {
  const { workouts } = useContext(WorkoutContext);

  const handleSelectWorkout = (workoutID) => {
    console.log("✅ Navigating with workoutID:", workoutID); // Debugging log
    navigation.navigate("WorkoutViewScreen", { workoutID }); // ✅ Ensure we pass `workoutID`
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.WorkoutID.toString()}
        renderItem={({ item }) => (
          <WorkoutItem workout={item} onSelect={handleSelectWorkout} />
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    ...FONTS.body,
    color: COLORS.secondaryText,
  },
});

export default ExerciseList;

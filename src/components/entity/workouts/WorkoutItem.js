import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const WorkoutItem = ({ workout, onSelect }) => {
  // Convert YYYY-MM-DD to DD/MM/YYYY for display
  const formatDate = (isoDate) => {
    if (!isoDate) return "No Date";
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <Pressable onPress={() => onSelect(workout)}>
      <View style={styles.item}>
        <Text style={styles.workoutName}>{workout.WorkoutName}</Text>
        <Text style={styles.workoutDate}>
          📅 {formatDate(workout.WorkoutDate)}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  workoutName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  workoutDate: {
    fontSize: 14,
    color: "gray",
  },
});

export default WorkoutItem;

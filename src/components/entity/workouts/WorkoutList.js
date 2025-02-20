import React, { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import WorkoutItem from "./WorkoutItem";
import { COLORS, SPACING } from "../../../config/theme";
import { WorkoutContext } from "../../../../App";

const WorkoutList = ({ onSelect }) => {
  const { workouts } = useContext(WorkoutContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.WorkoutID.toString()}
        renderItem={({ item }) => (
          <WorkoutItem
            workout={{ ...item, Exercises: item.Exercises || [] }}
            onSelect={onSelect}
          />
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

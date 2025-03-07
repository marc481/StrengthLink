import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import WorkoutItem from "./WorkoutItem";

const WorkoutList = ({ workouts, onSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {workouts.map((workout) => (
        <WorkoutItem
          key={workout.WorkoutID}
          workout={workout}
          onSelect={onSelect}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default WorkoutList;

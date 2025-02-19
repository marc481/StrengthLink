import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import ExerciseItem from "../exercise/ExerciseItem";

const WorkoutView = ({ workout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.WorkoutName}</Text>
      <Text style={styles.date}>Workout Date: {workout.WorkoutDate}</Text>

      {/* Exercises inside the workout */}
      <FlatList
        data={workout.Exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ExerciseItem exercise={item} />}
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
  header: {
    ...FONTS.header,
    marginBottom: SPACING.medium,
    color: COLORS.primaryText,
  },
  date: {
    ...FONTS.body,
    color: COLORS.bodyText,
    paddingBottom: SPACING.small,
  },
});

export default WorkoutView;

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const WorkoutView = ({ workout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout on {workout.Date}</Text>

      {/* List Exercises in this Workout */}
      <FlatList
        data={workout.exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.exercise}>
            {item.Exercise} - {item.Sets}x{item.Reps} @ {item.Weight}kg
          </Text>
        )}
      />
    </View>
  );
};

// 🎨 Styles
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
  exercise: {
    ...FONTS.body,
    color: COLORS.bodyText,
    paddingVertical: SPACING.small,
  },
});

export default WorkoutView;

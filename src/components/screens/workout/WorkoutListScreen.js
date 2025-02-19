import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import { WorkoutContext } from "../../../../App";
import WorkoutItem from "../../entity/workouts/WorkoutItem";

const WorkoutListScreen = ({ navigation }) => {
  const { workouts } = useContext(WorkoutContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workouts</Text>

      {workouts.length > 0 ? (
        workouts.map((workout, index) => (
          <WorkoutItem
            key={workout.WorkoutID || index} // ✅ Ensure unique key
            workout={{
              ...workout,
              Exercises: workout.Exercises || [], // ✅ Ensure exercises exist
            }}
            onSelect={() =>
              navigation.navigate("WorkoutViewScreen", { workout })
            }
          />
        ))
      ) : (
        <Text style={styles.noWorkoutsText}>No workouts added yet.</Text>
      )}

      {/* Add Workout Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("WorkoutAddScreen")}
      >
        <Text style={styles.addButtonText}>+ Add Workout</Text>
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
    textAlign: "center",
    marginBottom: SPACING.medium,
  },
  noWorkoutsText: {
    ...FONTS.body,
    textAlign: "center",
    marginTop: SPACING.large,
    color: COLORS.secondaryText,
  },
  addButton: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: SPACING.small,
    alignItems: "center",
    marginTop: SPACING.large,
  },
  addButtonText: {
    ...FONTS.button,
  },
});

export default WorkoutListScreen;

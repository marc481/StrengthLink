import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { WorkoutContext } from "../../../../App";
import WorkoutItem from "../../entity/workouts/WorkoutItem";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const WorkoutListScreen = ({ navigation }) => {
  const { workouts } = useContext(WorkoutContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workouts</Text>

      {/* Workout List */}
      {workouts.length > 0 ? (
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.WorkoutID.toString()}
          renderItem={({ item }) => (
            <WorkoutItem
              workout={item}
              onSelect={() =>
                navigation.navigate("WorkoutViewScreen", { workout: item })
              }
            />
          )}
        />
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

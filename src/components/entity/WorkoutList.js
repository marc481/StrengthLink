import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { COLORS } from "../../config/theme";

const WorkoutList = ({ workouts, onSelect }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem} onPress={() => onSelect(item)}>
      <View>
        {/* Display Exercise Name */}
        <Text style={styles.exerciseName}>{item.name}</Text>
        {/* Display Sets, Reps, and Weight */}
        <Text style={styles.details}>
          {item.sets} sets x {item.reps} reps @ {item.weight} kg
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={workouts} // Data passed from WorkoutScreen
      keyExtractor={(item) => item.id.toString()} // Ensure unique keys
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.background,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },
  details: {
    fontSize: 14,
    color: COLORS.primaryText,
  },
});

export default WorkoutList;

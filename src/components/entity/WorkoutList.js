import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { COLORS, FONTS } from "../../config/theme";

const WorkoutList = ({ workouts, onSelect }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={({ pressed }) => [
        styles.listItem,
        pressed && styles.listItemPressed,
      ]}
      onPress={() => onSelect(item)}
    >
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

  if (!workouts.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No exercises available. Add one to get started!
        </Text>
      </View>
    );
  }

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
    borderBottomColor: COLORS.inputBorder,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 10,
    elevation: 2, // Shadow for Android
    shadowColor: COLORS.bodyText, // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  listItemPressed: {
    backgroundColor: COLORS.buttonBackground, // Highlight color on press
  },
  exerciseName: {
    ...FONTS.body,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  details: {
    ...FONTS.body,
    fontSize: 14,
    color: COLORS.mutedText,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    ...FONTS.body,
    fontSize: 16,
    color: COLORS.mutedText,
    textAlign: "center",
  },
});

export default WorkoutList;

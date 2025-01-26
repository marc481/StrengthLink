import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { COLORS } from "../../config/theme";

const WorkoutList = ({ workouts, onSelect, onModify }) => {
  //Initialisaliations
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem} onPress={() => onSelect(item)}>
      <View>
        {/* Display Exercise Details */}
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.details}>
          {item.sets} sets x {item.reps} reps @ {item.weight} kg
        </Text>
      </View>
    </TouchableOpacity>
  );

  //Views
  return (
    <FlatList
      data={workouts}
      keyExtractor={(item) => item.id.toString()}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  modify: {
    color: COLORS.buttonBackground,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default WorkoutList;

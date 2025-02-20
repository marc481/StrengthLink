import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ExerciseItem from "./ExerciseItem";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const ExerciseList = ({ exercises, onSelect }) => {
  if (!exercises || exercises.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No exercises added yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ExerciseItem exercise={item} onSelect={() => onSelect(item)} />
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    ...FONTS.body,
    color: COLORS.secondaryText,
  },
});

export default ExerciseList;

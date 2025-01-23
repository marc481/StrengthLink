import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SPACING } from "../../config/theme";

const WorkoutItem = ({ workout, onSelect }) => {
  //Initialisaliations
  //State
  //Handlers
  //Views
  return (
    <Pressable onPress={() => onSelect(workout)}>
      <View style={styles.item}>
        <Text style={styles.name}>{workout.name}</Text>
        <Texts style={styles.details}>
          {workout.sets} sets x {workout.reps} reps @ {workout.weight} kg
        </Texts>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  item: {
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    borderBottomWidth: 1,
    borderColor: COLORS.inputBorder,
  },
  name: {
    ...FONTS.body,
    fontWeight: "bold",
  },
  details: {
    ...FONTS.muted,
  },
});

export default WorkoutItem;

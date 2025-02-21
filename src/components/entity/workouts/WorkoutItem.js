import { Pressable, StyleSheet, Text, View } from "react-native";

const WorkoutItem = ({ workout, onSelect }) => {
  return (
    <Pressable onPress={() => onSelect(workout)}>
      <View style={styles.item}>
        <Text style={styles.text}>{workout.WorkoutName}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
});

export default WorkoutItem;

import { Pressable, StyleSheet, Text, View } from "react-native";

const ExerciseItem = ({ exercise, onEdit, onDelete }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {exercise.ExerciseName} - {exercise.Sets} x {exercise.Reps} @{" "}
        {exercise.Weight}kg
      </Text>
      <Pressable onPress={() => onEdit(exercise)}>
        <Text style={styles.editText}>Edit</Text>
      </Pressable>
      <Pressable onPress={() => onDelete(exercise.ExerciseID)}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
  editText: {
    color: "blue",
    marginHorizontal: 10,
  },
  deleteText: {
    color: "red",
  },
});

export default ExerciseItem;

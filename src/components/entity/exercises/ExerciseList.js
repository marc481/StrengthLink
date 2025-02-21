import { ScrollView, StyleSheet } from "react-native";
import ExerciseItem from "./ExerciseItem";

const ExerciseList = ({ exercises, onEdit, onDelete }) => {
  return (
    <ScrollView style={styles.container}>
      {exercises.map((exercise) => (
        <ExerciseItem
          key={exercise.ExerciseID}
          exercise={exercise}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ExerciseList;

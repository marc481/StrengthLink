import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, ButtonTray } from "../../UI/Button";

const WorkoutView = ({ workout, onDelete, onModify }) => {
  const handleDelete = () => onDelete(workout);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.WorkoutName}</Text>

      <Text style={styles.subHeader}>Exercises</Text>
      {workout.Exercises.map((exercise, index) => (
        <Text key={index} style={styles.exerciseText}>
          {exercise.ExerciseName}
        </Text>
      ))}

      <ButtonTray>
        <Button label="Modify" onPress={onModify} />
        <Button
          label="Delete"
          onPress={handleDelete}
          styleButton={{ backgroundColor: "mistyrose" }}
          styleLabel={{ color: "red" }}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  exerciseText: {
    fontSize: 14,
    marginLeft: 10,
  },
});

export default WorkoutView;

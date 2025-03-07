import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, ButtonTray } from "../../UI/Button";

const WorkoutView = ({ workout, onDelete, onModify }) => {
  const handleDelete = () => onDelete(workout);

  const formatDate = (isoDate) => {
    if (!isoDate) return "No Date";
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`; // Convert back to DD/MM/YYYY
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.WorkoutName}</Text>
      <Text style={styles.date}>📅 {formatDate(workout.WorkoutDate)}</Text>

      <Text style={styles.subHeader}>Exercises</Text>
      {workout.Exercises && workout.Exercises.length > 0 ? (
        workout.Exercises.map((exercise) => (
          <Text key={exercise.ExerciseID} style={styles.exerciseText}>
            {exercise.ExerciseName} - {exercise.Sets} x {exercise.Reps} @{" "}
            {exercise.Weight}kg
          </Text>
        ))
      ) : (
        <Text style={styles.noExercisesText}>No exercises added yet.</Text>
      )}

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
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    color: "gray",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  exerciseText: {
    fontSize: 14,
    marginLeft: 10,
  },
  noExercisesText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    color: "gray",
  },
});

export default WorkoutView;

import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Form from "../../UI/Form";
import { Button, ButtonTray } from "../../UI/Button";

const WorkoutModifyScreen = ({ navigation, route }) => {
  const { workout, onModify } = route.params;
  const [updatedWorkout, setUpdatedWorkout] = useState(workout);

  const handleChange = (field, value) => {
    setUpdatedWorkout({ ...updatedWorkout, [field]: value });
  };

  const handleModifyExercise = (exercise) => {
    const updatedExercises = updatedWorkout.Exercises.map((ex) =>
      ex.ExerciseID === exercise.ExerciseID ? exercise : ex
    );
    setUpdatedWorkout({ ...updatedWorkout, Exercises: updatedExercises });
  };

  const handleDeleteExercise = (exerciseID) => {
    const updatedExercises = updatedWorkout.Exercises.filter(
      (ex) => ex.ExerciseID !== exerciseID
    );
    setUpdatedWorkout({ ...updatedWorkout, Exercises: updatedExercises });
  };

  const handleSubmit = () => {
    onModify(updatedWorkout);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Form.InputText
        label="Workout Name"
        value={updatedWorkout.WorkoutName}
        onChange={(value) => handleChange("WorkoutName", value)}
      />

      <Text style={styles.subHeader}>Exercises</Text>
      <FlatList
        data={updatedWorkout.Exercises}
        keyExtractor={(item) => item.ExerciseID.toString()}
        renderItem={({ item }) => (
          <View style={styles.exerciseItem}>
            <Text>
              {item.ExerciseName} - {item.Sets} x {item.Reps} @ {item.Weight}kg
            </Text>
            <Button
              label="Edit"
              onPress={() =>
                navigation.navigate("ExerciseModifyScreen", {
                  exercise: item,
                  onModify: handleModifyExercise,
                })
              }
            />
            <Button
              label="Delete"
              onPress={() => handleDeleteExercise(item.ExerciseID)}
              styleButton={{ backgroundColor: "mistyrose" }}
              styleLabel={{ color: "red" }}
            />
          </View>
        )}
      />

      <ButtonTray>
        <Button label="Save Changes" onPress={handleSubmit} />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 15, padding: 20 },
  subHeader: { fontSize: 16, fontWeight: "bold" },
  exerciseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

export default WorkoutModifyScreen;

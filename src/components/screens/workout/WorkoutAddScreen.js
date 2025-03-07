import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { WorkoutContext } from "../../../context/WorkoutContext";
import WorkoutForm from "../../entity/workouts/WorkoutForm";
import { COLORS } from "../../../config/theme";
const WorkoutAddScreen = ({ navigation }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  const handleAddWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <WorkoutForm
        onSubmit={handleAddWorkout}
        onCancel={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
});

export default WorkoutAddScreen;

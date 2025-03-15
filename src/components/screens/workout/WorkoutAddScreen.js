import React, { useContext } from "react";
import { View } from "react-native";
import { WorkoutContext } from "../../../context/WorkoutContext";
import WorkoutForm from "../../entity/workouts/WorkoutForm";
import { COLORS, STYLES } from "../../../config/theme";

const generateUniqueID = () => Date.now() + Math.floor(Math.random() * 1000);

const WorkoutAddScreen = ({ navigation }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  const handleAddWorkout = (workout) => {
    const newWorkout = {
      ...workout,
      WorkoutID: generateUniqueID(),
    };
    setWorkouts([...workouts, newWorkout]);
    navigation.goBack();
  };

  return (
    <View style={STYLES.container}>
      <WorkoutForm
        onSubmit={handleAddWorkout}
        onCancel={() => navigation.goBack()}
      />
    </View>
  );
};

export default WorkoutAddScreen;

import React from "react";
import { View } from "react-native";
import WorkoutForm from "../../entity/workouts/WorkoutForm";
import { STYLES } from "../../../config/theme";

const WorkoutModifyScreen = ({ navigation, route }) => {
  const { workout, onModify } = route.params;

  const handleModifyWorkout = (updatedWorkout) => {
    onModify(updatedWorkout);
    navigation.goBack();
  };

  return (
    <View style={STYLES.container}>
      <WorkoutForm
        originalWorkout={workout}
        onSubmit={handleModifyWorkout}
        onCancel={() => navigation.goBack()}
      />
    </View>
  );
};

export default WorkoutModifyScreen;

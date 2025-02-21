import { useState } from "react";
import { View, StyleSheet } from "react-native";
import ExerciseForm from "../../entity/exercises/ExerciseForm";

const ExerciseModifyScreen = ({ navigation, route }) => {
  const { exercise, onModify } = route.params;
  const [updatedExercise, setUpdatedExercise] = useState(exercise);

  const handleModify = (exercise) => {
    onModify(exercise);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExerciseForm
        originalExercise={updatedExercise}
        onSubmit={handleModify}
        onCancel={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ExerciseModifyScreen;

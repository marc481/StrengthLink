import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import { Button, ButtonTray } from "../UI/Button";
import { COLORS, FONTS, SPACING } from "../../config/theme";

const ExerciseViewScreen = ({ route, navigation }) => {
  // Initialisation ---------------------
  const { exercise, onDelete, onModify } = route.params;

  // Handlers ---------------------------
  const handleModify = () => {
    navigation.navigate("AddExerciseScreen", { exercise, onSave: onModify });
  };

  const handleDelete = () => {
    onDelete(exercise);
    navigation.goBack();
  };

  // View -----------------------------
  return (
    <Screen>
      <View style={styles.container}>
        {/* Exercise Name */}
        <Text style={styles.exerciseName}>{exercise.name}</Text>

        {/* Details */}
        <Text style={styles.detailText}>Sets: {exercise.sets}</Text>
        <Text style={styles.detailText}>Reps: {exercise.reps}</Text>
        <Text style={styles.detailText}>Weight: {exercise.weight} kg</Text>
      </View>

      {/* Action Buttons */}
      <ButtonTray>
        <Button label="Edit" onPress={handleModify} />
        <Button
          label="Delete"
          onPress={handleDelete}
          styleButton={styles.dangerButton}
          styleLabel={styles.dangerButtonText}
        />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.large,
    backgroundColor: COLORS.background,
    borderRadius: 8,
    margin: SPACING.medium,
  },
  exerciseName: {
    ...FONTS.header,
    textAlign: "center",
    marginBottom: SPACING.medium,
  },
  detailText: {
    ...FONTS.body,
    marginBottom: SPACING.small,
  },
  dangerButton: {
    backgroundColor: COLORS.dangerButtonBackground,
  },
  dangerButtonText: {
    color: COLORS.dangerButtonText,
  },
});

export default ExerciseViewScreen;

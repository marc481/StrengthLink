import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button, ButtonTray } from "../../UI/Button";
import { COLORS, FONTS, SPACING } from "../../../config/theme";
import Icons from "../../UI/icons";

const WorkoutView = ({ workout, onDelete, onModify }) => {
  // Handlers ---------------------------
  const handleDelete = () => onDelete(workout);

  const requestDelete = () =>
    Alert.alert(
      "Delete Confirmation",
      `Are you sure you want to delete "${workout.name}"?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: handleDelete },
      ]
    );

  // Views -----------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.name}</Text>
      <Text style={styles.detail}>Sets: {workout.sets}</Text>
      <Text style={styles.detail}>Reps: {workout.reps}</Text>
      <Text style={styles.detail}>Weight: {workout.weight} kg</Text>

      <ButtonTray>
        <Button
          label="Modify"
          icon={<Icons.Edit />}
          onPress={() => onModify(workout)}
          styleButton={styles.modifyButton}
        />
        <Button
          label="Delete"
          icon={<Icons.Delete />}
          onPress={requestDelete}
          styleButton={styles.deleteButton}
          styleLabel={styles.deleteLabel}
        />
      </ButtonTray>
    </View>
  );
};

// Styles -----------------------------
const styles = StyleSheet.create({
  container: {
    padding: SPACING.medium,
    gap: SPACING.small,
    backgroundColor: COLORS.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  title: {
    ...FONTS.header,
    marginBottom: SPACING.small,
    color: COLORS.bodyText,
  },
  detail: {
    ...FONTS.body,
    color: COLORS.bodyText,
  },
  modifyButton: {
    backgroundColor: COLORS.buttonBackground,
  },
  deleteButton: {
    backgroundColor: COLORS.dangerButton,
  },
  deleteLabel: {
    color: COLORS.dangerText,
  },
});

export default WorkoutView;

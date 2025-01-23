import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button, ButtonTray } from "../UI/Button";
import { COLORS, FONTS, SPACING } from "../../config/theme";
import Icons from "../UI/icons";

const WorkoutView = ({ workout, onDelete, onModify }) => {
  const handleDelete = () => onDelete(workout);

  const requestDelete = () =>
    Alert.alert(
      "Delete Confirmation",
      `Are you sure you want to delete "${workout.name}"?`,
      [{ text: "Cancel" }, { text: "Delete", onPress: handleDelete }]
    );

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
          onPress={onModify}
          styleButton={{ backgroundColor: COLORS.buttonBackground }}
        />
        <Button
          label="Delete"
          icon={<Icons.Delete />}
          onPress={requestDelete}
          styleButton={{ backgroundColor: COLORS.dangerButton }}
          styleLabel={{ color: COLORS.dangerText }}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.medium,
    gap: SPACING.small,
    backgroundColor: COLORS.background,
    borderRadius: 8,
  },
  title: {
    ...FONTS.header,
    marginBottom: SPACING.small,
  },
  detail: {
    ...FONTS.body,
  },
});

export default WorkoutView;

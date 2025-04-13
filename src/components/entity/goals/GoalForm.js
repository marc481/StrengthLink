import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Form from "../../UI/Form";
import { Button, ButtonTray } from "../../UI/Button";
import CalendarModal from "../../entity/workouts/CalendarModal";
import { COLORS, FONTS, SPACING } from "../../../config/theme";

const GoalForm = ({ exerciseName, existingGoal, onSubmit, onCancel }) => {
  const [targetWeight, setTargetWeight] = useState("");
  const [targetDate, setTargetDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);

  useEffect(() => {
    if (existingGoal) {
      setTargetWeight(existingGoal.TargetWeight.toString());
      if (existingGoal.TargetDate) {
        setTargetDate(new Date(existingGoal.TargetDate));
      }
    }
  }, [existingGoal]);

  const formatDateObject = (dateObj) => {
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSave = () => {
    const weight = parseFloat(targetWeight);
    if (!weight || weight <= 0)
      return alert("Please enter a valid target weight.");
    onSubmit({
      ExerciseName: exerciseName,
      TargetWeight: weight,
      TargetDate: targetDate.toISOString().split("T")[0],
    });
  };

  return (
    <View style={styles.container}>
      <Form.InputText
        label={`Goal for ${exerciseName}`}
        value={targetWeight}
        onChange={setTargetWeight}
        keyboardType="numeric"
      />

      <Text style={FONTS.bold}>Target Date</Text>
      <Pressable onPress={() => setCalendarOpen(true)}>
        <Text style={[FONTS.body, styles.dateText]}>
          {formatDateObject(targetDate)}
        </Text>
      </Pressable>

      <CalendarModal
        visible={calendarOpen}
        date={targetDate}
        onConfirm={(selectedDate) => {
          setTargetDate(selectedDate);
          setCalendarOpen(false);
        }}
        onCancel={() => setCalendarOpen(false)}
      />

      <ButtonTray>
        <Button label="Save Goal" onPress={handleSave} />
        <Button label="Cancel" onPress={onCancel} variant="delete" />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.inputBackground,
    padding: SPACING.medium,
    borderRadius: 10,
  },
  dateText: {
    marginVertical: SPACING.small,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
});

export default GoalForm;

import React, { useContext, useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, Modal } from "react-native";
import { WorkoutContext } from "../../../context/WorkoutContext";
import { GoalContext } from "../../../context/GoalContext";
import { Picker } from "@react-native-picker/picker";
import { LineChart } from "react-native-chart-kit";
import { STYLES, FONTS, COLORS, SPACING } from "../../../config/theme";
import { Button, ButtonTray } from "../../UI/Button";
import GoalForm from "../../entity/goals/GoalForm";

const ProgressScreen = () => {
  const { workouts } = useContext(WorkoutContext);
  const { goals, setGoal, deleteGoal } = useContext(GoalContext);

  const progressMap = {};
  workouts.forEach((workout) => {
    workout.Exercises?.forEach((ex) => {
      if (!progressMap[ex.ExerciseName]) progressMap[ex.ExerciseName] = [];
      progressMap[ex.ExerciseName].push({
        date: workout.WorkoutDate,
        weight: ex.Weight,
      });
    });
  });

  const exerciseNames = Object.keys(progressMap);
  const [selectedExercise, setSelectedExercise] = useState(exerciseNames[0]);
  const [goalModalVisible, setGoalModalVisible] = useState(false);

  const chartData =
    progressMap[selectedExercise]?.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    ) || [];

  const weights = chartData.map((d) => d.weight);
  const labels = chartData.map((d) => {
    const [y, m, day] = d.date.split("-");
    return `${day}/${m}`;
  });

  const currentGoal = goals[selectedExercise];
  const personalBest = Math.max(...weights, 0);
  const remaining = currentGoal
    ? currentGoal.TargetWeight - personalBest
    : null;

  const daysLeft =
    currentGoal?.TargetDate &&
    Math.ceil(
      (new Date(currentGoal.TargetDate) - new Date()) / (1000 * 60 * 60 * 24)
    );

  return (
    <View style={STYLES.container}>
      <Text style={[FONTS.header, styles.title]}>Progress Tracker</Text>

      {exerciseNames.length > 0 ? (
        <>
          <View style={styles.card}>
            <Text style={FONTS.bold}>Select Exercise:</Text>
            <Picker
              selectedValue={selectedExercise}
              onValueChange={setSelectedExercise}
              style={styles.picker}
              dropdownIconColor={COLORS.bodyText}
            >
              {exerciseNames.map((name) => (
                <Picker.Item label={name} value={name} key={name} />
              ))}
            </Picker>
          </View>

          {currentGoal ? (
            <View style={styles.goalCard}>
              <Text style={FONTS.infoHighlight}>
                🎯 Goal: {currentGoal.TargetWeight}kg
              </Text>
              <Text style={FONTS.body}>Personal Best: {personalBest}kg</Text>
              <Text style={FONTS.body}>
                {remaining <= 0
                  ? "Goal achieved!"
                  : `You’re ${remaining}kg away from your goal.`}
              </Text>
              {currentGoal.TargetDate && (
                <Text style={FONTS.body}>
                  {daysLeft > 0
                    ? ` ${daysLeft} day${daysLeft !== 1 ? "s" : ""} left`
                    : " Goal deadline passed."}
                </Text>
              )}
            </View>
          ) : (
            <Text style={[FONTS.muted, { marginBottom: SPACING.medium }]}>
              No goal set for this exercise yet.
            </Text>
          )}

          <ButtonTray>
            <Button
              label={currentGoal ? "Update Goal" : "Set Goal"}
              onPress={() => setGoalModalVisible(true)}
            />
            {currentGoal && (
              <Button
                label="Delete Goal"
                onPress={() => deleteGoal(selectedExercise)}
                variant="delete"
              />
            )}
          </ButtonTray>

          <View style={styles.chartContainer}>
            <LineChart
              data={{
                labels,
                datasets: [{ data: weights }],
              }}
              width={Dimensions.get("window").width - SPACING.large * 2}
              height={220}
              yAxisSuffix="kg"
              chartConfig={{
                backgroundGradientFrom: COLORS.inputBackground,
                backgroundGradientTo: COLORS.inputBackground,
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(0, 43, 91, ${opacity})`,
                labelColor: () => COLORS.bodyText,
                propsForDots: {
                  r: "5",
                  strokeWidth: "2",
                  stroke: COLORS.infoHighlight,
                },
              }}
              style={styles.chart}
            />
          </View>

          <Modal visible={goalModalVisible} animationType="slide" transparent>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <GoalForm
                  exerciseName={selectedExercise}
                  existingGoal={currentGoal}
                  onSubmit={(goal) => {
                    setGoal(
                      goal.ExerciseName,
                      goal.TargetWeight,
                      goal.TargetDate
                    );
                    setGoalModalVisible(false);
                  }}
                  onCancel={() => setGoalModalVisible(false)}
                />
              </View>
            </View>
          </Modal>
        </>
      ) : (
        <Text style={FONTS.muted}>
          No exercise data to show yet. Add a workout to get started!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: SPACING.medium,
  },
  card: {
    backgroundColor: COLORS.inputBackground,
    padding: SPACING.medium,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.divider,
    marginBottom: SPACING.large,
  },
  goalCard: {
    backgroundColor: COLORS.inputBackground,
    padding: SPACING.medium,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.divider,
    marginBottom: SPACING.medium,
    gap: SPACING.small,
  },
  picker: {
    color: COLORS.bodyText,
    marginTop: SPACING.small,
  },
  chartContainer: {
    backgroundColor: COLORS.inputBackground,
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.small,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.divider,
  },
  chart: {
    marginVertical: SPACING.medium,
    borderRadius: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: COLORS.inputBackground,
    padding: SPACING.large,
    borderRadius: 10,
  },
});

export default ProgressScreen;

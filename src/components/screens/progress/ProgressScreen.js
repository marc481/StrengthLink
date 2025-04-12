import React, { useContext, useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { WorkoutContext } from "../../../context/WorkoutContext";
import { Picker } from "@react-native-picker/picker";
import { LineChart } from "react-native-chart-kit";
import { STYLES, FONTS, COLORS, SPACING } from "../../../config/theme";

const ProgressScreen = () => {
  const { workouts } = useContext(WorkoutContext);

  // Group exercise data by name
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

  const chartData =
    progressMap[selectedExercise]?.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    ) || [];

  const weights = chartData.map((d) => d.weight);
  const labels = chartData.map((d) => {
    const [y, m, day] = d.date.split("-");
    return `${day}/${m}`;
  });

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
                color: (opacity = 1) => `rgba(0, 43, 91, ${opacity})`, // dark blue
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
});

export default ProgressScreen;

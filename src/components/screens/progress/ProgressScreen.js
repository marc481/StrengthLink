import React, { useContext, useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { WorkoutContext } from "../../../context/WorkoutContext";
import { COLORS, STYLES, FONTS, SPACING } from "../../../config/theme";

const ProgressScreen = () => {
  const { workouts } = useContext(WorkoutContext);
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    // Process workout data to count workouts per week
    const countWorkoutsPerWeek = () => {
      const weeks = {}; // { "Week 1": 3, "Week 2": 5, ... }
      workouts.forEach((workout) => {
        const date = new Date(workout.WorkoutDate);
        const weekNumber = Math.ceil(date.getDate() / 7); // Get week number in the month
        const key = `Week ${weekNumber}`;
        weeks[key] = (weeks[key] || 0) + 1;
      });

      // Convert to chart format
      const labels = Object.keys(weeks);
      const data = Object.values(weeks);
      setWorkoutData({ labels, data });
    };

    countWorkoutsPerWeek();
  }, [workouts]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Progress</Text>
      {workoutData.labels?.length > 0 ? (
        <BarChart
          data={{
            labels: workoutData.labels,
            datasets: [{ data: workoutData.data }],
          }}
          width={Dimensions.get("window").width - 40}
          height={250}
          yAxisLabel=""
          chartConfig={{
            backgroundGradientFrom: COLORS.background,
            backgroundGradientTo: COLORS.background,
            color: (opacity = 1) => `rgba(0, 43, 91, ${opacity})`, // Dark blue bars
            labelColor: () => COLORS.bodyText,
            barPercentage: 0.6,
          }}
          style={styles.chart}
        />
      ) : (
        <Text style={styles.noData}>No workout data available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.container,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    ...FONTS.header,
    marginBottom: SPACING.medium,
  },
  chart: {
    marginVertical: SPACING.medium,
    borderRadius: 10,
  },
  noData: {
    ...FONTS.muted,
    fontSize: 16,
    textAlign: "center",
    marginTop: SPACING.large,
  },
});

export default ProgressScreen;

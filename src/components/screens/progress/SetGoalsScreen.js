import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SPACING } from "../../../config/theme";
import { useNavigation } from "@react-navigation/native";

const ProgressScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Progress</Text>

      {/* Weekly Strength Trends */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Weekly Strength Trends</Text>
        <Text style={styles.subtext}>
          Key Lifts: Bench Press, Deadlift, Squats
        </Text>
      </View>

      {/* Strength Summary */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Strength Summary:</Text>
        <Text style={styles.text}>- Weekly Increase: +5%</Text>
        <Text style={styles.text}>- Best Lift: Squat 200kg</Text>
      </View>

      {/* Monthly Trends */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Monthly Trends:</Text>
        <Text style={styles.text}>- Deadlift: 200kg</Text>
        <Text style={styles.text}>- Squat: 140kg</Text>
        <Text style={styles.text}>- Bench Press: 100kg</Text>
      </View>

      {/* Training Goals */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Training Goals</Text>
        <Text style={styles.text}>- Squat: 75% (150/200kg)</Text>
        <Text style={styles.text}>- Deadlift: 83% (200/240kg)</Text>
      </View>

      {/* Add New Goal Button */}
      <TouchableOpacity
        style={styles.newGoalButton}
        onPress={() => navigation.navigate("SetGoalScreen")}
      >
        <Text style={styles.newGoalText}>+ New Goal</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.medium,
  },
  header: {
    ...FONTS.header,
    textAlign: "center",
    marginBottom: SPACING.large,
  },
  card: {
    backgroundColor: COLORS.inputBackground,
    padding: SPACING.medium,
    borderRadius: 8,
    marginBottom: SPACING.medium,
    borderWidth: 1,
    borderColor: COLORS.divider,
  },
  sectionTitle: {
    ...FONTS.bold,
    marginBottom: SPACING.small,
  },
  text: {
    ...FONTS.body,
    color: COLORS.bodyText,
  },
  subtext: {
    ...FONTS.muted,
    fontStyle: "italic",
  },
  newGoalButton: {
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    marginTop: SPACING.medium,
  },
  newGoalText: {
    ...FONTS.button,
    color: COLORS.buttonText,
  },
});

export default ProgressScreen;

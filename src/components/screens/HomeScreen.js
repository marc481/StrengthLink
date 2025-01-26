import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SPACING } from "../../config/theme";
import Icons from "../UI/icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back, User!</Text>
      <View style={styles.buttonContainer}>
        {/* Start Workout */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Workout")}
        >
          <Icons.Workout color={COLORS.headerText} size={32} />
          <Text style={styles.buttonText}>Start Workout</Text>
        </TouchableOpacity>

        {/* Progress */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Progress")}
        >
          <Icons.Progress color={COLORS.headerText} size={32} />
          <Text style={styles.buttonText}>Progress</Text>
        </TouchableOpacity>

        {/* Socials */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Social")}
        >
          <Icons.Social color={COLORS.headerText} size={32} />
          <Text style={styles.buttonText}>Socials</Text>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icons.Profile color={COLORS.headerText} size={32} />
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  header: {
    ...FONTS.header,
    marginBottom: SPACING.large,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: SPACING.medium,
  },
  button: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.buttonBackground,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SPACING.small,
    margin: SPACING.small,
  },
  buttonText: {
    ...FONTS.body,
    marginTop: SPACING.small,
    color: COLORS.headerText,
    textAlign: "center",
  },
});

export default HomeScreen;

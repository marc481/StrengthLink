import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "../../UI/Button";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const ProfileView = ({ profileData, onEdit }) => {
  return (
    <View style={styles.container}>
      {/* 🔹 Profile Image */}
      <Image source={{ uri: profileData.UserImageURL }} style={styles.image} />
      <Text style={styles.username}>
        {profileData.UserFirstName} {profileData.UserLastName}
      </Text>

      {/* 🔹 Personal Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsHeader}>Personal Stats:</Text>
        <Text style={styles.statsText}>
          <Text style={styles.bold}>Age:</Text> {profileData.Age}
        </Text>
        <Text style={styles.statsText}>
          <Text style={styles.bold}>Height:</Text> {profileData.Height}
        </Text>
        <Text style={styles.statsText}>
          <Text style={styles.bold}>Weight:</Text> {profileData.Weight}
        </Text>
      </View>

      {/* 🔹 Edit Profile Button */}
      <Button label="Edit Profile" onPress={onEdit} style={styles.editButton} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: SPACING.large,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.headerBackground,
    width: "100%",
    padding: SPACING.medium,
    alignItems: "center",
  },
  headerText: {
    ...FONTS.header,
    color: COLORS.headerText,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: SPACING.large,
  },
  username: {
    ...FONTS.header,
    color: COLORS.bodyText,
    marginVertical: SPACING.small,
  },
  statsContainer: {
    width: "100%",
    backgroundColor: COLORS.inputBackground,
    padding: SPACING.medium,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.divider,
    marginVertical: SPACING.medium,
  },
  statsHeader: {
    ...FONTS.bold,
    fontSize: 18,
    marginBottom: SPACING.small,
  },
  statsText: {
    ...FONTS.body,
    marginBottom: SPACING.small,
  },
  bold: {
    fontWeight: "bold",
  },
  editButton: {
    marginTop: SPACING.medium,
    backgroundColor: COLORS.buttonBackground,
  },
});

export default ProfileView;

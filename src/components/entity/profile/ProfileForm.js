import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, ButtonTray } from "../../UI/Button";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const ProfileForm = ({ profileData, onEdit }) => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Profile</Text>
      </View>

      {/* Profile Image */}
      <Image source={{ uri: profileData.UserImageURL }} style={styles.image} />
      <Text style={styles.username}>
        {profileData.UserFirstName} {profileData.UserLastName}
      </Text>

      {/*  Personal Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsHeader}>Personal Stats:</Text>
        <Text style={styles.stat}>
          {" "}
          <Text style={styles.statLabel}>Age:</Text> {profileData.Age}
        </Text>
        <Text style={styles.stat}>
          {" "}
          <Text style={styles.statLabel}>Height:</Text> {profileData.Height}
        </Text>
        <Text style={styles.stat}>
          {" "}
          <Text style={styles.statLabel}>Weight:</Text> {profileData.Weight} kg
        </Text>
      </View>

      {/*  Edit Button */}
      <ButtonTray>
        <Button label="Edit Profile" onPress={onEdit} style={styles.button} />
      </ButtonTray>
    </View>
  );
};

//  Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.large,
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    backgroundColor: COLORS.headerBackground,
    padding: SPACING.medium,
    alignItems: "center",
    marginBottom: SPACING.large,
  },
  header: {
    ...FONTS.header,
    color: COLORS.headerText,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: SPACING.medium,
  },
  username: {
    ...FONTS.body,
    fontWeight: "bold",
    color: COLORS.bodyText,
    marginBottom: SPACING.medium,
  },
  statsContainer: {
    width: "100%",
    padding: SPACING.medium,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.divider,
    marginBottom: SPACING.large,
  },
  statsHeader: {
    ...FONTS.bold,
    color: COLORS.bodyText,
    marginBottom: SPACING.small,
  },
  stat: {
    ...FONTS.body,
    color: COLORS.bodyText,
    marginBottom: SPACING.small,
  },
  statLabel: {
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.buttonBackground,
    paddingVertical: SPACING.medium,
  },
});

export default ProfileForm;

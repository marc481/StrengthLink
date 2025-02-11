import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ProfileView from "../../entity/profile/ProfileView";
import { COLORS, SPACING, STYLES } from "../../../config/theme";

const ProfileScreen = ({ navigation }) => {
  // Initialisations
  const defaultProfile = {
    UserID: "1",
    UserFirstName: "John",
    UserLastName: "Doe",
    Age: 25,
    Height: "5'9",
    Weight: "82kg",
    UserImageURL:
      "https://i.pinimg.com/736x/ed/de/89/edde897bf47591b076ebea01ca370bc8.jpg", // Placeholder image
  };

  // State
  const [profile, setProfile] = useState(defaultProfile);

  // Handlers
  const handleEditProfile = () => {
    navigation.navigate("EditProfileScreen", {
      profileData: profile,
      onSave: handleSaveProfile,
    });
  };

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <View style={styles.container}>
      <ProfileView profileData={profile} onEdit={handleEditProfile} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.large,
    alignItems: "center",
  },
});

export default ProfileScreen;

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileView from "../../entity/profile/ProfileView";
import { Button, ButtonTray } from "../../UI/Button";
import { COLORS, SPACING } from "../../../config/theme";

const ProfileScreen = ({ navigation }) => {
  const defaultProfile = {
    UserID: "1",
    UserFirstName: "John",
    UserLastName: "Doe",
    Age: 25,
    Height: "5'9",
    Weight: "82kg",
    UserImageURL:
      "https://i.pinimg.com/736x/ed/de/89/edde897bf47591b076ebea01ca370bc8.jpg",
  };

  const [profile, setProfile] = useState(defaultProfile);

  const handleEditProfile = () => {
    navigation.navigate("EditProfileScreen", {
      profileData: profile,
      onSave: setProfile,
    });
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("currentUser");
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Auth" }],
      })
    );
  };

  return (
    <View style={styles.container}>
      <ProfileView profileData={profile} onEdit={handleEditProfile} />
      <ButtonTray>
        <Button label="Log Out" onPress={handleLogout} />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.large,
    alignItems: "center",
  },
});

export default ProfileScreen;

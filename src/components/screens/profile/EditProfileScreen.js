import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button, ButtonTray } from "../../UI/Button";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const EditProfileScreen = ({ route, navigation }) => {
  const { profileData, onSave } = route.params;
  const [profile, setProfile] = useState(profileData);

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleSave = () => {
    onSave(profile);
    navigation.goBack();
  };

  return (
    //  Views
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      {/* 🔹 Input Fields with Labels */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={profile.UserFirstName}
          onChangeText={(value) => handleChange("UserFirstName", value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={profile.UserLastName}
          onChangeText={(value) => handleChange("UserLastName", value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={String(profile.Age)}
          onChangeText={(value) => handleChange("Age", value)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height</Text>
        <TextInput
          style={styles.input}
          value={profile.Height}
          onChangeText={(value) => handleChange("Height", value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          value={profile.Weight}
          onChangeText={(value) => handleChange("Weight", value)}
          keyboardType="numeric"
        />
      </View>

      {/*Save & Cancel Buttons */}
      <ButtonTray>
        <Button label="Save" onPress={handleSave} style={styles.buttonSave} />
        <Button
          label="Cancel"
          onPress={() => navigation.goBack()}
          style={styles.buttonCancel}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.large,
  },
  header: {
    ...FONTS.header,
    color: COLORS.bodyText,
    marginBottom: SPACING.medium,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: SPACING.medium,
  },
  label: {
    ...FONTS.body,
    color: COLORS.bodyText,
    marginBottom: SPACING.small,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: 8,
    paddingHorizontal: SPACING.small,
    backgroundColor: COLORS.inputBackground,
    fontSize: 16,
    color: COLORS.inputText, // Ensure text is visible
  },
  buttonSave: {
    flex: 1,
    backgroundColor: COLORS.buttonBackground,
    paddingVertical: SPACING.medium,
  },
  buttonCancel: {
    flex: 1,
    backgroundColor: COLORS.buttonDangerBackground,
    paddingVertical: SPACING.medium,
  },
});

export default EditProfileScreen;

import React from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Button, ButtonTray } from "../../UI/Button";
import { COLORS, FONTS, SPACING } from "../../../config/theme";

const UserView = ({ user, onDelete }) => {
  const handleDelete = () => {
    Alert.alert(
      "Delete Friend",
      `Are you sure you want to remove ${user.UserName}?`,
      [{ text: "Cancel" }, { text: "Delete", onPress: () => onDelete(user) }]
    );
  };

  return (
    <View style={styles.container}>
      {/* Display User Image */}
      {user.UserImageURL && (
        <Image source={{ uri: user.UserImageURL }} style={styles.image} />
      )}
      {/* Display User Details */}
      <Text style={styles.name}>{user.UserName}</Text>
      <Text style={styles.email}>{user.UserEmail}</Text>

      {/* Buttons */}
      <ButtonTray>
        <Button label="Delete Friend" onPress={handleDelete} variant="delete" />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: SPACING.medium,
    backgroundColor: COLORS.background,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: SPACING.medium,
  },
  name: {
    ...FONTS.header,
    color: COLORS.primaryText,
    marginBottom: SPACING.small,
  },
  email: {
    ...FONTS.body,
    color: COLORS.secondaryText,
    marginBottom: SPACING.large,
  },
});

export default UserView;

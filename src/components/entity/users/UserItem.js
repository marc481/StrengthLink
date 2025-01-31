import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SPACING } from "../../../config/theme";

const UserItem = ({ user, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelect(user)}>
      <Image source={{ uri: user.UserImageURL }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{user.UserName}</Text>
        <Text style={styles.email}>{user.UserEmail}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: SPACING.medium,
  },
  info: {
    flex: 1,
  },
  name: {
    ...FONTS.body,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },
  email: {
    ...FONTS.caption,
    color: COLORS.secondaryText,
  },
});

export default UserItem;

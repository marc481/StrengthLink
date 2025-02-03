import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SPACING, COLORS, FONTS } from "../../../config/theme";

const placeholderImage =
  "https://cdn2.psychologytoday.com/assets/styles/manual_crop_16_9_1200x675/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=07tF_dnG"; // Fallback image

const UserList = ({ users, onSelect }) => {
  return (
    <View style={styles.listContainer}>
      {users.map((user) => (
        <TouchableOpacity
          key={user.UserID}
          style={styles.userItem}
          onPress={() => onSelect(user)}
        >
          <Image
            source={{ uri: user.UserImageURL || placeholderImage }}
            style={styles.avatar}
          />
          <Text style={styles.username}>{user.UserName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.small,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: SPACING.small,
    backgroundColor: COLORS.inputBackground,
  },
  username: {
    ...FONTS.body,
    color: COLORS.bodyText,
  },
});

export default UserList;

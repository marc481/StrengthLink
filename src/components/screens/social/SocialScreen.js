import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import UserList from "../../entity/users/UserList";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import Icons from "../../UI/icons";

const SocialScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [friends, setFriends] = useState([]); // Stores only added friends

  const gotoAddFriendScreen = () => {
    navigation.navigate("AddFriendScreen", {
      onAddFriend: (newFriend) => {
        setFriends((prev) => {
          if (!prev.some((f) => f.UserID === newFriend.UserID)) {
            return [...prev, newFriend];
          }
          return prev;
        });
      },
    });
  };

  // Filter friends list for display
  const filteredFriends = friends.filter(
    (friend) =>
      friend.UserFirstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      friend.UserLastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      friend.UserName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectFriend = (friend) => {
    navigation.navigate("FriendDetailScreen", {
      friend,
      onDelete: (friendToDelete) =>
        setFriends((prev) =>
          prev.filter((f) => f.UserID !== friendToDelete.UserID)
        ),
    });
  };

  return (
    <View style={styles.container}>
      {/* 🔍 Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Friends..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Icons.Search color={COLORS.buttonBackground} size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoAddFriendScreen}>
          <Icons.Add color={COLORS.buttonBackground} size={24} />
        </TouchableOpacity>
      </View>

      {/* List of Friends */}
      <UserList users={filteredFriends} onSelect={handleSelectFriend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.medium,
    backgroundColor: COLORS.background,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.medium,
  },
  searchInput: {
    flex: 1,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: SPACING.small,
    padding: SPACING.small,
    marginRight: SPACING.small,
    ...FONTS.body,
  },
  searchButton: {
    padding: SPACING.small,
    backgroundColor: COLORS.primary,
    borderRadius: SPACING.small,
    marginRight: SPACING.small,
  },
});

export default SocialScreen;

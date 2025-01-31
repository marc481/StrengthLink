import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import UserList from "../../entity/users/UserList";
import { COLORS, SPACING, FONTS } from "../../../config/theme";
import Icons from "../../UI/icons";
import initialUsers from "../../../data/users";

const SocialScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [friends, setFriends] = useState(initialUsers);

  // Handlers
  const handleSearch = () => {
    const filteredFriends = initialUsers.filter(
      (friend) =>
        friend.UserFirstName.toLowerCase().includes(
          searchQuery.toLowerCase()
        ) ||
        friend.UserLastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        friend.UserName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFriends(filteredFriends);
  };

  const gotoAddFriendScreen = () => {
    navigation.navigate("AddFriendScreen", {
      onAddFriend: (newFriend) => setFriends((prev) => [...prev, newFriend]),
    });
  };

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
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Friends..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Icons.Search color={COLORS.buttonBackground} size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoAddFriendScreen}>
          <Icons.Add color={COLORS.buttonBackground} size={24} />
        </TouchableOpacity>
      </View>
      <UserList users={friends} onSelect={handleSelectFriend} />
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
  addButton: {
    padding: SPACING.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SPACING.small,
  },
  sectionHeader: {
    ...FONTS.header,
    marginBottom: SPACING.small,
    color: COLORS.primaryText,
  },
});

export default SocialScreen;

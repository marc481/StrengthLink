import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Screen from "../../layout/Screen";
import UserList from "../../entity/users/UserList";
import initialUsers from "../../../data/users";
import { COLORS, SPACING, FONTS, STYLES } from "../../../config/theme"; // ✅ Import STYLES
import Icons from "../../UI/icons";

const AddFriendScreen = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = initialUsers.filter((user) =>
        user.UserName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(results);
    } else {
      setFilteredUsers([]);
    }
  };

  const handleSelectUser = (friend) => {
    route.params?.onAddFriend?.(friend);
  };

  const handleAddFriend = () => {
    if (filteredUsers.length === 1) {
      handleSelectUser(filteredUsers[0]);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/*  Header */}
      <Text style={styles.header}>Search Friends</Text>

      {/*  Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Username"
          placeholderTextColor={COLORS.mutedText}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => handleSearch(searchQuery)}
        >
          <Icons.Search color={COLORS.bodyText} size={20} />
        </TouchableOpacity>
      </View>

      {/*  Display Search Results */}
      <UserList users={filteredUsers} onSelect={handleSelectUser} />

      {/*  Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddFriend}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.container,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    ...FONTS.header,
    marginBottom: SPACING.medium,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: SPACING.small,
    paddingHorizontal: SPACING.small,
    backgroundColor: COLORS.inputBackground,
    marginBottom: SPACING.medium,
  },
  searchInput: {
    flex: 1,
    height: 40,
    ...FONTS.body,
    paddingHorizontal: SPACING.small,
  },
  searchButton: {
    padding: SPACING.small,
  },
  buttonContainer: {
    ...STYLES.buttonTray,
    marginTop: SPACING.medium,
    width: "80%",
  },
  addButton: {
    flex: 1,
    backgroundColor: COLORS.buttonBackground,
    padding: SPACING.medium,
    borderRadius: SPACING.small,
    alignItems: "center",
    marginRight: SPACING.small,
  },
  addButtonText: {
    ...FONTS.button,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: COLORS.buttonDangerBackground,
    padding: SPACING.medium,
    borderRadius: SPACING.small,
    alignItems: "center",
  },
  cancelButtonText: {
    ...FONTS.button,
  },
});

export default AddFriendScreen;

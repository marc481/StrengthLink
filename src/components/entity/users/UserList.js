import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import UserItem from "./UserItem";

const UserList = ({ users = [], onSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {users.map((user) => (
        <UserItem key={user.UserID} user={user} onSelect={onSelect} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default UserList;

import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../layout/Screen";
import Button from "../UI/Button";

const HomeScreen = ({ navigation }) => {
  // Static List of HomeScreen options
  const options = [
    { id: "1", label: "Start Workout", screen: "WorkoutScreen" },
    { id: "2", label: "Progress", screen: "ProgressScreen" },
    { id: "3", label: "Socials", screen: "SocialScreen" },
    { id: "4", label: "Profile", screen: "ProfileScreen" },
  ];

  const renderItem = ({ item }) => (
    <Button
      label={item.label}
      onPress={() => navigation.navigate(item.screen)}
      styleButton={styles.button}
    />
  );

  return (
    <Screen>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10, // Add space between buttons
  },
});

export default HomeScreen;

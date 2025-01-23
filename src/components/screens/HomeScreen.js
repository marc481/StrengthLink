import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, ButtonTray } from "../UI/Button";
import Screen from "../layout/Screen";

const HomeScreen = ({ navigation }) => {
  return (
    <Screen>
      <ButtonTray>
        <Button
          label="Workout"
          onPress={() =>
            navigation.navigate("FooterNavigator", { screen: "Workout" })
          }
        />
        <Button
          label="Socials"
          onPress={() =>
            navigation.navigate("FooterNavigator", { screen: "Social" })
          }
        />
        <Button
          label="Progress"
          onPress={() =>
            navigation.navigate("FooterNavigator", { screen: "Progress" })
          }
        />
        <Button
          label="Profile"
          onPress={() =>
            navigation.navigate("FooterNavigator", { screen: "Profile" })
          }
        />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonTray: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
  },
});

export default HomeScreen;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SocialScreen from "../screens/social/SocialScreen";
import AddFriendScreen from "../screens/social/AddFriendScreen";
import FriendDetailScreen from "../screens/social/FriendDetailScreen";

const Stack = createNativeStackNavigator();

const SocialNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SocialScreen"
        component={SocialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddFriendScreen"
        component={AddFriendScreen}
        options={{ title: "Add Friend" }}
      />
      <Stack.Screen
        name="FriendDetailScreen"
        component={FriendDetailScreen}
        options={{ title: "Friend Details" }}
      />
    </Stack.Navigator>
  );
};

export default SocialNavigator;

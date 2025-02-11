import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/profile/ProfileScreen";
import EditProfileScreen from "../screens/profile/EditProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Main Profile Screen */}
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      {/* Edit Profile Screen */}
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

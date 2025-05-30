import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen, SignUpScreen } from "../screens/SignInSignUpScreens";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

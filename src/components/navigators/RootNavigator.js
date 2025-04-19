import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthNavigator from "./AuthNavigator";
import FooterNavigator from "./FooterNavigator";

const RootStack = createStackNavigator();

export default function RootNavigator() {
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("currentUser")
      .then((stored) => setSignedIn(!!stored))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={signedIn ? "Main" : "Auth"}
    >
      <RootStack.Screen name="Auth" component={AuthNavigator} />
      <RootStack.Screen name="Main" component={FooterNavigator} />
    </RootStack.Navigator>
  );
}

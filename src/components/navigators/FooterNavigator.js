import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorkoutNavigator from "./WorkoutNavigator";
import SocialScreen from "../screens/social/SocialScreen";
import ProgressScreen from "../screens/progress/ProgressScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import HomeScreen from "../screens/home/HomeScreen";
import { COLORS } from "../../config/theme";
import Icons from "../UI/icons";
import SocialNavigator from "./SocialNavigator";

const Tab = createBottomTabNavigator();

const FooterNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.headerBackground },
        headerTintColor: COLORS.headerText,
        tabBarStyle: { backgroundColor: COLORS.footerBackground },
        tabBarActiveTintColor: COLORS.footerActiveText,
        tabBarInactiveTintColor: COLORS.footerInactiveText,
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icons.Home color={color} size={size} />
          ),
          tabBarStyle: { display: "none" },
          headerShown: true,
        }}
      />

      {/* Workout Tab */}
      <Tab.Screen
        name="Workout"
        component={WorkoutNavigator}
        options={{
          title: "Workout",
          tabBarIcon: ({ color, size }) => (
            <Icons.Workout color={color} size={size} />
          ),
        }}
      />

      {/* Social Tab */}
      <Tab.Screen
        name="Social"
        component={SocialNavigator}
        options={{
          title: "Socials",
          tabBarIcon: ({ color, size }) => (
            <Icons.Social color={color} size={size} />
          ),
          headerShown: true,
        }}
      />

      {/* Progress Tab */}
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          title: "Progress",
          tabBarIcon: ({ color, size }) => (
            <Icons.Progress color={color} size={size} />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icons.Profile color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default FooterNavigator;

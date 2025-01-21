import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "./src/config/theme";
import HomeScreen from "./src/components/screens/HomeScreen";
import ProfileScreen from "./src/components/screens/ProfileScreen";
import WorkoutScreen from "./src/components/screens/WorkoutScreen";
import SocialScreen from "./src/components/screens/SocialScreen";
import ProgressScreen from "./src/components/screens/ProgressScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.headerBackground },
          headerTintColor: COLORS.headerText,
          headerTitleAlign: "center",
        }}
      >
        {/* Home Screen */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "StrengthLink" }}
        />

        {/* Workout Screen */}
        <Stack.Screen
          name="WorkoutScreen"
          component={WorkoutScreen}
          options={{ title: "Workout" }}
        />

        {/* Progress Screen */}
        <Stack.Screen
          name="ProgressScreen"
          component={ProgressScreen}
          options={{ title: "Progress" }}
        />

        {/* Social Screen */}
        <Stack.Screen
          name="SocialScreen"
          component={SocialScreen}
          options={{ title: "Socials" }}
        />

        {/* Profile Screen */}
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

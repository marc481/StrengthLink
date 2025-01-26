import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FooterNavigator from "./src/components/navigators/FooterNavigator";
import { COLORS } from "./src/config/theme";

export const App = () => {
  return (
    <NavigationContainer>
      <FooterNavigator />
    </NavigationContainer>
  );
};

export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ComponentScreen from "./src/components/ComponentScreen";

export default function App() {
  return (
    <NavigationContainer>
      <ComponentScreen />
    </NavigationContainer>
  );
}

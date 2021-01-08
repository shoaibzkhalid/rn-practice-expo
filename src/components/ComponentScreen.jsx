import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";

export default class ComponentScreen extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              //   options={{ headerShown: false }}
            />
          </>
          )
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
